import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // ReactMarkdown'ı import edin
import { blogListesi } from '../blogdata';
import Footer from '../Components/Footer';


const BlogDetay = () => {
  const { id } = useParams(); // URL'den blog ID'sini al
  const blog = blogListesi.find((item) => item.id === parseInt(id)); // ID'ye göre blogu bul

  if (!blog) {
    return <div className="min-h-screen pt-24 text-center">Blog bulunamadı.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="pt-42 px-4 md:px-16 pb-16">
        <h1 className="text-4xl font-bold text-center mb-8">{blog.baslik}</h1>
        <img
          src={blog.resim}
          alt={blog.baslik}
          className="w-full max-w-3xl mx-auto h-120 object-cover rounded-lg mb-8" // h-80'i h-96 olarak değiştirdim
        />
        <article className="prose lg:prose-xl max-w-3xl mx-auto">
          <ReactMarkdown>{blog.detayliAciklama}</ReactMarkdown>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetay;