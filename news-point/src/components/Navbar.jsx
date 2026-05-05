import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ setCategory, activeCategory }) {
  const categories = ["General", "Sports", "Technology", "Business", "Entertainment"];

  return (
    <nav className="bg-[#fdfbf7] border-b-4 border-black px-4 md:px-6 pt-2">
      <div className="py-2 md:py-4 text-center">
        <Link to="/" className="text-4xl md:text-7xl lg:text-8xl font-serif font-black uppercase tracking-tighter block leading-none">
          NewsPoint
        </Link>
        <p className="text-[9px] md:text-[11px] font-serif italic mt-1 uppercase tracking-[0.2em]">The Daily Digital Ledger</p>
      </div>

      {/* flex-wrap ensures buttons drop to the next line on small screens */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-8 py-3 border-t-2 border-black text-[10px] md:text-xs font-bold uppercase tracking-widest">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat.toLowerCase());
              window.scrollTo(0, 0);
            }}
            className={activeCategory === cat.toLowerCase() ? "underline underline-offset-4 decoration-2" : "hover:underline underline-offset-4"}
          >
            {cat}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;