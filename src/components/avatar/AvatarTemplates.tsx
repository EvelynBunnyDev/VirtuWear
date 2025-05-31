import React from 'react';
import { useAvatar } from '../../context/AvatarContext';
import { AvatarTemplate } from '../../types';

const templates: AvatarTemplate[] = [
  {
    id: '1',
    name: 'June 65-36-29-39',
    imageUrl: 'https://tukaweb.s3.amazonaws.com/uploads/three_d_model/thumbnail/45/Lucy_68-36-29-40_a_FRONT.png?X-Amz-Expires=600&X-Amz-Date=20250525T193021Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWUPVENVJQHKHPHZA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=1d907a1bc5131360ea87870b2c8b81b141828eef2c69916bed18f8627e6a8462',
    measurements: {
      chest: 36,
      waist: 29,
      hips: 39,
      height: 65,
      shoulderWidth: 16,
      armLength: 25,
    },
  },
  {
    id: '2',
    name: 'Lalya 70-36-28-39',
    imageUrl: 'https://tukaweb.s3.amazonaws.com/uploads/three_d_model/thumbnail/32/Layla_69-35-27-39_a_FRONT.png?X-Amz-Expires=600&X-Amz-Date=20250525T193043Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWUPVENVJQHKHPHZA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=2f2c987818ca988e37e1625446a41bf0306934961d27622d9a539acabaeb4a26',
    measurements: {
      chest: 36,
      waist: 28,
      hips: 39,
      height: 70,
      shoulderWidth: 16,
      armLength: 26,
    },
  },
  {
    id: '3',
    name: 'Jamie 69-35-27-39',
    imageUrl: 'https://tukaweb.s3.amazonaws.com/uploads/three_d_model/thumbnail/51/Mike_70-40-41-53_a_FRONT.png?X-Amz-Expires=600&X-Amz-Date=20250525T192907Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWUPVENVJQHKHPHZA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=b51f71196b6e47844a9cc5aaddb4d9dc1e9327ddc42620e1a837321359dcb5a6',
    measurements: {
      chest: 35,
      waist: 27,
      hips: 39,
      height: 69,
      shoulderWidth: 15,
      armLength: 24,
    },
  }
];

const AvatarTemplates: React.FC = () => {
  const { updateBodyMeasurements, setAvatarImage } = useAvatar();

  const handleSelectTemplate = (template: AvatarTemplate) => {
    updateBodyMeasurements(template.measurements);
    setAvatarImage(template.imageUrl);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {templates.map((template) => (
        <div
          key={template.id}
          className="cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => handleSelectTemplate(template)}
        >
          <img
            src={template.imageUrl}
            alt={template.name}
            className="w-full h-36 object-cover object-top rounded-md border-2 border-transparent hover:border-indigo-500"
          />
          <p className="text-xs text-center mt-1 text-gray-600">{template.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AvatarTemplates;