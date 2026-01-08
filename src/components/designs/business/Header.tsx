import { useState } from "react";
import {
  MenuIcon,
  ChevronDownIcon,
  CloseIcon,
} from "@/components/common/icons";
import Button from "@/components/ui/Button";

interface HeaderProps {
  brandName?: string;
  brandFont?: string;
  navFont?: string;
}

export default function Header({
  brandName = "Truston",
  brandFont = '"Sedan SC", serif',
  navFont = "Inter, sans-serif",
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const brandStyle = {
    fontFamily: brandFont,
    color: "var(--Text-text-500, #0A0A0A)",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  } as const;

  const navStyle = {
    fontFamily: navFont,
    color: "var(--Text-text-500, #0A0A0A)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  } as const;

  const navItems = ["Services", "About", "Work"];

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed w-full top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={brandStyle}>{brandName}</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-900 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  style={navStyle}
                  className="hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="relative group">
                <button
                  style={navStyle}
                  className="flex items-center gap-1 hover:text-gray-900 transition-colors"
                >
                  Resources
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
              </div>
            </nav>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="md"
                style={navStyle}
                rounded="rounded-lg"
              >
                Log In
              </Button>
              <Button
                variant="primary"
                size="md"
                style={{ ...navStyle, color: "white" }}
                rounded="rounded-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="absolute inset-0 bg-white shadow-2xl flex flex-col">
            {/* Drawer Header */}
            <div className="h-20 px-6 flex items-center justify-between border-b border-gray-100 shrink-0">
              <span style={{ ...brandStyle, color: "#2563EB" }}>
                {brandName}
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Close menu"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={navStyle}
                    className="text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button
                  className="flex items-center justify-between hover:text-blue-600 transition-colors"
                  style={navStyle}
                >
                  <span>Resources</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-gray-100 flex flex-col gap-3 shrink-0">
              <Button
                variant="outline"
                size="md"
                style={navStyle}
                rounded="rounded-lg"
                className="w-full"
              >
                Log In
              </Button>
              <Button
                variant="primary"
                size="md"
                style={{ ...navStyle, color: "white" }}
                rounded="rounded-lg"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
