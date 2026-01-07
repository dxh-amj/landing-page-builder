import { useState } from "react";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import Button from "@/components/ui/Button";

interface HeaderProps {
  brandName?: string;
  navFont?: string;
}

export default function Header({
  brandName = "BUILDERS",
  navFont = "Inter, sans-serif",
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const brandStyle = {
    fontFamily: '"Playfair Display SC", serif',
    color: "var(--Primary-Real-Estate-primary-500, #059669)",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "150%", // 30px
  } as const;

  const navStyle = {
    fontFamily: "Inter, sans-serif",
    color: "var(--Background-background-500, #FFFFFF)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%", // 24px
  } as const;

  const navItems = [
    { label: "Properties", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
          {/* Brand - Left */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span style={brandStyle}>{brandName}</span>
          </div>

          {/* Desktop Navigation - Absolute Center */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={navStyle}
                className="hover:text-emerald-400 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions - Right */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              className="md:hidden p-2 text-white hover:text-emerald-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            <div className="hidden md:block">
              <Button
                variant="primary"
                size="md"
                className="bg-emerald-500 hover:bg-emerald-600 border-none text-white px-8 rounded-xl"
                style={navStyle}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#0A0A0A] border-l border-white/10 flex flex-col p-6">
            <div className="flex items-center justify-between mb-12">
              <span style={brandStyle}>{brandName}</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{ ...navStyle, fontSize: "18px" }}
                  className="text-white hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="primary"
                size="md"
                className="bg-emerald-500 hover:bg-emerald-600 border-none text-white mt-4 w-full h-12"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
