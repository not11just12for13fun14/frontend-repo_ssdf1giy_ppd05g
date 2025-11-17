function Integrations() {
  const logos = [
    { name: 'Google Drive', color: 'bg-green-500' },
    { name: 'Box', color: 'bg-blue-600' },
    { name: 'Dropbox', color: 'bg-sky-500' },
    { name: 'Slack', color: 'bg-purple-500' },
    { name: 'CRM', color: 'bg-rose-500' },
    { name: 'JIRA', color: 'bg-indigo-600' },
  ]

  return (
    <section id="integrations" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Integrations that just work</h2>
          <p className="mt-3 text-gray-600">Connect your existing tools in minutes. Popins securely syncs and keeps them up to date.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {logos.map((l) => (
            <div key={l.name} className="flex flex-col items-center gap-2 rounded-xl border border-black/5 bg-white/70 p-6">
              <div className={`h-10 w-10 rounded ${l.color}`}></div>
              <span className="text-sm text-gray-700">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Integrations
