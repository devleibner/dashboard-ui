
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

interface SidebarItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  active = false,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "px-6 py-3 text-sm font-medium cursor-pointer",
        active ? "text-dashboard-accent" : "text-dashboard-muted"
      )}
    >
      {label}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col py-8 relative", className)}>
      <div className="flex items-center px-6 mb-12">
        <div className="h-8 w-8 bg-black rounded-sm text-white flex items-center justify-center font-semibold">
          S
        </div>
        <span className="ml-2 font-semibold">Signify</span>
      </div>
      
      <div className="space-y-1">
        <SidebarItem label="Overview" active />
        <SidebarItem label="Analytics" />
      </div>
      
      <div className="px-6 fixed bottom-0 left-0 w-64 bg-white py-4">
        <div className="border-t border-gray-200 pt-4">
          <div className="text-xs text-dashboard-muted mb-1">Monthly total</div>
          <div className="text-xl font-semibold">€3,903.00</div>
          <div className="text-xs text-dashboard-muted">EUR</div>
          
          <div className="flex mt-3 text-xs">
            <div className="border-t-2 border-dashboard-accent flex-1 text-left pt-1">Next Payment</div>
            <div className="border-t border-gray-200 flex-1 text-right pt-1 text-dashboard-muted">Jun 05</div>
          </div>
          
          <div className="flex items-center mt-4">
            <div className="h-7 w-7 bg-green-200 rounded-full mr-2 flex items-center justify-center text-sm">
              JD
            </div>
            <div>
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-dashboard-muted">john.doe@company.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
