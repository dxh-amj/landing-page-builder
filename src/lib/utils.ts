import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date as "August 22, 2025"
 */
export const formatFullDate = (inputDate: Date | string): string => {
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Format a date as "8:17 AM" or "8:17 PM"
 */
export const formatTime = (inputDate: Date | string): string => {
  const date = new Date(inputDate);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  if (hours === 0) hours = 12;

  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};

/**
 * Format relative time: "20 min ago", "2 days ago"
 */
export const timeAgo = (inputDate: Date | string): string => {
  const date = new Date(inputDate);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);

  if (diffSeconds < 60)
    return `${diffSeconds} second${diffSeconds !== 1 ? "s" : ""} ago`;
  if (diffSeconds < 3600) {
    const minutes = Math.floor(diffSeconds / 60);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }
  if (diffSeconds < 86400) {
    const hours = Math.floor(diffSeconds / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }
  const days = Math.floor(diffSeconds / 86400);
  return `${days} day${days !== 1 ? "s" : ""} ago`;
};

/**
 * Get item from localStorage safely
 */
export const getStorageItem = <T>(key: string): T | null => {
  if (typeof window === "undefined") return null;
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch {
    return null;
  }
};

/**
 * Set item in localStorage
 */
export const setStorageItem = (key: string, value: unknown) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Remove item
 */
export const removeStorageItem = (key: string) => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(key);
};

/**
 *  randomString(10) example= "f4j2k9b0q1"
 */
export const randomString = (length = 8) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + length);

/**
 * Sleep/delay function
 * @param ms Milliseconds to wait
 * @example
 * await sleep(1000); // pauses execution for 1 second
 */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));



/**
 * Simple fetch wrapper with JSON parsing and error handling
 * @example
 * const data = await fetchJSON<{ name: string }>("/api/user");
 * console.log(data.name);
 */
export const fetchJSON = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`Request failed: ${res.statusText}`);
  return res.json() as Promise<T>;
};

/**
 * Capitalize first letter of string
 * @example
 * capitalize("hello") // "Hello"
 */
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Truncate string to certain length
 * @param str String to truncate
 * @param length Max length (default 100)
 * @param ending String to append if truncated (default "...")
 * @example
 * truncate("Hello World", 5) // "Hello..."
 */
export const truncate = (str: string, length = 100, ending = "...") =>
  str.length > length ? str.substring(0, length) + ending : str;

/**
 * Generic function to parse Zod schema safely
 * @example
 * const schema = z.object({ name: z.string() });
 * const result = parseForm(schema, { name: "Alice" });
 * if (result.success) console.log(result.data.name); // "Alice"
 */
export const parseForm = <T>(
  schema: z.ZodType<T>,
  data: unknown
): { success: boolean; data?: T; errors?: any } => {
  const result = schema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  } else {
    return { success: false, errors: result.error.format() };
  }
};


/**
 * Debounce function
 * @example
 * const handleResize = debounce(() => console.log("Resized"), 300);
 * window.addEventListener("resize", handleResize);
 */
export const debounce = <T extends (...args: any[]) => any>(fn: T, delay = 300) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Throttle: ensures a function is called at most once every `limit` ms
 */
export const throttle = <T extends (...args: any[]) => any>(func: T, limit = 300) => {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number | null = null;

  return (...args: Parameters<T>) => {
    if (lastRan === null) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - (lastRan ?? 0) >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

/**
 * Convert string to camelCase
 */
export const toCamelCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/[-_ ]+(\w)/g, (_, c) => (c ? c.toUpperCase() : ""));

/**
 * Convert string to snake_case
 */
export const toSnakeCase = (str: string) =>
  str.toLowerCase().replace(/[- ]+/g, "_");

/**
 * Convert string to kebab-case (dash-separated)
 */
export const toKebabCase = (str: string) =>
  str.toLowerCase().replace(/[_ ]+/g, "-");

