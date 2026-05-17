import { Mail, ExternalLink } from 'lucide-react'

const skills = [
  'Java',
  'Spring Boot',
  'AWS',
  'Docker',
  'Terraform',
  'React',
  'TypeScript',
  'PostgreSQL',
  'CI/CD',
  'JUnit',
]

const projects = [
  {
    title: 'Smart-City Parking Manager',
    stack: 'Spring Boot · React · WebSockets · MQTT',
    description:
      'Real-time parking platform with live availability, reservations and IoT sensor integration. Achieved <400ms latency and 99% accuracy in a 120-bay pilot.',
  },
  {
    title: 'SpainInYou E-Commerce',
    stack: 'Angular · Firebase · Stripe',
    description:
      'Full e-commerce application with catalogue, cart, checkout, authentication and admin features. Lighthouse score above 92.',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-black text-white px-6">
      <nav className="sticky top-0 z-50 mx-auto flex max-w-6xl items-center justify-between py-6 backdrop-blur">
        <span className="font-bold tracking-tight">GRS</span>

        <div className="hidden gap-6 text-sm text-gray-400 md:flex">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center text-center">
        <p className="mb-4 rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-400">
          Available for Software Engineering roles
        </p>

        <h1 className="max-w-4xl text-6xl font-bold tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] md:text-8xl">
          Guillermo Ruiz Senso
        </h1>

        <p className="mt-6 text-xl text-gray-400 md:text-2xl">
          Software Engineer | Backend • Cloud • DevOps
        </p>

        <p className="mt-6 max-w-2xl text-gray-500">
          I build scalable backend systems, cloud-native applications and modern
          web platforms using Java, Spring Boot, AWS, Docker and React.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
            transition-all
            hover:scale-105
          >
            View Projects
          </a>
          <a
            href="mailto:guillermoruizsenso@outlook.com"
            className="rounded-xl border border-gray-700 px-6 py-3 font-semibold hover:border-white"
            transition-all
            hover:border-white
            hover:scale-105
          >
            Contact
          </a>
        </div>

        <div className="mt-8 flex gap-5 text-gray-400">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/guillermo-ruiz-senso"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:guillermoruizsenso@outlook.com"
            className="hover:text-white"
          >
            <Mail />
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl py-20">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Software Engineer based in Dublin, specialised in Java, Cloud and
          DevOps. I have experience building Java 17 / Spring Boot
          microservices, deploying containerised applications to AWS ECS,
          improving CI/CD pipelines and creating full-stack web applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map(skill => (
            <span
              key={skill}
              className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl py-20">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map(project => (
            <article
              key={project.title}
              className="rounded-2xl border border-gray-800 bg-zinc-950 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <ExternalLink className="h-5 w-5 text-gray-500" />
              </div>
              <p className="mt-3 text-sm text-gray-500">{project.stack}</p>
              <p className="mt-5 leading-7 text-gray-400">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl py-20">
        <h2 className="text-3xl font-bold">Experience</h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-xl font-semibold">
              Software Developer Intern — AutoJob.app
            </h3>
            <p className="mt-2 text-gray-500">Feb 2025 – Jun 2025 · Dublin</p>
            <p className="mt-4 text-gray-400">
              Built Java 17 / Spring Boot microservices, improved test coverage
              from 63% to 88%, and reduced release lead time by 40% using
              Docker, GitHub Actions and AWS ECS.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-xl font-semibold">
              Freelance E-Commerce Web Developer
            </h3>
            <p className="mt-2 text-gray-500">
              Jun 2022 – Mar 2023 · Jan 2026 – Present
            </p>
            <p className="mt-4 text-gray-400">
              Develop and customise PrestaShop e-commerce websites, modules and
              MySQL/PHP solutions for clients.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl py-20 text-center">
        <h2 className="text-3xl font-bold">Let’s work together</h2>
        <p className="mt-4 text-gray-400">
          Open to Software Engineer, Backend, Cloud and Full Stack
          opportunities.
        </p>

        <a
          href="mailto:guillermoruizsenso@outlook.com"
          className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
        >
          Contact Me
        </a>
      </section>
    </main>
  )
}

export default App
