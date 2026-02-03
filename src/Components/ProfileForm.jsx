import { useState, useEffect } from "react";
import { SKILLS } from "../Data/Skills";
import { t } from "../i18n";
import "../App.css";

const ProfileForm = ({ onSave }) => {
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  const [teachSkill, setTeachSkill] = useState(() => localStorage.getItem("teachSkill") || "");
  const [learnSkill, setLearnSkill] = useState(() => localStorage.getItem("learnSkill") || "");

  useEffect(() => localStorage.setItem("name", name), [name]);
  useEffect(() => localStorage.setItem("teachSkill", teachSkill), [teachSkill]);
  useEffect(() => localStorage.setItem("learnSkill", learnSkill), [learnSkill]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (teachSkill === learnSkill) {
      alert(t("error.sameSkill"));
      return;
    }

    onSave({ name, teachSkill, learnSkill });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{t("profile.create")}</h2>

      <div>
        <label>{t("profile.name")}</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>{t("skill.teach")}</label>
        <select
          value={teachSkill}
          onChange={(e) => {
            setTeachSkill(e.target.value);
            if (e.target.value === learnSkill) setLearnSkill("");
          }}
          required
        >
          <option value="">--Select--</option>
          {SKILLS.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>{t("skill.learn")}</label>
        <select
          value={learnSkill}
          onChange={(e) => setLearnSkill(e.target.value)}
          required
        >
          <option value="">--Select--</option>
          {SKILLS.map((skill) => (
            <option key={skill} value={skill} disabled={skill === teachSkill}>
              {skill}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">{t("profile.save")}</button>
    </form>
  );
};

export default ProfileForm;
