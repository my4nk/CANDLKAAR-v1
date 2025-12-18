import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, Gift, User, Moon, Sun, ArrowRight, Instagram, Mail } from 'lucide-react';
import { NAVIGATION, FOOTER_LINKS } from '../constants';
import { Button } from './UI';

interface LayoutProps {
  children: React.ReactNode;
  isChristmas: boolean;
  toggleChristmas: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  cartCount: number;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  isChristmas, 
  toggleChristmas, 
  isDarkMode, 
  toggleDarkMode, 
  cartCount 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Enforce Home redirection on initial mount
  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Navigation cleanup
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Accessibility Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-accent focus:text-text-on-accent">
        Skip to content
      </a>

      {/* Floating Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 z-[60] p-4 rounded-full bg-surface/80 backdrop-blur-md border border-border shadow-lg text-primary hover:text-accent transition-all duration-slow ease-motion hover:scale-105 group focus:outline-none focus:ring-1 focus:ring-accent"
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <span className="sr-only">Toggle Theme</span>
        {isDarkMode ? (
          <Sun size={20} strokeWidth={1} className="group-hover:rotate-45 transition-transform duration-slow ease-motion" />
        ) : (
          <Moon size={20} strokeWidth={1} className="group-hover:-rotate-12 transition-transform duration-slow ease-motion" />
        )}
      </button>

      {/* Top Banner */}
      <div className="bg-accent text-text-on-accent py-2 px-4 text-center text-[9px] uppercase tracking-[0.3em] font-medium transition-colors duration-lux">
        <div className="animate-reveal delay-300">
          {isDarkMode ? 'Midnight Rituals: The 2025 Collection' : 'Guided by scent, inspired by the quiet.'}
        </div>
      </div>

      {/* Header */}
      <header className="sticky-header border-b border-border/40" role="banner">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="relative flex justify-between items-center h-20 md:h-28">
            
            {/* Desktop Nav: Interaction is spacing, not color */}
            <nav className="hidden md:flex space-x-12 z-20" aria-label="Primary Navigation">
              {NAVIGATION.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-[800ms] ease-motion hover:tracking-[0.35em] ${location.pathname === item.path ? 'text-accent' : 'text-text-muted hover:text-primary'}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link 
              to="/" 
              className="flex flex-col items-start md:absolute md:left-1/2 md:-translate-x-1/2 md:items-center z-10 mr-auto md:mr-0 group" 
              aria-label="CANDLKAAR Home"
            >
              <span className="text-3xl md:text-5xl font-humanist italic tracking-[-0.03em] font-light text-primary transition-colors duration-lux whitespace-nowrap group-hover:text-accent duration-slow ease-motion">Candlkaar</span>
              <span className="text-[8px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-accent mt-1 font-bold transition-all duration-slow ease-motion opacity-80 group-hover:tracking-[0.7em]">{isDarkMode ? 'Midnight Pour' : 'Artisan Poured'}</span>
            </Link>

            {/* Icons */}
            <div className="flex items-center justify-end space-x-2 md:space-x-8 z-20 flex-shrink-0">
              <button 
                onClick={toggleChristmas} 
                className={`group relative p-3 transition-colors duration-slow ease-motion ${isChristmas ? 'text-accent' : 'text-text-muted hover:text-accent'}`}
              >
                <Gift size={20} strokeWidth={1} className="group-hover:-translate-y-1 transition-transform duration-mid ease-motion" />
                <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent transition-all duration-slow ease-motion ${isChristmas ? 'opacity-100' : 'opacity-0'}`}></span>
              </button>
              
              <Link to="/account" className="text-text-muted hover:text-accent hidden sm:flex p-3 transition-all duration-slow ease-motion hover:-translate-y-1" aria-label="My Account">
                <User size={20} strokeWidth={1} />
              </Link>
              
              <Link to="/cart" className="relative text-text hover:text-accent p-3 transition-all duration-slow ease-motion hover:-translate-y-1" aria-label={`Shopping bag with ${cartCount} items`}>
                <ShoppingBag size={20} strokeWidth={1} />
                {cartCount > 0 && (
                  <span className="absolute top-2 right-1 text-[9px] font-bold text-accent bg-surface px-1 rounded-full animate-fade-in">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              <button 
                className="md:hidden text-text p-2" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Slower reveal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface md:hidden pt-32 px-8 animate-fade-in flex flex-col h-full" role="dialog">
          <nav className="flex flex-col space-y-8 text-center border-b border-border/40 pb-12 mb-12">
            {NAVIGATION.map((item) => (
              <Link key={item.path} to={item.path} className="text-4xl font-humanist italic text-primary hover:text-accent transition-colors duration-slow">{item.label}</Link>
            ))}
            <Link to="/account" className="text-4xl font-humanist italic text-primary hover:text-accent transition-colors duration-slow">The Studio</Link>
          </nav>
          
          <div className="flex justify-center text-center">
             <div className="flex flex-col space-y-6 opacity-60">
               <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent mb-2">Connect</span>
               <a href="#" className="flex items-center justify-center space-x-3 text-sm text-text-muted hover:text-primary transition-colors duration-mid"><Instagram size={16} strokeWidth={1}/> <span>Instagram</span></a>
               <a href="#" className="flex items-center justify-center space-x-3 text-sm text-text-muted hover:text-primary transition-colors duration-mid"><Mail size={16} strokeWidth={1}/> <span>Email</span></a>
             </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main id="main-content" className="flex-grow outline-none bg-surface transition-colors duration-lux" tabIndex={-1}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-section-contrast text-text-on-contrast pt-24 pb-16 md:pt-32 md:pb-24 mt-auto transition-colors duration-lux">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 relative">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-24 relative z-10">
            
            {/* Column 1 */}
            <div className="scroll-reveal opacity-0">
              <Link to="/" className="inline-block mb-8 group">
                <span className="text-3xl font-humanist italic text-text-on-contrast block mb-2 transition-opacity duration-mid group-hover:opacity-80">Candlkaar</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold">Est. 2018</span>
              </Link>
              <p className="text-sm text-text-on-contrast opacity-60 mb-8 leading-relaxed font-light italic max-w-xs">
                Hand-poured in the silence of the night for the clarity of your morning.
              </p>
            </div>

            {/* Column 2 */}
            <div className="scroll-reveal opacity-0" style={{ transitionDelay: '100ms' }}>
              <h5 className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent mb-8">Discovery</h5>
              <ul className="space-y-4">
                {FOOTER_LINKS.company.map(link => (
                  <li key={link.label}>
                    <Link to={link.path} className="block text-sm text-text-on-contrast opacity-50 hover:opacity-100 hover:tracking-wide transition-all duration-mid ease-motion font-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/shop" className="block text-sm text-text-on-contrast opacity-50 hover:opacity-100 hover:tracking-wide transition-all duration-mid ease-motion font-light">
                    All Collections
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="scroll-reveal opacity-0" style={{ transitionDelay: '200ms' }}>
              <h5 className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent mb-8">The Circle</h5>
              <p className="text-sm text-text-on-contrast opacity-50 mb-8 font-light italic">
                Early access to seasonal drops and studio notes.
              </p>
              <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/5 border-b border-white/10 py-3 px-0 pl-2 pr-10 text-text-on-contrast placeholder:text-text-on-contrast/30 focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-slow ease-motion text-sm"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-0 bottom-3 text-text-on-contrast opacity-40 hover:text-accent hover:opacity-100 transition-all duration-mid ease-motion min-h-0 min-w-0 p-1" 
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={16} strokeWidth={1} />
                  </button>
                </div>
              </form>
            </div>
            
          </div>
          
          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left opacity-40 hover:opacity-100 transition-opacity duration-slow">
            <p className="text-[9px] uppercase tracking-[0.2em] text-text-on-contrast font-bold">
              © 2025 Candlkaar Studio.
            </p>
            <div className="flex space-x-8 justify-center">
               <span className="text-[9px] uppercase tracking-[0.1em] text-text-on-contrast cursor-pointer hover:text-accent transition-colors">Privacy Policy</span>
               <span className="text-[9px] uppercase tracking-[0.1em] text-text-on-contrast cursor-pointer hover:text-accent transition-colors">Terms of Use</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};