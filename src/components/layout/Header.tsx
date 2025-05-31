import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Palette, Users, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
        <Crown className="w-8 h-8" />
        <span>VirtuWear</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-6">
        <Link
          to="/designs"
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <Palette className="w-5 h-5" />
          <span>My Designs</span>
        </Link>
        <Link
          to="/community"
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <Users className="w-5 h-5" />
          <span>Community</span>
        </Link>
        <Link
          to="/profile"
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </Link>
      </nav>

      <div className="md:hidden flex items-center">
        <button className="text-gray-600 hover:text-indigo-600 transition-colors">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;