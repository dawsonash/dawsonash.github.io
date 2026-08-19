import heroImg from '../assets/hero.jpg'
import { navLinks } from '../data.js'

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__bg"
        src={heroImg}
        alt="The Flatirons above Boulder, Colorado, wrapped in low clouds"
      />
      <div className="hero__scrim" aria-hidden="true"></div>

      <nav className="nav" aria-label="Primary">
        {navLinks.map(({ label, href, active }) => (
          <a key={label}  href={href}>
            {label}
          </a>
        ))}
      </nav>

      <div className="hero__foot">
        <div className="hero__chips">
          <span className="chip">Boulder, CO</span>
        </div>
        <h1 className="hero__title">DAWSON ASH</h1>
      </div>
    </section>
  )
}
