"use client";

import { LalErpSaveButton, LalErpEditDeleteButtons, LalErpApproveRejectButtons, LalErpCancelResetButtons, LalErpButton } from '@lal-erp/ui'

export default function Home() {
  const handleClick = (action: string)=>{
    alert(`Root page ${action} Clicked`);
  }
  const handleSave = (action: string)=>{
    alert(`Root page ${action} Clicked`);
  }
  const handleDelete = (action: string)=>{
    alert(`Root page ${action}  Clicked`);
  }
  const handleApproveReject = (action: string)=>{
    alert(`Root page ${action}  Clicked`);
  }
  const handleCancelReset = (action: string)=>{
    alert(`Root page ${action}  Clicked`);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">LAL-ERP Buttons</h1>
      <div className="space-y-4">
        <LalErpButton buttonName="Custom Button" onClicked={handleClick} />
        <LalErpSaveButton onClicked={handleSave} />
        <LalErpEditDeleteButtons onClicked={handleDelete} />
        <LalErpApproveRejectButtons onClicked={handleApproveReject} />
        <LalErpCancelResetButtons onClicked={handleCancelReset} />
      </div>
    </div>
  );
}




