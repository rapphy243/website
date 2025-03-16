import Head from "next/head";
import { motion } from "framer-motion";
import { FaYoutube, FaGithub, FaRegAddressCard } from "react-icons/fa";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { SocialLink } from "../components/SocialLink";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Home() {
  // Add mounted state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // Mount component
  useEffect(() => {
    setMounted(true);
  }, []);

  // For fade-in animation when page loads
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  // For theme button animation, slightly delayed
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
  };

  // Apply a placeholder style before client-side hydration
  const bgClass = mounted && resolvedTheme === 'dark'
    ? "bg-gradient-to-br from-[#4D0A4B] to-[#03023F]"
    : "bg-gradient-to-br from-[#ee82ce] to-[#6095ea]";

  const cardClass = mounted && resolvedTheme === 'dark'
    ? "bg-[#2e3440] shadow-gray-900"
    : "bg-[#eceff4]";

  return (
    <>
      <Head>
        <title>Rapphy243</title>
        <meta name="description" content="Rapphy243" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`flex min-h-screen flex-col items-center justify-center ${bgClass} p-4 transition-all duration-300`}>
        <motion.div className={`${cardClass} rounded-2xl shadow-2xl p-10 max-w-md text-left transition-all duration-300`} variants={containerVariants} initial="hidden" animate="visible">
          <h2 className={`text-2xl font-bold mb-4 ${mounted && resolvedTheme === 'dark' ? 'text-[#eceff4]' : 'text-black'} duration-75`}>
            Rapphy243
          </h2>
          <p className={`${mounted && resolvedTheme === 'dark' ? 'text-[#eceff4]' : 'text-gray-700'} duration-75`}>
            Just some random on the internet.
          </p>
          <div className="flex mt-4 space-x-4">
            <SocialLink href="https://github.com/rapphy243" icon={<FaGithub className="w-7 h-7"/>} label="GitHub" />
            <SocialLink href="https://youtube.com/@243" icon={<FaYoutube className="w-7 h-7"/>} label="YouTube" colorClass="text-red-500" />
            <SocialLink href="/about" icon={<FaRegAddressCard className="w-7 h-7"/>} label="About" />
          </div>
        </motion.div>
        <motion.div className="fixed bottom-4 right-4"
          variants={buttonVariants}
          initial="hidden"
          animate="visible">
          <ThemeToggleButton />
        </motion.div>
      </main>
    </>
  );
}