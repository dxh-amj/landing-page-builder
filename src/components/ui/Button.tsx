// components/ui/Button.tsx
import React from "react";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  ariaLabel?: string;
  rounded?: string; // e.g., "rounded-lg", "rounded-full"
  fontClass?: string; // e.g., "font-serif", "font-sans"
  type?: "button" | "submit" | "reset";
}

/**
 * Reusable, accessible Button component
 */
const Button: React.FC<ButtonProps> = React.memo(
  ({
    children,
    variant = "primary",
    size = "md",
    loading = false,
    className,
    disabled,
    ariaLabel,
    rounded = "rounded-lg",
    fontClass,
    type = "button",
    style,
    ...props
  }) => {
    // User requested: display: flex; padding: 10px 20px; justify-content: center; align-items: center; gap: 8px;
    // We apply these as defaults but allow overrides via classes
    const baseStyles =
      "flex items-center justify-center gap-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variantStyles = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600 shadow-sm hover:shadow-md",
      secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
      danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
      outline:
        "border border-blue-600 text-blue-600 hover:text-blue-700 hover:bg-blue-50 focus:ring-blue-500 bg-transparent",
      glass:
        "bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white/50 shadow-sm",
    };

    // Mapping size to padding to get close to 10px 20px (py-2.5 px-5 is 10px 20px)
    const sizeStyles = {
      sm: "px-3 py-2 text-sm", // 8px 12px
      md: "px-5 h-11 text-base", // 44px height (Requested)
      lg: "px-6 py-4 text-lg", // 16px 24px
    };

    return (
      <button
        type={type}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          rounded,
          fontClass,
          className
        )}
        disabled={disabled || loading}
        aria-busy={loading ? true : undefined}
        aria-label={ariaLabel}
        style={style}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

export default Button;
