import Button from "@/components/ui/Button";

interface CtaProps {
    title: string;
    description: string;
    primaryActionText: string;
    secondaryActionText: string;
    imageUrl: string;
    imageAlt: string;
    imageWidth?: number;
    imageHeight?: number;
    primaryAction?: () => void;
    secondaryAction?: () => void;
}

export default function CTA({
    title,
    description,
    primaryActionText,
    secondaryActionText,
    imageUrl,
    imageAlt,
    imageWidth = 600,
    imageHeight = 400,
    primaryAction,
    secondaryAction,
}: CtaProps) {
    return (
        <div className="md:flex lg:flex px-5 md:px-10 lg:px-12 xl:px-20 py-16 md:py-20 lg:py-[112px] gap-0 md:gap-10 lg:gap-12 xl:gap-20 items-center justify-center bg-[#E9EDFB]">
            <div className="py-0 md:py-8 lg:py-[51px]">
                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.2] md:w-[350px] lg:w-[480px] xl:w-[600px] font-semibold text-[#0A0A0A]">{title}</h1>
                <p className="text-[16px] md:text-[16px] lg:text-lg leading-[1.2] md:w-[350px] lg:w-[460px] xl:w-[600px] text-[#432c2c] pt-5 md:pt-3 lg:pt-4 xl:pt-8 pb-6 md:pb-3 lg:pb-4 xl:pb-8">{description}</p>
                <div className="flex gap-4">
                    <Button
                        variant="primary"
                        size="md"
                        className="bg-[#1E4ED8] hover:bg-[#112B77] font-semibold"
                        onClick={primaryAction}
                    >
                        {primaryActionText}
                    </Button>
                    <Button
                        variant="outline"
                        size="md"
                        className=" hover:!bg-[#1E4ED8] hover:!text-white text-[#1E4ED8] font-semibold"
                        onClick={secondaryAction}
                    >
                        {secondaryActionText}
                    </Button>
                </div>
            </div>
            <div className="mt-12 md:mt-0 lg:mt-0">
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    className="w-[335px] h-[218px] md:w-[400px] md:h-[200px] lg:w-[450px] lg:h-[250px] xl:w-[600px] xl:h-[400px] object-contain"
                />
            </div>
        </div>
    );
}