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
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // .env'den servis ID'si
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // .env'den şablon ID'si
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // .env'den public key
      )
      .then(
        () => {
          toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          toast.error('🦄 Something went wrong!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 pt-35">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {/* Form Section */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>

        {/* Name Field */}
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-2">First Name</label>
          <input
            type="text"
            name="user_first_name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your first name"
            required
          />
        </div>

        {/* Surname Field */}
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-2">Last Name</label>
          <input
            type="text"
            name="user_last_name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your last name"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="user_phone"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Age Field */}
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-2">Age</label>
          <input
            type="number"
            name="user_age"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your age"
            required
          />
        </div>

        {/* Height Field */}
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-2">Height (cm)</label>
          <input
            type="number"
            name="user_height"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your height"
            required
          />
        </div>

        {/* Weight Field */}
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-2">Weight (kg)</label>
          <input
            type="number"
            name="user_weight"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your weight"
            required
          />
        </div>

        {/* Gender Field */}
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-2">Gender</label>
          <select
            name="user_gender"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            defaultValue="" // Use defaultValue to set the initial value
            required
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-2">Message</label>
          <textarea
            name="user_message"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <input
            type="submit"
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 cursor-pointer"
            value="Send"
          />
        </div>
      </form>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Contact;