import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import Cookies from "universal-cookie/es6";
import themes from "./Themes.styles";

const cookies = new Cookies();
const defaultTheme = 'light';
const availableThemes = ['light', 'dark'];

function getThemeCookie() {
  return cookies.get('theme');
}

function setThemeCookie(theme) {
  cookies.set('theme', theme);
}

let themeCookie = getThemeCookie();
if (!themeCookie || !availableThemes.includes(themeCookie)) {
  setThemeCookie(defaultTheme);
  themeCookie = defaultTheme;
}

const ThemeContext = createContext();

function ThemeManager(props) {
  
  const [ theme, setTheme ] = useState(themeCookie);

  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark');
      setThemeCookie('dark');
    } else {
      setTheme('light');
      setThemeCookie('light');
    }
  }

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      <ThemeProvider theme={themes[theme]}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeManager };
