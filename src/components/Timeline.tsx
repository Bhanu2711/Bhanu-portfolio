import type { TimelineItem } from '../data/portfolio';
import { Reveal } from './Reveal';

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <Reveal className="timeline-item" delay={index * 0.08} key={`${item.organization}-${item.period}`}>
          <div className="timeline-marker" aria-hidden="true" />
          <div>
            <p className="timeline-period">{item.period}</p>
            <h3>{item.title}</h3>
            <p className="timeline-org">
              {item.organization}
              {item.location ? `, ${item.location}` : ''}
            </p>
            <p>{item.description}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
