import React, { useMemo } from 'react'

export function Sparkline({ points = [], color = '#34d399', height = 48 }) {
  const width = 160
  const max = Math.max(...points, 1)
  const min = Math.min(...points, 0)
  const norm = p => ((p - min) / (max - min || 1)) * (height - 8) + 4
  const step = width / Math.max(points.length - 1, 1)
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${height - norm(p)}`).join(' ')
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
      <path d={d} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  )
}

export function BarMini({ data = [], color = '#60a5fa', height = 60 }) {
  const width = 220
  const max = Math.max(...data, 1)
  const barW = width / data.length - 4
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
      {data.map((v, i) => {
        const h = (v / max) * (height - 8)
        return <rect key={i} x={i * (barW + 4)} y={height - h} width={barW} height={h} rx={3} fill={color} />
      })}
    </svg>
  )
}

export default function Charts() { return null }
