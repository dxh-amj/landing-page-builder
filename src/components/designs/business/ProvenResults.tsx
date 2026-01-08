import React from "react";
import {
  BusinessChipIcon,
  FoundationIcon,
  ChevronRightIcon,
} from "../../common/icons";
import Button from "../../ui/Button";

interface ProvenResultsProps {
  primaryColor?: string;
  backgroundColor?: string;
  imageSrc?: string;
}

const ProvenResults: React.FC<ProvenResultsProps> = ({
  primaryColor = "#1E4ED8",
  backgroundColor = "#FFFFFF",
  imageSrc = "/images/about/proven-results.png",
}) => {
  return (
    <section className="py-28" style={{ backgroundColor }}>
      <div className="container mx-auto px-6 flex flex-col gap-20">
        {/* Content Row */}
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
                About
              </span>
            </div>

            {/* Heading */}
            <h2 className="self-stretch text-[#0A0A0A] text-[60px] font-semibold leading-[120%] tracking-[-0.6px]">
              Built on proven methods and real results
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start gap-8 flex-1 lg:max-w-[calc(50%-40px)]">
            <div className="flex flex-col items-start gap-8 self-stretch">
              <p className="self-stretch text-[#0A0A0A] text-lg font-normal leading-[150%]">
                We work with companies that want to move fast and think clearly.
                Our approach combines market insight with practical execution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 self-stretch">
                {/* List Item 1 */}
                <div className="flex flex-col py-2 items-start gap-4 self-stretch">
                  <BusinessChipIcon className="w-12 h-12" fill="#0A0A0A" />
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <h3 className="self-stretch text-[#0A0A0A] text-2xl font-normal leading-[140%] tracking-[-0.24px]">
                      Proven track record
                    </h3>
                    <p className="self-stretch text-[#0A0A0A] text-lg font-normal leading-[150%]">
                      Over a decade of delivering measurable outcomes for
                      businesses across Bangladesh and beyond.
                    </p>
                  </div>
                </div>

                {/* List Item 2 */}
                <div className="flex flex-col py-2 items-start gap-4 self-stretch">
                  <FoundationIcon className="w-12 h-12" fill="#0A0A0A" />
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <h3 className="self-stretch text-[#0A0A0A] text-2xl font-normal leading-[140%] tracking-[-0.24px]">
                      Our foundation
                    </h3>
                    <p className="self-stretch text-[#0A0A0A] text-lg font-normal leading-[150%]">
                      Built on client trust, technical excellence, and a
                      commitment to solving real problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                className="group transition-all duration-300 hover:!text-white hover:!bg-[var(--hover-bg)] hover:!border-[var(--hover-bg)]"
                style={
                  {
                    borderColor: primaryColor,
                    color: primaryColor,
                    "--hover-bg": primaryColor,
                  } as React.CSSProperties
                }
              >
                Learn more
              </Button>

              <a
                href="#"
                className="flex justify-center items-center gap-1 rounded-full group"
              >
                <span className="text-[#0A0A0A] text-lg font-semibold leading-[150%] group-hover:underline">
                  Contact us
                </span>
                <ChevronRightIcon className="w-6 h-6 text-[#0A0A0A] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[738px] rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt="Proven results working environment"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
