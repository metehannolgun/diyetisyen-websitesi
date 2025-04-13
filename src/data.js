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
  // Diğer tarifler...
]