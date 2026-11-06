import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Database,
  GraduationCap,
  Layers3,
  MonitorPlay,
  Server,
  ShoppingBag,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const technologies = [
  'React',
  'TypeScript',
  'Prisma ORM',
  'Supabase',
  'PostgreSQL',
]

const features = [
  {
    title: 'Online Courses',
    description:
      'A structured learning experience with courses, modules and individual lessons for students.',
    icon: GraduationCap,
    status: 'In development',
  },
  {
    title: 'Learning Materials',
    description:
      'A dedicated area for educational resources, including downloadable PDFs and study materials.',
    icon: BookOpen,
    status: 'In development',
  },
  {
    title: 'Live Classes',
    description:
      'A booking concept designed to connect students with teachers for personalised one-to-one language lessons.',
    icon: CalendarDays,
    status: 'Planned',
  },
  {
    title: 'Student Experience',
    description:
      'A platform designed to bring learning content and educational resources together in one place.',
    icon: Users,
    status: 'In development',
  },
]

function MojoCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080B12] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-64 right-[-100px] h-[600px] w-[600px] rounded-full bg-lime-400/[0.08] blur-[160px]" />
      </div>

      {/* Navigation */}
      <NavBar />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-32">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
            <span className="h-px w-8 bg-lime-400" />
            Personal Project · Case Study
          </p>

          <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-300">
            In Development
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] md:text-7xl">
          Mojo —
          <br />
          <span className="bg-gradient-to-r from-white to-lime-300 bg-clip-text text-transparent">
            Language Learning Platform.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          A full-stack language learning platform designed to bring online
          courses, educational resources and personalised language lessons
          together in one place. Mojo aims to make language learning more
          accessible and flexible.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {[
            'EdTech',
            'Full-Stack Development',
            'Online Learning',
            'Personal Project',
          ].map(item => (
            <span
              key={item}
              className="rounded-full border border-lime-400/20 bg-lime-400/[0.05] px-4 py-2 text-sm text-lime-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Frontend', value: 'React + TypeScript' },
            { label: 'ORM', value: 'Prisma' },
            { label: 'Database', value: 'PostgreSQL' },
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
            01 / Overview
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                One platform. Multiple ways to learn.
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-slate-400">
              <p>
                Mojo is a language learning platform focused on Spanish, English
                and French. The idea is to provide students with different
                learning options depending on their needs and preferences.
              </p>
              <p>
                The platform brings together self-paced courses, downloadable
                educational materials and the concept of personalised live
                lessons, creating a central place for students to organise their
                learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
            02 / Platform features
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Designed around the learning experience.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            The platform is being developed around four main areas that support
            different stages of the learning journey.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {features.map(({ title, description, icon: Icon, status }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/[0.08] bg-[#0D121D] p-6 transition hover:border-lime-400/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl bg-lime-400/10 p-3 text-lime-300">
                    <Icon size={23} />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                    {status}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
            03 / System architecture
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Building the foundation.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Mojo uses a modern full-stack architecture, combining a React
            frontend, Prisma ORM and a Supabase PostgreSQL database.
          </p>

          <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#0D121D] p-6 md:p-10">
            <div className="mx-auto max-w-md rounded-xl border border-lime-400/30 bg-lime-400/[0.06] p-5 text-center">
              <MonitorPlay className="mx-auto mb-3 text-lime-300" size={25} />
              <p className="font-semibold">React + TypeScript</p>
              <p className="mt-1 text-xs text-slate-500">User interface</p>
            </div>

            <div className="mx-auto h-10 w-px bg-lime-400/40" />

            <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <Server className="mx-auto mb-3 text-lime-300" size={25} />
              <p className="font-semibold">Prisma ORM</p>
              <p className="mt-1 text-xs text-slate-500">
                Database access and application data layer
              </p>
            </div>

            <div className="mx-auto h-10 w-px bg-lime-400/40" />

            <div className="mx-auto max-w-md rounded-xl border border-lime-400/20 bg-lime-400/[0.04] p-5 text-center">
              <Database className="mx-auto mb-3 text-lime-300" size={25} />
              <p className="font-semibold">Supabase · PostgreSQL</p>
              <p className="mt-1 text-xs text-slate-500">Relational database</p>
            </div>

            <p className="mt-6 text-center text-xs text-slate-500">
              Simplified representation of the current application stack.
            </p>
          </div>
        </div>
      </section>

      {/* Data model */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
            04 / Data model
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Structuring the learning platform.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            The database schema is designed to organise the main entities
            required by the platform and their relationships.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Users',
                description: 'User accounts and platform profiles.',
                icon: Users,
              },
              {
                title: 'Courses & Lessons',
                description: 'Course structure, modules and lessons.',
                icon: GraduationCap,
              },
              {
                title: 'Course Progress',
                description: 'Records associated with student progress.',
                icon: Layers3,
              },
              {
                title: 'Materials',
                description: 'Educational resources and downloadable content.',
                icon: BookOpen,
              },
              {
                title: 'Bookings',
                description: 'Data structure for class booking functionality.',
                icon: CalendarDays,
              },
              {
                title: 'Products & Purchases',
                description: 'Data entities for products and purchase records.',
                icon: ShoppingBag,
              },
            ].map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/[0.08] bg-[#0D121D] p-6"
              >
                <Icon className="text-lime-300" size={23} />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology stack */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
            05 / Technology stack
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight">
            Tools and technologies.
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map(technology => (
              <span
                key={technology}
                className="rounded-lg border border-white/[0.09] bg-[#0D121D] px-4 py-3 text-sm text-slate-300 transition hover:border-lime-400/40 hover:text-lime-200"
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
            className="inline-flex items-center gap-2 text-sm text-lime-300 transition hover:text-lime-200"
          >
            Back to portfolio
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </footer>
    </main>
  )
}

export default MojoCaseStudy
