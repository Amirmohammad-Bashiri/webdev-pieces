import Head from "next/head";

import Header from "../components/header";
import { useTheme } from "../store/theme-context";

function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Head>
        <title>Webdev Nuggets</title>
      </Head>
      <div className="bg-white dark:bg-black min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
