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
    <div className="flex justify-end items-center gap-4 mt-4">
      {/* Pagination Controls */}
      <Button
        variant="outline"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        size="xs"
        radius="md"
      >
        <IconChevronLeft size={16} />
      </Button>

      <span className="text-sm font-medium min-w-[30px] text-center">
        {page}
      </span>

      <Button
        variant="outline"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        size="xs"
        radius="md"
      >
        <IconChevronRight size={16} />
      </Button>

      {/* Page Size Selector */}
      <Select
        value={`${pageSize}`}
        onChange={(value) => onPageSizeChange(Number(value))}
        data={[
          { value: "5", label: "5 / page" },
          { value: "10", label: "10 / page" },
          { value: "20", label: "20 / page" },
          { value: "50", label: "50 / page" },
        ]}
        className="w-20 text-sm"
        size="xs"
        radius="md"
      />
    </div>
  );
}
