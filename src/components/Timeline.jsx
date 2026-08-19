import { timeline } from '../data.js'

export default function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <div className="timeline-section__inner">
        <h2>Timeline</h2>
        <div className="timeline-wrap">
          <div className="timeline-line" aria-hidden="true"></div>
          <div className="timeline">
            {timeline.map(({ year, title, desc, logo, mono }) => (
              <div className="tl-item" key={title}>
                <div className="tl-dot">
                  {logo ? (
                    <img className="tl-logo" src={logo} alt={`${title} logo`} />
                  ) : mono ? (
                    <span className="tl-mono">{mono}</span>
                  ) : null}
                </div>
                <div className="tl-inner">
                  <div className="tl-year">{year}</div>
                  <div className="tl-title">{title}</div>
                  <div className="tl-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
