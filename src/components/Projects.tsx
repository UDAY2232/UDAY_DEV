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
  fork: boolean;
  updated_at: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 34, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const projectImages: Record<string, string> = {
  "code-genie-pro": "/images/code-genie-pro.svg",
  code_ai: "/images/code-ai.svg",
  "fuel-flow-manager": "/images/fuel-flow-manager.svg",
  "ember-cart": "/images/ember-cart.svg",
  parcelflow: "/images/parcelflow.svg",
};

const getProjectImage = (repoName: string) => {
  const normalized = repoName.trim().toLowerCase();
  return projectImages[normalized] ?? "/images/default.svg";
};

const PINNED_REPOS = ["BORINGMAZE"];
const MAX_REPOS = 6;

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/UDAY2232/repos?sort=updated&per_page=100")
      .then((r) => r.json())
      .then((data) => {
        const parsed = Array.isArray(data) ? (data as Repo[]) : [];
        const filtered = parsed
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

        const pinned = PINNED_REPOS.map((name) => filtered.find((repo) => repo.name.toLowerCase() === name.toLowerCase())).filter(
          (repo): repo is Repo => Boolean(repo),
        );

        const pinnedIds = new Set(pinned.map((repo) => repo.id));
        const remaining = filtered.filter((repo) => !pinnedIds.has(repo.id));

        setRepos([...pinned, ...remaining].slice(0, MAX_REPOS));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Projects" subtitle="Live code snapshots from my GitHub repositories." />
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-72 rounded-2xl bg-card animate-pulse border border-border" />
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
              <motion.article
                key={repo.id}
                variants={item}
                whileHover={{ y: -8 }}
                className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-video overflow-hidden border-b border-border">
                  <img
                    src={getProjectImage(repo.name)}
                    alt={`${repo.name} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2 gap-3">
                    <h3 className="text-base font-semibold text-foreground line-clamp-1">{repo.name}</h3>
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{repo.stargazers_count}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[4.25rem]">
                    {repo.description || "No description available."}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "hsl(var(--accent-purple))" }} />
                        <span className="text-xs text-muted-foreground">{repo.language}</span>
                      </div>
                    )}
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-link mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "inset 0 0 0 1px hsl(var(--accent-blue) / 0.55)" }}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "0 0 34px hsl(var(--accent-purple) / 0.14)" }}
                />
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
