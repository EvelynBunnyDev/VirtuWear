import React, { useState } from 'react';
import { useAvatar } from '../../context/AvatarContext';
import { HairStyle } from '../../types';

const hairStyles: HairStyle[] = [
  {
    id: 'hair1',
    name: 'Hair Style 1',
    imageUrl: 'https://api.imvu.com/rendered_image/product-32178619?width=150&height=150',
  },
  {
    id: 'hair2',
    name: 'Hair Style 2',
    imageUrl: 'https://api.imvu.com/rendered_image/product-32672942?width=150&height=150',
  },
  {
    id: 'hair3',
    name: 'Hair Style 3',
    imageUrl: 'https://api.imvu.com/rendered_image/product-32876991?width=150&height=150',
  },
  {
    id: 'hair4',
    name: 'Hair Style 4',
    imageUrl: 'https://api.imvu.com/rendered_image/product-31645200?width=150&height=150',
  },
  {
    id: 'hair5',
    name: 'Hair Style 5',
    imageUrl: 'https://api.imvu.com/rendered_image/product-31554332?width=150&height=150',
  },
  {
    id: 'hair6',
    name: 'Hair Style 6',
    imageUrl: 'https://api.imvu.com/rendered_image/product-32892693?width=150&height=150',
  },
  {
    id: 'hair7',
    name: 'Hair Style 7',
    imageUrl: 'https://api.imvu.com/rendered_image/product-32554990?width=150&height=150',
  },
];

const skinTones = [
  { id: 'skin1', color: '#F8D8C4', name: 'Light' },
  { id: 'skin2', color: '#E0C8B2', name: 'Medium Light' },
  { id: 'skin3', color: '#C19A6B', name: 'Medium' },
  { id: 'skin4', color: '#A67B5B', name: 'Medium Dark' },
  { id: 'skin5', color: '#7C543E', name: 'Dark' },
  { id: 'skin6', color: '#3C2A21', name: 'Deep' },
];

const AvatarCustomization: React.FC = () => {
  const { selectedHair, setSelectedHair, selectedSkin, setSelectedSkin } = useAvatar();
  const [activeTab, setActiveTab] = useState<'hair' | 'eyes' | 'heads' | 'skins'>('hair');

  return (
    <div>
      <div className="border-b border-gray-200 mb-4">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <button
              className={`inline-block p-4 ${
                activeTab === 'hair'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('hair')}
            >
              Hair
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block p-4 ${
                activeTab === 'eyes'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('eyes')}
            >
              Eyes
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block p-4 ${
                activeTab === 'heads'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('heads')}
            >
              Heads
            </button>
          </li>
          <li>
            <button
              className={`inline-block p-4 ${
                activeTab === 'skins'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('skins')}
            >
              Skins
            </button>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        {activeTab === 'hair' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {hairStyles.map((hair) => (
              <div
                key={hair.id}
                className={`cursor-pointer transition-all rounded-lg overflow-hidden ${
                  selectedHair?.id === hair.id ? 'ring-2 ring-indigo-500 scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedHair(hair)}
              >
                <img
                  src={hair.imageUrl}
                  alt={hair.name}
                  className="w-full h-28 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skins' && (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {skinTones.map((skin) => (
              <div
                key={skin.id}
                className={`cursor-pointer transition-all rounded-lg overflow-hidden ${
                  selectedSkin === skin.color ? 'ring-2 ring-indigo-500 scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedSkin(skin.color)}
              >
                <div
                  className="w-full h-16 rounded-lg"
                  style={{ backgroundColor: skin.color }}
                ></div>
                <p className="text-xs text-center mt-1 text-gray-600">{skin.name}</p>
              </div>
            ))}
          </div>
        )}

        {(activeTab === 'eyes' || activeTab === 'heads') && (
          <div className="flex items-center justify-center h-32 text-gray-500">
            <p>More customization options coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarCustomization;