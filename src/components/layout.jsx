import { useState, useEffect } from 'react';
import Sidebar from '../sidebar';
import Header from './header';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-white dark:bg-dark-header">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto">
          {children || (
            <div className="h-full flex items-center justify-center p-4">
              <div className="text-center max-w-md">
                <h1 className="text-2xl font-bold mb-4">What can we help you with?</h1>
                <p className="mb-6">Ask anything...</p>
                <div className="border-2 border-dashed rounded-lg p-8 mb-6">
                  <p>Drag & drop image here</p>
                  <p className="text-sm text-gray-500">Or use the attachment button above</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Layout;