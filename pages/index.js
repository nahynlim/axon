import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Axon – Making computers easy for everyone</title>
        <meta
          name="description"
          content="Axon bridges the gap between human intent and digital action using Google Gemini and generative AI."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white to-purple-50 flex flex-col items-center justify-center px-6 text-center">
        <Image
          src="/logo.png"
          alt="Axon logo"
          width={120}
          height={120}
          className="mb-4"
        />
        <h1 className="text-5xl font-bold text-purple-700 mb-2">Axon</h1>
        <p className="text-lg italic text-gray-700 mb-6">
          Making computers easy for everyone
        </p>

        <p className="max-w-2xl text-gray-600 mb-10">
          Axon is a generative AI assistant that helps users perform on-screen
          actions using natural language. By combining Google Gemini and
          accessibility APIs, Axon bridges the digital divide and empowers those
          who struggle with technology to navigate the digital world seamlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/yourteam/axon"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition"
          >
            View on GitHub
          </a>
          <a
            href="https://youtu.be/demo_link_here"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-purple-600 text-purple-700 rounded-xl hover:bg-purple-50 transition"
          >
            Watch Demo
          </a>
        </div>

        <footer className="mt-12 text-sm text-gray-500">
          Built with ❤️ at HackHarvard 2025
        </footer>
      </main>
    </>
  );
}
