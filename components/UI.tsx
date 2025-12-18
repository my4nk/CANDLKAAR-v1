import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'surface';
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ariaLabel, ...props }) => {
  // Added 'active:scale-99' for physical feedback
  // Reduced base padding for mobile, scaled up for desktop (px-8 py-3 -> md:px-10 md:py-4)
  const baseStyles = 'px-8 py-3 md:px-10 md:py-4 text-[10px] md:text-[11px] font-medium transition-all duration-fast ease-motion uppercase tracking-[0.3em] artisan-card active:scale-99 disabled:opacity-30 disabled:pointer-events-none relative overflow-hidden group/btn';
  
  const variants = {
    // Replaced generic shadow with luxury-shadow class control
    primary: 'bg-accent text-text-on-accent hover:bg-primary hover:text-text-on-contrast luxury-shadow hover:shadow-lg',
    secondary: 'bg-primary text-text-on-contrast hover:bg-accent hover:text-text-on-accent luxury-shadow hover:shadow-lg',
    ghost: 'bg-transparent text-text hover:bg-accent/10',
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
      {/* Soft gradient wash on hover - subtle light effect */}
      <span className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/5 transition-colors duration-mid ease-motion"></span>
    </button>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] bg-accent/10 text-accent border border-accent/20 artisan-card cursor-default ${className}`}>
    {children}
  </span>
);

export const SectionHeading: React.FC<{ title: string; subtitle?: string; center?: boolean; contrast?: boolean }> = ({ title, subtitle, center, contrast }) => (
  <div className={`mb-12 md:mb-24 scroll-reveal ${center ? 'text-center' : ''}`}>
    {subtitle && (
      <p className={`uppercase tracking-[0.5em] text-[10px] font-medium mb-4 md:mb-6 italic opacity-90 transition-colors duration-slow ${contrast ? 'text-accent' : 'text-accent'}`}>
        {subtitle}
      </p>
    )}
    {/* Responsive font size: 3xl mobile -> 6xl desktop */}
    <h2 className={`text-3xl md:text-5xl lg:text-6xl font-humanist leading-[1.1] italic transition-colors duration-slow ${contrast ? 'text-text-on-contrast' : 'text-primary'}`}>{title}</h2>
  </div>
);

export const ProductCard: React.FC<{ product: any; onAddToCart?: () => void }> = ({ product, onAddToCart }) => (
  <article className="group cursor-pointer scroll-reveal" aria-labelledby={`product-name-${product.id}`}>
    {/* Micro-scale interaction (1.01) instead of 1.10 */}
    <div className="relative aspect-[4/5] overflow-hidden mb-6 md:mb-8 bg-border/10 artisan-card luxury-shadow transition-all duration-mid ease-motion group-hover:-translate-y-1 group-hover:shadow-xl border border-border/50 group-hover:border-accent/30">
      <img 
        src={product.image} 
        alt="" 
        // No zoom, just brightness/contrast shift
        className="w-full h-full object-cover grayscale-[0.2] contrast-[1.05] brightness-[0.95] transition-all duration-lux ease-motion group-hover:scale-101 group-hover:brightness-100 group-hover:grayscale-0"
        onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')}
      />
      
      {/* Celebration Shimmer Effect - Slower */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-slow bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-shimmer"></div>

      {product.isSeasonal && (
        <div className="absolute top-6 left-6 christmas-only opacity-0 group-hover:opacity-100 transition-opacity duration-mid">
          <Badge className="bg-surface/90 backdrop-blur-lg border-accent/30 text-accent shadow-sm">Celebration Drop</Badge>
        </div>
      )}
      
      {/* Button Reveal - Soft Fade/Slide */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-mid ease-motion flex items-end justify-center pb-12">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-mid ease-motion delay-75">
          <Button 
            variant="primary" 
            className="px-8 text-[10px] shadow-2xl" 
            onClick={(e) => { e.stopPropagation(); onAddToCart?.(); }}
            ariaLabel={`Explore scent notes for ${product.name}`}
          >
            Explore Note
          </Button>
        </div>
      </div>
    </div>
    <div className="px-1 transition-opacity duration-mid group-hover:opacity-80">
      <p className="text-[10px] text-accent uppercase tracking-[0.4em] mb-3 font-medium opacity-80">{product.category}</p>
      <div className="flex justify-between items-baseline gap-6">
        <h3 id={`product-name-${product.id}`} className="text-xl md:text-2xl font-humanist italic text-primary transition-colors duration-fast group-hover:text-accent">{product.name}</h3>
        <p className="text-base font-humanist italic text-text-muted transition-colors duration-fast group-hover:text-primary">${product.price}.00</p>
      </div>
    </div>
  </article>
);