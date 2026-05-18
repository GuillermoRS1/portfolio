function SmartCityCaseStudy() {
  return (
    <main className="min-h-screen bg-black px-6 text-white">
      <section className="mx-auto max-w-6xl py-10">
        <a href="/" className="text-sm text-gray-400 hover:text-white">
          ← Back to portfolio
        </a>

        <div className="mt-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Case Study
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Smart-City Parking Manager
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A real-time parking management platform built with Spring Boot,
            React, WebSockets and MQTT. The system displays live parking
            availability, manages reservations and simulates IoT sensor data.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <p className="text-3xl font-bold">&lt;400ms</p>
            <p className="mt-2 text-gray-400">Real-time latency</p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <p className="text-3xl font-bold">99%</p>
            <p className="mt-2 text-gray-400">Pilot accuracy</p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <p className="text-3xl font-bold">120</p>
            <p className="mt-2 text-gray-400">Parking bays simulated</p>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-bold">Tech Stack</h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              'Java',
              'Spring Boot',
              'React',
              'WebSockets',
              'MQTT',
              'PostgreSQL',
              'Docker',
            ].map(tech => (
              <span
                key={tech}
                className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default SmartCityCaseStudy
