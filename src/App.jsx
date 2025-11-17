import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Integrations from './components/Integrations'
import Security from './components/Security'
import Vision from './components/Vision'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Security />
        <Vision />
        <CTA />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span className="text-sm font-medium">Popins.ai</span>
          </div>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Popins, Inc. All rights reserved.</p>
          <nav className="flex items-center gap-5 text-sm text-gray-600">
            <a href="#security" className="hover:text-gray-900">Security</a>
            <a href="#integrations" className="hover:text-gray-900">Integrations</a>
            <a href="#product" className="hover:text-gray-900">Product</a>
            <a href="#cta" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
