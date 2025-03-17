"use client";
import { LalErpApproveRejectButtons, LalErpCancelResetButtons, LalErpEditDeleteButtons, LalErpSaveButton } from '@lal-erp/ui'
import React from 'react'

import { LalErpCard } from '@lal-erp/ui'
import { Button, Card } from '@mantine/core';
import OurCard from '@/app/components/OurCard';
import ApprovalWorkFlow from '@/app/components/ApprovalWorkFlow';
import { Workflows } from './types';

const ProfilePage = () => {
  console.log("Workflows: ", Workflows)
  const handleClick = (action: string) => {
    alert(`Button clicked: ${action}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Workflow</h1>
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {
                Workflows.map((item)=>(
                  <div className='' key={item.id}>
                    <ApprovalWorkFlow id={item.id} name={item.name} />
                  </div>
                ))
              }

      </div>
    </div>
  )
}

export default ProfilePage