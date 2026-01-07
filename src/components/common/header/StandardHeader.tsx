import { useState, useEffect } from "react";
import MenuIcon from "@/components/icons/MenuIcon";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import Button from "@/components/ui/Button";

export interface StandardHeaderProps {
  // Required
  brandName: string;
  brandFont: string;
  primaryColor: string;
  navItems: string[];

  // Optional styling (with sensible defaults)
  brandSize?: string;
  brandWeight?: number;
  navFont?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  ctaText?: string;
  buttonRadius?: string;

  // Special features
  isTransparentInitially?: boolean;
  showLogin?: boolean;
}

/**
 * StandardHeader - Right-aligned navigation layout
 *
 * Layout: [Brand] ------------------- [Nav Items] [Login] [CTA]
 *
 * Pass primaryColor for brand/CTA, optionally override other colors.
 * Supports transparent-to-solid transition on scroll.
 */
export default function StandardHeader({
  brandName,
  brandFont,
  primaryColor,
  navItems,
  brandSize = "24px",
  brandWeight = 400,
  navFont = "Inter, sans-serif",
  textColor = "#0A0A0A",
  bgColor = "bg-white/95",
  borderColor = "border-gray-100",
  ctaText = "Get Started",
  buttonRadius = "8px",
  isTransparentInitially = false,
  showLogin = true,
}: StandardHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isTransparentInitially) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparentInitially]);

  const brandStyle = {
    fontFamily: brandFont,
    color: isTransparentInitially && !isScrolled ? "#FFFFFF" : primaryColor,
    fontSize: brandSize,
    fontWeight: brandWeight,
    lineHeight: "150%",
    transition: "color 0.3s ease",
  } as const;

  const navStyle = {
    fontFamily: navFont,
    color: isTransparentInitially && !isScrolled ? "#FFFFFF" : textColor,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
    transition: "color 0.3s ease",
  } as const;

  const headerBgClass =
    isTransparentInitially && !isScrolled
      ? "bg-transparent border-transparent"
      : `${bgColor} backdrop-blur-sm border-b ${borderColor}`;

  return (
    <>
      <header
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${headerBgClass}`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={brandStyle}>{brandName}</span>
          </div>

          <button
            className="md:hidden p-2 transition-colors"
            style={{
              color:
                isTransparentInitially && !isScrolled ? "#FFFFFF" : textColor,
            }}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  style={navStyle}
                  className="hover:opacity-70 transition-opacity"
                >
                  {item}
                </a>
              ))}
              <button
                style={navStyle}
                className="flex items-center gap-1 hover:opacity-70 transition-opacity"
              >
                More
                <ChevronDownIcon className="w-4 h-4" />
              </button>
            </nav>

            <div className="flex items-center gap-4">
              {showLogin && (
                <Button
                  variant="outline"
                  size="md"
                  style={{ ...navStyle, borderRadius: buttonRadius }}
                  className={
                    isTransparentInitially && !isScrolled
                      ? "border-white/30 text-white hover:bg-white/10"
                      : ""
                  }
                >
                  Log In
                </Button>
              )}
              <Button
                variant="primary"
                size="md"
                style={{
                  fontFamily: navFont,
                  backgroundColor: primaryColor,
                  borderRadius: buttonRadius,
                }}
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className={`absolute inset-0 ${
              bgColor.includes("dark") || bgColor.includes("#0")
                ? "bg-[#0A0A0A]"
                : "bg-white"
            } shadow-2xl flex flex-col`}
          >
            <div className={`border-b ${borderColor} shrink-0`}>
              <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <span style={{ ...brandStyle, color: primaryColor }}>
                  {brandName}
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 transition-colors"
                  style={{ color: textColor }}
                  aria-label="Close menu"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{ ...navStyle, color: textColor }}
                    className="hover:opacity-70 transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div
              className={`p-6 border-t ${borderColor} flex flex-col gap-3 shrink-0`}
            >
              {showLogin && (
                <Button
                  variant="outline"
                  size="md"
                  style={{
                    ...navStyle,
                    color: textColor,
                    borderRadius: buttonRadius,
                  }}
                  className="w-full"
                >
                  Log In
                </Button>
              )}
              <Button
                variant="primary"
                size="md"
                style={{
                  fontFamily: navFont,
                  backgroundColor: primaryColor,
                  borderRadius: buttonRadius,
                }}
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
