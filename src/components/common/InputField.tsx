import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface InputFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea" | "checkbox" | "radio" | "select";
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
  options?: Option[]; // For select or radio
  rows?: number; // For textarea
  className?: string; // Custom classes for design override
}

const InputField: React.FC<InputFieldProps> = React.memo(
  ({
    label,
    name,
    type = "text",
    placeholder,
    register,
    error,
    options = [],
    rows = 5,
    className = "",
  }) => {
    const baseClasses = `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white ${
      error ? "border-red-500" : "border-neutral-300 dark:border-neutral-700"
    }`;

    const inputClasses = `${baseClasses} ${className}`;
    const errorId = `${name}-error`;

    return (
      <div className="flex flex-col mb-4">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
        >
          {label}
        </label>

        {type === "textarea" && (
          <textarea
            id={name}
            {...register}
            placeholder={placeholder}
            rows={rows}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={inputClasses}
          />
        )}

        {type === "select" && (
          <select
            id={name}
            {...register}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={inputClasses}
          >
            <option value="">Select an option</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}

        {(type === "text" || type === "email") && (
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            {...register}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={inputClasses}
          />
        )}

        {(type === "checkbox" || type === "radio") && (
          <div className="flex items-center space-x-2">
            {options.length > 0 ? (
              options.map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <input
                    id={`${name}-${opt.value}`}
                    {...register}
                    type={type}
                    value={opt.value}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                    className={`w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${className}`}
                  />
                  <label
                    htmlFor={`${name}-${opt.value}`}
                    className="text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    {opt.label}
                  </label>
                </div>
              ))
            ) : (
              <input
                id={name}
                {...register}
                type={type}
                aria-invalid={!!error}
                aria-describedby={error ? errorId : undefined}
                className={`w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${className}`}
              />
            )}
          </div>
        )}

        {error && (
          <p id={errorId} className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default InputField;
