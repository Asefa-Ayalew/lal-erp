"use client";
import React from 'react'
import { LalErpSaveButton } from "@lal-erp/ui";
import { Button } from "@mantine/core";

const Dashboard = () => {
  const handleSave = (action: string)=>{
    alert(`On Dashboard- ${action} button is Clicked`);
  }
  const handleDelete = (action: string)=>{
    alert("Dashboard Delete Clicked");
  }

  return (
    <div className='py-32'>
      <p>Dashboard Page</p>
      <Button variant="primary">Direct</Button>
    </div>
  )
}

export default Dashboard