import React, { useState } from 'react';
import { ShoppingCart, Download } from 'lucide-react';
import { useOutfit } from '../../context/OutfitContext';

const PurchasePanel: React.FC = () => {
  const { calculateTotal, cartItems } = useOutfit();
  const [showCart, setShowCart] = useState(false);

  const handleGeneratePattern = () => {
    alert('Pattern generation started! Your pattern will be ready to download shortly.');
  };

  const handlePurchase = () => {
    alert('Thank you for your purchase! Your order is being processed.');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Make Outfit Yours</h2>
        <div className="space-y-4">
          <button
            onClick={handlePurchase}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Purchase Design</span>
          </button>
          <p className="text-xs text-gray-600 text-center">Includes custom fitting and all materials</p>
          
          <button
            onClick={handleGeneratePattern}
            className="w-full flex items-center justify-center gap-2 bg-white text-indigo-600 border border-indigo-600 py-3 px-4 rounded-md hover:bg-indigo-50 transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Generate Pattern</span>
          </button>
          <p className="text-xs text-gray-600 text-center">Creates a downloadable pattern based on your design and measurements</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-gray-800">Order Summary</h3>
          <button
            className="text-indigo-600 text-sm hover:underline"
            onClick={() => setShowCart(!showCart)}
          >
            {showCart ? 'Hide details' : 'Show details'}
          </button>
        </div>

        {showCart && (
          <div className="mb-4 space-y-2">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.name} ({item.quantity})
                  </span>
                  <span className="text-gray-800 font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No items added yet</p>
            )}
          </div>
        )}

        <div className="flex justify-between items-center pt-2 border-t">
          <span className="font-medium">Total:</span>
          <span className="text-lg font-bold text-indigo-600">${calculateTotal().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PurchasePanel;