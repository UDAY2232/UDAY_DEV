import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Detect active section
      const sections = links.map((l) => document.getElementById(l.toLowerCase()));
      let current = "";
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-foreground z-[60] scroll-progress"
        style={{ scaleX }}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-[0_1px_30px_hsl(0_0%_0%/0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-bold tracking-tight text-foreground"
          >
            Uday<span className="text-muted-foreground">.</span>
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`relative text-sm transition-colors duration-200 ${
                  activeSection === l.toLowerCase()
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
                {activeSection === l.toLowerCase() && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-1.5 relative w-5 h-4">
            <motion.span animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-foreground absolute top-0" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-px bg-foreground absolute top-[7px]" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-foreground absolute bottom-0" />
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border px-6 pb-6 flex flex-col gap-4"
          >
            {links.map((l, i) => (
              <motion.button
                key={l}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(l)}
                className={`text-left text-sm transition-colors ${
                  activeSection === l.toLowerCase() ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {l}
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
