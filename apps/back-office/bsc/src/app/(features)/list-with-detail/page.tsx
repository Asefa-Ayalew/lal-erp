"use client"; 

import TableComponent from "@/app/components/ListWithDetail/Table";
import { ReusableCard } from "@lal-erp/ui";
import { useRouter } from "next/router";
import React from "react";

const Example: React.FC = () => {
  const router = useRouter();

  const handleAddClick = () => {
    alert("Add button clicked!");
  };

  const handleGoToDetail = (id: number) => {
    router.push(`/list-with-detail/${id}`)
  };

  const data = [
    { id: 1, name: "Nolawi Mekuriaw", email: "derso.m@wldu.edu.et" },
    { id: 2, name: "Solomon ALebachew", email: "solomon.a@wldu.edu.et" },
  ];

  return (
    <div>
      <ReusableCard title="User List" newAllowed={true} onAddClick={handleAddClick}>
        <TableComponent data={data} onGoToDetail={handleGoToDetail} />
      </ReusableCard>
    </div>
  );
};

export default Example;
