import {
  ArrowRight,
  Download,
  ExternalLink,
  FileDown,
  MapPin,
} from 'lucide-react';
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { FloatingNav } from './components/FloatingNav';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Reveal } from './components/Reveal';
import { SectionHeading } from './components/SectionHeading';
import { SkillGroups } from './components/SkillGroups';
import { Timeline } from './components/Timeline';
import {
  aboutHighlights,
  achievements,
  certifications,
  contactLinks,
  education,
  experience,
  navItems,
  profile,
  projects,
  skillGroups,
} from './data/portfolio';

function App() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, 110]);
  const heroScale = useTransform(scrollY, [0, 900], [1.03, 1.12]);

  return (
    <MotionConfig reducedMotion="user">
      <FloatingNav items={navItems} resumePath={profile.resumePath} />
      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <motion.div
            className="hero-image"
            style={{
              backgroundImage: `url(${profile.heroImage})`,
              ...(reduceMotion ? {} : { y: heroY, scale: heroScale }),
            }}
            aria-hidden="true"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <motion.p
              className="eyebrow hero-eyebrow"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Portfolio / Creative Developer
            </motion.p>
            <motion.h1
              id="hero-title"
              aria-label={profile.name}
              initial={reduceMotion ? false : { opacity: 0, y: 34 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span aria-hidden="true">Bhanu</span>
              <span aria-hidden="true">Prakash</span>
              <span aria-hidden="true">Ponugupati</span>
            </motion.h1>
            <motion.p
              className="hero-lede"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {profile.role}
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <a className="button button-primary" href="#projects">
                View Projects
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="button button-secondary" href={profile.resumePath} download>
                Download Resume
                <Download aria-hidden="true" size={18} />
              </a>
            </motion.div>
          </div>
          <div className="hero-meta" aria-label="Profile highlights">
            <span>{profile.location}</span>
            <span>Computer Science</span>
            <span>2025 Graduate</span>
          </div>
        </section>

        <section className="page-section about-section" id="about" aria-labelledby="about-title">
          <div className="section-inner about-layout">
            <Reveal>
              <SectionHeading
                id="about-title"
                eyebrow="About Me"
                title="A grounded engineering profile with a refined creative edge."
                copy={profile.summary}
              />
            </Reveal>
            <Reveal className="about-panel" delay={0.12}>
              <p>
                Bhanu is building toward developer work that values clarity, dependable systems,
                and purposeful interfaces. His academic path is anchored in Computer Science,
                supported by practical exposure to Salesforce development, customer-facing
                operations, and project work in machine learning and applied Python.
              </p>
              <div className="about-list">
                {aboutHighlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="page-section" id="experience" aria-labelledby="experience-title">
          <div className="section-inner">
            <Reveal>
              <SectionHeading
                id="experience-title"
                eyebrow="Experience"
                title="Professional exposure across customer operations and developer training."
                copy="The timeline reflects only confirmed employment and internship information from the supplied brief."
              />
            </Reveal>
            <Timeline items={experience} />
          </div>
        </section>

        <section className="page-section contrast-section" id="projects" aria-labelledby="projects-title">
          <div className="section-inner">
            <Reveal>
              <SectionHeading
                id="projects-title"
                eyebrow="Featured Projects"
                title="Focused builds with practical technical foundations."
                copy="Project cards avoid invented links or metrics and leave clear space for future case-study updates."
              />
            </Reveal>
            <ProjectShowcase projects={projects} />
          </div>
        </section>

        <section className="page-section" id="skills" aria-labelledby="skills-title">
          <div className="section-inner">
            <Reveal>
              <SectionHeading
                id="skills-title"
                eyebrow="Technical Skills"
                title="A compact toolkit across software, data, cloud, and systems."
              />
            </Reveal>
            <SkillGroups groups={skillGroups} />
          </div>
        </section>

        <section className="page-section split-section" id="education" aria-labelledby="education-title">
          <div className="section-inner split-layout">
            <Reveal>
              <SectionHeading
                id="education-title"
                eyebrow="Education"
                title="Academic foundation and verified certifications."
              />
            </Reveal>
            <div className="education-content">
              <Reveal className="education-list" delay={0.08}>
                {education.map((item) => (
                  <article className="education-item" key={`${item.title}-${item.detail}`}>
                    <p>{item.period ?? 'Academic record'}</p>
                    <h3>{item.title}</h3>
                    <span>{item.institution}</span>
                    <strong>{item.detail}</strong>
                  </article>
                ))}
              </Reveal>
              <Reveal className="certification-panel" delay={0.16}>
                <h3>Certifications</h3>
                <ul>
                  {certifications.map((certification) => (
                    <li key={certification.title}>
                      <a
                        href={certification.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${certification.title} certificate in a new tab`}
                      >
                        {certification.title}
                        <ExternalLink aria-hidden="true" size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="page-section contrast-section" id="achievements" aria-labelledby="achievements-title">
          <div className="section-inner">
            <Reveal>
              <SectionHeading
                id="achievements-title"
                eyebrow="Achievements & Interests"
                title="Technical curiosity strengthened by presentation, sport, and leadership."
              />
            </Reveal>
            <div className="achievement-grid">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;

                return (
                  <Reveal className="achievement-item" delay={index * 0.06} key={achievement.title}>
                    <Icon aria-hidden="true" size={22} />
                    <span>{achievement.title}</span>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="page-section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-inner contact-layout">
            <Reveal>
              <SectionHeading
                id="contact-title"
                eyebrow="Contact"
                title="Let's build something precise, useful, and quietly polished."
                copy="Reach Bhanu through verified professional channels."
              />
            </Reveal>
            <Reveal className="contact-panel" delay={0.12}>
              <div className="contact-links">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  const opensInNewTab = link.href?.startsWith('http');
                  const content = (
                    <>
                      <Icon aria-hidden="true" size={20} />
                      <span>
                        <strong>{link.label}</strong>
                        {link.value}
                      </span>
                      {link.href ? <ExternalLink aria-hidden="true" size={16} /> : null}
                    </>
                  );

                  return link.href ? (
                    <a
                      className="contact-link"
                      href={link.href}
                      key={link.label}
                      rel={opensInNewTab ? 'noopener noreferrer' : undefined}
                      target={opensInNewTab ? '_blank' : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="contact-link unavailable" aria-disabled="true" key={link.label}>
                      {content}
                    </div>
                  );
                })}
              </div>
              <a className="resume-card" href={profile.resumePath} download>
                <FileDown aria-hidden="true" size={24} />
                <span>
                  <strong>Download Resume</strong>
                  Get the verified PDF resume.
                </span>
              </a>
              <p className="contact-note">
                <MapPin aria-hidden="true" size={16} />
                {profile.location}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>Bhanu Prakash Ponugupati</span>
        <a href="#top">Back to top</a>
      </footer>
    </MotionConfig>
  );
}

export default App;
