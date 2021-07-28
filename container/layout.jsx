import Head from "next/head";

import Header from "../components/header";
import { useTheme } from "../store/theme-context";

function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Head>
        <title>Webdev Nuggets</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="container max-w-6xl mx-auto">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
