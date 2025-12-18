import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Heart, ShieldCheck, Truck } from 'lucide-react';
import { Button, Badge, SectionHeading, ProductCard } from '../components/UI';
import { MOCK_PRODUCTS } from '../constants';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === id) || MOCK_PRODUCTS[0];
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || '');

  return (
    <div className="py-24 md:py-40 bg-surface transition-colors duration-lux">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <nav className="flex flex-wrap text-[9px] uppercase tracking-[0.4em] text-text-muted mb-12 md:mb-20 opacity-60">
          <Link to="/" className="hover:text-accent transition-colors duration-fast">Studio</Link>
          <span className="mx-3 opacity-30">/</span>
          <Link to="/shop" className="hover:text-accent transition-colors duration-fast">Registry</Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 mb-24 md:mb-48">
          {/* Gallery - Calm Presence */}
          <div className="space-y-6 md:space-y-8 scroll-reveal">
            <div className="aspect-[4/5] bg-border/20 artisan-card overflow-hidden diffused-shadow group">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-[2s] ease-motion group-hover:scale-101 loaded" />
            </div>
            <div className="grid grid-cols-4 gap-4 md:gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-border/20 artisan-card overflow-hidden cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-mid border border-transparent hover:border-accent/20">
                  <img src={`https://picsum.photos/seed/p${i}/400/400`} className="w-full h-full object-cover loaded hover:scale-101 transition-transform duration-slow ease-motion" alt="Detail" />
                </div>
              ))}
            </div>
          </div>

          {/* Details - Airy Layout */}
          <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <div className="mb-10 md:mb-14">
              {product.isSeasonal && <Badge className="mb-6 md:mb-8 block w-fit">A Winter Meditation</Badge>}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-humanist italic mb-6 md:mb-8 text-primary leading-tight">{product.name}</h1>
              <p className="text-xl md:text-2xl font-humanist italic text-accent opacity-90">${product.price}.00</p>
            </div>

            <p className="text-text-muted leading-relaxed mb-10 md:mb-14 text-lg md:text-xl font-light italic humanist opacity-80">
              {product.description}
            </p>

            <div className="space-y-10 md:space-y-12 mb-12 md:mb-16">
              {/* Variants */}
              {product.variants && (
                <div>
                  <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-text-muted mb-4 md:mb-6">Volume & Vessel</h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {product.variants.map(v => (
                      <button 
                        key={v}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-6 md:px-8 py-3 text-[9px] md:text-[10px] uppercase tracking-[0.3em] border transition-all duration-fast ease-motion artisan-card active:scale-99 ${selectedVariant === v ? 'border-accent bg-accent/5 text-primary shadow-sm' : 'border-border text-text-muted hover:border-accent/40 hover:text-primary'}`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Fragrance Notes */}
              <div>
                <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-text-muted mb-4 md:mb-6">The Olfactory Narrative</h4>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {product.notes.map(note => (
                    <span key={note} className="px-4 md:px-5 py-2.5 bg-accent/5 text-[9px] uppercase tracking-[0.3em] text-accent italic artisan-card border border-accent/10 cursor-default hover:bg-accent/10 transition-colors duration-mid">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Add to Cart - Tactical Feedback */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-8 md:pt-10 border-t border-border/40">
                <div className="flex items-center border border-border artisan-card bg-surface/50 justify-between sm:justify-start">
                  <button className="px-5 py-4 hover:text-accent hover:bg-black/5 transition-colors duration-fast active:scale-95" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14} /></button>
                  <span className="px-6 font-humanist italic text-lg w-12 text-center">{quantity}</span>
                  <button className="px-5 py-4 hover:text-accent hover:bg-black/5 transition-colors duration-fast active:scale-95" onClick={() => setQuantity(quantity + 1)}><Plus size={14} /></button>
                </div>
                <Button className="flex-grow py-4 md:py-5 shadow-xl" variant="primary">Secure Ritual</Button>
                <button className="hidden sm:block p-5 border border-border artisan-card hover:border-accent/40 hover:text-accent transition-all duration-mid active:scale-95 hover:shadow-md"><Heart size={18} strokeWidth={1.2} /></button>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-border/40">
              {[
                { title: 'Ingredients & Craft', content: 'Our signature wax blend is hand-poured in small, intentional batches using clean-burning soy and premium botanical oils. Cured for 21 days for aromatic complexity.' },
                { title: 'The Slow Burn Guide', content: 'Trim the wick to 1/4 inch before every lighting. For the first burn, allow the wax to pool entirely to the vessel edge to prevent tunneling. Recycle our glass for your next apothecary.' },
              ].map((item, idx) => (
                <details key={idx} className="group border-b border-border/40">
                  <summary className="flex justify-between items-center py-6 md:py-8 cursor-pointer list-none hover:text-accent transition-colors duration-mid ease-motion select-none">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-text-muted transition-colors group-hover:text-accent">{item.title}</span>
                    <Plus size={14} strokeWidth={1} className="group-open:rotate-45 transition-transform duration-mid ease-motion" />
                  </summary>
                  <div className="pb-8 md:pb-10 text-base text-text-muted italic humanist font-light leading-relaxed opacity-75 animate-fade-in">
                    {item.content}
                  </div>
                </details>
              ))}
            </div>
            
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
              <div className="flex items-center space-x-4 text-[9px] uppercase tracking-[0.3em] text-text-muted font-medium opacity-60 hover:opacity-100 transition-opacity duration-mid cursor-default">
                <ShieldCheck size={16} strokeWidth={1} className="text-accent" />
                <span>Small Batch Poured</span>
              </div>
              <div className="flex items-center space-x-4 text-[9px] uppercase tracking-[0.3em] text-text-muted font-medium opacity-60 hover:opacity-100 transition-opacity duration-mid cursor-default">
                <Truck size={16} strokeWidth={1} className="text-accent" />
                <span>Sustainable Vessels</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24 md:mt-56">
          <SectionHeading title="Complete the Ritual" subtitle="Harmonious Pairings" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
            {MOCK_PRODUCTS.filter(p => p.id !== id).slice(0, 4).map(p => (
              <Link key={p.id} to={`/product/${p.id}`}>
                <ProductCard product={p} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};