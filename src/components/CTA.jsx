function CTA() {
  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #a78bfa, transparent 40%), radial-gradient(circle at 80% 30%, #60a5fa, transparent 40%), radial-gradient(circle at 50% 80%, #fb923c, transparent 40%)' }} />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Give your team instant answers, not endless searches</h3>
            <p className="mt-3 text-white/70 max-w-2xl">See how Popins can make every employee smarter and more autonomous. Get a guided tour tailored to your business.</p>
            <form className="mt-6 grid sm:grid-cols-3 gap-3" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" placeholder="Work email" className="col-span-2 w-full rounded-md bg-white/10 border border-white/20 px-4 py-3 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" required />
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-gray-100">Request a demo</button>
            </form>
            <p className="mt-3 text-xs text-white/60">We’ll reach out within one business day.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
