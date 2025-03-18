"use client";

import React from "react";
import { Table, ActionIcon } from "@mantine/core";
import "./Card.module.css";
import { ArrowRight } from "lucide-react";

interface TableComponentProps {
  data: { id: number; name: string; email: string }[];
  onGoToDetail: (id: number) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({ data, onGoToDetail }) => {
  return (
    <Table striped highlightOnHover withColumnBorders>
      <thead style={{ backgroundColor: "#f0f4f8" }}>
        <tr>
          <th style={{ textAlign: "left", padding: "12px" }}>ID</th>
          <th style={{ textAlign: "left", padding: "12px" }}>Name</th>
          <th style={{ textAlign: "left", padding: "12px" }}>Email</th>
          <th style={{ textAlign: "center", padding: "12px" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="table-row">
            <td style={{ padding: "12px" }}>{row.id}</td>
            <td style={{ padding: "12px" }}>{row.name}</td>
            <td style={{ padding: "12px" }}>{row.email}</td>
            <td style={{ textAlign: "center", padding: "12px", position: "relative" }}>
              <ActionIcon
                size="sm" // Bigger than button
                color="blue"
                variant="outline"
                className="action-icon"
                onClick={() => onGoToDetail(row.id)}
              >
                <ArrowRight size={20} />
              </ActionIcon>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
