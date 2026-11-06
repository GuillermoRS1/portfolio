import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  number: string
  title: string
  category: string
  description: string
  stack: string[]
  image: string
  detailsUrl: string
  liveUrl?: string
  status?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101827] transition hover:border-blue-400/40">
      <Link to={project.detailsUrl} className="block">
        <div className="h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="mb-3 text-sm text-blue-400">
            {project.number} / {project.category}
          </p>

          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>

            <ArrowUpRight className="text-blue-400 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map(technology => (
              <span
                key={technology}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm font-medium text-blue-400">
            View case study <ArrowUpRight className="inline" size={15} />
          </p>
        </div>
      </Link>
    </article>
  )
}
