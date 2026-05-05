import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ArticleDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white border-x border-black min-h-screen">
      <button onClick={() => navigate(-1)} className="mb-8 font-bold uppercase text-[10px] border border-black px-4 py-2 hover:bg-black hover:text-white transition">
        ← Back to Edition
      </button>

      <div className="text-center border-b-2 border-black pb-6 mb-8">
        <h1 className="text-5xl font-serif font-black uppercase leading-tight italic">{article.title}</h1>
        <p className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest">{article.source.name}</p>
      </div>

      <div className="space-y-6">
        <img src={article.urlToImage} className="w-full border-2 border-black p-1 shadow-md" />
        <p className="font-serif text-xl font-bold italic">{article.description}</p>
        <div className="font-serif text-lg leading-relaxed text-justify first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left">
          {article.content?.split('[+')[0]}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;