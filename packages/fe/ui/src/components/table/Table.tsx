import { Table as MantineTable, ActionIcon } from "@mantine/core";
import { IconArrowRightSquare } from "@tabler/icons-react";
import { Pagination } from "../pagination/Pagination";

interface Column {
  key: string;
  label: string;
}

interface TableProps<T> {
  columns: Column[];
  data: T[];
  primaryColumn?: string; 
  onRowClick?: (row: T) => void;
  editMode: "list" | "new" | "detail"; 
}

export function Table<T>({
  columns,
  data,
  primaryColumn,
  onRowClick,
  editMode
}: TableProps<T>) {
  
  const displayedColumns = primaryColumn
    ? columns.filter((col) => col.key === primaryColumn)
    : columns;

  // Determine if the table is in "list" mode
  const isListMode = editMode === "list";

  return (
    <div className={`isListMode ? "w-full" : "w-1/3" pt-4`}  >
      <MantineTable
        striped
        highlightOnHover
        withColumnBorders
        
      >
        <thead style={{ backgroundColor: "#f0f4f8" }}>
          <tr>
            {displayedColumns.map((col) => (
              <th
                style={{ textAlign: "left", padding: "12px" }}
                key={col.key}
              >
                {col.label}
              </th>
            ))}
            {isListMode && ( // Show actions column only in "list" mode
              <th style={{ textAlign: "center", padding: "12px" }}>Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              {...isListMode?()=>onRowClick?.(row) : undefined}
              style={{ cursor: "pointer" }} // Always show pointer cursor
            >
              {displayedColumns.map((col) => (
                <td
                  style={{ padding: "12px" }}
                  key={col.key}
                >
                  {String(row[col.key as keyof T])} {/* Ensure type safety */}
                </td>
              ))}
              {isListMode && ( // Show actions icon only in "list" mode
                <td style={{ textAlign: "center", padding: "12px", position: "relative" }}>
                  <ActionIcon
                    size="sm"
                    color="blue"
                    variant="outline"
                    className="action-icon cursor-pointer"
                    onClick={() => onRowClick?.(row)} // Always clickable
                  >
                    <IconArrowRightSquare size={20} />
                  </ActionIcon>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </MantineTable>
    </div>
  );
}