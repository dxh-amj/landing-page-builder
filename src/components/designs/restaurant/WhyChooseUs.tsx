import React from "react";
import { ChevronRight } from "lucide-react";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import { RestaurantFeatureIcon } from "../../common/icons";

interface WhyChooseUsProps {
  primaryColor?: string;
  badgeBackground?: string;
  badgeTextColor?: string;
  buttonRadius?: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  primaryColor = "#EA580C",
  badgeBackground = "linear-gradient(95deg, rgba(255, 207, 182, 0.30) -26.16%, rgba(255, 169, 125, 0.70) 142.98%)",
  badgeTextColor,
  buttonRadius = "100px",
}) => {
  const finalBadgeTextColor = badgeTextColor || primaryColor;

  return (
    <section className="py-28 bg-[#FDEEE7] flex flex-col items-center gap-20 overflow-hidden relative">
      <div className="container mx-auto px-6 flex flex-col items-center gap-20">
        {/* Section Title */}
        <div className="flex flex-col items-center gap-4 max-w-3xl text-center">
          <Badge
            text="Why choose us"
            textColor={finalBadgeTextColor}
            backgroundColor={badgeBackground}
          />
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-[#0A0A0A] text-4xl md:text-6xl font-semibold leading-tight tracking-tight font-poppins">
              What makes us different
            </h2>
            <p className="text-[#0A0A0A] text-lg font-normal leading-relaxed font-poppins">
              Discover the qualities that set our restaurant apart from the
              rest.
            </p>
          </div>
        </div>

        {/* Grid Row */}
        <div className="flex flex-col lg:flex-row gap-8 w-full items-stretch">
          {/* Large Card - Hygiene */}
          <div
            className="flex flex-col justify-center items-start gap-8 p-6 md:p-12 rounded-2xl bg-cover bg-center bg-no-repeat w-full lg:w-1/2 relative overflow-hidden group min-h-[500px]"
            style={{
              backgroundImage: "url('/images/restaurant/hygiene.jpg')",
              backgroundColor: "lightgray",
            }}
          >
            <div className="absolute inset-0 bg-black/40 md:bg-black/60 z-0"></div>

            <div className="relative z-10 flex flex-col items-start gap-2 w-full">
              <div className="flex px-4 py-2 justify-center items-center gap-2 rounded-full bg-[#FDEEE7]">
                <span
                  className="text-xs font-semibold font-poppins leading-normal"
                  style={{ color: primaryColor }}
                >
                  Hygiene
                </span>
              </div>
              <div className="flex flex-col items-start gap-6 self-stretch">
                <h3 className="text-white text-3xl md:text-5xl font-semibold leading-tight tracking-tight font-poppins">
                  Strict kitchen standards and safety protocols
                </h3>
                <p className="text-white text-base font-normal leading-normal font-poppins">
                  We maintain the highest levels of cleanliness and safety in
                  our kitchen to ensure your well-being.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-nowrap items-center gap-4">
              <Button
                className="px-5 py-2.5 bg-transparent border font-semibold transition-all hover:!text-white hover:!bg-[var(--hover-bg)] hover:!border-[var(--hover-bg)] whitespace-nowrap"
                style={
                  {
                    "--hover-bg": primaryColor,
                    borderColor: "white",
                    color: "white",
                    borderRadius: buttonRadius,
                  } as React.CSSProperties
                }
              >
                Learn More
              </Button>
              <button
                className="flex justify-center items-center gap-1 rounded-full group/btn cursor-pointer transition-colors"
                style={
                  {
                    "--hover-color": primaryColor,
                  } as React.CSSProperties
                }
              >
                <span className="text-white text-lg font-semibold font-poppins group-hover/btn:text-[var(--hover-color)] transition-colors whitespace-nowrap">
                  Contact us
                </span>
                <ChevronRight className="w-6 h-6 text-white transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-[var(--hover-color)]" />
              </button>
            </div>
          </div>

          {/* Right Column - Side-by-Side Cards */}
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-1/2">
            {/* Card - Speed */}
            <div
              className="flex flex-col p-6 md:p-8 justify-between items-start flex-1 rounded-2xl bg-cover bg-center bg-no-repeat relative overflow-hidden"
              style={{
                backgroundImage: "url('/images/restaurant/speed.jpg')",
                backgroundColor: "lightgray",
              }}
            >
              <div className="absolute inset-0 bg-black/40 md:bg-black/60 z-0"></div>
              <div className="relative z-10 flex flex-col items-start gap-4 self-stretch">
                <RestaurantFeatureIcon fill={primaryColor} />
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <h3 className="text-white text-3xl font-semibold leading-tight tracking-tight font-poppins">
                    Speed
                  </h3>
                  <p className="text-white text-lg font-normal leading-normal font-poppins">
                    Fast delivery without compromising quality
                  </p>
                </div>
              </div>
              <div className="relative z-10 flex items-center gap-6 mt-6">
                <button
                  className="flex justify-center items-center gap-1 rounded-full group/btn cursor-pointer transition-colors"
                  style={
                    {
                      "--hover-color": primaryColor,
                    } as React.CSSProperties
                  }
                >
                  <span className="text-white text-lg font-semibold font-poppins group-hover/btn:text-[var(--hover-color)] transition-colors">
                    Learn more
                  </span>
                  <ChevronRight className="w-6 h-6 text-white transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-[var(--hover-color)]" />
                </button>
              </div>
            </div>

            {/* Card - Quality */}
            <div
              className="flex flex-col p-6 md:p-8 justify-between items-start flex-1 rounded-2xl bg-cover bg-center bg-no-repeat relative overflow-hidden"
              style={{
                backgroundImage: "url('/images/restaurant/quality.jpg')",
                backgroundColor: "lightgray",
              }}
            >
              <div className="absolute inset-0 bg-black/40 md:bg-black/60 z-0"></div>
              <div className="relative z-10 flex flex-col items-start gap-4 self-stretch">
                <RestaurantFeatureIcon fill={primaryColor} />
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <h3 className="text-white text-3xl font-semibold leading-tight tracking-tight font-poppins">
                    Quality
                  </h3>
                  <p className="text-white text-lg font-normal leading-normal font-poppins">
                    Fresh ingredients sourced daily
                  </p>
                </div>
              </div>
              <div className="relative z-10 flex items-center gap-6 mt-6">
                <button
                  className="flex justify-center items-center gap-1 rounded-full group/btn cursor-pointer transition-colors"
                  style={
                    {
                      "--hover-color": primaryColor,
                    } as React.CSSProperties
                  }
                >
                  <span className="text-white text-lg font-semibold font-poppins group-hover/btn:text-[var(--hover-color)] transition-colors">
                    Learn more
                  </span>
                  <ChevronRight className="w-6 h-6 text-white transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-[var(--hover-color)]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
