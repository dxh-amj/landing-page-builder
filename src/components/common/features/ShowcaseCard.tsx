import React from "react";
import Badge from "../../ui/Badge";
import { ChevronRightIcon } from "../../common/icons";

export interface ShowcaseCardData {
  title: string;
  description: string;
  imageSrc: string;
  badgeText: string;
  buttonText?: string;
  layout?: "vertical" | "horizontal";
}

export interface ShowcaseCardProps extends ShowcaseCardData {
  primaryColor?: string;
  buttonRadius?: string;
  badgeBackground?: string;
  badgeTextColor?: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  description,
  imageSrc,
  badgeText,
  buttonText = "Explore",
  layout = "vertical",
  primaryColor = "#1E4ED8",
  buttonRadius = "8px",
  badgeBackground,
  badgeTextColor,
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
            textColor={badgeTextColor || primaryColor}
            backgroundColor={badgeBackground}
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

export default ShowcaseCard;
