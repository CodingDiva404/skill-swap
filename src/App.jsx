import { useState, useEffect } from "react";
import ProfileForm from "./Components/ProfileForm";
import MatchList from "./Components/MatchList";
import { t } from "./i18n";
import './App.css'

export default function App() {
  const browserLang = navigator.language.slice(0, 2); // "en", "es", "hi", "fr"
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || browserLang || "en"
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleSaveProfile = (profile) => {
    const nameExists = users.some(
      (user) => user.name.toLowerCase() === profile.name.toLowerCase()
    );

    if (nameExists) {
      alert(t("error.duplicateName", lang));
      return;
    }

    setUsers((prev) => [...prev, profile]);
  };

  return (
    <div className="app-container">
      <div className="language-selector">
        <label>{t("language.select", lang)}:</label>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">🇬🇧 English</option>
          <option value="es">🇪🇸 Español</option>
          <option value="hi">🇮🇳 हिन्दी</option>
          <option value="fr">🇫🇷 Français</option>
        </select>
      </div>

      <ProfileForm onSave={handleSaveProfile} lang={lang} />
      <MatchList users={users} lang={lang} />
    </div>
  );
}
