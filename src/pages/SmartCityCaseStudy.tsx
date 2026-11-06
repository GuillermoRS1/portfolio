import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  Database,
  GitBranch,
  Layers3,
  Search,
  Server,
  ShieldAlert,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const technologies = [
  'Java 21',
  'Spring Boot 3.4',
  'React',
  'React Leaflet',
  'MongoDB',
  'Elasticsearch',
  'Eureka',
  'API Gateway',
]

const architecture = [
  {
    name: 'Frontend',
    detail:
      'React application with interactive parking maps and search functionality.',
    icon: Layers3,
  },
  {
    name: 'API Gateway',
    detail:
      'Central entry point for routing client requests to backend services.',
    icon: GitBranch,
  },
  {
    name: 'Service Discovery',
    detail: 'Eureka server for service registration and discovery.',
    icon: Boxes,
  },
  {
    name: 'Microservices',
    detail:
      'Independent services handling parking management and incident management.',
    icon: Server,
  },
  {
    name: 'Data & Search',
    detail:
      'MongoDB for application data and Elasticsearch for search capabilities.',
    icon: Database,
  },
]

function SmartCityCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080B12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-64 right-[-100px] h-[600px] w-[600px] rounded-full bg-blue-600/[0.10] blur-[160px]" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 border-b border-white/[0.06]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-lg font-bold tracking-tight">
            GRS<span className="text-blue-400">.</span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-400"
          >
            <ArrowLeft size={17} />
            Back to portfolio
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-32">
        <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
          <span className="h-px w-8 bg-blue-400" />
          Master&apos;s Thesis · Case Study
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] md:text-7xl">
          Smart-City
          <br />
          <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Parking Manager.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          A smart parking management platform designed around a microservices
          architecture. The project explores how distributed backend services,
          geospatial interfaces and dedicated search infrastructure can work
          together to improve urban parking management.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {[
            'Microservices',
            'Backend Engineering',
            'Smart City',
            'Full-Stack',
          ].map(item => (
            <span
              key={item}
              className="rounded-full border border-blue-400/20 bg-blue-400/[0.05] px-4 py-2 text-sm text-blue-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Architecture', value: 'Microservices' },
            { label: 'Backend', value: 'Java 21' },
            { label: 'Frontend', value: 'React' },
          ].map(item => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/[0.08] bg-[#0D121D] p-6"
            >
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-2 text-xl font-semibold text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            01 / Overview
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Bringing smarter parking management to urban environments.
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-slate-400">
              <p>
                Urban parking management involves different types of information
                and operations that need to work together. Smart-City Parking
                Manager was developed to explore a modular approach to these
                challenges.
              </p>
              <p>
                The application combines backend microservices with a React
                frontend, providing an interactive way to explore parking
                information and manage parking-related incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            02 / System architecture
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Designed as independent services.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            The system follows a microservices approach, separating application
            responsibilities into components that communicate through a
            centralised API entry point and service discovery.
          </p>

          {/* Conceptual architecture flow */}
          <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#0D121D] p-6 md:p-10">
            <div className="mx-auto max-w-md rounded-xl border border-blue-400/30 bg-blue-500/[0.08] p-5 text-center">
              <Layers3 className="mx-auto mb-3 text-blue-400" size={25} />
              <p className="font-semibold">React Frontend</p>
              <p className="mt-1 text-xs text-slate-500">
                Interactive parking interface
              </p>
            </div>

            <div className="mx-auto h-10 w-px bg-blue-400/40" />

            <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <GitBranch className="mx-auto mb-3 text-blue-400" size={25} />
              <p className="font-semibold">API Gateway</p>
              <p className="mt-1 text-xs text-slate-500">
                Central request routing
              </p>
            </div>

            <div className="mx-auto h-10 w-px bg-blue-400/40" />

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <Server className="mx-auto mb-3 text-blue-400" size={24} />
                <p className="font-semibold">Parking Service</p>
                <p className="mt-1 text-xs text-slate-500">
                  Parking management
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <ShieldAlert className="mx-auto mb-3 text-blue-400" size={24} />
                <p className="font-semibold">Incident Service</p>
                <p className="mt-1 text-xs text-slate-500">
                  Incident management
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-blue-400/20 bg-blue-400/[0.04] p-4 text-center">
              <p className="text-sm font-medium text-blue-300">
                Eureka · Service Discovery
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Service registration and discovery
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <Database className="mx-auto mb-2 text-blue-400" size={23} />
                <p className="font-medium">MongoDB</p>
                <p className="mt-1 text-xs text-slate-500">Application data</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <Search className="mx-auto mb-2 text-blue-400" size={23} />
                <p className="font-medium">Elasticsearch</p>
                <p className="mt-1 text-xs text-slate-500">
                  Search infrastructure
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-slate-500">
              Conceptual representation of the main system components.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture details */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            03 / Components
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            The engineering behind the platform.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {architecture.map(({ name, detail, icon: Icon }, index) => (
              <article
                key={name}
                className="rounded-2xl border border-white/[0.08] bg-[#0D121D] p-6 transition hover:border-blue-400/30"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-400">
                      COMPONENT 0{index + 1}
                    </p>
                    <h3 className="mt-2 font-semibold">{name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical decisions */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            04 / Technical decisions
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Separating responsibilities.
          </h2>

          <div className="mt-10 space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0D121D] p-6">
              <h3 className="font-semibold">MongoDB and Elasticsearch</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                The project uses MongoDB for the main application data and
                Elasticsearch as a dedicated search engine. This separation
                allows search functionality to be handled independently from the
                primary data operations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0D121D] p-6">
              <h3 className="font-semibold">
                Service discovery and API Gateway
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Eureka provides service registration and discovery, while the
                API Gateway acts as the central entry point for client requests
                to backend services.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0D121D] p-6">
              <h3 className="font-semibold">Interactive geospatial frontend</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                React and React Leaflet provide the map-based interface for
                exploring parking locations and interacting with the
                platform&apos;s search functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            05 / Technology stack
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight">
            Tools and technologies.
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map(technology => (
              <span
                key={technology}
                className="rounded-lg border border-white/[0.09] bg-[#0D121D] px-4 py-3 text-sm text-slate-300 transition hover:border-blue-400/40 hover:text-blue-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold">Guillermo Ruiz Senso</p>
            <p className="mt-2 text-sm text-slate-500">
              Software Engineer · Dublin, Ireland
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-blue-400 transition hover:text-blue-300"
          >
            Back to portfolio
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </footer>
    </main>
  )
}

export default SmartCityCaseStudy
