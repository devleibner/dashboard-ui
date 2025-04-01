
import React from 'react';
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <h1 className="text-base font-medium mx-auto">Company Account</h1>
      <div className="flex items-center gap-4">
        <div className="relative bg-white p-2 rounded-[50%]">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
            2
          </span>
        </div>
        <button className="h-10 w-10 bg-lime-400 rounded-full flex items-center justify-center">
          <span className="text-xl">+</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
