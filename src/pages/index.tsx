import Head from "next/head";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { FaYoutube, FaGithub, FaRegAddressCard } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rapphy243</title>
        <meta name="description" content="Rapphy243" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#ee82ce] to-[#6095ea] dark:from-[#4D0A4B] dark:to-[#03023F]">
        <div className="bg-[#eceff4] dark:bg-[#2e3440] rounded-2xl shadow-2xl p-10 max-w-md text-left transition-all duration-300 dark:shadow-gray-900">
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-[#eceff4]">
            Rapphy243
          </h2>
          <p className="text-gray-700 dark:text-[#eceff4]">
            Just some random on the internet.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="https://github.com/rapphy243" title="Github" className="text-gray-700 dark:text-[#eceff4] transition-colors duration-300 hover:text-[#6095ea] dark:hover:text-[#4D0A4B]">
              <FaGithub className="w-7 h-7"/>
            </a>
            <a href="https://youtube.com/@243" title="Youtube" className="text-red-500 dark:text-[#eceff4] transition-colors duration-300 hover:text-[#6095ea] dark:hover:text-[#4D0A4B]">
              <FaYoutube className="w-7 h-7"/>
            </a>
            <a href="/about" title="About" className="text-gray-700 dark:text-gray-300 transition-colors duration-300 hover:text-[#6095ea] dark:hover:text-[#4D0A4B]">
              <FaRegAddressCard className="w-7 h-7"/>
            </a>
          </div>
        </div>
        <div className="fixed bottom-4 right-4">
          <ThemeToggleButton />
        </div>
      </main>
    </>
  );
}