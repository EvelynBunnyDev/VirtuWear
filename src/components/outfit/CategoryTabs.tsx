import React from 'react';
import { Shirt, WaypointsIcon as PantsIcon, Footprints, Gem, Sword } from 'lucide-react';
import { useDesign } from '../../context/DesignContext';

interface CategoryTab {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const categories: CategoryTab[] = [
  {
    id: 'tops',
    name: 'Tops',
    icon: <Shirt className="w-5 h-5" />,
  },
  {
    id: 'bottoms',
    name: 'Bottoms',
    icon: <PantsIcon className="w-5 h-5" />,
  },
  {
    id: 'shoes',
    name: 'Shoes',
    icon: <Footprints className="w-5 h-5" />,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: <Gem className="w-5 h-5" />,
  },
  {
    id: 'props',
    name: 'Props',
    icon: <Sword className="w-5 h-5" />,
  },
];

const CategoryTabs: React.FC = () => {
  const { activeCategory, setActiveCategory } = useDesign();

  return (
    <div className="border-b border-gray-200">
      <div className="flex overflow-x-auto hide-scrollbar">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`flex items-center justify-center gap-2 py-3 px-5 border-b-2 whitespace-nowrap transition-colors ${
              activeCategory === category.id
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className={activeCategory === category.id ? 'text-indigo-600' : 'text-gray-500'}>
              {category.icon}
            </span>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;