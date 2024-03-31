import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((s) => !s);
  };
  const theme = isDark ? "dark":"light";
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme,isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  return useContext(ThemeContext);
};