'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CornerDownLeft, Bot, Github, Linkedin, Terminal, Zap } from 'lucide-react';
import { askAI } from '@/ai/flows/interview-flow';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatbotDialog = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [showCursor, setShowCursor] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isBooting, setIsBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Terminal cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Update time every second
  useEffect(() => {
    setCurrentTime(new Date()); // Set initial time on client
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Booting sequence when dialog opens
  useEffect(() => {
    if (isOpen) {
      setIsBooting(true);
      setBootProgress(0);
      setMessages([]);
      
      // Simulate booting process
      const bootMessages = [
        { text: "🤖 INITIALIZING TEVIN_AI_SYSTEM...", sender: 'bot' as const },
        { text: "🖥️  LOADING SYSTEM MODULES...", sender: 'bot' as const },
        { text: "🧠 CONNECTING TO GEMINI AI...", sender: 'bot' as const },
        { text: "📂 LOADING PROFILE DATA...", sender: 'bot' as const },
        { text: "🚀 SYSTEM BOOT COMPLETE", sender: 'bot' as const },
      ];
      
      let currentIndex = 0;
      const bootInterval = setInterval(() => {
        if (currentIndex < bootMessages.length) {
          setMessages(prev => [...prev, bootMessages[currentIndex]]);
          setBootProgress(((currentIndex + 1) / bootMessages.length) * 100);
          currentIndex++;
          scrollToBottom();
        } else {
          clearInterval(bootInterval);
          setIsBooting(false);
          
          // Add welcome message after boot
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "🤖 TEVIN_AI_SYSTEM initialized...\n\nHello! I'm Tevin Owino, a full-stack developer.\n\n💼 WHAT I CAN HELP YOU WITH:\n• My technical skills and experience\n• Project details and implementations\n• My problem-solving approaches\n• Career background and achievements\n\nFeel free to ask me anything! For example:\n'What is your experience with React?' or 'Tell me about your recent projects'",
              sender: 'bot'
            }]);
            scrollToBottom();
          }, 500);
        }
      }, 400);
      
      setInput('');
      setIsLoading(false);
      
      return () => clearInterval(bootInterval);
    }
  }, [isOpen]);

  useEffect(scrollToBottom, [messages]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        setInput('');
        setIsLoading(false);
      } else if (e.key === 'ArrowUp' && commandHistory.length > 0 && !isLoading) {
        e.preventDefault();
        const newIndex = Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex] || '');
      } else if (e.key === 'ArrowDown' && commandHistory.length > 0 && !isLoading) {
        e.preventDefault();
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex] || '');
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose, isOpen, commandHistory, historyIndex, isLoading]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading || isBooting) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(commandHistory.length + 1);

    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await askAI({ question: currentInput });

      // Typing animation: reveal character by character
      let displayed = '';
      const botMessage: Message = { text: '', sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);

      let i = 0;
      const interval = setInterval(() => {
        displayed += aiResponse[i];
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { text: displayed, sender: 'bot' };
          return updated;
        });
        i++;
        if (i >= aiResponse.length) {
          clearInterval(interval);
          setIsLoading(false);
        }
      }, 25);
    } catch (error) {
      console.error("Error asking AI:", error);
      const errorMessage: Message = {
        text: "🤖 NEURAL NETWORK ERROR: Unable to connect to Gemini AI. Please try your question again.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 200,
              damping: 25
            }}
            className="w-full max-w-4xl h-[85vh] bg-black text-green-400 font-mono text-sm rounded-lg shadow-2xl border-2 border-green-500/30 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="bg-gray-900 border-b border-green-500/30 p-2 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Terminal size={16} />
                  <span className="font-bold">tevin@ai-portfolio:~$</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Social Links */}
                <motion.a
                  href="https://github.com/tevinowino"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="text-green-400 hover:text-white transition-colors"
                >
                  <Github size={18} />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/tevinowino"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#0077b5" }}
                  whileTap={{ scale: 0.95 }}
                  className="text-green-400 hover:text-blue-500 transition-colors"
                >
                  <Linkedin size={18} />
                </motion.a>
                
                <div className="text-xs text-green-600">
                  {currentTime ? currentTime.toLocaleTimeString() : '...'}
                </div>
                
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, backgroundColor: "rgb(239 68 68)" }}
                  whileTap={{ scale: 0.95 }}
                  className="text-green-400 hover:text-white p-1 rounded transition-colors"
                >
                  <X size={16} />
                </motion.button>
              </div>
            </div>

            {/* Booting Progress Bar */}
            {isBooting && (
              <div className="w-full bg-gray-800 h-1">
                <motion.div 
                  className="h-full bg-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${bootProgress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}

            {/* Terminal Body */}
            <div className="flex-grow overflow-hidden bg-black">
              <div className="h-full overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-transparent">
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono"
                    >
                      {msg.sender === 'user' ? (
                        <div className="flex items-start gap-2">
                          <span className="text-cyan-400 flex-shrink-0">user@terminal:~$</span>
                          <span className="text-white break-all">{msg.text}</span>
                        </div>
                      ) : (
                        <div className="text-green-400 whitespace-pre-wrap leading-relaxed">
                          {msg.text.includes("INITIALIZING") || 
                           msg.text.includes("LOADING") || 
                           msg.text.includes("CONNECTING") || 
                           msg.text.includes("BOOT COMPLETE") ? (
                            <div className="font-bold text-yellow-400">{msg.text}</div>
                          ) : (
                            <>
                              <div className="font-bold text-blue-400 mb-2">🤖 Tevin's AI:</div>
                              {msg.text}
                            </>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                  
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-yellow-400"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap size={16} />
                      </motion.div>
                      <span>Processing your question...</span>
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                      >
                        ▊
                      </motion.span>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </div>
            </div>

            {/* Terminal Input */}
            <div className="border-t border-green-500/30 bg-gray-900 p-3 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 flex-shrink-0">user@terminal:~$</span>
                <div className="flex-grow flex items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={isBooting ? "System booting..." : "Ask about my skills, experience, or projects..."}
                    className="w-full bg-transparent text-white font-mono focus:outline-none"
                    disabled={isLoading || isBooting}
                    autoComplete="off"
                    spellCheck="false"
                  />
                  {showCursor && !isLoading && !isBooting && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-white ml-1"
                    >
                      ▊
                    </motion.span>
                  )}
                </div>
                
                <motion.button
                  onClick={handleSend}
                  disabled={isLoading || isBooting}
                  whileHover={{ scale: isLoading || isBooting ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-green-400 hover:text-white disabled:text-gray-600 transition-colors"
                >
                  <CornerDownLeft size={18} />
                </motion.button>
              </div>
              
              <div className="mt-2 text-xs text-green-600/70 flex items-center justify-between">
                <span>🧠 Powered by Google Gemini AI | Ask technical questions naturally</span>
                <div className="flex items-center gap-2">
                  <span>System Status:</span>
                  <motion.div
                    animate={{ opacity: isBooting ? [0.5, 1] : 1 }}
                    transition={{ duration: 1, repeat: isBooting ? Infinity : 0, repeatType: "reverse" }}
                    className={`w-2 h-2 rounded-full ${isBooting ? 'bg-yellow-500' : 'bg-green-500'}`}
                  />
                  <span>{isBooting ? 'BOOTING' : 'ONLINE'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatbotDialog;
