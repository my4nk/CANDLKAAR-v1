import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Gift, User, Moon, Sun, ArrowRight } from 'lucide-react';
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

      {/* Floating Mode Toggle - Physical Button Feel */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] p-3 md:p-4 rounded-full bg-surface border border-border shadow-xl text-primary hover:text-accent transition-all duration-mid ease-motion hover:scale-105 active:scale-95 group luxury-shadow focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <span className="sr-only">Toggle Theme</span>
        {isDarkMode ? (
          <Sun size={20} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-slow ease-motion" />
        ) : (
          <Moon size={20} strokeWidth={1.5} className="group-hover:-rotate-12 transition-transform duration-slow ease-motion" />
        )}
      </button>

      {/* Top Banner - Soft Fade */}
      <div className="bg-accent text-text-on-accent py-2 md:py-3 px-4 text-center text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold transition-colors duration-lux">
        <div className="animate-reveal">
          {isDarkMode ? 'Midnight Rituals: The 2025 Collection' : 'Guided by scent, inspired by the quiet.'}
        </div>
      </div>

      {/* Header */}
      <header className="sticky-header border-b border-border/60" role="banner">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="relative flex justify-between items-center h-20 md:h-28">
            
            {/* Desktop Nav (Left Side) - Hidden on Mobile */}
            <nav className="hidden md:flex space-x-8 lg:space-x-12 z-20" aria-label="Primary Navigation">
              {NAVIGATION.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`relative group text-[11px] uppercase tracking-[0.3em] transition-colors duration-mid ease-motion hover:text-accent ${location.pathname === item.path ? 'text-accent font-bold' : 'text-text-muted'}`}
                >
                  {item.label}
                  {/* Underline - Eased and Slowed */}
                  <span className={`absolute -bottom-2 left-0 h-[1px] bg-accent transition-all duration-mid ease-motion ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full opacity-50 group-hover:opacity-100'}`}></span>
                </Link>
              ))}
            </nav>

            {/* Logo - Adaptive Positioning */}
            {/* Mobile: Static Flex Item (Left aligned). Desktop: Absolute Center. */}
            {/* This prevents the logo from overlapping icons on small screens while keeping the luxury centered look on desktop. */}
            <Link 
              to="/" 
              className="flex flex-col items-start md:absolute md:left-1/2 md:-translate-x-1/2 md:items-center z-10 mr-auto md:mr-0 transition-opacity duration-mid ease-motion active:scale-99 hover:opacity-80 flex-shrink-0" 
              aria-label="CANDLKAAR Home"
            >
              <span className="text-2xl sm:text-3xl md:text-5xl font-humanist italic tracking-[-0.05em] font-light text-primary transition-colors duration-lux whitespace-nowrap">Candlkaar</span>
              <span className="text-[8px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-accent mt-1 font-bold transition-colors duration-lux whitespace-nowrap">{isDarkMode ? 'Midnight Pour' : 'Artisan Poured'}</span>
            </Link>

            {/* Icons (Right Side) */}
            {/* Tighter spacing on mobile (space-x-1) to fit all icons without wrapping */}
            <div className="flex items-center justify-end space-x-1 sm:space-x-2 md:space-x-8 lg:space-x-10 z-20 flex-shrink-0">
              <button 
                onClick={toggleChristmas} 
                className={`group relative p-2 md:p-3 transition-colors duration-mid ease-motion active:scale-95 ${isChristmas ? 'text-accent' : 'text-text-muted hover:text-accent'}`}
                aria-label={isChristmas ? "Disable festive highlight" : "Enable festive celebration highlight"}
              >
                <Gift size={20} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform duration-mid ease-motion" />
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent transition-all duration-slow ease-motion ${isChristmas ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50'}`}></span>
              </button>
              
              <Link to="/account" className="text-text-muted hover:text-accent hidden sm:flex p-2 md:p-3 transition-all duration-mid ease-motion hover:-translate-y-0.5 active:scale-95" aria-label="My Account">
                <User size={20} strokeWidth={1.5} />
              </Link>
              
              <Link to="/cart" className="relative text-text hover:text-accent p-2 md:p-3 transition-all duration-mid ease-motion hover:-translate-y-0.5 active:scale-95" aria-label={`Shopping bag with ${cartCount} items`}>
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 text-[10px] font-bold text-accent bg-surface px-1.5 rounded-full border border-accent/30 italic animate-fade-in">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              <button 
                className="md:hidden text-text p-2 transition-transform duration-mid active:scale-95" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface md:hidden pt-32 px-10 animate-fade-in" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <nav className="flex flex-col space-y-10 text-center">
            {NAVIGATION.map((item) => (
              <Link key={item.path} to={item.path} className="text-3xl font-humanist italic text-primary hover:text-accent transition-colors duration-mid">{item.label}</Link>
            ))}
            <Link to="/account" className="text-3xl font-humanist italic text-primary hover:text-accent transition-colors duration-mid">The Studio</Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main id="main-content" className="flex-grow outline-none bg-surface transition-colors duration-lux" tabIndex={-1}>
        {children}
      </main>

      {/* Footer - 3-Column Layout */}
      <footer className="bg-section-contrast text-text-on-contrast pt-16 pb-12 md:pt-24 md:pb-16 mt-auto border-t border-white/5 overflow-hidden transition-colors duration-lux" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 relative">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 mb-16 md:mb-24 relative z-10">
            
            {/* Column 1: Brand */}
            <div className="scroll-reveal">
              <Link to="/" className="inline-block mb-6 md:mb-8 group">
                <span className="text-3xl font-humanist italic text-text-on-contrast block mb-2 transition-opacity duration-mid group-hover:opacity-80">Candlkaar</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold">Est. 2018</span>
              </Link>
              <p className="text-sm text-text-on-contrast opacity-70 mb-8 leading-relaxed font-light italic max-w-xs">
                Hand-poured in the silence of the night for the clarity of your morning.
              </p>
            </div>

            {/* Column 2: Discovery */}
            <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 md:mb-8">Discovery</h5>
              <ul className="space-y-4">
                {FOOTER_LINKS.company.map(link => (
                  <li key={link.label}>
                    <Link to={link.path} className="block text-sm text-text-on-contrast opacity-60 hover:opacity-100 hover:text-accent hover:translate-x-1 transition-all duration-mid ease-motion font-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/shop" className="block text-sm text-text-on-contrast opacity-60 hover:opacity-100 hover:text-accent hover:translate-x-1 transition-all duration-mid ease-motion font-light">
                    All Collections
                  </Link>
                </li>
                <li>
                  <Link to="/wholesale" className="block text-sm text-text-on-contrast opacity-60 hover:opacity-100 hover:text-accent hover:translate-x-1 transition-all duration-mid ease-motion font-light">
                    Wholesale
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Newsletter */}
            <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 md:mb-8">The Circle</h5>
              <p className="text-sm text-text-on-contrast opacity-60 mb-6 font-light italic">
                Early access to seasonal drops and studio notes.
              </p>
              <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/5 border-b border-white/20 py-3 px-0 pl-2 pr-10 text-text-on-contrast placeholder:text-text-on-contrast/30 focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-mid ease-motion text-sm"
                  />
                  {/* Fixed Button: Removed global constraints (min-h, min-w) and aligned bottom to sit on border */}
                  <button 
                    type="submit" 
                    className="absolute right-0 bottom-3 text-text-on-contrast opacity-50 hover:text-accent hover:opacity-100 hover:translate-x-1 transition-all duration-mid ease-motion min-h-0 min-w-0 p-1" 
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </button>
                </div>
              </form>
            </div>
            
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-on-contrast opacity-30 font-bold">
              © 2025 Candlkaar Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 justify-center">
               <span className="text-[10px] uppercase tracking-[0.1em] text-text-on-contrast opacity-30 hover:opacity-80 cursor-pointer transition-opacity duration-mid">Privacy Policy</span>
               <span className="text-[10px] uppercase tracking-[0.1em] text-text-on-contrast opacity-30 hover:opacity-80 cursor-pointer transition-opacity duration-mid">Terms of Use</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};