"use client";

import { useState } from 'react';
import { Button, Input, Card, Table, Pagination, Tooltip } from '@mantine/core';
import { PlusIcon, SearchIcon, FullscreenIcon, CompressIcon, XIcon } from '@heroicons/react/outline';

interface TableWithDetailViewProps<T> {
  title: string;
  data: T[];
  primaryColumns: any[];
  primaryKey: string;
  onRowClick: (record: T) => void;
  onNew: () => void;
  isEditMode: boolean;
  onSearch: (search: string) => void;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number, pageSize: number) => void;
  onToggleFullScreen: () => void;
  isFullScreen: boolean;
}

export const TableWithDetailView = <T extends object>({
  title,
  data,
  primaryColumns,
  primaryKey,
  onRowClick,
  onNew,
  isEditMode,
  onSearch,
  currentPage,
  pageSize,
  onPageChange,
  onToggleFullScreen,
  isFullScreen,
}: TableWithDetailViewProps<T>) => {
    
  const currentPageData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Table Section */}
      <div className={isEditMode ? 'w-full md:w-1/3' : 'w-full'}>
        <Card shadow="sm" className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <Button variant="filled" color="blue" leftIcon={<PlusIcon />} onClick={onNew}>
            <PlusIcon />New
            </Button>
          </div>
          <Input
            placeholder="Search..."
            icon={<SearchIcon />}
            className="mb-4"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Table className="w-full">
            <thead>
              <tr>
                {primaryColumns.map((column) => (
                  <th key={column.key} className="text-left p-2">
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((record: any) => (
                <tr
                  key={record[primaryKey]}
                  onClick={() => onRowClick(record)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {primaryColumns.map((column) => (
                    <td key={column.key} className="p-2">
                      {record[column.dataIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination
            current={currentPage}
            total={Math.ceil(data.length / pageSize)}
            onChange={onPageChange}
            pageSize={pageSize}
            className="mt-4"
          />
        </Card>
      </div>

      {/* Detail View Section */}
      {isEditMode && (
        <div className={`w-full md:w-2/3 ${isFullScreen ? 'h-screen' : 'h-full'} p-4`}>
          <Card shadow="sm" className="p-4 mb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Staff Detail</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" onClick={onToggleFullScreen}>
                  {isFullScreen ? <CompressIcon className="w-5 h-5" /> : <FullscreenIcon className="w-5 h-5" />}
                </Button>
                <Button variant="outline" color="red">
                  <XIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {primaryColumns.map((column) => (
                <div key={column.key} className="flex justify-between">
                  <span className="font-semibold">{column.title}:</span>
                  <span>{column.dataIndex}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
