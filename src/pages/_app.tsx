import { sen } from "../util/fonts";
import { type AppType } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    document.documentElement.className = sen.variable;
    // Clear any theme data from localStorage for a clean slate
    localStorage.removeItem('theme'); 
    // Force light theme by removing any dark mode classes
    document.documentElement.classList.remove('dark'); 
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey={undefined} forcedTheme={undefined}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
