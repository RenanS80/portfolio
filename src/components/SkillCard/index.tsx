import { useState } from "react";
import { I18N_STORAGE_KEY } from "utils/lang";

import { Skill } from 'types/Skill';
import './style.css';

type Props = {
    skill: Skill;
}

function SkillCard({ skill } : Props) {

  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  return (
    <div className="skill-card">
        <div className="skill-card__image">
            <img src={skill.image} alt={skill.name} />
        </div>
        <div className="skill-card__info">
            <p>{skill.name}</p>
            <p>{language === 'en-US' ? skill.levelEn : skill.level}</p>
        </div>
    </div>
  );
}

export default SkillCard;


