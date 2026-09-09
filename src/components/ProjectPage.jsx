import { navLinks } from '../data.js'
import Footer from './Footer.jsx'

function Section({ label, paragraphs }) {
  return (
    <section className="project-section">
      <div className="project-section__grid">
        <div className="project-section__label">{label}</div>
        <div className="project-section__body">
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProjectPage({ project }) {
  const {
    title,
    year,
    role,
    stack,
    liveUrl,
    liveLabel,
    cover,
    shot,
    shot2,
    wireframes,
    sections,
    outcome,
    next,
  } = project

  const [first, second] = sections

  return (
    <div className="project">
      {/* ---- hero image + nav ---- */}
      <section className="project-hero">
        {cover && <img className="project-hero__bg" src={cover} alt={`${title} cover`} />}
        <div className="project-hero__scrim" aria-hidden="true"></div>

        <nav className="nav" aria-label="Primary">
          {navLinks.map(({ label, href, active }) => (
            <a key={label} href={href} className={active ? 'nav__active' : undefined}>
              {label}
            </a>
          ))}
        </nav>

        <div className="project-hero__foot">
          <h1 className="project-hero__title">{title}</h1>
        </div>
      </section>

      {/* ---- meta ---- */}
      <section className="project-meta">
        <div className="project-meta__row">
          <div>
            <div className="project-meta__label">Role</div>
            <div className="project-meta__value">{role}</div>
          </div>
          <div>
            <div className="project-meta__label">Year</div>
            <div className="project-meta__value">{year}</div>
          </div>
          <div>
            <div className="project-meta__label">Stack</div>
            <div className="project-meta__value">{stack}</div>
          </div>
          {liveUrl && (
            <a className="project-meta__live" href={liveUrl} target="_blank" rel="noreferrer">
              {liveLabel || 'Live site'} ↗︎
            </a>
          )}
        </div>
      </section>

      {/* ---- problem ---- */}
      {first && <Section {...first} />}

      {/* ---- supporting shot ---- */}
      <section className="project-shot">
        <div className="project-shot__frame">
          {shot && <img className="project-shot__img" src={shot} alt={`${title} detail`} />}
        </div>
      </section>

      {/* ---- approach ---- */}
      {second && <Section {...second} />}

      {/* ---- optional second shot ---- */}
      {shot2 && (
        <section className="project-shot">
          <div className="project-shot__frame">
            <img className="project-shot__img" src={shot2.src} alt={`${title} detail`} />
          </div>
          {shot2.caption && <p className="project-shot__caption">{shot2.caption}</p>}
        </section>
      )}

      {/* ---- wireframes ---- */}
      {wireframes && (
        <section className="project-wires">
          <div className="project-wires__grid">
            {wireframes.shots.map(({ src, label }) => (
              <figure className="project-wires__item" key={src}>
                <div className="project-shot__frame">
                  <img className="project-shot__img" src={src} alt={label} loading="lazy" />
                </div>
                <figcaption className="project-wires__label">{label}</figcaption>
              </figure>
            ))}
          </div>
          {wireframes.caption && <p className="project-shot__caption">{wireframes.caption}</p>}
        </section>
      )}

      {/* ---- outcome ---- */}
      <section className="project-outcome">
        <div className="project-section__grid">
          <div className="project-section__label project-outcome__label">Outcome</div>
          <p className="project-outcome__text">{outcome}</p>
        </div>
      </section>

      {/* ---- next project ---- */}
      {next && (
        <a className="project-next" href={`#/project/${next.slug}`}>
          <span className="project-next__label">Next project</span>
          <span className="project-next__title">{next.title} ↗︎</span>
        </a>
      )}

      {/* ---- footer ---- */}
      <Footer />
    </div>
  )
}
