import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-slate-950">
      {/* Spline 3D scene */}
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.25),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200 text-sm mb-6 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Global Edition · FY2025 Mid-Year Briefing
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-200">
            The Turnitin Times
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            A premium editorial on the state of academic integrity technology. Performance, adoption, and impact—across every region, every classroom, every submission.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Annual Recurring Revenue', value: '$812M', change: '+14% YoY' },
              { label: 'Net Revenue Retention', value: '118%', change: '+3 pts' },
              { label: 'Institutions Served', value: '16,400', change: '+9% YoY' },
              { label: 'Avg. Monthly Submissions', value: '218M', change: '+22% YoY' },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }} className="rounded-2xl bg-white/5 border border-white/10 p-5 text-left">
                <div className="text-sm text-slate-400">{m.label}</div>
                <div className="mt-1 text-2xl font-semibold text-white">{m.value}</div>
                <div className="mt-2 text-xs font-medium text-emerald-400">{m.change}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <figure className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 text-left">
              <blockquote className="text-slate-200 text-lg">
                “AI-driven authorship insights and real-time similarity checks are now table stakes. Institutions choose Turnitin because we operationalize integrity at platform scale.”
              </blockquote>
              <figcaption className="mt-3 text-slate-400 text-sm">Elena Hart · SVP, Product Strategy</figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
