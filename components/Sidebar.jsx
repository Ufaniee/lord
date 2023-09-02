import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Always open by default on big screens

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Keep the button visible on all screens */}
      <button onClick={toggleSidebar} className="">
        {/* Add your menu button icon here */}
        Menu
      </button>
      {/* Sidebar is always open on big screens */}
      <div
        className={`bg-gray p-4 text-white h-screen w-64 fixed lg:static sm:static transform transition-transform ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-8">
          <button className="block my-2">User Dashboard</button>
          <button className="block my-2">My Products</button>
          <button className="block my-2">Messages</button>
          <button className="block my-2">Settings</button>
          <button className="block my-2">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
