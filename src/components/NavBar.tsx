import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Code2 } from 'lucide-react'

export default function NavBar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080d19]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3">
          {' '}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 transition group-hover:bg-blue-400/20">
            <Code2 size={22} className="text-blue-400" />
          </div>
          <div>
            <p className="text-base font-bold tracking-tight text-white">
              Guillermo Ruiz<span className="text-blue-400">.</span>
            </p>
            <p className="text-xs text-slate-500">Software Engineer</p>
          </div>
        </Link>

        {/* Navigation */}
        {isHome ? (
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Experience
            </a>
          </div>
        ) : (
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-blue-400/30 hover:bg-blue-400/5 hover:text-blue-300"
          >
            <ArrowLeft
              size={16}
              className="transition group-hover:-translate-x-1"
            />
            Back to projects
          </Link>
        )}

        {/* Contact */}
        <a
          href="mailto:guillermoruizsenso@outlook.com"
          className="hidden items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 sm:inline-flex"
        >
          Contact me
          <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  )
}
