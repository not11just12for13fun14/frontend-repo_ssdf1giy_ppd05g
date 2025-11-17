import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -z-10 inset-0 opacity-40 bg-[radial-gradient(800px_500px_at_70%_20%,rgba(124,58,237,0.5),transparent_60%),radial-gradient(600px_400px_at_20%_10%,rgba(56,189,248,0.45),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 via-sky-500 to-orange-400" />
              New: Popins for SMBs
            </div>
            <h1 className="mt-5 text-[2.4rem] md:text-6xl font-semibold tracking-tight leading-tight text-white">
              The AI-powered knowledge base built for small and medium businesses
            </h1>
            <p className="mt-5 text-white/70 text-lg md:text-xl">
              Unify documents, emails, and internal knowledge into one private, searchable interface. Get instant, trustworthy answers based on your real company data.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-slate-900 font-semibold hover:bg-gray-100 transition-colors">
                Start in minutes
              </a>
              <a href="#integrations" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-white font-semibold border border-white/15 hover:bg-white/15">
                See integrations
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60">Private. Secure. No technical setup required.</p>
          </div>
          <div className="relative h-[420px] md:h-[520px] rounded-2xl border border-white/10 bg-white/5 ring-1 ring-white/10 shadow-[0_0_80px_-20px_rgba(139,92,246,0.6)]">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
