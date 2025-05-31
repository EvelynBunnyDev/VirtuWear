import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Message } from '../types';

interface DesignContextType {
  messages: Message[];
  addMessage: (content: string, sender: 'user' | 'assistant') => void;
  clearMessages: () => void;
  isDesignAssistantOpen: boolean;
  toggleDesignAssistant: () => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export const DesignProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hey there! Ready to design your next cosplay?',
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [isDesignAssistantOpen, setIsDesignAssistantOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('tops');

  const addMessage = (content: string, sender: 'user' | 'assistant') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const clearMessages = () => {
    setMessages([
      {
        id: '1',
        content: 'Hey there! Ready to design your next cosplay?',
        sender: 'assistant',
        timestamp: new Date(),
      },
    ]);
  };

  const toggleDesignAssistant = () => {
    setIsDesignAssistantOpen((prev) => !prev);
  };

  return (
    <DesignContext.Provider
      value={{
        messages,
        addMessage,
        clearMessages,
        isDesignAssistantOpen,
        toggleDesignAssistant,
        activeCategory,
        setActiveCategory,
      }}
    >
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = (): DesignContextType => {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
};