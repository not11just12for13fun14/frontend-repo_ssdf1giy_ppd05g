function Feature({ title, desc }) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur hover:bg-white/[0.05] transition-colors">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/70">{desc}</p>
    </div>
  )
}

function Features() {
  const items = [
    {
      title: 'Unify scattered knowledge',
      desc: 'Connect documents, spreadsheets, emails, images, and internal files into a single, secure source of truth.'
    },
    {
      title: 'Ask and get instant answers',
      desc: 'Employees ask questions in plain language. Popins answers using your company data with citations.'
    },
    {
      title: 'Integrate in minutes',
      desc: 'Start with Google Drive, Box, and Dropbox. Slack, CRM systems, and JIRA are coming soon.'
    },
    {
      title: 'Built for non-technical teams',
      desc: 'No complex onboarding. Simple setup anyone can do—without IT requests or engineering time.'
    },
  ]

  return (
    <section id="product" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">What Popins does</h2>
          <p className="mt-3 text-white/70">A private, AI-powered knowledge layer for your business, designed to make every employee smarter and more autonomous.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
