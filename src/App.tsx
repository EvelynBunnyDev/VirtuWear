import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AvatarCreator from './pages/AvatarCreator';
import OutfitDesigner from './pages/OutfitDesigner';
import PurchaseSummary from './pages/PurchaseSummary';
import { AvatarProvider } from './context/AvatarContext';
import { OutfitProvider } from './context/OutfitContext';
import { DesignProvider } from './context/DesignContext';
import { TokenProvider } from './context/TokenContext';

function App() {
  return (
    <Router>
      <TokenProvider>
        <AvatarProvider>
          <OutfitProvider>
            <DesignProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/avatar" element={<AvatarCreator />} />
                <Route path="/design" element={<OutfitDesigner />} />
                <Route path="/purchase" element={<PurchaseSummary />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </DesignProvider>
          </OutfitProvider>
        </AvatarProvider>
      </TokenProvider>
    </Router>
  );
}

export default App;