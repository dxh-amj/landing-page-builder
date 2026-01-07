// components/ui/Table.tsx
import React, { useState } from "react";
import clsx from "clsx";
import { BiSort } from "react-icons/bi";

export interface TableHeader<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
  className?: string;
}

export interface TableProps<T> {
  columns: TableHeader<T>[];
  data: T[];
  rowKey: keyof T;
  selectable?: boolean;
  onSelectionChange?: (selectedRows: T[]) => void;
  className?: string;
  actionColumn?: (row: T) => React.ReactNode;
}

/** 
 * * Reusable, accessible Table component * 
 * * Accessibility & SEO Notes: * - Uses semantic <table>, <thead>, <tbody>, <th>, <tr>, <td> 
 * * - aria-sort applied to sortable headers * - Checkboxes support single/multiple selection 
 * * - Focusable action buttons for keyboard users * 
 * * Usage Example: *
tsx
 * <Table
 *   columns={columns}
 *   data={data}
 *   rowKey="id"
 *   selectable
 *   onSelectionChange={(rows) => console.log(rows)}
 *   actionColumn={(row) => <Button>Delete</Button>}
 * />
 *
*/

function Table<T extends Record<string, any>>({
  columns,
  data,
  rowKey,
  selectable = false,
  onSelectionChange,
  className,
  actionColumn,
}: TableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<T[keyof T]>>(new Set());
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  // Sorting handler
  const handleSort = (column: TableHeader<T>) => {
    if (!column.sortable) return;
    const direction =
      sortConfig?.key === column.key && sortConfig.direction === "asc"
        ? "desc"
        : "asc";
    setSortConfig({ key: column.key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    const { key, direction } = sortConfig;
    return [...data].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (valA == null) return 1;
      if (valB == null) return -1;

      if (typeof valA === "string" && typeof valB === "string") {
        return direction === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      if (typeof valA === "number" && typeof valB === "number") {
        return direction === "asc" ? valA - valB : valB - valA;
      }

      return 0;
    });
  }, [data, sortConfig]);

  // Toggle a single row
  const toggleRowSelection = (key: T[keyof T]) => {
    setSelectedRows((prev) => {
      const newSelection = new Set<T[keyof T]>(prev);
      if (newSelection.has(key)) newSelection.delete(key);
      else newSelection.add(key);
      onSelectionChange?.(data.filter((row) => newSelection.has(row[rowKey])));
      return newSelection;
    });
  };

  // Toggle all rows
  const toggleAllSelection = () => {
    const allSelected = data.every((row) => selectedRows.has(row[rowKey]));
    const newSelection: Set<T[keyof T]> = allSelected
      ? new Set()
      : new Set(data.map((row) => row[rowKey]));
    setSelectedRows(newSelection);
    onSelectionChange?.(allSelected ? [] : [...data]);
  };

  return (
    <table className={clsx("min-w-full border-collapse", className)}>
      <thead>
        <tr>
          {selectable && (
            <th className="px-4 py-2 text-left">
              <input
                type="checkbox"
                aria-label="Select all rows"
                checked={
                  data.length > 0 &&
                  data.every((row) => selectedRows.has(row[rowKey]))
                }
                onChange={toggleAllSelection}
              />
            </th>
          )}
          {columns.map((col) => {
            const isSorted = sortConfig?.key === col.key;
            return (
              <th
                key={String(col.key)}
                className={clsx(
                  "px-4 py-2 text-left cursor-pointer select-none",
                  col.className
                )}
                onClick={() => handleSort(col)}
                aria-sort={
                  isSorted
                    ? sortConfig!.direction === "asc"
                      ? "ascending"
                      : "descending"
                    : undefined
                }
              >
                <span className="inline-flex items-center">
                  {col.label}
                  {col.sortable && (
                    <BiSort
                      className={clsx(
                        "ml-1 w-4 h-4 transition-transform",
                        isSorted
                          ? sortConfig!.direction === "asc"
                            ? "rotate-180 text-blue-500"
                            : "text-blue-500"
                          : "text-gray-400"
                      )}
                    />
                  )}
                </span>
              </th>
            );
          })}
          {actionColumn && <th className="px-4 py-2">Actions</th>}
        </tr>
      </thead>

      <tbody>
        {sortedData.map((row) => (
          <tr
            key={String(row[rowKey])}
            className="border-t hover:bg-gray-50 dark:hover:bg-neutral-800"
          >
            {selectable && (
              <td className="px-4 py-2">
                <input
                  type="checkbox"
                  aria-label={`Select row ${String(row[rowKey])}`}
                  checked={selectedRows.has(row[rowKey])}
                  onChange={() => toggleRowSelection(row[rowKey])}
                />
              </td>
            )}

            {columns.map((col) => (
              <td
                key={String(col.key)}
                className={clsx("px-4 py-2", col.className)}
              >
                {col.render ? col.render(row[col.key], row) : row[col.key]}
              </td>
            ))}

            {actionColumn && <td className="px-4 py-2">{actionColumn(row)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
