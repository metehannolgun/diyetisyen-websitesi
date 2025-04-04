import React from 'react';
import Footer from '../Components/Footer';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('🎉 Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız. 😊', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
          });
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          toast.error('😔 Bir hata oluştu! Lütfen tekrar deneyin veya bizimle iletişime geçin.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 to-gray-200 pt-20">
      <ToastContainer />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-4">Bilgilerinizi Paylaşın</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Adınız</label>
            <input
              type="text"
              name="user_first_name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Adınızı girin"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Soyadınız</label>
            <input
              type="text"
              name="user_last_name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Soyadınızı girin"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Telefon Numaranız</label>
            <div className="flex">
              <select
                name="user_phone_code"
                className="border border-gray-300 rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              >
                <option value="+90">+90 (Türkiye)</option>
                <option value="+1">+1 (ABD)</option>
                <option value="+44">+44 (İngiltere)</option>
                <option value="+49">+49 (Almanya)</option>
                <option value="+33">+33 (Fransa)</option>
                {/* Daha fazla ülke kodu eklenebilir */}
              </select>
              <input
                type="tel"
                name="user_phone"
                className="border border-gray-300 rounded-r-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400 flex-1"
                placeholder="Telefon numaranızı girin"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">E-posta Adresiniz</label>
            <input
              type="email"
              name="user_email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="E-posta adresinizi girin"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Yaşınız</label>
            <input
              type="number"
              name="user_age"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Yaşınızı girin"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Kilonuz (kg)</label>
            <input
              type="number"
              name="user_weight"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Kilonuzu girin"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Boyunuz (cm)</label>
            <input
              type="number"
              name="user_height"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Boyunuzu girin"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Cinsiyetiniz</label>
            <select
              name="user_gender"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            >
              <option value="">Cinsiyetinizi seçin</option>
              <option value="Erkek">Erkek</option>
              <option value="Kadın">Kadın</option>
              <option value="Diğer">Diğer</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Gönder
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Contact;