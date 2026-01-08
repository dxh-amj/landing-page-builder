import React from "react";
import { ChevronRightIcon } from "../../common/icons";

interface StatsSectionProps {
  primaryColor?: string;
  backgroundColor?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  primaryColor = "#1E4ED8",
  backgroundColor = "#E9EDFB",
}) => {
  return (
    <section className="py-28" style={{ backgroundColor }}>
      <div className="container mx-auto px-6 flex flex-col gap-20">
        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row items-start gap-20">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-4 flex-1 lg:max-w-[calc(50%-40px)]">
            {/* Tagline */}
            <div
              className="flex py-2 px-4 justify-center items-center gap-2 rounded-[56px] border border-transparent"
              style={{
                background:
                  "linear-gradient(95deg, rgba(162, 186, 255, 0.30) -26.16%, rgba(138, 206, 255, 0.70) 142.98%)",
              }}
            >
              <span
                className="font-semibold text-base leading-[150%]"
                style={{ color: primaryColor }}
              >
                Results
              </span>
            </div>

            {/* Heading */}
            <h2 className="self-stretch text-[#0A0A0A] text-[60px] font-semibold leading-[120%] tracking-[-0.6px]">
              Numbers that speak for themselves
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start gap-8 flex-1 lg:max-w-[calc(50%-40px)]">
            <p className="self-stretch text-[#0A0A0A] text-lg font-normal leading-[150%]">
              We measure what matters. These figures represent the scope and
              depth of work we bring to every engagement.
            </p>

            <div className="flex items-center gap-6">
              <div
                className="flex py-[6px] px-3 justify-center items-center gap-2 rounded-[100px] border bg-transparent"
                style={{ borderColor: primaryColor }}
              >
                <span className="text-[#0A0A0A] text-lg font-semibold leading-[150%]">
                  120+
                </span>
              </div>

              <a
                href="#"
                className="flex justify-center items-center gap-1 rounded-full group"
              >
                <span className="text-[#0A0A0A] text-lg font-semibold leading-[150%] group-hover:underline">
                  Projects completed
                </span>
                <ChevronRightIcon className="w-6 h-6 text-[#0A0A0A] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-col lg:flex-row items-start gap-8 self-stretch">
          {/* Column 1 */}
          <div className="flex p-8 flex-col justify-between items-start flex-1 self-stretch rounded-lg border border-[#E7E7E7] bg-white">
            <div
              className="self-stretch text-[80px] font-bold leading-[130%]"
              style={{ color: primaryColor }}
            >
              98%
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <div className="self-stretch text-[#0A0A0A] text-2xl font-semibold leading-[140%] tracking-[-0.24px]">
                Client satisfaction
              </div>
              <div className="self-stretch text-[#0A0A0A] text-lg font-normal leading-[150%]">
                Client retention across all engagements
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start gap-8 flex-1 self-stretch">
            <img
              src="/images/about/proven-results.png"
              alt="Experience"
              className="h-[270px] w-full object-cover rounded-lg"
            />
            <div className="flex p-8 flex-col items-start gap-12 self-stretch rounded-lg border border-[#E7E7E7] bg-white">
              <div
                className="self-stretch text-[80px] font-bold leading-[130%]"
                style={{ color: primaryColor }}
              >
                15
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <div className="self-stretch text-[#0A0A0A] text-2xl font-semibold leading-[140%] tracking-[-0.24px]">
                  Years of experience
                </div>
                <div className="self-stretch text-[#0A0A0A] text-lg font-normal leading-[150%]">
                  Years building trust with our partners
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start gap-8 flex-1 self-stretch">
            <div className="flex p-8 flex-col items-start gap-12 self-stretch rounded-lg border border-[#E7E7E7] bg-white">
              <div
                className="self-stretch text-[80px] font-bold leading-[130%]"
                style={{ color: primaryColor }}
              >
                50+
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <div className="self-stretch text-[#0A0A0A] text-2xl font-semibold leading-[140%] tracking-[-0.24px]">
                  Active clients
                </div>
                <div className="self-stretch text-[#0A0A0A] text-lg font-normal leading-[150%]">
                  Organizations transformed through our work
                </div>
              </div>
            </div>
            <img
              src="/images/about/proven-results.png"
              alt="Clients"
              className="h-[270px] w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
