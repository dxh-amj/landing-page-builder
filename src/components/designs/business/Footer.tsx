import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Truston. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
