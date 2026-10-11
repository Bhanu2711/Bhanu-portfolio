import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import type { NavItem } from '../data/portfolio';

type FloatingNavProps = {
  items: NavItem[];
  resumePath: string;
};

export function FloatingNav({ items, resumePath }: FloatingNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: '-18% 0px -58% 0px',
        threshold: [0.16, 0.32, 0.48],
      },
    );

    const handleTopState = () => {
      if (window.scrollY < 120) {
        setActiveId('');
      }
    };

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', handleTopState, { passive: true });
    handleTopState();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleTopState);
    };
  }, [items]);

  return (
    <nav className="floating-nav" aria-label="Primary">
      <a className="brand-mark" href="#top" aria-label="Bhanu Prakash home">
        BP
      </a>
      <div className="nav-links">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={activeId === item.id ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
      <a className="nav-resume" href={resumePath} download>
        <Download aria-hidden="true" size={16} />
        <span>Resume</span>
      </a>
    </nav>
  );
}
