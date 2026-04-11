import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { navItems } from "@/data/portfolio";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => document.getElementById(item.id));
      let current = "";
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 160) {
            current = section.id;
          }
        }
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
        transition={{ duration: 0.55 }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-background/75 backdrop-blur-xl border-b border-border/80 shadow-[0_10px_30px_hsl(0_0%_0%/0.07)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-lg font-bold tracking-tight text-foreground"
          >
            <img
              src="/images/code-ai-mark.svg"
              alt="Logo"
              className="h-7 w-7 rounded-full border border-border/80"
            />
            Uday<span className="text-gradient">.</span>
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative text-sm transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full accent-gradient"
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
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 flex flex-col gap-4"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(item.id)}
                className={`text-left text-sm transition-colors ${
                  activeSection === item.id ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
