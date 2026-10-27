'use strict';
// The playful birthday gate and the countdown deliberately use separate dates.
// To share your own music with everyone, add assets/music.mp3 and set this to './assets/music.mp3'.
const CUSTOM_MUSIC_URL = './assets/birthday-music.mp3';
const BIRTH_DATE = '2006-10-28';
const CELEBRATION_DATE = new Date(2026, 9, 28, 0, 0, 0); // Visitor's local time.
const $ = id => document.getElementById(id);
// Bilingual copy stays in one place so both languages remain easy to edit.
const translations = {
  "brand": {
    "en": "For Farah Naaz",
    "ur": "فرح ناز کے لیے"
  },
  "headerDate": {
    "en": "28 OCTOBER · MADE WITH LOVE",
    "ur": "۲۸ اکتوبر · محبت کے ساتھ"
  },
  "welcomeEyebrow": {
    "en": "<span></span> A LITTLE SECRET, JUST FOR YOU",
    "ur": "<span></span> ایک چھوٹا سا راز، صرف تمہارے لیے"
  },
  "welcomeTitle": {
    "en": "A Special Surprise<br>for <em>Farah Naaz.</em>",
    "ur": "ایک خاص سرپرائز<br><em>فرح ناز کے لیے۔</em>"
  },
  "nickname": {
    "en": "Also known as Farah Naaz. Always one of a kind.",
    "ur": "ہماری پیاری فرح ناز۔ ہمیشہ سب سے منفرد۔"
  },
  "welcomeIntro": {
    "en": "Some people make the world a little softer,<br>a little brighter, a little more beautiful.<br>This little corner of magic is for you.",
    "ur": "کچھ لوگ دنیا کو مزید نرم،<br>مزید روشن اور مزید خوبصورت بنا دیتے ہیں۔<br>یہ پیارا سا سرپرائز تمہارے لیے ہے۔"
  },
  "dedication": {
    "en": "<span class=\"line\"></span> FROM YOUR BROTHER, ASAD <span>♡</span>",
    "ur": "<span class=\"line\"></span> تمہارے بھائی اسد کی طرف سے <span>♡</span>"
  },
  "birthdayKey": {
    "en": "YOUR BIRTHDAY IS THE KEY",
    "ur": "تمہاری تاریخِ پیدائش ہی چابی ہے"
  },
  "magicAwaits": {
    "en": "A little magic awaits.",
    "ur": "ایک پیارا سا سرپرائز منتظر ہے۔"
  },
  "enterBirthday": {
    "en": "Enter your birthday to unwrap your surprise.",
    "ur": "اپنا سرپرائز دیکھنے کے لیے تاریخِ پیدائش درج کرو۔"
  },
  "birthLabel": {
    "en": "Your date of birth",
    "ur": "تمہاری تاریخِ پیدائش"
  },
  "birthHint": {
    "en": "A special date we could never forget. ♡",
    "ur": "ایک خاص تاریخ جو ہم کبھی نہیں بھول سکتے۔ ♡"
  },
  "unlock": {
    "en": "Unlock My Surprise <span>↗</span>",
    "ur": "میرا سرپرائز کھولو <span>↗</span>"
  },
  "cardFoot": {
    "en": "A little birthday magic is waiting just for you.",
    "ur": "سالگرہ کا ایک پیارا سا سرپرائز صرف تمہارا منتظر ہے۔"
  },
  "bottomNote": {
    "en": "✧ &nbsp; ONE SPECIAL DAY. ONE VERY SPECIAL YOU. &nbsp; ✧",
    "ur": "✧ ایک خاص دن۔ ایک بہت خاص تم۔ ✧"
  },
  "countEyebrow": {
    "en": "THE WORLD GETS A LITTLE BRIGHTER IN…",
    "ur": "تمہارے خاص دن میں باقی ہیں…"
  },
  "countTitle": {
    "en": "Almost your moment,<br><em>Farah Naaz.</em>",
    "ur": "تمہارا دن آنے والا ہے،<br><em>فرح ناز۔</em>"
  },
  "countIntro": {
    "en": "28 October 2026 · A day worth counting down to.",
    "ur": "۲۸ اکتوبر ۲۰۲۶ · ایک دن جس کا بے صبری سے انتظار ہے۔"
  },
  "daysLabel": {
    "en": "Days",
    "ur": "دن"
  },
  "hoursLabel": {
    "en": "Hours",
    "ur": "گھنٹے"
  },
  "minutesLabel": {
    "en": "Minutes",
    "ur": "منٹ"
  },
  "secondsLabel": {
    "en": "Seconds",
    "ur": "سیکنڈ"
  },
  "openSurprise": {
    "en": "Open Birthday Surprise <span>✧</span>",
    "ur": "سالگرہ کا سرپرائز دیکھو <span>✧</span>"
  },
  "countHint": {
    "en": "Made for your special day. Ready whenever you are.",
    "ur": "تمہارے خاص دن کے لیے۔ جب تم چاہو، دیکھ سکتی ہو۔"
  },
  "revealEyebrow": {
    "en": "28 OCTOBER · TODAY, WE CELEBRATE YOU",
    "ur": "۲۸ اکتوبر · آج کا دن تمہارے نام"
  },
  "revealTitle": {
    "en": "Happy Birthday,<br><em>Farah Naaz!</em>",
    "ur": "سالگرہ مبارک،<br><em>فرح ناز!</em>"
  },
  "revealSub": {
    "en": "My Farah Naaz, may your world always sparkle.",
    "ur": "میری فرح ناز، تمہاری دنیا ہمیشہ روشن رہے۔"
  },
  "revealIntro": {
    "en": "Tumhari muskurahat, tumhare khwab, tumhari khushiyan.<br>Here's to a beautiful new chapter, written just for you.",
    "ur": "تمہاری مسکراہٹ، تمہارے خواب، تمہاری خوشیاں۔<br>تمہاری زندگی کے ایک خوبصورت نئے باب کے نام۔"
  },
  "begin": {
    "en": "Let the Magic Begin <span>↓</span>",
    "ur": "خوشیوں کا آغاز کرو <span>↓</span>"
  },
  "scrollNote": {
    "en": "A FEW LITTLE THINGS, FROM MY HEART TO YOURS",
    "ur": "میرے دل سے تمہارے دل تک، چند پیاری سی باتیں"
  },
  "navCake": {
    "en": "Make a wish",
    "ur": "ایک خواہش مانگو"
  },
  "navLetter": {
    "en": "Your letter",
    "ur": "تمہارا خط"
  },
  "navDuas": {
    "en": "My duas",
    "ur": "میری دعائیں"
  },
  "navWishes": {
    "en": "Tiny wishes",
    "ur": "پیاری خواہشیں"
  },
  "cakeEyebrow": {
    "en": "01 / A MOMENT OF MAGIC",
    "ur": "۰۱ / ایک یادگار لمحہ"
  },
  "cakeTitle": {
    "en": "Close your eyes.<br><em>Make a wish.</em>",
    "ur": "آنکھیں بند کرو۔<br><em>ایک خواہش مانگو۔</em>"
  },
  "cakeIntro": {
    "en": "Think of something that makes your heart happy.<br>Then let a little birthday magic do its thing.",
    "ur": "وہ سوچو جو تمہارے دل کو خوش کرتا ہے۔<br>پھر سالگرہ کی خوشیوں میں کھو جاؤ۔"
  },
  "cakeCaption": {
    "en": "A LITTLE SWEETNESS FOR YOUR SPECIAL DAY",
    "ur": "تمہارے خاص دن کے لیے تھوڑی سی مٹھاس"
  },
  "letterEyebrow": {
    "en": "02 / WORDS I MEAN WITH ALL MY HEART",
    "ur": "۰۲ / کچھ باتیں، دل کی گہرائیوں سے"
  },
  "letterTitle": {
    "en": "A Letter for <em>Farah Naaz</em>",
    "ur": "<em>فرح ناز</em> کے نام ایک خط"
  },
  "letterIntro": {
    "en": "Some feelings deserve more than a birthday text.",
    "ur": "کچھ احساسات صرف سالگرہ کے پیغام سے بڑھ کر ہوتے ہیں۔"
  },
  "envelopeEyebrow": {
    "en": "FOR YOUR EYES & YOUR HEART",
    "ur": "تمہاری آنکھوں اور تمہارے دل کے لیے"
  },
  "envelopeTitle": {
    "en": "To my dear Farah Naaz,",
    "ur": "میری پیاری فرح ناز کے نام،"
  },
  "greeting": {
    "en": "My Dear Farah Naaz,",
    "ur": "میری پیاری فرح ناز،"
  },
  "letterP1": {
    "en": "Happy Birthday! Tumhari zindagi hamesha khushiyon, sukoon, pyaar aur kamyabi se bhari rahe. Tumhari smile hamesha aisi hi roshan rahe, aur tumhare dil ki achhi wishes ek ek karke poori hoti rahen.",
    "ur": "سالگرہ مبارک! تمہاری زندگی ہمیشہ خوشیوں، سکون، پیار اور کامیابی سے بھری رہے۔ تمہاری مسکراہٹ ہمیشہ ایسی ہی روشن رہے، اور تمہارے دل کی اچھی خواہشیں ایک ایک کرکے پوری ہوتی رہیں۔"
  },
  "letterP2": {
    "en": "May Allah bless you with good health, a peaceful heart, endless barakah, and people who genuinely care for you. Har naya saal tumhare liye naye mauqay, khoobsurat yaadein aur behtareen surprises le kar aaye.",
    "ur": "اللہ تمہیں اچھی صحت، پُرسکون دل، بے شمار برکتیں اور تمہارا خیال رکھنے والے لوگ عطا فرمائے۔ ہر نیا سال تمہارے لیے نئے مواقع، خوبصورت یادیں اور بہترین سرپرائز لے کر آئے۔"
  },
  "letterP3": {
    "en": "Always remember: you are loved, you are precious, and you deserve so much happiness. Keep shining, keep smiling, and keep being wonderfully you.",
    "ur": "ہمیشہ یاد رکھنا: تم سے بہت محبت کی جاتی ہے، تم بہت قیمتی ہو، اور تم ڈھیروں خوشیوں کی حقدار ہو۔ ہمیشہ چمکتی رہو، مسکراتی رہو اور اپنی پیاری سی شخصیت برقرار رکھو۔"
  },
  "letterLove": {
    "en": "With lots of love and duas,",
    "ur": "ڈھیروں محبت اور دعاؤں کے ساتھ،"
  },
  "signature": {
    "en": "Your brother, Asad ♡",
    "ur": "تمہارا بھائی، اسد ♡"
  },
  "duasEyebrow": {
    "en": "03 / THE MOST BEAUTIFUL GIFT IS A DUA",
    "ur": "۰۳ / سب سے خوبصورت تحفہ ایک دعا ہے"
  },
  "duasTitle": {
    "en": "My Duas <em>for You</em>",
    "ur": "<em>تمہارے لیے</em> میری دعائیں"
  },
  "duasIntro": {
    "en": "Har dua mein tumhari khushi. Aaj bhi, hamesha bhi.",
    "ur": "ہر دعا میں تمہاری خوشی۔ آج بھی، ہمیشہ بھی۔"
  },
  "dua1Title": {
    "en": "Happiness & Peace",
    "ur": "خوشیاں اور سکون"
  },
  "dua1": {
    "en": "Allah tumhari zindagi ko khushiyon, sukoon aur rehmat se bhar de. Ameen.",
    "ur": "اللہ تمہاری زندگی کو خوشیوں، سکون اور رحمت سے بھر دے۔ آمین۔"
  },
  "dua2Title": {
    "en": "Success",
    "ur": "کامیابی"
  },
  "dua2": {
    "en": "Allah tumhare har nek maqsad mein asani aur kamyabi ata farmaye. Ameen.",
    "ur": "اللہ تمہارے ہر نیک مقصد میں آسانی اور کامیابی عطا فرمائے۔ آمین۔"
  },
  "dua3Title": {
    "en": "Health & Protection",
    "ur": "صحت اور حفاظت"
  },
  "dua3": {
    "en": "Allah tumhein sehat, apni hifazat aur hamesha achhe logon ka saath de. Ameen.",
    "ur": "اللہ تمہیں صحت، اپنی حفاظت اور ہمیشہ اچھے لوگوں کا ساتھ دے۔ آمین۔"
  },
  "wishesEyebrow": {
    "en": "04 / A POCKETFUL OF GOOD THINGS",
    "ur": "۰۴ / ڈھیروں پیاری سی خواہشیں"
  },
  "wishesTitle": {
    "en": "Pick a <em>Tiny Wish</em>",
    "ur": "ایک <em>پیاری سی خواہش</em> چنو"
  },
  "anotherWish": {
    "en": "Another Wish <span>↻</span>",
    "ur": "ایک اور خواہش <span>↻</span>"
  },
  "finalEyebrow": {
    "en": "TODAY. TOMORROW. ALWAYS.",
    "ur": "آج۔ کل۔ ہمیشہ۔"
  },
  "finalTitle": {
    "en": "You Are Loved,<br><em>Farah Naaz.</em>",
    "ur": "تم بہت پیاری ہو،<br><em>فرح ناز۔</em>"
  },
  "finalIntro": {
    "en": "Happy Birthday, Farah Naaz. May Allah make your coming year<br>beautiful in every way. Ameen.",
    "ur": "سالگرہ مبارک، فرح ناز۔ اللہ تمہارا آنے والا سال<br>ہر لحاظ سے خوبصورت بنائے۔ آمین۔"
  },
  "replay": {
    "en": "Replay the Surprise <span>↻</span>",
    "ur": "سرپرائز دوبارہ دیکھو <span>↻</span>"
  },
  "share": {
    "en": "Share on WhatsApp <span>↗</span>",
    "ur": "واٹس ایپ پر شیئر کرو <span>↗</span>"
  },
  "footer": {
    "en": "Made with love for Farah Naaz • 28 October.",
    "ur": "فرح ناز کے لیے محبت سے بنایا گیا • ۲۸ اکتوبر۔"
  },
  "footerSign": {
    "en": "With duas, Asad ♡",
    "ur": "دعاؤں کے ساتھ، اسد ♡"
  },
  "errorEmpty": {
    "en": "Choose your birthday first, then let the magic begin. ♡",
    "ur": "پہلے اپنی تاریخِ پیدائش چنو، پھر سرپرائز دیکھو۔ ♡"
  },
  "errorWrong": {
    "en": "Not quite, Farah Naaz! Try your special birthday again. ♡",
    "ur": "یہ تاریخ درست نہیں، فرح ناز! اپنی تاریخِ پیدائش دوبارہ چنو۔ ♡"
  },
  "countWaiting": {
    "en": "But a little love doesn't have to wait.",
    "ur": "مگر محبت کے لیے انتظار ضروری نہیں۔"
  },
  "countFinished": {
    "en": "The day is here! Happy Birthday, Farah Naaz! ♡",
    "ur": "وہ دن آ گیا! سالگرہ مبارک، فرح ناز! ♡"
  },
  "blow": {
    "en": "Blow the Candles <span>✧</span>",
    "ur": "موم بتیاں بجھاؤ <span>✧</span>"
  },
  "relight": {
    "en": "Light the Candles Again <span>↻</span>",
    "ur": "موم بتیاں دوبارہ جلاؤ <span>↻</span>"
  },
  "cakeLit": {
    "en": "Three little flames. A whole world of possibilities.",
    "ur": "تین ننھے شعلے۔ امیدوں سے بھری ایک دنیا۔"
  },
  "cakeWish": {
    "en": "Wish made! May Allah bring it to life in the most beautiful way. Ameen.",
    "ur": "خواہش مانگ لی! اللہ اسے سب سے خوبصورت انداز میں پورا فرمائے۔ آمین۔"
  },
  "cakeAriaLit": {
    "en": "Pink and cream birthday cake with three lit candles",
    "ur": "گلابی اور کریم رنگ کا سالگرہ کا کیک جس پر تین موم بتیاں روشن ہیں"
  },
  "cakeAriaUnlit": {
    "en": "Pink and cream birthday cake with three unlit candles",
    "ur": "گلابی اور کریم رنگ کا سالگرہ کا کیک جس پر تین بجھی ہوئی موم بتیاں ہیں"
  },
  "letterOpen": {
    "en": "Open My Letter <span>↗</span>",
    "ur": "میرا خط کھولو <span>↗</span>"
  },
  "letterClose": {
    "en": "Close My Letter <span>↑</span>",
    "ur": "میرا خط بند کرو <span>↑</span>"
  },
  "musicOn": {
    "en": "Music on",
    "ur": "موسیقی جاری"
  },
  "musicOff": {
    "en": "Music off",
    "ur": "موسیقی بند"
  },
  "audioUnavailable": {
    "en": "Audio unavailable",
    "ur": "آواز دستیاب نہیں"
  },
  "lightMode": {
    "en": "Light mode",
    "ur": "روشن انداز"
  },
  "darkMode": {
    "en": "Dark mode",
    "ur": "گہرا انداز"
  },
  "shareDefault": {
    "en": "A little love, worth passing on.",
    "ur": "تھوڑی سی محبت، جو بانٹنے کے قابل ہے۔"
  },
  "shareLocal": {
    "en": "Upload to GitHub Pages first. Then this button will share your real public website link.",
    "ur": "پہلے ویب سائٹ GitHub Pages پر اپ لوڈ کرو۔ پھر یہ بٹن تمہاری اصل ویب سائٹ کا لنک شیئر کرے گا۔"
  },
  "shareText": {
    "en": "Happy Birthday, Farah Naaz — My Farah Naaz! ♡ A little birthday magic, made with love by Asad.",
    "ur": "سالگرہ مبارک، فرح ناز — میری فرح ناز! ♡ اسد کی طرف سے محبت بھرا سرپرائز۔"
  },
  "countAria": {
    "en": "Time until 28 October 2026",
    "ur": "۲۸ اکتوبر ۲۰۲۶ تک باقی وقت"
  },
  "navAria": {
    "en": "Birthday sections",
    "ur": "سالگرہ کے حصے"
  },
  "wishSuffix": {
    "en": "LITTLE WISHES",
    "ur": "پیاری خواہشیں"
  },
  "pageTitle": {
    "en": "For Farah Naaz · A Birthday Full of Magic",
    "ur": "فرح ناز کے لیے · خوشیوں بھری سالگرہ"
  }
};
Object.assign(translations, { navAlisha: { en: 'Alisha’s gift ♡', ur: 'علیشا کا تحفہ ♡' } });
Object.assign(translations, {
  "introEyebrow": {
    "en": "A PINK LITTLE WORLD, MADE JUST FOR YOU",
    "ur": "ایک گلابی سی دنیا، صرف تمہارے لیے"
  },
  "introTitle": {
    "en": "A Special Surprise<br>for <em>Farah Naaz ♡</em>",
    "ur": "ایک خاص سرپرائز<br><em>فرح ناز کے لیے ♡</em>"
  },
  "introWarning": {
    "en": "⚠️ Farah Naaz ki baatein shuru hone wali hain… Volume apni marzi se control karein! 😂🎀",
    "ur": "⚠️ فرح ناز کی باتیں شروع ہونے والی ہیں… آواز اپنی مرضی سے کم یا زیادہ کریں! 😂🎀"
  },
  "introText": {
    "en": "Someone special has prepared something just for you.",
    "ur": "کسی اپنے نے صرف تمہارے لیے کچھ خاص تیار کیا ہے۔"
  },
  "introOpen": {
    "en": "Open Your Surprise <span>🎁</span>",
    "ur": "اپنا سرپرائز کھولو <span>🎁</span>"
  },
  "introSignature": {
    "en": "FROM YOUR BROTHER, ASAD · WITH UNLIMITED LOVE",
    "ur": "تمہارے بھائی اسد کی طرف سے · بے شمار محبت کے ساتھ"
  },
  "gateQuestion": {
    "en": "First, prove you’re our<br><em>birthday sister.</em>",
    "ur": "پہلے بتاؤ، کیا تم ہی ہماری<br><em>سالگرہ والی پیاری بہن ہو؟</em>"
  },
  "verifySuccess": {
    "en": "Yayyy! Birthday sister verified! 🎀 Your surprise is waiting!",
    "ur": "واہ! ہماری سالگرہ والی پیاری بہن آ گئی! 🎀 تمہارا سرپرائز منتظر ہے!"
  },
  "gateContinue": {
    "en": "Unlock My Birthday Magic <span>✧</span>",
    "ur": "میری سالگرہ کی خوشیاں دکھاؤ <span>✧</span>"
  },
  "celebrateAgain": {
    "en": "Celebrate Again 🎉",
    "ur": "دوبارہ جشن مناؤ 🎉"
  },
  "heroLetter": {
    "en": "Read My Secret Letter 💌",
    "ur": "میرا خاص خط پڑھو 💌"
  },
  "heroDuas": {
    "en": "Your Special Duas 🤲",
    "ur": "تمہارے لیے خاص دعائیں 🤲"
  },
  "heroFunny": {
    "en": "Funny Farah Naaz Zone 😂",
    "ur": "فرح ناز کی ہنسی مذاق کی دنیا 😂"
  },
  "navFunny": {
    "en": "Funny zone 😂",
    "ur": "ہنسی مذاق 😂"
  },
  "funnyEyebrow": {
    "en": "FROM ASAD / TALKING MODE: ALWAYS ON",
    "ur": "اسد کی طرف سے / باتوں کا سلسلہ ہمیشہ جاری"
  },
  "funnyTitle": {
    "en": "Farah Naaz’s Nonstop<br><em>Talking Department</em>",
    "ur": "فرح ناز کا نہ رکنے والا<br><em>باتوں کا محکمہ</em>"
  },
  "funnySubtitle": {
    "en": "Officially the CEO of Never-Ending Conversations! 👑🤣",
    "ur": "نہ ختم ہونے والی گفتگو کی باقاعدہ سربراہ! 👑🤣"
  },
  "funnyIntro": {
    "en": "A little sibling teasing. A whole lot of love. Pick your mood, Farah Naaz.",
    "ur": "بہن بھائی کی تھوڑی سی چھیڑ چھاڑ، بہت سارا پیار۔ اپنا موڈ چنو، فرح ناز۔"
  },
  "compliment": {
    "en": "Compliment Me 💖",
    "ur": "میری تعریف کرو 💖"
  },
  "roast": {
    "en": "Roast Me Gently 😂",
    "ur": "ذرا سی چھیڑ چھاڑ 😂"
  },
  "joke": {
    "en": "Tell Me a Joke 🤣",
    "ur": "کوئی لطیفہ سناؤ 🤣"
  },
  "funnyAnother": {
    "en": "Another Message 🎀",
    "ur": "ایک اور پیغام 🎀"
  },
  "funnyDefault": {
    "en": "Battery: 100% 🔋 Talking mode: ALWAYS ON! 🎤😂",
    "ur": "بیٹری: ۱۰۰٪ 🔋 باتوں کا موڈ: ہمیشہ جاری! 🎤😂"
  },
  "funnyFrom": {
    "en": "With a little teasing & lots of love — Asad ♡",
    "ur": "تھوڑی شرارت، ڈھیروں محبت — اسد ♡"
  },
  "dua4Title": {
    "en": "Ease at Every Step",
    "ur": "ہر قدم پر آسانی"
  },
  "dua4": {
    "en": "Ya Allah, Farah Naaz ke liye aasaniyan paida farma, usay har achi manzil tak pohanchne ki taufeeq de, uske dil ko sukoon aur zindagi ko khushiyon se bhar de. Ameen.",
    "ur": "یا اللہ، فرح ناز کے لیے آسانیاں پیدا فرما، اسے ہر اچھی منزل تک پہنچنے کی توفیق دے، اس کے دل کو سکون اور زندگی کو خوشیوں سے بھر دے۔ آمین۔"
  },
  "letterExtra1": {
    "en": "You are not just my sister; you are one of the most precious blessings in my life. Your smile brings happiness, your laughter makes ordinary moments special, and your nonstop talking makes our memories even more unforgettable! 😂💕",
    "ur": "تم صرف میری بہن نہیں، میری زندگی کی سب سے قیمتی نعمتوں میں سے ایک ہو۔ تمہاری مسکراہٹ خوشی لاتی ہے، تمہاری ہنسی عام لمحوں کو خاص بنا دیتی ہے اور تمہاری مسلسل باتیں ہماری یادوں کو اور بھی یادگار بناتی ہیں! 😂💕"
  },
  "letterExtra2": {
    "en": "Kabhi tumhari baatein khatam nahi hotin, aur kabhi hamari sunne ki himmat! 😂 Lekin sach yeh hai ke tumhari yahi funny aur cheerful personality tumhein special banati hai.",
    "ur": "کبھی تمہاری باتیں ختم نہیں ہوتیں، اور کبھی ہماری سننے کی ہمت! 😂 لیکن سچ یہ ہے کہ تمہاری یہی ہنستی مسکراتی اور خوش مزاج شخصیت تمہیں خاص بناتی ہے۔"
  },
  "letterExtra3": {
    "en": "I pray that Allah always protects you, keeps you healthy and happy, gives you success in every good thing you do, and fills your life with love, peace, barakah, and countless blessings.",
    "ur": "میری دعا ہے کہ اللہ ہمیشہ تمہاری حفاظت کرے، تمہیں صحت مند اور خوش رکھے، ہر اچھے کام میں کامیابی دے اور تمہاری زندگی کو محبت، سکون، برکت اور بے شمار نعمتوں سے بھر دے۔"
  },
  "letterExtra4": {
    "en": "May you always have reasons to smile, courage to follow your dreams, and people around you who genuinely care for you.",
    "ur": "تمہیں ہمیشہ مسکرانے کی وجوہات، اپنے خواب پورے کرنے کا حوصلہ اور تمہارا خیال رکھنے والے لوگوں کا ساتھ ملتا رہے۔"
  },
  "letterExtra5": {
    "en": "No matter how much we joke, tease each other, or laugh together, remember that you will always be my precious sister.",
    "ur": "ہم چاہے جتنا بھی مذاق کریں، ایک دوسرے کو چھیڑیں یا مل کر ہنسیں، یاد رکھنا کہ تم ہمیشہ میری قیمتی بہن رہو گی۔"
  },
  "letterExtra6": {
    "en": "Keep smiling, keep shining, and yes… keep talking! Because life would be much quieter without you! 😂💗",
    "ur": "مسکراتی رہو، چمکتی رہو، اور ہاں… باتیں بھی کرتی رہو! کیونکہ تمہارے بغیر زندگی بہت خاموش ہو جائے گی! 😂💗"
  },
  "letterExtra7": {
    "en": "Happy Birthday, Farah Naaz — My Dear Sister Farah Naaz! 👑🎂",
    "ur": "سالگرہ مبارک، فرح ناز — میری پیاری بہن فرح ناز! 👑🎂"
  },
  "mute": {
    "en": "Mute",
    "ur": "آواز بند"
  },
  "unmute": {
    "en": "Unmute",
    "ur": "آواز کھولو"
  },
  "volume": {
    "en": "Music volume",
    "ur": "موسیقی کی آواز"
  },
  "backTop": {
    "en": "Back to Top ↑",
    "ur": "اوپر جاؤ ↑"
  },
  "returnMain": {
    "en": "Return to Main Celebration ↑",
    "ur": "سالگرہ کے جشن پر واپس جاؤ ↑"
  },
  "footerLine": {
    "en": "One sister, endless conversations, unlimited love! 😂💖",
    "ur": "ایک بہن، نہ ختم ہونے والی باتیں، بے شمار محبت! 😂💖"
  },
  "welcomeTitle": {
    "en": "First, prove you’re our<br><em>birthday sister.</em>",
    "ur": "پہلے بتاؤ، کیا تم ہی ہماری<br><em>سالگرہ والی پیاری بہن ہو؟</em>"
  },
  "errorWrong": {
    "en": "Ohooo! 😂 Wrong date! Sister, try again! 💗",
    "ur": "اوہو! 😂 تاریخ غلط ہے! بہن، دوبارہ کوشش کرو! 💗"
  },
  "unlock": {
    "en": "Check My Birthday <span>♡</span>",
    "ur": "میری تاریخ چیک کرو <span>♡</span>"
  },
  "revealSub": {
    "en": "My Dear Sister Farah Naaz 👑💕",
    "ur": "میری پیاری بہن فرح ناز 👑💕"
  },
  "revealIntro": {
    "en": "Today is all about you, Farah Naaz! Your smile makes our world brighter, your laughter makes our home happier, and your endless talking makes every moment unforgettable! 😂💗",
    "ur": "آج کا دن صرف تمہارے نام ہے، فرح ناز! تمہاری مسکراہٹ ہماری دنیا روشن کرتی ہے، تمہاری ہنسی گھر کو خوشیوں سے بھر دیتی ہے اور تمہاری نہ ختم ہونے والی باتیں ہر لمحے کو یادگار بنا دیتی ہیں! 😂💗"
  },
  "countTitle": {
    "en": "Farah Naaz’s Special Day<br><em>Is Almost Here!</em>",
    "ur": "فرح ناز کا خاص دن<br><em>بس آنے والا ہے!</em>"
  },
  "countFinished": {
    "en": "It’s Farah Naaz’s Birthday! Let the pink magic begin! 🎉💖",
    "ur": "فرح ناز کی سالگرہ آ گئی! گلابی خوشیوں کا آغاز کرو! 🎉💖"
  },
  "cakeWish": {
    "en": "May all your beautiful wishes come true, Farah Naaz! May Allah bring them to life in the most beautiful way. Ameen. 💗",
    "ur": "فرح ناز، تمہاری تمام خوبصورت خواہشیں پوری ہوں! اللہ انہیں سب سے خوبصورت انداز میں پورا فرمائے۔ آمین۔ 💗"
  },
  "letterTitle": {
    "en": "A Secret Letter <em>from Asad</em>",
    "ur": "<em>اسد کی طرف سے</em> ایک خاص خط"
  },
  "greeting": {
    "en": "My Dearest Farah Naaz, 💗",
    "ur": "میری سب سے پیاری فرح ناز، 💗"
  },
  "letterP1": {
    "en": "Happy Birthday to my beautiful sister!",
    "ur": "میری خوبصورت بہن کو سالگرہ مبارک!"
  },
  "duasTitle": {
    "en": "My Duas for You,<br><em>Farah Naaz 🤍</em>",
    "ur": "تمہارے لیے میری دعائیں،<br><em>فرح ناز 🤍</em>"
  },
  "dua1": {
    "en": "May Allah bless you with good health, happiness, peace of heart, beneficial knowledge, success, and a life full of barakah. Ameen. 🤲",
    "ur": "اللہ تمہیں اچھی صحت، خوشیاں، دل کا سکون، فائدہ مند علم، کامیابی اور برکتوں بھری زندگی عطا فرمائے۔ آمین۔ 🤲"
  },
  "dua2": {
    "en": "Allah tumhein hamesha apni hifazat mein rakhay, tumhari jaiz khwahishat poori farmaye, tumhein kamyabi aur sukoon ata farmaye, aur duniya-o-aakhirat mein bhalai naseeb kare. Ameen. 💗",
    "ur": "اللہ تمہیں ہمیشہ اپنی حفاظت میں رکھے، تمہاری جائز خواہشات پوری فرمائے، تمہیں کامیابی اور سکون عطا فرمائے اور دنیا و آخرت میں بھلائی نصیب کرے۔ آمین۔ 💗"
  },
  "dua3": {
    "en": "May Allah protect your smile, guide your steps toward what is good, keep you surrounded by sincere people, and grant you a beautiful future. Ameen.",
    "ur": "اللہ تمہاری مسکراہٹ سلامت رکھے، تمہارے قدم اچھائی کی طرف بڑھائے، تمہیں مخلص لوگوں کا ساتھ دے اور خوبصورت مستقبل عطا فرمائے۔ آمین۔"
  },
  "wishesTitle": {
    "en": "Little Messages,<br><em>Big Love 💗</em>",
    "ur": "چھوٹے چھوٹے پیغامات،<br><em>بہت سا پیار 💗</em>"
  },
  "anotherWish": {
    "en": "Give Me a Surprise Wish <span>✧</span>",
    "ur": "مجھے ایک پیارا سا پیغام دو <span>✧</span>"
  },
  "footer": {
    "en": "Made with Love by Asad 💗",
    "ur": "اسد کی طرف سے محبت کے ساتھ 💗"
  },
  "footerSign": {
    "en": "Especially for Farah Naaz — My Farah Naaz 👑",
    "ur": "خاص فرح ناز کے لیے — میری فرح ناز 👑"
  }
});
Object.assign(translations, {
  "brand": {
    "en": "For Our Sister ♡",
    "ur": "ہماری بہن کے لیے ♡"
  },
  "introTitle": {
    "en": "A Special Surprise<br>for <em>My Sister Farah Naaz ♡</em>",
    "ur": "ایک خاص سرپرائز<br><em>میری بہن فرح ناز کے لیے ♡</em>"
  },
  "nickname": {
    "en": "My dear sister Farah Naaz, lovingly called Farah Naaz.",
    "ur": "میری پیاری بہن فرح ناز، جسے ہم پیار سے فرح ناز کہتے ہیں۔"
  },
  "welcomeTitle": {
    "en": "A little birthday check<br>for <em>my dear sister.</em>",
    "ur": "ایک چھوٹی سی تاریخ کی پہچان،<br><em>میری پیاری بہن کے لیے۔</em>"
  },
  "gateQuestion": {
    "en": "A little birthday check<br>for <em>my dear sister.</em>",
    "ur": "ایک چھوٹی سی تاریخ کی پہچان،<br><em>میری پیاری بہن کے لیے۔</em>"
  },
  "verifySuccess": {
    "en": "Yayyy! That’s my sister’s birthday! 🎀 Your surprise is waiting!",
    "ur": "واہ! یہ تو میری پیاری بہن کی سالگرہ ہے! 🎀 تمہارا سرپرائز منتظر ہے!"
  },
  "revealTitle": {
    "en": "Happy Birthday,<br><em>My Sister Farah Naaz!</em>",
    "ur": "سالگرہ مبارک،<br><em>میری بہن فرح ناز!</em>"
  },
  "revealSub": {
    "en": "My dear sister Farah Naaz, always close to my heart ♡",
    "ur": "میری پیاری بہن فرح ناز، ہمیشہ میرے دل کے قریب ♡"
  },
  "countTitle": {
    "en": "My Sister Farah Naaz’s Day<br><em>Is Almost Here!</em>",
    "ur": "میری بہن فرح ناز کا خاص دن<br><em>بس آنے والا ہے!</em>"
  },
  "letterTitle": {
    "en": "A Brother’s Letter<br><em>for His Dear Sister</em>",
    "ur": "ایک بھائی کا خط،<br><em>اپنی پیاری بہن کے نام</em>"
  },
  "greeting": {
    "en": "My Dearest Sister Farah Naaz, 💗",
    "ur": "میری سب سے پیاری بہن فرح ناز، 💗"
  },
  "letterExtra7": {
    "en": "Happy Birthday to my dear sister Farah Naaz — my lovely sister Farah Naaz! ♡🎂",
    "ur": "سالگرہ مبارک، میری پیاری بہن فرح ناز — میری پیاری بہن فرح ناز! ♡🎂"
  },
  "duasTitle": {
    "en": "My Duas for My Sister,<br><em>Farah Naaz 🤍</em>",
    "ur": "میری بہن کے لیے میری دعائیں،<br><em>فرح ناز 🤍</em>"
  },
  "finalTitle": {
    "en": "You Are Loved,<br><em>My Dear Sister.</em>",
    "ur": "تم بہت پیاری ہو،<br><em>میری عزیز بہن۔</em>"
  },
  "finalIntro": {
    "en": "Happy Birthday, my dear sister Farah Naaz. May Allah make your coming year<br>beautiful in every way. Ameen.",
    "ur": "سالگرہ مبارک، میری پیاری بہن فرح ناز۔ اللہ تمہارا آنے والا سال<br>ہر لحاظ سے خوبصورت بنائے۔ آمین۔"
  },
  "footerSign": {
    "en": "Especially for my sister Farah Naaz — my dear sister Farah Naaz ♡",
    "ur": "خاص میری بہن فرح ناز کے لیے — میری پیاری بہن فرح ناز ♡"
  },
  "shareText": {
    "en": "Happy Birthday to my dear sister Farah Naaz! ♡ A little birthday surprise, made with love by Asad.",
    "ur": "میری پیاری بہن فرح ناز کو سالگرہ مبارک! ♡ اسد کی طرف سے محبت بھرا سرپرائز۔"
  },
  "funnyEyebrow": {
    "en": "FROM ASAD & ALISHA / TALKING MODE: ALWAYS ON",
    "ur": "اسد اور علیشا کی طرف سے / باتوں کا سلسلہ ہمیشہ جاری"
  },
  "funnyTitle": {
    "en": "Our Sister Farah Naaz’s<br><em>Nonstop Talking Department</em>",
    "ur": "ہماری بہن فرح ناز کا<br><em>نہ رکنے والا باتوں کا محکمہ</em>"
  },
  "funnyIntro": {
    "en": "From Asad & Alisha, for our dear sister Farah Naaz. A little teasing, a whole lot of love.",
    "ur": "اسد اور علیشا کی طرف سے، اپنی پیاری بہن فرح ناز کے لیے۔ تھوڑی سی شرارت، بہت سارا پیار۔"
  },
  "funnyFrom": {
    "en": "With a little teasing & lots of love — Asad & Alisha ♡",
    "ur": "تھوڑی شرارت، ڈھیروں محبت — اسد اور علیشا ♡"
  },
  "myMusic": {
    "en": "My music ♫",
    "ur": "میری موسیقی ♫"
  },
  "chooseMusic": {
    "en": "Choose your audio file",
    "ur": "اپنی آڈیو فائل منتخب کریں"
  },
  "customMusicHelp": {
    "en": "Choose an MP3, WAV or other supported audio file. It stays on this device and does not upload. To share the same song with everyone, see README.",
    "ur": "MP3، WAV یا دوسری سپورٹڈ آڈیو فائل چنیں۔ یہ اسی ڈیوائس پر رہتی ہے، کہیں اپ لوڈ نہیں ہوتی۔ سب کے لیے ایک ہی گانا لگانے کا طریقہ README میں ہے۔"
  },
  "defaultMusic": {
    "en": "Use original tune",
    "ur": "اصل دھن چلائیں"
  },
  "musicDefaultStatus": {
    "en": "Original gentle melody selected. Press Music to play.",
    "ur": "اصل نرم دھن منتخب ہے۔ چلانے کے لیے موسیقی کا بٹن دبائیں۔"
  },
  "musicSelected": {
    "en": "Your audio is selected: ",
    "ur": "آپ کی آڈیو منتخب ہے: "
  },
  "musicReady": {
    "en": "Press Music to play it.",
    "ur": "چلانے کے لیے موسیقی کا بٹن دبائیں۔"
  },
  "musicInvalid": {
    "en": "Choose a supported audio file, such as MP3 or WAV.",
    "ur": "سپورٹڈ آڈیو فائل منتخب کریں، مثلاً MP3 یا WAV۔"
  },
  "musicFileError": {
    "en": "This audio could not play. Try another file or use the original tune.",
    "ur": "یہ آڈیو نہیں چل سکی۔ دوسری فائل چنیں یا اصل دھن استعمال کریں۔"
  }
});
Object.assign(translations, {"nickname": {"en": "My dear sister Farah Naaz. One name, so much love.", "ur": "میری پیاری بہن فرح ناز۔ ایک نام، ڈھیروں محبت۔"}, "footerSign": {"en": "Especially for my dear sister Farah Naaz ♡", "ur": "خاص میری پیاری بہن فرح ناز کے لیے ♡"}, "letterExtra7": {"en": "Happy Birthday, my dear sister Farah Naaz! ♡🎂", "ur": "سالگرہ مبارک، میری پیاری بہن فرح ناز! ♡🎂"}, "shareText": {"en": "Happy Birthday to my dear sister Farah Naaz! ♡ A birthday surprise made with love by Asad, with a special gift from Alisha.", "ur": "میری پیاری بہن فرح ناز کو سالگرہ مبارک! ♡ اسد کی طرف سے محبت بھرا سرپرائز، علیشا کے خاص تحفے کے ساتھ۔"}, "navPhoto": {"en": "Farah Naaz’s portrait ♡", "ur": "فرح ناز کی تصویر ♡"}});
let currentLanguage = 'en';
let currentTheme = 'light';
let audioUnavailable = false;
let birthdayVerified = false;
let musicMuted = false, musicVolume = .6, masterGain = null, musicGeneration = 0;
let shareNeedsDeployment = false;
function t(key) { return translations[key][currentLanguage]; }
// Storage can be blocked in private browsing or when opening a local file.
function savePreference(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
function readPreference(key) { try { return localStorage.getItem(key); } catch (_) { return null; } }
function applyTheme(theme) {
  currentTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = currentTheme;
  $('theme-toggle').setAttribute('aria-pressed', String(currentTheme === 'light'));
  $('theme-toggle').querySelector('[aria-hidden]').textContent = currentTheme === 'light' ? '☾' : '☀';
  $('theme-label').textContent = t(currentTheme === 'light' ? 'darkMode' : 'lightMode');
  document.querySelector('meta[name="theme-color"]').content = currentTheme === 'light' ? '#fff6f8' : '#29191f';
  savePreference('farah-naaz-rose-theme', currentTheme);
}
function renderCake() {
  $('cake-art').setAttribute('aria-label', t(candlesLit ? 'cakeAriaLit' : 'cakeAriaUnlit'));
  $('blow').innerHTML = t(candlesLit ? 'blow' : 'relight');
  $('cake-message').textContent = t(candlesLit ? 'cakeLit' : 'cakeWish');
}
function renderLetterButton() {
  $('letter-toggle').innerHTML = t($('letter').hidden ? 'letterOpen' : 'letterClose');
}
function applyLanguage(language) {
  currentLanguage = language === 'ur' ? 'ur' : 'en';
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ur' ? 'rtl' : 'ltr';
  document.title = t('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach(element => { element.innerHTML = t(element.dataset.i18n); });
  $('language-toggle').textContent = currentLanguage === 'ur' ? 'English' : 'اردو';
  $('language-toggle').lang = currentLanguage === 'ur' ? 'en' : 'ur';
  $('language-toggle').setAttribute('aria-label', currentLanguage === 'ur' ? 'Switch to English' : 'اردو میں تبدیل کریں');
  document.querySelector('.timer').setAttribute('aria-label', t('countAria'));
  document.querySelector('.section-nav').setAttribute('aria-label', t('navAria'));
  if ($('birthday').getAttribute('aria-invalid') === 'true') {
    $('error').textContent = t($('birthday').value ? 'errorWrong' : 'errorEmpty');
  }
  updateCountdown(); renderCake(); renderLetterButton(); renderWish(); musicLabel(); renderFunny(); renderVerification(); renderMusicSource();
  $('share-note').textContent = t(shareNeedsDeployment ? 'shareLocal' : 'shareDefault');
  applyTheme(currentTheme);
  savePreference('farah-naaz-language', currentLanguage);
  document.dispatchEvent(new CustomEvent('birthday:language', {detail:currentLanguage}));
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const wishes = [
  'May your heart always find a reason to smile.',
  'You deserve all the pink roses and golden moments in the world! 🌹💗',
  'May your new year of life be filled with happiness and beautiful surprises! 🎁',
  'Stay happy, stay kind, and keep being your wonderfully talkative self! 😂',
  'May every new day bring you closer to your dreams. 💖',
  'A sister like you makes life extra special. Happy Birthday! 🎂',
  'My dear sister Farah Naaz, may your smile always shine! 👑✨',
  'Allah tumhari har nek dua qubool farmaye. Ameen.',
  'May your dreams grow bigger and your worries grow smaller.',
  'Tumhari zindagi pyaar, sukoon aur barakah se bhari rahe.',
  'May you always be surrounded by people who value your beautiful heart.',
  'Allah tumhein sehat, hifazat aur duniya-o-aakhirat ki bhalai ata farmaye. Ameen.'
];
const urduWishes = ["تمہارے دل کو ہمیشہ مسکرانے کی کوئی نہ کوئی وجہ ملتی رہے۔", "تم دنیا کے تمام گلابی گلابوں اور سنہرے لمحوں کی حقدار ہو! 🌹💗", "تمہاری زندگی کا نیا سال خوشیوں اور خوبصورت سرپرائز سے بھرا ہو! 🎁", "خوش رہو، مہربان رہو اور اپنی پیاری سی باتونی شخصیت برقرار رکھو! 😂", "ہر نیا دن تمہیں تمہارے خوابوں کے قریب لے جائے۔ 💖", "تم جیسی بہن زندگی کو بہت خاص بنا دیتی ہے۔ سالگرہ مبارک! 🎂", "میری پیاری بہن فرح ناز، تمہاری مسکراہٹ ہمیشہ روشن رہے! 👑✨", "اللہ تمہاری ہر نیک دعا قبول فرمائے۔ آمین۔", "تمہارے خواب بڑے ہوتے جائیں اور پریشانیاں چھوٹی ہوتی جائیں۔", "تمہاری زندگی پیار، سکون اور برکت سے بھری رہے۔", "تم ہمیشہ ایسے لوگوں کے درمیان رہو جو تمہارے خوبصورت دل کی قدر کریں۔", "اللہ تمہیں صحت، حفاظت اور دنیا و آخرت کی بھلائی عطا فرمائے۔ آمین۔"];
let wishIndex = 0, candlesLit = true, audioContext = null, musicTimer = null, noteIndex = 0;
let musicOn = false, musicBusy = false;
const musicPlayer = $('custom-audio');
let customMusicURL = CUSTOM_MUSIC_URL;
let customObjectURL = null;
let customMusicName = CUSTOM_MUSIC_URL ? CUSTOM_MUSIC_URL.split('/').pop() : '';
let musicFileFailed = false;
if (customMusicURL) musicPlayer.src = customMusicURL;
const activeNotes = new Set();
let confettiTimer;
function showScreen(name) {
  ['intro', 'welcome', 'countdown', 'celebration'].forEach(id => { $(id).hidden = id !== name; });
  $('return-main').hidden = name !== 'celebration';
  window.scrollTo({ top: 0, behavior: 'instant' });
  const heading = $(name).querySelector('h1');
  heading.setAttribute('tabindex', '-1');
  heading.focus({ preventScroll: true });
}
$('unlock-form').addEventListener('submit', event => {
  event.preventDefault();
  if ($('birthday').value !== BIRTH_DATE) {
    birthdayVerified = false; renderVerification();
    $('error').textContent = t($('birthday').value ? 'errorWrong' : 'errorEmpty');
    $('birthday').setAttribute('aria-invalid', 'true');
    $('birthday').focus();
    return;
  }
  $('error').textContent = '';
  $('birthday').removeAttribute('aria-invalid');
  birthdayVerified = true;
  renderVerification();
  $('gate-continue').focus();
});
$('intro-open').addEventListener('click', () => showScreen('welcome'));
function renderVerification() {
  $('verified-message').hidden = !birthdayVerified;
  $('gate-continue').hidden = !birthdayVerified;
  $('verified-message').textContent = birthdayVerified ? t('verifySuccess') : '';
}
$('birthday').addEventListener('input', () => {
  birthdayVerified = false; renderVerification(); $('error').textContent = ''; $('birthday').removeAttribute('aria-invalid');
});
$('gate-continue').addEventListener('click', () => {
  if (!birthdayVerified || $('birthday').value !== BIRTH_DATE) return;
  if (countdownParts().finished) { showScreen('celebration'); celebrate(); }
  else { updateCountdown(); showScreen('countdown'); }
});
function countdownParts(now = Date.now()) {
  const remaining = Math.max(0, CELEBRATION_DATE.getTime() - now);
  const seconds = Math.floor(remaining / 1000);
  return { days: Math.floor(seconds / 86400), hours: Math.floor(seconds / 3600) % 24, minutes: Math.floor(seconds / 60) % 60, seconds: seconds % 60, finished: remaining === 0 };
}
function updateCountdown() {
  const parts = countdownParts();
  ['days', 'hours', 'minutes', 'seconds'].forEach(key => { $(key).textContent = String(parts[key]).padStart(2, '0'); });
  $('count-message').textContent = t(parts.finished ? 'countFinished' : 'countWaiting');
  if (parts.finished && !$('countdown').hidden && birthdayVerified) { showScreen('celebration'); celebrate(); }
}
updateCountdown();
setInterval(updateCountdown, 1000);
function celebrate() {
  if (reducedMotion.matches) return;
  clearTimeout(confettiTimer);
  $('confetti').replaceChildren();
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 75; i++) {
    const piece = document.createElement('i');
    piece.className = 'confetto';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = ['#efbad3', '#dfc79b', '#bfa0e2', '#fff0dd'][i % 4];
    piece.style.setProperty('--duration', `${3 + Math.random() * 2}s`);
    piece.style.setProperty('--delay', `${Math.random() * .6}s`);
    piece.style.setProperty('--drift', `${Math.random() * 240 - 120}px`);
    fragment.append(piece);
  }
  $('confetti').append(fragment);
  confettiTimer = setTimeout(() => $('confetti').replaceChildren(), 6000);
}
$('open-surprise').addEventListener('click', () => { showScreen('celebration'); celebrate(); });
$('blow').addEventListener('click', () => {
  candlesLit = !candlesLit;
  $('cake-art').classList.toggle('unlit', !candlesLit);
  renderCake();
  if (!candlesLit) celebrate();
});
$('letter-toggle').addEventListener('click', () => {
  const opening = $('letter').hidden;
  $('letter').hidden = !opening;
  $('letter-toggle').setAttribute('aria-expanded', String(opening));
  renderLetterButton();
});
function renderWish() {
  $('wish').textContent = (currentLanguage === 'ur' ? urduWishes : wishes)[wishIndex];
  $('wish-count').textContent = `${String(wishIndex + 1).padStart(2, '0')} / ${String(wishes.length).padStart(2, '0')} ${t('wishSuffix')}`;
  $('wish').classList.remove('new-wish');
  void $('wish').offsetWidth;
  $('wish').classList.add('new-wish');
}
$('another-wish').addEventListener('click', () => {
  // Pick randomly from the other messages, so consecutive clicks never repeat.
  wishIndex = (wishIndex + 1 + Math.floor(Math.random() * (wishes.length - 1))) % wishes.length; renderWish();
});
renderWish();
// Original gentle melody generated locally; no audio files or external requests.
const melody = [60, 64, 67, 71, 69, 67, 64, 62, 65, 69, 72, 76, 74, 69, 65, 62];
function playNote() {
  if (!musicOn || customMusicURL || !audioContext || audioContext.state !== 'running') return;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;
  oscillator.type = 'sine';
  oscillator.frequency.value = 440 * Math.pow(2, (melody[noteIndex++ % melody.length] - 69) / 12);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(.055, now + .04);
  gain.gain.exponentialRampToValueAtTime(.0001, now + 1.25);
  oscillator.connect(gain); gain.connect(masterGain);
  activeNotes.add(oscillator);
  oscillator.onended = () => { activeNotes.delete(oscillator); oscillator.disconnect(); gain.disconnect(); };
  oscillator.start(now); oscillator.stop(now + 1.3);
}
function musicLabel() {
  $('music').querySelector('span').textContent = t(audioUnavailable ? 'audioUnavailable' : musicOn ? 'musicOn' : 'musicOff');
  $('music').setAttribute('aria-pressed', String(musicOn));
  $('volume').setAttribute('aria-label', t('volume'));
  $('mute').textContent = t(musicMuted ? 'unmute' : 'mute');
  $('mute').setAttribute('aria-pressed', String(musicMuted));
  musicPlayer.muted = musicMuted; musicPlayer.volume = musicVolume;
  if (masterGain && audioContext) masterGain.gain.setTargetAtTime(musicMuted ? 0 : musicVolume, audioContext.currentTime, .02);
}
function stopMusic() {
  musicOn = false; musicGeneration++;
  musicPlayer.pause();
  clearInterval(musicTimer); musicTimer = null;
  activeNotes.forEach(note => { try { note.stop(); } catch (_) { /* Already ended. */ } });
  activeNotes.clear();
  musicLabel();
}
$('music').addEventListener('click', async () => {
  if (musicBusy) return;
  if (musicOn) { stopMusic(); return; }
  musicBusy = true;
  const generation = ++musicGeneration;
  try {
    if (customMusicURL) {
      musicPlayer.muted = musicMuted; musicPlayer.volume = musicVolume;
      await musicPlayer.play();
      if (generation !== musicGeneration) { musicPlayer.pause(); return; }
    } else {
      const AudioConstructor = window.AudioContext || window.webkitAudioContext;
      if (!AudioConstructor) throw new Error('Web Audio unavailable');
      audioContext ||= new AudioConstructor();
      if (!masterGain) { masterGain = audioContext.createGain(); masterGain.connect(audioContext.destination); }
      masterGain.gain.value = musicMuted ? 0 : musicVolume;
      await audioContext.resume();
      if (generation !== musicGeneration) return;
    }
    audioUnavailable = false; musicFileFailed = false; musicOn = true;
    clearInterval(musicTimer);
    if (!customMusicURL) { playNote(); musicTimer = setInterval(playNote, 550); }
    musicLabel(); renderMusicSource();
  } catch (_) {
    stopMusic(); audioUnavailable = true; musicFileFailed = Boolean(customMusicURL);
    musicLabel(); renderMusicSource();
  } finally { musicBusy = false; }
});
function renderMusicSource() {
  $('music-source-status').textContent = musicFileFailed ? t('musicFileError') : customMusicURL ? `${t('musicSelected')}${customMusicName}. ${t('musicReady')}` : t('musicDefaultStatus');
}
function clearCustomObjectURL() {
  if (customObjectURL) { URL.revokeObjectURL(customObjectURL); customObjectURL = null; }
}
$('music-file').addEventListener('change', () => {
  const file = $('music-file').files[0];
  if (!file) return;
  if (!file.type.startsWith('audio/') && !/\.(mp3|wav|ogg|m4a|aac|flac|webm)$/i.test(file.name)) {
    $('music-source-status').textContent = t('musicInvalid'); $('music-file').value = ''; return;
  }
  stopMusic(); clearCustomObjectURL();
  customObjectURL = URL.createObjectURL(file); customMusicURL = customObjectURL; customMusicName = file.name;
  musicPlayer.src = customMusicURL; musicPlayer.load();
  musicFileFailed = false; audioUnavailable = false;
  musicLabel(); renderMusicSource();
});
$('use-default-music').addEventListener('click', () => {
  stopMusic(); clearCustomObjectURL(); customMusicURL = ''; customMusicName = '';
  musicPlayer.removeAttribute('src'); musicPlayer.load(); $('music-file').value = '';
  musicFileFailed = false; audioUnavailable = false;
  musicLabel(); renderMusicSource();
});
musicPlayer.addEventListener('error', () => {
  if (!customMusicURL) return;
  stopMusic(); audioUnavailable = true; musicFileFailed = true; musicLabel(); renderMusicSource();
});
function replay() {
  stopMusic(); noteIndex = 0; musicMuted = false; musicVolume = .6; $('volume').value = '60'; musicLabel();
  if (customMusicURL) musicPlayer.currentTime = 0;
  birthdayVerified = false; renderVerification(); resetFunny();
  if (!candlesLit) $('blow').click();
  if (!$('letter').hidden) $('letter-toggle').click();
  wishIndex = 0; renderWish();
  $('birthday').value = ''; $('birthday').removeAttribute('aria-invalid'); $('error').textContent = '';
  shareNeedsDeployment = false; $('share-note').textContent = t('shareDefault');
  clearTimeout(confettiTimer); $('confetti').replaceChildren();
  finaleSeen = false;
  document.dispatchEvent(new Event('birthday:replay'));
  showScreen('intro');
}
$('replay').addEventListener('click', replay);
$('brand').addEventListener('click', event => { event.preventDefault(); replay(); });
function whatsAppLink(url) {
  return `https://wa.me/?text=${encodeURIComponent(`${t('shareText')} ${url}`)}`;
}
$('share').addEventListener('click', () => {
  if (!['http:', 'https:'].includes(location.protocol) || ['localhost', '127.0.0.1', '0.0.0.0', 'terminal.local'].includes(location.hostname)) {
    shareNeedsDeployment = true; $('share-note').textContent = t('shareLocal');
    return;
  }
  window.open(whatsAppLink(location.href.split('#')[0]), '_blank', 'noopener,noreferrer');
});
let finaleSeen = false;
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting) && !finaleSeen && !$('celebration').hidden) { finaleSeen = true; celebrate(); }
  }, { threshold: .35 }).observe(document.querySelector('.finale'));
}
window.addEventListener('pagehide', stopMusic);

// Gentle jokes from Asad and Alisha. Keys keep the currently displayed message stable on language changes.
const funnyMessages = {
  compliment: [
    {en:'Your smile makes the whole house brighter, Farah Naaz. Pink suits you, but happiness suits you even more! 💖',ur:'تمہاری مسکراہٹ پورا گھر روشن کر دیتی ہے، فرح ناز۔ گلابی رنگ تم پر اچھا لگتا ہے، مگر خوشی اس سے بھی زیادہ! 💖'},
    {en:'You turn ordinary days into our favorite stories. Never stop being your cheerful, wonderful self! 🌸',ur:'تم عام دنوں کو ہماری سب سے پیاری کہانیاں بنا دیتی ہو۔ ہمیشہ ایسی ہی خوش مزاج اور پیاری رہو! 🌸'},
    {en:'The best part of your stories is the person telling them. You are loved, dear sister! 👑',ur:'تمہاری کہانیوں کی سب سے اچھی بات انہیں سنانے والی خود تم ہو۔ تم بہت پیاری ہو، ہماری پیاری بہن! 👑'}
  ],
  roast: [
    {en:'Breaking News! 🚨 Farah Naaz has started talking… and there is no estimated ending time! 😂💗',ur:'بریکنگ نیوز! 🚨 فرح ناز نے باتیں شروع کر دی ہیں… اور ختم ہونے کا وقت ابھی معلوم نہیں! 😂💗'},
    {en:'Farah Naaz doesn’t need a microphone. Her voice comes with its own sound system! 😂🎀',ur:'فرح ناز کو مائیک کی ضرورت نہیں۔ اس کی آواز کا اپنا ساؤنڈ سسٹم ہے! 😂🎀'},
    {en:'Your favorite hobby? Talking. Your second favorite hobby? Talking about talking! 😂',ur:'تمہارا پسندیدہ مشغلہ؟ باتیں۔ دوسرا پسندیدہ مشغلہ؟ باتوں کے بارے میں باتیں! 😂'},
    {en:'Breaking Update: Farah Naaz’s conversation has been extended for another 24 hours. Please stay tuned! 😂📢',ur:'تازہ خبر: فرح ناز کی گفتگو مزید ۲۴ گھنٹے کے لیے بڑھا دی گئی ہے۔ سنتے رہیے! 😂📢'}
  ],
  joke: [
    {en:'Mission Impossible: Ask Farah Naaz for a story in just one sentence! 🤣💕',ur:'مشن ناممکن: فرح ناز سے کہو کہ صرف ایک جملے میں کہانی سنائے! 🤣💕'},
    {en:'Aaj Farah Naaz ko chup karwana allowed nahi… birthday sister ki government hai! 👑💗',ur:'آج فرح ناز کو چپ کروانا منع ہے… سالگرہ والی پیاری بہن کی حکومت ہے! 👑💗'},
    {en:'Her phone asked for a rest. Farah Naaz said, “Bas ek aur baat!” Even the battery started laughing! 🔋😂',ur:'فون نے آرام مانگا۔ فرح ناز بولی، ”بس ایک اور بات!“ بیٹری بھی ہنس پڑی! 🔋😂'},
    {en:'We ordered a small birthday speech. Farah Naaz delivered a whole podcast. Five stars, no intermission! 🎤😂',ur:'ہم نے سالگرہ کی مختصر تقریر مانگی۔ فرح ناز نے پورا پوڈکاسٹ سنا دیا۔ پانچ ستارے، کوئی وقفہ نہیں! 🎤😂'}
  ]
};
let funnyCategory = 'roast', funnyIndex = -1;
function renderFunny() {
  $('funny-message').textContent = funnyIndex < 0 ? t('funnyDefault') : funnyMessages[funnyCategory][funnyIndex][currentLanguage];
  document.querySelectorAll('[data-funny]').forEach(button => button.setAttribute('aria-pressed',String(funnyIndex >= 0 && button.dataset.funny === funnyCategory)));
}
function nextFunny(category = funnyCategory) {
  const messages = funnyMessages[category];
  const previous = category === funnyCategory ? funnyIndex : -1;
  let next = Math.floor(Math.random() * (messages.length - (previous >= 0 ? 1 : 0)));
  if (previous >= 0 && next >= previous) next++;
  funnyCategory = category; funnyIndex = next;
  renderFunny();
  $('funny-message').classList.remove('new-wish'); void $('funny-message').offsetWidth; $('funny-message').classList.add('new-wish');
}
function resetFunny() { funnyIndex = -1; funnyCategory = 'roast'; renderFunny(); }
document.querySelectorAll('[data-funny]').forEach(button => button.addEventListener('click', () => nextFunny(button.dataset.funny)));
$('funny-another').addEventListener('click', () => nextFunny());
$('celebrate-again').addEventListener('click', celebrate);
$('mute').addEventListener('click', () => { musicMuted = !musicMuted; musicLabel(); });
$('volume').addEventListener('input', () => { musicVolume = Number($('volume').value) / 100; musicLabel(); });
function scrollToTop() {
  window.scrollTo({top:0,behavior:reducedMotion.matches ? 'instant' : 'smooth'});
  const heading = document.querySelector('#intro:not([hidden]) h1, #welcome:not([hidden]) h1, #countdown:not([hidden]) h1, #celebration:not([hidden]) h1');
  if (heading) { heading.setAttribute('tabindex','-1'); heading.focus({preventScroll:true}); }
}
$('back-top').addEventListener('click', scrollToTop);
$('floating-top').addEventListener('click', scrollToTop);
function updateTopButton() { $('floating-top').hidden = window.scrollY < 300; }
window.addEventListener('scroll', updateTopButton, {passive:true});
updateTopButton();

// Theme and language switches preserve the cake, letter, countdown and wish state.
$('theme-toggle').addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));
$('language-toggle').addEventListener('click', () => applyLanguage(currentLanguage === 'en' ? 'ur' : 'en'));
currentTheme = readPreference('farah-naaz-rose-theme') === 'dark' ? 'dark' : 'light';
applyLanguage(readPreference('farah-naaz-language') === 'ur' ? 'ur' : 'en');


const stickyHeader = document.querySelector('header');
const stickyMenu = document.querySelector('.section-nav');

function updateStickyHeights() {
  const headerHeight = stickyHeader.getBoundingClientRect().height;
  const menuHeight = stickyMenu.getBoundingClientRect().height;

  document.documentElement.style.setProperty(
    '--header-height',
    `${headerHeight}px`
  );

  document.documentElement.style.setProperty(
    '--section-nav-height',
    `${menuHeight}px`
  );
}

if ('ResizeObserver' in window) {
  const stickyObserver = new ResizeObserver(updateStickyHeights);

  stickyObserver.observe(stickyHeader);
  stickyObserver.observe(stickyMenu);
}

window.addEventListener('resize', updateStickyHeights);
updateStickyHeights();
