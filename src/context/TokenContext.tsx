import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TokenBalance, TokenTransaction } from '../types';

interface TokenContextType {
  balance: TokenBalance;
  transactions: TokenTransaction[];
  addTokens: (amount: number) => void;
  useTokens: (amount: number, description: string) => boolean;
  canUseTokens: (amount: number) => boolean;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const TokenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState<TokenBalance>({
    available: 25, // Start with 25 free tokens
    used: 0,
  });
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]);

  const addTokens = (amount: number) => {
    setBalance(prev => ({
      ...prev,
      available: prev.available + amount,
    }));
    
    setTransactions(prev => [...prev, {
      id: Date.now().toString(),
      amount,
      type: 'purchase',
      description: `Purchased ${amount} tokens`,
      timestamp: new Date(),
    }]);
  };

  const useTokens = (amount: number, description: string): boolean => {
    if (balance.available >= amount) {
      setBalance(prev => ({
        available: prev.available - amount,
        used: prev.used + amount,
      }));
      
      setTransactions(prev => [...prev, {
        id: Date.now().toString(),
        amount: -amount,
        type: 'use',
        description,
        timestamp: new Date(),
      }]);
      
      return true;
    }
    return false;
  };

  const canUseTokens = (amount: number): boolean => {
    return balance.available >= amount;
  };

  return (
    <TokenContext.Provider
      value={{
        balance,
        transactions,
        addTokens,
        useTokens,
        canUseTokens,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useTokens = (): TokenContextType => {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error('useTokens must be used within a TokenProvider');
  }
  return context;
};