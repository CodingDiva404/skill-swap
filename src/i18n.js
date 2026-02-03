import en from "../i18n/en.json";
import es from "../i18n/es.json";
import hi from "../i18n/hi.json";
import fr from "../i18n/fr.json";

const translations = { en, es, hi, fr };

export const t = (key, vars = {}) => {
  let text = translations[key];

  if (!text) return key; // <-- THIS is why keys appear

  Object.keys(vars).forEach((v) => {
    text = text.replace(`{{${v}}}`, vars[v]);
  });

  return text;
};