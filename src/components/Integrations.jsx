function Integrations() {
  const logos = [
    { name: 'Google Drive', color: 'from-emerald-400 to-emerald-600' },
    { name: 'Box', color: 'from-blue-500 to-blue-700' },
    { name: 'Dropbox', color: 'from-sky-400 to-sky-600' },
    { name: 'Slack', color: 'from-fuchsia-400 to-fuchsia-600' },
    { name: 'CRM', color: 'from-rose-400 to-rose-600' },
    { name: 'JIRA', color: 'from-indigo-400 to-indigo-600' },
  ]

  return (
    <section id="integrations" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Integrations that just work</h2>
          <p className="mt-3 text-white/70">Connect your existing tools in minutes. Popins securely syncs and keeps them up to date.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {logos.map((l) => (
            <div key={l.name} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className={`h-10 w-10 rounded bg-gradient-to-br ${l.color} shadow-[0_0_30px_-8px_rgba(99,102,241,.6)]`}></div>
              <span className="text-sm text-white/80">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Integrations
