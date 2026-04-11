import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        title="About"
        subtitle="A short introduction about who I am and what I build."
      />
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-base md:text-lg text-muted-foreground leading-relaxed"
      >
        I am a Computer Science student focused on full stack development, practical machine learning,
        and building reliable products with clean code. I enjoy turning complex technical ideas into
        intuitive user experiences while maintaining strong engineering fundamentals.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed"
      >
        My approach is simple: ship thoughtful interfaces, write maintainable architecture, and keep learning
        through real projects, internships, and problem-solving.
      </motion.p>
    </div>
  </section>
);

export default About;
