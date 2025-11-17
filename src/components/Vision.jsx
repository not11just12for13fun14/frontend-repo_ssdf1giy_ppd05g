function Vision() {
  const items = [
    { title: 'Agentic AI workflows', desc: 'Automate repetitive processes and route tasks intelligently across your team.' },
    { title: 'Automated dashboards', desc: 'Real-time visibility on the metrics that matter, built from your unified data.' },
    { title: 'Smart reporting', desc: 'Generate reports, briefs, and recaps with context-aware AI assistance.' },
    { title: 'AI-assisted tasks', desc: 'Recommendations and next steps appear where work happens.' },
  ]

  return (
    <section id="vision" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">The vision</h2>
          <p className="mt-3 text-white/70">Popins becomes the intelligence layer for SMBs—one place to search, understand, and act.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur hover:bg-white/[0.05] transition-colors">
              <h3 className="text-lg font-semibold text-white">{i.title}</h3>
              <p className="mt-2 text-white/70">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Vision
