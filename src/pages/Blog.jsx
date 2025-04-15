import React from 'react';
import { Link } from 'react-router-dom';
import { blogListesi } from '../blogdata';
import Footer from '../Components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="pt-70 px-4 md:px-16">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogListesi.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={blog.resim} alt={blog.baslik} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.baslik}</h2>
                <p className="text-gray-600 mb-4">{blog.kisaAciklama}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Devamını Oku →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;