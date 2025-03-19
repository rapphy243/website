import Head from "next/head";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useThemeUtils } from "../util/themeUtils";
import PageLayout from "../components/PageLayout";
import { Card } from "../components/Card";

export default function About() {
  const { getThemeClass } = useThemeUtils();

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
        <Card className="max-w-2xl w-full">
        <Link href="/" className={`flex items-center mb-6 ${textClass} hover:text-[#ee82ce] dark:hover:text-[#4D0A4B] transition-colors`}>
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
        </Card>
      </PageLayout>
    </>
  );
}
