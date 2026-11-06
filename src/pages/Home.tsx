import { ArrowDown, ArrowUpRight, Code2, Mail, Terminal } from 'lucide-react'

const skills = [
  'Java',
  'Spring Boot',
  'React',
  'React Native',
  'TypeScript',
  'Python',
  'AWS',
  'Docker',
  'Firebase',
  'PostgreSQL',
  'Git',
  'CI/CD',
]

const projects = [
  {
    number: '01',
    title: 'Smart-City Parking Manager',
    image: '/projects/smart-city.png',
    category: "Master's Thesis · Full Stack · IoT",
    description:
      'A smart parking management platform developed as my Master’s thesis. It combines a microservices architecture, real-time communication and IoT sensor integration to manage parking availability and reservations.',
    stack: ['Java', 'Spring Boot', 'React', 'WebSockets', 'MQTT'],
    detailsUrl: '/smart-city',
    liveUrl: '',
  },
  {
    number: '02',
    title: 'Mojo — Language Learning Platform',
    image: '/projects/mojo.png',
    category: 'Personal Project · In Development',
    description:
      'A full-stack language learning platform designed to connect students with educational content and personalised learning experiences. The platform combines online courses, downloadable learning materials and a booking system for one-to-one language classes.',
    stack: ['React', 'TypeScript', 'Prisma', 'Supabase', 'PostgreSQL'],
    detailsUrl: '',
    liveUrl: '',
  },
  {
    number: '03',
    title: 'SpainInYou',
    image: '/projects/spaininyou.png',
    category: 'E-Commerce · Full Stack',
    description:
      'An e-commerce platform featuring product catalogues, shopping cart, checkout, authentication and administration functionality.',
    stack: ['Angular', 'Firebase', 'Stripe'],
    detailsUrl: '',
    liveUrl: 'https://finalproject-guillermo.web.app',
  },
  {
    number: '04',
    title: 'Indiluz — E-Commerce Redesign',
    image: '/projects/indiluz.png',
    category: 'Freelance · Client Project',
    description:
      'Redesigned and customised the frontend of an established e-commerce website using PrestaShop. Improved the visual identity, user experience and responsive design across the entire platform, including product pages, navigation and key website sections.',
    stack: ['PrestaShop', 'HTML5', 'CSS3', 'JavaScript', 'SEO'],
    detailsUrl: '',
    liveUrl: 'https://indiluz.com/',
  },
]

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d19] text-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#080d19]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            GRS<span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="mailto:guillermoruizsenso@outlook.com"
            className="rounded-lg border border-blue-500/40 px-4 py-2 text-sm text-blue-300 transition hover:bg-blue-500/10"
          >
            Let's talk <ArrowUpRight className="ml-1 inline h-4 w-4" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

        <div className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for Software Engineering opportunities
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Software Engineer · Dublin, Ireland
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
              Guillermo Ruiz
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Senso.
              </span>
            </h1>

            <h2 className="mt-7 text-xl font-medium text-slate-300 md:text-2xl">
              Building software that solves real problems.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              Software Engineer with a Master's degree in Software Engineering.
              Interested in backend development, cloud technologies and
              full-stack applications. I enjoy turning ideas into reliable,
              maintainable software.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore my work <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href="mailto:TU_EMAIL"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-500/60 bg-transparent px-5 py-3 font-medium text-slate-200 transition hover:border-blue-400 hover:bg-blue-400/10 hover:text-blue-300"
              >
                <span>✉</span> Email me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="TU_LINKEDIN_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-5 py-3 font-medium text-white transition hover:bg-[#084f96]"
              >
                LinkedIn <span>↗</span>
              </a>

              <a
                href="TU_GITHUB_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-400/30 bg-blue-400/10 px-5 py-3 font-medium text-blue-300 transition hover:bg-blue-400/20"
              >
                GitHub <span>↗</span>
              </a>
            </div>
          </div>

          {/* Developer visual panel */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-[#0c1424] shadow-2xl shadow-blue-950/40">
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <span className="text-xs text-slate-500">developer.ts</span>
                <Terminal className="h-4 w-4 text-blue-400" />
              </div>

              <div className="space-y-4 p-6 font-mono text-sm leading-7 sm:p-8">
                <p className="text-slate-500">// A little about me</p>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">developer</span> = {'{'}
                </p>
                <p className="pl-5">
                  <span className="text-sky-300">name</span>:{' '}
                  <span className="text-emerald-300">'Guillermo Ruiz'</span>,
                </p>
                <p className="pl-5">
                  <span className="text-sky-300">role</span>:{' '}
                  <span className="text-emerald-300">'Software Engineer'</span>,
                </p>
                <p className="pl-5">
                  <span className="text-sky-300">location</span>:{' '}
                  <span className="text-emerald-300">'Dublin, Ireland'</span>,
                </p>
                <p className="pl-5">
                  <span className="text-sky-300">interests</span>: [
                </p>
                <p className="pl-10 text-emerald-300">'Backend Development',</p>
                <p className="pl-10 text-emerald-300">'Cloud & DevOps',</p>
                <p className="pl-10 text-emerald-300">'Full Stack'</p>
                <p className="pl-5">],</p>
                <p>
                  <span className="text-purple-400">openToWork</span>:{' '}
                  <span className="text-orange-300">true</span>
                </p>
                <p>{'}'}</p>
                <div className="border-t border-white/5 pt-4 text-xs text-slate-500">
                  <span className="text-emerald-400">●</span> Ready to build
                  something great.
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 hidden rounded-xl border border-blue-400/20 bg-[#111d32] px-5 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <Code2 className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-xs text-slate-500">Education</p>
                  <p className="text-sm font-semibold">
                    M.Sc. Software Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology strip */}
        <div className="relative mt-28 border-t border-white/10 pt-8">
          <p className="mb-5 text-center text-xs uppercase tracking-[0.2em] text-slate-500">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
            {[
              'Java',
              'Spring Boot',
              'React',
              'TypeScript',
              'Python',
              'Docker',
              'AWS',
              'Firebase',
            ].map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 bg-[#0b1220]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            About me
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Engineering mindset. Continuous learning.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I am a Software Engineer based in Dublin, Ireland, with a Master's
            degree in Software and Computer Systems Engineering. My background
            combines software development, mobile applications, web platforms
            and cloud technologies. I enjoy collaborating with teams and
            continuously improving the way software is designed and delivered.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map(skill => (
              <span
                key={skill}
                className="rounded-lg border border-blue-400/15 bg-blue-400/5 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-400/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Selected work
        </p>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Projects</h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          A selection of projects where I have applied software engineering
          principles to build practical applications.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map(project => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0c1424] transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-950/30"
            >
              {/* Project image */}

              <div className="relative h-[320px] overflow-hidden bg-[#0c1424]">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-contain object-top"
                />

                <span className="absolute left-4 top-4 rounded-lg border border-white/20 bg-[#080d19]/90 px-3 py-1.5 font-mono text-xs text-blue-300 backdrop-blur-md">
                  PROJECT / {project.number}
                </span>

                {project.category.includes('In Development') && (
                  <span className="absolute right-4 top-4 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-300 backdrop-blur-md">
                    In Development
                  </span>
                )}
              </div>

              {/* Project information */}
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold transition-colors group-hover:text-blue-300">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-24 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className="rounded-md border border-blue-400/10 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.detailsUrl || project.liveUrl) && (
                  <div className="mt-8 flex flex-wrap gap-3 border-t border-white/5 pt-6">
                    {project.detailsUrl && (
                      <a
                        href={project.detailsUrl}
                        className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                      >
                        View Case Study
                        <ArrowUpRight className="ml-1 inline h-4 w-4" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
                      >
                        Live Demo
                        <ArrowUpRight className="ml-1 inline h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-white/5 bg-[#0b1220]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Career
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Experience</h2>

          <div className="mt-12 space-y-6">
            <article className="rounded-2xl border border-white/10 bg-[#0c1424] p-7">
              <p className="text-sm text-blue-400">Feb 2025 – Jun 2025</p>
              <h3 className="mt-2 text-xl font-bold">
                Software Developer Intern — AutoJob.app
              </h3>
              <p className="mt-1 text-sm text-slate-500">Dublin, Ireland</p>
              <p className="mt-5 leading-7 text-slate-400">
                Contributed to the development of a mobile application using
                React Native and Firebase, working on application features and
                the integration of mobile and backend services.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['React Native', 'JavaScript', 'Firebase'].map(tech => (
                  <span
                    key={tech}
                    className="rounded-md bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#0c1424] p-7">
              <p className="text-sm text-blue-400">Jan 2026 – Present</p>
              <h3 className="mt-2 text-xl font-bold">
                Freelance E-Commerce Web Developer
              </h3>
              <p className="mt-1 text-sm text-slate-500">Dublin, Ireland</p>
              <p className="mt-5 leading-7 text-slate-400">
                Develop and customise e-commerce websites using PrestaShop, PHP
                and MySQL. Build tailored themes, modules and functionality
                based on client requirements.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['PrestaShop', 'PHP', 'MySQL'].map(tech => (
                  <span
                    key={tech}
                    className="rounded-md bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#0c1424] p-7">
              <p className="text-sm text-blue-400">Mar 2022 – Jun 2022</p>
              <h3 className="mt-2 text-xl font-bold">
                Software Developer Intern — EasyVirtualFair
              </h3>
              <p className="mt-1 text-sm text-slate-500">Madrid, Spain</p>
              <p className="mt-5 leading-7 text-slate-400">
                Contributed to the development of a virtual fairs platform,
                working on web application features and the creation of digital
                experiences for exhibitors and visitors.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Angular', 'Node.js', 'PostgreSQL'].map(tech => (
                  <span
                    key={tech}
                    className="rounded-md bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d19] to-[#101d35]" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            What's next?
          </p>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Let's build something great.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-400">
            I'm open to Software Engineering opportunities and interesting
            projects. Feel free to get in touch.
          </p>
          <a
            href="mailto:guillermoruizsenso@outlook.com"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Say hello <Mail className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Guillermo Ruiz Senso. Built with React &
        Tailwind CSS.
      </footer>
    </main>
  )
}

export default Home
