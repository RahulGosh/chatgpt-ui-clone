import { useEffect, useRef, useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const ResponseSection = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);
  const [feedback, setFeedback] = useState({}); 

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleFeedback = (messageId, isLike) => {
    setFeedback(prev => ({
      ...prev,
      [messageId]: isLike ? 'liked' : 'disliked'
    }));
  };

  return (
    <div className="w-full h-full p-4 lg:p-8 overflow-y-auto no-scrollbar">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-xl text-gray-600 dark:text-gray-400 text-center">
            Your responses will appear here
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                message.isUser
                  ? "bg-blue-50 dark:bg-gray-800"
                  : "bg-gray-50 dark:bg-gray-700"
              }`}
            >
              <div className="flex items-start">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    message.isUser ? "bg-blue-500" : "bg-green-500"
                  }`}
                >
                  <span className="text-white text-sm font-medium">
                    {message.isUser ? "Y" : "C"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {message.isUser ? "You" : "NeuroBot"}
                    </p>
                    {!message.isUser && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleFeedback(index, true)}
                          className={`p-1 rounded-full ${
                            feedback[index] === 'liked' 
                              ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                              : 'text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400'
                          } transition-colors`}
                          aria-label="Like this response"
                        >
                          <FiThumbsUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleFeedback(index, false)}
                          className={`p-1 rounded-full ${
                            feedback[index] === 'disliked'
                              ? 'text-red-500 bg-red-100 dark:bg-red-900/30'
                              : 'text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400'
                          } transition-colors`}
                          aria-label="Dislike this response"
                        >
                          <FiThumbsDown className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {message.image && (
                    <div className="mt-2 mb-3">
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 inline-block">
                        <img
                          src={message.image.url}
                          alt={message.image.name || "Uploaded image"}
                          className="max-w-[60px] max-h-[45px] object-contain"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1 truncate">
                        {message.image.name}
                      </p>
                    </div>
                  )}
                  
                  <p className="mt-1 text-gray-700 dark:text-gray-300 break-words whitespace-pre-wrap">
                    {message.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-green-500">
                  <span className="text-white text-sm font-medium">C</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                  NeuroBot
                  </p>
                  <div className="mt-2 flex space-x-2">
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
};

export default ResponseSection;