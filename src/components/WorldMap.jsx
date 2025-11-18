import React from 'react'

// Simple interactive "world" using stylized regional blocks
// Regions: na, sa, eu, af, as, oc
export default function WorldMap({ data = {}, onRegionHover }) {
  const regions = [
    { id: 'na', name: 'North America', cx: 200, cy: 180, w: 180, h: 100 },
    { id: 'sa', name: 'South America', cx: 260, cy: 320, w: 120, h: 140 },
    { id: 'eu', name: 'Europe', cx: 410, cy: 150, w: 120, h: 80 },
    { id: 'af', name: 'Africa', cx: 440, cy: 260, w: 130, h: 160 },
    { id: 'as', name: 'Asia', cx: 580, cy: 170, w: 220, h: 140 },
    { id: 'oc', name: 'Oceania', cx: 770, cy: 320, w: 120, h: 80 },
  ]

  const values = Object.values(data)
  const min = values.length ? Math.min(...values) : 0
  const max = values.length ? Math.max(...values) : 100

  function lerp(a, b, t) { return a + (b - a) * t }
  // Mint to cyan gradient mapping
  function colorScale(v) {
    const t = (v - min) / (max - min || 1)
    const r = Math.round(lerp(16, 8, t))
    const g = Math.round(lerp(185, 145, t))
    const b = Math.round(lerp(129, 255, t))
    return `rgb(${r}, ${g}, ${b})`
  }

  return (
    <svg viewBox="0 0 960 480" className="w-full h-[480px] rounded-2xl bg-slate-900/40 border border-white/10">
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="ocean" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0b1220"/>
          <stop offset="100%" stopColor="#0f172a"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="960" height="480" fill="url(#ocean)" />

      {/* Decorative lat/long lines */}
      <g opacity="0.2">
        {[...Array(10)].map((_, i) => (
          <line key={`v${i}`} x1={i*96} y1={0} x2={i*96} y2={480} stroke="#334155" strokeWidth="1" />
        ))}
        {[...Array(6)].map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i*80} x2={960} y2={i*80} stroke="#334155" strokeWidth="1" />
        ))}
      </g>

      <g>
        {regions.map(r => {
          const v = data[r.id] ?? min
          const fill = colorScale(v)
          return (
            <g key={r.id} onMouseEnter={() => onRegionHover && onRegionHover(r.id)}>
              <rect x={r.cx - r.w/2} y={r.cy - r.h/2} width={r.w} height={r.h} rx={18} fill={fill} opacity={0.95} className="transition-all duration-300 hover:opacity-100 hover:scale-[1.02] origin-center" filter="url(#glow)" />
              <text x={r.cx} y={r.cy} textAnchor="middle" className="fill-white" style={{ fontSize: 12, fontWeight: 600 }}>{r.name}</text>
            </g>
          )
        })}
      </g>

      {/* Legend */}
      <g transform="translate(24, 24)">
        <rect x="0" y="0" width="200" height="54" rx="12" fill="#0b1220" opacity="0.8" stroke="#334155" />
        <text x="14" y="20" className="fill-white" style={{ fontSize: 12, fontWeight: 600 }}>Performance Index</text>
        <linearGradient id="legendGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={colorScale(min)} />
          <stop offset="100%" stopColor={colorScale(max)} />
        </linearGradient>
        <rect x="14" y="28" width="140" height="10" rx="5" fill="url(#legendGrad)" />
        <text x="14" y="48" className="fill-slate-300" style={{ fontSize: 10 }}>{min}</text>
        <text x="154" y="48" className="fill-slate-300" style={{ fontSize: 10 }} textAnchor="end">{max}</text>
      </g>
    </svg>
  )
}
