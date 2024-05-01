export interface ItemImage {
  title: string;
  path: string;
}

export interface ItemPrice {
  size: string;
  age: string;
  price: number;
}

export interface ShopItem {
  id: string;
  title: string;
  description: string;
  images: ItemImage[];
  shopImagePath: string;
  shopPrice: number;
  isInStock: boolean;
  prices: ItemPrice[];
  popular: boolean;
  category: string;
}

export enum Locale {
  en = 'en',
  si ='si',
  ta = 'ta'
};
