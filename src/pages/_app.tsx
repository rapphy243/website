import { sen } from "../util/fonts";
import { type AppType } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import PlausibleProvider from 'next-plausible'
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    document.documentElement.className = sen.variable;
  }, []);

  return (
    <PlausibleProvider customDomain="https://plausible.rapph.dev" trackOutboundLinks={true} selfHosted={true} domain="rap.ph">
      <ThemeProvider attribute="class" defaultTheme="system" enableColorScheme>
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  );
};

export default MyApp;
