
window.OSV = window.OSV_DATA || {};
const dict = window.OSV.dictionaryData || [];
const phrases = window.OSV.phraseData || [];

const jpToLnMap = new Map();
const lnToJpMap = new Map();

for (const item of dict) {
  if (item.jp) {
    if (!jpToLnMap.has(item.jp)) jpToLnMap.set(item.jp, []);
    jpToLnMap.get(item.jp).push(item);
  }
  if (item.ln) {
    if (!lnToJpMap.has(item.ln)) lnToJpMap.set(item.ln, []);
    lnToJpMap.get(item.ln).push(item);
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normalizeText(text) {
  return String(text || '')
    .replace(/[、，]/g, ' ')
    .replace(/[。．]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(' ')
    .filter(Boolean);
}

function lookupJP(token) {
  const list = jpToLnMap.get(token);
  return list && list[0] ? list[0].ln : null;
}

function lookupLN(token) {
  const list = lnToJpMap.get(token);
  return list && list[0] ? list[0].jp : null;
}

function translateToken(token, direction) {
  if (!token) return token;

  // 文法記号はそのまま残す
  if (token === 'nlot' || token === '^^' || token === '^?' || token === '^!' || /^(\^S|\^P|\^C|\^F)$/.test(token)) {
    return token;
  }

  if (direction === 'jp-to-osv') {
    return lookupJP(token) || token;
  }
  if (direction === 'osv-to-jp') {
    return lookupLN(token) || token;
  }
  return token;
}

function translateText(text, direction) {
  const tokens = tokenize(text);
  return tokens.map(token => translateToken(token, direction)).join(' ');
}

function makeQuizOptions(correct, pool, count = 4) {
  const options = [correct];
  const candidates = pool.filter(x => x !== correct);
  while (options.length < count && candidates.length) {
    const idx = Math.floor(Math.random() * candidates.length);
    options.push(candidates.splice(idx, 1)[0]);
  }
  return options.sort(() => Math.random() - 0.5);
}

function byType(type) {
  return dict.filter(x => x.type === type);
}

function fillSelect(id, arr, formatter = (x) => `${x.jp} / ${x.ln}`) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = arr.map(x => `<option value="${escapeHtml(x.ln)}">${escapeHtml(formatter(x))}</option>`).join('');
}

function sampleWord(scope = 'all') {
  const pool = scope === 'all' ? dict : dict.filter(x => x.type === scope);
  return pool[Math.floor(Math.random() * pool.length)];
}

function sortByKey(arr, key) {
  return arr.slice().sort((a, b) => String(a[key]).localeCompare(String(b[key]), 'ja'));
}

window.OSV_UTIL = {
  escapeHtml,
  normalizeText,
  tokenize,
  lookupJP,
  lookupLN,
  translateText,
  makeQuizOptions,
  byType,
  fillSelect,
  sampleWord,
  sortByKey
};
