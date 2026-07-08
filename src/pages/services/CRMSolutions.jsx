import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,

  // Services
  Users,
  Database,
  Workflow,
  BarChart3,
  MessageSquare,
  ShieldCheck,

  // Features
  Target,
  Bell,
  LineChart,
  Globe,

  // Why Choose Us
  Award,
  Rocket,
  Headphones,
  Settings,

  // Industries
  Building2,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Landmark,
  Factory,

  // Tech Stack

  // FAQ
  HelpCircle,
  Sparkles,
  Zap,
  Plus,
  RotateCcw,
  TrendingUp,
  DollarSign,
  Clock,
} from "lucide-react";

import { Link } from "react-router-dom";
import CrmTechnologies from "./sections/CrmTechnologies";
import SEO from "../../components/SEO";

const crmServices = [
  {
    icon: Users,
    title: "Customer Relationship Management",
    desc: "Centralize customer interactions, communication history, and engagement activities within a unified platform.",
  },
  {
    icon: Workflow,
    title: "Sales Automation",
    desc: "Automate lead tracking, follow-ups, pipeline management, and sales processes to improve efficiency.",
  },
  {
    icon: MessageSquare,
    title: "Customer Support Management",
    desc: "Manage customer inquiries, tickets, and communication channels from a single platform.",
  },
  {
    icon: Database,
    title: "Customer Data Management",
    desc: "Maintain accurate customer records, profiles, and business information securely.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Generate actionable insights through dashboards, reports, and business intelligence tools.",
  },
  {
    icon: ShieldCheck,
    title: "CRM Integration",
    desc: "Connect CRM platforms with ERP systems, email tools, marketing platforms, and business applications.",
  },
];

const crmFeatures = [
  {
    icon: Users,
    title: "360° Customer View",
    desc: "Access complete customer information and interaction history in one place.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Reduce manual work through intelligent automation and process optimization.",
  },
  {
    icon: Target,
    title: "Lead Management",
    desc: "Track leads from initial contact through conversion and customer retention.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Receive reminders, alerts, and task notifications to improve productivity.",
  },
  {
    icon: LineChart,
    title: "Performance Insights",
    desc: "Monitor sales performance and customer engagement through analytics.",
  },
  {
    icon: Globe,
    title: "Cloud Accessibility",
    desc: "Securely access CRM data from any device and location.",
  },
];

const crmBenefits = [
  "Improve customer relationships",
  "Increase sales productivity",
  "Enhance customer retention",
  "Streamline business operations",
  "Improve team collaboration",
  "Gain actionable insights",
  "Automate repetitive tasks",
  "Drive business growth",
];

const stats = [
  {
    value: "CRM",
    label: "Focused Solutions",
  },
  {
    value: "Cloud",
    label: "Based Systems",
  },
  {
    value: "Smart",
    label: "Automation",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];
const whyChooseUs = [
  {
    icon: Award,
    title: "Business-Focused CRM Solutions",
    desc: "CRM platforms tailored to your business processes, customer journey, and growth objectives.",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    desc: "Flexible CRM systems that grow alongside your business and customer base.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "Secure customer data management with modern security practices and access controls.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Reduce manual tasks and improve operational efficiency through intelligent automation.",
  },
  {
    icon: Settings,
    title: "Custom CRM Configuration",
    desc: "Personalized dashboards, workflows, and modules designed around your business.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "Continuous assistance, maintenance, and optimization to maximize CRM performance.",
  },
];

const industries = [
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    desc: "Customer engagement, loyalty management, and sales tracking solutions.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient relationship management and communication systems.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    desc: "Customer onboarding, relationship tracking, and service management.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Student lifecycle management and communication platforms.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Sales pipeline management and customer relationship tracking.",
  },
  {
    icon: Building2,
    title: "Professional Services",
    desc: "Client engagement, project communication, and relationship management.",
  },
];

const crmPlatforms = {
  CRM: ["Salesforce", "HubSpot CRM", "Zoho CRM", "Microsoft Dynamics 365"],
  Automation: ["Power Automate", "Zapier", "Make", "HubSpot Workflows"],
  Analytics: [
    "Power BI",
    "Google Analytics",
    "Looker Studio",
    "CRM Dashboards",
  ],
  Cloud: ["Microsoft Azure", "AWS", "Google Cloud", "Cloud CRM Platforms"],
};
const commitments = [
  {
    icon: Users,
    title: "Customer-Centric Approach",
    desc: "We focus on creating CRM solutions that strengthen customer relationships and improve engagement.",
  },
  {
    icon: Workflow,
    title: "Business Process Optimization",
    desc: "Automate repetitive tasks and streamline workflows to improve productivity and efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable Systems",
    desc: "Protect customer data with secure CRM architectures and industry best practices.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    desc: "Transform customer information into actionable insights for smarter business decisions.",
  },
];

const faqs = [
  {
    question: "What is CRM software?",
    answer:
      "CRM (Customer Relationship Management) software helps businesses manage customer interactions, sales activities, support processes, and customer data from a centralized platform.",
  },
  {
    question: "Can CRM improve customer retention?",
    answer:
      "Yes. CRM systems help businesses understand customer behavior, personalize communication, and improve customer satisfaction.",
  },
  {
    question: "Do you provide CRM customization?",
    answer:
      "Yes. We customize workflows, dashboards, reports, automation, and integrations based on your business requirements.",
  },
  {
    question: "Can CRM integrate with existing software?",
    answer:
      "Yes. CRM solutions can integrate with ERP systems, accounting software, email platforms, marketing tools, and other business applications.",
  },
  {
    question: "Which CRM platforms do you support?",
    answer:
      "We work with Salesforce, HubSpot CRM, Zoho CRM, Microsoft Dynamics 365, and custom CRM solutions.",
  },
  {
    question: "Do you provide cloud-based CRM solutions?",
    answer:
      "Yes. We implement secure cloud-based CRM systems that can be accessed from anywhere.",
  },
  {
    question: "Can CRM automate business processes?",
    answer:
      "Absolutely. CRM systems can automate lead management, follow-ups, approvals, notifications, reporting, and more.",
  },
];

const implementationProcess = [
  {
    step: "01",
    title: "Discovery & Scoping",
    desc: "We analyze your business processes, customer workflows, and CRM goals to design a tailored platform scope.",
  },
  {
    step: "02",
    title: "System Architecture",
    desc: "Our architects map user roles, data entities, pipeline rules, and integration workflows.",
  },
  {
    step: "03",
    title: "Custom Development",
    desc: "We configure Salesforce, HubSpot, Zoho, or build a custom React-based CRM panel from scratch.",
  },
  {
    step: "04",
    title: "Integration & Sync",
    desc: "Connect CRM with ERP, email services, client portals, databases, and third-party APIs.",
  },
  {
    step: "05",
    title: "Quality Assurance",
    desc: "We rigorously test user access privileges, pipeline transitions, automations, and reporting data.",
  },
  {
    step: "06",
    title: "Deployment",
    desc: "Launch the CRM solution and ensure smooth adoption across teams.",
  },
  {
    step: "07",
    title: "Training",
    desc: "Provide user training and onboarding for maximum CRM utilization.",
  },
  {
    step: "08",
    title: "Optimization",
    desc: "Continuously improve CRM performance and workflows based on business needs.",
  },
];
export default function CRMSolutions() {
  // Tab states for CRM interactive section
  const [activeTab, setActiveTab] = useState("pipeline");

  // Kanban Leads States
  const [leads, setLeads] = useState([
    { id: 1, name: "Nexus Retail Ltd", value: 4500, stage: "New Lead", owner: "Sarah K." },
    { id: 2, name: "BioLife Healthcare", value: 12500, stage: "Contacted", owner: "Alex M." },
    { id: 3, name: "Summit Fintech", value: 8200, stage: "Demo Scheduled", owner: "Sarah K." },
    { id: 4, name: "Apex Logistics", value: 15000, stage: "New Lead", owner: "Alex M." },
    { id: 5, name: "Zenith EduCorp", value: 9500, stage: "Deal Closed", owner: "David L." }
  ]);

  const STAGES = ["New Lead", "Contacted", "Demo Scheduled", "Deal Closed"];
  
  const moveLead = (leadId, direction) => {
    setLeads(prev => prev.map(lead => {
      if (lead.id === leadId) {
        const currentIdx = STAGES.indexOf(lead.stage);
        let nextIdx = currentIdx + direction;
        if (nextIdx >= 0 && nextIdx < STAGES.length) {
          return { ...lead, stage: STAGES[nextIdx] };
        }
      }
      return lead;
    }));
  };

  const addLead = () => {
    const names = ["Omega Logistics", "Nova E-Commerce", "Vertex Solutions", "Prime Care Labs"];
    const randomName = names[Math.floor(Math.random() * names.length)] + " " + Math.floor(Math.random() * 100);
    const randomVal = Math.floor(Math.random() * 12 + 3) * 1000;
    const newId = leads.length + 1;
    setLeads(prev => [...prev, {
      id: newId,
      name: randomName,
      value: randomVal,
      stage: "New Lead",
      owner: "System Auto"
    }]);
  };

  const resetLeads = () => {
    setLeads([
      { id: 1, name: "Nexus Retail Ltd", value: 4500, stage: "New Lead", owner: "Sarah K." },
      { id: 2, name: "BioLife Healthcare", value: 12500, stage: "Contacted", owner: "Alex M." },
      { id: 3, name: "Summit Fintech", value: 8200, stage: "Demo Scheduled", owner: "Sarah K." },
      { id: 4, name: "Apex Logistics", value: 15000, stage: "New Lead", owner: "Alex M." },
      { id: 5, name: "Zenith EduCorp", value: 9500, stage: "Deal Closed", owner: "David L." }
    ]);
  };

  // ROI Calculator States
  const [roiLeads, setRoiLeads] = useState(150);
  const [roiHours, setRoiHours] = useState(4);

  // Derived ROI stats
  const totalManualHours = roiLeads * roiHours;
  const hoursSavedWithCRM = Math.round(totalManualHours * 0.65);
  const savingsUSD = hoursSavedWithCRM * 50;
  const savingsINR = hoursSavedWithCRM * 4000;

  // Pipeline metrics
  const totalPipeline = leads.reduce((sum, lead) => sum + lead.value, 0);
  const closedRevenue = leads.filter(l => l.stage === "Deal Closed").reduce((sum, lead) => sum + lead.value, 0);
  const winRate = Math.round((leads.filter(l => l.stage === "Deal Closed").length / leads.length) * 100);

  return (
    <>
      <SEO
        title="Custom CRM Portal Development & Solutions | SyncTech"
        description="SyncTech Software Solutions develops custom enterprise CRM and ERP portals. Manage customer data, automate processes, and optimize workflows with secure systems."
        keywords="CRM portal development, custom CRM systems, CRM workflows automation, HubSpot Salesforce integrations, customer management software"
      />

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden pt-24 pb-28 lg:pt-32 lg:pb-36 bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Background glow elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and Description */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
                <Sparkles size={16} className="text-blue-500" />
                CRM SOLUTIONS
              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.1] text-slate-900">
                Build Stronger Customer
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent pb-1">
                  Relationships With CRM
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                Streamline customer interactions, automate workflows, improve
                sales processes, and strengthen customer relationships with
                scalable CRM solutions tailored to your business needs.
              </p>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-[1.03] transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* STATS OVERLAY IN HERO */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group text-center lg:text-left rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200"
                  >
                    <h3 className="text-2xl font-bold text-blue-600 transition-transform duration-300 group-hover:scale-105">
                      {stat.value}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Illustration Mockup */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative glass-card border border-slate-200/50 p-3 rounded-3xl shadow-2xl hover:rotate-1 hover:scale-[1.02] transition-all duration-500 max-w-[420px] lg:max-w-none">
                <img
                  src="/crm_dashboard.png"
                  alt="SyncTech CRM Dashboard Solutions"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                {/* Micro notification badge */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white flex items-center gap-1.5 animate-bounce">
                  <CheckCircle size={12} />
                  Salesforce Synced
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OVERVIEW */}
      {/* ========================================================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-4xl">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Overview
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold mb-8">
              CRM Solutions Designed For Modern Businesses
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Customer relationships are the foundation of every successful
              business. Modern CRM solutions help organizations manage customer
              interactions, improve communication, automate workflows, and
              strengthen long-term customer relationships.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our CRM solutions are designed to centralize customer data,
              optimize sales processes, enhance collaboration, and provide
              valuable business insights through intelligent reporting and
              automation.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're managing leads, tracking opportunities, supporting
              customers, or analyzing business performance, our CRM solutions
              help streamline operations and improve efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE CRM SOLUTIONS WIDGET */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Interactive Preview
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 tracking-tight">
              Test Drive Our CRM Features
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Explore a sandbox model of our custom pipeline management and simulate the return on investment (ROI) that custom automation brings.
            </p>

            {/* Selector Tabs */}
            <div className="inline-flex p-1 bg-slate-200/80 backdrop-blur rounded-xl mt-8">
              <button
                type="button"
                onClick={() => setActiveTab("pipeline")}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === "pipeline"
                    ? "bg-white text-blue-600 shadow"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                1. Sandbox Pipeline Dashboard
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("roi")}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeTab === "roi"
                    ? "bg-white text-blue-600 shadow"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                2. CRM ROI Savings Calculator
              </button>
            </div>
          </div>

          {activeTab === "pipeline" ? (
            <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden p-6 md:p-8">
              {/* Header metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block">Total Active Leads</span>
                  <span className="text-2xl font-black text-slate-800">{leads.length}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block">Total Pipeline Value</span>
                  <span className="text-2xl font-black text-blue-600">${totalPipeline.toLocaleString()}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block">Closed Deals Revenue</span>
                  <span className="text-2xl font-black text-green-600">${closedRevenue.toLocaleString()}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block">Simulated Win Rate</span>
                  <span className="text-2xl font-black text-cyan-600">{winRate}%</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mb-6 justify-between items-center">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Drag/Move Interactive Pipeline:</h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={addLead}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-all flex items-center gap-1.5"
                  >
                    <Plus size={14} /> Add Random Lead
                  </button>
                  <button
                    type="button"
                    onClick={resetLeads}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-all flex items-center gap-1.5"
                  >
                    <RotateCcw size={14} /> Reset Board
                  </button>
                </div>
              </div>

              {/* Columns */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {STAGES.map(stage => {
                  const stageLeads = leads.filter(l => l.stage === stage);
                  return (
                    <div key={stage} className="bg-slate-50/50 border border-slate-200 p-4 rounded-2xl min-h-[250px]">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-black text-slate-700 uppercase tracking-wider">{stage}</span>
                        <span className="text-xs px-2 py-0.5 bg-slate-250 text-slate-700 rounded-full font-bold">{stageLeads.length}</span>
                      </div>
                      <div className="space-y-3">
                        {stageLeads.map(lead => (
                          <div
                            key={lead.id}
                            className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
                          >
                            <h4 className="text-sm font-bold text-slate-900 mb-1">{lead.name}</h4>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-xs font-bold text-blue-600">${lead.value.toLocaleString()}</span>
                              <span className="text-[10px] text-slate-400">Owner: {lead.owner}</span>
                            </div>
                            {/* Movement controllers */}
                            <div className="flex justify-end gap-1.5 mt-3 pt-3 border-t border-slate-100">
                              {STAGES.indexOf(stage) > 0 && (
                                <button
                                  type="button"
                                  onClick={() => moveLead(lead.id, -1)}
                                  className="w-6 h-6 rounded flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold"
                                >
                                  ←
                                </button>
                              )}
                              {STAGES.indexOf(stage) < STAGES.length - 1 && (
                                <button
                                  type="button"
                                  onClick={() => moveLead(lead.id, 1)}
                                  className="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-600 text-[10px] font-bold flex items-center gap-1"
                                >
                                  Advance →
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Lead Capture CTA at bottom of Sandbox board */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-500 text-center sm:text-left">
                  Need a custom sales funnel pipeline synced with your email or legacy databases?
                </p>
                <Link
                  to={`/contact-us?service=Enterprise%20CRM%20Portal&source=Pipeline%20Sandbox&activeLeads=${leads.length}&pipelineValue=${totalPipeline}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-750 px-6 py-3.5 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Deploy Custom CRM Pipeline
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Inputs */}
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-6">Adjust Your Company Scopes</h3>
                  
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold text-slate-700">Monthly Leads Received</span>
                      <span className="text-base font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">{roiLeads} Leads</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={roiLeads}
                      onChange={e => setRoiLeads(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-semibold">
                      <span>10 Leads</span>
                      <span>500 Leads</span>
                      <span>1,000 Leads</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold text-slate-700">Manual Work Hours Per Lead</span>
                      <span className="text-base font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">{roiHours} Hours</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={roiHours}
                      onChange={e => setRoiHours(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-semibold">
                      <span>1 Hour</span>
                      <span>5 Hours</span>
                      <span>10 Hours</span>
                    </div>
                  </div>
                </div>

                {/* Outputs */}
                <div className="bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-8 rounded-2xl text-white border border-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Zap size={18} className="text-cyan-400 animate-pulse" />
                    Estimated Savings Analysis
                  </h3>

                  <div className="space-y-6">
                    <div className="border-b border-white/10 pb-4">
                      <span className="text-xs text-slate-400 uppercase tracking-widest font-bold block mb-1">Estimated Hours Spent Manually</span>
                      <div className="text-2xl font-black text-white flex items-center gap-2">
                        <Clock size={20} className="text-slate-400" />
                        {totalManualHours} Hrs / month
                      </div>
                    </div>

                    <div className="border-b border-white/10 pb-4">
                      <span className="text-xs text-cyan-400 uppercase tracking-widest font-bold block mb-1">Time Recovered via Automation</span>
                      <div className="text-3xl font-black text-cyan-300">
                        {hoursSavedWithCRM} Hrs saved
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">Based on an average 65% improvement in process efficiency.</p>
                    </div>

                    <div>
                      <span className="text-xs text-green-400 uppercase tracking-widest font-bold block mb-1">Monthly Cost Savings</span>
                      <div className="text-3xl font-black text-green-400">
                        ${savingsUSD.toLocaleString()} / mo
                      </div>
                      <div className="text-base text-slate-300 font-semibold mt-1">
                        ₹{savingsINR.toLocaleString()} / month
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <Link
                        to={`/contact-us?service=Enterprise%20CRM%20Portal&source=ROI%20Calculator&hoursSaved=${hoursSavedWithCRM}&savings=${savingsUSD}`}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 px-6 py-3.5 text-slate-900 font-bold text-xs shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        Claim My CRM Savings
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* CRM TECHNOLOGIES */}
      {/* ========================================================= */}

      {/* ========================================================= */}
      {/* CRM SERVICES */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Services
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              CRM Services We Offer
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Comprehensive CRM solutions that improve customer engagement,
              streamline operations, and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FEATURES */}
      {/* ========================================================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Features
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Key Features & Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
                >
                  <Icon
                    className="text-blue-600 mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    size={28}
                  />

                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BENEFITS */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">
              Benefits
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Business Benefits
            </h2>

            <p className="mt-6 text-slate-300 text-lg">
              Transform customer relationships into long-term business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {crmBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-2xl border border-slate-800 p-6 transition-all duration-300 hover:border-blue-500 hover:bg-slate-900"
              >
                <CheckCircle
                  className="text-green-400 shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={22}
                />

                <span className="text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              CRM Solutions Designed Around Your Business
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              We help businesses streamline customer interactions, improve
              productivity, and build stronger customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INDUSTRIES */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Industries We Serve
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              CRM Solutions Across Industries
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
                >
                  <Icon
                    className="text-blue-600 mb-5 group-hover:scale-110 transition-transform"
                    size={30}
                  />

                  <h3 className="font-semibold text-lg mb-3">
                    {industry.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {industry.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CRM PLATFORMS */}
      {/* ========================================================= */}

      <CrmTechnologies />

      {/* ========================================================= */}
      {/* IMPLEMENTATION PROCESS */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-400 font-semibold uppercase tracking-wider">
              Implementation Process
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Our CRM Implementation Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {implementationProcess.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-800 p-8 hover:border-blue-500 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-blue-400">
                    {item.step}
                  </span>

                  <ArrowRight className="text-slate-600" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Our Commitment
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Building Better Customer Relationships
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              We help businesses leverage CRM technology to improve customer
              engagement, streamline operations, and support long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ SECTION */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              FAQs
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Answers to common questions about CRM solutions and
              implementation.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-slate-200 rounded-2xl p-6 bg-white transition-all duration-300 hover:border-blue-300"
              >
                <summary className="flex cursor-pointer items-center justify-between list-none text-lg font-semibold">
                  {faq.question}

                  <HelpCircle
                    size={22}
                    className="text-blue-600 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA SECTION */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-blue-400 font-semibold uppercase tracking-wider">
            Get Started
          </span>

          <h2 className="mt-4 text-4xl lg:text-6xl font-bold">
            Ready To Transform Customer Relationships?
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-relaxed">
            Empower your team with a CRM solution that centralizes customer
            data, automates workflows, improves collaboration, and drives
            business growth.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              CRM Strategy & Planning
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              Custom CRM Implementation
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              Ongoing Support & Optimization
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
