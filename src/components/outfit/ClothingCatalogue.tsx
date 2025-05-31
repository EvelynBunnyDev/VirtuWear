import React from 'react';
import { useDesign } from '../../context/DesignContext';
import { ClothingItem } from '../../types';
import { useOutfit } from '../../context/OutfitContext';

const clothingItems: Record<string, ClothingItem[]> = {
  tops: [
    {
      id: 'top1',
      name: 'Top 1',
      category: 'tops',
      imageUrl: 'https://api.imvu.com/rendered_image/product-21700628?width=150&height=150',
      price: 24.99,
      description: 'A stylish top from IMVU.',
      colors: ['#000000', '#FFFFFF'],
      materials: ['Cotton', 'Polyester'],
      patternAvailable: true,
    },
    {
      id: 'top2',
      name: 'Top 2',
      category: 'tops',
      imageUrl: 'https://api.imvu.com/rendered_image/product-37818490?width=150&height=150',
      price: 26.99,
      description: 'A stylish top from IMVU.',
      colors: ['#FFFFFF', '#C19A6B'],
      materials: ['Spandex', 'Blend'],
      patternAvailable: true,
    },
    {
      id: 'top3',
      name: 'Top 3',
      category: 'tops',
      imageUrl: 'https://api.imvu.com/rendered_image/product-33192336?width=150&height=150',
      price: 22.99,
      description: 'A stylish top from IMVU.',
      colors: ['#C19A6B', '#000000'],
      materials: ['Silk', 'Cotton'],
      patternAvailable: true,
    },
    {
      id: 'top4',
      name: 'Top 4',
      category: 'tops',
      imageUrl: 'https://api.imvu.com/rendered_image/product-33187843?width=150&height=150',
      price: 21.99,
      description: 'A stylish top from IMVU.',
      colors: ['#FFFFFF', '#808080'],
      materials: ['Linen', 'Blend'],
      patternAvailable: true,
    },
    {
      id: 'top5',
      name: 'Top 5',
      category: 'tops',
      imageUrl: 'https://api.imvu.com/rendered_image/product-30683877?width=150&height=150',
      price: 23.99,
      description: 'A stylish top from IMVU.',
      colors: ['#FF0000', '#000000'],
      materials: ['Cotton', 'Lycra'],
      patternAvailable: true,
    },
    {
      id: 'top6',
      name: 'Top 6',
      category: 'tops',
      imageUrl: 'https://api.imvu.com/rendered_image/product-33636721?width=150&height=150',
      price: 27.99,
      description: 'A stylish top from IMVU.',
      colors: ['#000000', '#FFFFFF'],
      materials: ['Polyester', 'Blend'],
      patternAvailable: true,
    },
    {
      id: 'top7',
      name: 'Top 7',
      category: 'tops',
      imageUrl: 'https://api.imvu.com/rendered_image/product-7232640?width=150&height=150',
      price: 20.99,
      description: 'A stylish top from IMVU.',
      colors: ['#808080', '#000000'],
      materials: ['Cotton', 'Modal'],
      patternAvailable: true,
    },
    {
      id: 'top8',
      name: 'Top 8',
      category: 'tops',
      imageUrl: 'https://api.imvu.com/rendered_image/product-33192582?width=150&height=150',
      price: 25.99,
      description: 'A stylish top from IMVU.',
      colors: ['#C19A6B', '#FFFFFF'],
      materials: ['Satin', 'Blend'],
      patternAvailable: true,
    },
  ],
  bottoms: [
    {
      id: 'bottom1',
      name: 'Bottom 1',
      category: 'bottoms',
      imageUrl: 'https://api.imvu.com/rendered_image/product-33220038?width=150&height=150',
      price: 29.99,
      description: 'A trendy bottom piece.',
      colors: ['#000000', '#C0C0C0'],
      materials: ['Denim', 'Cotton'],
      patternAvailable: true,
    },
    {
      id: 'bottom2',
      name: 'Bottom 2',
      category: 'bottoms',
      imageUrl: 'https://api.imvu.com/rendered_image/product-33178745?width=150&height=150',
      price: 31.99,
      description: 'A trendy bottom piece.',
      colors: ['#FFFFFF', '#000000'],
      materials: ['Spandex', 'Blend'],
      patternAvailable: true,
    },
    {
      id: 'bottom3',
      name: 'Bottom 3',
      category: 'bottoms',
      imageUrl: 'https://api.imvu.com/rendered_image/product-31361903?width=150&height=150',
      price: 27.99,
      description: 'A trendy bottom piece.',
      colors: ['#808080', '#C19A6B'],
      materials: ['Cotton', 'Lycra'],
      patternAvailable: true,
    },
    {
      id: 'bottom4',
      name: 'Bottom 4',
      category: 'bottoms',
      imageUrl: 'https://api.imvu.com/rendered_image/product-32537795?width=150&height=150',
      price: 28.99,
      description: 'A trendy bottom piece.',
      colors: ['#C0C0C0', '#000000'],
      materials: ['Leather', 'Blend'],
      patternAvailable: true,
    },
  ],
  shoes: [
    {
      id: 'shoe1',
      name: 'Shoe 1',
      category: 'shoes',
      imageUrl: 'https://api.imvu.com/rendered_image/product-31342563?width=150&height=150',
      price: 49.99,
      description: 'Stylish IMVU shoes.',
      colors: ['#000000', '#C0C0C0'],
      materials: ['Leather', 'Synthetic'],
      patternAvailable: false,
    },
    {
      id: 'shoe2',
      name: 'Shoe 2',
      category: 'shoes',
      imageUrl: 'https://api.imvu.com/rendered_image/product-33698514?width=150&height=150',
      price: 54.99,
      description: 'Stylish IMVU shoes.',
      colors: ['#FFFFFF', '#808080'],
      materials: ['Canvas', 'Synthetic'],
      patternAvailable: false,
    },
    {
      id: 'shoe3',
      name: 'Shoe 3',
      category: 'shoes',
      imageUrl: 'https://api.imvu.com/rendered_image/product-33397544?width=150&height=150',
      price: 59.99,
      description: 'Stylish IMVU shoes.',
      colors: ['#A52A2A', '#000000'],
      materials: ['Rubber', 'Blend'],
      patternAvailable: false,
    },
  ],
  accessories: [
    {
      id: 'acc1',
      name: 'Necklace',
      category: 'accessories',
      imageUrl: 'https://webasset-akm.imvu.com/resized_image/dstaticfiles/tmaintain_aspect_ratio/i%2Fimvufiles%2FFTUX%2FF_necklace01.png',
      price: 19.99,
      description: 'Stylish IMVU accessory.',
      colors: ['#FFD700', '#C0C0C0'],
      materials: ['Metal', 'Gold Plated'],
      patternAvailable: false,
    },
    {
      id: 'acc2',
      name: 'Retro Sunglasses',
      category: 'accessories',
      imageUrl: 'https://webasset-akm.imvu.com/resized_image/dstaticfiles/tmaintain_aspect_ratio/i%2Fimvufiles%2FFTUX%2FF_retrosunglasses.png',
      price: 14.99,
      description: 'Stylish IMVU accessory.',
      colors: ['#000000', '#C0C0C0'],
      materials: ['Plastic', 'Metal'],
      patternAvailable: false,
    },
    {
      id: 'acc3',
      name: 'Accessory 3',
      category: 'accessories',
      imageUrl: 'https://api.imvu.com/rendered_image/product-20121623?width=150&height=150',
      price: 17.99,
      description: 'Stylish IMVU accessory.',
      colors: ['#C19A6B', '#FFFFFF'],
      materials: ['Fabric', 'Plastic'],
      patternAvailable: false,
    },
    {
      id: 'acc4',
      name: 'Accessory 4',
      category: 'accessories',
      imageUrl: 'https://api.imvu.com/rendered_image/product-12972748?width=150&height=150',
      price: 21.99,
      description: 'Stylish IMVU accessory.',
      colors: ['#FFFFFF', '#000000'],
      materials: ['Metal', 'Composite'],
      patternAvailable: false,
    },
  ],
};


const ClothingCatalogue: React.FC = () => {
  const { activeCategory } = useDesign();
  const { 
    selectedTop,
    selectedBottom,
    selectedShoes,
    selectedAccessories,
    selectedProps,
    setSelectedTop,
    setSelectedBottom,
    setSelectedShoes,
    addAccessory,
    removeAccessory,
    addProp,
    removeProp
  } = useOutfit();

  const handleSelectItem = (item: ClothingItem) => {
    switch (item.category) {
      case 'tops':
        setSelectedTop(selectedTop?.id === item.id ? null : item);
        break;
      case 'bottoms':
        setSelectedBottom(selectedBottom?.id === item.id ? null : item);
        break;
      case 'shoes':
        setSelectedShoes(selectedShoes?.id === item.id ? null : item);
        break;
      case 'accessories':
        if (selectedAccessories.find(acc => acc.id === item.id)) {
          removeAccessory(item.id);
        } else {
          addAccessory(item);
        }
        break;
      case 'props':
        if (selectedProps.find(prop => prop.id === item.id)) {
          removeProp(item.id);
        } else {
          addProp(item);
        }
        break;
    }
  };

  const isItemSelected = (item: ClothingItem) => {
    switch (item.category) {
      case 'tops':
        return selectedTop?.id === item.id;
      case 'bottoms':
        return selectedBottom?.id === item.id;
      case 'shoes':
        return selectedShoes?.id === item.id;
      case 'accessories':
        return selectedAccessories.some(acc => acc.id === item.id);
      case 'props':
        return selectedProps.some(prop => prop.id === item.id);
      default:
        return false;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
      {clothingItems[activeCategory]?.map((item) => (
        <div
          key={item.id}
          className={`aspect-square cursor-pointer transition-all rounded-lg overflow-hidden ${
            isItemSelected(item) ? 'ring-2 ring-indigo-500 rounded-lg scale-105' : 'hover:scale-105'
          }`}
          onClick={() => handleSelectItem(item)}
        >
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ClothingCatalogue;