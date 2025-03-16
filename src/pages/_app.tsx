import { sen } from "../util/fonts";
import { type AppType } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    document.documentElement.className = sen.variable;
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableColorScheme>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
