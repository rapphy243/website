import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rapphy243</title>
        <meta name="description" content="Rapphy243" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#ee82ce] to-[#6095ea]">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-left">
          <h2 className="text-2xl font-bold mb-4 text-black">Rapphy243</h2>
          <p className="text-gray-700">
            This is some test text
          </p>
        </div>
      </main>
    </>
  );
}
