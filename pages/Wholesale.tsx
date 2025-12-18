import React from 'react';
import { SectionHeading, Button } from '../components/UI';

export const Wholesale: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-16 md:mb-32">
          <div>
            <SectionHeading title="Partner With Us" subtitle="B2B & Wholesale" />
            <p className="text-base md:text-lg text-text-muted leading-relaxed mb-8">
              Lumière Artisan Candles are the perfect addition to high-end boutiques, lifestyle stores, and hospitality spaces. We offer competitive volume pricing and customizable private label opportunities for qualifying partners.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4 mt-1 font-bold">1</div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-primary">Volume Tiers</h4>
                  <p className="text-sm text-text-muted">Transparent pricing structures based on order quantity starting at 50 units.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4 mt-1 font-bold">2</div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-primary">Stockist Support</h4>
                  <p className="text-sm text-text-muted">Complimentary branded display materials and product storytelling collateral.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4 mt-1 font-bold">3</div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-primary">Small Batch Priority</h4>
                  <p className="text-sm text-text-muted">Early access to seasonal drops and dedicated production slots for our partners.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface p-6 md:p-10 border border-border shadow-sm artisan-card">
            <h3 className="text-2xl font-humanist mb-8 italic text-primary">Wholesale Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-text-muted">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none text-primary" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-text-muted">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none text-primary" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-text-muted">Work Email</label>
                <input type="email" className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none text-primary" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-text-muted">Company / Shop Name</label>
                <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none text-primary" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-text-muted">Estimated Annual Volume</label>
                <select className="w-full border-b border-border py-2 focus:border-accent outline-none bg-surface text-primary">
                  <option>Select Tier</option>
                  <option>50 - 200 units</option>
                  <option>201 - 500 units</option>
                  <option>500+ units</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-text-muted">Your Vision</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-border py-2 focus:border-accent outline-none resize-none text-primary" placeholder="Tell us about your shop and which collections interest you..."></textarea>
              </div>
              <Button className="w-full" variant="primary">Submit Inquiry</Button>
            </form>
          </div>
        </div>

        {/* Wholesale Table UI Shell */}
        <div className="border-t border-border pt-16 md:pt-20">
          <SectionHeading title="Tiered Pricing Guide" subtitle="For Informational Use" center />
          
          {/* Scrollable Container with Fade Mask */}
          <div className="relative group">
            <div className="overflow-x-auto scroll-hint-mask pb-4">
              <table className="w-full text-left text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-primary uppercase tracking-widest text-[10px] font-bold text-primary">
                    <th className="pb-4 px-4">Units Ordered</th>
                    <th className="pb-4 px-4">Discount</th>
                    <th className="pb-4 px-4">Production Time</th>
                    <th className="pb-4 px-4">Invoicing</th>
                  </tr>
                </thead>
                <tbody className="text-text-muted">
                  <tr className="border-b border-border hover:bg-accent/5 transition-colors">
                    <td className="py-6 px-4">50 - 100</td>
                    <td className="py-6 px-4">15% Off MSRP</td>
                    <td className="py-6 px-4">10 Business Days</td>
                    <td className="py-6 px-4 italic">Prepaid Only</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5 transition-colors">
                    <td className="py-6 px-4">101 - 300</td>
                    <td className="py-6 px-4">25% Off MSRP</td>
                    <td className="py-6 px-4">15 Business Days</td>
                    <td className="py-6 px-4 italic">Net 30 Available</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5 transition-colors">
                    <td className="py-6 px-4">301+</td>
                    <td className="py-6 px-4">Custom Quote</td>
                    <td className="py-6 px-4">Negotiated</td>
                    <td className="py-6 px-4 italic">Net 30 Available</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Visual indicator for horizontal scroll on mobile */}
            <div className="absolute right-0 top-0 bottom-12 w-8 bg-gradient-to-l from-surface to-transparent pointer-events-none md:hidden"></div>
          </div>

        </div>
      </div>
    </div>
  );
};