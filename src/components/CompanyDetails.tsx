
import React from 'react';

interface CompanyDetailsProps {
  companyName: string;
  website: string;
  country: string;
  city: string;
  street: string;
  postal: string;
  state: string;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  companyName,
  website,
  country,
  city,
  street,
  postal,
  state,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-medium">Company Details</h2>
        <button className="bg-black text-white px-4 py-1 text-sm rounded-md">
          Edit
        </button>
      </div>
      
      <div className="flex">
        <div className="mr-4 self-start">
          <div className="h-12 w-12 bg-black rounded-sm text-white flex items-center justify-center font-semibold">
            S
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-16 gap-y-6 flex-1">
          <div>
            <div className="text-xs text-dashboard-muted mb-1">Company Name</div>
            <div className="text-sm font-medium">{companyName}</div>
          </div>
          
          <div>
            <div className="text-xs text-dashboard-muted mb-1">Website</div>
            <div className="text-sm font-medium">{website}</div>
          </div>
          
          <div>
            <div className="text-xs text-dashboard-muted mb-1">Country</div>
            <div className="text-sm font-medium">{country}</div>
          </div>
          
          <div>
            <div className="text-xs text-dashboard-muted mb-1">City</div>
            <div className="text-sm font-medium">{city}</div>
          </div>
          
          <div>
            <div className="text-xs text-dashboard-muted mb-1">Street</div>
            <div className="text-sm font-medium">{street}</div>
          </div>
          
          <div>
            <div className="text-xs text-dashboard-muted mb-1">Postal</div>
            <div className="text-sm font-medium">{postal}</div>
          </div>
          
          <div>
            <div className="text-xs text-dashboard-muted mb-1">State</div>
            <div className="text-sm font-medium">{state}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
