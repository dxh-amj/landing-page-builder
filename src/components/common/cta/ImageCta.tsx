import Button from "@/components/ui/Button";

interface ImageCtaProps {
  title: string;
  description: string;
  primaryActionText: string;
  secondaryActionText: string;
  imageUrl: string;
  primaryColor?: string;
  secondaryColor?: string;
  buttonRadius?: string;
}

export default function ImageCta({
  title,
  description,
  primaryActionText,
  secondaryActionText,
  imageUrl,
  primaryColor = "#EA580C",
  secondaryColor = "#FFFFFF",
  buttonRadius = "100px",
}: ImageCtaProps) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center relative bg-cover bg-center bg-no-repeat px-5 md:px-20 py-16 lg:py-28"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-[768px] font-semibold text-white">
          {title}
        </h1>
        <p className="text-base lg:text-lg max-w-[768px] mx-auto text-white/90 mt-5 mb-8">
          {description}
        </p>
        <div className="flex items-center justify-center gap-4">
          {/* Primary Button */}
          <Button
            className="px-5 py-2.5 text-white font-semibold hover:opacity-90"
            style={{
              backgroundColor: primaryColor,
              borderRadius: buttonRadius,
            }}
          >
            {primaryActionText}
          </Button>
          {/* Secondary Button - fills with primaryColor on hover */}
          <Button
            className="px-5 py-2.5 bg-transparent border font-semibold transition-all hover:!text-white hover:!bg-[var(--hover-bg)] hover:!border-[var(--hover-bg)]"
            style={
              {
                "--hover-bg": primaryColor,
                borderColor: secondaryColor,
                color: secondaryColor,
                borderRadius: buttonRadius,
              } as React.CSSProperties
            }
          >
            {secondaryActionText}
          </Button>
        </div>
      </div>
    </div>
  );
}
