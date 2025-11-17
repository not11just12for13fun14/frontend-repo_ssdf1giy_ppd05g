import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400" />
              New: Popins for SMBs
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              The AI-powered knowledge base built for small and medium businesses
            </h1>
            <p className="mt-5 text-gray-600 text-lg md:text-xl">
              Unify documents, emails, and internal knowledge into one private, searchable interface. Get instant, trustworthy answers based on your real company data.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-semibold hover:bg-black transition-colors">
                Start in minutes
              </a>
              <a href="#integrations" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-gray-900 font-semibold border border-black/10 hover:bg-gray-50">
                See integrations
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Private. Secure. No technical setup required.</p>
          </div>
          <div className="relative h-[420px] md:h-[520px] rounded-2xl bg-gradient-to-b from-white to-white/40 ring-1 ring-black/5">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/40" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
