import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const TEXT_MODEL = process.env.GROQ_TEXT_MODEL || "llama-3.3-70b-versatile";
const VISION_MODEL = process.env.GROQ_VISION_MODEL || "qwen/qwen3.6-27b";

app.use(express.json({ limit: "12mb" }));
app.use(express.static(path.join(__dirname, "public")));

async function callGroq(model, messages, extra = {}) {
  if (!GROQ_API_KEY) {
    throw new Error(
      "GROQ_API_KEY tanimli degil. Lutfen .env dosyasina anahtarinizi ekleyin."
    );
  }

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.1,
      max_tokens: 1024,
      response_format: { type: "json_object" },
      ...extra,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    try {
      const parsed = JSON.parse(detail);
      const failed = parsed?.error?.failed_generation;
      if (failed) return safeParse(failed);
    } catch {
      /* ignore */
    }
    throw new Error(`Groq API hatasi (${res.status}): ${detail}`);
  }

  const data = await res.json();
  const raw = data?.choices?.[0]?.message?.content ?? "{}";
  return safeParse(raw);
}

function safeParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    const match = raw.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch {
        /* ignore */
      }
    }
    return {
      verdict: "uncertain",
      confidence: 0,
      explanation: "Yanit ayristirilamadi.",
      indicators: [],
    };
  }
}

function normalize(result, lang = "tr") {
  const verdictRaw = String(result.verdict || "uncertain").toLowerCase();
  let verdict = "uncertain";
  if (["ai", "yapay", "yapay zeka", "ai-generated"].some((v) => verdictRaw.includes(v)))
    verdict = "ai";
  else if (["human", "insan", "gercek", "real"].some((v) => verdictRaw.includes(v)))
    verdict = "human";

  let confidence = Number(result.confidence);
  if (!Number.isFinite(confidence)) confidence = 50;
  confidence = Math.max(0, Math.min(100, Math.round(confidence)));

  const noExplain = lang === "en" ? "No explanation found." : "Aciklama bulunamadi.";

  return {
    verdict,
    confidence,
    explanation: String(result.explanation || noExplain).trim(),
    indicators: Array.isArray(result.indicators)
      ? result.indicators.map((i) => String(i)).slice(0, 6)
      : [],
  };
}

const TEXT_SYSTEM = `Sen yapay zeka uretimi metinleri tespit eden uzman bir adli dilbilim analistisin.
Verilen metnin bir yapay zeka (ChatGPT, Claude, Gemini vb.) tarafindan mi yoksa bir insan tarafindan mi yazildigini analiz et.

Su ipuclarina dikkat et:
- Asiri duzenli, sablonvari cumle yapisi ve gecis ifadeleri ("Ayrica", "Sonuc olarak", "Ozetle")
- Yapay dengelenmis, risk almayan, klise ifadeler
- Kisisel deneyim, yazim hatasi, dogal duzensizlik eksikligi
- Asiri resmi veya asiri cilali ton
- Tekrar eden kaliplar ve liste sevdasi
- Insan yazisinda: dogal hatalar, ozgun ses, tutarsizlik, argo, duygusal nuans

SADECE su JSON formatinda yanit ver, baska hicbir sey yazma:
{
  "verdict": "ai" | "human" | "uncertain",
  "confidence": 0-100 arasi bir sayi (verdict'e olan guvenin),
  "explanation": "Turkce, 2-3 cumlelik net gerekce",
  "indicators": ["tespit ettigin somut ipucu 1", "ipucu 2", "ipucu 3"]
}

ONEMLI: String degerlerin ICINDE asla cift tirnak (") kullanma. Bir kelimeyi vurgulaman gerekirse tek tirnak (') kullan. Aksi halde JSON bozulur.`;

const VISION_SYSTEM = `Sen yapay zeka uretimi gorselleri tespit eden uzman bir goruntu adli analistisin.
Verilen gorselin bir yapay zeka (Midjourney, DALL-E, Stable Diffusion, Flux, Sora, Nano Banana vb.) tarafindan mi uretildigini yoksa gercek bir fotograf/insan yapimi bir eser mi oldugunu analiz et.

CALISMA YONTEMI: Once gorseli bolge bolge (yuz, eller, gozler, sac, arka plan, yazilar, dokular, isik) titizce incele. Aceleci karar VERME. Modern AI gorselleri ilk bakista cok gercekci gorunur; ust duzey kusurlari ancak dikkatli bakinca fark edilir. Bu yuzden VARSAYILAN olarak supheci ol.

Yapay zeka isaretleri (bunlardan BIRI bile varsa guclu AI sinyalidir):
- Anatomik hatalar: fazla/eksik/kaynasmis parmaklar, garip eller, bozuk disler, asimetrik kulaklar/gozler
- Ciltte asiri puruzsuz, gozeneksiz "plastik/airbrush" doku; kusursuz simetrik yuz
- Gozlerde/taki/gozlukte tutarsiz yansimalar; iki gozun farkli bakmasi
- Arka planda anlamsiz/eriyen detaylar, bozuk veya uydurma yazi/harfler
- Sac tellerinin, kumas dokusunun, mucevherin "cizilmis" gibi gerceklik disi olmasi
- Tutarsiz isik yonu ve golgeler; fiziksel olarak imkansiz yansimalar
- Asiri "mukemmel" kompozisyon, stüdyo pozu, dijital sanat/render havasi, asiri doygun renkler

Gercek foto isaretleri: dogal sensör gurultusu, hafif odak/pozlama kusurlari, tutarli fizik, sıradan/dagilik detaylar, dogal cilt gozenekleri.

KALIBRASYON: Yukaridaki AI isaretlerinden en az birini net goruyorsan verdict="ai" ver ve confidence>=80 kullan. Hicbir AI izi yoksa ve foto dogal kusurlar tasiyorsa verdict="human". Emin olamiyorsan verdict="uncertain" ve confidence 40-60. Kolaya kacip her gorsele "human" DEME.

SADECE su JSON formatinda yanit ver, baska hicbir sey yazma:
{
  "verdict": "ai" | "human" | "uncertain",
  "confidence": 0-100 arasi bir sayi,
  "explanation": "Turkce, 2-3 cumlelik net gerekce",
  "indicators": ["somut gorsel ipucu 1", "ipucu 2", "ipucu 3"]
}

ONEMLI: String degerlerin ICINDE asla cift tirnak (") kullanma. Bir kelimeyi vurgulaman gerekirse tek tirnak (') kullan. Aksi halde JSON bozulur.`;

const TEXT_SYSTEM_EN = `You are an expert forensic linguistics analyst who detects AI-generated text.
Analyze whether the given text was written by an artificial intelligence (ChatGPT, Claude, Gemini, etc.) or by a human.

Watch for these clues:
- Overly orderly, templated sentence structure and transition phrases ("Furthermore", "In conclusion", "In summary")
- Artificially balanced, risk-averse, cliche phrasing
- Lack of personal experience, typos, natural messiness
- Excessively formal or overly polished tone
- Repeating patterns and a fondness for lists
- In human writing: natural errors, an original voice, inconsistency, slang, emotional nuance

Respond ONLY in the following JSON format, write nothing else:
{
  "verdict": "ai" | "human" | "uncertain",
  "confidence": a number 0-100 (your confidence in the verdict),
  "explanation": "clear 2-3 sentence justification, in English",
  "indicators": ["concrete clue 1 you detected", "clue 2", "clue 3"]
}

IMPORTANT: Never use double quotes (") INSIDE string values. If you must emphasize a word, use a single quote ('). Otherwise the JSON breaks.`;

const VISION_SYSTEM_EN = `You are an expert image forensics analyst who detects AI-generated images.
Analyze whether the given image was produced by an artificial intelligence (Midjourney, DALL-E, Stable Diffusion, Flux, Sora, Nano Banana, etc.) or is a real photograph / human-made work.

METHOD: First inspect the image region by region (face, hands, eyes, hair, background, text, textures, lighting) carefully. Do NOT rush to a decision. Modern AI images look very realistic at first glance; high-level flaws only become apparent on close inspection. So be skeptical by DEFAULT.

AI markers (even ONE of these is a strong AI signal):
- Anatomical errors: extra/missing/fused fingers, strange hands, broken teeth, asymmetric ears/eyes
- Overly smooth, poreless "plastic/airbrush" skin texture; a flawlessly symmetric face
- Inconsistent reflections in eyes/jewelry/glasses; the two eyes looking in different directions
- Meaningless/melting details in the background, broken or made-up text/letters
- Hair strands, fabric texture, jewelry looking unrealistically "drawn"
- Inconsistent light direction and shadows; physically impossible reflections
- Overly "perfect" composition, studio pose, digital-art/render feel, oversaturated colors

Real-photo markers: natural sensor noise, slight focus/exposure imperfections, consistent physics, ordinary/messy details, natural skin pores.

CALIBRATION: If you clearly see at least one of the AI markers above, give verdict="ai" and use confidence>=80. If there is no AI trace and the photo carries natural imperfections, give verdict="human". If you can't be sure, give verdict="uncertain" and confidence 40-60. Do NOT take the easy way out and label every image "human".

Respond ONLY in the following JSON format, write nothing else:
{
  "verdict": "ai" | "human" | "uncertain",
  "confidence": a number 0-100,
  "explanation": "clear 2-3 sentence justification, in English",
  "indicators": ["concrete visual clue 1", "clue 2", "clue 3"]
}

IMPORTANT: Never use double quotes (") INSIDE string values. If you must emphasize a word, use a single quote ('). Otherwise the JSON breaks.`;

const pickLang = (req) => (String(req.body?.lang).toLowerCase() === "en" ? "en" : "tr");

app.post("/api/analyze-text", async (req, res) => {
  const lang = pickLang(req);
  try {
    const text = (req.body?.text || "").trim();
    if (text.length < 20) {
      return res.status(400).json({
        error:
          lang === "en"
            ? "Please enter at least 20 characters of text."
            : "Lutfen en az 20 karakterlik bir metin girin.",
      });
    }

    const system = lang === "en" ? TEXT_SYSTEM_EN : TEXT_SYSTEM;
    const userPrefix =
      lang === "en" ? "Text to analyze:" : "Analiz edilecek metin:";

    const result = await callGroq(TEXT_MODEL, [
      { role: "system", content: system },
      { role: "user", content: `${userPrefix}\n\n"""${text}"""` },
    ]);

    res.json({ ...normalize(result, lang), model: TEXT_MODEL });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/analyze-image", async (req, res) => {
  const lang = pickLang(req);
  try {
    const image = req.body?.image;
    if (!image || !/^data:image\//.test(image)) {
      return res.status(400).json({
        error:
          lang === "en"
            ? "Please send a valid image (base64 data URL)."
            : "Gecerli bir gorsel (base64 data URL) gonderin.",
      });
    }

    const system = lang === "en" ? VISION_SYSTEM_EN : VISION_SYSTEM;

    const result = await callGroq(
      VISION_MODEL,
      [
        {
          role: "user",
          content: [
            { type: "text", text: system },
            { type: "image_url", image_url: { url: image } },
          ],
        },
      ],
      { reasoning_format: "parsed", max_tokens: 3072 }
    );

    res.json({ ...normalize(result, lang), model: VISION_MODEL });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, keyConfigured: Boolean(GROQ_API_KEY) });
});

app.listen(PORT, () => {
  console.log(`\n  AI Detector calisiyor:  http://localhost:${PORT}`);
  console.log(`  Groq anahtari: ${GROQ_API_KEY ? "tanimli ✓" : "EKSIK ✗ (.env)"}\n`);
});
