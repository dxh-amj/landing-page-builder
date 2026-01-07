import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 font-bold text-xl tracking-wider">
              BUILDERS
            </span>
          </div>

          <div className="flex gap-8 text-zinc-400 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">
              Properties
            </a>
            <a href="#" className="hover:text-white transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Builders. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
