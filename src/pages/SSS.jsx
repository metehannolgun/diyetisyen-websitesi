import React, { useState } from 'react';
import { questions } from '../sss'; // Soruları içe aktar

const SSS = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Hangi sorunun açık olduğunu kontrol etmek için state

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Aynı soruya tıklanırsa kapat, farklıysa aç
  };

  return (
    <div className="min-h-screen pt-40 px-4 md:px-20 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Sıkça Sorulan Sorular</h1>
      <div className="space-y-6">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded-lg shadow-md p-6 transition-all duration-300 ${
              activeIndex === index ? 'bg-red-50 border-red-500' : 'bg-white'
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-lg font-semibold text-gray-800">{item.question}</h2>
              <span
                className={`text-2xl font-bold transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180 text-red-500' : 'text-gray-500'
                }`}
              >
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-40 mt-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SSS;