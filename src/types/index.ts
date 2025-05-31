export interface BodyMeasurements {
  chest: number;
  waist: number;
  hips: number;
  height: number;
  shoulderWidth: number;
  armLength: number;
}

export interface AvatarTemplate {
  id: string;
  name: string;
  imageUrl: string;
  measurements: BodyMeasurements;
}

export interface ClothingItem {
  id: string;
  name: string;
  category: 'tops' | 'bottoms' | 'shoes' | 'accessories' | 'props';
  imageUrl: string;
  price: number;
  description: string;
  colors: string[];
  materials: string[];
  patternAvailable: boolean;
  tokenCost: number;
}

export interface CartItem extends ClothingItem {
  quantity: number;
  selectedColor: string;
  selectedMaterial: string;
}

export interface HairStyle {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface TokenBalance {
  available: number;
  used: number;
}

export interface TokenTransaction {
  id: string;
  amount: number;
  type: 'purchase' | 'use';
  description: string;
  timestamp: Date;
}