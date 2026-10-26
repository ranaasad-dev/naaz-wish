'use strict';
(() => {
  const el = id => document.getElementById(id);
  const config = window.BIRTHDAY_CONTENT || {};
  const storageKey = 'farah-naaz-portrait-' + (config.photoVersion || 'custom');
  const fallbackPath = 'assets/farah-placeholder.svg';
  const portrait = el('farah-portrait');
  const mimeExtensions = {'image/jpeg':'jpg','image/png':'png','image/webp':'webp','image/avif':'avif'};
  const copy = {
    en: {eyebrow:'OUR DEAR SISTER · FARAH NAAZ',title:'For our dear sister,<br><em>Farah Naaz.</em>',intro:'Our dear sister Farah Naaz, your smile makes every ordinary moment a little more beautiful. This little birthday world is made with love, just for you.',sign:'A sister, a smile, a thousand happy moments. ♡',settings:'Add / change photo',label:'Choose a portrait from your device',help:'Your chosen photo stays on this device. For everyone to see it online, use the publishing kit below.',kit:'Download photo publishing kit',reset:'Reset photo',publish:'Extract the kit. Copy its photo and site-content.js into the website’s main folder. Upload both to GitHub along with the website.',published:'This photo is included in the website and will appear for all visitors after upload.',empty:'No personal photo has been added yet.',selected:'Photo ready. Saved on this browser; download the publishing kit to add it to the shared website.',temporary:'Photo ready for this visit. Browser storage is unavailable; download the publishing kit to keep it.',invalid:'Choose a JPG, PNG, WebP or AVIF image under 10 MB.',failed:'This image could not open. Try a JPG or PNG photo.',downloaded:'Publishing kit downloaded. Extract it and copy both files into the website’s main folder.',alt:'Our dear sister Farah Naaz',placeholder:'Floral placeholder for our dear sister Farah Naaz',missing:'The configured photo could not load. Choose a picture to replace it.'},
    ur: {eyebrow:'ہماری پیاری بہن · فرح ناز',title:'ہماری پیاری بہن،<br><em>فرح ناز کے لیے۔</em>',intro:'ہماری پیاری بہن فرح ناز، تمہاری مسکراہٹ ہر عام لمحے کو تھوڑا اور خوبصورت بنا دیتی ہے۔ سالگرہ کی یہ پیاری سی دنیا صرف تمہارے لیے محبت سے بنائی گئی ہے۔',sign:'ایک بہن، ایک مسکراہٹ، خوشیوں بھرے ہزاروں لمحے۔ ♡',settings:'تصویر لگائیں / بدلیں',label:'اپنے ڈیوائس سے تصویر منتخب کریں',help:'منتخب تصویر اسی ڈیوائس پر رہتی ہے۔ سب کو آن لائن دکھانے کے لیے نیچے دی گئی پبلشنگ کٹ استعمال کریں۔',kit:'تصویر کی پبلشنگ کٹ ڈاؤن لوڈ کریں',reset:'تصویر ری سیٹ کریں',publish:'کٹ کھولیں۔ تصویر اور site-content.js کو ویب سائٹ کے مین فولڈر میں کاپی کریں۔ دونوں فائلیں باقی ویب سائٹ کے ساتھ GitHub پر اپ لوڈ کریں۔',published:'یہ تصویر ویب سائٹ میں شامل ہے اور اپ لوڈ کے بعد تمام وزیٹرز کو نظر آئے گی۔',empty:'ابھی کوئی ذاتی تصویر شامل نہیں کی گئی۔',selected:'تصویر تیار ہے اور اس براؤزر میں محفوظ ہے۔ آن لائن ویب سائٹ کے لیے پبلشنگ کٹ ڈاؤن لوڈ کریں۔',temporary:'تصویر اس وزٹ کے لیے تیار ہے۔ براؤزر میں محفوظ نہیں ہو سکی؛ اسے رکھنے کے لیے پبلشنگ کٹ ڈاؤن لوڈ کریں۔',invalid:'۱۰ ایم بی سے کم JPG، PNG، WebP یا AVIF تصویر چنیں۔',failed:'یہ تصویر نہیں کھل سکی۔ JPG یا PNG تصویر آزمائیں۔',downloaded:'پبلشنگ کٹ ڈاؤن لوڈ ہو گئی۔ اسے کھول کر دونوں فائلیں ویب سائٹ کے مین فولڈر میں کاپی کریں۔',alt:'ہماری پیاری بہن فرح ناز',placeholder:'ہماری پیاری بہن فرح ناز کی تصویر کے لیے پھولوں والا خاکہ',missing:'مقرر کردہ تصویر نہیں کھل سکی۔ دوسری تصویر منتخب کریں۔'}
  };
  let selectedData = null, selectedMime = null, statusKey = 'empty', readToken = 0;
  function lang() {return document.documentElement.lang === 'ur' ? 'ur' : 'en';}
  function render() {
    const words = copy[lang()];
    const labels = {'portrait-eyebrow':'eyebrow','portrait-intro':'intro','portrait-sign':'sign','portrait-settings-title':'settings','portrait-file-label':'label','portrait-help':'help','portrait-kit':'kit','portrait-reset':'reset','portrait-publish-help':'publish'};
    Object.entries(labels).forEach(([id,key]) => {el(id).textContent = words[key];});
    el('portrait-title').innerHTML = words.title;
    el('portrait-status').textContent = words[statusKey] || '';
    const isPlaceholder = !selectedData && (!config.photoPath || config.photoPath === fallbackPath || portrait.getAttribute('src') === fallbackPath);
    portrait.alt = words[isPlaceholder ? 'placeholder' : 'alt'];
    el('portrait-kit').disabled = !selectedData;
  }
  function setConfiguredPortrait() {
    portrait.src = config.photoPath || fallbackPath;
    statusKey = config.photoPath && config.photoPath !== fallbackPath ? 'published' : 'empty';
  }
  portrait.addEventListener('error', () => {
    if (portrait.getAttribute('src') === fallbackPath) return;
    portrait.src = fallbackPath; statusKey = 'missing'; render();
  });
  setConfiguredPortrait();
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && mimeExtensions[saved.mime] && typeof saved.data === 'string' && saved.data.startsWith(`data:${saved.mime};base64,`)) {
      selectedData = saved.data; selectedMime = saved.mime; portrait.src = selectedData; statusKey = 'selected';
    }
  } catch (_) { /* Local file/private browser storage can be unavailable. */ }
  el('portrait-file').addEventListener('change', async () => {
    const file = el('portrait-file').files[0];
    if (!file) return;
    if (!mimeExtensions[file.type] || file.size > 10 * 1024 * 1024) {statusKey = 'invalid'; render(); return;}
    const token = ++readToken;
    try {
      const data = await new Promise((resolve,reject) => {const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file);});
      await new Promise((resolve,reject) => {const image = new Image(); image.onload = resolve; image.onerror = reject; image.src = data;});
      if (token !== readToken) return;
      selectedData = data; selectedMime = file.type; portrait.src = data; statusKey = 'selected';
      try {localStorage.setItem(storageKey,JSON.stringify({data,mime:file.type}));} catch (_) {statusKey = 'temporary';}
      render();
    } catch (_) {if(token === readToken){statusKey = 'failed'; render();}}
  });
  el('portrait-reset').addEventListener('click', () => {
    readToken++; selectedData = null; selectedMime = null; el('portrait-file').value = '';
    try {localStorage.removeItem(storageKey);} catch (_) {}
    setConfiguredPortrait(); render();
  });
  // Small standards-compliant ZIP writer (stored entries); no CDN or library needed.
  function crc32(bytes) {
    let crc = 0xffffffff;
    for (const byte of bytes) {crc ^= byte; for(let bit=0;bit<8;bit++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);}
    return (crc ^ 0xffffffff) >>> 0;
  }
  function storedZip(files) {
    const encoder = new TextEncoder(), localParts = [], centralParts = [];
    let offset = 0, centralSize = 0;
    for(const file of files) {
      const name = encoder.encode(file.name), data = file.data, crc = crc32(data);
      const header = new Uint8Array(30 + name.length), view = new DataView(header.buffer);
      view.setUint32(0,0x04034b50,true); view.setUint16(4,20,true); view.setUint16(6,0x800,true);
      view.setUint16(12,33,true); view.setUint32(14,crc,true); view.setUint32(18,data.length,true); view.setUint32(22,data.length,true); view.setUint16(26,name.length,true); header.set(name,30);
      localParts.push(header,data);
      const central = new Uint8Array(46+name.length), cv = new DataView(central.buffer);
      cv.setUint32(0,0x02014b50,true); cv.setUint16(4,20,true); cv.setUint16(6,20,true); cv.setUint16(8,0x800,true); cv.setUint16(14,33,true);
      cv.setUint32(16,crc,true); cv.setUint32(20,data.length,true); cv.setUint32(24,data.length,true); cv.setUint16(28,name.length,true); cv.setUint32(42,offset,true); central.set(name,46);
      centralParts.push(central); centralSize += central.length; offset += header.length+data.length;
    }
    const end = new Uint8Array(22), ev = new DataView(end.buffer);
    ev.setUint32(0,0x06054b50,true); ev.setUint16(8,files.length,true); ev.setUint16(10,files.length,true); ev.setUint32(12,centralSize,true); ev.setUint32(16,offset,true);
    return new Blob([...localParts,...centralParts,end],{type:'application/zip'});
  }
  el('portrait-kit').addEventListener('click', () => {
    if (!selectedData) return;
    const binary = atob(selectedData.split(',')[1]), bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    const filename = `farah-photo.${mimeExtensions[selectedMime]}`;
    const settings = `// Generated photo settings for Farah Naaz.\nwindow.BIRTHDAY_CONTENT = ${JSON.stringify({photoPath:filename,photoAlt:'Our dear sister Farah Naaz'},null,2)};\n`;
    const blob = storedZip([{name:filename,data:bytes},{name:'site-content.js',data:new TextEncoder().encode(settings)}]);
    const url = URL.createObjectURL(blob), anchor = document.createElement('a');
    anchor.href = url; anchor.download = 'Farah-Naaz-Photo-Kit.zip'; document.body.append(anchor); anchor.click(); anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url),1000);
    statusKey = 'downloaded'; render();
  });
  document.addEventListener('birthday:language',render);
  render();
})();
