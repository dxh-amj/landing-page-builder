import React from "react";
import Button from "@/components/ui/Button";

interface RestaurantHeroProps {
  heading?: string;
  body?: string;
  reserveBtnText?: string;
  menuBtnText?: string;
  primaryColor?: string;
  buttonRadius?: string;
}

export default function RestaurantHero({
  heading = "Delicious food, crafted with passion.",
  body = "Wholesome meals prepared with care, quality ingredients, and authentic halal standards.",
  reserveBtnText = "Reserve a Table",
  menuBtnText = "View Menu",
  primaryColor = "#EA580C",
  buttonRadius = "100px",
}: RestaurantHeroProps) {
  return (
    <div className="w-full bg-white relative min-h-[100dvh] lg:h-[100dvh] lg:overflow-hidden">
      {/* Hero Section */}
      <section className="w-full px-8 md:px-16 lg:px-20 pt-24 pb-12 lg:py-0 lg:absolute lg:inset-0 lg:pt-20">
        <div className="h-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 h-auto lg:h-full">
            {/* Left Column - Content */}
            <div className="flex-1 flex flex-col justify-center gap-8 w-full lg:max-w-[50%]">
              <div className="flex flex-col gap-6 max-w-[560px]">
                {/* Heading */}
                {/* Heading */}
                <h1 className="text-[60px] font-semibold leading-[120%] tracking-[-0.6px] text-[#0A0A0A]">
                  {heading}
                </h1>

                {/* Description */}
                <p className="text-base font-normal leading-[150%] text-[#0A0A0A]">
                  {body}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  className="px-5 py-2.5 text-white font-semibold text-base transition-all hover:brightness-110"
                  style={{
                    backgroundColor: primaryColor,
                    borderRadius: buttonRadius,
                  }}
                >
                  {reserveBtnText}
                </Button>
                <Button
                  className="px-5 py-2.5 bg-transparent border font-semibold text-base transition-all hover:!text-white hover:!bg-[var(--hover-bg)] hover:!border-[var(--hover-bg)]"
                  style={
                    {
                      "--hover-bg": primaryColor,
                      borderColor: primaryColor,
                      color: primaryColor,
                      borderRadius: buttonRadius,
                    } as React.CSSProperties
                  }
                >
                  {menuBtnText}
                </Button>
              </div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="flex-1 w-full h-[500px] lg:h-full relative overflow-hidden">
              <div className="flex gap-6 h-full justify-center">
                {/* First Column */}
                <div className="flex-1 flex flex-col gap-4 animate-scroll-up">
                  <img
                    src="/images/restaurant/1.jpg"
                    alt="Delicious noodle dish"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0"
                  />
                  <img
                    src="/images/restaurant/4.jpg"
                    alt="Biryani rice platter"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0"
                  />
                  <img
                    src="/images/restaurant/5.jpg"
                    alt="Savory rice dish"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0"
                  />
                  {/* Duplicate for infinite scroll effect */}
                  <img
                    src="/images/restaurant/1.jpg"
                    alt="Delicious noodle dish"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0 hidden lg:block"
                    aria-hidden="true"
                  />
                  <img
                    src="/images/restaurant/4.jpg"
                    alt="Biryani rice platter"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0 hidden lg:block"
                    aria-hidden="true"
                  />
                  <img
                    src="/images/restaurant/5.jpg"
                    alt="Savory rice dish"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0 hidden lg:block"
                    aria-hidden="true"
                  />
                </div>

                {/* Second Column */}
                <div className="flex-1 flex flex-col gap-4 animate-scroll-down">
                  <img
                    src="/images/restaurant/2.jpg"
                    alt="Flaming wok cooking"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0"
                  />
                  <img
                    src="/images/restaurant/3.jpg"
                    alt="Savory rice dish"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0"
                  />
                  <img
                    src="/images/restaurant/6.jpg"
                    alt="Traditional meat stew"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0"
                  />
                  {/* Duplicate for infinite scroll effect */}
                  <img
                    src="/images/restaurant/2.jpg"
                    alt="Flaming wok cooking"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0 hidden lg:block"
                    aria-hidden="true"
                  />
                  <img
                    src="/images/restaurant/3.jpg"
                    alt="Savory rice dish"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0 hidden lg:block"
                    aria-hidden="true"
                  />
                  <img
                    src="/images/restaurant/6.jpg"
                    alt="Traditional meat stew"
                    className="w-[160px] h-[170px] lg:w-[312px] lg:h-[280px] object-cover rounded-lg flex-shrink-0 hidden lg:block"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
