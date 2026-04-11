import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import TypingText from "./TypingText";
import FloatingBlobs from "./FloatingBlobs";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingBlobs />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-border shadow-[0_0_40px_hsl(0_0%_50%/0.1)]">
            <img src={profileImg} alt="Uday" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-mono"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground leading-[0.9]"
        >
          Hi, I'm{" "}
          <span className="relative">
            Uday
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-1 left-0 h-3 bg-foreground/10 -z-10"
            />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground font-light h-8"
        >
          <TypingText />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px hsl(0 0% 0% / 0.15)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-shadow duration-300"
          >
            View Projects
          </motion.button>

          <motion.a
            href="/Chirra_Uday_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px hsl(0 0% 0% / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-secondary transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 mx-auto text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
