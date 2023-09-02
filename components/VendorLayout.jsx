// components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex py-4">
      <Sidebar />
      <main className="flex-grow pl-4">{children}</main>
    </div>
  );
};

export default Layout;
