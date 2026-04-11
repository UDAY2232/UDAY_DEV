import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground">{subtitle}</p>}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 52 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.2 }}
      className="mt-4 h-[2px] rounded-full accent-gradient"
    />
  </motion.div>
);

export default SectionHeading;
