import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { ProductCard, SectionHeading, Button } from '../components/UI';
import { MOCK_PRODUCTS } from '../constants';

export const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Earth', 'Floral', 'Fresh', 'Seasonal'];
  const filteredProducts = activeCategory === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="py-24 md:py-40 animate-fade-in bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeading title="The Registry" subtitle="Curated Vessels" />

        {/* Filters - Minimal & Airy */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 mb-16 md:mb-32 pb-8 md:pb-14 border-b border-border/40">
          <div className="flex flex-wrap gap-6 md:gap-10">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium transition-gentle relative pb-2 md:pb-3 ${activeCategory === cat ? 'text-primary' : 'text-text-muted hover:text-accent'}`}
              >
                {cat}
                {activeCategory === cat && <span className="absolute bottom-0 left-0 w-6 h-[1px] bg-accent"></span>}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-12 md:space-x-16">
            <button className="flex items-center text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted hover:text-accent transition-gentle">
              Refine <Filter size={14} className="ml-4" strokeWidth={1} />
            </button>
            <button className="flex items-center text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted hover:text-accent transition-gentle">
              Sort <ChevronDown size={14} className="ml-4" strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Grid - Relaxed Rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 md:gap-x-16 md:gap-y-40">
          {filteredProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>

        {/* Pagination - Quiet & Soft */}
        <div className="mt-24 md:mt-56 flex justify-center items-center space-x-8 md:space-x-14">
          <button className="text-[9px] uppercase tracking-[0.4em] text-text-muted opacity-30 cursor-default">Previous</button>
          <div className="flex space-x-6 md:space-x-8 items-center">
            <span className="w-8 md:w-12 h-[1px] bg-border"></span>
            <span className="text-[10px] md:text-[11px] font-medium italic humanist text-primary">01</span>
            <span className="text-[10px] md:text-[11px] text-text-muted opacity-50 italic humanist">/ 02</span>
            <span className="w-8 md:w-12 h-[1px] bg-border"></span>
          </div>
          <button className="text-[9px] uppercase tracking-[0.4em] text-text-muted hover:text-accent transition-gentle">Next Page</button>
        </div>
      </div>
    </div>
  );
};