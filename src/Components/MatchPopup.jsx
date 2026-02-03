import { useState } from "react";
import "../App.css";

const MatchPopup = ({ match, onClose, t, lang }) => {
  if (!match) return null;

  const [copied, setCopied] = useState(false);
  const [userA, userB] = match;

  const meetLink = userB.meetLink; // Already generated in App.jsx

  const handleCopy = () => {
    navigator.clipboard.writeText(meetLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="match-overlay">
      <div className="match-card">
        <h2>🎉 {t("matchlist.title", lang)}</h2>

        <p className="match-names">
          {t("matchlist.name", lang, {
            userA: userA.name,
            userB: userB.name,
          })}
        </p>

        <p>
          {t("matchlist.teach", lang, { skill: userA.teachSkill })} ↔{" "}
          {t("matchlist.learn", lang, { skill: userB.learnSkill })}
        </p>

        <div style={{ margin: "10px 0" }}>
          <input
            type="text"
            value={meetLink}
            readOnly
            style={{ width: "80%", marginRight: "5px" }}
          />
          <button onClick={handleCopy}>
            {copied ? "✅ Copied!" : "Copy Link"}
          </button>
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MatchPopup;
