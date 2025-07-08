'use client';

import dynamic from 'next/dynamic';

const Chatbot = dynamic(() => import('@/components/Chatbot'), { ssr: false });

const ChatbotWrapper = () => {
  return <Chatbot />;
};

export default ChatbotWrapper;
