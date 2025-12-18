import React from 'react';
import { SectionHeading } from '../components/UI';

export const About: React.FC = () => {
  return (
    <div className="py-24 md:py-48 animate-fade-in bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-40 items-center mb-32 md:mb-64">
          <div className="aspect-[4/5] overflow-hidden artisan-card luxury-shadow grayscale-[0.1] opacity-90 scroll-reveal">
            <img src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=1200&auto=format&fit=crop" alt="The Studio" className="w-full h-full object-cover loaded" />
          </div>
          <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <SectionHeading title="The Quiet Study" subtitle="Our Origins" />
            <div className="space-y-8 md:space-y-12 text-lg md:text-2xl text-text-muted leading-relaxed font-light italic humanist opacity-80">
              <p>
                Candlkaar was born not in a factory, but within a small, light-filled studio quieted by journals and lavender. We began with a single pursuit: How do we anchor within the rush?
              </p>
              <p>
                Our wax is a medium for memory. We believe that every scent should be an invitation—a soft permission to reclaim the space around you.
              </p>
            </div>
            <div className="mt-12 md:mt-20 pt-12 md:pt-20 border-t border-border/40 flex space-x-12 md:space-x-20">
              <div>
                <p className="text-4xl md:text-5xl font-humanist text-accent mb-4 italic font-light tracking-tight">MMXVIII</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold opacity-60 text-text-muted">Established</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-humanist text-accent mb-4 italic font-light tracking-tight">Pure</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold opacity-60 text-text-muted">Botanicals</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-section-contrast text-text-on-contrast p-10 md:p-24 lg:p-40 text-center mb-32 md:mb-64 relative artisan-card luxury-shadow overflow-hidden group">
           <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'var(--overlay-pattern)' }}></div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-humanist mb-10 md:mb-16 italic leading-[1.6] max-w-5xl mx-auto font-light opacity-95 transition-gentle group-hover:opacity-100">
            "We do not sell vessels. We sell the silence that follows the lighting of the wick."
          </h2>
          <div className="w-16 h-[1px] bg-accent/40 mx-auto group-hover:w-32 transition-gentle"></div>
        </div>

        <SectionHeading title="The Intentional Method" subtitle="Honest Craft" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 text-center">
          {[
            { title: 'Ethical Sourcing', desc: 'Working exclusively with independent family presses for botanical oils.', img: 'https://images.unsplash.com/photo-1596435254241-974955c3e1d3?q=80&w=600&auto=format&fit=crop' },
            { title: 'The 21-Day Cure', desc: 'Vessels are cured in temperature-stable environments for aromatic depth.', img: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=600&auto=format&fit=crop' },
            { title: 'The Living Glass', desc: 'Every vessel is designed to be repurposed, continuing its life in your space.', img: 'https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?q=80&w=600&auto=format&fit=crop' },
          ].map((item, idx) => (
            <div key={idx} className="group scroll-reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="aspect-square bg-border/20 mb-8 md:mb-12 overflow-hidden artisan-card luxury-shadow grayscale-[0.2] group-hover:grayscale-0 transition-gentle">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 loaded" alt={item.title} />
              </div>
              <h4 className="text-2xl md:text-3xl font-humanist mb-6 md:mb-8 italic text-primary">{item.title}</h4>
              <p className="text-base text-text-muted leading-loose font-light humanist italic opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};