import { useState } from 'react';
import ResponseSection from "../components/homePage/responseSection";
import InputSection from "../components/homePage/inputSection";

const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (text, imageData = null) => {
    const newMessages = [...messages, { text, image: imageData, isUser: true }];
    setMessages(newMessages);
    setIsLoading(true);
    
    setTimeout(() => {
      setMessages([...newMessages, { 
        text: imageData 
          ? `I received your image "${imageData.name}" with your message: "${text}"`
          : `Here's a response to your query about ${text}. This is a simulated response from the AI assistant.`, 
        isUser: false 
      }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col lg:flex-row bg-white dark:bg-dark-header transition-colors duration-200">
      <div className="w-full lg:w-1/2 flex-1 order-1 lg:order-2">
        <ResponseSection messages={messages} isLoading={isLoading} />
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-r border-gray-200 dark:border-gray-700 p-4 order-2 lg:order-1">
        <InputSection onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default HomePage;