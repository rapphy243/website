import Head from "next/head";
import { FaYoutube, FaGithub, FaRegAddressCard } from "react-icons/fa";
import { SocialLink } from "../components/SocialLink";
import { useThemeUtils } from "../util/themeUtils";
import PageLayout from "../components/PageLayout";
import { Card } from "../components/Card";

export default function Home() {
  const { getThemeClass } = useThemeUtils();
  
  const headingClass = getThemeClass('text-black', 'text-[#eceff4]');
  const textClass = getThemeClass('text-gray-700', 'text-[#eceff4]');

  return (
    <>
      <Head>
        <title>Rapphy243</title>
        <meta name="description" content="Rapphy243's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Card className="max-w-md p-10">
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
        </Card>
      </PageLayout>
    </>
  );
}