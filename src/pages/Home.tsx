import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Layers3,
  Mail,
  Monitor,
  Server,
} from 'lucide-react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const skillCategories = [
  {
    title: 'Frontend & UI Development',
    description: 'Responsive, accessible and user-focused web experiences.',
    icon: Monitor,
    skills: [
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'React Native',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Backend Development',
    description: 'Application logic, APIs and maintainable services.',
    icon: Server,
    skills: [
      'Java',
      'Spring Boot',
      'Node.js',
      'Express.js',
      'Python',
      'Flask',
      'Hibernate / JPA',
      'REST APIs',
    ],
  },
  {
    title: 'Programming & Engineering',
    description:
      'Core programming languages and software engineering practices.',
    icon: Code2,
    skills: [
      'Java',
      'Python',
      'TypeScript',
      'JavaScript',
      'C#',
      'C++',
      'Kotlin',
      'SQL',
    ],
  },
  {
    title: 'Databases & Data',
    description: 'Working with relational, document and application databases.',
    icon: Database,
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Supabase',
      'Prisma',
      'MySQL',
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Containerisation, automation and cloud-based delivery.',
    icon: Cloud,
    skills: [
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Actions',
      'Terraform',
      'CI/CD',
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Exploring data-driven solutions and machine learning tools.',
    icon: BrainCircuit,
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy'],
  },
]

const projects = [
  {
    number: '01',
    title: 'Indiluz — E-Commerce Redesign',
    image: '/projects/indiluz.png',
    category: 'Freelance · Client Project',
    description:
      'Redesigned and customised the frontend of an established PrestaShop e-commerce website, improving its visual identity, responsive layouts, navigation and key shopping pages.',
    stack: ['PrestaShop', 'HTML5', 'CSS3', 'JavaScript', 'SEO'],
    detailsUrl: '/indiluz',
    liveUrl: 'https://indiluz.com/',
  },
  {
    number: '02',
    title: 'Mojo — Language Learning Platform',
    image: '/projects/mojo.png',
    category: 'Personal Project · In Development',
    description:
      'A full-stack language learning platform concept for Spanish, English and French, bringing courses, downloadable learning materials and one-to-one lesson bookings together.',
    stack: ['React', 'TypeScript', 'Prisma', 'Supabase', 'PostgreSQL'],
    detailsUrl: '/mojo',
    liveUrl: '',
  },
  {
    number: '03',
    title: 'SpainInYou',
    image: '/projects/spaininyou.png',
    category: 'E-Commerce · Full Stack',
    description:
      'An e-commerce application featuring a product catalogue, shopping cart, checkout, authentication and administration functionality.',
    stack: ['Angular', 'Firebase', 'Stripe'],
    detailsUrl: '/spain-in-you',
    liveUrl: 'https://finalproject-guillermo.web.app',
  },
  {
    number: '04',
    title: 'Smart-City Parking Manager',
    image: '/projects/smart-city.png',
    category: "Master's Thesis · Full Stack · IoT",
    description:
      'A smart parking management platform developed as my Master’s thesis, combining a microservices architecture, parking and incident management, and an interactive map interface.',
    stack: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Elasticsearch'],
    detailsUrl: '/smart-city',
    liveUrl: '',
  },
]

const experience = [
  {
    date: 'Jan 2026 – Present',
    role: 'Freelance E-Commerce Web Developer',
    company: 'Independent · Dublin, Ireland',
    description:
      'Redesign and customise e-commerce storefronts using PrestaShop. Work on responsive themes, page layouts, navigation, product presentation and frontend improvements based on client requirements.',
    skills: ['PrestaShop', 'HTML', 'CSS', 'JavaScript', 'E-commerce'],
  },
  {
    date: 'Feb 2025 – Jun 2025',
    role: 'Software Developer Intern',
    company: 'AutoJob.app · Dublin, Ireland',
    description:
      'Contributed to a mobile application built with React Native and Firebase, implementing application features and working with the services connecting the mobile experience to its backend.',
    skills: ['React Native', 'JavaScript', 'Firebase'],
  },
  {
    date: 'Mar 2022 – Jun 2022',
    role: 'Software Developer Intern',
    company: 'EasyVirtualFair · Madrid, Spain',
    description:
      'Contributed to a virtual fairs platform, helping develop web application features and digital experiences for exhibitors and visitors.',
    skills: ['Web Development', 'Virtual Events'],
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
  wide = false,
}: {
  eyebrow: string
  title: string
  description?: string
  wide?: boolean
}) {
  return (
    <div className={wide ? 'max-w-none' : 'max-w-2xl'}>
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-slate-400">{description}</p>
      )}
    </div>
  )
}

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d19] text-slate-100">
      <NavBar />

      {/* Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
          <div className="absolute right-0 top-32 h-[28rem] w-[28rem] rounded-full bg-indigo-600/10 blur-[140px]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 sm:pt-24 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 text-sm text-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Software Engineering opportunities
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              Software Engineer · Dublin, Ireland
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Guillermo Ruiz
              <span className="mt-1 block bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text pb-2 text-transparent">
                Senso.
              </span>
            </h1>

            <h2 className="mt-7 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-slate-200 sm:text-3xl">
              Designing and building{' '}
              <span className="text-blue-400">modern web experiences</span> and
              scalable software.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Full-Stack Software Engineer with a Master’s degree in Software
              and Computer Systems Engineering. I build responsive, user-focused
              applications and bring ideas to life through thoughtful frontend
              development and reliable backend engineering.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                'Frontend Development',
                'Backend Engineering',
                'Cloud & DevOps',
              ].map(item => (
                <span
                  key={item}
                  className="rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 text-xs font-semibold text-blue-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Explore my work <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="mailto:guillermoruizsenso@outlook.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3.5 font-semibold text-slate-200 transition hover:border-blue-400/50 hover:bg-blue-400/[0.06] hover:text-white"
              >
                <Mail className="h-4 w-4" /> Email me
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/guillermo-ruiz-senso/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#0A66C2]/40 bg-[#0A66C2]/15 px-4 py-2.5 text-sm font-semibold text-blue-200 transition hover:bg-[#0A66C2]/25"
              >
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/GuillermoRS1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-white/25 hover:text-white"
              >
                GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Frontend-first project showcase */}
          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
            <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-blue-500/[0.08] blur-3xl" />

            <div className="relative rounded-2xl border border-white/10 bg-[#0c1424]/95 p-3 shadow-2xl shadow-blue-950/40 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-3 pb-3 pt-1">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                </div>
                <span className="font-mono text-[11px] text-slate-500">
                  selected-work / 2026
                </span>
                <Layers3 className="h-4 w-4 text-blue-300" />
              </div>

              <div className="grid gap-3 p-2 sm:grid-cols-[1.25fr_0.75fr]">
                <a
                  href="/indiluz"
                  className="group relative min-h-[250px] overflow-hidden rounded-xl border border-white/10 bg-[#111d31]"
                >
                  <img
                    src="/projects/indiluz.png"
                    alt="Indiluz e-commerce website project"
                    className="absolute inset-0 h-full w-full object-contain bg-[#080d19] p-1 transition duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-[#07101f]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                      E-commerce redesign
                    </span>
                    <p className="mt-1 text-lg font-bold text-white">Indiluz</p>
                    <p className="mt-1 text-xs text-slate-300">
                      Frontend · Responsive UI
                    </p>
                  </div>
                </a>

                <div className="grid grid-rows-2 gap-3">
                  <a
                    href="/mojo"
                    className="group relative min-h-[120px] overflow-hidden rounded-xl border border-white/10 bg-[#111d31]"
                  >
                    <img
                      src="/projects/mojo.png"
                      alt="Mojo language learning platform project"
                      className="absolute inset-0 h-full w-full object-contain bg-[#080d19] p-1 transition duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-[#07101f]/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-3">
                      <p className="text-sm font-bold text-white">Mojo</p>
                      <p className="text-[10px] text-slate-300">
                        Learning platform
                      </p>
                    </div>
                  </a>
                  <a
                    href="/spain-in-you"
                    className="group relative min-h-[120px] overflow-hidden rounded-xl border border-white/10 bg-[#111d31]"
                  >
                    <img
                      src="/projects/spaininyou.png"
                      alt="SpainInYou e-commerce project"
                      className="absolute inset-0 h-full w-full object-contain bg-[#080d19] p-1 transition duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-[#07101f]/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-3">
                      <p className="text-sm font-bold text-white">SpainInYou</p>
                      <p className="text-[10px] text-slate-300">Online store</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] px-3 py-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Monitor className="h-4 w-4 text-blue-300" />
                  Interfaces built for real users
                </div>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-300 transition hover:text-blue-200"
                >
                  View all projects <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-5 hidden rounded-xl border border-blue-400/20 bg-[#111d32] px-4 py-3 shadow-xl shadow-black/20 sm:block">
              <div className="flex items-center gap-3">
                <Code2 className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-[11px] text-slate-500">Education</p>
                  <p className="text-sm font-semibold text-white">
                    M.Sc. Software Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-7 text-sm font-medium text-slate-500">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
              Technologies
            </span>
            {[
              'React',
              'Angular',
              'TypeScript',
              'Java',
              'Spring Boot',
              'Node.js',
              'AWS',
              'Docker',
            ].map(tech => (
              <span key={tech} className="transition hover:text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/[0.06] bg-[#0b1220]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionHeading
            eyebrow="About me"
            title="Engineering mindset. Continuous learning."
            wide
          />
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
            I am a Software Engineer based in Dublin, Ireland, with a Master’s
            degree in Software and Computer Systems Engineering. My background
            combines web and mobile application development, backend services
            and cloud technologies. I enjoy collaborating with teams, learning
            new tools and turning ideas into reliable, maintainable products.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Monitor,
                title: 'User experience',
                text: 'Building clear, responsive interfaces that make products easier to use.',
              },
              {
                icon: Server,
                title: 'Solid engineering',
                text: 'Creating maintainable application logic, APIs and backend services.',
              },
              {
                icon: Cloud,
                title: 'End-to-end thinking',
                text: 'Understanding how applications are built, integrated and delivered.',
              },
            ].map(item => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/[0.08] bg-[#0c1424] p-5"
                >
                  <Icon className="h-5 w-5 text-blue-400" />
                  <h3 className="mt-4 font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-white/[0.06] bg-[#080d19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionHeading
            eyebrow="Technical expertise"
            title="Skills & Technologies"
            description="A practical toolkit for designing, building and delivering modern software products."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <article
                  key={category.title}
                  className={`group relative overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#0e192b] ${
                    index === 0
                      ? 'border-blue-400/30 bg-gradient-to-br from-blue-500/[0.10] to-[#0c1424] shadow-lg shadow-blue-950/20'
                      : 'border-white/[0.08] bg-[#0c1424] hover:border-blue-400/30'
                  }`}
                >
                  {index === 0 && (
                    <span className="absolute right-5 top-5 rounded-full border border-blue-400/25 bg-blue-400/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-blue-300">
                      Core focus
                    </span>
                  )}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.08] text-blue-400 transition group-hover:bg-blue-400/[0.14]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                        0{index + 1}
                      </p>
                      <h3 className="font-semibold text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 min-h-12 text-sm leading-6 text-slate-400">
                    {category.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span
                        key={skill}
                        className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                          index === 0
                            ? 'border-blue-400/20 bg-blue-400/[0.08] text-blue-100 hover:border-blue-400/45 hover:bg-blue-400/[0.14]'
                            : 'border-white/[0.08] bg-white/[0.025] text-slate-300 hover:border-blue-400/30 hover:text-blue-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-white/[0.06] bg-[#0b1220]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects"
            description="A selection of client, academic and personal projects where I have applied software engineering principles to build useful digital products."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map(project => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-t border-white/[0.06] bg-[#080d19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionHeading
            eyebrow="Career"
            title="Experience"
            description="Experience across software development, mobile applications and e-commerce projects."
          />

          <div className="mt-12 space-y-5">
            {experience.map(item => (
              <article
                key={item.role + item.date}
                className="grid gap-5 rounded-2xl border border-white/[0.08] bg-[#0c1424] p-6 sm:p-8 md:grid-cols-[190px_1fr]"
              >
                <div>
                  <p className="text-sm font-semibold text-blue-400">
                    {item.date}
                  </p>
                  <div className="mt-3 hidden h-px w-12 bg-blue-400/40 md:block" />
                </div>
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.company}
                      </p>
                    </div>
                    <BriefcaseBusiness className="h-5 w-5 text-slate-600" />
                  </div>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <span
                        key={skill}
                        className="rounded-md bg-blue-400/[0.07] px-3 py-1.5 text-xs font-medium text-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative isolate overflow-hidden border-t border-white/[0.06]"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1220] to-[#101d35]" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400">
            What’s next?
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let’s build something great.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-400">
            I’m open to Software Engineering opportunities and interesting
            projects. If you think we could build something together, I’d love
            to hear from you.
          </p>
          <a
            href="mailto:guillermoruizsenso@outlook.com"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Get in touch <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Home
