"use client"; 
import TableComponent from "@/app/components/ListWithDetail/Table";
import { ReusableCard } from "@lal-erp/ui";
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
    { id: 1, name: "Nolawi Mekuriaw", email: "derso.m@wldu.edu.et" },
    { id: 2, name: "Solomon ALebachew", email: "solomon.a@wldu.edu.et" },
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
