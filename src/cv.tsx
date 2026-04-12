const experience = [
  {
    role: 'IT Service Desk Analyst',
    company: 'Previous Employer',
    period: '2022 – 2025',
    highlights: [
      'Resolved 50+ tickets/day across hardware, software, and network issues — building strong diagnostic and problem-solving skills.',
      'Automated recurring tasks with PowerShell scripts, reducing manual resolution time by 30%.',
      'Collaborated with development teams to escalate and document application-level bugs via ticketing systems.',
      'Managed Active Directory accounts, group policies, and access permissions for 500+ users.',
      'Provided remote and on-site support, strengthening communication and client-facing skills.',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'University / College Name',
    period: '2018 – 2022',
  },
]

const certifications = [
  'Microsoft Certified: Azure Fundamentals (AZ-900)',
  'Postman API Fundamentals Student Expert',
]

const technicalSkills = {
  'Front-End': ['React', 'Blazor (WebAssembly & Server)', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS'],
  'Back-End': ['ASP.NET Core (MVC & Web API)', 'C#', 'Entity Framework Core', 'Node.js / Express'],
  'Databases': ['SQL Server', 'T-SQL', 'SSMS'],
  'API & Testing': ['RESTful API Design', 'Postman', 'Swagger / OpenAPI', 'JWT Authentication'],
  'Tools & Workflow': ['Git / GitHub', 'Visual Studio / VS Code', 'Azure DevOps', 'Agile / Scrum'],
}

const projects = [
  {
    title: 'Employee Management System',
    stack: ['ASP.NET Core Web API', 'React', 'SQL Server', 'Postman'],
    bullets: [
      'Built a full-stack CRUD application with ASP.NET Core Web API and React front-end.',
      'Designed relational database schema in SQL Server with Entity Framework Core migrations.',
      'Tested and documented all endpoints using Postman collections and environment variables.',
    ],
  },
  {
    title: 'Personal Finance Tracker',
    stack: ['Blazor WebAssembly', 'ASP.NET Core', 'SQL Server'],
    bullets: [
      'Developed an interactive Blazor WASM dashboard for budget tracking with chart visualizations.',
      'Implemented JWT-based authentication and role-based authorization on the API layer.',
      'Used stored procedures and views in SQL Server for reporting queries.',
    ],
  },
  {
    title: 'API Integration Hub',
    stack: ['React', 'TypeScript', 'REST APIs', 'Postman'],
    bullets: [
      'Created a React app that consumes multiple third-party APIs with unified error handling.',
      'Built reusable service layers with Axios interceptors for token refresh and retry logic.',
      'Validated all integrations through Postman automated test suites before front-end wiring.',
    ],
  },
]

const transferableSkills = [
  'Troubleshooting & root-cause analysis honed through years of IT support.',
  'Strong communication skills from translating technical issues for non-technical stakeholders.',
  'Documentation-first mindset — accustomed to knowledge-base articles and runbooks.',
  'Exposure to ITIL processes, incident management, and SLA-driven delivery.',
  'Self-driven learner who built full-stack projects while working full-time in IT support.',
]

function CV() {
  return (
    <section className="section cv-section" id="cv">
      <p className="label">Curriculum Vitae</p>
      <h2>Career Shift: Service Desk → Web Developer</h2>
      <p className="cv-intro">
        IT professional transitioning into web development with hands-on project experience
        in API integration, ASP.NET Core, React, Blazor, SQL Server, and Postman. Combining
        strong technical support foundations with modern full-stack development skills.
      </p>

      {/* Technical Skills */}
      <div className="cv-block">
        <h3 className="cv-block-title">Technical Skills</h3>
        <div className="cv-skills-grid">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div className="cv-skill-group" key={category}>
              <span className="cv-skill-cat">{category}</span>
              <ul className="tag-list">
                {skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="cv-block">
        <h3 className="cv-block-title">Projects</h3>
        <div className="cv-timeline">
          {projects.map((p) => (
            <article className="cv-entry" key={p.title}>
              <div className="cv-entry-header">
                <h3>{p.title}</h3>
              </div>
              <ul className="tag-list" style={{ marginBottom: 12 }}>
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <ul className="cv-bullets">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="cv-block">
        <h3 className="cv-block-title">Professional Experience</h3>
        <div className="cv-timeline">
          {experience.map((e) => (
            <article className="cv-entry" key={e.role}>
              <div className="cv-entry-header">
                <h3>{e.role}</h3>
                <span className="cv-period">{e.period}</span>
              </div>
              <p className="cv-company">{e.company}</p>
              <ul className="cv-bullets">
                {e.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Transferable Skills */}
      <div className="cv-block">
        <h3 className="cv-block-title">Transferable Skills</h3>
        <ul className="cv-bullets cv-bullets--highlight">
          {transferableSkills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      {/* Education & Certs */}
      <div className="cv-two-col">
        <div className="cv-block">
          <h3 className="cv-block-title">Education</h3>
          {education.map((e) => (
            <div className="cv-entry" key={e.degree}>
              <div className="cv-entry-header">
                <h3>{e.degree}</h3>
                <span className="cv-period">{e.period}</span>
              </div>
              <p className="cv-company">{e.school}</p>
            </div>
          ))}
        </div>
        <div className="cv-block">
          <h3 className="cv-block-title">Certifications</h3>
          <ul className="cv-cert-list">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CV
