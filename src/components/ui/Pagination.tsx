import React from "react";
import clsx from "clsx";

export interface PaginationProps {
  totalItems: number;
  currentPage: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange?: (rows: number) => void;

  rowsPerPageOptions?: number[];

  // Navigation button options
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  siblingCount?: number;
  showPageNumbers?: boolean;
  showResultsInfo?: boolean;
  showRowsPerPage?: boolean;

  // Button content customization - can use icons, text, or both
  firstButtonContent?: React.ReactNode;
  prevButtonContent?: React.ReactNode;
  nextButtonContent?: React.ReactNode;
  lastButtonContent?: React.ReactNode;

  // Button text customization (used as fallback or with icons)
  firstButtonText?: string;
  prevButtonText?: string;
  nextButtonText?: string;
  lastButtonText?: string;

  // Display options for text with icons
  showTextWithIcons?: boolean;
  iconPosition?: "left" | "right"; // For text with icons

  // Style customization
  buttonClassName?: string;
  activeButtonClassName?: string;
  disabledButtonClassName?: string;
  ellipsisClassName?: string;
  containerClassName?: string;
  infoClassName?: string;
  dropdownClassName?: string;
  labelClassName?: string;
  iconTextWrapperClassName?: string;

  // Custom rendering functions
  renderPage?: (
    page: number,
    isActive: boolean,
    goToPage: () => void
  ) => React.ReactNode;
  renderNavButton?: (
    type: "first" | "prev" | "next" | "last",
    disabled: boolean,
    goToPage: () => void
  ) => React.ReactNode;

  renderRowsDropdown?: (
    value: number,
    options: number[],
    onChange: (value: number) => void
  ) => React.ReactNode;

  renderResultsInfo?: (
    start: number,
    end: number,
    total: number
  ) => React.ReactNode;

  className?: string;
}

/**
 * Pagination component with flexible icon and text options
 *
 * Usage Example 1: Icons only
 * ```tsx
 * <Pagination
 *  totalItems={100}
 *  currentPage={1}
 *  rowsPerPage={10}
 *  onPageChange={setPage}
 *  firstButtonContent={<ChevronsLeft size={16} />}
 *  prevButtonContent={<ChevronLeft size={16} />}
 *  nextButtonContent={<ChevronRight size={16} />}
 *  lastButtonContent={<ChevronsRight size={16} />}
 * />
 * ```
 *
 * Usage Example 2: Text only
 * ```tsx
 * <Pagination
 *  totalItems={100}
 *  currentPage={1}
 *  rowsPerPage={10}
 *  onPageChange={setPage}
 *  firstButtonText="First"
 *  prevButtonText="Previous"
 *  nextButtonText="Next"
 *  lastButtonText="Last"
 * />
 * ```
 *
 * Usage Example 3: Icons with text
 * ```tsx
 * <Pagination
 *  totalItems={100}
 *  currentPage={1}
 *  rowsPerPage={10}
 *  onPageChange={setPage}
 *  firstButtonContent={<ChevronsLeft size={16} />}
 *  prevButtonContent={<ChevronLeft size={16} />}
 *  nextButtonContent={<ChevronRight size={16} />}
 *  lastButtonContent={<ChevronsRight size={16} />}
 *  firstButtonText="First"
 *  prevButtonText="Prev"
 *  nextButtonText="Next"
 *  lastButtonText="Last"
 *  showTextWithIcons={true}
 *  iconPosition="left"
 * />
 * ```
 */

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  currentPage,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,

  rowsPerPageOptions = [5, 10, 20, 50],

  showFirstLast = true,
  showPrevNext = true,
  siblingCount = 1,
  showPageNumbers = true,
  showResultsInfo = true,
  showRowsPerPage = true,
  showTextWithIcons = false,
  iconPosition = "left",

  // Button content
  firstButtonContent,
  prevButtonContent,
  nextButtonContent,
  lastButtonContent,

  // Button text
  firstButtonText = "First",
  prevButtonText = "Prev",
  nextButtonText = "Next",
  lastButtonText = "Last",

  // Style classes
  buttonClassName = "px-3 py-1 rounded border hover:bg-gray-100",
  activeButtonClassName = "bg-blue-500 text-white border-blue-600",
  disabledButtonClassName = "opacity-50 cursor-not-allowed",
  ellipsisClassName = "px-2 dots",
  containerClassName = "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
  infoClassName = "text-sm text-gray-600",
  dropdownClassName = "border rounded px-2 py-1",
  labelClassName = "text-sm text-gray-600",
  iconTextWrapperClassName = "flex items-center gap-1",

  // Custom rendering
  renderPage,
  renderNavButton,
  renderRowsDropdown,
  renderResultsInfo,

  className,
}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / rowsPerPage));
  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  // Pagination range calculation
  const getPageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 5;
    const pages: (number | "...")[] = [];

    if (totalPages <= totalNumbers) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const leftBound = Math.max(2, currentPage - siblingCount);
      const rightBound = Math.min(totalPages - 1, currentPage + siblingCount);

      const showLeftEllipsis = leftBound > 2;
      const showRightEllipsis = rightBound < totalPages - 1;

      pages.push(1);

      if (!showLeftEllipsis) {
        for (let i = 2; i <= 3 + siblingCount; i++) {
          pages.push(i);
        }
        pages.push("...");
      } else if (showLeftEllipsis && !showRightEllipsis) {
        pages.push("...");
        for (let i = totalPages - (2 + siblingCount); i < totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push("...");
        for (let i = leftBound; i <= rightBound; i++) {
          pages.push(i);
        }
        pages.push("...");
      }

      pages.push(totalPages);
    }
    return pages;
  };

  const pages = getPageNumbers();

  const start = (currentPage - 1) * rowsPerPage + 1;
  const end = Math.min(currentPage * rowsPerPage, totalItems);

  // Helper to render button content (icon, text, or both)
  const renderButtonContent = (
    icon: React.ReactNode,
    text: string,
    type: "first" | "prev" | "next" | "last"
  ) => {
    if (renderNavButton) {
      // Let custom renderer handle it
      return null;
    }

    if (showTextWithIcons && icon) {
      return (
        <span className={iconTextWrapperClassName}>
          {iconPosition === "left" && icon}
          {text && <span>{text}</span>}
          {iconPosition === "right" && icon}
        </span>
      );
    }

    return icon || text;
  };

  // Default button renderers
  const defaultRenderNavButton = (
    type: "first" | "prev" | "next" | "last",
    disabled: boolean,
    goToPage: () => void
  ) => {
    const contentMap = {
      first: {
        icon: firstButtonContent,
        text: firstButtonText,
      },
      prev: {
        icon: prevButtonContent,
        text: prevButtonText,
      },
      next: {
        icon: nextButtonContent,
        text: nextButtonText,
      },
      last: {
        icon: lastButtonContent,
        text: lastButtonText,
      },
    };

    const { icon, text } = contentMap[type];
    const content = renderButtonContent(icon, text, type);

    return (
      <button
        onClick={goToPage}
        disabled={disabled}
        className={clsx(buttonClassName, disabled && disabledButtonClassName)}
        aria-label={type}
      >
        {content}
      </button>
    );
  };

  // Check if we have any navigation to show
  const hasNavigation = showFirstLast || showPrevNext || showPageNumbers;

  return (
    <div className={clsx(containerClassName, className)}>
      {/* Results info - optional */}
      {showResultsInfo &&
        (renderResultsInfo ? (
          renderResultsInfo(start, end, totalItems)
        ) : (
          <div className={infoClassName}>
            Showing <span className="font-medium">{start}</span>–
            <span className="font-medium">{end}</span> of{" "}
            <span className="font-medium">{totalItems}</span> results
          </div>
        ))}

      <div className="flex items-center gap-4">
        {/* Rows per page selector - optional */}
        {showRowsPerPage &&
          onRowsPerPageChange &&
          (renderRowsDropdown ? (
            renderRowsDropdown(
              rowsPerPage,
              rowsPerPageOptions,
              onRowsPerPageChange
            )
          ) : (
            <div className="flex items-center gap-2">
              <label className={labelClassName}>Rows per page:</label>
              <select
                value={rowsPerPage}
                onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
                className={dropdownClassName}
              >
                {rowsPerPageOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}

        {/* Page navigation - optional */}
        {hasNavigation && (
          <nav aria-label="Pagination" className="flex items-center gap-2">
            {/* First - optional */}
            {showFirstLast &&
              (renderNavButton
                ? renderNavButton("first", currentPage === 1, () => goToPage(1))
                : defaultRenderNavButton("first", currentPage === 1, () =>
                    goToPage(1)
                  ))}

            {/* Prev - optional */}
            {showPrevNext &&
              (renderNavButton
                ? renderNavButton("prev", currentPage === 1, () =>
                    goToPage(currentPage - 1)
                  )
                : defaultRenderNavButton("prev", currentPage === 1, () =>
                    goToPage(currentPage - 1)
                  ))}

            {/* Pages - optional */}
            {showPageNumbers &&
              pages.map((p, i) =>
                p === "..." ? (
                  <span key={`ellipsis-${i}`} className={ellipsisClassName}>
                    …
                  </span>
                ) : renderPage ? (
                  renderPage(p, p === currentPage, () => goToPage(p))
                ) : (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    aria-current={p === currentPage ? "page" : undefined}
                    className={clsx(
                      buttonClassName,
                      p === currentPage && activeButtonClassName
                    )}
                  >
                    {p}
                  </button>
                )
              )}

            {/* Next - optional */}
            {showPrevNext &&
              (renderNavButton
                ? renderNavButton("next", currentPage === totalPages, () =>
                    goToPage(currentPage + 1)
                  )
                : defaultRenderNavButton(
                    "next",
                    currentPage === totalPages,
                    () => goToPage(currentPage + 1)
                  ))}

            {/* Last - optional */}
            {showFirstLast &&
              (renderNavButton
                ? renderNavButton("last", currentPage === totalPages, () =>
                    goToPage(totalPages)
                  )
                : defaultRenderNavButton(
                    "last",
                    currentPage === totalPages,
                    () => goToPage(totalPages)
                  ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Pagination;
