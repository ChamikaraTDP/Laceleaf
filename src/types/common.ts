export interface ItemImage {
  title: string;
  path: string;
}


export enum PlantSize {
  S = "Small",
  M = "Medium",
  L = "Mother Plants",
  B = "Bushes"
}

export interface ItemPrice {
  size: string;
  age: string;
  price: number;
}

export enum SpatheShape {
  heart = "heart",
  diamond = "diamond",
}

export enum LeafShape {
  heart = "heart",
  diamond = "diamond",
}

export interface PlantAnatomy {
    "spadix": {
      "color": string[],
      "length-min": number,
      "length-max": number,
      "color-old": string[],
      "length-old-min": number,
      "length-old-max": number,
      "other": string
    },
    "spathe": {
      "color": string[],
      "color-old": string[],
      "length-min": number,
      "length-max": number,
      "width-min": number,
      "width-max": number,
      "shape": string,
      "vains": string,
      "other": string
    },
    "tree": {
      "hight-min": number,
      "hight-max": number,
      "width-min": number,
      "width-max": number,
      "other": string
    },
    "leaf": {
      "shape": string,
      "length-min": number,
      "length-max": number,
      "width-min": number,
      "width-max": number,
      "vains": string,
      "other": string
    },
    "stalk": any,
    "flower-bud": any,
    "petiole": any,
    "stem": any,
    "roots": any,
    "other": any
}

export interface ShopItem {
  id: string;
  title: string;
  description: string;
  altDesc?: string;
  images: ItemImage[];
  shopImagePath: string;
  shopPrice: number;
  isInStock: boolean;
  prices: ItemPrice[];
  popular: boolean;
  category: string;
  anatomy?: PlantAnatomy;
}

export enum Locale {
  en = 'en',
  si ='si',
  ta = 'ta'
};
