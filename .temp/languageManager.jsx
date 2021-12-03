import Cookies from 'universal-cookie';
import React from 'react';

const defaultLang = 'is';

const cookies = new Cookies();

function setLangCookie(newLang) {
  cookies.set('lang', newLang);
  document.documentElement.lang = newLang;
}

function getLangCookie() {
  return cookies.get('lang');
}

let cookie = getLangCookie();
if (!cookie) {
  cookies.set('lang', defaultLang);
  cookie = defaultLang;
}
document.documentElement.lang = cookie;

function trans(item, lang) {
  if (typeof item === 'string' || item instanceof String) {
    return item;
  }
  return item[lang];
}

const LangaugeContext = React.createContext(null);

export default LangaugeContext;
export { setLangCookie, getLangCookie, trans, LangaugeContext };
