import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Smartphone, User, RotateCw, Check } from 'lucide-react';
import Header from '../components/layout/Header';
import BodyScanUpload from '../components/avatar/BodyScanUpload';
import { useAvatar } from '../context/AvatarContext';
import nakedLady from '../images/naked_lady.jpg';

const scanningSteps = [
  {
    icon: Smartphone,
    title: "Download Scanner App",
    description: "Download our recommended 3D scanning app on your smartphone. We support both iOS and Android devices.",
    tip: "Make sure you have good lighting and enough space to move around."
  },
  {
    icon: User,
    title: "Prepare for Scanning",
    description: "Wear form-fitting clothes and stand in a well-lit area. Remove loose clothing or accessories.",
    tip: "Avoid wearing baggy clothes as they can affect measurement accuracy."
  },
  {
    icon: RotateCw,
    title: "Perform the Scan",
    description: "Follow the app's instructions to scan your body. You'll need to rotate slowly in place.",
    tip: "Keep your arms slightly away from your body and stay as still as possible while rotating."
  },
  {
    icon: Check,
    title: "Upload Your Scan",
    description: "Once complete, save your scan and upload it below. We'll process it to create your digital avatar.",
    tip: "The scan processing usually takes less than a minute."
  }
];

const AvatarCreator: React.FC = () => {
  const navigate = useNavigate();
  const { isBodyScanUploaded, avatarImage, initializeDefaultAvatar, setAvatarImage } = useAvatar();

  const handleContinue = () => {
    navigate('/design');
  };

  const handlePreviewClick = () => {
    if (!avatarImage) {
      setAvatarImage(nakedLady);
      initializeDefaultAvatar();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create Your Avatar</h1>
            <button
              onClick={handleContinue}
              disabled={!isBodyScanUploaded}
              className={`flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium transition-all ${
                isBodyScanUploaded
                  ? 'bg-indigo-600 hover:bg-indigo-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Continue to Outfit Design
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Scanning Instructions */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">How to Create Your 3D Avatar</h2>
                <div className="space-y-8">
                  {scanningSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-indigo-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{step.description}</p>
                        <p className="text-sm text-indigo-600 bg-indigo-50 p-2 rounded-md">
                          💡 Tip: {step.tip}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <BodyScanUpload />
                </div>
              </div>
            </div>
            
            {/* Right Column - Preview */}
            <div className="lg:col-span-7">
              <div className="sticky top-6">
                <div 
                  className="bg-white rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg"
                  onClick={handlePreviewClick}
                >
                  {!avatarImage ? (
                    <div className="flex items-center justify-center h-[calc(100vh-12rem)] text-gray-500">
                      Click here to load default avatar model
                    </div>
                  ) : (
                    <img 
                      src={avatarImage}
                      alt="Avatar Preview"
                      className="w-full h-[calc(100vh-12rem)] object-contain rounded-lg"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCreator;