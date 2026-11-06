import {
  ArrowUpRight,
  ShoppingBag,
  CreditCard,
  ShieldCheck,
  Package,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const features = [
  {
    title: 'Product Catalogue',
    description:
      'An online catalogue designed to present products and help customers explore the available selection.',
    icon: Package,
  },
  {
    title: 'Shopping Cart',
    description:
      'A shopping experience that allows customers to select products before proceeding to checkout.',
    icon: ShoppingBag,
  },
  {
    title: 'Payment Integration',
    description:
      'Stripe integration as part of the e-commerce checkout experience.',
    icon: CreditCard,
  },
  {
    title: 'Authentication',
    description:
      'Firebase-based services supporting user authentication and application data.',
    icon: ShieldCheck,
  },
]

export default function SpainInYouCaseStudy() {
  return (
    <main className="min-h-screen bg-[#080B12] text-white">
      <NavBar />

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
          Project Case Study · E-Commerce
        </p>

        <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          SpainIn<span className="text-red-400">You.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          An e-commerce platform focused on bringing Spanish products to
          customers through an online shopping experience. The project combines
          product discovery, shopping cart functionality, authentication and
          payment integration.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {['E-Commerce', 'Full Stack', 'Online Shopping'].map(item => (
            <span
              key={item}
              className="rounded-full border border-red-400/20 bg-red-400/5 px-4 py-2 text-sm text-red-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#101521]">
          <img
            src="/projects/spaininyou.png"
            alt="SpainInYou e-commerce website"
            className="w-full object-cover object-top"
          />
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              01 / Overview
            </p>
            <h2 className="mt-5 text-3xl font-semibold">
              An online shopping experience.
            </h2>
          </div>
          <div className="space-y-5 leading-8 text-slate-400">
            <p>
              SpainInYou is an e-commerce project built around the idea of
              making Spanish products available through a dedicated online
              platform.
            </p>
            <p>
              The application brings together product presentation, customer
              interaction and checkout-related functionality in one shopping
              experience.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            02 / Key features
          </p>
          <h2 className="mt-5 text-3xl font-semibold">
            Core e-commerce functionality.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {features.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/[0.08] bg-[#0D121D] p-7"
              >
                <Icon size={25} className="text-red-300" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            03 / Technology stack
          </p>
          <h2 className="mt-5 text-3xl font-semibold">Technologies used.</h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Angular', 'Firebase', 'Stripe'].map(item => (
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
            className="flex items-center gap-2 text-sm text-red-300 hover:text-red-200"
          >
            Back to portfolio <ArrowUpRight size={17} />
          </Link>
        </div>
      </footer>
    </main>
  )
}
