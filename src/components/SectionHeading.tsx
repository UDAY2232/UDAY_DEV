import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="mb-14"
  >
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground text-sm md:text-base font-light">{subtitle}</p>}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 40 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-4 h-px bg-foreground/30"
    />
  </motion.div>
);

export default SectionHeading;
