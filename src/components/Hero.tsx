import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import { heroRoles } from "@/data/portfolio";
import TypingText from "./TypingText";
import FloatingBlobs from "./FloatingBlobs";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingBlobs />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 105 }}
          className="mb-7"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border border-border bg-card shadow-[0_14px_45px_hsl(0_0%_0%/0.15)]">
            <img src={profileImg} alt="Uday" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.28em] uppercase text-muted-foreground mb-6 font-mono"
        >
          React Developer Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-[0.95]"
        >
          Hi, I'm{" "}
          <span className="relative text-gradient">
            Uday
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-5 text-lg md:text-xl text-muted-foreground h-8"
        >
          <TypingText phrases={heroRoles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-8 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed"
        >
          I build modern web apps with clean architecture, smooth UX, and practical AI integrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 12px 36px hsl(0 0% 0% / 0.15)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition-shadow duration-300"
          >
            View Projects
          </motion.button>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: "0 12px 36px hsl(0 0% 0% / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-border bg-background text-sm font-semibold text-foreground hover:bg-secondary transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 mx-auto text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
