import React from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

const ScrollTypingText = ({ text, delayOffset = 0, speed = 0.04 }) => {
  return (
    <span>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char-reveal"
          style={{ transitionDelay: `${delayOffset + index * speed}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

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
  const [revealRef, revealClass] = useScrollReveal();

  return (
    <section className="py-24 border-t border-b border-slate-900 bg-gradient-to-b from-[#060910]/30 to-[#060910]/80 relative overflow-hidden">
      <TechMarqueeStyles />

      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div ref={revealRef} className={`max-w-7xl mx-auto px-6 text-center mb-16 overflow-hidden ${revealClass}`}>
        {/* <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4 inline-block tracking-widest uppercase">
          Technology Stack
        </span> */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <ScrollTypingText text="Built with Modern Technologies" />
        </h2>
        <p className={`text-slate-400 text-base md:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-500 transform ${revealClass === "revealed" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}>
          Multi-layered infrastructure engineered for maximum latency control and computation speed.
        </p>
      </div>

      {/* Skewed and tilted 3D perspective wrapper */}
      <div className="relative flex flex-col gap-6 w-full max-w-8xl mx-auto py-4 overflow-hidden [perspective:1000px] transform hover:scale-[1.01] transition-transform duration-500">

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
