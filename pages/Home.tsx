import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, ProductCard, SectionHeading } from '../components/UI';
import { MOCK_PRODUCTS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in bg-surface transition-colors duration-lux">
      {/* Hero Section - High Contrast Background */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-section-contrast" aria-label="Featured Collection">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1602872030219-cdebb0844fbc?q=80&w=2000&auto=format&fit=crop" 
            alt="" 
            // Optimized: Removed large scale animation on mobile to prevent jank. Scale is now 100 -> 101 only on hover/large screens.
            className="w-full h-full object-cover brightness-[0.5] contrast-[1.1] grayscale-[0.2] transition-transform duration-[10s] ease-linear scale-100 lg:hover:scale-101"
            loading="eager"
            onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')}
          />
          {/* Subtle Celebration Particles Layer */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
        </div>
        
        {/* Deep atmospheric radial gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-section-contrast via-transparent to-black/40 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-text-on-contrast w-full py-20">
          <div className="max-w-4xl animate-fade-in">
            <span className="inline-block text-[10px] md:text-[11px] font-bold uppercase tracking-[0.6em] mb-8 md:mb-12 text-accent italic animate-gentle-float">
              The 2025 Series
            </span>
            {/* Fluid typography for Hero */}
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-humanist mb-10 md:mb-16 leading-[0.95] tracking-tight italic text-white">
              A celebration <br />of <span className="text-accent font-light">pure light.</span>
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl mb-10 md:mb-16 text-text-on-contrast opacity-90 font-light leading-relaxed max-w-2xl italic humanist">
              Stepping into the new year with clarity. Our vessels are hand-poured to illuminate your resolutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
              <Link to="/shop">
                <Button variant="primary" className="w-full sm:w-auto px-12 md:px-16 py-4 md:py-6 border-none shadow-2xl" ariaLabel="Shop the new year collection">
                  The Collection
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" className="w-full sm:w-auto px-12 md:px-16 py-4 md:py-6 border border-text-on-contrast hover:border-accent text-text-on-contrast hover:text-white opacity-90 hover:opacity-100 active:scale-99">
                  Our Manifesto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Year Ritual - Inverted High Contrast Section */}
      <section className="bg-section-contrast py-24 md:py-48 lg:py-64 relative overflow-hidden transition-colors duration-lux">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <div className="max-w-5xl mx-auto relative px-6 py-16 md:px-12 md:py-32 bg-white/5 backdrop-blur-sm artisan-card luxury-shadow scroll-reveal border border-white/10 group hover:bg-white/10 transition-colors duration-slow">
            <span className="text-accent font-bold text-[10px] md:text-[11px] uppercase tracking-[0.6em] mb-6 md:mb-10 block italic">The Ritual</span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-humanist text-white mb-8 md:mb-12 italic leading-tight">Quiet Beginnings</h2>
            <p className="text-white opacity-90 mb-10 md:mb-16 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto humanist italic font-light">
              Celebrate the transition. Our limited release "Ember & Ash" is the sensory marker for your evolution.
            </p>
            <Link to="/shop" className="block w-full">
              {/* Forced inner span structure to be full width flex row using [&>span] selector */}
              <Button 
                variant="outline" 
                className="group/btn text-white border-white/30 hover:border-accent hover:text-accent w-full px-6 md:px-12 [&>span]:w-full [&>span]:flex [&>span]:justify-between [&>span]:items-center"
              >
                <span>Shop Rituals</span>
                <ArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-mid ease-motion" size={16} strokeWidth={1} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions - Boxed & Grounded */}
      <section className="py-24 md:py-48 lg:py-64 bg-surface relative transition-colors duration-lux">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: 'Artisan Sourcing', desc: 'Hand-blown glass vessels designed to capture the depth of the flame.' },
              { title: 'Patient Curing', desc: 'Aged in temperature-controlled chambers to ensure scent integrity and throw.' },
              { title: 'Botanical Purity', desc: 'Clean-burning waxes derived from sustainable harvests for a mindful space.' },
            ].map((item, idx) => (
              <article 
                key={idx} 
                className="group scroll-reveal artisan-card border border-border p-8 md:p-12 bg-white/5 hover:bg-white/20 hover:border-accent/30 transition-all duration-slow ease-motion hover:-translate-y-1 hover:shadow-lg" 
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-12 h-[1px] bg-accent/40 mb-8 group-hover:w-20 group-hover:bg-accent transition-all duration-slow ease-motion"></div>
                <h3 className="text-2xl md:text-3xl font-humanist mb-6 italic text-primary">{item.title}</h3>
                <p className="text-text-muted text-base leading-loose font-light humanist italic opacity-90 transition-opacity duration-mid group-hover:opacity-100">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Edit */}
      <section className="py-24 md:py-48 lg:py-64 border-t border-border/40 bg-surface transition-colors duration-lux">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-8 md:gap-10">
            <SectionHeading title="The Curated Edit" subtitle="Scent Stories for 2025" />
            <Link to="/shop" className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-accent hover:text-primary font-bold transition-colors duration-mid ease-motion flex items-center mb-8 md:mb-16 active:scale-95 group" aria-label="View all vessels">
              Explore Library <ArrowRight className="ml-5 transition-transform duration-mid ease-motion group-hover:translate-x-2" size={16} strokeWidth={1} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 md:gap-x-16 md:gap-y-40">
            {MOCK_PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section - Contrast Texture */}
      <section className="py-24 md:py-48 lg:py-64 bg-section-contrast text-text-on-contrast relative overflow-hidden border-y border-border/20 transition-colors duration-lux">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'var(--overlay-pattern)' }}></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 lg:gap-48 items-center">
          <div className="relative order-2 md:order-1 scroll-reveal">
             <div className="aspect-[4/5] overflow-hidden artisan-card luxury-shadow relative z-10 transition-all duration-slow ease-motion group hover:shadow-2xl border border-white/10 bg-surface/5">
              <img 
                src="https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1200&auto=format&fit=crop" 
                alt="Our Master Pourer" 
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-[2s] ease-motion group-hover:scale-101 group-hover:brightness-90" 
                loading="lazy"
                onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')}
              />
            </div>
            <div className="absolute -bottom-16 -right-16 w-96 h-96 border border-accent/10 artisan-card z-0 hidden lg:block animate-gentle-float opacity-40"></div>
          </div>
          <div className="order-1 md:order-2 scroll-reveal" style={{ transitionDelay: '250ms' }}>
            <span className="text-accent uppercase tracking-[0.7em] text-[10px] md:text-[11px] font-bold mb-8 md:mb-12 block italic">The Craft of Time</span>
            <h2 className="text-4xl md:text-6xl lg:text-9xl font-humanist mb-8 md:mb-16 leading-[1] italic font-light text-text-on-contrast">Patiently <br /><span className="text-accent">Poured.</span></h2>
            <p className="text-lg md:text-2xl text-text-on-contrast opacity-80 mb-10 md:mb-16 leading-loose font-light italic humanist">
              We believe the stillness of the studio is captured within the wax, offering you a cleaner, deeper ritual.
            </p>
            <Link to="/about">
              <Button variant="outline" className="px-12 md:px-16 py-4 md:py-6 text-text-on-contrast border-text-on-contrast/30 hover:bg-accent hover:text-text-on-accent hover:border-accent active:scale-99">The 2025 Manifesto</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Refined Bottom Section */}
      <section className="py-24 md:py-32 bg-surface transition-colors duration-lux">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center scroll-reveal">
          <div className="mb-8 md:mb-12">
             <span className="text-accent text-[60px] md:text-[80px] font-humanist italic leading-none opacity-40">“</span>
          </div>
          <blockquote className="text-2xl md:text-5xl font-humanist italic text-primary leading-[1.4] mb-8 md:mb-12 font-light tracking-wide opacity-95">
            Lighting "Ember & Ash" was more than a scent. It was the feeling of leaving the old behind and embracing the quiet power of what's to come.
          </blockquote>
          <div className="flex flex-col items-center space-y-3">
            <cite className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-accent italic not-italic">Marcus Chen</cite>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-text-muted opacity-80">Resident Curator</p>
          </div>
        </div>
      </section>
    </div>
  );
};