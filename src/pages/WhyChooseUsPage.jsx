import React from "react";
import {
    ArrowRight,
    CheckCircle2,
    Lightbulb,
    Layers3,
    Users,
    ShieldCheck,
    Rocket,
    Code2,
    BrainCircuit,
    Globe2,
    HeartHandshake,
    Gauge,
    Workflow,
    Sparkles,
    Headphones,
    Lock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const WhyChooseUsPage = () => {
    const highlights = [
        "Custom Software Development",
        "Web Application Development",
        "Mobile App Development",
        "AI Solutions & Automation",
        "Cloud & SaaS Development",
        "UI/UX Design",
        "API Integrations",
        "Maintenance & Support",
    ];

    const stats = [
        { value: "20+", label: "Projects Delivered" },
        { value: "10+", label: "Technologies & Tools" },
        { value: "24/7", label: "Support & Assistance" },
        { value: "100%", label: "Client-Focused Delivery" },
    ];

    const reasons = [
        {
            icon: Lightbulb,
            title: "Business-First Technology Strategy",
            description:
                "We don’t just build software features — we build digital solutions that solve business problems, improve workflows, and support long-term growth. Every project starts with understanding your goals, users, and operational needs.",
        },
        {
            icon: Layers3,
            title: "Custom Software Built Around Your Needs",
            description:
                "At SyncTech Software Solutions, every product is designed and developed around your business requirements. Whether you need a custom internal platform, customer-facing web app, SaaS product, or AI-enabled system, we create tailored solutions instead of one-size-fits-all software.",
        },
        {
            icon: Users,
            title: "Client-Centric Collaboration",
            description:
                "We work as an extension of your team. Through transparent communication, regular updates, milestone reviews, and collaborative planning, we ensure every project stays aligned with your expectations, timelines, and business objectives.",
        },
        {
            icon: ShieldCheck,
            title: "Scalable, Secure, and Reliable Architecture",
            description:
                "Our development approach prioritizes performance, security, maintainability, and scalability. We build solutions that not only work for your current needs but also support future growth, integrations, and product evolution.",
        },
        {
            icon: Rocket,
            title: "Agile Delivery for Faster Time to Market",
            description:
                "We follow an agile development process that helps businesses move faster with better flexibility and visibility. By breaking projects into structured phases and sprint cycles, we reduce risk and accelerate delivery without compromising quality.",
        },
        {
            icon: HeartHandshake,
            title: "Long-Term Support and Technology Partnership",
            description:
                "Our work doesn’t end at launch. We provide ongoing support, optimization, maintenance, feature enhancements, and technical guidance to help businesses continuously improve and scale their digital products over time.",
        },
    ];

    const strengths = [
        {
            icon: Code2,
            title: "Expertise Across Modern Technologies",
            description:
                "Our team works across custom software development, modern web technologies, frontend and backend engineering, mobile app development, API integrations, and cloud-based systems.",
        },
        {
            icon: BrainCircuit,
            title: "AI-Powered Development Capabilities",
            description:
                "We help businesses adopt AI solutions, automation tools, intelligent workflows, and data-driven systems that improve efficiency, productivity, and decision-making.",
        },
        {
            icon: Globe2,
            title: "Solutions for Startups, SMEs, and Enterprises",
            description:
                "From startup MVPs and internal business tools to enterprise-grade digital platforms, our delivery model is flexible enough to support businesses at every growth stage.",
        },
        {
            icon: Gauge,
            title: "Performance-Focused Product Engineering",
            description:
                "We build software with clean architecture, optimized performance, and long-term maintainability to ensure better usability, lower technical debt, and smoother scaling.",
        },
    ];

    const processBenefits = [
        {
            icon: Workflow,
            title: "Structured Development Workflow",
            description:
                "Our process covers discovery, planning, UI/UX design, development, testing, deployment, and support — giving your project clarity, speed, and consistency from start to finish.",
        },
        {
            icon: Sparkles,
            title: "Quality-Focused Execution",
            description:
                "We integrate quality checks, usability reviews, performance validation, and testing throughout the development lifecycle to deliver dependable digital products.",
        },
        {
            icon: Lock,
            title: "Security and Stability at Every Stage",
            description:
                "We follow secure development practices and build systems with reliability, stability, and data protection in mind, especially for business-critical applications.",
        },
        {
            icon: Headphones,
            title: "Responsive Support and Ongoing Assistance",
            description:
                "We stay available beyond delivery with technical support, maintenance, issue resolution, and feature upgrades so your software continues to perform as your business grows.",
        },
    ];

    const whySyncTech = [
        "Custom software solutions aligned with your business goals",
        "Strong expertise in web, mobile, AI, cloud, and SaaS development",
        "Agile project execution with transparent communication",
        "Scalable, secure, and performance-driven engineering",
        "Reliable support, maintenance, and post-launch optimization",
        "Flexible engagement for startups, SMEs, and enterprise projects",
    ];

    const faqs = [
        {
            question: "Why should businesses choose SyncTech Software Solutions?",
            answer:
                "Businesses choose SyncTech Software Solutions because we combine business-focused strategy, custom software development expertise, agile delivery, modern technology capabilities, and long-term support. Our goal is to build digital solutions that solve real problems and create measurable business value.",
        },
        {
            question: "What industries or business types does SyncTech work with?",
            answer:
                "We work with startups, SMEs, and enterprises across different industries that need custom software, web applications, mobile apps, AI solutions, cloud platforms, automation systems, and scalable digital products.",
        },
        {
            question: "Do you only build websites, or do you offer full software development services?",
            answer:
                "SyncTech Software Solutions offers end-to-end software development services including custom software development, web application development, mobile app development, AI solutions, cloud services, UI/UX design, API integrations, testing, deployment, and maintenance.",
        },
        {
            question: "How does SyncTech ensure software quality and project success?",
            answer:
                "We follow a structured software development process that includes requirement analysis, planning, UI/UX design, agile development, quality assurance testing, deployment, and ongoing support. This helps us maintain quality, transparency, and alignment with business goals.",
        },
        {
            question: "Do you provide post-launch support and maintenance?",
            answer:
                "Yes. We provide post-launch maintenance, technical support, feature enhancements, optimization, security updates, and long-term product support to help businesses keep their software reliable and future-ready.",
        },
        {
            question: "Can SyncTech support startup MVPs and enterprise software projects?",
            answer:
                "Absolutely. Our development approach is flexible enough to support startup MVP development, internal business tools, SaaS platforms, customer-facing applications, and enterprise-grade digital transformation projects.",
        },
    ];

    return (
        <main className="bg-white text-slate-900">
            {/* ========================================================= */}
            {/* HERO SECTION - WHY CHOOSE US */}
            {/* ========================================================= */}
            <section className="relative overflow-hidden bg-slate-950 text-white">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.18),_transparent_35%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.85),rgba(2,6,23,0.95))]" />
                </div>

                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -top-20 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

                <div className="container relative z-10 mx-auto px-6 py-24 md:px-12 md:py-32">
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        {/* LEFT CONTENT */}
                        <div className="max-w-2xl">
                            <Reveal>
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200 backdrop-blur">
                                    Why Businesses Choose SyncTech
                                </span>
                            </Reveal>

                            <Reveal delay={150}>
                                <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                                    Trusted for
                                    <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                                        Custom Software Development,
                                    </span>
                                    Web, Mobile & AI Solutions
                                </h1>
                            </Reveal>

                            <Reveal delay={300}>
                                <p className="mt-8 text-lg leading-relaxed text-slate-300 md:text-xl">
                                    Businesses choose <span className="font-semibold text-white">SyncTech Software Solutions</span> for
                                    custom software development, web application development, mobile app
                                    development, AI solutions, and scalable cloud applications built for
                                    performance, security, and long-term business growth. We combine
                                    business-focused strategy, modern engineering, transparent
                                    collaboration, and ongoing technical support to deliver software that
                                    creates measurable value.
                                </p>
                            </Reveal>

                            {/* SEO Tag Pills */}
                            <Reveal delay={450}>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    {[
                                        "Custom Software Development",
                                        "Web Application Development",
                                        "Mobile App Development",
                                        "AI Solutions",
                                        "Cloud Application Development",
                                        "Scalable Digital Products",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur transition-all hover:border-blue-400/40 hover:bg-white/10"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>

                            {/* CTA + trust points */}
                            <Reveal delay={600}>
                                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                    <Link
                                        to="/contact-us"
                                        className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
                                    >
                                        Talk to Our Team
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>

                                    <Link
                                        to="/services"
                                        className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                                    >
                                        Explore Services
                                    </Link>
                                </div>
                            </Reveal>

                            <Reveal delay={750}>
                                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                    {[
                                        "Business-focused solutions",
                                        "Agile development process",
                                        "Long-term support & scaling",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 backdrop-blur"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>

                        {/* RIGHT IMAGE SIDE */}
                        <Reveal delay={250}>
                            <div className="relative mx-auto w-full max-w-2xl">
                                {/* Main image card */}
                                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                                        alt="SyncTech Software Solutions team collaborating on custom software development, web applications, mobile apps, and AI solutions"
                                        className="h-[520px] w-full object-cover"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                                    {/* Bottom content on image */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <div className="max-w-lg rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl">
                                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                                                Why Clients Trust Us
                                            </p>
                                            <h3 className="mt-3 text-2xl font-bold text-white">
                                                Strategy, Engineering, and Long-Term Partnership
                                            </h3>
                                            <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                                We help startups, SMEs, and growing businesses transform ideas
                                                into reliable digital products through scalable development,
                                                clear communication, and continuous support.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating cards */}
                                <div className="absolute -left-6 top-10 hidden w-56 rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl lg:block">
                                    <p className="text-sm font-semibold text-blue-300">
                                        20+ Projects Delivered
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                        Across software development, web applications, mobile apps, and AI
                                        solutions.
                                    </p>
                                </div>

                                <div className="absolute -right-6 bottom-10 hidden w-60 rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl lg:block">
                                    <p className="text-sm font-semibold text-cyan-300">
                                        Scalable & Secure Delivery
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                        Built with performance, maintainability, and future growth in mind.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* INTRO SECTION */}
            {/* ========================================================= */}
            <section className="py-24 md:py-28">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <Reveal>
                            <span className="inline-block text-blue-600 text-sm font-bold tracking-[0.25em] uppercase mb-6">
                                A Reliable Technology Partner
                            </span>
                        </Reveal>

                        <Reveal delay={150}>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                                More Than a Development Team — A Partner Focused on
                                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                    Business Growth, Innovation, and Long-Term Value
                                </span>
                            </h2>
                        </Reveal>

                        <Reveal delay={300}>
                            <p className="mt-8 text-lg leading-relaxed text-slate-600">
                                Choosing the right software development company is about more than
                                technical skills. It’s about finding a team that understands your
                                business goals, communicates clearly, builds reliable solutions,
                                and stays committed after launch. SyncTech Software Solutions
                                combines strategy, design, development, and support to help
                                businesses launch faster, operate smarter, and scale with
                                confidence.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* MAIN REASONS */}
            {/* ========================================================= */}
            <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[120px]" />
                </div>

                <div className="container relative z-10 mx-auto px-6 md:px-12">
                    <Reveal>
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="inline-block text-blue-600 text-sm font-bold tracking-[0.25em] uppercase mb-6">
                                Why Businesses Work With Us
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                                Key Reasons to Choose SyncTech for Software Development
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                We build digital solutions that are aligned with business goals,
                                designed for long-term performance, and delivered through a
                                transparent and collaborative development process.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {reasons.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Reveal key={item.title} delay={index * 120}>
                                    <div className="rounded-3xl border border-slate-100 bg-white/85 p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/10">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                                            <Icon className="h-7 w-7 text-blue-600" />
                                        </div>
                                        <h3 className="mt-6 text-xl font-bold text-slate-900">
                                            {item.title}
                                        </h3>
                                        <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* CAPABILITIES SECTION */}
            {/* ========================================================= */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <div>
                            <Reveal>
                                <span className="inline-block text-blue-600 text-sm font-bold tracking-[0.25em] uppercase mb-6">
                                    Our Capabilities
                                </span>
                            </Reveal>

                            <Reveal delay={150}>
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                                    Deep Technical Expertise Across
                                    <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                        Software, Web, Mobile, Cloud, and AI Solutions
                                    </span>
                                </h2>
                            </Reveal>

                            <Reveal delay={300}>
                                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                    SyncTech Software Solutions delivers a broad range of digital
                                    capabilities for businesses looking to modernize systems, launch
                                    new products, automate operations, or improve customer
                                    experiences through technology.
                                </p>
                            </Reveal>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {strengths.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <Reveal key={item.title} delay={200 + index * 120}>
                                        <div className="rounded-3xl border border-blue-100 bg-white/85 p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/10">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                                                <Icon className="h-7 w-7 text-blue-600" />
                                            </div>
                                            <h3 className="mt-6 text-xl font-bold text-slate-900">
                                                {item.title}
                                            </h3>
                                            <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* PROCESS BENEFITS */}
            {/* ========================================================= */}
            <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-[120px]" />
                </div>

                <div className="container relative z-10 mx-auto px-6 md:px-12">
                    <Reveal>
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="inline-block text-blue-600 text-sm font-bold tracking-[0.25em] uppercase mb-6">
                                How We Deliver Value
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                                A Process Designed for Quality, Speed, and Long-Term Success
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                We combine structured execution with agile flexibility so your
                                project moves forward with clarity, quality, and confidence at
                                every stage of the software development lifecycle.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {processBenefits.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Reveal key={item.title} delay={index * 120}>
                                    <div className="rounded-3xl border border-slate-100 bg-white/85 p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/10">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                                            <Icon className="h-7 w-7 text-blue-600" />
                                        </div>
                                        <h3 className="mt-6 text-xl font-bold text-slate-900">
                                            {item.title}
                                        </h3>
                                        <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* WHY SYNCTECH CHECKLIST */}
            {/* ========================================================= */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <div>
                            <Reveal>
                                <span className="inline-block text-blue-600 text-sm font-bold tracking-[0.25em] uppercase mb-6">
                                    Why SyncTech
                                </span>
                            </Reveal>

                            <Reveal delay={150}>
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                                    What Sets
                                    <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                        SyncTech Software Solutions Apart
                                    </span>
                                </h2>
                            </Reveal>

                            <Reveal delay={300}>
                                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                    We focus on building dependable software backed by strong
                                    communication, scalable engineering, modern technology
                                    expertise, and a long-term commitment to client success.
                                </p>
                            </Reveal>

                            <div className="mt-10 grid gap-4">
                                {whySyncTech.map((item, index) => (
                                    <Reveal key={item} delay={400 + index * 80}>
                                        <div className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/80 px-5 py-4 shadow-sm">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                                            <span className="text-sm leading-relaxed text-slate-700">
                                                {item}
                                            </span>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>

                        <Reveal delay={250}>
                            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 md:p-10 shadow-xl">
                                <div className="rounded-3xl border border-white/80 bg-white/90 p-8 shadow-sm">
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        Built to Support Real Business Outcomes
                                    </h3>
                                    <p className="mt-5 text-base leading-relaxed text-slate-600">
                                        Whether you need a custom software platform, a business web
                                        application, an AI-enabled product, or a scalable cloud
                                        solution, SyncTech helps you build technology that supports
                                        efficiency, innovation, and growth. We don’t focus only on
                                        delivery — we focus on results, usability, maintainability,
                                        and long-term value.
                                    </p>

                                    <div className="mt-8 space-y-4">
                                        {[
                                            "Software solutions tailored to your exact business requirements",
                                            "Flexible collaboration for startups, SMEs, and enterprise teams",
                                            "Clear project communication and transparent development workflow",
                                            "Post-launch support, maintenance, and continuous improvement",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                                                <span className="text-sm leading-relaxed text-slate-700">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* FAQ SECTION */}
            {/* ========================================================= */}
            <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <Reveal>
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="inline-block text-blue-600 text-sm font-bold tracking-[0.25em] uppercase mb-6">
                                FAQs
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                                Frequently Asked Questions About Choosing SyncTech
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                Here are some common questions businesses ask before choosing
                                SyncTech Software Solutions as their software development partner.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mx-auto mt-16 max-w-5xl space-y-5">
                        {faqs.map((faq, index) => (
                            <Reveal key={faq.question} delay={index * 100}>
                                <div className="rounded-3xl border border-slate-100 bg-white/90 p-7 shadow-md">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {faq.question}
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* CTA SECTION */}
            {/* ========================================================= */}
            <section className="relative overflow-hidden pb-24 pt-12 md:pb-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-[140px]" />
                </div>

                <div className="container relative z-10 mx-auto px-6 md:px-12">
                    <Reveal>
                        <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-14 text-center text-white shadow-2xl md:px-12">
                            <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold tracking-[0.2em] uppercase backdrop-blur">
                                Let’s Build Together
                            </span>

                            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Looking for a Software Development Partner You Can Rely On?
                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-blue-50">
                                SyncTech Software Solutions helps startups, SMEs, and enterprises
                                build custom software, web applications, mobile apps, AI solutions,
                                and scalable digital platforms that support real business growth.
                            </p>

                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link
                                    to="/contact-us"
                                    className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    Talk to Our Team
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                                >
                                    Explore Our Services
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default WhyChooseUsPage;