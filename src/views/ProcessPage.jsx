import React from "react";
import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  CheckCircle2,
  ArrowRight,
  Layers3,
  MessageSquareMore,
  Gauge,
  Workflow,
  MonitorSmartphone,
  BrainCircuit,
  CloudCog,
  Blocks,
  CircleHelp,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Requirement Analysis",
    icon: Search,
    description:
      "We begin by understanding your business goals, target audience, technical requirements, and project expectations. This phase helps us define the right product roadmap, features, timelines, and technology approach before development starts.",
    points: [
      "Business requirement gathering",
      "Target audience and workflow analysis",
      "Feature mapping and prioritization",
      "Competitor and market understanding",
      "Technology consultation and project scoping",
    ],
  },
  {
    id: "02",
    title: "Strategy & Project Planning",
    icon: ClipboardList,
    description:
      "Once the requirements are clear, our team prepares a structured execution plan. We define milestones, sprint cycles, development priorities, and timelines to ensure a transparent and organized software delivery process.",
    points: [
      "Project roadmap and milestones",
      "Sprint planning and task breakdown",
      "Resource allocation",
      "Timeline and effort estimation",
      "Risk assessment and delivery planning",
    ],
  },
  {
    id: "03",
    title: "UI/UX Design & Prototyping",
    icon: PenTool,
    description:
      "Our design team creates intuitive, modern, and user-focused interfaces that improve engagement and usability. We design wireframes, user journeys, and interactive prototypes to validate the product experience before coding begins.",
    points: [
      "Wireframing and user journey mapping",
      "Responsive UI/UX design",
      "Interactive prototyping",
      "Design feedback and refinement",
      "Mobile-first design planning",
    ],
  },
  {
    id: "04",
    title: "Agile Development",
    icon: Code2,
    description:
      "Our developers build scalable digital solutions using modern frameworks, secure coding practices, and agile sprint-based execution. We focus on performance, maintainability, and flexibility from the first line of code.",
    points: [
      "Frontend and backend development",
      "Database design and implementation",
      "API development and third-party integrations",
      "Cloud-ready architecture setup",
      "Sprint-based progress delivery",
    ],
  },
  {
    id: "05",
    title: "Testing & Quality Assurance",
    icon: ShieldCheck,
    description:
      "Quality is built into every phase of our process. We test the application thoroughly to ensure it performs reliably across devices, browsers, and real-world use cases while maintaining security and stability.",
    points: [
      "Functional testing",
      "UI/UX and usability testing",
      "Performance and load testing",
      "Security validation",
      "Cross-device and cross-browser testing",
    ],
  },
  {
    id: "06",
    title: "Deployment & Launch",
    icon: Rocket,
    description:
      "After final approval, we deploy the application to the production environment with a carefully managed launch process. We optimize the system for performance, reliability, and a smooth go-live experience.",
    points: [
      "Production deployment",
      "Server, hosting, and domain setup",
      "Final optimization and configuration",
      "Release monitoring and validation",
      "Go-live support",
    ],
  },
  {
    id: "07",
    title: "Support, Maintenance & Optimization",
    icon: LifeBuoy,
    description:
      "Our relationship continues after launch. We provide long-term maintenance, updates, feature enhancements, and technical support to keep your software secure, stable, and aligned with your business growth.",
    points: [
      "Bug fixes and ongoing maintenance",
      "Security updates and monitoring",
      "Feature enhancements",
      "Performance optimization",
      "Long-term technical support",
    ],
  },
];

const methodologyItems = [
  {
    title: "Agile Sprint-Based Execution",
    description:
      "We use agile sprints to break projects into manageable milestones, helping businesses move faster with better visibility and flexibility.",
    icon: Workflow,
  },
  {
    title: "Transparent Communication",
    description:
      "Regular updates, review calls, and milestone tracking ensure you always know what’s happening and what comes next.",
    icon: MessageSquareMore,
  },
  {
    title: "Quality at Every Stage",
    description:
      "From design reviews to QA testing and deployment checks, quality is integrated into every stage of the software development lifecycle.",
    icon: CheckCircle2,
  },
  {
    title: "Performance & Scalability Focus",
    description:
      "We build solutions that are optimized for speed, security, maintainability, and long-term business growth.",
    icon: Gauge,
  },
];

const solutions = [
  {
    title: "Custom Software Development",
    icon: Layers3,
    description:
      "Tailored software solutions designed around your workflows, business goals, and operational needs.",
  },
  {
    title: "Web Application Development",
    icon: MonitorSmartphone,
    description:
      "Scalable and responsive web applications built for performance, usability, and long-term growth.",
  },
  {
    title: "AI & Intelligent Solutions",
    icon: BrainCircuit,
    description:
      "AI-powered applications, automation tools, and intelligent systems that improve efficiency and decision-making.",
  },
  {
    title: "Cloud & SaaS Platforms",
    icon: CloudCog,
    description:
      "Modern cloud-based applications and SaaS platforms built for flexibility, accessibility, and scale.",
  },
  {
    title: "API Integrations & Automation",
    icon: Blocks,
    description:
      "Seamless integrations, data flow automation, and connected systems that improve business operations.",
  },
];

const benefits = [
  "Business-focused development strategy",
  "Agile and transparent delivery process",
  "Scalable, secure, and high-performance architecture",
  "Experienced UI/UX, frontend, backend, and AI development teams",
  "Reliable testing, deployment, and post-launch support",
  "Flexible engagement for startups, SMBs, and enterprises",
];

const faqs = [
  {
    question: "What is your software development process at SyncTech Software Solutions?",
    answer:
      "Our software development process includes discovery and requirement analysis, project planning, UI/UX design, agile development, testing, deployment, and ongoing support. This structured workflow helps us deliver scalable and reliable digital solutions aligned with business goals.",
  },
  {
    question: "Do you follow agile development methodology?",
    answer:
      "Yes. We follow an agile software development process with sprint-based execution, continuous feedback, regular progress updates, and iterative delivery to ensure flexibility, speed, and better project visibility.",
  },
  {
    question: "Can SyncTech handle both web and mobile app development projects?",
    answer:
      "Yes. Our team builds web applications, mobile apps, custom software platforms, SaaS products, and AI-powered business solutions for startups, SMBs, and enterprises.",
  },
  {
    question: "How long does a software development project usually take?",
    answer:
      "The timeline depends on the project scope, complexity, features, integrations, and business requirements. Smaller applications may take a few weeks, while large custom software or AI-driven platforms may take several months.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes. We offer software maintenance, technical support, performance optimization, bug fixing, security updates, and feature enhancements after deployment.",
  },
  {
    question: "Can your development process support startup MVPs as well as enterprise projects?",
    answer:
      "Absolutely. Our process is flexible enough to support startup MVP development, product scaling, internal business tools, SaaS applications, and enterprise-grade software modernization projects.",
  },
];

const SectionHeading = ({ eyebrow, title, description, center = false }) => (
  <div className={center ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
    {eyebrow && (
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
        {eyebrow}
      </div>
    )}

    <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
      {title}
    </h2>

    {description && (
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    )}
  </div>
);

const ProcessPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(to_bottom,rgba(15,23,42,0.4),rgba(2,6,23,1))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Our Process
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A Transparent and Scalable{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Software Development Process
              </span>{" "}
              for Modern Businesses
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              At <span className="font-semibold text-white">SyncTech Software Solutions</span>,
              we follow a structured and agile software development process to
              transform ideas into secure, scalable, and high-performing digital
              products. From discovery and planning to design, development,
              testing, deployment, and support, our workflow is built to deliver
              measurable business outcomes with speed, quality, and transparency.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Our Services
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                "Agile software delivery",
                "Transparent project execution",
                "Scalable and secure digital solutions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 backdrop-blur"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY OUR PROCESS MATTERS */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Our Process Matters"
            title="A Well-Defined Development Process Reduces Risk and Improves Outcomes"
            description="A clear software development process helps businesses reduce uncertainty, improve collaboration, control timelines, and build better products. At SyncTech, our workflow combines strategic planning, user-focused design, agile development, and continuous testing to deliver software that is reliable, scalable, and aligned with real business goals."
            center
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Faster Delivery with Agile Sprints",
                text: "We break complex projects into structured sprint cycles to improve speed, flexibility, and visibility throughout the delivery process.",
              },
              {
                title: "Transparent Collaboration",
                text: "Clear communication, milestone tracking, and regular updates keep stakeholders informed and involved at every stage.",
              },
              {
                title: "Scalable & Secure Architecture",
                text: "We build solutions with long-term growth, performance, and security in mind from the earliest planning phase.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROCESS STEPS */}
      {/* ========================================================= */}
      <section className="border-y border-white/10 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Workflow"
            title="Our 7-Step Software Development Process"
            description="We follow a structured and agile software development methodology that transforms ideas into scalable digital products. Every stage is designed to improve clarity, reduce risk, and deliver measurable business value."
            center
          />

          <div className="mt-16 space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05] lg:p-8"
                >
                  <div className="absolute inset-y-0 left-0 hidden w-1 bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 lg:block" />

                  <div className="grid gap-8 lg:grid-cols-[120px_1fr] lg:gap-10">
                    <div className="flex items-start gap-4 lg:flex-col lg:gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-500/20">
                        <Icon className="h-7 w-7 text-cyan-300" />
                      </div>

                      <div>
                        <div className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
                          STEP {step.id}
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                          Phase {index + 1}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
                        {step.description}
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {step.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-3"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                            <span className="text-sm leading-6 text-slate-200">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* METHODOLOGY SECTION */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="Agile, Collaborative, and Results-Driven Delivery"
            description="Our process is designed to keep projects efficient, flexible, and aligned with evolving business goals. By combining agile execution with continuous communication and quality control, we help businesses launch faster without compromising performance or reliability."
            center
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {methodologyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-500/20">
                    <Icon className="h-7 w-7 text-cyan-300" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SOLUTIONS SECTION */}
      {/* ========================================================= */}
      <section className="border-y border-white/10 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Solutions We Build"
            title="Our Process Supports a Wide Range of Digital Solutions"
            description="Whether you need a custom business application, a modern web platform, a cloud-based SaaS product, or an AI-powered solution, our development process is designed to deliver secure, scalable, and high-performing software tailored to your business needs."
            center
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-500/20">
                    <Icon className="h-7 w-7 text-cyan-300" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY CHOOSE SYNCTECH */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Why Choose SyncTech"
              title="Why Businesses Choose SyncTech for Software Development"
              description="We combine technical expertise, strategic thinking, and a transparent development workflow to help businesses build reliable digital products that deliver long-term value."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-sm leading-6 text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-blue-600/10 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]">
            <h3 className="text-2xl font-bold text-white">
              Built for Startups, SMBs, and Enterprises
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-300">
              From MVP development and internal business tools to scalable SaaS
              platforms and AI-driven software products, our team helps
              organizations move from concept to launch with a dependable and
              business-focused development process.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Flexible engagement models for different project sizes",
                "Strong focus on product quality, speed, and maintainability",
                "Support for custom software, web apps, AI systems, and cloud platforms",
                "Long-term collaboration beyond the initial launch",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-sm leading-6 text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ SECTION */}
      {/* ========================================================= */}
      <section className="border-y border-white/10 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently Asked Questions About Our Development Process"
            description="Here are answers to common questions about our software development workflow, project execution model, delivery timelines, and post-launch support."
            center
          />

          <div className="mt-14 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-500/20">
                    <CircleHelp className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA SECTION */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.14),transparent_35%),linear-gradient(to_bottom,rgba(2,6,23,0),rgba(2,6,23,1))]" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-600/10 p-8 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.08)] sm:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Let’s Build
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Build Your Next Digital Product with SyncTech?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              From strategy and design to development, deployment, and long-term
              support, SyncTech Software Solutions delivers end-to-end software
              development services for startups, growing businesses, and
              enterprises. Let’s turn your idea into a scalable digital
              solution.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn More About SyncTech
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProcessPage;