import React from "react";
import Badge from "@/components/ui/Badge";

export interface ContactInfoItem {
  icon?: React.ElementType;
  title: string;
  description: string;
  action?: {
    label?: string;
    href: string;
    type: "link" | "button";
    icon?: React.ElementType;
  };
}

export interface StandardContactProps {
  tagline?: string;
  heading?: string;
  description?: string;
  contactInfo: ContactInfoItem[];
  imageSrc: string;
  imageAlt?: string;
  primaryColor?: string;
  buttonRadius?: string;
  taglineBackgroundColor?: string;
  taglineTextColor?: string;
  sectionClassName?: string;
}

export default function StandardContact({
  tagline = "Reach us",
  heading = "Get in touch",
  description,
  contactInfo,
  imageSrc,
  imageAlt = "Contact us",
  primaryColor = "#EA580C",
  buttonRadius = "100px",
  taglineBackgroundColor = "linear-gradient(95deg, rgba(255, 207, 182, 0.30) -26.16%, rgba(255, 169, 125, 0.70) 142.98%)",
  taglineTextColor,
  sectionClassName = "bg-white",
}: StandardContactProps) {
  return (
    <section
      className={`py-28 px-8 md:px-16 lg:px-20 overflow-hidden relative ${sectionClassName}`}
    >
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Content Side */}
        <div className="flex-1 flex flex-col gap-20">
          {/* Section Title */}
          <div className="max-w-3xl flex flex-col items-start gap-4">
            <Badge
              text={tagline}
              textColor={taglineTextColor || primaryColor}
              backgroundColor={taglineBackgroundColor}
            />

            <div className="flex flex-col gap-6">
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.2] tracking-tight text-[#0A0A0A]">
                {heading}
              </h2>
              {description && (
                <p className="text-lg text-[#0A0A0A] leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="flex flex-col gap-[30px]">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-4 max-w-[400px]"
              >
                {item.icon && <item.icon />}
                <div
                  className={`flex flex-col ${
                    item.action?.type === "button" ? "gap-4" : "gap-2"
                  }`}
                >
                  {item.action?.type === "button" ? (
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-semibold tracking-tight text-[#0A0A0A]">
                        {item.title}
                      </h3>
                      <p className="text-lg text-[#0A0A0A]">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-semibold tracking-tight text-[#0A0A0A]">
                        {item.title}
                      </h3>
                      <p className="text-lg text-[#0A0A0A]">
                        {item.description}
                      </p>
                    </>
                  )}

                  {item.action &&
                    (item.action.type === "button" ? (
                      <a
                        href={item.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit flex items-center gap-2 text-lg font-semibold text-[#0A0A0A] hover:opacity-80 transition-opacity"
                      >
                        <span>{item.action.label}</span>
                        {item.action.icon && <item.action.icon />}
                      </a>
                    ) : (
                      <a
                        href={item.action.href}
                        className="text-lg text-[#0A0A0A] underline decoration-solid underline-offset-4"
                      >
                        {item.action.label || item.action.href}
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Side */}
        <div className="flex-1 w-full flex items-center justify-center">
          <img
            className="w-full h-[516px] object-cover rounded-2xl shadow-xl"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
      </div>
    </section>
  );
}
