'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Compass, Target } from 'lucide-react'
import InlineMath from '../InlineMath'

// ─────────────────────────────────────────────────────────────
// Plot of the n-th roots of unity on the unit circle.
// Highlights specific roots if requested.
// ─────────────────────────────────────────────────────────────

const W = 480
const H = 480
const CX = W / 2
const CY = H / 2
const R = 170 // pixel radius of the unit circle

export default function RootsOfUnityPlot({
  n,
  highlight = [],
  highlightLabels = [],
  title,
  description,
}: {
  n: number
  highlight?: number[]
  highlightLabels?: string[]
  title?: string
  description?: string
}) {
  const roots = useMemo(() => {
    const out: { idx: number; angle: number; x: number; y: number; label: string }[] = []
    for (let k = 0; k < n; k++) {
      const angle = (2 * Math.PI * k) / n
      const x = CX + R * Math.cos(angle)
      const y = CY - R * Math.sin(angle) // flip y for SVG
      // Format angle as 2kπ/n
      let label = ''
      if (k === 0) label = '1'
      else if (n === 2) label = '-1'
      else if (n === 4) {
        if (k === 1) label = 'i'
        else if (k === 2) label = '-1'
        else if (k === 3) label = '-i'
      } else if (n === 3) {
        if (k === 1) label = 'j'
        else label = 'j²'
      } else if (n === 6) {
        if (k === 1) label = 'e^{iπ/3}'
        else if (k === 2) label = 'e^{i2π/3}'
        else if (k === 3) label = '-1'
        else if (k === 4) label = 'e^{-i2π/3}'
        else label = 'e^{-iπ/3}'
      } else {
        label = `e^{i${2 * k}π/${n}}`
      }
      out.push({ idx: k, angle, x, y, label })
    }
    return out
  }, [n])

  const highlightSet = useMemo(() => new Set(highlight), [highlight])
  const sumX = roots.reduce((s, r) => s + Math.cos(r.angle), 0)
  const sumY = roots.reduce((s, r) => s + Math.sin(r.angle), 0)
  const sumNonZero = Math.abs(sumX) > 1e-9 || Math.abs(sumY) > 1e-9

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl border overflow-hidden"
      style={{ borderColor: 'rgba(76,173,232,0.25)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'linear-gradient(135deg, rgba(76,173,232,0.10), transparent 45%, rgba(201,168,76,0.06) 85%)',
        }}
      />

      <div className="relative bg-gradient-to-br from-[#0c0a08] via-[#0f0d09] to-[#0a0807]">
        {/* ── Header ── */}
        <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-accent/25 to-blue-accent/5 border border-blue-accent/30 flex items-center justify-center shrink-0">
              <Compass size={16} className="text-blue-accent" />
            </div>
            <div className="min-w-0">
              <h4 className="text-foreground font-display font-bold text-sm leading-tight truncate">
                {title ?? `${n} ${n === 2 ? 'square' : n === 3 ? 'cube' : `${n}-th`} roots of unity`}
              </h4>
              <p className="text-[0.7rem] text-muted leading-relaxed">
                {description ??
                  `The ${n} solutions of $z^{${n}} = 1$ are evenly distributed on the unit circle, separated by $2\\pi/${n}$.`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/25">
            <Sparkles size={11} className="text-blue-accent" />
            <span className="text-[0.68rem] text-blue-accent font-bold tracking-wider uppercase">
              n = {n}
            </span>
          </div>
        </div>

        {/* ── Diagram ── */}
        <div className="px-2 md:px-4 py-4 flex justify-center">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md h-auto" role="img" aria-label="Roots of unity">
            <defs>
              <radialGradient id="circle-bg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(76,173,232,0.06)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="root-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background circle */}
            <circle cx={CX} cy={CY} r={R} fill="url(#circle-bg)" />

            {/* Grid */}
            {[0.5, 1].map((rr, i) => (
              <circle
                key={i}
                cx={CX}
                cy={CY}
                r={rr * R}
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeDasharray="2 4"
              />
            ))}

            {/* Axes */}
            <line x1={20} y1={CY} x2={W - 20} y2={CY} stroke="rgba(255,255,255,0.25)" />
            <line x1={CX} y1={20} x2={CX} y2={H - 20} stroke="rgba(255,255,255,0.25)" />
            <text x={W - 16} y={CY - 6} textAnchor="end" fill="#C9A84C" fontSize="12" fontWeight="bold">x</text>
            <text x={CX + 8} y={28} fill="#C9A84C" fontSize="12" fontWeight="bold">y</text>

            {/* Unit circle */}
            <motion.circle
              cx={CX}
              cy={CY}
              r={R}
              fill="none"
              stroke="#4CADE8"
              strokeWidth={2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              style={{ filter: 'drop-shadow(0 0 6px rgba(76,173,232,0.45))' }}
            />
            <text x={CX + R + 8} y={CY - 8} fill="#6AC9E8" fontSize="11" fontStyle="italic">
              |z| = 1
            </text>

            {/* Polygon connecting roots (subtle) */}
            <motion.polygon
              points={roots.map((r) => `${r.x},${r.y}`).join(' ')}
              fill="rgba(76,173,232,0.04)"
              stroke="rgba(76,173,232,0.30)"
              strokeWidth={1}
              strokeDasharray="3 4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />

            {/* Roots */}
            {roots.map((root, i) => {
              const isHighlighted = highlightSet.has(root.idx)
              const color = isHighlighted ? '#4CE87C' : '#C9A84C'
              const customLabel = isHighlighted && highlightLabels[highlight.indexOf(root.idx)]
              return (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.08, type: 'spring', stiffness: 180 }}
                >
                  {/* Glow on highlighted */}
                  {isHighlighted && (
                    <circle cx={root.x} cy={root.y} r={16} fill="url(#root-glow)" />
                  )}
                  {/* Radius line */}
                  <line
                    x1={CX}
                    y1={CY}
                    x2={root.x}
                    y2={root.y}
                    stroke={color}
                    strokeOpacity={isHighlighted ? 0.6 : 0.25}
                    strokeWidth={isHighlighted ? 1.5 : 1}
                    strokeDasharray={isHighlighted ? '0' : '3 3'}
                  />
                  {/* Root point */}
                  <circle
                    cx={root.x}
                    cy={root.y}
                    r={isHighlighted ? 8 : 6}
                    fill={color}
                    stroke="#fff"
                    strokeWidth={1.5}
                    style={{
                      filter: isHighlighted
                        ? `drop-shadow(0 0 8px ${color})`
                        : `drop-shadow(0 0 4px ${color}60)`,
                    }}
                  />
                  {/* Index label */}
                  <text
                    x={CX + (root.x - CX) * 1.18}
                    y={CY + (root.y - CY) * 1.18}
                    textAnchor="middle"
                    fill={color}
                    fontSize={isHighlighted ? 14 : 12}
                    fontWeight="bold"
                    style={{
                      filter: isHighlighted
                        ? `drop-shadow(0 0 4px ${color})`
                        : 'none',
                    }}
                  >
                    {customLabel || `z_{${root.idx}}`}
                  </text>
                </motion.g>
              )
            })}

            {/* Origin */}
            <circle cx={CX} cy={CY} r={3} fill="#fff" />
            <text x={CX + 6} y={CY + 14} fill="rgba(255,255,255,0.6)" fontSize="10">O</text>
          </svg>
        </div>

        {/* ── Stats / sum ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-5 py-4 border-t border-white/[0.04] bg-white/[0.015]">
          <StatCard
            label="Total roots"
            value={`${n}`}
            color="#4CADE8"
          />
          <StatCard
            label="Angular spacing"
            value={`2π / ${n}`}
            color="#C9A84C"
          />
          <StatCard
            label={`Sum of ${n} roots`}
            value={sumNonZero ? `≈ ${Math.round(sumX * 100) / 100} + ${Math.round(sumY * 100) / 100}i` : '0'}
            color="#4CE87C"
            highlight={!sumNonZero}
          />
        </div>

        {/* ── Takeaway ── */}
        <div className="px-5 pb-5 pt-1 border-t border-white/[0.04]">
          <Takeaway
            icon={<Target size={14} />}
            color="#4CE87C"
            title="Key property"
            body={`The ${n} ${n === 2 ? 'square' : n === 3 ? 'cube' : `${n}-th`} roots of unity sum to ZERO: $\\sum_{k=0}^{${n - 1}} e^{i\\,2k\\pi/${n}} = 0$. Geometrically, they form a regular ${n}-gon centered at the origin — its centroid is at $0$.`}
          />
        </div>
      </div>
    </motion.div>
  )
}

function StatCard({
  label,
  value,
  color,
  highlight = false,
}: {
  label: string
  value: string
  color: string
  highlight?: boolean
}) {
  return (
    <div
      className="relative rounded-xl p-3 border overflow-hidden"
      style={{
        background: highlight
          ? `linear-gradient(160deg, ${color}25, ${color}08)`
          : `linear-gradient(160deg, ${color}10, ${color}03)`,
        borderColor: `${color}${highlight ? '55' : '30'}`,
        boxShadow: highlight ? `0 0 16px ${color}25` : 'none',
      }}
    >
      <div
        className="text-[0.62rem] font-extrabold tracking-[0.14em] uppercase mb-1"
        style={{ color }}
      >
        {label}
      </div>
      <div className="font-mono text-base font-bold text-foreground">{value}</div>
    </div>
  )
}

function Takeaway({
  icon,
  color,
  title,
  body,
}: {
  icon: React.ReactNode
  color: string
  title: string
  body: string
}) {
  return (
    <div
      className="relative rounded-xl p-4 border overflow-hidden mt-3"
      style={{
        background: `linear-gradient(160deg, ${color}14, ${color}04 70%)`,
        borderColor: `${color}33`,
      }}
    >
      <div
        aria-hidden
        className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-40 pointer-events-none"
        style={{ background: color }}
      />
      <div className="relative flex items-center gap-2 mb-2">
        <span
          className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
          style={{ background: `${color}22`, color }}
        >
          {icon}
        </span>
        <span
          className="text-[0.68rem] font-extrabold tracking-[0.14em] uppercase leading-tight"
          style={{ color }}
        >
          {title}
        </span>
      </div>
      <p
        className="relative text-[0.82rem] leading-[1.6] text-text-secondary"
        style={{ textWrap: 'pretty', wordSpacing: '0.01em', hyphens: 'auto' }}
      >
        <InlineMath text={body} />
      </p>
    </div>
  )
}
