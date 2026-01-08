import Button from "@/components/ui/Button";

interface SplitCtaProps {
  title: string;
  description: string;
  primaryActionText: string;
  secondaryActionText: string;
  imageUrl: string;
  imageAlt: string;
  primaryColor?: string;
  backgroundColor?: string;
  buttonRadius?: string;
}

export default function SplitCta({
  title,
  description,
  primaryActionText,
  secondaryActionText,
  imageUrl,
  imageAlt,
  primaryColor = "#1E4ED8",
  backgroundColor = "#E9EDFB",
  buttonRadius = "8px",
}: SplitCtaProps) {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20 px-5 md:px-20 py-16 lg:py-28"
      style={{ backgroundColor }}
    >
      {/* Text Content */}
      <div className="max-w-[600px]">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-[#0A0A0A]">
          {title}
        </h2>
        <p className="text-base lg:text-lg text-gray-600 mt-5 mb-8">
          {description}
        </p>
        <div className="flex gap-4">
          <Button
            className="font-semibold text-white hover:opacity-90"
            style={{
              backgroundColor: primaryColor,
              borderRadius: buttonRadius,
            }}
          >
            {primaryActionText}
          </Button>
          <Button
            className="font-semibold bg-transparent border transition-all hover:!text-white hover:!bg-[var(--hover-bg)] hover:!border-[var(--hover-bg)]"
            style={
              {
                "--hover-bg": primaryColor,
                borderColor: primaryColor,
                color: primaryColor,
                borderRadius: buttonRadius,
              } as React.CSSProperties
            }
          >
            {secondaryActionText}
          </Button>
        </div>
      </div>
      {/* Image */}
      <div>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full max-w-[600px] h-auto object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
