import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import home from '../images/home.png';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="relative">
        {/* Hero Section with Background */}
        <div className="relative h-[calc(100vh-4rem)] flex items-center">
          <img 
            src={home} 
            alt="Cosplay Designer Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Content */}
          <div className="relative container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                Design Your Perfect Cosplay Costume
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Create your digital avatar, design your dream costume, and bring your favorite characters to life with our AI-powered cosplay design platform.
              </p>
              <button
                onClick={() => navigate('/avatar')}
                className="flex items-center gap-2 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium group"
              >
                Start Creating
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">3D Body Scanning</h3>
                <p className="text-gray-600">
                  Get perfect measurements with our easy-to-use 3D body scanning technology.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">AI-Powered Design</h3>
                <p className="text-gray-600">
                  Let our AI help you create and customize your perfect costume design.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Professional Crafting</h3>
                <p className="text-gray-600">
                  Your designs are crafted by experienced cosplay artisans with premium materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;