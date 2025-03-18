"use client"; 

import ReusableCard from "@/app/components/ListWithDetail/Card";
import TableComponent from "@/app/components/ListWithDetail/Table";
import React from "react";

const Example: React.FC = () => {
  const handleAddClick = () => {
    alert("Add button clicked!");
  };

  const handleGoToDetail = (id: number) => {
    alert(`Go to details for user ID: ${id}`);
  };

  // Sample table data
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];

  return (
    <div>
      <ReusableCard title="User List" onAddClick={handleAddClick}>
        <TableComponent data={data} onGoToDetail={handleGoToDetail} />
      </ReusableCard>
    </div>
  );
};

export default Example;
