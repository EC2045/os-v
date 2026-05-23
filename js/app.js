const DATA = window.OSV_DATA || {};
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const $ = (sel, root = document) => root.querySelector(sel);

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalize(str = "") {
  return String(str).toLowerCase().trim();
}

function setupShell() {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const nav = $("#site-nav");
  if (nav) {
    const page = document.body.dataset.page;
    $$("a[data-page]", nav).forEach(a => {
      if (a.dataset.page === page) a.classList.add("active");
    });
  }

  const titleEl = $("#site-title");
  if (titleEl && DATA.meta) titleEl.textContent = DATA.meta.title;
  const subEl = $("#site-subtitle");
  if (subEl && DATA.meta) subEl.textContent = DATA.meta.subtitle;
  const descEl = $("#site-description");
  if (descEl && DATA.meta) descEl.textContent = DATA.meta.description;
}

function renderPortal() {
  const fileList = $("#portal-files");
  const chips = $("#portal-chips");
  const highlights = $("#portal-highlights");
  if (!fileList || !DATA.files) return;

  const fileRows = [
    { name: "index.html", type: "HTML", size: "4 KB", desc: "入口ページ", updated: "2026/05/22" },
    { name: "portal.html", type: "HTML", size: "6 KB", desc: "統括ポータル", updated: "2026/05/22" },
    { name: "dictionary.html", type: "HTML", size: "7 KB", desc: "辞書と検索", updated: "2026/05/22" },
    { name: "grammar.html", type: "HTML", size: "6 KB", desc: "文法の整理", updated: "2026/05/22" },
    { name: "phrases.html", type: "HTML", size: "5 KB", desc: "例文アーカイブ", updated: "2026/05/22" },
    { name: "translator.html", type: "HTML", size: "8 KB", desc: "翻訳補助", updated: "2026/05/22" },
    { name: "learning.html", type: "HTML", size: "6 KB", desc: "学習モード", updated: "2026/05/22" },
    { name: "builder.html", type: "HTML", size: "7 KB", desc: "文生成端末", updated: "2026/05/22" },
    { name: "style.css", type: "CSS", size: "10 KB", desc: "共通デザイン", updated: "2026/05/22" },
    { name: "js/app.js", type: "JS", size: "13 KB", desc: "共通ロジック", updated: "2026/05/22" },
    { name: "js/data.js", type: "JS", size: "37 KB", desc: "語彙データ", updated: "2026/05/22" },
    { name: "README.md", type: "MD", size: "2 KB", desc: "案内文書", updated: "2026/05/22" }
  ];

  fileList.innerHTML = fileRows.map(f => `
    <a class="file-row" href="${f.name}">
      <span class="file-icon">${f.name.endsWith(".html") ? "📄" : f.name.endsWith(".css") ? "🎨" : f.name.endsWith(".js") ? "🧩" : "📝"}</span>
      <span class="file-name">${escapeHtml(f.name)}</span>
      <span class="file-desc">${escapeHtml(f.desc)}</span>
      <span class="file-date">${escapeHtml(f.updated)}</span>
      <span class="file-type">${escapeHtml(f.type)}</span>
      <span class="file-size">${escapeHtml(f.size)}</span>
    </a>
  `).join("");

  const catCount = DATA.categories ? DATA.categories.length : 0;
  const wordCount = DATA.categories ? DATA.categories.reduce((a, c) => a + c.items.length, 0) : 0;

  if (chips) {
    chips.innerHTML = [
      ["辞書", wordCount],
      ["カテゴリ", catCount],
      ["例文", DATA.examples ? DATA.examples.length : 0],
      ["文法", Object.keys(DATA.grammar || {}).length]
    ].map(([label, value]) => `<span class="chip"><strong>${value}</strong>${label}</span>`).join("");
  }

  if (highlights) {
    highlights.innerHTML = `
      <div class="stat-card"><div class="stat-num">${catCount}</div><div class="stat-label">語彙カテゴリ</div></div>
      <div class="stat-card"><div class="stat-num">${wordCount}</div><div class="stat-label">登録語数</div></div>
      <div class="stat-card"><div class="stat-num">${DATA.examples ? DATA.examples.length : 0}</div><div class="stat-label">例文数</div></div>
      <div class="stat-card"><div class="stat-num">OSV</div><div class="stat-label">基本語順</div></div>
    `;
  }
}

function renderDictionary() {
  const search = $("#dict-search");
  const out = $("#dict-grid");
  const tabs = $("#dict-tabs");
  if (!out || !DATA.categories) return;

  const categories = DATA.categories;
  let active = "all";

  function draw() {
    const q = normalize(search?.value || "");
    const items = categories.flatMap(cat => cat.items.map(item => ({ ...item, cat: cat.name })))
      .filter(item => {
        const matchQ = !q || normalize(item.jp).includes(q) || normalize(item.osv).includes(q) || normalize(item.cat).includes(q);
        const matchCat = active === "all" || item.cat === active;
        return matchQ && matchCat;
      });

    out.innerHTML = items.map(item => `
      <article class="term-card">
        <div class="term-jp">${escapeHtml(item.jp)}</div>
        <div class="term-osv"><code>${escapeHtml(item.osv)}</code></div>
        <div class="term-cat">${escapeHtml(item.cat)}</div>
      </article>
    `).join("") || `<div class="empty">該当する語が見つかりません。</div>`;
  }

  if (tabs) {
    tabs.innerHTML = [
      `<button class="tab active" data-cat="all">すべて</button>`,
      ...categories.map(c => `<button class="tab" data-cat="${escapeHtml(c.name)}">${escapeHtml(c.name)}</button>`)
    ].join("");

    tabs.addEventListener("click", e => {
      const btn = e.target.closest("button[data-cat]");
      if (!btn) return;
      active = btn.dataset.cat;
      $$(".tab", tabs).forEach(b => b.classList.toggle("active", b === btn));
      draw();
    });
  }

  search?.addEventListener("input", draw);
  draw();
}

function renderGrammar() {
  const wrap = $("#grammar-wrap");
  if (!wrap || !DATA.grammar) return;
  const g = DATA.grammar;

  wrap.innerHTML = `
    <section class="info-block">
      <h2>${escapeHtml(g.word_order.title)}</h2>
      <p>${escapeHtml(g.word_order.body)}</p>
      <div class="code-line">${escapeHtml(g.word_order.example)}</div>
    </section>

    <section class="grid-two">
      <article class="card">
        <h3>${escapeHtml(g.tense.title)}</h3>
        <p>${escapeHtml(g.tense.body)}</p>
        <div class="pill-list">${g.tense.items.map(([k, v]) => `<span class="pill"><code>${escapeHtml(k)}</code> ${escapeHtml(v)}</span>`).join("")}</div>
      </article>

      <article class="card">
        <h3>${escapeHtml(g.plural.title)}</h3>
        <p>${escapeHtml(g.plural.body)}</p>
        <div class="code-line">${escapeHtml(g.plural.example)}</div>
      </article>
    </section>

    <section class="card">
      <h3>${escapeHtml(g.sentence_modes.title)}</h3>
      <p>${escapeHtml(g.sentence_modes.body)}</p>
      <div class="pill-list">${g.sentence_modes.items.map(([k, v]) => `<span class="pill"><code>${escapeHtml(k)}</code> ${escapeHtml(v)}</span>`).join("")}</div>
    </section>
  `;
}

function renderPhrases() {
  const wrap = $("#phrase-grid");
  if (!wrap || !DATA.examples) return;
  wrap.innerHTML = DATA.examples.map(ex => `
    <article class="phrase-card">
      <div class="phrase-ja">${escapeHtml(ex.ja)}</div>
      <div class="phrase-osv"><code>${escapeHtml(ex.osv)}</code></div>
      <div class="phrase-note">${escapeHtml(ex.note)}</div>
    </article>
  `).join("");
}

function tokenizeInput(text) {
  return text
    .replace(/[。、，！？]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
}

function renderTranslator() {
  const input = $("#translate-input");
  const output = $("#translate-output");
  const btn = $("#translate-btn");
  const mode = $("#translate-mode");
  if (!input || !output || !btn) return;

  const dict = new Map();
  DATA.categories.forEach(cat => cat.items.forEach(item => dict.set(item.jp, item.osv)));

  function convert() {
    const source = input.value.trim();
    if (!source) {
      output.textContent = "ここに変換結果が表示されます。";
      return;
    }

    const direct = dict.get(source);
    if (direct) {
      output.innerHTML = `<code>${escapeHtml(direct)}</code>`;
      return;
    }

    const tokens = tokenizeInput(source);
    const mapped = tokens.map(t => dict.get(t) || t);
    const hint = mode?.value || "basic";
    let result = mapped.join(" ");

    if (hint === "basic" && mapped.length >= 3) {
      result += "  ※ 仕上げは OSV の並びに合わせて調整してください。";
    }

    output.innerHTML = `<code>${escapeHtml(result)}</code>`;
  }

  btn.addEventListener("click", convert);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) convert();
  });
  convert();
}

function renderLearning() {
  const box = $("#quiz-box");
  const btn = $("#quiz-next");
  const ans = $("#quiz-answer");
  if (!box || !btn || !DATA.examples) return;

  let current = 0;
  const pool = DATA.examples;

  function draw() {
    const ex = pool[current % pool.length];
    box.innerHTML = `
      <div class="quiz-q">${escapeHtml(ex.ja)}</div>
      <div class="quiz-s">os^v語に変換してみましょう。</div>
    `;
    ans.textContent = ex.osv;
  }

  btn.addEventListener("click", () => {
    current = (current + 1) % pool.length;
    draw();
  });

  draw();
}

function renderBuilder() {
  const out = $("#builder-output");
  const obj = $("#builder-object");
  const verb = $("#builder-verb");
  const subj = $("#builder-subject");
  const tense = $("#builder-tense");
  const neg = $("#builder-neg");
  const q = $("#builder-q");
  const ex = $("#builder-ex");
  if (!out || !obj || !verb || !subj) return;

  function updateOptions(select, items) {
    select.innerHTML = items.map(item => {
      const label = item.jp || item.label || "";
      const value = item.osv || item.value || "";
      return `<option value="${escapeHtml(value)}">${escapeHtml(label)} — ${escapeHtml(value)}</option>`;
    }).join("");
  }

  const verbItems = DATA.categories.find(c => c.name === "動詞")?.items || [];
  const nounItems = DATA.categories.flatMap(c => c.name !== "動詞" && c.name !== "副詞・関係" ? c.items : []).slice(0, 30);

  updateOptions(obj, nounItems);
  updateOptions(verb, verbItems);
  updateOptions(subj, DATA.categories.find(c => c.name === "代名詞・集合")?.items || []);

  function build() {
    const parts = [];
    const o = obj.value;
    const v = verb.value + (tense.value || "^S");
    const s = subj.value;
    if (neg.checked) parts.push("nlot");
    if (q.checked) {
      parts.push("^?", o, v, s, "^?");
    } else {
      parts.push(o, v, s);
    }
    const sentence = parts.filter(Boolean).join(" ");
    out.innerHTML = `<code>${escapeHtml(sentence)}</code>`;
    if (ex) ex.textContent = "例: nek glis^S ie";
  }

  [obj, verb, subj, tense, neg, q].forEach(el => el.addEventListener("change", build));
  build();
}

window.addEventListener("DOMContentLoaded", () => {
  setupShell();
  renderPortal();
  renderDictionary();
  renderGrammar();
  renderPhrases();
  renderTranslator();
  renderLearning();
  renderBuilder();
});