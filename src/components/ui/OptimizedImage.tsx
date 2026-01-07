import React, { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  decoding?: "async" | "sync" | "auto";
  priority?: boolean;
  // Remove maxHeight from props since we'll control it via className
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  decoding = "async",
  priority = false,
  // Remove maxHeight from destructuring
  objectFit = "cover",
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <figure className={`image-container ${className}`}>
      {isLoading && (
        <div
          className="w-full h-full animate-pulse bg-gray-200 flex items-center justify-center"
          style={{ width, height }} // Use props for dimensions
        >
          <div className="spinner"></div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={decoding}
        className={`optimized-image transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        style={{
          objectFit,
          maxWidth: "100%",
          height: "auto",
          // Remove maxHeight from here
        }}
        onLoad={handleLoad}
      />
    </figure>
  );
};

export default OptimizedImage;
