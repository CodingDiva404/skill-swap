import { t } from "../i18n";
import '../App.css'


const MatchList = ({ users, lang }) => {
  // Generate matches
  const generateMatches = () => {
    const matches = [];
    for (let i = 0; i < users.length; i++) {
      for (let j = i + 1; j < users.length; j++) {
        const userA = users[i];
        const userB = users[j];

        if (
          userA.teachSkill === userB.learnSkill &&
          userB.teachSkill === userA.learnSkill
        ) {
          matches.push([userA, userB]);
        }
      }
    }
    return matches;
  };

  const matches = generateMatches();

  return (
    <div>
      <h2>{t("matchlist.title", lang)}</h2>

      {matches.length === 0 ? ( 
        <p>{t("matchlist.noMatches", lang)}</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          {matches.map((pair, index) => (
            <div
              key={index}
            >
              <p>
                <strong>{t("matchlist.name", lang)}:</strong> {pair[0].name} ↔ {pair[1].name}
              </p>
              <p>
                <strong>{t("matchlist.teach", lang)}:</strong> {pair[0].teachSkill} ↔{" "}
                <strong>{t("matchlist.learn", lang)}:</strong> {pair[1].learnSkill}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchList;
