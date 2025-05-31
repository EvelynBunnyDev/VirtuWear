import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ClothingItem, CartItem } from '../types';

interface OutfitContextType {
  selectedTop: ClothingItem | null;
  setSelectedTop: (top: ClothingItem | null) => void;
  selectedBottom: ClothingItem | null;
  setSelectedBottom: (bottom: ClothingItem | null) => void;
  selectedShoes: ClothingItem | null;
  setSelectedShoes: (shoes: ClothingItem | null) => void;
  selectedAccessories: ClothingItem[];
  addAccessory: (accessory: ClothingItem) => void;
  removeAccessory: (accessoryId: string) => void;
  selectedProps: ClothingItem[];
  addProp: (prop: ClothingItem) => void;
  removeProp: (propId: string) => void;
  cartItems: CartItem[];
  calculateTotal: () => number;
}

const OutfitContext = createContext<OutfitContextType | undefined>(undefined);

export const OutfitProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedTop, setSelectedTop] = useState<ClothingItem | null>(null);
  const [selectedBottom, setSelectedBottom] = useState<ClothingItem | null>(null);
  const [selectedShoes, setSelectedShoes] = useState<ClothingItem | null>(null);
  const [selectedAccessories, setSelectedAccessories] = useState<ClothingItem[]>([]);
  const [selectedProps, setSelectedProps] = useState<ClothingItem[]>([]);

  const addAccessory = (accessory: ClothingItem) => {
    setSelectedAccessories((prev) => [...prev, accessory]);
  };

  const removeAccessory = (accessoryId: string) => {
    setSelectedAccessories((prev) => prev.filter((item) => item.id !== accessoryId));
  };

  const addProp = (prop: ClothingItem) => {
    setSelectedProps((prev) => [...prev, prop]);
  };

  const removeProp = (propId: string) => {
    setSelectedProps((prev) => prev.filter((item) => item.id !== propId));
  };

  // Convert selected items to cart items
  const cartItems: CartItem[] = [
    ...(selectedTop ? [{ ...selectedTop, quantity: 1, selectedColor: selectedTop.colors[0], selectedMaterial: selectedTop.materials[0] }] : []),
    ...(selectedBottom ? [{ ...selectedBottom, quantity: 1, selectedColor: selectedBottom.colors[0], selectedMaterial: selectedBottom.materials[0] }] : []),
    ...(selectedShoes ? [{ ...selectedShoes, quantity: 1, selectedColor: selectedShoes.colors[0], selectedMaterial: selectedShoes.materials[0] }] : []),
    ...selectedAccessories.map(item => ({ ...item, quantity: 1, selectedColor: item.colors[0], selectedMaterial: item.materials[0] })),
    ...selectedProps.map(item => ({ ...item, quantity: 1, selectedColor: item.colors[0], selectedMaterial: item.materials[0] }))
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <OutfitContext.Provider
      value={{
        selectedTop,
        setSelectedTop,
        selectedBottom,
        setSelectedBottom,
        selectedShoes,
        setSelectedShoes,
        selectedAccessories,
        addAccessory,
        removeAccessory,
        selectedProps,
        addProp,
        removeProp,
        cartItems,
        calculateTotal,
      }}
    >
      {children}
    </OutfitContext.Provider>
  );
};

export const useOutfit = (): OutfitContextType => {
  const context = useContext(OutfitContext);
  if (context === undefined) {
    throw new Error('useOutfit must be used within an OutfitProvider');
  }
  return context;
};