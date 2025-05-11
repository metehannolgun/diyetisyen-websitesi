import Tatlı from './assets/tatlı.webp'
import Tatlı1 from './assets/tarif1.jpg'
import Tatlı2 from './assets/tarif2.jpg'
import Tatlı3 from './assets/tarif3.jpg'

export const tarifListesi = [
  { id: 1, isim: 'MUZLU KAKAOLU PUDİNG TADINDA YULAF LAPASI ', 
    kisaAciklama: 'Bu tarif çok lezzetli.', 
    resim: Tatlı1, 
    aciklama: 'Bu tarif çok lezzetli ve yapımı kolay.', 
    malzemeler: ['1 adet muz ', '4 yemek kaşığı ince öğütülmüş yulaf (40 gram)', 'Yarım su bardağı süt ', '1 tatlı kaşığı fıstık ezmesi', 'Süsleme için (tercihen); Böğürtlen , 1-2 küçük kare %60-80 kakao içeren bitter çikolata', 'Kakao '], 
    yapilis: " Muzun yarısı bir kaba alınıp ezilir ve yulafı pişirilecek tencereye eklenir.\n" +
             " Yulaf, süt ve kakao da eklenip kısık ateşte lapa kıvamına gelene kadar pişirilir.\n" +
             " Üzerine fıstık ezmesi ve süsleme malzemeleri eklenerek servis edilir.\n" +
              " Afiyet olsun!"
  },
  { 
    id: 2, 
    isim: 'SAĞLIKLI DONDURMA', 
    kisaAciklama: 'Bu tarif sağlıklı.', 
    resim: Tatlı2, 
    aciklama: 'Bu tarif sağlıklı ve besleyici.', 
    malzemeler: [
      '1 adet donmuş muz', 
      '3-4 yemek kaşığı donmuş böğürtlen ', 
      'Biraz süt ', 
      'Süsleme için; 2-3 yemek kaşığı granola', 
      '1 tatlı kaşığı çekilmiş ceviz', 
      '1 tatlı kaşığı Hindistan cevizi tozu'
    ], 
    yapilis: "1. 1 adet donmuş muzu ve donmuş böğürtlenleri buzluktan çıkardıktan 5-10 dakika sonra derin bir kaba alalım.\n" +
             "2. Blender ya da smoothie makineden geçirelim. Eğer meyveler yumuşamadıysa birkaç yemek kaşığı süt ilave edip dondurma kıvamında homojen bir kıvam elde edene kadar devam edelim.\n" +
             "3. Sonrasında servis tabağına alıp granola, ceviz ve Hindistan cevizi tozunu ekleyerek süsleyelim.\n" +
             "4. Afiyet olsun!"
  },
  { 
    id: 3, 
    isim: 'Yulaflı Krep', 
    kisaAciklama: 'Bu tarif kolay.', 
    resim: Tatlı3, // Eğer bir görsel ekleyecekseniz, doğru yolu buraya yazabilirsiniz
    aciklama: 'Bu tarif hızlı ve pratik.', 
    malzemeler: [
      '1 adet yumurta', 
      '40 gram yulaf ezmesi', 
      '¾ çay bardağı süt', 
      'Biraz tuz', 
      '1 çay kaşığı kabartma tozu', 
      '1 tatlı kaşığı zeytinyağı'
    ], 
    yapilis: " Öncelikle 40 gram yulafı blenderize edip yulaf unu haline getirelim.\n" +
             " Sonrasında yumurta, süt ve tuzu derin bir kapta buluşturup çırpalım.\n" +
             " Hazırladığımız yulaf ununu ve kabartma tozunu ekleyip harcımızı oluşturalım.\n" +
             " Küçük bir tavayı ocağa alıp ısıtalım ve ısınan tavaya 1 tatlı kaşığı kadar zeytinyağı ekleyelim.\n" +
             " Harcımızdan parça parça tavaya ilave edelim ve glutensiz, sindirim dostu krepimiz hazır.\n" +
             " Afiyet olsun!"
  },
  { 
    id: 4, 
    isim: 'KAŞARLI HİNDİ FÜMELİ OMLET ', 
    kisaAciklama: 'Bu tarif kolay.', 
    resim: Tatlı3, // Eğer bir görsel ekleyecekseniz, doğru yolu buraya yazabilirsiniz
    aciklama: 'Bu tarif hızlı ve pratik.', 
    malzemeler: [
      '2 adet yumurta ', 
      '2 yemek kaşığı yulaf ezmesi ', 
      '3 yarım parmak boyutunda (30 gram) kaşar peyniri ', 
      '2 adet hindi füme', 
      'Zeytinyağı '
      
    ], 
    yapilis: " 2 yumurta biraz tuz bir kapta çırpalım.\n" +
             "  Isınan tavaya az zeytinyağı gezdirelim .\n" +
             "  Doğranmış hindi füme ve yulaf ezmesini tavada biraz çevirelim.\n" +
             " Pişen omlete rendelenmiş kaşarı ekleyip ikiye katlayalım. \n" +
             " Afiyet olsun!"
  },
  {
    id: 5,
    isim: 'YUMURTA SALATASI',
    kisaAciklama: 'Pratik ve sağlıklı bir salata.',
    resim: Tatlı3, // Elinizde uygun bir görsel varsa değiştirebilirsiniz
    aciklama: 'Yumurtalı, yeşillikli, hafif ve doyurucu bir salata.',
    malzemeler: [
      '2 yumurta',
      'Marul',
      'Maydanoz',
      'Limon',
      'Tuz',
      'Karabiber',
      '1 tatlı kaşığı zeytinyağı'
    ],
    yapilis: "1. 2 yumurtayı haşlayalım.\n" +
             "2. Yeşillikleri doğrayalım.\n" +
             "3. Tüm malzemeleri karıştıralım.\n" +
             "4. Dilerseniz bu şekilde, dilerseniz 2 adet wasa üstüne ilave ederek tüketebilirsiniz."
  },
  {
    id: 6,
    isim: 'GLUTENSİZ PROTEİNLİ KREP',
    kisaAciklama: 'Glutensiz ve protein açısından zengin pratik bir krep.',
    resim: Tatlı3, // Uygun bir görsel ekleyebilirsiniz
    aciklama: 'Glutensiz, proteinli ve sindirim dostu bir krep tarifi.',
    malzemeler: [
      '2 adet yumurta',
      '40 gram yulaf ezmesi',
      '¾ çay bardağı süt',
      'Biraz dereotu (tercihen)',
      'Biraz tuz',
      '1 çay kaşığı kabartma tozu'
    ],
    yapilis: "1. Öncelikle 40 gram yulafı blenderize edip yulaf unu haline getirelim.\n" +
             "2. Sonrasında yumurta, süt ve tuzu derin bir kapta buluşturup çırpalım.\n" +
             "3. Hazırladığımız yulaf ununu, ince kıyılmış dereotunu ve kabartma tozunu ekleyip harcımızı oluşturalım.\n" +
             "4. Küçük bir tavayı ocağa alıp ısıtalım ve ısınan tavaya 1 tatlı kaşığı kadar zeytinyağı ekleyelim.\n" +
             "5. Harcımızdan parça parça tavaya ilave edelim ve glutensiz, sindirim dostu krepimiz hazır.\n" +
             "6. Afiyet olsun."
  },
  {
    id: 7,
    isim: 'EKMEK ÜSTÜ LEZZETLER - Peynirli Domatesli',
    kisaAciklama: 'Fırında veya airfryerda pratik, lezzetli ekmek üstü atıştırmalık.',
    resim: Tatlı3, // Uygun bir görsel ekleyebilirsiniz
    aciklama: 'Peynir, domates ve baharatlarla hazırlanan nefis ekmek üstü lezzet.',
    malzemeler: [
      '2 ince dilim tam tahıllı ekmek',
      '3 yarım parmak boyutunda kaşar ya da 2 parmak büyüklüğünde süzme peynir',
      'Domates',
      '1 tatlı kaşığı zeytinyağı',
      'Tuz',
      'Kekik'
    ],
    yapilis: "1. Ekmeklerin üstüne belirtilen miktarda peyniri pay edelim.\n" +
           "2. Üstüne yuvarlak olarak dilimlenmiş domatesleri, zeytinyağını, kekik ve tuzu ekledikten sonra fırında ya da airfryerda 10-15 dakika kızartalım.\n" +
           "3. Afiyet olsun.\n(Belirtilen ölçüler ikiye pay edilecek)"
  },
  {
    id: 8,
    isim: 'EKMEK ÜSTÜ LEZZETLER - Avokadolu Yumurtalı',
    kisaAciklama: 'Avokado, peynir ve yumurta ile sağlıklı ekmek üstü tarif.',
    resim: Tatlı3, // Uygun bir görsel ekleyebilirsiniz
    aciklama: 'Avokado, süzme peynir ve yumurta ile hazırlanan doyurucu ekmek üstü lezzet.',
    malzemeler: [
      '2 ince dilim tam tahıllı ekmek',
      '2 yumurta',
      '20 gram süzme peynir',
      '¼ avokado',
      'Limon',
      'Karabiber'
    ],
    yapilis: "1. Avokado ve peyniri çatal yardımıyla ezip limon, tuz ve karabiberi ekleyelim.\n" +
           "2. Hazırladığımız karışımı ekmek üstüne pay edelim.\n" +
           "3. Yumurtaları çırpıp pişirelim ve ekmek üstüne ilave edelim.\n" +
           "4. Afiyet olsun."
  },
  // ...existing code...
]