import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button, SectionHeading } from '../components/UI';
import { MOCK_PRODUCTS } from '../constants';

export const Cart: React.FC = () => {
  // Mock data for UI
  const cartItems = MOCK_PRODUCTS.slice(0, 2);
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="py-12 md:py-20 bg-surface min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <SectionHeading title="Your Bag" subtitle="Ready for Check Out" />

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 relative">
            {/* List */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-border">
                  <div className="w-full sm:w-40 aspect-[4/5] bg-border/10 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-humanist italic text-primary">{item.name}</h3>
                        <p className="font-medium text-primary">${item.price}.00</p>
                      </div>
                      <p className="text-xs uppercase tracking-widest text-text-muted mb-4">Size: Regular (8oz)</p>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex border border-border items-center text-primary">
                          <button className="px-3 py-2 hover:bg-border/20">-</button>
                          <span className="px-4">1</span>
                          <button className="px-3 py-2 hover:bg-border/20">+</button>
                        </div>
                        <button className="text-text-muted hover:text-accent transition-colors flex items-center">
                          <Trash2 size={14} className="mr-2" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Link to="/shop" className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-text-muted hover:text-accent font-bold mt-4">
                Continue Shopping <ArrowRight className="ml-2" size={14} />
              </Link>
            </div>

            {/* Summary - Sticky Positioned */}
            <div className="lg:col-span-1">
              <div className="bg-surface p-6 md:p-8 border border-border artisan-card shadow-sm sticky top-24">
                <h4 className="text-xs uppercase tracking-widest font-bold mb-6 md:mb-8 border-b border-border pb-4 text-primary">Order Summary</h4>
                <div className="space-y-4 mb-6 md:mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Subtotal</span>
                    <span className="text-primary">${subtotal}.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Shipping</span>
                    <span className="text-accent uppercase font-bold text-[10px] tracking-widest">Calculated at checkout</span>
                  </div>
                  <div className="pt-4 border-t border-border flex justify-between font-bold text-lg text-primary">
                    <span>Total</span>
                    <span>${subtotal}.00</span>
                  </div>
                </div>
                <Link to="/checkout">
                  <Button className="w-full py-4 md:py-5" variant="primary">Proceed to Checkout</Button>
                </Link>
                <div className="mt-8 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-4">Secure Checkout with</p>
                  <div className="flex justify-center space-x-4 grayscale opacity-40">
                    <div className="h-6 w-10 bg-border/30 rounded"></div>
                    <div className="h-6 w-10 bg-border/30 rounded"></div>
                    <div className="h-6 w-10 bg-border/30 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 md:py-20 border border-dashed border-border rounded-lg">
            <ShoppingBag className="mx-auto mb-6 text-text-muted" size={48} />
            <h3 className="text-2xl font-humanist mb-4 italic text-primary">Your bag is empty</h3>
            <p className="text-text-muted mb-8">It looks like you haven't added anything yet.</p>
            <Link to="/shop">
              <Button variant="primary">Start Exploring</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};