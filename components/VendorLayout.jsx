import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="h- flex flex-row">
      <Sidebar />
      <main className="flex-grow p-4 text-black border-dashed bg-[#F2F7FA] overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
