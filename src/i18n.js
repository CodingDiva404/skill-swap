import en from "../i18n/en.json";
import es from "../i18n/es.json";
import hi from "../i18n/hi.json";
import fr from "../i18n/fr.json";

export const translations = { en, hi, fr , es };


let currentLang = localStorage.getItem("lang") || "en";

// export const setLang = (lang) => {
//   currentLang = lang;
//   localStorage.setItem("lang", lang);
// };

export const t = (key, lang = "en", vars = {}) => {
  let text = translations[lang]?.[key] || key;

  Object.keys(vars).forEach((v) => {
    text = text.replace(`{{${v}}}`, vars[v]);
  });

  return text;
};
