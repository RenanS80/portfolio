import { Skill } from 'types/Skill';
import './style.css';

type Props = {
    skill: Skill;
}

function SkillCard({ skill } : Props) {
  return (
    <div className="skill-card">
        <div className="skill-card__image">
            <img src={skill.image} alt={skill.name} />
        </div>
        <div className="skill-card__info">
            <p>{skill.name}</p>
            <p>{skill.level}</p>
        </div>
    </div>
  );
}

export default SkillCard;


