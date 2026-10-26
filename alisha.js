'use strict';
(() => {
const giftWishes = [
  {
    "id": 1,
    "category": "chatterbox",
    "roman": "Duniya mein jitna bolnay ka quota hota hai na, lagta hai akele tumne hi poora kiya hua hai! 😂 Par sach yeh hai ke tumhari wajah se hi ghar mein saari rounq rehti hai. Hamesha aise hi non-stop bolti raho aur muskurati raho! 💖",
    "en": "It feels like you alone completed the entire talking quota of the world! But honestly, you bring all the life to our home. Keep talking non-stop and smiling always!",
    "ur": "دنیا میں جتنا بولنے کا کوٹا ہوتا ہے نا، لگتا ہے اکیلے تم نے ہی پورا کیا ہوا ہے! 😂 مگر سچ یہ ہے کہ تمہاری وجہ سے ہی گھر میں ساری رونق رہتی ہے۔ ہمیشہ ایسے ہی باتیں کرتی اور مسکراتی رہو! 💖"
  },
  {
    "id": 2,
    "category": "chatterbox",
    "roman": "Tumhari baatein toh kabhi khatam hi nahi hoti, lagta hai tumhare paas baaton ka koi unlimited package hai! 😜 Hamesha aise hi khush raho, chatterbox sister! ✨",
    "en": "Your chatter never ends, feels like you have an unlimited talking package! Stay happy always, my chatterbox sister!",
    "ur": "تمہاری باتیں تو کبھی ختم ہی نہیں ہوتیں، لگتا ہے تمہارے پاس باتوں کا کوئی اَن لمیٹڈ پیکیج ہے! 😜 ہمیشہ ایسے ہی خوش رہو، میری باتونی بہن! ✨"
  },
  {
    "id": 3,
    "category": "chatterbox",
    "roman": "Pata nahi tum itna kahan se bol leti ho, par tumhari yehhi nonstop baatein ghar ko hamesha zinda-dili se bhare rakhti hain. Bohot saara pyar tumhare liye! 💖",
    "en": "I wonder where you get so much to talk about, but your non-stop talk keeps the house lively. Lots of love to you!",
    "ur": "پتا نہیں تم اتنی باتیں کہاں سے لے آتی ہو، مگر تمہاری یہی مسلسل باتیں گھر کو زندہ دلی سے بھرے رکھتی ہیں۔ تمہارے لیے بہت سارا پیار! 💖"
  },
  {
    "id": 4,
    "category": "cute",
    "roman": "Duniya ki sab se pyari behan ke liye! Tum jaisi behan ka hona kisi nemat se kam nahi. Hamesha aise hi muskurati raho! 🌸",
    "en": "To the cutest sister in the world! Having a sister like you is nothing short of a blessing. Keep smiling always!",
    "ur": "دنیا کی سب سے پیاری بہن کے لیے! تم جیسی بہن کا ہونا کسی نعمت سے کم نہیں۔ ہمیشہ ایسے ہی مسکراتی رہو! 🌸"
  },
  {
    "id": 5,
    "category": "cute",
    "roman": "Har mushkil waqt mein mera sath dene ke liye aur hamesha mera khayal rakhne ke liye shukriya. Love you my sweet sister! 💖",
    "en": "Thank you for supporting me through every tough time and always taking care of me. Love you my sweet sister!",
    "ur": "ہر مشکل وقت میں میرا ساتھ دینے اور ہمیشہ میرا خیال رکھنے کے لیے شکریہ۔ تم سے بہت پیار ہے، میری پیاری بہن! 💖"
  },
  {
    "id": 6,
    "category": "funny",
    "roman": "Tum jitni bhi bari ho jao, rahogi toh choti bandariya hi! 🐒 Par jo bhi ho, mere liye tum bohot special ho. Stay blessed!",
    "en": "No matter how big you grow, you'll still be my little monkey! But whatever it is, you are super special to me.",
    "ur": "تم جتنی بھی بڑی ہو جاؤ، رہو گی تو میری چھوٹی سی شرارتی بندریا ہی! 🐒 جو بھی ہو، میرے لیے تم بہت خاص ہو۔ ہمیشہ خوش رہو!"
  },
  {
    "id": 7,
    "category": "funny",
    "roman": "Kabhi kabhi sochti hoon tumhari baaton ka break kab aaye ga! 🤐 Phir khayal aata hai ke tumhare bina ghar kitna boring hoga. Hamesha hansti muskurati raho!",
    "en": "Sometimes I wonder when your chatter will take a break! Then I remember how boring home would be without you. Keep laughing and smiling!",
    "ur": "کبھی کبھی سوچتی ہوں تمہاری باتوں کا وقفہ کب آئے گا! 🤐 پھر خیال آتا ہے کہ تمہارے بغیر گھر کتنا بورنگ ہوگا۔ ہمیشہ ہنستی مسکراتی رہو!"
  },
  {
    "id": 8,
    "category": "birthday",
    "roman": "Salgirah Mubarak meri pyari behan! 🎂 Allah tumhein hamesha khush rakhe, har khwahish poori kare aur tumhari baatein hamesha aise hi chalti rahein! 🎉✨",
    "en": "Happy Birthday my lovely sister! May Allah keep you happy always, fulfill your wishes, and keep your chatter going!",
    "ur": "سالگرہ مبارک، میری پیاری بہن! 🎂 اللہ تمہیں ہمیشہ خوش رکھے، تمہاری ہر اچھی خواہش پوری کرے اور تمہاری پیاری باتیں ہمیشہ جاری رہیں! 🎉✨"
  },
  {
    "id": 9,
    "category": "birthday",
    "roman": "Happy Birthday to the most talkative yet sweetest sister ever! Aaj ke din bas cake khilao aur thoda kam bolo! 😜🍰",
    "en": "Happy Birthday to the most talkative yet sweetest sister ever! Today just feed me cake and talk a little less!",
    "ur": "سب سے زیادہ باتیں کرنے والی اور سب سے پیاری بہن کو سالگرہ مبارک! آج بس کیک کھلاؤ اور ذرا سا کم بولو! 😜🍰"
  }
];
// This section is Alisha's gift. Its language buttons work independently of the page language.
const ui = {
  roman: {
    eyebrow:'ALISHA KI TARAF SE EK KHAAS TOHFA', title:'Sister Wishes & Greetings', intro:'Thori si shararat, bohot saara pyaar. Meri pyaari behan Farah Naaz, yeh special surprise sirf Alisha ki taraf se hai.', sender:'Dher saare pyaar ke saath, Alisha ♡', builderTitle:'Ek wish, sirf tumhare liye', builderIntro:'Apni personality chuno aur Alisha ka pyaara sa paigham dekho.', nameLabel:'Tumhara naam', traitLabel:'Tumhari personality', generate:'Meri Special Wish Banao ✧', resultTitle:'TUMHARI PERSONALIZED WISH', copy:'Wish copy karo', share:'Wish share karo', copied:'Wish copy ho gayi! ♡', copyFailed:'Automatic copy nahi hui. Neeche diya hua text select karke copy kar lo.', fallback:'Text select karke manually copy karo.', shared:'Share window khul gayi.', shareFailed:'Share nahi ho saka. Wish copy karke bhej sakti ho.', favorite:'Favorite banao', unfavorite:'Favorite hatao', favoritesLabel:'Favorite wish', forName:'Meri pyaari behan Farah Naaz ke liye',
    filters:{all:'Sab ✨',chatterbox:'Bohat bolne wali 🗣️',cute:'Cute & sweet 💕',funny:'Thori si shararat 😂',birthday:'Birthday special 🎂'},
    traits:{chatterbox:'Bohat bolti ho 🗣️',pink:'Pink color lover 💗',chatterbox_pink:'Bohat bolti ho + pink lover 🌸',sweet:'Cute & sweet 😇',secret:'Secret keeper & supporter 🤫'},
    templates:{chatterbox:'{name}, duniya mein bolne ka quota lagta hai tumne hi poora kiya hai! 😂 Tumhari non-stop baatein ghar ki rounq hain. Hamesha aise hi bolti aur khush rehti raho! 💖',pink:'{name}, pink color ki tarah tum bhi meri zindagi mein rounq aur khushiyan bhar deti ho. Hamesha khush raho aur muskurati raho! 🌸✨',chatterbox_pink:'{name}, tumhara favorite color pink hai aur tumhari baatein kabhi khatam hi nahi hotin! 😜 Unlimited package le kar aayi ho kya? Jo bhi ho, tum mere liye sab se special ho! 🌸💖',sweet:'{name}, tum duniya ki sab se cute aur pyaari behan ho. Tumhari haseen muskurahat hamesha aise hi bani rahe! 😇💕',secret:'{name}, meri har baat sunne aur secrets sambhal kar rakhne ke liye shukriya! Tum jaisi behan ka hona ek nemat hai. Tumse bohot pyaar hai! 🤫💖'}
  },
  en: {
    eyebrow:'A SPECIAL GIFT FROM ALISHA', title:'Sister Wishes & Greetings', intro:'A little teasing, a lot of love. My dear sister Farah Naaz, this special surprise is just from Alisha, for you.', sender:'With lots of love, Alisha ♡', builderTitle:'A wish, made just for you', builderIntro:'Choose your personality and unwrap a little message from Alisha.', nameLabel:'Your name', traitLabel:'Your personality', generate:'Make My Special Wish ✧', resultTitle:'YOUR PERSONALIZED WISH', copy:'Copy wish', share:'Share wish', copied:'Wish copied! ♡', copyFailed:'Automatic copying is unavailable. Select the text below and copy it manually.', fallback:'Select this text to copy it manually.', shared:'The share window opened.', shareFailed:'Sharing was unavailable. You can copy this wish instead.', favorite:'Save as favorite', unfavorite:'Remove favorite', favoritesLabel:'Favorite wish', forName:'For my dear sister Farah Naaz',
    filters:{all:'All ✨',chatterbox:'Chatterbox 🗣️',cute:'Cute & sweet 💕',funny:'Funny & teasing 😂',birthday:'Birthday special 🎂'},
    traits:{chatterbox:'Non-stop talker 🗣️',pink:'Pink lover 💗',chatterbox_pink:'Talkative + pink lover 🌸',sweet:'Cute & sweet 😇',secret:'Secret keeper & supporter 🤫'},
    templates:{chatterbox:'{name}, you seem to have used up the whole world’s talking quota! 😂 Your non-stop stories bring our home to life. Keep chatting, smiling and being you! 💖',pink:'{name}, just like your favorite pink, you fill my life with warmth and happiness. Stay blessed and keep smiling, always! 🌸✨',chatterbox_pink:'{name}, you love pink and your stories never end! 😜 Did you come with an unlimited talking plan? Whatever the answer, you are so special to me! 🌸💖',sweet:'{name}, you are the cutest, sweetest sister. May that beautiful smile stay with you, always! 😇💕',secret:'{name}, thank you for listening to me and keeping my secrets safe. Having a sister like you is a blessing. Love you so much! 🤫💖'}
  },
  ur: {
    eyebrow:'علیشا کی طرف سے ایک خاص تحفہ', title:'بہن کے لیے پیار بھرے پیغامات', intro:'تھوڑی سی شرارت، بہت سارا پیار۔ میری پیاری بہن فرح ناز، یہ خاص سرپرائز صرف علیشا کی طرف سے تمہارے لیے ہے۔', sender:'ڈھیروں محبت کے ساتھ، علیشا ♡', builderTitle:'ایک پیغام، صرف تمہارے لیے', builderIntro:'اپنی شخصیت چنو اور علیشا کا پیارا سا پیغام دیکھو۔', nameLabel:'تمہارا نام', traitLabel:'تمہاری شخصیت', generate:'میرا خاص پیغام بناؤ ✧', resultTitle:'تمہارا خاص پیغام', copy:'پیغام کاپی کرو', share:'پیغام شیئر کرو', copied:'پیغام کاپی ہو گیا! ♡', copyFailed:'پیغام خودکار طریقے سے کاپی نہیں ہو سکا۔ نیچے دیا گیا متن منتخب کرکے خود کاپی کر لو۔', fallback:'متن منتخب کرکے خود کاپی کرو۔', shared:'شیئر کرنے کی ونڈو کھل گئی۔', shareFailed:'پیغام شیئر نہیں ہو سکا۔ تم اسے کاپی کرکے بھیج سکتی ہو۔', favorite:'پسندیدہ بناؤ', unfavorite:'پسندیدہ سے ہٹاؤ', favoritesLabel:'پسندیدہ پیغام', forName:'میری پیاری بہن فرح ناز کے لیے',
    filters:{all:'سب ✨',chatterbox:'باتونی بہن 🗣️',cute:'پیاری اور معصوم 💕',funny:'تھوڑی سی شرارت 😂',birthday:'سالگرہ کے پیغامات 🎂'},
    traits:{chatterbox:'بہت باتیں کرتی ہو 🗣️',pink:'گلابی رنگ پسند ہے 💗',chatterbox_pink:'باتونی اور گلابی رنگ کی شوقین 🌸',sweet:'پیاری اور معصوم 😇',secret:'رازدار اور مددگار 🤫'},
    templates:{chatterbox:'{name}، دنیا میں بولنے کا کوٹا لگتا ہے تم نے ہی پورا کیا ہے! 😂 تمہاری مسلسل باتیں گھر کی رونق ہیں۔ ہمیشہ ایسے ہی باتیں کرتی اور خوش رہتی رہو! 💖',pink:'{name}، گلابی رنگ کی طرح تم بھی میری زندگی میں رونق اور خوشیاں بھر دیتی ہو۔ ہمیشہ خوش رہو اور مسکراتی رہو! 🌸✨',chatterbox_pink:'{name}، تمہارا پسندیدہ رنگ گلابی ہے اور تمہاری باتیں کبھی ختم نہیں ہوتیں! 😜 کیا اَن لمیٹڈ پیکیج لے کر آئی ہو؟ جو بھی ہو، تم میرے لیے سب سے خاص ہو! 🌸💖',sweet:'{name}، تم دنیا کی سب سے پیاری اور معصوم بہن ہو۔ تمہاری حسین مسکراہٹ ہمیشہ ایسی ہی بنی رہے! 😇💕',secret:'{name}، میری ہر بات سننے اور میرے راز سنبھال کر رکھنے کے لیے شکریہ! تم جیسی بہن کا ہونا ایک نعمت ہے۔ تم سے بہت پیار ہے! 🤫💖'}
  }
};
const el = id => document.getElementById(id);
const section = el('alisha-gift');
let giftLanguage = 'roman', giftFilter = 'all', generated = null;
const favorites = new Set();
function copyTextFor(message) { return `${ui[giftLanguage].forName}\n\n${message}\n\n${ui[giftLanguage].sender}`; }
function generatedMessage() {
  if (!generated) return '';
  const defaultNames = ['Farah Naaz', 'فرح ناز'];
  const name = defaultNames.includes(generated.name) ? (giftLanguage === 'ur' ? 'فرح ناز' : 'Farah Naaz') : generated.name;
  return ui[giftLanguage].templates[generated.trait].replace('{name}', name);
}
function clearStatus() { el('gift-status').textContent = ''; el('gift-copy-fallback').hidden = true; }
function renderCustom() {
  el('gift-result').hidden = !generated;
  if (generated) el('gift-custom-text').textContent = generatedMessage();
}
function renderGift() {
  const labels = ui[giftLanguage];
  section.lang = giftLanguage === 'ur' ? 'ur' : giftLanguage === 'roman' ? 'ur-Latn' : 'en';
  section.dir = giftLanguage === 'ur' ? 'rtl' : 'ltr';
  const ids = { 'alisha-eyebrow':'eyebrow','alisha-title':'title','alisha-intro':'intro','alisha-sender':'sender','builder-title':'builderTitle','builder-intro':'builderIntro','gift-name-label':'nameLabel','gift-trait-label':'traitLabel','gift-generate':'generate','gift-result-title':'resultTitle','gift-custom-from':'sender','gift-copy':'copy','gift-share':'share','gift-fallback-label':'fallback' };
  Object.entries(ids).forEach(([id,key]) => { el(id).textContent = labels[key]; });
  section.querySelectorAll('[data-gift-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.giftLang === giftLanguage)));
  section.querySelectorAll('[data-gift-filter]').forEach(button => {
    button.textContent = labels.filters[button.dataset.giftFilter];
    button.setAttribute('aria-pressed', String(button.dataset.giftFilter === giftFilter));
  });
  el('gift-trait').querySelectorAll('option').forEach(option => { option.textContent = labels.traits[option.value]; });
  renderCustom(); renderCards();
}
function makeButton(text, action, className = 'secondary') {
  const button = document.createElement('button');
  button.type = 'button'; button.className = className; button.textContent = text;
  button.addEventListener('click', action);
  return button;
}
function renderCards() {
  const labels = ui[giftLanguage];
  const cards = giftWishes.filter(wish => giftFilter === 'all' || wish.category === giftFilter).map(wish => {
    const card = document.createElement('article'); card.className = 'gift-wish-card';
    const top = document.createElement('div'); top.className = 'gift-card-top';
    const category = document.createElement('span'); category.className = 'gift-category'; category.textContent = labels.filters[wish.category];
    const favorite = makeButton(favorites.has(wish.id) ? '♥' : '♡', () => {
      if (favorites.has(wish.id)) favorites.delete(wish.id); else favorites.add(wish.id);
      favorite.textContent = favorites.has(wish.id) ? '♥' : '♡';
      favorite.setAttribute('aria-pressed',String(favorites.has(wish.id)));
      favorite.setAttribute('aria-label', favorites.has(wish.id) ? ui[giftLanguage].unfavorite : ui[giftLanguage].favorite);
    },'gift-favorite');
    favorite.setAttribute('aria-pressed',String(favorites.has(wish.id)));
    favorite.setAttribute('aria-label',favorites.has(wish.id) ? labels.unfavorite : labels.favorite);
    top.append(category,favorite);
    const message = document.createElement('p'); message.className = 'gift-message'; message.textContent = wish[giftLanguage];
    const sender = document.createElement('p'); sender.className = 'gift-from'; sender.textContent = labels.sender;
    const actions = document.createElement('div'); actions.className = 'gift-actions';
    actions.append(makeButton(labels.copy, () => copyWish(copyTextFor(wish[giftLanguage]))), makeButton(labels.share, () => shareWish(copyTextFor(wish[giftLanguage]))));
    card.append(top,message,sender,actions); return card;
  });
  el('gift-cards').replaceChildren(...cards);
}
async function copyWish(text) {
  clearStatus();
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else {
      const field = document.createElement('textarea'); field.value = text;
      field.className = 'clipboard-helper'; document.body.append(field); field.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } finally { field.remove(); }
      if (!copied) throw new Error('Copy unavailable');
    }
    el('gift-status').textContent = ui[giftLanguage].copied;
  } catch (_) {
    el('gift-status').textContent = ui[giftLanguage].copyFailed;
    el('gift-manual-copy').value = text; el('gift-copy-fallback').hidden = false;
    el('gift-manual-copy').focus(); el('gift-manual-copy').select();
  }
}
async function shareWish(text) {
  clearStatus();
  if (navigator.share) {
    try { await navigator.share({title:ui[giftLanguage].title,text}); el('gift-status').textContent = ui[giftLanguage].shared; }
    catch(error) { if(error.name !== 'AbortError') el('gift-status').textContent = ui[giftLanguage].shareFailed; }
  } else await copyWish(text);
}
section.querySelectorAll('[data-gift-lang]').forEach(button => button.addEventListener('click', () => {
  giftLanguage = button.dataset.giftLang; clearStatus(); renderGift();
}));
section.querySelectorAll('[data-gift-filter]').forEach(button => button.addEventListener('click', () => {
  giftFilter = button.dataset.giftFilter; clearStatus(); renderGift();
}));
el('gift-form').addEventListener('submit', event => {
  event.preventDefault(); clearStatus();
  generated = {name:el('gift-name').value.trim() || (giftLanguage === 'ur' ? 'فرح ناز' : 'Farah Naaz'),trait:el('gift-trait').value};
  renderCustom();
});
el('gift-copy').addEventListener('click', () => { if (generated) copyWish(copyTextFor(generatedMessage())); });
el('gift-share').addEventListener('click', () => { if (generated) shareWish(copyTextFor(generatedMessage())); });
document.addEventListener('birthday:replay', () => {
  generated = null; giftFilter = 'all'; favorites.clear(); clearStatus();
  el('gift-name').value = 'Farah Naaz'; el('gift-trait').value = 'chatterbox_pink'; renderGift();
});
renderGift();
})();
