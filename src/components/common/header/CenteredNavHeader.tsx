import { useState } from "react";
import { MenuIcon, CloseIcon } from "@/components/common/icons";
import Button from "@/components/ui/Button";

export interface CenteredNavHeaderProps {
  // Required
  brandName: string;
  brandFont: string;
  primaryColor: string;
  navItems: { label: string; href: string }[];

  // Optional styling (with sensible defaults)
  brandSize?: string;
  brandWeight?: number;
  navFont?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  ctaText?: string;
  buttonRadius?: string;
}

/**
 * CenteredNavHeader - Centered navigation layout
 *
 * Layout: [Brand] ------- [Centered Nav Items] ------- [CTA]
 *
 * Pass primaryColor for brand/CTA, optionally override other colors.
 */
export default function CenteredNavHeader({
  brandName,
  brandFont,
  primaryColor,
  navItems,
  brandSize = "20px",
  brandWeight = 400,
  navFont = "Inter, sans-serif",
  textColor = "#0A0A0A",
  bgColor = "bg-white",
  borderColor = "border-gray-200",
  ctaText = "Get Started",
  buttonRadius = "12px",
}: CenteredNavHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const brandStyle = {
    fontFamily: brandFont,
    color: primaryColor,
    fontSize: brandSize,
    fontWeight: brandWeight,
    lineHeight: "150%",
  } as const;

  const navStyle = {
    fontFamily: navFont,
    color: textColor,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
  } as const;

  return (
    <>
      <header
        className={`fixed w-full top-0 z-40 ${bgColor} backdrop-blur-md`}
        style={{ borderBottom: `0.3px solid ${primaryColor}` }}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span style={brandStyle}>{brandName}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={navStyle}
                className="hover:opacity-70 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              className="md:hidden p-2 transition-colors"
              style={{ color: textColor }}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            <div className="hidden md:block">
              <Button
                variant="primary"
                size="md"
                className="border-none text-white px-8"
                style={{
                  backgroundColor: primaryColor,
                  borderRadius: buttonRadius,
                  fontFamily: navStyle.fontFamily,
                  fontWeight: navStyle.fontWeight,
                  fontSize: navStyle.fontSize,
                }}
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className={`absolute inset-0 ${
              bgColor.includes("white") ? "bg-white" : "bg-[#0A0A0A]"
            } shadow-2xl flex flex-col`}
          >
            <div className={`border-b ${borderColor} shrink-0`}>
              <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <span style={brandStyle}>{brandName}</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ color: textColor }}
                  className="p-2 -mr-2"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
            <nav className="flex flex-col gap-8 p-6 overflow-y-auto">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{ ...navStyle, fontSize: "18px" }}
                  className="hover:opacity-70 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="primary"
                size="md"
                className="border-none text-white mt-4 w-full h-12"
                style={{
                  backgroundColor: primaryColor,
                  borderRadius: buttonRadius,
                }}
              >
                {ctaText}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
