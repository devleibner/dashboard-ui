import React from "react";
import { X } from "lucide-react";

interface Domain {
  name: string;
}

const DomainTag = ({ domain }: { domain: Domain }) => {
  return (
    <div className="flex items-center bg-gray-100 px-2 py-1 rounded-md text-sm">
      <span className="mr-1">{domain.name}</span>
      <X size={16} className="cursor-pointer" />
    </div>
  );
};

const WhitelistedDomains = () => {
  const domains = [{ name: "www.signify.com" }, { name: "web.signify.com" }];

  return (
    <div className="bg-white rounded-lg p-6 mb-4 grid grid-cols-2">
      <div className="flex flex-col justify-between mb-4">
        <h2 className="text-base font-medium">Whitelisted Domains</h2>

        <p className="text-sm text-dashboard-muted mb-4">
          Specify trusted domains to validate employee requests. Requests from
          these domains will be automatically linked to your account.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex">
          <div className="bg-black ml-8 text-white rounded-full h-5 w-5 flex items-center justify-center mr-1">
            <span className="text-xs">2</span>
          </div>
          <span className="text-sm">Domains</span>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-items-end">
          {domains.map((domain, index) => (
            <DomainTag key={index} domain={domain} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhitelistedDomains;
