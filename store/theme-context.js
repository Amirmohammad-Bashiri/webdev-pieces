import { createContext, useContext, useState, useEffect } from "react";
import AsyncLocalStorage from "@createnextapp/async-local-storage";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState();

  useEffect(() => {
    // const storedTheme = localStorage.getItem("theme") || "dark";
    AsyncLocalStorage.getItem("theme").then(storedTheme => {
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        setTheme("dark");
      }
    });
  }, []);

  const toggleTheme = theme => {
    setTheme(theme);

    if (theme) {
      AsyncLocalStorage.setItem("theme", theme);
      // localStorage.setItem("theme", theme);
    }
  };

  const context = { theme, toggleTheme };

  return <ThemeContext.Provider value={context} {...props} />;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be within a ThemeProvider");
  }

  return context;
}

export default ThemeProvider;
