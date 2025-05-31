import React from 'react';
import { Ruler } from 'lucide-react';
import { useAvatar } from '../../context/AvatarContext';

const BodyMeasurements: React.FC = () => {
  const { bodyMeasurements, updateBodyMeasurements } = useAvatar();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof bodyMeasurements) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      updateBodyMeasurements({ [field]: value });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="chest" className="block text-sm font-medium text-gray-700">
            Chest:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="chest"
              value={bodyMeasurements.chest}
              onChange={(e) => handleChange(e, 'chest')}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="ml-2 text-gray-600">in</span>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="waist" className="block text-sm font-medium text-gray-700">
            Waist:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="waist"
              value={bodyMeasurements.waist}
              onChange={(e) => handleChange(e, 'waist')}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="ml-2 text-gray-600">in</span>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="hips" className="block text-sm font-medium text-gray-700">
            Hips:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="hips"
              value={bodyMeasurements.hips}
              onChange={(e) => handleChange(e, 'hips')}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="ml-2 text-gray-600">in</span>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="height" className="block text-sm font-medium text-gray-700">
            Height:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="height"
              value={bodyMeasurements.height}
              onChange={(e) => handleChange(e, 'height')}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="ml-2 text-gray-600">in</span>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="shoulderWidth" className="block text-sm font-medium text-gray-700">
            Shoulder Width:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="shoulderWidth"
              value={bodyMeasurements.shoulderWidth}
              onChange={(e) => handleChange(e, 'shoulderWidth')}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="ml-2 text-gray-600">in</span>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="armLength" className="block text-sm font-medium text-gray-700">
            Arm Length:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="armLength"
              value={bodyMeasurements.armLength}
              onChange={(e) => handleChange(e, 'armLength')}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="ml-2 text-gray-600">in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyMeasurements;