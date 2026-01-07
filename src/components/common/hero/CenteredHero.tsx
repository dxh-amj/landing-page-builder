import React from "react";
import Button from "@/components/ui/Button";

export interface CenteredHeroProps {
  // Content
  heading: React.ReactNode;
  body: string;
  // Primary Color (drives CTA buttons)
  primaryColor: string;
  // Typography (optional - has sensible defaults)
  headingClassName?: string;
  bodyClassName?: string;
  // Background
  backgroundImage: string;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
  // CTA
  primaryCtaText?: string;
  secondaryCtaText?: string;
  buttonRadius?: string;
}

/**
 * CenteredHero - Full-width background with centered content
 *
 * Layout:
 * ┌────────────────────────────────────┐
 * │      [Background Image]            │
 * │         [Heading]                  │
 * │          [Body]                    │
 * │    [Primary CTA] [Secondary CTA]   │
 * └────────────────────────────────────┘
 *
 * Pass primaryColor for CTA buttons, optionally override typography.
 */
export default function CenteredHero({
  heading,
  body,
  primaryColor,
  headingClassName = "text-[36px] md:text-[60px] font-semibold leading-[1.3] md:leading-[1.2] tracking-[-0.01em] text-white mb-8",
  bodyClassName = "text-[16px] md:text-[18px] font-normal leading-[1.5] text-white/90 mb-10 max-w-2xl mx-auto",
  backgroundImage,
  overlayClassName = "",
  overlayStyle = {
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)",
  },
  primaryCtaText = "Get Started",
  secondaryCtaText = "Learn more",
  buttonRadius = "8px",
}: CenteredHeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 ${overlayClassName} mix-blend-multiply`}
          style={overlayStyle}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[660px] mx-auto text-center">
          <h1 className={headingClassName}>{heading}</h1>
          <p className={bodyClassName}>{body}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              className="font-medium shadow-lg hover:shadow-xl text-white"
              style={{
                backgroundColor: primaryColor,
                borderRadius: buttonRadius,
              }}
            >
              {primaryCtaText}
            </Button>
            <Button
              variant="glass"
              size="md"
              className="font-medium"
              style={{ borderRadius: buttonRadius }}
            >
              {secondaryCtaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
