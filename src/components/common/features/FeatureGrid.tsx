import React from "react";
import Badge from "../../ui/Badge";
import { ChevronRightIcon } from "../icons";

// Types
interface FeatureCardData {
  title: string;
  description: string;
  imageSrc: string;
  badgeText: string;
  buttonText?: string;
  layout?: "vertical" | "horizontal";
}

interface FeatureCardProps extends FeatureCardData {
  primaryColor?: string;
  buttonRadius?: string;
  badgeBackground?: string;
}

interface FeatureGridProps {
  primaryColor?: string;
  backgroundColor?: string;
  buttonRadius?: string;
  tagline?: string;
  heading?: string;
  description?: string;
  features?: FeatureCardData[];
  badgeBackground?: string;
}

// Default features data
const DEFAULT_FEATURES: FeatureCardData[] = [
  {
    title: "Strategy consulting",
    description:
      "We map your market, define your positioning, and chart the path forward.",
    imageSrc: "/images/features/strategy.jpg",
    badgeText: "Strategy",
    buttonText: "Learn more",
    layout: "vertical",
  },
  {
    title: "Product design",
    description:
      "Beautiful interfaces that work hard and feel right for your users.",
    imageSrc: "/images/features/design.jpg",
    badgeText: "Design",
    buttonText: "Explore",
    layout: "horizontal",
  },
  {
    title: "Team augmentation",
    description:
      "Skilled engineers who integrate seamlessly into your existing teams.",
    imageSrc: "/images/features/engineering.jpg",
    badgeText: "Engineering",
    buttonText: "Explore",
    layout: "horizontal",
  },
];

// Feature Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  badgeText,
  buttonText = "Explore",
  layout = "vertical",
  primaryColor = "#1E4ED8",
  buttonRadius = "8px",
  badgeBackground,
}) => {
  const isVertical = layout === "vertical";

  return (
    <div
      className={`group flex h-full ${
        isVertical ? "flex-col" : "flex-col sm:flex-row"
      } bg-white rounded-lg border border-gray-200 overflow-hidden`}
    >
      {/* Image */}
      <div
        className={
          isVertical
            ? "w-full h-[240px] md:h-[360px]"
            : "w-full sm:w-1/2 h-[200px] sm:h-auto"
        }
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col flex-1 p-6 md:p-10 gap-6 justify-center items-start`}
      >
        <div className="flex flex-col gap-3 items-start w-full">
          <Badge
            text={badgeText}
            textColor={primaryColor}
            backgroundColor={
              badgeBackground ||
              "linear-gradient(95deg, rgba(162, 186, 255, 0.30) -26.16%, rgba(138, 206, 255, 0.70) 142.98%)"
            }
          />
          <h3
            className={`text-gray-900 font-semibold leading-tight tracking-tight mt-2 ${
              isVertical
                ? "text-2xl md:text-4xl lg:text-5xl"
                : "text-xl md:text-2xl lg:text-3xl"
            }`}
          >
            {title}
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA Link */}
        <button
          className="flex items-center gap-1 group/btn hover:gap-2 transition-all duration-300"
          style={{ borderRadius: buttonRadius }}
        >
          <span className="text-gray-900 text-base md:text-lg font-semibold">
            {buttonText}
          </span>
          <ChevronRightIcon className="w-5 h-5 text-gray-900 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// Feature Grid Component
const FeatureGrid: React.FC<FeatureGridProps> = ({
  primaryColor = "#1E4ED8",
  backgroundColor = "#E9EDFB",
  buttonRadius = "8px",
  tagline = "Capabilities",
  heading = "What we do best",
  description = "We combine strategic thinking with hands-on execution to deliver results.",
  features = DEFAULT_FEATURES,
  badgeBackground,
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
            textColor={primaryColor}
            backgroundColor={
              badgeBackground ||
              "linear-gradient(95deg, rgba(162, 186, 255, 0.30) -26.16%, rgba(138, 206, 255, 0.70) 142.98%)"
            }
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
              <FeatureCard
                {...mainFeature}
                primaryColor={primaryColor}
                buttonRadius={buttonRadius}
                badgeBackground={badgeBackground}
              />
            </div>
          )}

          {/* Secondary Features (Horizontal) - Stacked Column */}
          <div className="lg:w-1/2 flex flex-col gap-6 md:gap-8">
            {secondaryFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                primaryColor={primaryColor}
                buttonRadius={buttonRadius}
                badgeBackground={badgeBackground}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
