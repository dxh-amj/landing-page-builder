import React from "react";
import Badge from "../../ui/Badge";
import ShowcaseCard, { type ShowcaseCardData } from "./ShowcaseCard";

interface FeatureShowcaseProps {
  primaryColor?: string;
  backgroundColor?: string;
  buttonRadius?: string;
  tagline: string;
  heading: string;
  description: string;
  features: ShowcaseCardData[];
  badgeBackground?: string;
  badgeTextColor?: string;
}

// Feature Showcase Component
const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  primaryColor,
  backgroundColor,
  buttonRadius,
  tagline,
  heading,
  description,
  features,
  badgeBackground,
  badgeTextColor,
}) => {
  // Separate vertical (main) and horizontal (secondary) cards
  const mainFeature =
    features.find((f) => f.layout === "vertical") || features[0];
  const secondaryFeatures = features.filter((f) => f !== mainFeature);

  return (
    <section className="py-16 md:py-28" style={{ backgroundColor }}>
      <div className="container mx-auto px-6 flex flex-col gap-16 md:gap-20">
        {/* Section Header */}
        <header className="flex flex-col items-center gap-4 max-w-3xl mx-auto text-center">
          <Badge
            text={tagline}
            textColor={badgeTextColor || primaryColor}
            backgroundColor={badgeBackground}
          />
          <h2 className="text-gray-900 text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            {heading}
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </header>

        {/* Feature Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Main Feature (Large/Vertical) */}
          {mainFeature && (
            <div className="lg:w-1/2">
              <ShowcaseCard
                {...mainFeature}
                primaryColor={primaryColor}
                buttonRadius={buttonRadius}
                badgeBackground={badgeBackground}
                badgeTextColor={badgeTextColor}
              />
            </div>
          )}

          {/* Secondary Features (Horizontal) - Stacked Column */}
          <div className="lg:w-1/2 flex flex-col gap-6 md:gap-8">
            {secondaryFeatures.map((feature, index) => (
              <ShowcaseCard
                key={index}
                {...feature}
                primaryColor={primaryColor}
                buttonRadius={buttonRadius}
                badgeBackground={badgeBackground}
                badgeTextColor={badgeTextColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
