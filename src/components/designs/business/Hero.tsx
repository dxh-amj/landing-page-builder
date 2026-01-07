import React from "react";
import Button from "@components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/business-hero-image.png"
          alt="Business Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-['Inter'] text-[36px] md:text-[length:var(--Text-Sizes-Heading-2,60px)] font-semibold leading-[1.3] md:leading-[1.2] tracking-[-0.01em] md:tracking-[-0.01em] text-[color:var(--Background-background-500,#FFF)] md:text-[color:var(--Text-text-50,#E7E7E7)] mb-8">
            Powering Businesses <br className="hidden md:block" />
            With Intelligent Digital <br className="hidden md:block" />
            Solutions
          </h1>
          <p className="font-['Inter'] text-[16px] md:text-[18px] font-normal leading-[1.5] text-[color:var(--Background-background-500,#FFF)] md:text-[color:var(--Text-text-50,#E7E7E7)] mb-10 max-w-2xl mx-auto">
            From strategy to execution, we design and build technology that
            drives growth, efficiency, and long-term success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto font-medium shadow-lg hover:shadow-xl"
              >
                Get Started
              </Button>
              <Button
                variant="glass"
                size="md"
                className="w-full sm:w-auto font-medium"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
