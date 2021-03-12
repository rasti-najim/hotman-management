import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Arabic from "../lang/ar.json";
import English from "../lang/en.json";

export const Context = React.createContext();

let local = navigator.language;
const language = window.localStorage.getItem("lang");
let lang;
if (language) {
  if (language === "en") {
    lang = English;
    local = "en";
  } else {
    lang = Arabic;
    local = "ar";
  }
} else {
  if (local === "en") {
    lang = English;
  } else {
    lang = Arabic;
  }
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);
  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      window.localStorage.setItem("lang", "en");
      setMessages(English);
    } else {
      setMessages(Arabic);
      window.localStorage.setItem("lang", "ar");
    }
  }
  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};
export default Wrapper;
