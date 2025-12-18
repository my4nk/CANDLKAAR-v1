
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isSeasonal?: boolean;
  description: string;
  notes: string[];
  variants?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariant?: string;
}

export interface AppState {
  isChristmasMode: boolean;
  cart: CartItem[];
}
