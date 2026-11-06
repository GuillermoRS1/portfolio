import { ArrowUpRight, Smartphone, Palette, Search, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const contributions = [
  {
    title: 'Frontend Redesign',
    description:
      'Redesigned the visual presentation of the existing e-commerce website, creating a more consistent and modern user experience.',
    icon: Palette,
  },
  {
    title: 'Responsive Design',
    description:
      'Customised layouts and components to provide a consistent experience across desktop, tablet and mobile devices.',
    icon: Smartphone,
  },
  {
    title: 'Custom Frontend Development',
    description:
      'Implemented frontend customisations using HTML, CSS and JavaScript within the existing PrestaShop environment.',
    icon: Code2,
  },
  {
    title: 'SEO Improvements',
    description:
      'Worked on website presentation and frontend improvements supporting a clearer site structure and user experience.',
    icon: Search,
  },
]

export default function IndiluzCaseStudy() {
  return (
    <main className="min-h-screen bg-[#080B12] text-white">
      <NavBar />

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            Freelance · Client Project
          </p>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            March 2026 – July 2026
          </span>
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Indiluz<span className="text-amber-300">.</span>
          <br />
          <span className="text-slate-400">E-Commerce Redesign.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          A freelance frontend project focused on redesigning and customising
          the existing Indiluz e-commerce website. The work covered the visual
          experience, responsive layouts and key sections of the PrestaShop
          storefront.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {['Client Project', 'Frontend Development', 'PrestaShop'].map(
            item => (
              <span
                key={item}
                className="rounded-full border border-amber-300/20 bg-amber-300/5 px-4 py-2 text-sm text-amber-200"
              >
                {item}
              </span>
            )
          )}
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#101521]">
          <img
            src="/projects/indiluz.png"
            alt="Indiluz e-commerce website redesign"
            className="w-full object-cover object-top"
          />
        </div>

        <div className="mt-8">
          <a
            href="https://indiluz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-300 px-5 py-3 font-semibold text-[#111827] transition hover:bg-amber-200"
          >
            Visit Indiluz <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              01 / Project overview
            </p>
            <h2 className="mt-5 text-3xl font-semibold">
              Improving an established online store.
            </h2>
          </div>
          <div className="space-y-5 leading-8 text-slate-400">
            <p>
              Indiluz is an established e-commerce website. The objective of
              this client project was to redesign and customise its frontend
              rather than build a new e-commerce platform.
            </p>
            <p>
              The work focused on improving the website's visual identity,
              responsive presentation and user experience across its main
              sections, including the homepage, product pages, navigation,
              header and footer.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            02 / My contributions
          </p>
          <h2 className="mt-5 text-3xl font-semibold">
            Frontend work and improvements.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {contributions.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/[0.08] bg-[#0D121D] p-7"
              >
                <Icon size={25} className="text-amber-300" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            03 / Technologies
          </p>
          <h2 className="mt-5 text-3xl font-semibold">
            Tools used during the project.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {['PrestaShop', 'HTML5', 'CSS3', 'JavaScript', 'SEO'].map(item => (
              <span
                key={item}
                className="rounded-lg border border-white/10 bg-[#0D121D] px-5 py-3 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-6 py-12 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            Guillermo Ruiz Senso · Software Engineer
          </p>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200"
          >
            Back to portfolio <ArrowUpRight size={17} />
          </Link>
        </div>
      </footer>
    </main>
  )
}
