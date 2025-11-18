import React from 'react'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Subtle backdrop pattern */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_0%_0%,rgba(14,165,233,0.06),transparent_60%),radial-gradient(600px_circle_at_100%_0%,rgba(139,92,246,0.06),transparent_60%)]" />

      {/* Publication header */}
      <header className="relative z-10 border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500" />
            <div>
              <div className="text-xs tracking-widest text-slate-400 uppercase">Premium Briefing</div>
              <div className="font-semibold">The Turnitin Times</div>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#world" className="hover:text-white">World</a>
            <a href="#revenue" className="hover:text-white">Revenue</a>
            <a href="#customers" className="hover:text-white">Customers</a>
            <a href="#strategy" className="hover:text-white">Strategy</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <Sections />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm">© 2025 The Turnitin Times · Internal Briefing</div>
          <div className="text-slate-400 text-sm">Metric of the Month: 72% AI Adoption across customer base</div>
        </div>
      </footer>
    </div>
  )
}

export default App
