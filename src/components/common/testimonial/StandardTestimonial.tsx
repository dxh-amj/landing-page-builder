"use client";

import React, { useCallback } from "react";
import { Slider } from "@/components/ui/Slider"; // Adjust path as needed
import { Star } from "lucide-react";

// Define the shape of a single testimonial item
export interface TestimonialItem {
  id: number | string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

// Define the props for the component
interface StandardTestimonialProps {
  heading?: string;
  subheading?: string;
  testimonials: TestimonialItem[];
  primaryColor?: string; // Optional: to match your theme
  backgroundColor?: string;
}

export default function StandardTestimonial({
  heading = "What clients say",
  subheading = "Hear from the teams we've worked with",
  testimonials,
  primaryColor = "#2563EB",
  backgroundColor = "#FFFFFF",
}: StandardTestimonialProps) {
  
  // Use callback to keep the function reference stable across renders
  const renderCard = useCallback((item: TestimonialItem) => (
    <div 
      className="h-full border border-gray-100 rounded-lg p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)] bg-white flex flex-col justify-between select-none"
      style={{ borderColor: "#F3F4F6" }} // Fallback/default border
    >
      <div>
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < item.rating ? "black" : "none"} // Fill based on rating
              className={i < item.rating ? "text-black" : "text-gray-300"}
              strokeWidth={0}
            />
          ))}
        </div>
        {/* Content */}
        <p className="text-gray-800 text-lg leading-relaxed mb-8 font-normal">
          {item.content}
        </p>
      </div>

      {/* Author Profile */}
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-gray-900 text-base">{item.name}</h4>
          <p className="text-sm text-gray-500">{item.role}</p>
        </div>
      </div>
    </div>
  ), []);

  return (
    <section 
      className="py-16 px-4 w-full text-[#0A0A0A]"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-[60px] font-semibold mb-2 md:text-left text-center">{heading}</h2>
          <p className="text-gray-600 text-lg md:text-left text-center">
            {subheading}
          </p>
        </div>

        <Slider
          data={testimonials}
          renderSlide={renderCard}
          slidesPerView={3}
          spaceBetween={24}
          loop={true}
          autoplay={true}
          autoplayDelay={4000}
          showButtons={true}
          showBullets={true}
          breakpoints={{
            0: 1,    // Ensure mobile starts at 1
            768: 2,  
            1024: 3, 
          }}
        />
      </div>
    </section>
  );
}