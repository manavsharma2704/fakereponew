import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [loading, setLoading] = useState(true);

  const API_KEY = '1b568a2ea974404cb8ca39d48ae61249';

  useEffect(() => {
    setLoading(true);
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  return (
    <div className="min-h-screen bg-[#fdfbf7]">
      <header className="fixed top-0 left-0 w-full z-50 shadow-sm">
        <Navbar setCategory={setCategory} activeCategory={category} />
      </header>

      {/* Responsive padding: 40 on mobile, 56 on tablet/desktop */}
      <main className="pt-40 md:pt-56 pb-10">
        <Routes>
          <Route path="/" element={<Home articles={articles} loading={loading} />} />
          <Route path="/article" element={<ArticleDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;