// components/ui/Slider.tsx
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

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
  spaceBetween = 10,
  loop = false,
  autoplay = false,
  autoplayDelay = 3000,
  showButtons = true,
  showBullets = true,
  breakpoints,
}: SliderProps<T>) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(loop ? slidesPerView : 0);
  const [currentSlidesPerView, setCurrentSlidesPerView] =
    useState(slidesPerView);

  const totalSlides = data.length;
  const trackSlides = loop
    ? [
        ...data.slice(-currentSlidesPerView),
        ...data,
        ...data.slice(0, currentSlidesPerView),
      ]
    : data;

  const slideWidth = 100 / currentSlidesPerView;

  // Responsive slidesPerView
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (!breakpoints) return setCurrentSlidesPerView(slidesPerView);
      const width = window.innerWidth;
      let matched = slidesPerView;
      Object.keys(breakpoints).forEach((w) => {
        if (width >= Number(w)) matched = breakpoints[Number(w)];
      });
      setCurrentSlidesPerView(matched);
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [breakpoints, slidesPerView]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    autoplayRef.current = window.setInterval(nextSlide, autoplayDelay);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [currentIndex, autoplay, autoplayDelay]);

  // Loop reset
  useEffect(() => {
    if (!loop) return;

    const handleTransitionEnd = () => {
      if (currentIndex >= totalSlides + currentSlidesPerView) {
        setCurrentIndex(currentSlidesPerView);
      } else if (currentIndex < currentSlidesPerView) {
        setCurrentIndex(totalSlides + currentSlidesPerView - 1);
      }
    };

    const sliderEl = sliderRef.current;
    sliderEl?.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      sliderEl?.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, loop, totalSlides, currentSlidesPerView]);

  // Swipe / Drag support
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef<number>(0);

  const handleMouseDown = (e: React.MouseEvent) =>
    (dragStartX.current = e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    dragDelta.current = e.clientX - dragStartX.current;
  };
  const handleMouseUp = () => {
    if (dragDelta.current > 50) prevSlide();
    else if (dragDelta.current < -50) nextSlide();
    dragStartX.current = null;
    dragDelta.current = 0;
  };

  const handleTouchStart = (e: React.TouchEvent) =>
    (dragStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    dragDelta.current = e.touches[0].clientX - dragStartX.current;
  };
  const handleTouchEnd = () => {
    if (dragDelta.current > 50) prevSlide();
    else if (dragDelta.current < -50) nextSlide();
    dragStartX.current = null;
    dragDelta.current = 0;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className={clsx("flex transition-transform duration-500 ease-in-out")}
        style={{
          transform: `translateX(-${
            currentIndex * (slideWidth + spaceBetween / currentSlidesPerView)
          }%)`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {trackSlides.map((item, i) => (
          <div
            key={i}
            style={{
              flex: `0 0 ${slideWidth}%`,
              marginRight: i !== trackSlides.length - 1 ? spaceBetween : 0,
            }}
          >
            {renderSlide(item, i)}
          </div>
        ))}
      </div>

      {showButtons && (
        <>
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded"
            onClick={prevSlide}
          >
            Prev
          </button>
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded"
            onClick={nextSlide}
          >
            Next
          </button>
        </>
      )}

      {showBullets && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {data.map((_, i) => {
            const activeIndex = loop
              ? currentIndex - currentSlidesPerView
              : currentIndex;
            return (
              <button
                key={i}
                onClick={() => goToSlide(loop ? i + currentSlidesPerView : i)}
                className={clsx(
                  "w-3 h-3 rounded-full",
                  activeIndex === i ? "bg-blue-500" : "bg-gray-300"
                )}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
