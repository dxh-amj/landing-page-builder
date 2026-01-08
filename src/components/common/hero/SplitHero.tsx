import React from "react";
import Button from "@/components/ui/Button";

export interface SplitHeroProps {
  // Content
  heading: React.ReactNode;
  body: string;
  // Primary Color (drives CTA buttons)
  primaryColor: string;
  // Typography (optional - has sensible defaults)
  headingStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  // Background
  bgClassName?: string;
  // Image
  sideImage: string;
  imageAlt?: string;
  // CTA
  primaryCtaText?: string;
  secondaryCtaText?: string;
  buttonRadius?: string;
  // Decorative
  showDecorativeElements?: boolean;
}

/**
 * SplitHero - Split layout with text left, image right
 *
 * Layout:
 * ┌───────────────────┬────────────────────┐
 * │   [Heading]       │                    │
 * │   [Body]          │   [Side Image]     │
 * │   [CTAs]          │                    │
 * └───────────────────┴────────────────────┘
 *
 * Pass primaryColor for CTA buttons, optionally override typography.
 */
export default function SplitHero({
  heading,
  body,
  primaryColor,
  headingStyle = {
    fontSize: "var(--Text-Sizes-Heading-3, 48px)",
    fontWeight: 600,
    lineHeight: "120%",
    letterSpacing: "-0.48px",
    color: "#0A0A0A",
  },
  bodyStyle = {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "150%",
    color: "#6B7280",
  },
  bgClassName = "bg-white",
  sideImage,
  imageAlt = "Hero Image",
  primaryCtaText = "Get Started",
  secondaryCtaText = "Learn More",
  buttonRadius = "12px",
  showDecorativeElements = false,
}: SplitHeroProps) {
  return (
    <section
      className={`min-h-screen ${bgClassName} flex items-center pt-24 pb-12 overflow-hidden`}
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 flex flex-col gap-8 lg:block">
          <h1 style={headingStyle} className="max-w-xl lg:mb-6">
            {heading}
          </h1>
          <p style={bodyStyle} className="max-w-lg">
            {body}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4 lg:mt-8">
            <Button
              variant="primary"
              size="md"
              className="font-medium text-white px-8 h-12 hover:brightness-110 transition-all duration-300"
              style={{
                backgroundColor: primaryColor,
                borderRadius: buttonRadius,
              }}
            >
              {primaryCtaText}
            </Button>
            <Button
              variant="outline"
              size="md"
              className="font-medium px-8 h-12 bg-transparent border transition-all duration-300 hover:!text-white hover:!bg-[var(--hover-bg)] hover:!border-[var(--hover-bg)]"
              style={
                {
                  "--hover-bg": primaryColor,
                  borderColor: primaryColor,
                  color: primaryColor,
                  borderRadius: buttonRadius,
                } as React.CSSProperties
              }
            >
              {secondaryCtaText}
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3]">
            <img
              src={sideImage}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          {showDecorativeElements && (
            <>
              <div
                className="absolute -top-12 -right-12 w-64 h-64 blur-[80px] rounded-full"
                style={{ backgroundColor: `${primaryColor}20` }}
              />
              <div
                className="absolute -bottom-12 -left-12 w-64 h-64 blur-[80px] rounded-full"
                style={{ backgroundColor: `${primaryColor}10` }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
