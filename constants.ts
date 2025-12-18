
import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Santal & Cedar',
    price: 48,
    image: 'https://picsum.photos/seed/candle1/800/1000',
    category: 'Earth',
    description: 'A rich, grounding blend of Australian sandalwood and cedarwood shavings.',
    notes: ['Sandalwood', 'Cedar', 'Cardamom', 'Violet'],
    variants: ['Regular (8oz)', 'Large (16oz)', 'Travel (4oz)']
  },
  {
    id: '2',
    name: 'Winter Spice',
    price: 52,
    image: 'https://picsum.photos/seed/candle2/800/1000',
    category: 'Seasonal',
    isSeasonal: true,
    description: 'The essence of a snowy morning. Warm cinnamon and sharp clove balanced by citrus.',
    notes: ['Cinnamon', 'Clove', 'Orange Peel', 'Spruce'],
    variants: ['Regular (8oz)']
  },
  {
    id: '3',
    name: 'Amber Bloom',
    price: 45,
    image: 'https://picsum.photos/seed/candle3/800/1000',
    category: 'Floral',
    description: 'Soft jasmine layered over a deep, golden amber base.',
    notes: ['Amber', 'Jasmine', 'Vanilla Bean', 'Musk'],
    variants: ['Regular (8oz)', 'Large (16oz)']
  },
  {
    id: '4',
    name: 'Coastal Mist',
    price: 42,
    image: 'https://picsum.photos/seed/candle4/800/1000',
    category: 'Fresh',
    description: 'Crisp sea salt and sage, reminiscent of the rugged coastline.',
    notes: ['Sea Salt', 'Sage', 'Ambrette Seed', 'Seaweed'],
    variants: ['Regular (8oz)']
  }
];

export const NAVIGATION = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'About', path: '/about' },
];

export const FOOTER_LINKS = {
  customerCare: [
    { label: 'FAQ', path: '/faq' },
    { label: 'Shipping & Returns', path: '/faq' },
    { label: 'Care Guide', path: '/faq' },
  ],
  company: [
    { label: 'Our Story', path: '/about' },
    { label: 'Contact', path: '/about' },
  ],
  social: [
    { label: 'Instagram', path: '#' },
    { label: 'Pinterest', path: '#' },
    { label: 'TikTok', path: '#' },
  ]
};
