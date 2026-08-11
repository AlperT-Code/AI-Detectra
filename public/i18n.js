/* Detectra i18n — TR / EN dil desteği */
const I18N_STRINGS = {
  tr: {
    // <head>
    meta_title_home: "Detectra — Yapay Zeka Denetim Aracı",
    meta_desc:
      "Metin ve görsellerin yapay zeka tarafından üretilip üretilmediğini saniyeler içinde tespit et. Groq ile güçlendirilmiş, gizli ve ücretsiz.",

    // Navigation / topbar
    nav_home: "Ana Sayfa",
    nav_tool: "Denetim",
    nav_about: "Hakkımda",
    nav_faq: "SSS",
    nav_terms: "Şartlar",
    nav_contact: "İletişim",
    nav_cta: "Denetle",
    lang_toggle_label: "Dili değiştir",

    // Status pill
    status_connecting: "Groq bağlanıyor…",
    status_connected: "Groq bağlı",
    status_missing: "API anahtarı eksik",
    status_unreachable: "Sunucuya ulaşılamadı",

    // Home / hero
    hero_badge: "⚡ Groq ile güçlendirildi",
    hero_tagline:
      'Bunu <span class="grad">yapay zeka</span> mı yoksa <span class="grad-2">insan</span> mı yaptı?',
    hero_sub:
      "Detectra, metin ve görsellerin yapay zeka tarafından üretilip üretilmediğini saniyeler içinde analiz eder; sana güven skoru ve somut ipuçları sunar.",
    hero_cta1: "Hemen Denetle",
    hero_cta2: "Nasıl çalışır?",
    stat_num2: "~2sn",
    stat_num3: "%100",
    stat_lbl1: "AI modeli",
    stat_lbl2: "ortalama analiz",
    stat_lbl3: "tarayıcıda, kayıtsız",

    // Home / how it works
    eyebrow_how: "Nasıl çalışır",
    how_h: "Üç adımda sonuç",
    step1_h: "İçeriği ver",
    step1_p:
      "Analiz etmek istediğin metni yapıştır ya da görseli sürükleyip bırak. Hiçbir kayıt tutulmaz.",
    step2_h: "Model analiz eder",
    step2_p:
      "Groq üzerinde çalışan gelişmiş modeller, üslup ve görsel kusurları adli bir titizlikle inceler.",
    step3_h: "Skor ve ipuçları",
    step3_p:
      "Yapay zeka mı insan mı olduğunu, güven yüzdesini ve tespit edilen somut ipuçlarını görürsün.",

    // Home / features
    eyebrow_feat: "Özellikler",
    feat_h: "Detectra ne sunar?",
    feat1_h: "Metin denetimi",
    feat1_p:
      "Kalıplaşmış cümleler, aşırı cila ve yapay denge gibi AI imzalarını yakalar.",
    feat2_h: "Görsel denetimi",
    feat2_p:
      "Anatomik hatalar, plastik dokular ve tutarsız ışık gibi ipuçlarını analiz eder.",
    feat3_h: "Güven skoru",
    feat3_p:
      "Her sonuç, animasyonlu bir güven halkasıyla 0–100 arası bir yüzdeyle gelir.",
    feat4_h: "Gizlilik odaklı",
    feat4_p:
      "Gönderdiğin içerik veritabanına yazılmaz; yalnızca anlık analiz için işlenir.",
    feat5_h: "Groq hızı",
    feat5_p:
      "Groq'un düşük gecikmeli altyapısı sayesinde sonuçlar saniyeler içinde döner.",
    feat6_h: "Somut ipuçları",
    feat6_p:
      "Sadece bir etiket değil; kararın arkasındaki gerekçeleri madde madde gösterir.",

    // Home / CTA band
    cta_h: "Şüphelendiğin içeriği hemen denetle",
    cta_p: "Kurulum yok, kayıt yok. Yapıştır, sürükle, öğren.",
    cta_btn: "Denetime Başla",

    // Tool page
    eyebrow_tool: "Denetim aracı",
    tool_h: "İçeriğini analiz et",
    tool_p:
      "Metni yapıştır ya da görseli sürükle. Saniyeler içinde detaylı bir analiz, güven skoru ve somut ipuçları al.",
    tab_text: "Metin Denetimi",
    tab_image: "Görsel Denetimi",
    panel_text_h: "Metni buraya yapıştır",
    char_unit: "karakter",
    text_ph:
      "Analiz etmek istediğin yazıyı buraya yapıştır… (en az 20 karakter)",
    sample_btn: "Örnek metin dene",
    analyze_btn: "Denetle",
    dz_empty: "<strong>Görseli sürükle</strong> ya da seçmek için tıkla",
    dz_hint: "PNG, JPG, WEBP · maks. 10 MB",
    dz_aria: "Görsel yükle",
    result_empty_h: "Sonuçlar burada görünecek",
    result_empty_p: "Analiz için içerik gönder",
    ring_lbl: "güven",
    tool_note:
      "Detectra bir tahmin aracıdır — sonuçlar kesin kanıt değil, olasılık tabanlı bir değerlendirmedir.",

    // Verdict labels
    verdict_ai: "Yapay Zeka",
    verdict_human: "İnsan Yapımı",
    verdict_uncertain: "Belirsiz",
    result_model: "Model",

    // Sample text
    sample_text:
      "Yapay zeka teknolojileri, günümüzde birçok sektörde devrim niteliğinde değişimlere yol açmaktadır. Öncelikle, sağlık alanında hastalıkların erken teşhisinde önemli katkılar sağlamaktadır. Ayrıca, eğitim sektöründe kişiselleştirilmiş öğrenme deneyimleri sunmaktadır. Sonuç olarak, yapay zekanın gelecekte hayatımızın vazgeçilmez bir parçası olacağı açıkça görülmektedir.",

    // Toast / error messages
    err_min_chars: "Lütfen en az 20 karakterlik bir metin girin.",
    err_not_image: "Lütfen bir görsel dosyası seçin.",
    err_too_big: "Görsel 10 MB'den küçük olmalı.",
    err_unknown: "Bilinmeyen hata",

    // About page
    eyebrow_about: "Hakkımda",
    about_h: "Detectra'nın arkasındaki hikâye",
    about_p:
      "Yapay zekanın ürettiği içerik günden güne artıyor. Detectra, bu içeriği ayırt etmeyi herkes için basit ve erişilebilir kılmak için geliştirildi.",
    about_role: "Geliştirici · Detectra'nın kurucusu",
    about_bio:
      "Yapay zeka ve web teknolojilerine ilgi duyan bir geliştiriciyim. Detectra'yı, yapay zeka üretimi metin ve görsellerin gerçeklerden ayırt edilmesinin giderek zorlaştığını fark ettiğim için geliştirdim. Amacım; karmaşık modelleri sade, hızlı ve herkesin kullanabileceği bir araca dönüştürmek.",
    about_mission_h: "Misyonumuz",
    about_mission_p:
      "Yapay zeka artık haber metinlerinden ödevlere, sosyal medya görsellerinden reklamlara kadar her yerde. Neyin insan neyin makine üretimi olduğunu bilmek, medya okuryazarlığının yeni bir parçası hâline geldi. Detectra bu farkındalığı güçlendirmeyi hedefler — suçlamak için değil, bilgilendirmek için.",
    about_how_h: "Nasıl çalışıyor?",
    about_how_p:
      "Detectra, tarayıcından gelen içeriği kendi sunucusu üzerinden Groq'un yüksek hızlı çıkarım altyapısına iletir. Metinler için gelişmiş bir dil modeli üslup analizini; görseller için ise bir görüntü modeli anatomik ve dokusal tutarlılığı inceler. Model, adli bir analist gibi düşünür ve kararını güven yüzdesiyle birlikte gerekçelendirir.",
    about_tech_h: "Kullandığımız teknolojiler",
    tech1: "<strong>Node.js + Express</strong> — hafif ve hızlı sunucu",
    tech2: "<strong>Groq API</strong> — düşük gecikmeli AI çıkarımı",
    tech3: "<strong>Saf HTML/CSS/JS</strong> — çerçevesiz, hızlı arayüz",
    about_trans_h: "Şeffaflık",
    about_trans_p:
      "Hiçbir tespit aracı kusursuz değildir. Detectra sonuçları bir olasılık değerlendirmesidir ve kesin kanıt olarak kullanılmamalıdır. Aracı sürekli geliştirmeye devam ediyoruz.",
    about_cta_h: "Bir sorun mu var, bir fikrin mi?",
    about_cta_p: "Geri bildirimlerin Detectra'yı daha iyi yapıyor.",
    about_cta_btn: "İletişime Geç",

    // FAQ page
    eyebrow_faq: "Sıkça sorulan sorular",
    faq_h: "Aklına takılanlar",
    faq_p:
      "Detectra hakkında en çok merak edilenleri burada topladık. Cevabını bulamadığın bir soru varsa bize yazabilirsin.",
    faq_q1: "Detectra nedir?",
    faq_a1:
      "Detectra; bir metnin veya görselin yapay zeka tarafından mı yoksa bir insan tarafından mı üretildiğini tahmin eden ücretsiz bir denetim aracıdır. Sonuçları bir güven skoru ve somut ipuçlarıyla birlikte sunar.",
    faq_q2: "Sonuçlar ne kadar doğru?",
    faq_a2:
      "Detectra olasılık temelli çalışır. Belirgin yapay zeka işaretleri taşıyan içeriklerde oldukça isabetlidir; ancak çok iyi düzenlenmiş metinlerde veya son derece gerçekçi görsellerde yanılabilir. Sonuçları kesin bir kanıt değil, güçlü bir ipucu olarak değerlendir.",
    faq_q3: "Gönderdiğim içerik saklanıyor mu?",
    faq_a3:
      "Hayır. Girdiğin metin ve görseller yalnızca anlık analiz için işlenir; bir veritabanına kaydedilmez. Analiz tamamlandıktan sonra içerik sunucuda tutulmaz.",
    faq_q4: "Hangi yapay zeka modellerini kullanıyorsunuz?",
    faq_a4:
      "Metin analizi için Groq üzerinde çalışan gelişmiş bir dil modeli, görsel analizi için ise bir görüntü (vision) modeli kullanılır. Modeller, hız ve doğruluk dengesine göre zaman zaman güncellenebilir.",
    faq_q5: "Detectra ücretsiz mi?",
    faq_a5:
      "Evet, Detectra'yı kullanmak tamamen ücretsizdir. Herhangi bir kayıt veya kredi kartı gerektirmez.",
    faq_q6: "Hangi dosya türlerini yükleyebilirim?",
    faq_a6:
      "Görsel denetiminde PNG, JPG ve WEBP formatlarını, en fazla 10 MB boyutunda destekliyoruz. Metin denetiminde ise en az 20 karakterlik bir yazı girmen yeterli.",
    faq_q7: "Sonucu resmi bir kanıt olarak kullanabilir miyim?",
    faq_a7:
      "Hayır. Detectra bir yardımcı araçtır ve akademik, hukuki veya mesleki bir karar için tek başına dayanak oluşturmaz. Nihai değerlendirmeyi her zaman bir insan yapmalıdır.",

    // Terms page
    eyebrow_terms: "Yasal",
    terms_h: "Kullanım Şartları & Gizlilik",
    terms_updated: "Son güncelleme: 11 Ağustos 2026",
    terms_1_h: "1. Hizmetin tanımı",
    terms_1_p:
      'Detectra ("Hizmet"), kullanıcıların girdiği metin ve görsellerin yapay zeka tarafından üretilip üretilmediğine dair olasılık temelli bir değerlendirme sunan bir web aracıdır. Hizmeti kullanarak bu şartları kabul etmiş sayılırsın.',
    terms_2_h: "2. Sonuçların niteliği",
    terms_2_p:
      "Detectra tarafından üretilen tüm sonuçlar tahmindir ve %100 doğruluk garantisi vermez. Sonuçlar; akademik, hukuki, mesleki ya da disiplin amaçlı kararlarda tek başına delil olarak kullanılamaz. Hizmetin sağladığı bilgilere dayanarak alınan kararların sorumluluğu tamamen kullanıcıya aittir.",
    terms_3_h: "3. Kabul edilebilir kullanım",
    terms_3_p: "Hizmeti kullanırken aşağıdakileri yapmamayı kabul edersin:",
    terms_3_li1:
      "Yasa dışı, zararlı veya başkalarının haklarını ihlal eden içerik yüklemek,",
    terms_3_li2: "Hizmeti otomatik/aşırı isteklerle kötüye kullanmak veya aksatmak,",
    terms_3_li3:
      "Sonuçları birini taciz, iftira veya haksız suçlama için kullanmak,",
    terms_3_li4:
      "Sana ait olmayan ve paylaşım izni bulunmayan içerikleri yüklemek.",
    terms_4_h: "4. Gizlilik",
    terms_4_p:
      "Girdiğin metin ve görseller yalnızca analizi gerçekleştirmek için işlenir; kalıcı olarak saklanmaz veya üçüncü taraflarla pazarlama amacıyla paylaşılmaz. Analiz, işlem için Groq'un altyapısına iletilir ve bu işlem tamamlandığında içerik Detectra sunucusunda tutulmaz. Yine de, tamamen özel veya hassas içerikleri yüklemeden önce dikkatli olman önerilir.",
    terms_5_h: "5. Fikri mülkiyet",
    terms_5_p:
      "Yüklediğin içeriğin haklarının sana ait olduğunu ya da yükleme iznine sahip olduğunu beyan edersin. Detectra markası, tasarımı ve kodu ise geliştiricisine aittir.",
    terms_6_h: "6. Sorumluluğun sınırlandırılması",
    terms_6_p:
      'Hizmet "olduğu gibi" sunulur. Detectra ve geliştiricisi; hizmetin kesintisiz veya hatasız olacağını garanti etmez ve hizmetin kullanımından doğabilecek doğrudan ya da dolaylı zararlardan sorumlu tutulamaz.',
    terms_7_h: "7. Değişiklikler",
    terms_7_p:
      "Bu şartlar zaman zaman güncellenebilir. Güncel sürüm her zaman bu sayfada yayınlanır ve yayınlandığı andan itibaren geçerli olur.",
    terms_8_h: "8. İletişim",
    terms_8_p: "Şartlarla ilgili sorular için:",

    // Footer
    footer_fine:
      "© 2026 Detectra · Sonuçlar olasılık tabanlı bir değerlendirmedir, kesin kanıt değildir.",
  },

  en: {
    // <head>
    meta_title_home: "Detectra — AI Detection Tool",
    meta_desc:
      "Detect whether text and images were generated by artificial intelligence in seconds. Powered by Groq, private and free.",

    // Navigation / topbar
    nav_home: "Home",
    nav_tool: "Detection",
    nav_about: "About",
    nav_faq: "FAQ",
    nav_terms: "Terms",
    nav_contact: "Contact",
    nav_cta: "Detect",
    lang_toggle_label: "Change language",

    // Status pill
    status_connecting: "Connecting to Groq…",
    status_connected: "Groq connected",
    status_missing: "API key missing",
    status_unreachable: "Server unreachable",

    // Home / hero
    hero_badge: "⚡ Powered by Groq",
    hero_tagline:
      'Was this made by <span class="grad">AI</span> or a <span class="grad-2">human</span>?',
    hero_sub:
      "Detectra analyzes whether text and images were generated by artificial intelligence in seconds, giving you a confidence score and concrete clues.",
    hero_cta1: "Detect Now",
    hero_cta2: "How does it work?",
    stat_num2: "~2s",
    stat_num3: "100%",
    stat_lbl1: "AI models",
    stat_lbl2: "average analysis",
    stat_lbl3: "in-browser, no logs",

    // Home / how it works
    eyebrow_how: "How it works",
    how_h: "Results in three steps",
    step1_h: "Provide content",
    step1_p:
      "Paste the text you want to analyze or drag & drop an image. Nothing is logged.",
    step2_h: "The model analyzes",
    step2_p:
      "Advanced models running on Groq examine style and visual flaws with forensic precision.",
    step3_h: "Score and clues",
    step3_p:
      "You see whether it's AI or human, the confidence percentage and the concrete clues detected.",

    // Home / features
    eyebrow_feat: "Features",
    feat_h: "What does Detectra offer?",
    feat1_h: "Text detection",
    feat1_p:
      "Catches AI signatures like formulaic sentences, over-polishing and artificial balance.",
    feat2_h: "Image detection",
    feat2_p:
      "Analyzes clues such as anatomical errors, plastic textures and inconsistent lighting.",
    feat3_h: "Confidence score",
    feat3_p:
      "Every result comes with a percentage from 0–100 shown by an animated confidence ring.",
    feat4_h: "Privacy-focused",
    feat4_p:
      "The content you send is never written to a database; it's processed only for instant analysis.",
    feat5_h: "Groq speed",
    feat5_p:
      "Thanks to Groq's low-latency infrastructure, results come back in seconds.",
    feat6_h: "Concrete clues",
    feat6_p:
      "Not just a label; it shows the reasons behind the decision point by point.",

    // Home / CTA band
    cta_h: "Detect suspicious content right away",
    cta_p: "No setup, no sign-up. Paste, drag, learn.",
    cta_btn: "Start Detecting",

    // Tool page
    eyebrow_tool: "Detection tool",
    tool_h: "Analyze your content",
    tool_p:
      "Paste text or drag an image. Get a detailed analysis, confidence score and concrete clues in seconds.",
    tab_text: "Text Detection",
    tab_image: "Image Detection",
    panel_text_h: "Paste your text here",
    char_unit: "characters",
    text_ph:
      "Paste the text you want to analyze here… (at least 20 characters)",
    sample_btn: "Try sample text",
    analyze_btn: "Detect",
    dz_empty: "<strong>Drag an image</strong> or click to select",
    dz_hint: "PNG, JPG, WEBP · max. 10 MB",
    dz_aria: "Upload image",
    result_empty_h: "Results will appear here",
    result_empty_p: "Submit content to analyze",
    ring_lbl: "confidence",
    tool_note:
      "Detectra is an estimation tool — results are not definitive proof but a probability-based assessment.",

    // Verdict labels
    verdict_ai: "AI-Generated",
    verdict_human: "Human-Made",
    verdict_uncertain: "Uncertain",
    result_model: "Model",

    // Sample text
    sample_text:
      "Artificial intelligence technologies are driving revolutionary changes across many sectors today. First and foremost, they contribute significantly to the early diagnosis of diseases in healthcare. Furthermore, they offer personalized learning experiences in the education sector. In conclusion, it is clearly evident that artificial intelligence will become an indispensable part of our lives in the future.",

    // Toast / error messages
    err_min_chars: "Please enter at least 20 characters of text.",
    err_not_image: "Please select an image file.",
    err_too_big: "The image must be smaller than 10 MB.",
    err_unknown: "Unknown error",

    // About page
    eyebrow_about: "About",
    about_h: "The story behind Detectra",
    about_p:
      "AI-generated content grows every day. Detectra was built to make telling it apart simple and accessible for everyone.",
    about_role: "Developer · Founder of Detectra",
    about_bio:
      "I'm a developer interested in AI and web technologies. I built Detectra after realizing how increasingly difficult it's becoming to tell AI-generated text and images apart from real ones. My goal is to turn complex models into a simple, fast tool anyone can use.",
    about_mission_h: "Our mission",
    about_mission_p:
      "AI is now everywhere — from news articles to homework, from social media images to advertising. Knowing what is human-made and what is machine-made has become a new part of media literacy. Detectra aims to strengthen that awareness — not to accuse, but to inform.",
    about_how_h: "How does it work?",
    about_how_p:
      "Detectra forwards content from your browser, through its own server, to Groq's high-speed inference infrastructure. For text, an advanced language model handles stylistic analysis; for images, a vision model examines anatomical and textural consistency. The model reasons like a forensic analyst and justifies its decision with a confidence percentage.",
    about_tech_h: "Technologies we use",
    tech1: "<strong>Node.js + Express</strong> — lightweight, fast server",
    tech2: "<strong>Groq API</strong> — low-latency AI inference",
    tech3: "<strong>Pure HTML/CSS/JS</strong> — framework-free, fast interface",
    about_trans_h: "Transparency",
    about_trans_p:
      "No detection tool is perfect. Detectra's results are a probability assessment and should not be used as definitive proof. We keep improving the tool continuously.",
    about_cta_h: "Found a problem or have an idea?",
    about_cta_p: "Your feedback makes Detectra better.",
    about_cta_btn: "Get in Touch",

    // FAQ page
    eyebrow_faq: "Frequently asked questions",
    faq_h: "Things on your mind",
    faq_p:
      "We've gathered the most common questions about Detectra here. If you can't find your answer, feel free to write to us.",
    faq_q1: "What is Detectra?",
    faq_a1:
      "Detectra is a free detection tool that estimates whether a text or image was produced by artificial intelligence or by a human. It presents its results along with a confidence score and concrete clues.",
    faq_q2: "How accurate are the results?",
    faq_a2:
      "Detectra works on a probability basis. It's quite accurate on content carrying obvious AI markers, but it can be wrong on very well-edited text or extremely realistic images. Treat the results as a strong clue rather than definitive proof.",
    faq_q3: "Is the content I submit stored?",
    faq_a3:
      "No. The text and images you enter are processed only for instant analysis; they are not saved to a database. Once the analysis is complete, the content is not retained on the server.",
    faq_q4: "Which AI models do you use?",
    faq_a4:
      "An advanced language model running on Groq is used for text analysis, and a vision model for image analysis. The models may be updated from time to time based on the balance of speed and accuracy.",
    faq_q5: "Is Detectra free?",
    faq_a5:
      "Yes, using Detectra is completely free. It requires no registration or credit card.",
    faq_q6: "Which file types can I upload?",
    faq_a6:
      "For image detection we support PNG, JPG and WEBP formats up to 10 MB. For text detection, entering at least 20 characters is enough.",
    faq_q7: "Can I use the result as official evidence?",
    faq_a7:
      "No. Detectra is an assistive tool and does not on its own constitute grounds for an academic, legal or professional decision. The final judgment should always be made by a human.",

    // Terms page
    eyebrow_terms: "Legal",
    terms_h: "Terms of Use & Privacy",
    terms_updated: "Last updated: August 11, 2026",
    terms_1_h: "1. Description of the service",
    terms_1_p:
      'Detectra ("the Service") is a web tool that provides a probability-based assessment of whether the text and images entered by users were generated by artificial intelligence. By using the Service, you are deemed to have accepted these terms.',
    terms_2_h: "2. Nature of the results",
    terms_2_p:
      "All results produced by Detectra are estimates and do not guarantee 100% accuracy. The results may not be used as sole evidence in academic, legal, professional or disciplinary decisions. Responsibility for decisions made based on the information the Service provides lies entirely with the user.",
    terms_3_h: "3. Acceptable use",
    terms_3_p: "While using the Service, you agree not to:",
    terms_3_li1:
      "upload illegal, harmful content or content that violates the rights of others,",
    terms_3_li2:
      "abuse or disrupt the Service with automated/excessive requests,",
    terms_3_li3:
      "use the results to harass, defame or unfairly accuse someone,",
    terms_3_li4:
      "upload content that does not belong to you and that you have no permission to share.",
    terms_4_h: "4. Privacy",
    terms_4_p:
      "The text and images you enter are processed only to perform the analysis; they are not stored permanently or shared with third parties for marketing purposes. The analysis is forwarded to Groq's infrastructure for processing, and once that processing is complete the content is not retained on Detectra's server. Even so, you are advised to be careful before uploading completely private or sensitive content.",
    terms_5_h: "5. Intellectual property",
    terms_5_p:
      "You declare that you own the rights to the content you upload or that you have permission to upload it. The Detectra brand, design and code belong to its developer.",
    terms_6_h: "6. Limitation of liability",
    terms_6_p:
      'The Service is provided "as is". Detectra and its developer do not guarantee that the Service will be uninterrupted or error-free, and cannot be held liable for any direct or indirect damages that may arise from use of the Service.',
    terms_7_h: "7. Changes",
    terms_7_p:
      "These terms may be updated from time to time. The current version is always published on this page and takes effect from the moment it is published.",
    terms_8_h: "8. Contact",
    terms_8_p: "For questions about the terms:",

    // Footer
    footer_fine:
      "© 2026 Detectra · Results are a probability-based assessment, not definitive proof.",
  },
};

const I18N = {
  lang: "tr",
  strings: I18N_STRINGS,

  t(key) {
    const dict = this.strings[this.lang] || this.strings.tr;
    return dict[key] ?? this.strings.tr[key] ?? key;
  },

  apply() {
    const root = document.documentElement;
    root.setAttribute("lang", this.lang);

    // textContent
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = this.t(el.getAttribute("data-i18n"));
    });
    // innerHTML (for strings containing inline markup)
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = this.t(el.getAttribute("data-i18n-html"));
    });
    // placeholder
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      el.setAttribute("placeholder", this.t(el.getAttribute("data-i18n-ph")));
    });
    // aria-label
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", this.t(el.getAttribute("data-i18n-aria")));
    });

    // <head> meta
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", this.t("meta_desc"));

    // Language toggle button shows the OTHER language
    const label = document.getElementById("langLabel");
    if (label) label.textContent = this.lang === "tr" ? "EN" : "TR";
    const toggle = document.getElementById("langToggle");
    if (toggle) toggle.setAttribute("aria-label", this.t("lang_toggle_label"));

    // Let the rest of the app react (title, status pill, char count…)
    document.dispatchEvent(new CustomEvent("langchange", { detail: this.lang }));
  },

  set(lang) {
    this.lang = lang === "en" ? "en" : "tr";
    try {
      localStorage.setItem("detectra-lang", this.lang);
    } catch {
      /* ignore */
    }
    this.apply();
  },

  toggle() {
    this.set(this.lang === "tr" ? "en" : "tr");
  },

  init() {
    let saved = null;
    try {
      saved = localStorage.getItem("detectra-lang");
    } catch {
      /* ignore */
    }
    if (!saved) {
      const nav = (navigator.language || "tr").toLowerCase();
      saved = nav.startsWith("tr") ? "tr" : "en";
    }
    this.lang = saved === "en" ? "en" : "tr";
    this.apply();

    const toggle = document.getElementById("langToggle");
    if (toggle) toggle.addEventListener("click", () => this.toggle());
  },
};

window.I18N = I18N;
document.addEventListener("DOMContentLoaded", () => I18N.init());
