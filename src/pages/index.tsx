import Head from "next/head";
import ThemeToggleButton from "../components/ThemeToggleButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rapphy243</title>
        <meta name="description" content="Rapphy243" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#ee82ce] to-[#6095ea] dark:from-[#4D0A4B] dark:to-[#03023F]">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-5 max-w-md text-left transition-all duration-300 dark:shadow-gray-900">
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
            Rapphy243
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Just some random on the internet.
          </p>
        </div>
        <div className="fixed bottom-4 right-4">
          <ThemeToggleButton />
        </div>
      </main>
    </>
  );
}