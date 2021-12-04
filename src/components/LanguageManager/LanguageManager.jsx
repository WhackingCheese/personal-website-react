import { createContext, useState } from "react";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();
const defaultLang = 'is';
const availablelangs = ['en', 'is'];

function getLangCookie() {
  return cookies.get('lang');
}

function setLangCookie(lang) {
  document.documentElement.lang = lang;
  cookies.set('lang', lang);
}

let language = getLangCookie();
if (!language || !availablelangs.includes(language)) {
  setLangCookie(defaultLang);
  language = defaultLang;
} else {
  document.documentElement.lang = language;
}

const LanguageContext = createContext();

function LanguageManager(props) {

  const [ lang, setLang ] = useState(language);

  function changeLang() {
    if (getLangCookie() === 'is') {
      setLangCookie('en');
      setLang('en');
    } else {
      setLangCookie('is');
      setLang('is');
    }
  }
  
  return (
    <LanguageContext.Provider value={[lang, changeLang]}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageManager };
