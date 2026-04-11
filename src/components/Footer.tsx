import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="py-10 px-6 text-center border-t border-border"
  >
    <p className="text-xs text-muted-foreground tracking-wide">
      © {new Date().getFullYear()} Uday. Crafted with care using React & Tailwind CSS.
    </p>
  </motion.footer>
);

export default Footer;
