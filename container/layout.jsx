import Header from "../components/header";
import { useTheme } from "../store/theme-context";

function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="bg-white dark:bg-black">
        <div className="container mx-auto max-w-4xl">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
