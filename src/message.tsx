import heroVid from './assets/Hero.webm'
import CV from './cv'

const featuredProjects = [
  {
    title: 'Financial Tracker',
    description: 'Budget categories, recurring transactions, charts, and bank-style summaries powered by a REST API.',
    stack: ['React', 'TypeScript', 'Chart.js'],
    link: 'https://financial-tracker-liard.vercel.app/',
  },
  {
    title: 'Music Player',
    description: 'Playlists, queue controls, audio progress sync, and external API integration for track metadata.',
    stack: ['React', 'Context API', 'Audio API', 'REST'],
  },
  {
    title: 'Social Sphere',
    description: 'Social feed with profiles, comments, likes, post composer flows, and JWT-authenticated routes.',
    stack: ['React', 'React Router', 'Node.js', 'JWT'],
  },
]

const stack = ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Postman', 'GitHub']

const contactLinks = [
  { label: 'Email', value: 'montalbanbernardallen@gmail.com', href: 'mailto:montalbanbernardallen@gmail.com' },
  { label: 'GitHub', value: 'github.com/reactforge', href: 'https://github.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/bernard-montalban', href: 'https://www.linkedin.com/in/bernard-montalban-9194a2217/' },
]

function Message() {
  return (
    <main className="portfolio">
      {/* Nav */}
      <header className="nav">
        <a className="nav-brand" href="#top">Bern-Dev.</a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#cv">CV</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-row">
          <div className="hero-portrait-wrap">
            <video className="hero-portrait" src={heroVid} autoPlay loop muted playsInline />
            <span className="hero-status"><span className="status-dot" />Available</span>
          </div>
          <div className="hero-text">
            <p className="label">React Developer</p>
            <h1>I build fast, <span className="gradient-text">polished</span> web apps.</h1>
            <p className="hero-sub">
              Front-end systems with React, TypeScript, and clean API integration — designed to feel sharp, handle real data, and stay maintainable.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">View projects</a>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section" id="stack">
        <p className="label">Stack</p>
        <ul className="stack-list">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Work */}
      <section className="section" id="work">
        <p className="label">Selected work</p>
        <h2>Projects built around React and real API integrations.</h2>
        <div className="project-grid">
          {featuredProjects.map((p) => (
            <article className="project-card" key={p.title}>
              <h3>{'link' in p && p.link ? <a href={p.link} target="_blank" rel="noreferrer">{p.title}</a> : p.title}</h3>
              <p>{p.description}</p>
              <ul className="tag-list">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CV */}
      <CV />

      {/* About */}
      <section className="section" id="about">
        <p className="label">About</p>
        <div className="about-grid">
          <div className="about-card about-card--accent">
            <p>
              I specialize in React development — API integration, dynamic data rendering,
              authentication flows, and maintainable component systems. I care about how the
              app feels and how it behaves under real usage.
            </p>
          </div>
          <div className="about-card">
            <p>
              My workflow: plan the data model, wire UI against live or mocked endpoints,
              handle loading and error states, then refine performance across desktop and mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section--contact" id="contact">
        <p className="label">Contact</p>
        <h2>Let's work together.</h2>
        <p className="contact-sub">
          Open to freelance, internships, and junior-to-mid front-end roles focused on React.
        </p>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              className="contact-item"
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">{link.value}</span>
            </a>
          ))}
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="mailto:montalbanbernardallen@gmail.com">Send email</a>
          <a className="btn btn-ghost" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>
    </main>
  )
}

export default Message