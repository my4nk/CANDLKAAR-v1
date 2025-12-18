import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Wholesale } from './pages/Wholesale';
import { NotFound } from './pages/NotFound';

const App: React.FC = () => {
  const [isChristmas, setIsChristmas] = useState(false);
  // Default to true for "Midnight" theme launch, or false for pastel
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div 
        data-mode={isDarkMode ? 'dark' : 'light'} 
        data-seasonal={isChristmas ? 'christmas' : ''}
        className="min-h-screen transition-colors duration-500"
      >
        <Layout 
          isChristmas={isChristmas} 
          toggleChristmas={() => setIsChristmas(!isChristmas)}
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          cartCount={cart.length}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/wholesale" element={<Wholesale />} />
            
            {/* Mock shell routes */}
            <Route path="/account" element={<div className="py-40 text-center font-serif text-3xl text-primary">Account Shell (UI Only)</div>} />
            <Route path="/faq" element={<div className="py-40 text-center font-serif text-3xl text-primary">FAQ Shell (UI Only)</div>} />
            <Route path="/checkout" element={<div className="py-40 text-center font-serif text-3xl italic text-primary">Checkout UI Processing...</div>} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
      <style>{`
        /* Christmas Mode Global Overrides */
        [data-seasonal="christmas"] .christmas-only {
          display: block !important;
        }
        :not([data-seasonal="christmas"]) .christmas-only {
          display: none !important;
        }
      `}</style>
    </Router>
  );
};

export default App;