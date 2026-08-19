import { useEffect, useState } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Timeline from './components/Timeline.jsx'
import Footer from './components/Footer.jsx'
import ProjectPage from './components/ProjectPage.jsx'
import { navLinks, projects } from './data.js'

// Clearance below the fixed nav pill before a section reads as "current".
const NAV_OFFSET = 90

function readRoute() {
  const match = window.location.hash.match(/^#\/project\/(.+)$/)
  return match ? { name: 'project', slug: match[1] } : { name: 'home' }
}

export default function App() {
  const [route, setRoute] = useState(readRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Two scroll-driven jobs: the fixed nav pill goes opaque past the hero, and
  // on the landing page the URL hash tracks whichever section you're reading.
  useEffect(() => {
    const isHome = route.name === 'home'
    const sectionIds = navLinks.map(({ href }) => href.slice(1))

    const sync = (updateHash) => {
      document.body.classList.toggle('is-scrolled', window.scrollY > 24)
      if (!isHome || !updateHash) return

      // A section counts as current once its top passes just under the nav.
      const line = window.scrollY + NAV_OFFSET
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2

      let current = null
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      }
      if (atBottom) current = sectionIds[sectionIds.length - 1]

      const next = current ? `#${current}` : ''
      if (next !== window.location.hash) {
        // replaceState, not location.hash — the latter fires hashchange and
        // re-jumps the scroll position mid-scroll.
        history.replaceState(null, '', next || window.location.pathname)
      }
    }

    const onScroll = () => sync(true)

    // The first pass only sets the pill: a deep link like /#about hasn't
    // scrolled there yet, and claiming the hash now would wipe it.
    sync(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [route])

  useEffect(() => {
    if (route.name === 'project') {
      window.scrollTo(0, 0)
      return
    }
    // Returning to the landing via an in-page anchor (e.g. #about from a project nav)
    const hash = window.location.hash
    if (hash.startsWith('#') && !hash.startsWith('#/')) {
      document.querySelector(hash)?.scrollIntoView()
    }
  }, [route])

  if (route.name === 'project') {
    const project = projects[route.slug]
    if (project) return <ProjectPage project={project} />
  }

  return (
    <>
      <Hero />
      <About />
      <Work />
      <Timeline />
      <Footer />
    </>
  )
}
