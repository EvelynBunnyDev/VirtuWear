import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BodyMeasurements, HairStyle } from '../types';
import nakedLady from '../images/naked_lady.jpg';

interface AvatarContextType {
  bodyMeasurements: BodyMeasurements;
  updateBodyMeasurements: (measurements: Partial<BodyMeasurements>) => void;
  selectedHair: HairStyle | null;
  setSelectedHair: (hair: HairStyle | null) => void;
  selectedSkin: string;
  setSelectedSkin: (skin: string) => void;
  avatarImage: string | null;
  setAvatarImage: (image: string | null) => void;
  isBodyScanUploaded: boolean;
  setIsBodyScanUploaded: (isUploaded: boolean) => void;
  initializeDefaultAvatar: () => void;
}

const defaultMeasurements: BodyMeasurements = {
  chest: 36,
  waist: 28,
  hips: 38,
  height: 66,
  shoulderWidth: 16,
  armLength: 24,
};

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

export const AvatarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bodyMeasurements, setBodyMeasurements] = useState<BodyMeasurements>(defaultMeasurements);
  const [selectedHair, setSelectedHair] = useState<HairStyle | null>(null);
  const [selectedSkin, setSelectedSkin] = useState<string>('#E0C8B2');
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  const [isBodyScanUploaded, setIsBodyScanUploaded] = useState<boolean>(false);

  const updateBodyMeasurements = (measurements: Partial<BodyMeasurements>) => {
    setBodyMeasurements((prev) => ({ ...prev, ...measurements }));
  };

  const initializeDefaultAvatar = () => {
    setAvatarImage(nakedLady);
    setIsBodyScanUploaded(true);
  };

  return (
    <AvatarContext.Provider
      value={{
        bodyMeasurements,
        updateBodyMeasurements,
        selectedHair,
        setSelectedHair,
        selectedSkin,
        setSelectedSkin,
        avatarImage,
        setAvatarImage,
        isBodyScanUploaded,
        setIsBodyScanUploaded,
        initializeDefaultAvatar,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = (): AvatarContextType => {
  const context = useContext(AvatarContext);
  if (context === undefined) {
    throw new Error('useAvatar must be used within an AvatarProvider');
  }
  return context;
};