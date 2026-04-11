import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="py-10 px-6 text-center border-t border-border"
  >
    <p className="text-xs text-muted-foreground tracking-wide">
      © {new Date().getFullYear()} Uday. Built with React, Tailwind CSS, and Framer Motion.
    </p>
    <div className="mx-auto mt-4 h-[2px] w-16 rounded-full accent-gradient" />
  </motion.footer>
);

export default Footer;
