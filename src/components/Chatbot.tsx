'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface QuickReply {
  id: string;
  text: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi there! I\'m Arca, your AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>([
    { id: 'q1', text: 'What services do you offer?' },
    { id: 'q2', text: 'How does AI help your business?' },
    { id: 'q3', text: 'How can I contact you?' },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Pre-filled answers based on user queries
    if (lowerCaseMessage.includes('service') || lowerCaseMessage.includes('offer')) {
      return "Arcatic offers a range of AI-powered services including Digital Marketing, Fashion Design, Brand Creation, Photography & Videography Ads, and Web & App Development. Each service leverages artificial intelligence to deliver innovative solutions tailored to your business needs.";
    }
    
    if (lowerCaseMessage.includes('ai') || lowerCaseMessage.includes('artificial intelligence')) {
      return "At Arcatic, we integrate AI into all our services to provide data-driven insights, automate repetitive tasks, personalize customer experiences, and predict market trends. Our AI solutions help businesses make smarter decisions and stay ahead of the competition.";
    }
    
    if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('reach') || lowerCaseMessage.includes('email')) {
      return "You can contact Arcatic through email at info@arcatic.com, by phone at +44 (0) 20 7123 4567, or by visiting our office at 42 Innovation House, Tech City, London EC1V 2PY. You can also use the contact form on our website.";
    }
    
    if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost') || lowerCaseMessage.includes('quote')) {
      return "Our pricing varies based on project scope and requirements. We offer customized solutions to fit different budgets. For a detailed quote, please contact our team through the contact form or email us at info@arcatic.com.";
    }
    
    if (lowerCaseMessage.includes('team') || lowerCaseMessage.includes('expert') || lowerCaseMessage.includes('staff')) {
      return "Our team consists of AI specialists, designers, developers, marketers, and industry experts with years of experience in their respective fields. Each team member brings unique skills and perspectives to deliver exceptional results for our clients.";
    }
    
    if (lowerCaseMessage.includes('process') || lowerCaseMessage.includes('work') || lowerCaseMessage.includes('approach')) {
      return "Our process begins with understanding your business goals, followed by research and strategy development. We then create custom solutions using our AI technologies, implement them, and continuously monitor and optimize for the best results.";
    }
    
    if (lowerCaseMessage.includes('portfolio') || lowerCaseMessage.includes('example') || lowerCaseMessage.includes('work')) {
      return "You can view our portfolio on our website showcasing successful projects across various industries. These include brand redesigns, e-commerce websites, product campaigns, and fashion collections. Each case study demonstrates our innovative approach and the results we've achieved.";
    }
    
    if (lowerCaseMessage.includes('location') || lowerCaseMessage.includes('office') || lowerCaseMessage.includes('address')) {
      return "Our main office is located at 42 Innovation House, Tech City, London EC1V 2PY, United Kingdom. We also work remotely with clients worldwide.";
    }
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
      return "Hello! How can I assist you with Arcatic's services today?";
    }
    
    if (lowerCaseMessage.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    }

    if (lowerCaseMessage.includes('privacy') || lowerCaseMessage.includes('data')) {
      return "At Arcatic, we take your privacy seriously. We collect only necessary information and use it to provide and improve our services. For detailed information, please visit our Privacy Policy page.";
    }

    if (lowerCaseMessage.includes('terms') || lowerCaseMessage.includes('conditions')) {
      return "Our Terms of Service outline the rules for using Arcatic's services. They cover important topics like intellectual property rights, limitations of liability, and governing law. You can find the full terms on our Terms of Service page.";
    }
    
    // Default response
    return "Thank you for your message. I'd be happy to help with that. Could you provide more details so I can give you the most relevant information?";
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply: QuickReply) => {
    setInputValue(reply.text);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply.text,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsTyping(true);
    
    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(reply.text),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 1000);
    
    // Remove the used quick reply
    setQuickReplies((prevReplies) => prevReplies.filter((r) => r.id !== reply.id));
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-white shadow-xl flex items-center justify-center hover:bg-primary-dark transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-primary/30"
        aria-label="Chat with Arca"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center transition-all duration-300 scale-100 group-hover:scale-110">
              1
            </span>
          </>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-2 md:right-6 z-50 w-[95vw] max-w-sm md:max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        } flex flex-col`}
        style={{ maxHeight: '80vh', minHeight: '350px' }}
      >
        {/* Chat Header */}
        <div className="bg-primary text-white p-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">Arca</h3>
              <p className="text-xs text-white/80">AI Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-xs text-white/80">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-2 py-4 md:px-4 bg-gray-50/80" style={{ minHeight: '200px' }}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2 md:px-5 md:py-3 text-base md:text-sm ${
                  message.sender === 'user'
                    ? 'bg-primary text-white rounded-tr-md shadow-md'
                    : 'bg-white/90 shadow border border-gray-100 rounded-tl-md'
                }`}
                style={{ wordBreak: 'break-word' }}
              >
                <p>{message.text}</p>
                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>{formatTime(message.timestamp)}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="mb-3 flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-4 py-2 bg-white/90 shadow border border-gray-100 rounded-tl-md">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {quickReplies.length > 0 && (
          <div className="px-3 py-2 bg-white/90 border-t border-gray-100 flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply.id}
                onClick={() => handleQuickReply(reply)}
                className="text-xs md:text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {reply.text}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white/90 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 md:py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/80 text-sm md:text-base"
              autoComplete="off"
              maxLength={300}
            />
            <button
              type="submit"
              className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="bg-gray-50/80 px-3 py-2 text-center border-t border-gray-200 rounded-b-2xl">
          <p className="text-xs text-gray-500">
            Powered by <span className="text-primary font-medium">Arcatic AI</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Chatbot; 