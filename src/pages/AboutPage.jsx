import React from "react";
import {
    ArrowRight,
    Lightbulb,
    Layers3,
    Users,
    Target,
    Rocket,
    ShieldCheck,
    Code2,
    Globe2,
    HeartHandshake,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const AboutPage = () => {
    const services = [
        "Custom Software",
        "Web Development",
        "Mobile Apps",
        "AI Solutions",
        "Cloud Services",
        "UI/UX Design",
        "SaaS Platforms",
        "API Integrations",
    ];

    const stats = [
        { value: "20+", label: "Projects Delivered" },
        { value: "10+", label: "Technologies" },
        { value: "24/7", label: "Support" },
        { value: "100%", label: "Client-Focused Delivery" },
    ];

    const values = [
        {
            icon: Lightbulb,
            title: "Innovation First",
            description:
                "We use modern technologies, creative problem-solving, and strategic thinking to build digital products that help businesses stay ahead in a competitive market.",
        },
        {
            icon: Layers3,
            title: "Scalable Solutions",
            description:
                "Our software is designed for long-term growth, performance, and flexibility, making it easier for businesses to scale with confidence.",
        },
        {
            icon: Users,
            title: "Client-Centric Approach",
            description:
                "We collaborate closely with every client, understand their goals, and deliver solutions that create measurable business value.",
        },
    ];

    const pillars = [
        {
            icon: Target,
            title: "Our Mission",
            description:
                "To empower startups, SMEs, and enterprises with scalable software, intelligent automation, and future-ready digital solutions that accelerate growth and innovation.",
        },
        {
            icon: Rocket,
            title: "Our Vision",
            description:
                "To become a trusted global technology partner known for delivering impactful software products, modern digital experiences, and business-driven innovation.",
        },
        {
            icon: ShieldCheck,
            title: "Our Commitment",
            description:
                "We are committed to quality, transparency, performance, and long-term partnerships that help businesses build with confidence and scale with clarity.",
        },
    ];

    const strengths = [
        {
            icon: Code2,
            title: "Custom Software Expertise",
            description:
                "We build tailored digital products that match your workflows, solve operational challenges, and support long-term business growth.",
        },
        {
            icon: Globe2,
            title: "Modern Web & Mobile Development",
            description:
                "From responsive websites to powerful web apps and mobile applications, we create seamless user experiences across platforms.",
        },
        {
            icon: Sparkles,
            title: "AI-Driven Innovation",
            description:
                "We help businesses adopt AI-powered tools, automation systems, and intelligent workflows to improve efficiency and decision-making.",
        },
        {
            icon: HeartHandshake,
            title: "Long-Term Partnership",
            description:
                "Beyond project delivery, we support our clients with maintenance, optimization, upgrades, and technical guidance for sustainable success.",
        },
    ];

    const whyChoose = [
        "Business-focused software development approach",
        "Scalable, secure, and performance-driven architecture",
        "Expertise in web, mobile, AI, cloud, and custom software",
        "Transparent communication and agile project execution",
        "Strong focus on quality, usability, and long-term value",
        "Reliable post-launch support and technical maintenance",
    ];

    return (
        <main className="bg-white text-slate-900">
            {/* ========================================================= */}
            {/* HERO SECTION */}
            {/* ========================================================= */}
            <section className="relative overflow-hidden bg-white py-24 md:py-32">
                {/* Background Glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-100/40 blur-[120px] rounded-full" />

                    {/* Main Globe */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[48vw] md:h-[48vw] rounded-full animate-globe">
                        <div className="border-t-[3px] border-blue-400 shadow-[0_-5px_30px_rgba(59,130,246,0.4)] relative w-full h-full rounded-full overflow-hidden bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-blue-500 via-blue-300 to-blue-500 shadow-[0_30px_120px_rgba(37,99,235,0.25)]">
                            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-white/50 blur-[80px] rounded-full" />
                            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[80px] rounded-full" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-[100px] scale-125 -z-10" />
                    </div>
                </div>

                <div className="container relative z-10 mx-auto px-6 md:px-12">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* LEFT */}
                        <div>
                            <Reveal>
                                <span className="inline-block text-blue-600 text-sm font-bold tracking-[0.25em] uppercase mb-6">
                                    About SyncTech
                                </span>
                            </Reveal>

                            <Reveal delay={150}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-blue-800">
                                    Building
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                        Future-Ready
                                    </span>
                                    <br />
                                    Digital Solutions
                                </h1>
                            </Reveal>

                            <Reveal delay={300}>
                                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
                                    At <span className="font-semibold text-slate-900">SyncTech Software Solutions</span>,
                                    we help startups, SMEs, and enterprises transform ideas into
                                    scalable software, modern web platforms, mobile apps, and
                                    AI-powered solutions. We combine strategy, design, and
                                    engineering to build high-performance digital products that
                                    improve efficiency, accelerate growth, and create lasting
                                    business value.
                                </p>
                            </Reveal>

                            <Reveal delay={450}>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    {services.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-blue-100 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur-xl transition-all hover:scale-105 hover:border-blue-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>

                            <Reveal delay={600}>
                                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                    <Link
                                        to="/contact"
                                        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
                                    >
                                        Let&apos;s Build Together
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>

                                    <Link
                                        to="/services"
                                        className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/80 px-8 py-4 font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50"
                                    >
                                        Explore Services
                                    </Link>
                                </div>
                            </Reveal>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="space-y-5 max-w-md">
                                {values.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <Reveal key={item.title} delay={500 + index * 150}>
                                            <div className="group rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/10">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex items-center justify-center rounded-2xl bg-blue-50 p-3">
                                                        <Icon className="h-7 w-7 text-blue-600" />
                                                    </div>

                                                    <div>
                                                        <h3 className="text-lg font-bold text-slate-900">
                                                            {item.title}
                                                        </h3>
                                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Reveal>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* STATS SECTION */}
            {/* ========================================================= */}
            <section className="relative py-10 md:py-14">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((item, index) => (
                            <Reveal key={item.label} delay={index * 100}>
                                <div className="rounded-3xl border border-blue-100 bg-white/80 p-8 text-center shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                                        {item.value}
                                    </div>
                                    <p className="mt-3 text-sm font-medium tracking-wide text-slate-600">
                                        {item.label}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* COMPANY STORY */}
            {/* ========================================================= */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <div>
                            <Reveal>
                                <span className="inline-block text-blue-600 text-sm font-bold tracking-[0.25em] uppercase mb-6">
                                    Who We Are
                                </span>
                            </Reveal>

                            <Reveal delay={150}>
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                                    A Technology Partner Focused on
                                    <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                        Business Growth and Innovation
                                    </span>
                                </h2>
                            </Reveal>

                            <Reveal delay={300}>
                                <p className="mt-8 text-lg leading-relaxed text-slate-600">
                                    SyncTech Software Solutions was founded with a simple goal:
                                    help businesses turn ideas into impactful digital products.
                                    We believe software should do more than function — it should
                                    solve real business problems, improve customer experiences,
                                    and create measurable results.
                                </p>
                            </Reveal>

                            <Reveal delay={450}>
                                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                    Our team works across custom software development, web
                                    applications, mobile apps, cloud solutions, AI integrations,
                                    and UI/UX design. Whether it&apos;s building an MVP for a startup,
                                    modernizing operations for an SME, or developing scalable
                                    enterprise systems, we focus on delivering technology that is
                                    reliable, adaptable, and built for long-term success.
                                </p>
                            </Reveal>
                        </div>

                        <Reveal delay={300}>
                            <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 md:p-10 shadow-xl">
                                <div className="grid gap-6">
                                    {pillars.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={item.title}
                                                className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="flex items-center justify-center rounded-2xl bg-blue-50 p-3">
                                                        <Icon className="h-6 w-6 text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-slate-900">
                                                            {item.title}
                                                        </h3>
                                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* WHAT WE DO */}
            {/* ========================================================= */}
            <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[120px]" />
                </div>

                <div className="container relative z-10 mx-auto px-6 md:px-12">
                    <Reveal>
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="inline-block text-blue-600 text-sm font-bold tracking-[0.25em] uppercase mb-6">
                                What We Do
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-blue-800">
                                Helping Businesses Build Smarter Digital Products
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                We deliver end-to-end software development services that combine
                                strategy, design, engineering, and support to help businesses
                                launch faster, operate efficiently, and scale with confidence.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {strengths.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Reveal key={item.title} delay={index * 120}>
                                    <div className="rounded-3xl border border-slate-100 bg-white/80 p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/10">
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
            {/* WHY CHOOSE US */}
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
                                    Why Businesses Choose
                                    <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                        SyncTech Software Solutions
                                    </span>
                                </h2>
                            </Reveal>

                            <Reveal delay={300}>
                                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                    We bring together technical expertise, strategic thinking, and
                                    a client-focused mindset to build software solutions that are
                                    practical, scalable, and aligned with business outcomes.
                                </p>
                            </Reveal>

                            <div className="mt-10 grid gap-4">
                                {whyChoose.map((item, index) => (
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
                                        Your Technology Partner for the Long Run
                                    </h3>
                                    <p className="mt-5 text-base leading-relaxed text-slate-600">
                                        At SyncTech, we don’t just build software and move on. We
                                        work as a long-term technology partner — helping businesses
                                        launch faster, improve systems, adapt to change, and grow
                                        with confidence through reliable digital solutions and
                                        continuous support.
                                    </p>

                                    <div className="mt-8 space-y-4">
                                        {[
                                            "Custom development tailored to your business goals",
                                            "Flexible support for startups, SMEs, and enterprises",
                                            "Focus on performance, security, and maintainability",
                                            "Ongoing optimization, updates, and technical support",
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
            {/* CTA SECTION */}
            {/* ========================================================= */}
            <section className="relative overflow-hidden pb-24 pt-10 md:pb-32">
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
                                Ready to Build Something Great with SyncTech?
                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-blue-50">
                                Whether you&apos;re planning a custom software platform, a modern
                                web application, a mobile app, or an AI-powered solution,
                                SyncTech Software Solutions is here to help you turn your ideas
                                into scalable digital products.
                            </p>

                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    Start Your Project
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                                >
                                    View Our Services
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;