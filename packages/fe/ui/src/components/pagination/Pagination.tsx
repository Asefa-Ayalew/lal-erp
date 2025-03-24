"use client";

import { Button, Select } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  pageSize: number;
  onPageSizeChange: (newPageSize: number) => void;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
}: PaginationProps) {
  return (
    <div className="flex justify-end items-center space-x-4 mt-4">
      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        {/* Previous Button (Icon Only) */}
        <Button
          variant="outline"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="p-2" // Minimize padding
        >
          <IconChevronLeft size={16} />
        </Button>

        {/* Current Page */}
        <span className="px-2 text-sm font-medium">
          {page} {/* Current Page */}
        </span>

        {/* Next Button (Icon Only) */}
        <Button
          variant="outline"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="p-2" // Minimize padding
        >
          <IconChevronRight size={16} />
        </Button>
      </div>

      {/* Page Size Selector */}
      <div className="flex items-center space-x-2">
        <Select
          value={`${pageSize}`} 
          onChange={(value) => onPageSizeChange(Number(value))}
          data={[
            { value: "5", label: "5 / page" },
            { value: "10", label: "10 / page" },
            { value: "20", label: "20 / page" },
            { value: "50", label: "50 / page" },
          ]}
          className="w-20" 
        />
      </div>
    </div>
  );
}