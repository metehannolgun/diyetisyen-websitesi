import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';

const Hakkımda = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-40 flex flex-col justify-between">
      {/* İçerik */}
      <div className="bg-gray-200 flex justify-center items-center px-4">
        {/* Ortadaki Geniş Kutu */}
        <motion.div
          className="bg-white rounded-lg shadow-xl w-full max-w-5xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Fotoğraf Kısmı */}
            <div className="w-full md:w-2/5 bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Diyetisyen Profil Fotoğrafı"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Özgeçmiş Kısmı */}
            <div className="w-full md:w-3/5 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Uzm. Dyt. Zülal Adı</h2>
              <h3 className="text-xl text-red-500 mb-6">Beslenme ve Diyet Uzmanı</h3>

              <div className="space-y-4">
                <p className="text-gray-600">
                  2018 yılında ... Üniversitesi Beslenme ve Diyetetik Bölümü'nden mezun oldum.
                  Ardından ... Üniversitesi'nde yüksek lisansımı tamamladım.
                </p>

                <p className="text-gray-600">
                  Mesleki deneyimim boyunca birçok hastane ve klinikte çalışarak danışanlarıma
                  sağlıklı beslenme konusunda rehberlik ettim.
                </p>

                <p className="text-gray-600">
                  Beslenme bilimindeki güncel gelişmeleri takip ederek, kişiye özel beslenme programları
                  hazırlıyorum. Amacım, danışanlarımın sağlıklı bir yaşam sürmelerine yardımcı olmak ve
                  beslenme alışkanlıklarını iyileştirmektir.
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Eğitim</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Yüksek Lisans - Beslenme ve Diyetetik, ... Üniversitesi (2020-2022)</li>
                    <li>Lisans - Beslenme ve Diyetetik, ... Üniversitesi (2014-2018)</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Uzmanlık Alanları</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Kilo Yönetimi</span>
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Sporcu Beslenmesi</span>
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Hamilelik Beslenmesi</span>
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Kronik Hastalıklar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hakkımda;