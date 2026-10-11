import type { SkillGroup } from '../data/portfolio';
import { Reveal } from './Reveal';

type SkillGroupsProps = {
  groups: SkillGroup[];
};

export function SkillGroups({ groups }: SkillGroupsProps) {
  return (
    <div className="skill-grid">
      {groups.map((group, index) => {
        const Icon = group.icon;

        return (
          <Reveal className="skill-group" delay={index * 0.06} key={group.title}>
            <div className="skill-group-title">
              <Icon aria-hidden="true" size={18} />
              <h3>{group.title}</h3>
            </div>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
