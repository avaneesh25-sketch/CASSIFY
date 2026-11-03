export const LANGUAGES = [
  { code: 'en', native: 'English', english: 'English' },
  { code: 'hi', native: 'हिन्दी', english: 'Hindi' },
  { code: 'kn', native: 'ಕನ್ನಡ', english: 'Kannada' },
  { code: 'ta', native: 'தமிழ்', english: 'Tamil' },
  { code: 'te', native: 'తెలుగు', english: 'Telugu' },
  { code: 'ml', native: 'മലയാളം', english: 'Malayalam' },
] as const;
export type Language = typeof LANGUAGES[number]['code'];
type Copy = {
  choose: string; subtitle: string; continue: string; welcome: string; ready: string;
  start: string; mentor: string; first: string; question: string; hint: string;
  moreHint: string; tip: string; stepOne: string; stepTwo: string; stepThree: string;
  response: string; complete: string; tryAgain: string; correct: string; incorrect: string;
  caseTitle: string; brief: string; choices: [string,string,string]; feedback: string;
  skip: string; change: string; locally: string;
};
export const translations: Record<Language, Copy> = {
  en: {
    choose:'Choose your language',subtitle:'Your first case starts on the other side of this door.',
    continue:'Enter Cassify',welcome:'Welcome, strategist. I am Professor Cass.',ready:'Ready? We will solve our first case together.',
    start:'Begin your first case',mentor:'Professor Cass',first:'LEVEL 01 • YOUR FIRST CASE',question:'Where would you investigate first?',
    hint:'Ask Professor Cass for a hint',moreHint:'Another hint',tip:'Professor’s guidance',
    stepOne:'Start by defining the problem. Revenue rose, but profit fell.',
    stepTwo:'Revenue is not profit. Calculate the margin before and after the change.',
    stepThree:'Before suggesting growth, examine channel economics: delivery fees, discounts and product costs.',
    response:'Choose your starting approach',complete:'Case complete',tryAgain:'Try another approach',correct:'Strong starting point!',incorrect:'Not quite. Think about profitability before growth.',
    caseTitle:'The coffee shop conundrum',brief:'Campus café Bean & Co increased monthly revenue from ₹4 lakh to ₹5 lakh, but profit fell from ₹80,000 to ₹50,000. The owner added delivery and discounts. What should you investigate first?',
    choices:['Compare revenue and costs by channel and product.','Open a second location to increase revenue.','Cut every drink price to attract students.'],
    feedback:'Profit margin dropped from 20% to 10%. Investigate delivery fees, discounts, ingredient costs and sales mix first.',
    skip:'Skip animation',change:'Language',locally:'Demo progress is stored in this browser, not synced across devices.'
  },
  hi: {
    choose:'अपनी भाषा चुनें',subtitle:'आपका पहला केस इस दरवाज़े के दूसरी ओर है।',continue:'Cassify में प्रवेश करें',welcome:'स्वागत है! मैं प्रोफ़ेसर कैस हूँ।',ready:'तैयार हैं? पहला केस साथ में हल करते हैं।',
    start:'पहला केस शुरू करें',mentor:'प्रोफ़ेसर कैस',first:'लेवल 01 • आपका पहला केस',question:'आप सबसे पहले क्या जाँचेंगे?',hint:'प्रोफ़ेसर से संकेत लें',moreHint:'एक और संकेत',tip:'प्रोफ़ेसर की सलाह',
    stepOne:'पहले समस्या समझें। आय बढ़ी है, लेकिन लाभ घटा है।',stepTwo:'आय और लाभ अलग हैं। बदलाव से पहले और बाद का लाभ मार्जिन निकालें।',stepThree:'विस्तार से पहले डिलीवरी शुल्क, छूट और उत्पाद लागत की जाँच करें।',
    response:'अपना पहला कदम चुनें',complete:'केस पूरा हुआ',tryAgain:'दूसरा तरीका आज़माएँ',correct:'बहुत अच्छी शुरुआत!',incorrect:'अभी सही नहीं। विस्तार से पहले लाभ पर ध्यान दें।',
    caseTitle:'कॉफ़ी शॉप की चुनौती',brief:'कैंपस कैफ़े Bean & Co की मासिक आय ₹4 लाख से ₹5 लाख हुई, लेकिन लाभ ₹80,000 से ₹50,000 रह गया। डिलीवरी और छूट शुरू हुई हैं। पहले क्या जाँचेंगे?',
    choices:['हर चैनल और उत्पाद की आय व लागत की तुलना करें।','आय बढ़ाने के लिए दूसरी शाखा खोलें।','छात्रों को आकर्षित करने के लिए हर ड्रिंक की कीमत घटाएँ।'],
    feedback:'लाभ मार्जिन 20% से घटकर 10% हुआ। पहले डिलीवरी शुल्क, छूट, सामग्री लागत और बिक्री मिश्रण जाँचें।',
    skip:'एनीमेशन छोड़ें',change:'भाषा',locally:'डेमो प्रगति इसी ब्राउज़र में सेव होती है, दूसरे डिवाइस पर नहीं।'
  },
  kn: {
    choose:'ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',subtitle:'ನಿಮ್ಮ ಮೊದಲ ಕೇಸ್ ಈ ಬಾಗಿಲಿನ ಆಚೆ ಇದೆ.',continue:'Cassify ಗೆ ಪ್ರವೇಶಿಸಿ',welcome:'ಸ್ವಾಗತ! ನಾನು ಪ್ರೊಫೆಸರ್ ಕ್ಯಾಸ್.',ready:'ಸಿದ್ಧವೇ? ಮೊದಲ ಕೇಸ್ ಅನ್ನು ಒಟ್ಟಿಗೆ ಬಗೆಹರಿಸೋಣ.',
    start:'ಮೊದಲ ಕೇಸ್ ಪ್ರಾರಂಭಿಸಿ',mentor:'ಪ್ರೊಫೆಸರ್ ಕ್ಯಾಸ್',first:'ಹಂತ 01 • ನಿಮ್ಮ ಮೊದಲ ಕೇಸ್',question:'ಮೊದಲು ಏನನ್ನು ಪರಿಶೀಲಿಸುತ್ತೀರಿ?',hint:'ಪ್ರೊಫೆಸರ್‌ನಿಂದ ಸುಳಿವು ಪಡೆಯಿರಿ',moreHint:'ಇನ್ನೊಂದು ಸುಳಿವು',tip:'ಪ್ರೊಫೆಸರ್ ಮಾರ್ಗದರ್ಶನ',
    stepOne:'ಮೊದಲು ಸಮಸ್ಯೆಯನ್ನು ಗುರುತಿಸಿ. ಆದಾಯ ಹೆಚ್ಚಿದೆ, ಲಾಭ ಕಡಿಮೆಯಾಗಿದೆ.',stepTwo:'ಆದಾಯ ಮತ್ತು ಲಾಭ ಬೇರೆ. ಬದಲಾವಣೆಯ ಮೊದಲು ಹಾಗೂ ನಂತರದ ಲಾಭಾಂಶ ಲೆಕ್ಕಿಸಿ.',stepThree:'ವಿಸ್ತರಣೆಗೂ ಮೊದಲು ಡೆಲಿವರಿ ಶುಲ್ಕ, ರಿಯಾಯಿತಿ ಮತ್ತು ಉತ್ಪನ್ನ ವೆಚ್ಚಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
    response:'ನಿಮ್ಮ ಮೊದಲ ಕ್ರಮ ಆಯ್ಕೆಮಾಡಿ',complete:'ಕೇಸ್ ಪೂರ್ಣಗೊಂಡಿದೆ',tryAgain:'ಬೇರೆ ವಿಧಾನ ಪ್ರಯತ್ನಿಸಿ',correct:'ಉತ್ತಮ ಆರಂಭ!',incorrect:'ಇನ್ನೂ ಸರಿಯಾಗಿಲ್ಲ. ಬೆಳವಣಿಗೆಗೂ ಮೊದಲು ಲಾಭದ ಬಗ್ಗೆ ಯೋಚಿಸಿ.',
    caseTitle:'ಕಾಫಿ ಅಂಗಡಿಯ ಸವಾಲು',brief:'ಕ್ಯಾಂಪಸ್ ಕೆಫೆ Bean & Co ತಿಂಗಳ ಆದಾಯ ₹4 ಲಕ್ಷದಿಂದ ₹5 ಲಕ್ಷಕ್ಕೆ ಏರಿತು. ಆದರೆ ಲಾಭ ₹80,000 ರಿಂದ ₹50,000 ಕ್ಕೆ ಇಳಿಯಿತು. ಡೆಲಿವರಿ ಮತ್ತು ರಿಯಾಯಿತಿಗಳನ್ನು ಸೇರಿಸಲಾಗಿದೆ. ಮೊದಲು ಏನನ್ನು ಪರಿಶೀಲಿಸುತ್ತೀರಿ?',
    choices:['ಚಾನೆಲ್ ಮತ್ತು ಉತ್ಪನ್ನವಾರು ಆದಾಯ ಹಾಗೂ ವೆಚ್ಚ ಹೋಲಿಸಿ.','ಆದಾಯ ಹೆಚ್ಚಿಸಲು ಎರಡನೇ ಅಂಗಡಿ ತೆರೆಯಿರಿ.','ಎಲ್ಲಾ ಪಾನೀಯಗಳ ಬೆಲೆ ಕಡಿಮೆ ಮಾಡಿ.'],
    feedback:'ಲಾಭಾಂಶ 20% ರಿಂದ 10% ಕ್ಕೆ ಇಳಿದಿದೆ. ಡೆಲಿವರಿ ಶುಲ್ಕ, ರಿಯಾಯಿತಿ, ಪದಾರ್ಥ ವೆಚ್ಚ ಮತ್ತು ಮಾರಾಟದ ಮಿಶ್ರಣ ಪರಿಶೀಲಿಸಿ.',
    skip:'ಅನಿಮೇಷನ್ ಬಿಟ್ಟುಬಿಡಿ',change:'ಭಾಷೆ',locally:'ಡೆಮೋ ಪ್ರಗತಿ ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಮಾತ್ರ ಉಳಿಯುತ್ತದೆ.'
  },
  ta: {
    choose:'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்',subtitle:'உங்கள் முதல் கேஸ் இந்தக் கதவுக்கு அப்பால் உள்ளது.',continue:'Cassify-க்கு செல்லுங்கள்',welcome:'வரவேற்கிறேன்! நான் பேராசிரியர் கேஸ்.',ready:'தயாரா? முதல் கேஸை சேர்ந்து தீர்ப்போம்.',
    start:'முதல் கேஸைத் தொடங்குங்கள்',mentor:'பேராசிரியர் கேஸ்',first:'நிலை 01 • உங்கள் முதல் கேஸ்',question:'முதலில் எதை ஆராய்வீர்கள்?',hint:'பேராசிரியரிடம் உதவிக்குறிப்பு கேளுங்கள்',moreHint:'மேலும் ஒரு குறிப்பு',tip:'பேராசிரியரின் வழிகாட்டல்',
    stepOne:'முதலில் பிரச்சினையை வரையறுக்கவும். வருவாய் உயர்ந்தது, லாபம் குறைந்தது.',stepTwo:'வருவாயும் லாபமும் வேறுபட்டவை. முன்பும் பின்பும் லாப விகிதத்தைக் கணக்கிடுங்கள்.',stepThree:'விரிவாக்கத்திற்கு முன் டெலிவரி கட்டணம், தள்ளுபடி, தயாரிப்புச் செலவை ஆராயுங்கள்.',
    response:'முதல் அணுகுமுறையைத் தேர்வுசெய்க',complete:'கேஸ் முடிந்தது',tryAgain:'வேறு அணுகுமுறையை முயலுங்கள்',correct:'சிறந்த தொடக்கம்!',incorrect:'இன்னும் சரியில்லை. வளர்ச்சிக்கு முன் லாபத்தைப் பாருங்கள்.',
    caseTitle:'காபி கடை சிக்கல்',brief:'வளாகக் கஃபே Bean & Co-வின் மாத வருவாய் ₹4 லட்சத்தில் இருந்து ₹5 லட்சமாக உயர்ந்தது. ஆனால் லாபம் ₹80,000-இல் இருந்து ₹50,000-ஆக குறைந்தது. டெலிவரியும் தள்ளுபடியும் அறிமுகமானது. முதலில் எதை ஆராய்வீர்கள்?',
    choices:['சேனல் மற்றும் தயாரிப்பு வாரியாக வருவாய், செலவை ஒப்பிடுங்கள்.','வருவாய் உயர இரண்டாவது கடையைத் திறக்கவும்.','அனைத்து பானங்களின் விலையையும் குறைக்கவும்.'],
    feedback:'லாப விகிதம் 20%-இல் இருந்து 10%-ஆக குறைந்தது. டெலிவரி கட்டணம், தள்ளுபடி, மூலப்பொருள் செலவு, விற்பனை கலவையைச் சரிபார்க்கவும்.',
    skip:'அனிமேஷனைத் தவிர்க்கவும்',change:'மொழி',locally:'டெமோ முன்னேற்றம் இந்த உலாவியில் மட்டுமே சேமிக்கப்படும்.'
  },
  te: {
    choose:'మీ భాషను ఎంచుకోండి',subtitle:'మీ మొదటి కేసు ఈ తలుపు అవతల ఉంది.',continue:'Cassify లోకి వెళ్లండి',welcome:'స్వాగతం! నేను ప్రొఫెసర్ క్యాస్.',ready:'సిద్ధమా? మొదటి కేసును కలిసి పరిష్కరిద్దాం.',
    start:'మొదటి కేసు ప్రారంభించండి',mentor:'ప్రొఫెసర్ క్యాస్',first:'లెవల్ 01 • మీ మొదటి కేసు',question:'ముందుగా దేనిని పరిశీలిస్తారు?',hint:'ప్రొఫెసర్ నుండి సూచన పొందండి',moreHint:'మరో సూచన',tip:'ప్రొఫెసర్ మార్గదర్శకం',
    stepOne:'ముందుగా సమస్యను గుర్తించండి. ఆదాయం పెరిగింది, లాభం తగ్గింది.',stepTwo:'ఆదాయం, లాభం వేరు. మార్పుకు ముందు, తర్వాత లాభ మార్జిన్ లెక్కించండి.',stepThree:'విస్తరణకు ముందు డెలివరీ ఫీజులు, డిస్కౌంట్లు, ఉత్పత్తి ఖర్చులు పరిశీలించండి.',
    response:'మీ మొదటి విధానాన్ని ఎంచుకోండి',complete:'కేసు పూర్తయింది',tryAgain:'మరో విధానం ప్రయత్నించండి',correct:'చక్కని ప్రారంభం!',incorrect:'ఇంకా సరైనది కాదు. వృద్ధికి ముందు లాభం గురించి ఆలోచించండి.',
    caseTitle:'కాఫీ షాప్ సమస్య',brief:'క్యాంపస్ కేఫ్ Bean & Co నెలవారీ ఆదాయం ₹4 లక్షల నుండి ₹5 లక్షలకు పెరిగింది, కానీ లాభం ₹80,000 నుండి ₹50,000కు తగ్గింది. డెలివరీ, డిస్కౌంట్లు ప్రవేశపెట్టారు. ముందుగా ఏం పరిశీలిస్తారు?',
    choices:['ఛానల్, ఉత్పత్తి వారీగా ఆదాయం, ఖర్చులు పోల్చండి.','ఆదాయం పెంచేందుకు రెండో శాఖ తెరవండి.','అన్ని పానీయాల ధరలు తగ్గించండి.'],
    feedback:'లాభ మార్జిన్ 20% నుండి 10%కు పడిపోయింది. డెలివరీ ఫీజులు, డిస్కౌంట్లు, పదార్థ ఖర్చులు, సేల్స్ మిక్స్ పరిశీలించండి.',
    skip:'యానిమేషన్ దాటవేయండి',change:'భాష',locally:'డెమో ప్రగతి ఈ బ్రౌజర్‌లో మాత్రమే సేవ్ అవుతుంది.'
  },
  ml: {
    choose:'നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക',subtitle:'നിങ്ങളുടെ ആദ്യ കേസ് ഈ വാതിലിനപ്പുറമാണ്.',continue:'Cassify-ലേക്ക് പ്രവേശിക്കുക',welcome:'സ്വാഗതം! ഞാൻ പ്രൊഫസർ കാസാണ്.',ready:'തയ്യാറാണോ? ആദ്യ കേസ് നമുക്ക് ഒരുമിച്ച് പരിഹരിക്കാം.',
    start:'ആദ്യ കേസ് തുടങ്ങുക',mentor:'പ്രൊഫസർ കാസ്സ്',first:'ലെവൽ 01 • നിങ്ങളുടെ ആദ്യ കേസ്',question:'ആദ്യം എന്താണ് പരിശോധിക്കുക?',hint:'പ്രൊഫസറോട് സൂചന ചോദിക്കുക',moreHint:'മറ്റൊരു സൂചന',tip:'പ്രൊഫസറുടെ മാർഗ്ഗനിർദ്ദേശം',
    stepOne:'ആദ്യം പ്രശ്നം തിരിച്ചറിയുക. വരുമാനം കൂടിയെങ്കിലും ലാഭം കുറഞ്ഞു.',stepTwo:'വരുമാനവും ലാഭവും വ്യത്യസ്തമാണ്. മാറ്റത്തിന് മുമ്പും ശേഷവും ലാഭമാർജിൻ കണക്കാക്കുക.',stepThree:'വിപുലീകരിക്കുന്നതിന് മുമ്പ് ഡെലിവറി ഫീസ്, ഡിസ്കൗണ്ട്, ഉൽപ്പന്ന ചെലവ് പരിശോധിക്കുക.',
    response:'നിങ്ങളുടെ ആദ്യ സമീപനം തിരഞ്ഞെടുക്കുക',complete:'കേസ് പൂർത്തിയായി',tryAgain:'മറ്റൊരു സമീപനം പരീക്ഷിക്കുക',correct:'മികച്ച തുടക്കം!',incorrect:'ഇനിയും ശരിയായിട്ടില്ല. വളർച്ചയ്ക്ക് മുമ്പ് ലാഭം പരിഗണിക്കുക.',
    caseTitle:'കോഫി ഷോപ്പിലെ വെല്ലുവിളി',brief:'ക്യാമ്പസ് കഫേ Bean & Co-യുടെ പ്രതിമാസ വരുമാനം ₹4 ലക്ഷത്തിൽ നിന്ന് ₹5 ലക്ഷമായി ഉയർന്നു. പക്ഷേ ലാഭം ₹80,000ൽ നിന്ന് ₹50,000 ആയി കുറഞ്ഞു. ഡെലിവറിയും ഡിസ്കൗണ്ടും ആരംഭിച്ചു. ആദ്യം എന്താണ് പരിശോധിക്കുക?',
    choices:['ചാനലും ഉൽപ്പന്നവും അനുസരിച്ച് വരുമാനവും ചെലവും താരതമ്യം ചെയ്യുക.','വരുമാനം കൂട്ടാൻ രണ്ടാമത്തെ ശാഖ തുറക്കുക.','എല്ലാ പാനീയങ്ങളുടെയും വില കുറയ്ക്കുക.'],
    feedback:'ലാഭമാർജിൻ 20%ൽ നിന്ന് 10% ആയി കുറഞ്ഞു. ഡെലിവറി ഫീസ്, ഡിസ്കൗണ്ട്, ചേരുവകളുടെ ചെലവ്, വിൽപ്പന മിശ്രിതം പരിശോധിക്കുക.',
    skip:'ആനിമേഷൻ ഒഴിവാക്കുക',change:'ഭാഷ',locally:'ഡെമോ പുരോഗതി ഈ ബ്രൗസറിൽ മാത്രമാണ് സൂക്ഷിക്കുന്നത്.'
  }
};
export const getCopy = (language: Language) => translations[language] || translations.en;
