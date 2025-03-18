import Head from "next/head";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useThemeUtils } from "../util/themeUtils";
import PageLayout from "../components/PageLayout";

export default function About() {
  const { getThemeClass } = useThemeUtils();

  // For fade-in animation when page loads
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  // Get theme-dependent classes
  const cardClass = getThemeClass(
    "bg-[#eceff4]",
    "bg-[#2e3440] shadow-gray-900"
  );

  const textClass = getThemeClass(
    'text-gray-700',
    'text-[#eceff4]'
  );
  
  return (
    <>
      <Head>
        <title>About Me | Rapphy243</title>
        <meta name="description" content="About Rapphy243" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
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
      </PageLayout>
    </>
  );
}
