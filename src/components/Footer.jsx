import { socialLinks } from '../data.js'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <a className="footer__email" href="mailto:dawsonash22@gmail.com">
          dawsonash22@gmail.com <span className="arrow" aria-hidden="true">↗</span>
        </a>

        <div className="footer__links">
          {socialLinks.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              {label} <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
          <span className="footer__copyright">2026 DAWSON ASH</span>
        </div>
      </div>
    </footer>
  )
}
