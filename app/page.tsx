"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Eye, Cog, Sparkles, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function AxonLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6ff] to-[#eae6ff] text-gray-900 flex flex-col items-center scroll-smooth">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Axon Logo" width={36} height={36} />
            <h2 className="text-2xl font-bold text-indigo-700">Axon</h2>
          </div>
          <div className="flex gap-6 text-gray-700 font-medium">
            <a href="#hero" className="hover:text-indigo-600 transition">Home</a>
            <a href="#features" className="hover:text-indigo-600 transition">Features</a>
            <a href="#about" className="hover:text-indigo-600 transition">About</a>
          </div>
          <a
            href="#hero"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mt-40 px-4"
      >
        {/* Image above title */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Happy people using laptops"
            width={600}
            height={350}
            className="rounded-2xl shadow-md"
          />
        </div>

        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Axon — Your Intelligent macOS Assistant
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Axon reads your screen, understands intent, and executes tasks automatically.
          Powered by Google Gemini for step-by-step macOS automation.
        </p>
        <a
          href="#features"
          className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-lg rounded-full shadow-md transition"
        >
          Try Axon <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid md:grid-cols-5 sm:grid-cols-2 gap-6 mt-24 w-full max-w-6xl px-6"
      >
        {[
          {
            title: "User Input",
            desc: "You type or speak your command to Axon.",
            icon: <Monitor className="w-8 h-8 text-indigo-600 mb-2" />,
          },
          {
            title: "Reads Screen",
            desc: "Axon captures and interprets on-screen context.",
            icon: <Eye className="w-8 h-8 text-indigo-600 mb-2" />,
          },
          {
            title: "Gemini Generates Plan",
            desc: "Gemini creates a step-by-step automation plan.",
            icon: <Sparkles className="w-8 h-8 text-indigo-600 mb-2" />,
          },
          {
            title: "Execution Engine",
            desc: "Axon performs OS actions — clicks, types, and opens apps.",
            icon: <Cog className="w-8 h-8 text-indigo-600 mb-2" />,
          },
          {
            title: "Follow-Up Options",
            desc: "Axon displays results and suggests next actions.",
            icon: <RefreshCcw className="w-8 h-8 text-indigo-600 mb-2" />,
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 text-center transition w-full h-full"
          >
            {step.icon}
            <h3 className="font-semibold text-xl mb-2 text-indigo-700">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* About Section */}
      <section id="about" className="mt-32 max-w-3xl text-center text-gray-700 px-4">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">About Axon</h2>
        <p>
          Axon bridges human intent and digital execution. It’s built for people who want their computers
          to understand them — not the other way around. By merging multimodal perception with generative
          reasoning, Axon expands accessibility and digital fluency.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-24 mb-10 text-center text-gray-500 text-sm">
        <p>© 2025 Axon Labs. Built for seamless macOS automation.</p>
      </footer>
    </div>
  );
}
