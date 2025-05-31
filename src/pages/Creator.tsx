import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import Header from '../components/layout/Header';
import BodyMeasurements from '../components/avatar/BodyMeasurements';
import AvatarTemplates from '../components/avatar/AvatarTemplates';
import BodyScanUpload from '../components/avatar/BodyScanUpload';
import AvatarCustomization from '../components/avatar/AvatarCustomization';
import ClothingCatalogue from '../components/outfit/ClothingCatalogue';
import CategoryTabs from '../components/outfit/CategoryTabs';
import DesignChat from '../components/designAssistant/DesignChat';
import PurchasePanel from '../components/purchase/PurchasePanel';
import AvatarPreview from '../components/outfit/AvatarPreview';
import { useDesign } from '../context/DesignContext';

const Creator: React.FC = () => {
  const { isDesignAssistantOpen, toggleDesignAssistant } = useDesign();
  const [activeTab, setActiveTab] = useState<'measurements' | 'avatar' | 'outfit'>('measurements');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
        {/* Left Column - Avatar/Measurements */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex border-b">
              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === 'measurements' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab('measurements')}
              >
                Measurements
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === 'avatar' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab('avatar')}
              >
                Avatar
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === 'outfit' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab('outfit')}
              >
                Outfit
              </button>
            </div>
            
            <div className="p-4">
              {activeTab === 'measurements' && (
                <div className="space-y-6">
                  <BodyScanUpload />
                  <BodyMeasurements />
                  <AvatarTemplates />
                </div>
              )}
              
              {activeTab === 'avatar' && (
                <div className="space-y-6">
                  <AvatarCustomization />
                </div>
              )}
              
              {activeTab === 'outfit' && (
                <div className="space-y-6">
                  <PurchasePanel />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Middle Column - Avatar Preview */}
        <div className="lg:col-span-5 bg-white rounded-lg shadow-md overflow-hidden">
          <AvatarPreview />
        </div>
        
        {/* Right Column - Clothing Catalog */}
        <div className="lg:col-span-4 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <CategoryTabs />
          <div className="flex-1 overflow-y-auto">
            <ClothingCatalogue />
          </div>
        </div>
      </div>
      
      {/* Design Assistant Button */}
      <button
        onClick={toggleDesignAssistant}
        className={`fixed left-6 bottom-6 z-10 p-4 rounded-full shadow-lg ${
          isDesignAssistantOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'
        } text-white transition-colors`}
        aria-label="Toggle design assistant"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
      
      {/* Design Assistant Chat */}
      <DesignChat />
    </div>
  );
};

export default Creator;