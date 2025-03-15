'use client';

import { LalErpCard, LalErpExpandCollapseButton } from '@lal-erp/ui';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Settings } from 'lucide-react'; 
import {MyButtonsWithAssefa} from '@lal-erp/ui';

const ProfilePage = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-2">
      <LalErpCard
        title="Project Status"
        additionalButtons={
          <div className="flex space-x-2">
            <LalErpExpandCollapseButton
              className="p-1 text-gray-600 hover:bg-gray-100 rounded-full"
              buttonName={isExpanded ? 'Collapse' : 'Expand'}
              onClicked={toggleExpand}
            />
            <MyButtonsWithAssefa />
            <button className="p-1 text-gray-600 hover:bg-gray-100 rounded-full">
              <Settings size={18} />
            </button>
          </div>
        }
      >
        {isExpanded && (
          <div className="w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Description</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-2">One</td>
                  <td className="p-2">Description of 1</td>
                  <td className="p-2">Its Status</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-2">Two</td>
                  <td className="p-2">Description of 2</td>
                  <td className="p-2">Its Status</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </LalErpCard>
    </div>
  );
};

export default ProfilePage;