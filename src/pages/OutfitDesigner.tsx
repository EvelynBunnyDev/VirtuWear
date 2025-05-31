import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import DesignChat from '../components/designAssistant/DesignChat';
import { useDesign } from '../context/DesignContext';
import { useAvatar } from '../context/AvatarContext';
import { ShoppingBag, Maximize2, Minimize2 } from 'lucide-react';

// Import images
import cool from '../images/cool.png';
import glinda from '../images/glinda.png';
import hefu from '../images/hefu.png';
import moonlight from '../images/moonlight.png';
import witch from '../images/witch.png';
import red from '../images/red.png';
import royal from '../images/royal.png';
import ww from '../images/ww.png';
import lady from '../images/lady.png';
import royalLady from '../images/royal_lady.png';

interface CostumeDesign {
  id: string;
  imageUrl: string;
  description: string;
  price: number;
  previewImage?: string;
}

// Pre-generated high-quality costume designs
const preGeneratedDesigns: CostumeDesign[] = [
  {
    id: 'pre-1',
    imageUrl: cool,
    description: 'Yomorio Sexy Kimono Lingerie Costume Japanese Anime Cosplay - Elegant black silk with intricate floral patterns and obi sash',
    price: 399.99
  },
  {
    id: 'pre-2',
    imageUrl: glinda,
    description: 'Cyberpunk Lucy Cosplay Costume Bodysuit Set - Complete with neon accents, tactical harness, and chrome details',
    price: 479.99
  },
  {
    id: 'pre-3',
    imageUrl: hefu,
    description: 'Scarlet Witch Full Costume Set - Includes signature headpiece, bodysuit, and flowing cape with detailed embroidery',
    price: 499.99
  },
  {
    id: 'pre-4',
    imageUrl: moonlight,
    description: 'FGO Ruler Joan Of Arc Black Jeanne Cosplay Costume - Complete armor set with cape and battle flag',
    price: 459.99
  },
  {
    id: 'pre-5',
    imageUrl: witch,
    description: 'Queen Padme Amidala Ceremonial Gown - Intricately detailed throne room dress with headdress and jewelry',
    price: 489.99
  },
  {
    id: 'pre-6',
    imageUrl: red,
    description: '2B NieR: Automata Full Costume Set - Including dress, boots, gloves, and signature blindfold',
    price: 449.99,
    previewImage: lady
  },
  {
    id: 'pre-7',
    imageUrl: royal,
    description: 'Royal Lady Elegant Ball Gown - Luxurious satin and lace with crystal embellishments and cathedral train',
    price: 899.99,
    previewImage: royalLady
  },
  {
    id: 'pre-8',
    imageUrl: ww,
    description: 'Wonder Woman Warrior Costume - Complete with armor, tiara, gauntlets, and lasso',
    price: 599.99
  }
];

const OutfitDesigner: React.FC = () => {
  const navigate = useNavigate();
  const { avatarImage } = useAvatar();
  const [designs, setDesigns] = useState<CostumeDesign[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [expandedPreview, setExpandedPreview] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState<CostumeDesign | null>(null);

  const handleGenerateDesigns = (prompt: string) => {
    setIsGenerating(true);
    setTimeout(() => {
      setDesigns(preGeneratedDesigns);
      setIsGenerating(false);
    }, 3000);
  };

  const handleSelectDesign = (design: CostumeDesign) => {
    if (design.imageUrl === red || design.imageUrl === royal) {
      setSelectedOutfit(design);
      navigate('/purchase', { state: { design } });
    } else {
      alert('This design is not available for purchase in the demo. Please select either the 2B NieR: Automata costume or the Royal Lady Ball Gown.');
    }
  };

  // If there's no avatar image, redirect to avatar creation
  React.useEffect(() => {
    if (!avatarImage) {
      navigate('/avatar');
    }
  }, [avatarImage, navigate]);

  if (!avatarImage) {
    return null; // Return null while redirecting
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
          {/* Left Column - AI Chat */}
          <div className={`lg:col-span-3 bg-white rounded-lg shadow-md overflow-hidden flex flex-col ${expandedPreview ? 'lg:col-span-2' : ''}`}>
            <DesignChat onSubmit={handleGenerateDesigns} />
          </div>
          
          {/* Middle Column - Preview */}
          <div className={`lg:col-span-4 ${expandedPreview ? 'lg:col-span-5' : ''}`}>
            <div className="sticky top-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-white border-b flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Preview</h2>
                  <button
                    onClick={() => setExpandedPreview(!expandedPreview)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {expandedPreview ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                  </button>
                </div>
                <div className="h-[calc(100vh-12rem)]">
                  <img 
                    src={selectedOutfit?.previewImage || avatarImage}
                    alt="Avatar Preview"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Design Previews */}
          <div className={`lg:col-span-5 flex flex-col gap-6 ${expandedPreview ? 'lg:col-span-5' : ''}`}>
            {isGenerating ? (
              <div className="flex-1 bg-white rounded-lg shadow-md p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                  <p className="text-lg text-gray-600">Generating your unique costume designs...</p>
                  <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
                </div>
              </div>
            ) : designs.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 auto-rows-max overflow-y-auto max-h-full">
                {designs.map((design) => (
                  <div
                    key={design.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-[1.02] transition-transform"
                    onClick={() => design.previewImage && setSelectedOutfit(design)}
                  >
                    <div className="aspect-[3/4] relative">
                      <img
                        src={design.imageUrl}
                        alt={design.description}
                        className="w-full h-full object-contain bg-gray-50"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white font-medium text-lg">${design.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm line-clamp-2">{design.description}</p>
                      <button
                        className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectDesign(design);
                        }}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Select Design</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 bg-white rounded-lg shadow-md p-8 flex items-center justify-center">
                <div className="text-center max-w-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Design Your Perfect Costume</h2>
                  <p className="text-gray-600">
                    Describe your dream costume in the chat, and our AI will generate unique designs based on your description while maintaining perfect fit with your 3D model.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitDesigner;