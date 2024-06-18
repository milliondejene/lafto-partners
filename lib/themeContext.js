import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
    loadThemeCSS(savedTheme);
  }, []);

  const loadThemeCSS = (theme) => {
    const mainCSSLink = document.getElementById('main-css');
    const responsiveCSSLink = document.getElementById('responsive-css');
    
    if (theme === 'light') {
      if (mainCSSLink) {
        mainCSSLink.href = '/css/light-version/style.css';
      } else {
        const link = document.createElement('link');
        link.id = 'main-css';
        link.rel = 'stylesheet';
        link.href = '/css/light-version/style.css';
        document.head.appendChild(link);
      }

      if (responsiveCSSLink) {
        responsiveCSSLink.href = '/css/light-version/responsive.css';
      } else {
        const link = document.createElement('link');
        link.id = 'responsive-css';
        link.rel = 'stylesheet';
        link.href = '/css/light-version/responsive.css';
        document.head.appendChild(link);
      }
    } else {
      if (mainCSSLink) {
        mainCSSLink.href = '/css/style.css';
      } else {
        const link = document.createElement('link');
        link.id = 'main-css';
        link.rel = 'stylesheet';
        link.href = '/css/style.css';
        document.head.appendChild(link);
      }

      if (responsiveCSSLink) {
        responsiveCSSLink.href = '/css/responsive.css';
      } else {
        const link = document.createElement('link');
        link.id = 'responsive-css';
        link.rel = 'stylesheet';
        link.href = '/css/responsive.css';
        document.head.appendChild(link);
      }
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    loadThemeCSS(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
