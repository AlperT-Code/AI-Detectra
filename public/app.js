const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const RING_CIRCUMFERENCE = 2 * Math.PI * 52;

// i18n kısayolu — i18n.js yüklenmezse Türkçe'ye düşer
const t = (key) => (window.I18N ? window.I18N.t(key) : key);
const lang = () => (window.I18N ? window.I18N.lang : "tr");

function verdictLabel(verdict) {
  return t(`verdict_${verdict}`) || t("verdict_uncertain");
}

function showToast(msg, type = "error") {
  const toast = $("#toast");
  toast.textContent = msg;
  toast.style.background = type === "error" ? "var(--ai)" : "var(--human)";
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 4200);
}

function setLoading(btn, loading) {
  btn.classList.toggle("loading", loading);
  btn.disabled = loading;
}

const ROUTES = {
  "/": "home",
  "/denetim": "tool",
  "/hakkimda": "about",
  "/sss": "faq",
  "/sartlar": "terms",
  "/iletisim": "contact",
};

function currentPath() {
  const h = location.hash.replace(/^#/, "");
  return ROUTES[h] ? h : "/";
}

function navigate() {
  const path = currentPath();
  const page = ROUTES[path];

  $$(".page").forEach((p) => p.classList.toggle("active", p.dataset.page === page));

  $$(".nav a[data-route]").forEach((a) =>
    a.classList.toggle("active", a.dataset.route === page)
  );

  closeMenu();
  window.scrollTo({ top: 0, behavior: "auto" });

  if (page === "tool") {
    requestAnimationFrame(() => moveGlider($(".tab.active")));
  }

  document.title =
    page === "home"
      ? t("meta_title_home")
      : `Detectra — ${document.querySelector(`.page[data-page="${page}"] h1`)?.textContent || ""}`;
}

window.addEventListener("hashchange", navigate);

$$("[data-link]").forEach((el) =>
  el.addEventListener("click", () => {
    const href = el.getAttribute("href");
    if (href === location.hash || (href === "#/" && !location.hash)) {
      navigate();
    }
  })
);

const nav = $("#nav");
const navToggle = $("#navToggle");

function openMenu() {
  nav.classList.add("open");
  navToggle.setAttribute("aria-expanded", "true");
}
function closeMenu() {
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}
navToggle.addEventListener("click", () => {
  nav.classList.contains("open") ? closeMenu() : openMenu();
});

const topbar = $(".topbar");
window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 8);
});

// Son sağlık durumunu sakla ki dil değişince metni güncelleyebilelim
let healthState = "connecting"; // connecting | connected | missing | unreachable

function renderHealth() {
  const pill = $("#statusPill");
  const text = $("#statusText");
  const map = {
    connecting: ["pill", "status_connecting"],
    connected: ["pill ok", "status_connected"],
    missing: ["pill err", "status_missing"],
    unreachable: ["pill err", "status_unreachable"],
  };
  const [cls, key] = map[healthState] || map.connecting;
  pill.className = cls;
  if (text) text.textContent = t(key);
}

async function checkHealth() {
  try {
    const res = await fetch("/api/health");
    const data = await res.json();
    healthState = data.keyConfigured ? "connected" : "missing";
  } catch {
    healthState = "unreachable";
  }
  renderHealth();
}

const tabs = $$(".tab");
const glider = $(".tab-glider");

function moveGlider(tab) {
  if (!tab || !glider) return;
  glider.style.width = `${tab.offsetWidth}px`;
  glider.style.transform = `translateX(${tab.offsetLeft - 6}px)`;
}

function activateTab(name) {
  tabs.forEach((t) => {
    const active = t.dataset.tab === name;
    t.classList.toggle("active", active);
    if (active) moveGlider(t);
  });
  $("#panel-text").classList.toggle("active", name === "text");
  $("#panel-image").classList.toggle("active", name === "image");
}

tabs.forEach((tab) =>
  tab.addEventListener("click", () => activateTab(tab.dataset.tab))
);
window.addEventListener("resize", () => {
  if (ROUTES[currentPath()] === "tool") moveGlider($(".tab.active"));
});

const textInput = $("#textInput");
const charCount = $("#charCount");

textInput.addEventListener("input", () => {
  charCount.textContent = `${textInput.value.length} ${t("char_unit")}`;
});

$("#sampleBtn").addEventListener("click", () => {
  textInput.value = t("sample_text");
  charCount.textContent = `${textInput.value.length} ${t("char_unit")}`;
});

$("#analyzeTextBtn").addEventListener("click", async () => {
  const text = textInput.value.trim();
  if (text.length < 20) {
    showToast(t("err_min_chars"));
    return;
  }
  const btn = $("#analyzeTextBtn");
  setLoading(btn, true);
  showScanning();
  try {
    const res = await fetch("/api/analyze-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, lang: lang() }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || t("err_unknown"));
    renderResult(data);
  } catch (err) {
    showToast(err.message);
    resetResult();
  } finally {
    setLoading(btn, false);
  }
});

const dropzone = $("#dropzone");
const fileInput = $("#fileInput");
const dzEmpty = $("#dzEmpty");
const dzPreview = $("#dzPreview");
const previewImg = $("#previewImg");
const analyzeImageBtn = $("#analyzeImageBtn");
const fileHint = $("#fileHint");
let currentImage = null;

dropzone.addEventListener("click", (e) => {
  if (e.target.closest(".dz-clear")) return;
  fileInput.click();
});
dropzone.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fileInput.click();
  }
});

["dragover", "dragenter"].forEach((ev) =>
  dropzone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  })
);
["dragleave", "drop"].forEach((ev) =>
  dropzone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
  })
);
dropzone.addEventListener("drop", (e) => {
  const file = e.dataTransfer.files?.[0];
  if (file) handleFile(file);
});
fileInput.addEventListener("change", () => {
  if (fileInput.files?.[0]) handleFile(fileInput.files[0]);
});

$("#clearImgBtn").addEventListener("click", clearImage);

function handleFile(file) {
  if (!file.type.startsWith("image/")) {
    showToast(t("err_not_image"));
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showToast(t("err_too_big"));
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    currentImage = reader.result;
    previewImg.src = currentImage;
    dzEmpty.hidden = true;
    dzPreview.hidden = false;
    analyzeImageBtn.disabled = false;
    fileHint.textContent = `${file.name} · ${(file.size / 1024).toFixed(0)} KB`;
  };
  reader.readAsDataURL(file);
}

function clearImage() {
  currentImage = null;
  fileInput.value = "";
  previewImg.removeAttribute("src");
  dzEmpty.hidden = false;
  dzPreview.hidden = true;
  analyzeImageBtn.disabled = true;
  fileHint.textContent = "";
}

analyzeImageBtn.addEventListener("click", async () => {
  if (!currentImage) return;
  setLoading(analyzeImageBtn, true);
  showScanning();
  try {
    const res = await fetch("/api/analyze-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: currentImage, lang: lang() }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || t("err_unknown"));
    renderResult(data);
  } catch (err) {
    showToast(err.message);
    resetResult();
  } finally {
    setLoading(analyzeImageBtn, false);
  }
});

function showScanning() {
  $("#resultEmpty").hidden = false;
  $("#resultContent").hidden = true;
}
function resetResult() {
  $("#resultEmpty").hidden = false;
  $("#resultContent").hidden = true;
}

function renderResult(data) {
  const { verdict, confidence, explanation, indicators, model } = data;

  $("#resultEmpty").hidden = true;
  $("#resultContent").hidden = false;

  const color =
    verdict === "ai"
      ? "var(--ai)"
      : verdict === "human"
      ? "var(--human)"
      : "var(--uncertain)";

  const ringFill = $("#ringFill");
  ringFill.style.stroke = color;
  const offset = RING_CIRCUMFERENCE * (1 - confidence / 100);
  ringFill.style.strokeDashoffset = RING_CIRCUMFERENCE;
  requestAnimationFrame(() => {
    ringFill.style.strokeDashoffset = offset;
  });
  animateNumber($("#ringPct"), confidence);

  const label = $("#verdictLabel");
  label.textContent = verdictLabel(verdict);
  label.className = `verdict-label ${verdict}`;

  $("#verdictExplain").textContent = explanation;

  const wrap = $("#indicators");
  wrap.innerHTML = "";
  (indicators || []).forEach((text, i) => {
    const el = document.createElement("div");
    el.className = "indicator";
    el.style.animationDelay = `${i * 60}ms`;
    el.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="m9 20.42-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83L9 20.42Z"/></svg><span>${escapeHtml(
      text
    )}</span>`;
    wrap.appendChild(el);
  });

  $("#resultMeta").textContent = model ? `${t("result_model")}: ${model}` : "";
}

function animateNumber(el, target) {
  const dur = 900;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = `${Math.round(eased * target)}%`;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// İletişim formu — girdilerden bir mailto bağlantısı oluşturup
// kullanıcının e-posta uygulamasını hazır mesajla açar.
const contactForm = $("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#cfName").value.trim();
    const email = $("#cfEmail").value.trim();
    const subject = $("#cfSubject").value.trim() || t("contact_default_subject");
    const message = $("#cfMessage").value.trim();

    const body =
      `${message}\n\n—\n${name}` + (email ? ` · ${email}` : "");
    const href =
      `mailto:alpertasdemir32@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    showToast(t("contact_success"), "ok");
  });
}

// Dil değişince i18n.js data-i18n metinlerini yeniler; burada
// yalnızca JS ile üretilen dinamik metinleri güncelliyoruz.
document.addEventListener("langchange", () => {
  renderHealth();
  navigate(); // sekme başlığını (document.title) günceller
  charCount.textContent = `${textInput.value.length} ${t("char_unit")}`;
});

navigate();
checkHealth();
