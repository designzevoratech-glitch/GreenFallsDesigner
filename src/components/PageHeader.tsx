import { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "./SEO";

interface PageHeaderProps {
    title: string;
    subtitle: string;
    images: string[];
}

const PageHeader = ({ title, subtitle, images }: PageHeaderProps) => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 30, // Much smoother transition
    });

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(scrollNext, 6000); // Slightly longer for cinematic feel
        return () => clearInterval(interval);
    }, [emblaApi, scrollNext]);

    return (
        <section ref={containerRef} className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
            <SEO
                title={title}
                description={subtitle}
                preloadImage={images[0]}
            />
            {/* Background Carousel */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
                ref={emblaRef}
            >
                <div className="flex h-full">
                    {images.map((img, index) => (
                        <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full overflow-hidden">
                            <motion.img
                                src={img}
                                alt={`${title} slide ${index + 1}`}
                                className="w-full h-full object-cover transform-gpu will-change-transform"
                                loading={index === 0 ? "eager" : "lazy"}
                                decoding="async"
                                initial={{ scale: 1.05 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 6, ease: "easeOut" }} // Subtle, hardware-accelerated zoom
                            />
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 font-body leading-relaxed max-w-2xl">
                        {subtitle}
                    </p>
                    <div className="mt-8 w-24 h-1 bg-primary rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;
