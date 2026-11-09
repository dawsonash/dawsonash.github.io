// Content for the site. Editing copy or adding entries here updates the UI.

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work', active: true },
  { label: 'Contact', href: '#contact' },
]

export const roles = [
  {
    tag: 'Software',
    org: 'CU Digital Accessibility Office',
    desc: 'Solo-developed DAO Tools, the office’s internal captioning platform: on-demand GPU transcription with a human review pass, from terminal prototype to deployed webapp.',
  },
  {
    tag: 'UX / UI',
    org: 'NOAA',
    desc: 'Mockups and design-system work for scientific weather tools, wiring front-end components to live data.',
  },
]

export const workItems = [
  {
    title: 'DAO Tools',
    slug: 'dao-tools',
    blurb: 'The captioning pipeline for CU’s Digital Accessibility Office, on GPU infrastructure that starts per file and tears itself down after.',
  },
  {
    title: 'HomeTV',
    slug: 'hometv',
    blurb: 'An ad-free TV home screen for an old gaming PC, controlled from your phone.',
  },
  {
    title: 'Integral',
    slug: 'integral',
    blurb: 'Usability testing without the devops. Demonstrate the task once, and every session after is scored against what you did.',
  },
]

// Case-study content for each project page, keyed by slug.
// Section 01 renders, then the supporting shot, then section 02, then the outcome.
export const projects = {
  integral: {
    caseNo: '01',
    title: 'Integral',
    year: '2026',
    tagline: 'Usability testing that starts by watching you succeed. Demonstrate the task once, and every session after gets measured against what you did.',
    role: 'Solo design & build',
    stack: 'Node · rrweb · PostgreSQL · Stripe',
    status: 'Offline',
    repoUrl: 'https://github.com/dawsonash/integral',
    cover: '/projects/integral-cover.jpg',
    logo: '/logos/integral.svg',
    shot: '/projects/integral-shot.jpg',
    sections: [
      {
        label: 'Problem',
        paragraphs: [
          'Usability testing tells you a task failed, but rarely where. You get a completion rate and a pile of recordings, and finding the step people fell off means watching all of them.',
          'And the setup is its own project. Instrument the app, stand up a hosted build, keep that infrastructure alive for the length of the study, then recruit testers and hand-code whatever comes back. The thing you actually wanted, a lot of people’s behavior pooled into a trend you can look at, sits behind a pile of devops nobody signed up to run.',
        ],
      },
      {
        label: 'Approach',
        paragraphs: [
          'Point Integral at a GitHub branch, a zip, or a folder. It hosts the app same-origin behind its own recorder, transpiling on the way out, so there is nothing to install and no cross-origin blind spot in the session data.',
          'Then you define success by doing it. Drive the app once, and each click becomes a step with a stable selector inferred for it. Share the link, and consent-gated anonymous sessions get scored against that chain automatically: success rate, where the chain breaks, time on task, SEQ, and a click and scroll attention heatmap, with replays and CSV or JSON export behind it.',
        ],
      },
    ],
    outcome: 'A workflow that used to be tedious and ceremonial is now low-stakes and routine. There is no infrastructure to run for a usability test, people use your app the way they would outside a testing environment, and what comes back arrives aggregated: trends you can read at a glance instead of a folder of recordings to watch one at a time. The hosted version is offline now, but the code is on GitHub.',
    next: { title: 'DAO Tools', slug: 'dao-tools' },
  },
  'dao-tools': {
    caseNo: '02',
    title: 'DAO Tools',
    year: '2026',
    tagline: 'The captioning pipeline for CU’s Digital Accessibility Office, built on GPU infrastructure that wakes up per file, transcribes, and tears itself down before it can bill idle.',
    role: 'Software · CU Digital Accessibility Office',
    stack: 'React · TypeScript · WhisperX · AWS · Azure GPU',
    cover: '/projects/dao-tools-cover.jpg',
    logo: '/logos/cu-boulder.svg',
    shot: '/projects/dao-tools-shot.jpg',
    sections: [
      {
        label: 'Problem',
        paragraphs: [
          'The office already had a transcription pipeline. Running it meant handing non-technical student workers a bash script and asking them to drive it from a terminal, a workflow that assumed command-line fluency none of them had signed up for.',
          'The failures were quiet and expensive. GPU instances stayed up long after a job finished, billing by the hour for nothing. Cloud storage accumulated because no step ever cleaned up after itself. And the script gave no feedback at all while it ran, so nobody knew whether it had worked until the results appeared, or didn’t.',
        ],
      },
      {
        label: 'Approach',
        paragraphs: [
          'The first generation was DAOTUI, a guided terminal interface that took the script away and owned the lifecycle itself: a one-time setup wizard, then start the GPU instance on demand, upload, run WhisperX, pull results back, surface only the low-confidence words for a fast QC pass, and tear the instance and its storage down when the job ends. Progress was visible the whole way through, so a stalled run announced itself instead of hiding.',
          'DAO Tools is that pipeline given a front door. A three-step flow (select files, process, review) puts the same infrastructure behind a browser tab, with a cloud queue, live connection state, and a review screen that still spends human attention only where the model was unsure. A student worker never touches a terminal, a cloud console, or a billing dashboard.',
        ],
      },
    ],
    shot2: {
      src: '/projects/dao-tools-daotui.jpg',
      caption: 'DAOTUI, the first generation. A one-time setup wizard replaced the bash script students were handed.',
    },
    outcome: 'In real use at the Digital Accessibility Office. Idle GPU billing and orphaned storage are gone because teardown is part of the pipeline rather than something a person remembers to do, and the people running it no longer need a terminal to do their job.',
    next: { title: 'HomeTV', slug: 'hometv' },
  },
  'function-finder': {
    caseNo: '03',
    title: 'Function Finder',
    year: '2026',
    tagline: 'A campus events app for finding and hosting what’s happening around you, grown from a team prototype into a live product I took end to end.',
    role: 'Front-end & architecture',
    stack: 'Node · Express · PostgreSQL · Handlebars',
    cover: '/projects/function-finder-cover.jpg',
    logo: '/logos/function-finder.svg',
    shot: '/projects/function-finder-shot.jpg',
    sections: [
      {
        label: 'Problem',
        paragraphs: [
          'Campus events lived scattered across group chats, flyers, and word of mouth. There was no single place to see what was happening, or to host something and track who was coming.',
          'It began as a class project with a team, but the prototype stopped short of a product: rough flows, inconsistent UI, and nothing actually deployed.',
        ],
      },
      {
        label: 'Approach',
        paragraphs: [
          'I took ownership of the codebase and grew it from there, designing the interface in Figma first, then building a real design system so every screen reads as one product, down to the filter chips and the search and sort controls.',
          'Auth, event hosting, RSVPs, and ratings sit on a Node / Express / PostgreSQL backend, deployed live so it’s a real link, not a localhost demo.',
        ],
      },
    ],
    wireframes: {
      caption: 'Wireframes for the core flows, drawn before any code: the feed, the event page, the hosting form, and the map.',
      shots: [
        { src: '/projects/function-finder-wf-home.jpg', label: 'Home: event feed, search and filters, friends\u2019 activity' },
        { src: '/projects/function-finder-wf-event.jpg', label: 'Event details: logistics, host profile, message board, RSVP' },
        { src: '/projects/function-finder-wf-create.jpg', label: 'Event creation: a stepped hosting form with live preview' },
        { src: '/projects/function-finder-wf-map.jpg', label: 'Map: events by location, with filters and a synced list' },
      ],
    },
    outcome: 'A deployed, end-to-end event platform, from Figma prototype to production, that I own and can point anyone to.',
    next: { title: 'Typely', slug: 'typely' },
  },
  typely: {
    caseNo: '04',
    title: 'Typely',
    year: '2026',
    tagline: 'A swipe keyboard for iPhone that shows what it thinks you’re typing while you type, makes fixing a mistake a single gesture, and learns the shape of your thumb.',
    role: 'Solo design & build',
    stack: 'Swift · SwiftUI · Rust · UniFFI',
    logo: '/logos/typely.png',
    cover: '/projects/typely-cover.jpg',
    shot: '/projects/typely-cover.jpg',
    sections: [
      {
        label: 'Problem',
        paragraphs: [
          'I wasn’t satisfied with the keyboard on my iPhone. I type on it all day, and it kept getting in my way: guessing wrong, and making me start over when it did.',
          'I had a foundation in UX, and I thought I could make something better.',
        ],
      },
      {
        label: 'Approach',
        paragraphs: [
          'I treated the keyboard as an interaction problem before a language-model one, and designed each piece of it against a law or model of human performance.',
          'Underneath, it stays a normal QWERTY keyboard with system proportions, because people expect a keyboard to work like every other one they’ve used. The gestures layer on top for anyone who wants to get faster.',
        ],
        shot: {
          src: '/projects/typely-train.jpg',
          alt: 'The Train tab with the typing test and gesture dojo, and keyboard settings',
          caption: 'Train and Settings in the iOS Simulator. The gesture dojo drills each gesture on its own.',
        },
      },
      {
        label: 'Fitts’s law',
        paragraphs: [
          'Movement time grows with distance and shrinks with target width. Mid-swipe, the finger is already near the top row, so the accept target sits directly above it: the prediction strip, the full width of the screen. Drag up into the strip and lift to take the word early, before the swipe is finished.',
          'Backspace scrub uses the same idea. Drag left from backspace and the whole keyboard becomes the drag area. Each half key of travel targets one more word, previewed in red.',
        ],
        shot: {
          src: '/projects/typely-fitts.jpg',
          alt: 'Grab armed in the full-width strip, and a scrub previewing two words in red',
          caption: 'Grab, armed once the finger crosses into the strip, and scrub, with the whole keyboard as the drag area. Frames from the app’s onboarding demo.',
        },
      },
      {
        label: 'Keystroke-level model',
        paragraphs: [
          'The keystroke-level model predicts task time by counting the physical and mental steps a task takes. On a stock keyboard, a wrong swipe costs noticing it, deleting it, and swiping again. In Typely, the runner-up waits in the strip after every swipe, and one tap swaps it in. That tap is also the strongest signal the keyboard learns from.',
          'The rule across the keyboard is that every error path costs at most one gesture.',
        ],
        shot: {
          src: '/projects/typely-replace.jpg',
          alt: 'The keyboard offers too as the runner-up after a swipe of To, then swaps it in with one tap',
          caption: 'The real keyboard in the iOS Simulator: a swipe lands “To”, the runner-up “too” waits behind an undo arrow, and one tap swaps it.',
        },
      },
      {
        label: 'Hick–Hyman law',
        paragraphs: [
          'Choice time grows with the number of options. The strip shows one word, not three, so the decision is accept or ignore rather than scan and pick. The cost is that one slot is right less often, which is exactly why correction has to be cheap.',
        ],
      },
      {
        label: 'Feedback',
        paragraphs: [
          'Norman’s gulf of evaluation is how hard it is to tell what a system did. Most keyboards close it only after you lift. Typely decodes the partial path about thirty times a second and shows its best guess while you swipe, with opacity tracking confidence and a light haptic once it’s sure.',
        ],
        shot: {
          src: '/projects/typely-feedback.jpg',
          alt: 'A muted low-confidence guess mid-swipe, then a solid confident one',
          caption: 'Mid-swipe, a low-confidence guess shows muted; once the decoder is sure, the word goes solid and the trail turns blue. Onboarding demo.',
        },
      },
    ],
    next: { title: 'HomeTV', slug: 'hometv' },
  },
  hometv: {
    caseNo: '05',
    title: 'HomeTV',
    year: '2026',
    tagline: 'An ad-free home screen for my TV, running on an old gaming PC, with my phone as the remote.',
    role: 'Solo design & build',
    stack: '.NET 10 · TypeScript · WebSockets · WebView2',
    repoUrl: 'https://github.com/dawsonash/HomeTV',
    logo: '/logos/hometv.svg',
    cover: '/projects/hometv-launcher.jpg',
    shot: '/projects/hometv-launcher.jpg',
    sections: [
      {
        label: 'Problem',
        paragraphs: [
          'My smart TV’s OS was full of bloatware and served me ads around the clock. I weighed a few fixes and settled on repurposing my old gaming PC to run a custom OS for the TV.',
          'The PC had real advantages over the TV’s own software. It’s far more powerful than the chip inside the TV, so everything feels faster. I can customize every part of it. And it shows zero ads.',
        ],
      },
      {
        label: 'Design',
        paragraphs: [
          'Building the whole thing for me meant I could put what I actually care about first. The home screen is just big tiles for the apps I use, with the weather and my teams’ next games above them. A few personal touches:',
          'A phone remote. Not needing the remote in hand is a nice (and admittedly lazy) add-on. Any phone on the Wi-Fi pairs with a PIN shown on the TV and becomes a touchpad, keyboard, and volume control. It talks to a small server on the PC, which moves the mouse and types through Windows itself, so it works in every app.',
          'One-click speaker switching. A button on the home screen swaps between the soundbar and an Echo Studio, and the lit icon shows which one is playing. No digging through sound settings.',
          'Ad blockers. Every streaming app runs with ad and sponsor blocking built in. Sketchier free streaming sites get their own locked-down browser that closes pop-up ads the moment they open and never sees my other logins.',
        ],
        shot: {
          src: '/projects/hometv-remote.jpg',
          alt: 'The phone remote with its touchpad, and the background photos screen',
          caption: 'The phone remote: a touchpad with volume, Back and Home, and the screen for adding background photos.',
        },
      },
    ],
    outcomeLabel: 'Result',
    outcome: 'HomeTV is an ongoing project with frequent updates. The true test is getting my roommates to prefer it over the TV’s own OS, and I haven’t done that yet. The biggest hurdle is still convenience: I need a way to turn the TV on and open the remote that’s at least as easy as grabbing the TV’s own remote. More to come :)',
    next: { title: 'Integral', slug: 'integral' },
  },
}

export const timeline = [
  { year: 'Certification', title: 'Google UX Design Certificate', logo: '/logos/google.svg', desc: '2024 - Learned the end-to-end design process and Figma across 200+ hours of hands-on projects and peer design critique.' },
  { year: 'University', title: 'CU Boulder', logo: '/logos/cu-boulder.svg', desc: '2024 - Started CS at MSU Denver, then transferred to CU Boulder for a bigger program with more opportunities.' },
  { year: 'Internship', title: 'NOAA UX/UI Developer', logo: '/logos/noaa.svg', desc: '2025 - Worked with the lead designer on IDSS, building mockups, refining the design system, and wiring front-end components to live data.' },
  { year: 'Certification', title: 'NVIDIA Deep Learning', logo: '/logos/nvidia.svg', desc: '2025 - Completed NVIDIA’s Fundamentals of Deep Learning. Built and trained a CNN in PyTorch on GPU cloud.' },
  { year: 'Internship', title: 'Digital Accessibility Office SWE', logo: '/logos/cu-boulder.svg', desc: '2026 - Built a TUI to streamline student captioning, then rebuilt it as DAO Tools (an internal webapp on WhisperX and on-demand GPU) and designed its interface.' },
  { year: 'Job', title: 'Pattern Labs', logo: '/logos/pattern-labs.png', desc: '2026 - Deploying and operating autonomous robots at Denver International Airport.' },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/dawsonash' },
  { label: 'X', href: 'https://x.com/DawsonAsh21' },
  { label: 'Résumé', href: '/dawson-ash-resume.pdf' },
]
