import { workItems, projects } from '../data.js'

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="work__head">
        <h2>Selected Work</h2>
      </div>

      {workItems.map(({ title, slug, blurb }) => (
        <a className="work-row" href={`#/project/${slug}`} key={slug}>
          <div className="work-row__mark">
            {projects[slug]?.logo && (
              <img className="work-row__logo" src={projects[slug].logo} alt="" loading="lazy" />
            )}
          </div>
          <div className="work-row__body">
            <span className="work-row__title">{title}</span>
            {blurb && <p className="work-row__blurb">{blurb}</p>}
          </div>
          <div className="work-row__meta">
            <span className="work-row__arrow" aria-hidden="true">↗</span>
          </div>
        </a>
      ))}
    </section>
  )
}
