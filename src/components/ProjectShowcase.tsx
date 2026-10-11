import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { Reveal } from './Reveal';

type ProjectShowcaseProps = {
  projects: Project[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <Reveal className="project-card" delay={index * 0.1} key={project.title}>
          <div className="project-card-top">
            <span>{project.eyebrow}</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-list" aria-label={`${project.title} technology stack`}>
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="project-status">{project.status}</p>
        </Reveal>
      ))}
    </div>
  );
}
