import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { reviews } from "../reviewData";
import Footer from "../Components/Footer"; // Footer bileşenini içe aktarın

const Danisanlar = () => {
  const [isPaused, setIsPaused] = useState(false); // Animasyonu kontrol etmek için state
  const [currentX, setCurrentX] = useState(0); // Şeridin pozisyonunu takip etmek için state

  // Sayfa her yüklendiğinde currentX'i sıfırla
  useEffect(() => {
    setCurrentX(0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Danışanlar İçeriği */}
      <div className="flex items-center justify-center flex-grow">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex space-x-8"
            animate={!isPaused ? { x: [currentX, "-100%"] } : { x: currentX }}
            transition={{
              repeat: Infinity,
              duration: 15, // Hızı artırmak için süreyi azalttık
              ease: "linear",
            }}
            onUpdate={(latest) => {
              if (!isPaused) {
                setCurrentX(latest.x); // Şeridin pozisyonunu sürekli güncelle
              }
            }}
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                className="bg-white rounded-lg shadow-lg p-4 flex-shrink-0 w-80"
                whileHover={{ scale: 1.05 }} // Hover sırasında hafif büyütme efekti
                onMouseEnter={() => setIsPaused(true)} // Fare üzerine geldiğinde animasyonu durdur
                onMouseLeave={() => setIsPaused(false)} // Fare ayrıldığında animasyonu devam ettir
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-center">{review.name}</h3>
                <p className="text-gray-600 text-center">{review.comment}</p>
                <p className="text-yellow-500 text-center mt-2">
                  {"★".repeat(review.rating)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Danisanlar;