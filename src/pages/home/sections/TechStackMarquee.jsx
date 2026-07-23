import React from "react";
import { Reveal } from "../../../components/Reveal";

const ROW1 = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg", invert: true },
  { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
];

const ROW2 = [
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "OpenAI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", invert: true },
  { name: "LangChain", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg", invert: true },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Hugging Face", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/huggingface.svg", invert: true },
  { name: "Vector Databases", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qdrant.svg", invert: true },
  { name: "RAG", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
  { name: "AI Agents", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubcopilot.svg", invert: true },
  { name: "Sanity CMS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sanity.svg", invert: true },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
  { name: "Shopify", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shopify.svg", invert: true },
  { name: "Strapi", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/strapi.svg", invert: true },
];

const TechMarqueeStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
    @keyframes marquee-left {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0%); }
    }
    .animate-marquee-left {
      display: flex;
      animation: marquee-left 35s linear infinite;
      width: max-content;
    }
    .animate-marquee-right {
      display: flex;
      animation: marquee-right 35s linear infinite;
      width: max-content;
    }
    .animate-marquee-left:hover, .animate-marquee-right:hover {
      animation-play-state: paused;
    }
  `}} />
);

function MarqueeItem({ tech }) {
  return (
    <div className="flex items-center gap-3.5 px-6 py-4 rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-900/40 to-slate-950/40 hover:border-blue-500/40 hover:bg-slate-900/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group cursor-pointer flex-shrink-0">
      <img
        src={tech.icon}
        alt={tech.name}
        className="h-7 w-7 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        style={{ filter: tech.invert ? "invert(1)" : "none" }}
      />
      <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </div>
  );
}

export default function TechStackMarquee() {
  return (
    <section className="py-24 border-t border-slate-900 bg-[#060910]/40 relative overflow-hidden font-sans">
      <TechMarqueeStyles />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Modern Technologies Behind Our Custom Software Development
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              As a leading custom software development company, we use trusted frameworks, cloud platforms, and AI technologies to build secure, scalable, and high-performance software solutions. Our custom software development services are powered by a carefully selected technology stack that ensures reliability, flexibility, and long-term business growth.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative w-full flex flex-col gap-6 select-none overflow-hidden pb-4">
        {/* Row 1: Left scrolling */}
        <div className="w-full overflow-hidden relative">
          <div className="animate-marquee-left flex gap-6 items-center">
            {[...ROW1, ...ROW1].map((tech, i) => (
              <MarqueeItem key={`row1-${i}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2: Right scrolling */}
        <div className="w-full overflow-hidden relative">
          <div className="animate-marquee-right flex gap-6 items-center">
            {[...ROW2, ...ROW2].map((tech, i) => (
              <MarqueeItem key={`row2-${i}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Side fades */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#060910] to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#060910] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
