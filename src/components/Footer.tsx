import { ArrowUpRight, Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d19]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="/" className="inline-flex items-center gap-2 text-white">
              <Code2 className="h-5 w-5 text-blue-400" />
              <span className="font-bold">
                Guillermo<span className="text-blue-400">.</span>
              </span>
            </a>

            <p className="mt-3 max-w-sm text-sm text-slate-500">
              Software Engineer building modern web applications, scalable
              systems and AI-powered solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-white"
            >
              GitHub <ArrowUpRight size={13} className="inline" />
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_USERNAME/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-white"
            >
              LinkedIn <ArrowUpRight size={13} className="inline" />
            </a>

            <a
              href="mailto:YOUR_EMAIL"
              className="text-slate-400 transition hover:text-white"
            >
              Email <ArrowUpRight size={13} className="inline" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Guillermo Ruiz Senso. All rights
            reserved.
          </p>
          <p>Designed & built with React, TypeScript and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
