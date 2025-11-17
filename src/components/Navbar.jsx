import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Security', href: '#security' },
    { label: 'Vision', href: '#vision' },
  ]

  return (
    <header className="sticky top-0 z-50 supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 via-sky-500 to-orange-400 shadow-[0_0_30px_-6px] shadow-violet-500/50" />
            <span className="text-lg font-semibold tracking-tight text-white">Popins.ai</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="text-sm font-medium text-white/70 hover:text-white">Contact sales</a>
            <a href="#cta" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-gray-100 transition-colors">Get started</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-2 py-2 rounded-md text-white/80 hover:bg-white/10" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="px-2 py-2 rounded-md text-white/80 hover:bg-white/10" onClick={() => setOpen(false)}>Contact sales</a>
              <a href="#cta" className="mt-2 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-gray-100" onClick={() => setOpen(false)}>Get started</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
