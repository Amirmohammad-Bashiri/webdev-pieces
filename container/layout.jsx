import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";

import Header from "../components/header";
import ErrorFallback from "../components/ErrorFallback";
import { useTheme } from "../store/theme-context";

function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Head>
        <title>Webdev Pieces</title>
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
      </Head>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="container max-w-6xl mx-auto">
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => location.reload()}>
            <Header />
            {children}
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default Layout;
