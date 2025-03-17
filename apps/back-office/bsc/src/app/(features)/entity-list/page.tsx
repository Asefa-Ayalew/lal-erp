"use client";

import React from 'react'
import { TableWithDetailView } from '@/app/components/entity-list/TableWithDetailView';
import { useState } from 'react';

const data = [
  { id: 1, name: 'John Doe', role: 'Developer' },
  { id: 2, name: 'Jane Doe', role: 'Designer' },
  // more records...
];

const primaryColumns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Role', dataIndex: 'role', key: 'role' },
];

const page = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleRowClick = (record: any) => {
    setIsEditMode(true);
    setSelectedRow(record);
  };

  const handleNew = () => {
    setIsEditMode(false);
    setSelectedRow(null);
  };

  const handleSearch = (search: string) => {
    console.log('Search for:', search);
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <TableWithDetailView
      title="User List"
      data={data}
      primaryColumns={primaryColumns}
      primaryKey="id"
      onRowClick={handleRowClick}
      onNew={handleNew}
      isEditMode={isEditMode}
      onSearch={handleSearch}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={handlePageChange}
      onToggleFullScreen={handleToggleFullScreen}
      isFullScreen={isFullScreen}
    />
  );
};


export default page;