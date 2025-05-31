import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { useDesign } from '../../context/DesignContext';

interface DesignChatProps {
  onSubmit: (prompt: string) => void;
}

const suggestedPrompts = [
  "I want a steampunk-inspired Victorian dress with brass gears and copper accents",
  "Design a magical girl costume with iridescent fabrics and crystal details",
  "Create a cyberpunk warrior outfit with LED lighting and metallic armor pieces",
  "I need a fantasy elf ranger costume with natural materials and leaf patterns",
  "Design a futuristic space explorer suit with holographic elements",
];

const DesignChat: React.FC<DesignChatProps> = ({ onSubmit }) => {
  const { messages, addMessage } = useDesign();
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent | string) => {
    if (typeof e !== 'string') {
      e.preventDefault();
    }
    
    const message = typeof e === 'string' ? e : inputValue;
    
    if (message.trim()) {
      addMessage(message, 'user');
      setInputValue('');
      setShowSuggestions(false);
      
      // Add AI response
      addMessage("I'll generate some unique costume designs based on your description. This will take a moment...", 'assistant');
      
      // Trigger design generation
      onSubmit(message);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="p-4 bg-white border-b">
        <h2 className="text-lg font-semibold text-gray-900">Design Your Costume</h2>
        <p className="text-sm text-gray-600 mt-1">
          Describe your dream costume, and I'll generate unique designs for you.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[85%] p-3 rounded-lg ${
              message.sender === 'assistant'
                ? 'bg-white text-gray-800 self-start rounded-bl-none shadow-sm'
                : 'bg-indigo-600 text-white self-end ml-auto rounded-br-none'
            }`}
          >
            {message.sender === 'assistant' && (
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-medium text-indigo-600">Design Assistant</span>
              </div>
            )}
            <p className="text-sm">{message.content}</p>
          </div>
        ))}
        
        {showSuggestions && (
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm font-medium text-gray-800 mb-3">Try these example prompts:</p>
            <div className="flex flex-col gap-2">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleSubmit(prompt)}
                  className="text-left text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe your dream costume..."
            className="flex-1 p-2 pl-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default DesignChat;