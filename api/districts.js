const districts = [
  // Province 1
  { id: 1, name_en: 'Bhojpur', name_np: 'भोजपुर', province: 'Province 1' },
  { id: 2, name_en: 'Dhankuta', name_np: 'धनकुटा', province: 'Province 1' },
  { id: 3, name_en: 'Ilam', name_np: 'इलाम', province: 'Province 1' },
  { id: 4, name_en: 'Jhapa', name_np: 'झापा', province: 'Province 1' },
  { id: 5, name_en: 'Khotang', name_np: 'खोटाङ', province: 'Province 1' },
  { id: 6, name_en: 'Morang', name_np: 'मोरङ', province: 'Province 1' },
  { id: 7, name_en: 'Okhaldhunga', name_np: 'ओखलढुङ्गा', province: 'Province 1' },
  { id: 8, name_en: 'Panchthar', name_np: 'पाँचथर', province: 'Province 1' },
  { id: 9, name_en: 'Sankhuwasabha', name_np: 'संखुवासभा', province: 'Province 1' },
  { id: 10, name_en: 'Solukhumbu', name_np: 'सोलुखुम्बु', province: 'Province 1' },
  { id: 11, name_en: 'Sunsari', name_np: 'सुनसरी', province: 'Province 1' },
  { id: 12, name_en: 'Taplejung', name_np: 'ताप्लेजुङ', province: 'Province 1' },
  { id: 13, name_en: 'Terhathum', name_np: 'तेह्रथुम', province: 'Province 1' },
  { id: 14, name_en: 'Udayapur', name_np: 'उदयपुर', province: 'Province 1' },

  // Madhesh Province
  { id: 15, name_en: 'Bara', name_np: 'बारा', province: 'Madhesh Province' },
  { id: 16, name_en: 'Dhanusha', name_np: 'धनुषा', province: 'Madhesh Province' },
  { id: 17, name_en: 'Mahottari', name_np: 'महोत्तरी', province: 'Madhesh Province' },
  { id: 18, name_en: 'Parsa', name_np: 'पर्सा', province: 'Madhesh Province' },
  { id: 19, name_en: 'Rautahat', name_np: 'रौतहट', province: 'Madhesh Province' },
  { id: 20, name_en: 'Saptari', name_np: 'सप्तरी', province: 'Madhesh Province' },
  { id: 21, name_en: 'Sarlahi', name_np: 'सर्लाही', province: 'Madhesh Province' },
  { id: 22, name_en: 'Siraha', name_np: 'सिराहा', province: 'Madhesh Province' },

  // Bagmati Province
  { id: 23, name_en: 'Bhaktapur', name_np: 'भक्तपुर', province: 'Bagmati Province' },
  { id: 24, name_en: 'Chitwan', name_np: 'चितवन', province: 'Bagmati Province' },
  { id: 25, name_en: 'Dhading', name_np: 'धादिङ', province: 'Bagmati Province' },
  { id: 26, name_en: 'Dolakha', name_np: 'दोलखा', province: 'Bagmati Province' },
  { id: 27, name_en: 'Kathmandu', name_np: 'काठमाडौँ', province: 'Bagmati Province' },
  { id: 28, name_en: 'Kavrepalanchok', name_np: 'काभ्रेपलाञ्चोक', province: 'Bagmati Province' },
  { id: 29, name_en: 'Lalitpur', name_np: 'ललितपुर', province: 'Bagmati Province' },
  { id: 30, name_en: 'Makwanpur', name_np: 'मकवानपुर', province: 'Bagmati Province' },
  { id: 31, name_en: 'Nuwakot', name_np: 'नुवाकोट', province: 'Bagmati Province' },
  { id: 32, name_en: 'Ramechhap', name_np: 'रामेछाप', province: 'Bagmati Province' },
  { id: 33, name_en: 'Rasuwa', name_np: 'रसुवा', province: 'Bagmati Province' },
  { id: 34, name_en: 'Sindhuli', name_np: 'सिन्धुली', province: 'Bagmati Province' },
  { id: 35, name_en: 'Sindhupalchok', name_np: 'सिन्धुपाल्चोक', province: 'Bagmati Province' },

  // Gandaki Province
  { id: 36, name_en: 'Baglung', name_np: 'बागलुङ', province: 'Gandaki Province' },
  { id: 37, name_en: 'Gorkha', name_np: 'गोरखा', province: 'Gandaki Province' },
  { id: 38, name_en: 'Kaski', name_np: 'कास्की', province: 'Gandaki Province' },
  { id: 39, name_en: 'Lamjung', name_np: 'लमजुङ', province: 'Gandaki Province' },
  { id: 40, name_en: 'Manang', name_np: 'मनाङ', province: 'Gandaki Province' },
  { id: 41, name_en: 'Mustang', name_np: 'मुस्ताङ', province: 'Gandaki Province' },
  { id: 42, name_en: 'Myagdi', name_np: 'म्याग्दी', province: 'Gandaki Province' },
  { id: 43, name_en: 'Nawalpur', name_np: 'नवलपुर', province: 'Gandaki Province' },
  { id: 44, name_en: 'Parbat', name_np: 'पर्वत', province: 'Gandaki Province' },
  { id: 45, name_en: 'Syangja', name_np: 'स्याङ्जा', province: 'Gandaki Province' },
  { id: 46, name_en: 'Tanahun', name_np: 'तनहुँ', province: 'Gandaki Province' },

  // Lumbini Province
  { id: 47, name_en: 'Arghakhanchi', name_np: 'अर्घाखाँची', province: 'Lumbini Province' },
  { id: 48, name_en: 'Banke', name_np: 'बाँके', province: 'Lumbini Province' },
  { id: 49, name_en: 'Bardiya', name_np: 'बर्दिया', province: 'Lumbini Province' },
  { id: 50, name_en: 'Dang', name_np: 'दाङ', province: 'Lumbini Province' },
  { id: 51, name_en: 'Gulmi', name_np: 'गुल्मी', province: 'Lumbini Province' },
  { id: 52, name_en: 'Kapilvastu', name_np: 'कपिलवस्तु', province: 'Lumbini Province' },
  { id: 53, name_en: 'Nawalparasi', name_np: 'नवलपरासी', province: 'Lumbini Province' },
  { id: 54, name_en: 'Palpa', name_np: 'पाल्पा', province: 'Lumbini Province' },
  { id: 55, name_en: 'Pyuthan', name_np: 'प्युठान', province: 'Lumbini Province' },
  { id: 56, name_en: 'Rolpa', name_np: 'रोल्पा', province: 'Lumbini Province' },
  { id: 57, name_en: 'Rukum (East)', name_np: 'पूर्वी रुकुम', province: 'Lumbini Province' },
  { id: 58, name_en: 'Rupandehi', name_np: 'रुपन्देही', province: 'Lumbini Province' },

  // Karnali Province
  { id: 59, name_en: 'Dailekh', name_np: 'दैलेख', province: 'Karnali Province' },
  { id: 60, name_en: 'Dolpa', name_np: 'डोल्पा', province: 'Karnali Province' },
  { id: 61, name_en: 'Humla', name_np: 'हुम्ला', province: 'Karnali Province' },
  { id: 62, name_en: 'Jajarkot', name_np: 'जाजरकोट', province: 'Karnali Province' },
  { id: 63, name_en: 'Jumla', name_np: 'जुम्ला', province: 'Karnali Province' },
  { id: 64, name_en: 'Kalikot', name_np: 'कालिकोट', province: 'Karnali Province' },
  { id: 65, name_en: 'Mugu', name_np: 'मुगु', province: 'Karnali Province' },
  { id: 66, name_en: 'Rukum (West)', name_np: 'पश्चिमी रुकुम', province: 'Karnali Province' },
  { id: 67, name_en: 'Salyan', name_np: 'सल्यान', province: 'Karnali Province' },
  { id: 68, name_en: 'Surkhet', name_np: 'सुर्खेत', province: 'Karnali Province' },

  // Sudurpashchim Province
  { id: 69, name_en: 'Achham', name_np: 'अछाम', province: 'Sudurpashchim Province' },
  { id: 70, name_en: 'Baitadi', name_np: 'बैतडी', province: 'Sudurpashchim Province' },
  { id: 71, name_en: 'Bajhang', name_np: 'बझाङ', province: 'Sudurpashchim Province' },
  { id: 72, name_en: 'Bajura', name_np: 'बाजुरा', province: 'Sudurpashchim Province' },
  { id: 73, name_en: 'Dadeldhura', name_np: 'डडेलधुरा', province: 'Sudurpashchim Province' },
  { id: 74, name_en: 'Darchula', name_np: 'दार्चुला', province: 'Sudurpashchim Province' },
  { id: 75, name_en: 'Doti', name_np: 'डोटी', province: 'Sudurpashchim Province' },
  { id: 76, name_en: 'Kailali', name_np: 'कैलाली', province: 'Sudurpashchim Province' },
  { id: 77, name_en: 'Kanchanpur', name_np: 'कञ्चनपुर', province: 'Sudurpashchim Province' }
];

export default function handler(req, res) {
  res.status(200).json(districts);
}
