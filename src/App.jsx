import { useState, useEffect } from "react";
import ProfileForm from "./Components/ProfileForm";
import MatchList from "./Components/MatchList";
import MatchPopup from "./Components/MatchPopup"
import { t } from "./i18n";
import './App.css'

export default function App() {
  const [activeMatch, setActiveMatch] = useState(null);

  const browserLang = navigator.language.slice(0, 2);
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

  setUsers((prev) => {
    const updatedUsers = [...prev, profile];

    // 🔥 CHECK FOR MATCH
    for (let i = 0; i < updatedUsers.length - 1; i++) {
      const other = updatedUsers[i];

      if (
        other.teachSkill === profile.learnSkill &&
        other.learnSkill === profile.teachSkill
      ) {
        // Generate unique Jitsi link for this match
        const roomName = `match-${other.name}-${profile.name}-${Date.now()}`;
        const meetLink = `https://meet.jit.si/${roomName}`;

        setActiveMatch([
          { ...other, meetLink },
          { ...profile, meetLink },
        ]); // 🎉 MATCH FOUND
        break;
      }
    }

    return updatedUsers;
  });
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
      <MatchPopup
        match={activeMatch}
        onClose={() => setActiveMatch(null)}
        t={t}
        lang={lang}
      />

    </div>
  );
}
