import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkline, BarMini } from './Charts'
import WorldMap from './WorldMap'
import { ArrowUpRight, Star, Target, BarChart3, Globe2, Quote } from 'lucide-react'

const palette = {
  ink: 'from-slate-50 to-slate-300',
  sky: 'from-cyan-300 to-blue-400',
  mint: 'from-emerald-300 to-teal-400',
  grape: 'from-fuchsia-300 to-violet-400',
}

const kpis = [
  { label: 'ARR', value: '$812M', delta: '+14%', series: [56,59,61,63,66,70,74,79,84,90,96,102], grad: palette.mint },
  { label: 'NRR', value: '118%', delta: '+3 pts', series: [107,108,110,111,112,114,115,116,117,118,118,118], grad: palette.sky },
  { label: 'Gross Retention', value: '96.2%', delta: '+0.7 pts', series: [94.5,95.1,95.4,95.7,95.9,96.2,96.2,96.2,96.3,96.3,96.3,96.2], grad: palette.ink },
  { label: 'AI Adoption', value: '72%', delta: '+22 pts', series: [18,22,28,34,40,46,52,58,62,66,69,72], grad: palette.grape },
]

const regionPerf = {
  na: 92, sa: 61, eu: 87, af: 54, as: 95, oc: 78,
}

const regionNarratives = {
  na: {
    title: 'North America · Platform Standardization',
    copy: 'District-level consolidation accelerated in Q2. Academic integrity policies now mandate AI-authorship checks alongside similarity. Multi-year agreements closed with 7 state systems.'
  },
  eu: {
    title: 'Europe · Trust, Privacy, and Proof',
    copy: 'GDPR-compliant authorial signals are a key differentiator. Nordic markets post record retention; DACH expansion driven by competitive displacements.'
  },
  as: {
    title: 'Asia · Scale Meets Precision',
    copy: 'Tier-1 universities adopt real-time feedback for formative learning. Localization and educator workflows reduce grading time by 28%.'
  },
  sa: {
    title: 'South America · Momentum via Partnerships',
    copy: 'Distributor-led motions bring national coverage in two new countries; hybrid pricing wins on affordability without sacrificing capability.'
  },
  af: {
    title: 'Africa · Leapfrogging to AI-Native',
    copy: 'NGO-backed pilots prove efficacy in high-volume exam settings. Cloud-first deployments remove on-prem friction.'
  },
  oc: {
    title: 'Oceania · Research Integrity at Speed',
    copy: 'Top research institutions expand to full suite—authorship, similarity, and workflows—after rigorous peer evaluation.'
  },
}

export default function Sections() {
  const [hoverRegion, setHoverRegion] = useState('na')

  return (
    <div className="relative">
      {/* KPI Belt */}
      <section className="relative -mt-10 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl p-5 bg-slate-900/70 border border-white/10">
              <div className={`text-xs font-medium bg-gradient-to-r ${k.grad} bg-clip-text text-transparent`}>{k.label}</div>
              <div className="mt-2 text-3xl font-semibold text-white">{k.value}</div>
              <div className="mt-1 text-emerald-400 text-xs">{k.delta}</div>
              <div className="mt-3"><Sparkline points={k.series} color="#22d3ee" /></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* World Performance */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-4 text-slate-300">
              <Globe2 className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">World Performance Map</span>
            </div>
            <WorldMap data={regionPerf} onRegionHover={setHoverRegion} />
            <div className="mt-3 text-xs text-slate-400">Hover regions to explore highlights. Color intensity reflects weighted performance index.</div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Regional Story</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-200">{hoverRegion?.toUpperCase()}</span>
              </div>
              <div className="mt-4 text-slate-300">
                <div className="text-sm font-medium text-slate-200">{regionNarratives[hoverRegion]?.title}</div>
                <p className="mt-2 text-sm leading-relaxed">{regionNarratives[hoverRegion]?.copy}</p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {['Bookings', 'Pipeline', 'Adoption'].map((l, i) => (
                  <div key={i} className="rounded-xl bg-slate-800/60 p-3">
                    <div className="text-xs text-slate-400">{l}</div>
                    <div className="text-lg text-white font-semibold">{Math.round((regionPerf[hoverRegion]||50) * (0.8 + i*0.1))}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue and Targets */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-gradient-to-b from-sky-900/40 to-slate-900/60 border border-sky-500/20">
            <div className="flex items-center gap-2 text-sky-300"><BarChart3 className="w-5 h-5" /><span className="text-sm">Global Revenue Trend</span></div>
            <div className="mt-4 text-3xl text-white font-semibold">$392M H1</div>
            <div className="text-slate-400 text-sm">Up 13% vs. plan; strength in AI-authorship upsell motion.</div>
            <div className="mt-4"><BarMini data={[26,28,29,31,33,37,39,41,44,45,47,49]} /></div>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-b from-emerald-900/30 to-slate-900/60 border border-emerald-500/20">
            <div className="flex items-center gap-2 text-emerald-300"><Target className="w-5 h-5" /><span className="text-sm">Target Performance</span></div>
            <div className="mt-4 text-3xl text-white font-semibold">106% to Plan</div>
            <div className="text-slate-400 text-sm">Weighted attainment across regions; 4 of 6 ahead of plan.</div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[['NA',112],['EU',108],['AS',114],['SA',89],['AF',86],['OC',102]].map(([l,v]) => (
                <div key={l} className="rounded-xl bg-slate-800/60 p-3 text-center">
                  <div className="text-xs text-slate-400">{l}</div>
                  <div className={`text-lg font-semibold ${v>=100?'text-emerald-400':'text-amber-300'}`}>{v}%</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-b from-violet-900/30 to-slate-900/60 border border-violet-500/20">
            <div className="flex items-center gap-2 text-violet-300"><Star className="w-5 h-5" /><span className="text-sm">Major Wins</span></div>
            <ul className="mt-4 space-y-3 text-slate-300 text-sm">
              <li>National contract with top 5 US state system; 640 institutions standardized</li>
              <li>3-year ELA with 14-member research consortium in EU</li>
              <li>Competitive displacement at two Tier-1 APAC universities</li>
              <li>First AI-authorship deployment in large-scale exam board (AF)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Customer Spotlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-slate-300"><Quote className="w-5 h-5" /><span className="text-sm uppercase tracking-wider">Customer Spotlights</span></div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                org: 'Stellarton University',
                quote: 'Turnitin reduced manual review time by 41% and increased detection precision—giving us confidence to scale AI-era assessment.',
                region: 'NA'
              },
              {
                org: 'Consortium for Open Research (EU-14)',
                quote: 'Our board chose Turnitin for its privacy posture and explainable signals—key for research compliance.',
                region: 'EU'
              },
              {
                org: 'Pacific Polytechnic',
                quote: 'Students embraced formative feedback. Submission quality improved measurably within 4 weeks.',
                region: 'AS'
              },
            ].map((c, i) => (
              <motion.figure key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl p-6 bg-slate-900/70 border border-white/10">
                <blockquote className="text-slate-200">“{c.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-slate-400">{c.org} · {c.region}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Strategy */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <div className="grid md:grid-cols-4">
              {[
                { q: 'Q1', title: 'Signal Depth', copy: 'Expanded language coverage and model ensembles improved authorial signal recall by 6 pts.' },
                { q: 'Q2', title: 'Workflow Speed', copy: 'Launch of instructor shortcuts reduced grading friction; 1.8M educators enabled.' },
                { q: 'Q3', title: 'Evidence Layer', copy: 'Explainability UI in pilot with research institutions; audit-ready exports.' },
                { q: 'Q4', title: 'Platform Scale', copy: 'Multi-tenant expansion to national deployments; 4x throughput headroom.' },
              ].map((t, i) => (
                <div key={i} className="p-6 bg-slate-900/60">
                  <div className="text-xs text-slate-400">{t.q}</div>
                  <div className="text-white font-semibold mt-1">{t.title}</div>
                  <p className="text-sm text-slate-300 mt-2">{t.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
