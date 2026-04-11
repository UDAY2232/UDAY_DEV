import { motion } from "framer-motion";

const SectionHeading = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{title}</h2>
    <div className="mt-3 w-10 h-px bg-foreground/30" />
  </motion.div>
);

export default SectionHeading;
