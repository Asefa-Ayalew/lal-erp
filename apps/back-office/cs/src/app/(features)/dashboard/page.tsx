"use client";

import { 
  LalErpApproveRejectButtons, 
  LalErpCancelResetButtons, 
  LalErpEditDeleteButtons, 
  LalErpSaveButton 
} from '@lal-erp/ui'
import { Button } from '@mantine/core';
import React from 'react'

const Dashboard = () => {

  const handleClick = (action: string) => {
    alert(`Button clicked: ${action}`);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">ERP Buttons Demo</h1>
      <Button className='bg-blue-700'>Dashboard Button</Button>
      {/* <LalErpSaveButton onClicked={handleClick} />
      <LalErpEditDeleteButtons onClicked={handleClick} />
      <LalErpApproveRejectButtons onClicked={handleClick} />
      <LalErpCancelResetButtons onClicked={handleClick} /> */}
    </div>
  )
}

export default Dashboard