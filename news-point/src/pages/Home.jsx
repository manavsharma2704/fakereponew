import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ articles, loading }) => {
  const navigate = useNavigate();

  

  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 items-start relative">
      
      {/* LEFT SIDEBAR - Only visible on Large screens */}
      <aside className="hidden lg:block lg:w-1/4 sticky top-60 h-fit border-r border-gray-300 pr-6">
        <h2 className="font-serif font-black uppercase border-b-2 border-black mb-4 text-xl">Editorial</h2>
        {articles.slice(1, 4).map((art, i) => (
          <div key={i} className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-serif font-bold text-sm uppercase leading-tight">{art.title}</h3>
            <button onClick={() => navigate('/article', { state: { article: art } })} className="text-[10px] font-bold border-b border-black uppercase mt-2">Read</button>
          </div>
        ))}
      </aside>

      {/* MIDDLE SECTION - Full width on mobile, half width on desktop */}
      <div className="w-full lg:w-1/2 lg:px-6 lg:border-r lg:border-gray-300 min-h-screen">
        {articles.map((art, i) => (
          <div key={i} className="mb-10 border-b border-dotted border-black pb-8">
            {art.urlToImage && (
              <img src={art.urlToImage} className="w-full h-56 md:h-72 object-cover border border-black p-1 mb-4" alt="News" />
            )}
            <h1 
              className="text-2xl md:text-3xl font-serif font-black uppercase leading-none hover:underline cursor-pointer"
              onClick={() => navigate('/article', { state: { article: art } })}
            >
              {art.title}
            </h1>
            <p className="mt-4 font-serif text-sm text-gray-700 leading-relaxed line-clamp-3 md:line-clamp-none">
              {art.description}
            </p>
          </div>
        ))}
      </div>

      {/* RIGHT SIDEBAR - Only visible on Large screens */}
      <aside className="hidden lg:block lg:w-1/4 sticky top-60 h-fit pl-2 text-right">
        <h2 className="bg-black text-white text-center py-1 text-xs font-bold uppercase mb-4 tracking-widest">Briefs</h2>
        {articles.slice(4, 10).map((art, i) => (
          <div key={i} className="mb-4 border-b border-gray-100 pb-2">
            <p className="text-[10px] font-bold uppercase cursor-pointer hover:italic" onClick={() => navigate('/article', { state: { article: art } })}>
              {art.title}
            </p>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Home;