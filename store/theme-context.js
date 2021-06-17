import {createContext, useContext, useState, useEffect} from "react";


const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState();
  
  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("theme")) || "light";
    setTheme(storedTheme);
  }, [])

  const toggleTheme = theme => {
    setTheme(theme);

    if (theme) {
      window.localStorage.setItem("theme", JSON.stringify(theme));
    }
  }

  const context = {theme, toggleTheme};

  return <ThemeContext.Provider value={context} {...props} />
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be within a ThemeProvider");
  }

  return context;
}

export default ThemeProvider;