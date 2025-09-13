'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CornerDownLeft, Bot } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatbotDialog = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setMessages([
        { text: "Hello! I'm an AI assistant representing Tevin Owino. Feel free to ask me anything about his skills, projects, or experience. For example, 'What is his experience with Next.js?'", sender: 'bot' },
      ]);
    }
  }, [isOpen]);

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = { text: "I'm still under development, but soon I'll be able to answer your questions about Tevin!", sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl h-[80vh] bg-[#1a1b26] text-[#a9b1d6] font-mono rounded-lg shadow-2xl border border-[#414868] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-[#414868] flex-shrink-0">
              <div className="flex items-center gap-2">
                <Bot size={20} className="text-[#7aa2f7]" />
                <h2 className="text-lg font-bold text-white">AI Mini-Interview</h2>
              </div>
              <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  <button onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full focus:outline-none"></button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-[#292e42] text-white' : 'bg-[#222436]'}`}>
                       {msg.sender === 'bot' && <div className="font-bold text-[#7aa2f7] mb-1">Tevin's AI</div>}
                       <p className="whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                     <div className="p-3 rounded-lg bg-[#222436]">
                        <div className="font-bold text-[#7aa2f7] mb-1">Tevin's AI</div>
                        <div className="flex items-center gap-2">
                           <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-0"></span>
                           <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></span>
                           <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></span>
                        </div>
                     </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-[#414868] flex-shrink-0">
              <div className="flex items-center bg-[#292e42] rounded-md px-3">
                <span className="text-green-400 mr-2">❯</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask a question..."
                  className="w-full bg-transparent text-white focus:outline-none py-2"
                  disabled={isLoading}
                />
                <button onClick={handleSend} disabled={isLoading} className="ml-2 text-[#7aa2f7] hover:text-white disabled:text-gray-500">
                  <CornerDownLeft size={20} />
                </button>
              </div>
              <p className="text-xs text-center mt-2 text-[#565f89]">Powered by AI. Responses are generated based on Tevin's portfolio.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatbotDialog;
