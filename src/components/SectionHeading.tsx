import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className={`font-display text-3xl md:text-4xl font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-0.5 w-16 ${centered ? "mx-auto" : ""} ${light ? "bg-primary-foreground/40" : "bg-primary"}`} />
    </motion.div>
  );
};

export default SectionHeading;
