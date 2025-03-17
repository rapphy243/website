import Head from "next/head";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import ThemeToggleButton from "../components/ThemeToggleButton";
import Link from "next/link";
import { useThemeUtils } from "../util/themeUtils";

export default function About() {
  const { getThemeClass, renderWhenThemeReady } = useThemeUtils();

  // For fade-in animation when page loads
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  // For theme button animation
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
  };

  return (
    <>
      <Head>
        <title>About Me | Rapphy243</title>
        <meta name="description" content="About Rapphy243" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {renderWhenThemeReady(() => {
        // Apply theme classes using the utility
        const bgClass = getThemeClass(
          "bg-gradient-to-br from-[#ee82ce] to-[#6095ea]",
          "bg-gradient-to-br from-[#4D0A4B] to-[#03023F]"
        );

        const cardClass = getThemeClass(
          "bg-[#eceff4]",
          "bg-[#2e3440] shadow-gray-900"
        );

        const textClass = getThemeClass(
          'text-gray-700',
          'text-[#eceff4]'
        );
        
        return (
          <main className={`flex min-h-screen flex-col items-center justify-center ${bgClass} p-4 transition-all duration-300`}>
            <motion.div 
              className={`${cardClass} rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-left transition-all duration-300`}
              variants={containerVariants} 
              initial="hidden" 
              animate="visible"
            >
              <Link href="/" className={`flex items-center mb-6 ${textClass} hover:text-[#4D0A4B] dark:hover:text-[#ee82ce] transition-colors`}>
                <FaArrowLeft className="mr-2" />
              </Link>

              <div className={`space-y-6 ${textClass}`}>
                <section>
                  <p>
                  <b>Hi, I&apos;m Rapphy243.</b>
                  </p>
                </section>

                <section>
                  <p>
                  If you want to contact me you can contact me at <b>im<span className="group relative inline-block">
                    <span className="group-hover:hidden">[at]</span>
                    <span className="hidden group-hover:inline-block">@</span>
                  </span>rap.ph</b>. I&apos;m also available on Discord @<b>Rapphy243</b>.
                  </p>
                </section>
              </div>
            </motion.div>
            
            <motion.div 
              className="fixed bottom-4 right-4"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <ThemeToggleButton />
            </motion.div>
          </main>
        );
      })}
    </>
  );
}
