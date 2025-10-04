import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AxonLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6ff] to-[#eae6ff] text-gray-900 flex flex-col items-center justify-center px-6 py-10 scroll-smooth">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h2 className="text-2xl font-bold text-indigo-700">Axon</h2>
          <div className="flex gap-6 text-gray-700 font-medium">
            <a href="#hero" className="hover:text-indigo-600 transition">Home</a>
            <a href="#features" className="hover:text-indigo-600 transition">Features</a>
            <a href="#about" className="hover:text-indigo-600 transition">About</a>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mt-32"
      >
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Axon — Your Intelligent macOS Assistant
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Axon reads your screen, understands intent, and executes tasks automatically.
          Powered by Google Gemini for step-by-step macOS automation.
        </p>
        <Button className="px-6 py-3 text-lg rounded-full shadow-md bg-indigo-600 hover:bg-indigo-700">
          Try Axon <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.section>

      {/* Process Section */}
      <motion.section
        id="features"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid md:grid-cols-5 gap-4 mt-20 w-full max-w-5xl"
      >
        {[
          {
            title: "User Input",
            desc: "You type or speak your command to Axon.",
          },
          {
            title: "Reads Screen",
            desc: "Axon captures and interprets on-screen context.",
          },
          {
            title: "Gemini Generates Plan",
            desc: "Gemini creates a step-by-step automation plan.",
          },
          {
            title: "Execution Engine",
            desc: "Axon performs OS actions — clicks, types, and opens apps.",
          },
          {
            title: "Follow-Up Options",
            desc: "Axon displays results and suggests next actions.",
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <Card className="rounded-2xl bg-white/80 backdrop-blur-md border-none shadow-lg text-center py-8 w-full">
              <CardContent>
                <h3 className="font-semibold text-xl mb-2 text-indigo-700">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-xs mx-auto">{step.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* About Section */}
      <section id="about" className="mt-32 max-w-3xl text-center text-gray-700">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">About Axon</h2>
        <p>
          Axon bridges human intent and digital execution. It’s built for people who want their computers to understand them — not the other way around. By merging multimodal perception with generative reasoning, Axon expands accessibility and digital fluency.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-gray-500 text-sm">
        <p>© 2025 Axon Labs. Built for seamless macOS automation.</p>
      </footer>
    </div>
  );
}

