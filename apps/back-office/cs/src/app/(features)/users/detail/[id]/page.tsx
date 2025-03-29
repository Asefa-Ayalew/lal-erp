"use client"
import { useParams } from "next/navigation";
import React from 'react'

const DetailPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Detail Page for ID: {id}</h1>
      {/* Render the detail form here */}
    </div>
  );
}

export default DetailPage