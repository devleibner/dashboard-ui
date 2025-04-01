
import React from 'react';
import { MessageSquare } from 'lucide-react';

const Administrators = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-medium">Administrators</h2>
        <div className="flex items-center gap-3">
          <button className="bg-black text-white px-4 py-1 text-sm rounded-md">
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Administrators;
