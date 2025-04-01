
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import CompanyDetails from './CompanyDetails';
import VerificationStatus from './VerificationStatus';
import WhitelistedDomains from './WhitelistedDomains';
import Administrators from './Administrators';
import { MessageSquare, Plus } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-64 border-r" />
      <div className="flex-1 overflow-auto">
        <Header />
        <div className="p-8">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-4 flex items-center">
              <Plus size={24} className="text-black" />
            </div>
            <CompanyDetails 
              companyName="Signify"
              website="www.signify.com"
              country="Denmark"
              city="Copenhagen V"
              street="Vesterbrogade 48"
              postal="1620"
              state="Copenhagen"
            />
            <VerificationStatus />
            <WhitelistedDomains />
            <Administrators />
            <button className="text-gray-500 ml-auto fixed bottom-10 right-10 p-4 bg-gray-200 rounded-[50%]">
            <MessageSquare size={20} />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
