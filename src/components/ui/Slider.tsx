// components/ui/Slider.tsx
"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SliderProps<T> {
  data: T[];
  renderSlide: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  showButtons?: boolean;
  showBullets?: boolean;
  breakpoints?: { [width: number]: number };
}

export function Slider<T>({
  data,
  renderSlide,
  slidesPerView = 1,
  spaceBetween = 20,
  loop = false,
  autoplay = false,
  autoplayDelay = 3000,
  showButtons = true,
  showBullets = true,
  breakpoints,
}: SliderProps<T>) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<number | null>(null);
  
  // Initialize with the correct start index
  const [currentIndex, setCurrentIndex] = useState(loop ? slidesPerView : 0);
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(slidesPerView);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalSlides = data.length;

  // Memoize the slides to prevent hydration mismatches and unnecessary recalculations
  const trackSlides = useMemo(() => {
    if (!loop) return data;
    // Pad the start and end for infinite looping
    return [
      ...data.slice(-currentSlidesPerView),
      ...data,
      ...data.slice(0, currentSlidesPerView),
    ];
  }, [data, loop, currentSlidesPerView]);

  const slideWidth = 100 / currentSlidesPerView;

  // Responsive slidesPerView Logic
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (!breakpoints) return setCurrentSlidesPerView(slidesPerView);
      const width = window.innerWidth;
      const sortedPoints = Object.keys(breakpoints)
        .map(Number)
        .sort((a, b) => a - b);
      
      let matched = slidesPerView;
      for (const point of sortedPoints) {
        if (width >= point) matched = breakpoints[point];
      }
      
      // Update state and adjust index if strictly necessary to prevent layout jumps
      setCurrentSlidesPerView(matched);
    };
    
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [breakpoints, slidesPerView]);

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide]);

  // Autoplay Logic
  useEffect(() => {
    if (!autoplay) return;
    // Clear existing interval to prevent overlapping timers
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    
    // Explicitly cast setInterval to number to resolve the type mismatch
    autoplayRef.current = setInterval(nextSlide, autoplayDelay) as unknown as number;
    
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [currentIndex, autoplay, autoplayDelay, nextSlide]);

  // Infinite Loop Reset Logic (The "Snap Back")
  useEffect(() => {
    if (!loop) return;

    const handleTransitionEnd = () => {
      const sliderEl = sliderRef.current;
      if (!sliderEl) return;

      if (currentIndex >= totalSlides + currentSlidesPerView) {
        // We are at the cloned end, jump to the real start
        setIsTransitioning(false);
        setCurrentIndex(currentSlidesPerView); 
      } else if (currentIndex < currentSlidesPerView) {
        // We are at the cloned start, jump to the real end
        setIsTransitioning(false);
        setCurrentIndex(totalSlides + currentSlidesPerView - 1);
      }
    };

    const sliderEl = sliderRef.current;
    sliderEl?.addEventListener("transitionend", handleTransitionEnd);
    return () => sliderEl?.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, loop, totalSlides, currentSlidesPerView]);

  // Re-enable transition after a snap-back
  useEffect(() => {
    if (!isTransitioning) {
        // Force a reflow to ensure the browser processes the "no-transition" state
        // before re-enabling it for the next user interaction
        const sliderEl = sliderRef.current;
        if(sliderEl) void sliderEl.offsetWidth; 
        
        // Use a micro-timeout to re-enable transitions
        requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  return (
    <div className="w-full relative group">
      {/* Slider Window (Overflow Hidden) */}
      <div className="overflow-hidden w-full">
        {/* Slider Track */}
        <div
          ref={sliderRef}
          className={clsx(
            "flex w-full", // w-full is CRITICAL here for percentages to work relative to viewport
            isTransitioning ? "transition-transform duration-500 ease-in-out" : "transition-none"
          )}
          style={{
            transform: `translateX(-${currentIndex * slideWidth}%)`,
          }}
        >
          {trackSlides.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0" // Prevent slides from squashing
              style={{
                width: `${slideWidth}%`,
                paddingRight: `${spaceBetween}px`,
                boxSizing: "border-box",
              }}
            >
              {renderSlide(item, i)}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8 px-2">
        {/* Bullets */}
        {showBullets && (
          <div className="flex gap-2">
            {data.map((_, i) => {
              // Calculate visual active index for the loop
              let activeState = false;
              if (loop) {
                 const realIndex = currentIndex - currentSlidesPerView;
                 // Handle bounds for active state visualization
                 if (realIndex === i) activeState = true;
                 if (realIndex < 0 && i === totalSlides - 1) activeState = true; // Transitioning from 0 to end
                 if (realIndex >= totalSlides && i === 0) activeState = true; // Transitioning from end to 0
              } else {
                 activeState = currentIndex === i;
              }

              return (
                <button
                  key={i}
                  onClick={() => {
                    setIsTransitioning(true);
                    goToSlide(loop ? i + currentSlidesPerView : i);
                  }}
                  className={clsx(
                    "w-2.5 h-2.5 rounded-full transition-colors duration-300",
                    activeState ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>
        )}

        {/* Arrows */}
        {showButtons && (
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors bg-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors bg-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}