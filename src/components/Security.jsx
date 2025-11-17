function Security() {
  const items = [
    { title: 'Private by default', desc: 'Your data stays yours. Encrypted in transit and at rest.' },
    { title: 'Granular access', desc: 'Permissions mirror your source systems so the right people see the right things.' },
    { title: 'Enterprise-grade', desc: 'SSO, audit logs, and admin controls without the enterprise complexity.' },
  ]

  return (
    <section id="security" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Fast, private, and secure</h2>
          <p className="mt-3 text-gray-600">Built to earn trust from day one—so you can deploy confidently across your company.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-xl border border-black/5 bg-white/70 backdrop-blur">
              <h3 className="text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Security
