import Button from "@/components/ui/Button";

interface CtaProps {
    title: string;
    description: string;
    primaryActionText: string;
    secondaryActionText: string;
    primaryColor?: string;
    buttonRadius?: string;
    imageUrl: string;
    primaryAction?: () => void;
    secondaryAction?: () => void;
}

export default function CtaRestaurant({
    title,
    description,
    primaryActionText,
    secondaryActionText,
    imageUrl,
    primaryColor,
    buttonRadius,
}: CtaProps) {
    return (
        <div className="md:flex lg:flex px-5 md:px-10 lg:px-12 xl:px-20 py-16 md:py-20 lg:py-[112px] gap-0 md:gap-10 lg:gap-12 xl:gap-20 justify-center text-center relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 py-0 md:py-8 lg:py-[51px]">
                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.2] md:w-[350px] lg:w-[480px] xl:w-[600px] font-semibold text-white">{title}</h1>
                <p className="text-[16px] md:text-[16px] lg:text-lg leading-[1.2] md:w-[350px] lg:w-[460px] xl:w-[600px] text-white pt-5 md:pt-3 lg:pt-4 xl:pt-8 pb-6 md:pb-3 lg:pb-4 xl:pb-8">{description}</p>
                <div className="flex mx-auto items-center justify-center gap-4">
                    <Button
                        className="px-5 py-2.5 text-white hover:bg-[#813007] font-semibold text-base transition-colors"
                        style={{
                            backgroundColor: primaryColor,
                            borderRadius: buttonRadius,
                        }}
                    >
                        {primaryActionText}
                    </Button>
                    <Button
                        className="px-5 py-2.5 bg-transparent border font-semibold text-base transition-colors hover:text-white"
                        style={{
                            borderColor: primaryColor,
                            color: primaryColor,
                            borderRadius: buttonRadius,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = primaryColor;
                            e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = primaryColor;
                        }}
                    >
                        {secondaryActionText}
                    </Button>
                </div>
            </div>
        </div>
    );
}