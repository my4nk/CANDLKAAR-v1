import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'surface';
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ariaLabel, ...props }) => {
  // Base: Extremely slow transitions, no harsh scale down.
  const baseStyles = 'px-10 py-4 text-[10px] md:text-[11px] font-medium transition-all duration-slow ease-motion uppercase tracking-[0.3em] relative overflow-hidden group/btn hover:tracking-[0.35em] disabled:opacity-30 disabled:pointer-events-none';
  
  const variants = {
    // Primary: Solid but "soft" fill. Hover creates a subtle lightening/sheen, not a hard color swap.
    primary: 'bg-accent text-text-on-accent border border-accent hover:bg-accent/90 hover:border-accent/80',
    
    // Secondary: Dark base.
    secondary: 'bg-primary text-text-on-contrast border border-primary hover:bg-primary/90',
    
    // Ghost: No background. Text spacing expansion is the main interaction.
    ghost: 'bg-transparent text-text border border-transparent hover:text-accent',
    
    // Outline: The border color shifts slowly.
    outline: 'bg-transparent border border-border text-text hover:border-accent hover:text-accent',
    
    surface: 'bg-surface text-primary border border-border hover:border-accent hover:text-accent',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* The Luxury Sheen: A subtle light reflection passing through on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-sheen"></div>
    </button>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`px-4 py-2 text-[9px] font-medium uppercase tracking-[0.2em] bg-surface/50 backdrop-blur-md text-accent border border-accent/20 cursor-default ${className}`}>
    {children}
  </span>
);

export const SectionHeading: React.FC<{ title: string; subtitle?: string; center?: boolean; contrast?: boolean }> = ({ title, subtitle, center, contrast }) => (
  <div className={`mb-16 md:mb-32 scroll-reveal opacity-0 ${center ? 'text-center' : ''}`}>
    {subtitle && (
      <p className={`uppercase tracking-[0.4em] text-[10px] font-medium mb-6 md:mb-8 italic transition-colors duration-slow ${contrast ? 'text-accent' : 'text-accent'}`}>
        {subtitle}
      </p>
    )}
    <h2 className={`text-4xl md:text-6xl lg:text-7xl font-humanist leading-[1.1] italic transition-colors duration-slow ${contrast ? 'text-text-on-contrast' : 'text-primary'}`}>{title}</h2>
  </div>
);

export const ProductCard: React.FC<{ product: any; onAddToCart?: () => void }> = ({ product, onAddToCart }) => (
  <article className="group cursor-pointer scroll-reveal opacity-0" aria-labelledby={`product-name-${product.id}`}>
    {/* Image Container: No border radius, pure sharp luxury edges or very subtle. Minimal shadow. */}
    <div className="relative aspect-[4/5] overflow-hidden mb-6 md:mb-8 bg-surface/50">
      
      {/* The Image: Slow zoom (scale 1.0 -> 1.05) over 1.5s. No fast jumps. */}
      <img 
        src={product.image} 
        alt="" 
        className="w-full h-full object-cover grayscale-[0.1] contrast-[1.02] transition-transform duration-[1500ms] ease-motion group-hover:scale-105 group-hover:grayscale-0"
        loading="lazy"
        onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')}
      />

      {/* Seasonal Badge */}
      {product.isSeasonal && (
        <div className="absolute top-4 left-4 christmas-only opacity-0 group-hover:opacity-100 transition-opacity duration-mid">
          <Badge>Celebration</Badge>
        </div>
      )}
      
      {/* Decorative Overlay: Just a subtle darkening on hover to make text pop if we had it overlaying */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-[1500ms] ease-motion"></div>
    </div>

    {/* Typography: Interaction is tracking expansion */}
    <div className="px-1 text-center md:text-left">
      <p className="text-[9px] text-accent uppercase tracking-[0.3em] mb-3 font-medium opacity-80 group-hover:tracking-[0.4em] transition-all duration-[800ms] ease-motion">
        {product.category}
      </p>
      
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-2">
        <h3 id={`product-name-${product.id}`} className="text-xl md:text-2xl font-humanist italic text-primary group-hover:text-accent transition-colors duration-mid">
          {product.name}
        </h3>
        <span className="text-sm font-humanist italic text-text-muted transition-colors duration-mid">
          ${product.price}.00
        </span>
      </div>
    </div>
  </article>
);