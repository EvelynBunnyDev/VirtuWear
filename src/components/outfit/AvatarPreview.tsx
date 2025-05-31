import React, { useState } from 'react';
import { RotateCw, RotateCcw } from 'lucide-react';
import { useAvatar } from '../../context/AvatarContext';
import { useOutfit } from '../../context/OutfitContext';

// Default avatar image if none is uploaded or selected
const defaultAvatarUrl = 'https://images.pexels.com/photos/6311602/pexels-photo-6311602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const AvatarPreview: React.FC = () => {
  const { avatarImage } = useAvatar();
  const { selectedTop, selectedBottom, selectedShoes, selectedAccessories, selectedProps } = useOutfit();
  const [rotation, setRotation] = useState(0);

  const handleRotateLeft = () => {
    setRotation((prev) => (prev - 90) % 360);
  };

  const handleRotateRight = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img
            src={avatarImage || defaultAvatarUrl}
            alt="Avatar Preview"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Display items that are currently selected */}
        {(selectedTop || selectedBottom || selectedShoes || selectedAccessories.length > 0 || selectedProps.length > 0) && (
          <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 rounded-md p-3 shadow-md">
            <h3 className="text-sm font-medium text-gray-800 mb-2">Current Outfit:</h3>
            <ul className="text-xs text-gray-600 space-y-1">
              {selectedTop && <li>• {selectedTop.name}</li>}
              {selectedBottom && <li>• {selectedBottom.name}</li>}
              {selectedShoes && <li>• {selectedShoes.name}</li>}
              {selectedAccessories.length > 0 && (
                <li>• Accessories: {selectedAccessories.map(a => a.name).join(', ')}</li>
              )}
              {selectedProps.length > 0 && (
                <li>• Props: {selectedProps.map(p => p.name).join(', ')}</li>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-center space-x-6 p-4">
        <button
          onClick={handleRotateLeft}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Rotate left"
        >
          <RotateCcw className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={handleRotateRight}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Rotate right"
        >
          <RotateCw className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default AvatarPreview;