import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/UDAY2232/repos?sort=updated&per_page=6")
      .then((r) => r.json())
      .then((data) => {
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading title="Projects" subtitle="Things I've built" />
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-52 rounded-2xl bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {repos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ y: -6, boxShadow: "0 20px 60px hsl(0 0% 0% / 0.08)" }}
                className="group block p-6 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div className="w-full h-24 rounded-lg bg-secondary mb-4 overflow-hidden flex items-center justify-center group-hover:bg-muted transition-colors duration-300">
                  <Code2Icon name={repo.name} />
                </div>

                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold text-foreground group-hover:underline underline-offset-4 decoration-foreground/30">
                    {repo.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                  {repo.description || "No description available."}
                </p>
                <div className="flex items-center gap-3">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-foreground/40" />
                      <span className="text-xs text-muted-foreground">{repo.language}</span>
                    </div>
                  )}
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{repo.stargazers_count}</span>
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Simple icon placeholder for project cards
const Code2Icon = ({ name }: { name: string }) => (
  <span className="text-2xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors duration-300 select-none">
    {name.charAt(0).toUpperCase()}
  </span>
);

export default Projects;
