import Head from "next/head";
import { motion } from "framer-motion";
import { FaYoutube, FaGithub, FaRegAddressCard } from "react-icons/fa";
import { SocialLink } from "../components/SocialLink";
import { useThemeUtils } from "../util/themeUtils";
import PageLayout from "../components/PageLayout";

export default function Home() {
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
  
  const headingClass = getThemeClass('text-black', 'text-[#eceff4]');
  const textClass = getThemeClass('text-gray-700', 'text-[#eceff4]');

  return (
    <>
      <Head>
        <title>Rapphy243</title>
        <meta name="description" content="Rapphy243" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <motion.div 
          className={`${cardClass} rounded-2xl shadow-2xl p-10 max-w-md text-left transition-all duration-300`}
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          <h2 className={`text-2xl font-bold mb-4 ${headingClass} duration-75`}>
            Rapphy243
          </h2>
          <p className={`${textClass} duration-75`}>
            Just some random on the internet.
          </p>
          <div className="flex mt-4 space-x-4">
            <SocialLink href="https://github.com/rapphy243" icon={<FaGithub className="w-7 h-7"/>} label="GitHub" />
            <SocialLink href="https://youtube.com/@243" icon={<FaYoutube className="w-7 h-7"/>} label="YouTube" colorClass="text-red-500" />
            <SocialLink href="./about" icon={<FaRegAddressCard className="w-7 h-7"/>} label="About" />
          </div>
        </motion.div>
      </PageLayout>
    </>
  );
}