import { roles } from '../data.js'

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About me</h2>
      <div className="about__inner">
        <p>
          I'm a third year computer science student at the University of Colorado
          Boulder. I'm most interested in integrating software into the processes
          people already rely on, finding the friction in an existing workflow
          and building the tool that streamlines it.
        </p>

        <div className="about__roles">
          {roles.map(({ tag, org, desc }) => (
            <div className="role" key={org}>
              <span className="role__tag">{tag}</span>
              <div>
                <div className="role__org">{org}</div>
                <div className="role__desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
