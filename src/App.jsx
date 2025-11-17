import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Integrations from './components/Integrations'
import Security from './components/Security'
import Vision from './components/Vision'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen text-gray-100 bg-slate-950">
      {/* Global background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(124,58,237,0.25),transparent_60%),radial-gradient(1000px_500px_at_90%_10%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(900px_500px_at_10%_20%,rgba(249,115,22,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(#0B1220_0,#0B1220_30%,transparent_80%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'linear-gradient(to_right,rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.07)_1px,transparent_1px)',backgroundSize:'24px_24px'}} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Security />
        <Vision />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-violet-500 via-sky-500 to-orange-400 shadow-[0_0_30px_-6px] shadow-violet-500/50" />
            <span className="text-sm font-medium text-white/80">Popins.ai</span>
          </div>
          <p className="text-sm text-white/50">© {new Date().getFullYear()} Popins, Inc. All rights reserved.</p>
          <nav className="flex items-center gap-5 text-sm text-white/60">
            <a href="#security" className="hover:text-white">Security</a>
            <a href="#integrations" className="hover:text-white">Integrations</a>
            <a href="#product" className="hover:text-white">Product</a>
            <a href="#cta" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
