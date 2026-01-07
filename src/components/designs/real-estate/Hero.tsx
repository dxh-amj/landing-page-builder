import React from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const headingStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "var(--Text-Sizes-Heading-3, 48px)",
    fontWeight: 600,
    lineHeight: "120%",
    letterSpacing: "-0.48px",
    color: "var(--Background-background-500, #FFF)",
  };

  const bodyStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "150%",
    color: "var(--Background-background-500, #FFF)",
  };

  return (
    <section className="min-h-screen bg-[#0A0A0A] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 flex flex-col gap-8 lg:block">
          <h1 style={headingStyle} className="max-w-xl lg:mb-6">
            Find the perfect property <br />
            with confidence
          </h1>
          <p style={bodyStyle} className="max-w-lg">
            We help buyers and investors find the best properties with expert
            guidance. Our transparent process makes every step simple and
            secure.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4 lg:mt-8">
            <Button
              variant="primary"
              size="md"
              className="bg-emerald-500 hover:bg-emerald-600 border-none text-white px-8 h-12 rounded-xl font-medium"
            >
              Schedule a Viewing
            </Button>
            <Button
              variant="outline"
              size="md"
              className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 px-8 h-12 rounded-xl font-medium"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3]">
            <img
              src="/images/real_estate_hero.png"
              alt="Luxury Estate"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
