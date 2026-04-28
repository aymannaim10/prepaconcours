'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ShoppingBag, GitBranch, Target } from 'lucide-react'
import InlineMath from '../InlineMath'

// ─────────────────────────────────────────────────────────────
// UrnTreeDiagram: a SVG bag with colored balls + probability tree
// for 2 sequential draws, highlighting favorable outcomes.
// ─────────────────────────────────────────────────────────────

interface BallColor {
  color: string
  label: string
  count: number
}

type Favorable = 'same-color' | { type: 'second-is'; label: string }

function fmtFraction(num: number, den: number): string {
  // GCD reduction for cleaner display
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
  const g = gcd(num, den)
  return `${num / g}/${den / g}`
}

// SVG bag: takes a list of balls (color + count), positions them inside.
function Bag({ balls, total }: { balls: BallColor[]; total: number }) {
  // Generate ball positions in a clustered pattern
  const positions = useMemo(() => {
    const all: { cx: number; cy: number; r: number; color: string; label: string }[] = []
    const cols = Math.ceil(Math.sqrt(total))
    const rows = Math.ceil(total / cols)
    let i = 0
    for (const b of balls) {
      for (let n = 0; n < b.count; n++) {
        const col = i % cols
        const row = Math.floor(i / cols)
        const baseX = 100
        const baseY = 70
        const spacingX = 22
        const spacingY = 22
        // Center the grid horizontally
        const offsetX = (cols * spacingX) / 2
        const offsetY = (rows * spacingY) / 2
        // Add small jitter for organic look
        const jitterX = ((i * 37) % 7) - 3
        const jitterY = ((i * 53) % 7) - 3
        all.push({
          cx: baseX - offsetX + col * spacingX + spacingX / 2 + jitterX,
          cy: baseY - offsetY + row * spacingY + spacingY / 2 + jitterY,
          r: 9,
          color: b.color,
          label: b.label,
        })
        i++
      }
    }
    return all
  }, [balls, total])

  return (
    <svg viewBox="0 0 200 180" className="w-full h-auto" role="img" aria-label="Bag with balls">
      <defs>
        <linearGradient id="bag-fabric" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B2F1F" />
          <stop offset="50%" stopColor="#4D3B25" />
          <stop offset="100%" stopColor="#2A2014" />
        </linearGradient>
        <linearGradient id="bag-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A5C32" />
          <stop offset="100%" stopColor="#5A4424" />
        </linearGradient>
        <radialGradient id="ball-shine" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.15" />
        </radialGradient>
      </defs>

      {/* Bag body — drawn as a rounded sack shape */}
      <motion.path
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        d="M 50 50 Q 30 80, 35 130 Q 38 165, 100 168 Q 162 165, 165 130 Q 170 80, 150 50 Z"
        fill="url(#bag-fabric)"
        stroke="#1A1109"
        strokeWidth="1.5"
      />

      {/* Bag opening — folded rim */}
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        d="M 48 48 Q 100 38, 152 48 Q 145 60, 100 60 Q 55 60, 48 48 Z"
        fill="url(#bag-rim)"
        stroke="#1A1109"
        strokeWidth="1.2"
      />

      {/* Drawstring */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        d="M 70 50 Q 80 42, 100 44 Q 120 42, 130 50"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Balls */}
      {positions.map((p, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.04, type: 'spring', stiffness: 200 }}
        >
          <circle
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={p.color}
            stroke="rgba(0,0,0,0.4)"
            strokeWidth="1"
          />
          <circle cx={p.cx} cy={p.cy} r={p.r} fill="url(#ball-shine)" />
        </motion.g>
      ))}

      {/* Bag label */}
      <text
        x={100}
        y={155}
        textAnchor="middle"
        fill="#C9A84C"
        fontSize="9"
        fontWeight="bold"
        opacity={0.9}
        fontFamily="serif"
      >
        n = {total}
      </text>
    </svg>
  )
}

export default function UrnTreeDiagram({
  balls,
  withReplacement,
  favorable,
  title,
  description,
}: {
  balls: BallColor[]
  withReplacement: boolean
  favorable: Favorable
  title?: string
  description?: string
}) {
  const total = balls.reduce((s, b) => s + b.count, 0)

  // Build the tree leaves: for 2 draws, generate all (color1, color2) pairs
  const leaves = useMemo(() => {
    const out: {
      first: BallColor
      second: BallColor
      prob: number
      probLabel: string
      isFavorable: boolean
    }[] = []
    for (const a of balls) {
      for (const b of balls) {
        const p1 = a.count / total
        const p2 = withReplacement
          ? b.count / total
          : a === b
          ? Math.max(0, b.count - 1) / Math.max(1, total - 1)
          : b.count / Math.max(1, total - 1)
        const num1 = a.count
        const den1 = total
        const num2 = withReplacement ? b.count : a === b ? b.count - 1 : b.count
        const den2 = withReplacement ? total : total - 1
        const prob = p1 * p2
        const probLabel = `${fmtFraction(num1, den1)} × ${fmtFraction(num2, den2)}`
        const isFavorable =
          favorable === 'same-color'
            ? a.label === b.label
            : favorable.type === 'second-is'
            ? b.label === favorable.label
            : false
        out.push({ first: a, second: b, prob, probLabel, isFavorable })
      }
    }
    return out
  }, [balls, withReplacement, favorable, total])

  const favorableSum = leaves.filter((l) => l.isFavorable).reduce((s, l) => s + l.prob, 0)
  const favorableLabel =
    favorable === 'same-color'
      ? 'P(same color)'
      : `P(2nd = ${favorable.label})`

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl border overflow-hidden"
      style={{ borderColor: 'rgba(201,168,76,0.25)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'linear-gradient(135deg, rgba(201,168,76,0.10), transparent 45%, rgba(76,232,124,0.08) 85%)',
        }}
      />

      <div className="relative bg-gradient-to-br from-[#0c0a08] via-[#0f0d09] to-[#0a0807]">
        {/* ── Header ── */}
        <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/30 flex items-center justify-center shrink-0">
              <ShoppingBag size={16} className="text-gold" />
            </div>
            <div className="min-w-0">
              <h4 className="text-foreground font-display font-bold text-sm leading-tight truncate">
                {title ?? 'Bag with balls — probability tree'}
              </h4>
              <p className="text-[0.7rem] text-muted leading-relaxed">
                {description ?? `2 draws ${withReplacement ? 'WITH' : 'WITHOUT'} replacement. Favorable outcomes are highlighted in green.`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/25">
            <Sparkles size={11} className="text-gold" />
            <span className="text-[0.68rem] text-gold font-bold tracking-wider uppercase">
              {withReplacement ? 'With replacement' : 'Without replacement'}
            </span>
          </div>
        </div>

        {/* ── Top: Bag illustration + ball legend ── */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-5 px-5 py-5 border-b border-white/[0.04]">
          <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3">
            <Bag balls={balls} total={total} />
          </div>

          <div className="flex flex-col justify-center gap-2">
            <div className="text-[0.65rem] font-bold uppercase tracking-widest text-muted mb-1">
              Composition
            </div>
            <div className="flex flex-col gap-2">
              {balls.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg border bg-surface/40"
                  style={{ borderColor: `${b.color}40` }}
                >
                  <span
                    className="w-5 h-5 rounded-full shrink-0"
                    style={{
                      background: b.color,
                      boxShadow: `0 0 8px ${b.color}88, inset 0 1px 2px rgba(255,255,255,0.3)`,
                      border: '1px solid rgba(0,0,0,0.3)',
                    }}
                  />
                  <span className="font-bold text-sm" style={{ color: b.color }}>
                    {b.label}
                  </span>
                  <span className="ml-auto font-mono text-xs text-muted">
                    {b.count} / {total} = {fmtFraction(b.count, total)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tree of outcomes ── */}
        <div className="px-5 py-5 border-b border-white/[0.04]">
          <div className="flex items-center gap-2 mb-4">
            <GitBranch size={14} className="text-gold" />
            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-gold">
              Tree of all possible outcomes
            </span>
          </div>

          <div className="space-y-1.5">
            {/* Group leaves by first draw */}
            {balls.map((firstBall, i) => {
              const groupLeaves = leaves.filter((l) => l.first.label === firstBall.label)
              const p1 = firstBall.count / total
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="grid grid-cols-[110px_1fr] gap-3 items-stretch"
                >
                  {/* First draw column */}
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border"
                    style={{ background: `${firstBall.color}10`, borderColor: `${firstBall.color}40` }}
                  >
                    <span
                      className="w-4 h-4 rounded-full shrink-0"
                      style={{ background: firstBall.color, border: '1px solid rgba(0,0,0,0.3)' }}
                    />
                    <div className="min-w-0">
                      <div className="text-[0.7rem] font-bold" style={{ color: firstBall.color }}>
                        1st: {firstBall.label}
                      </div>
                      <div className="text-[0.62rem] text-muted font-mono">
                        {fmtFraction(firstBall.count, total)}
                      </div>
                    </div>
                  </div>

                  {/* Branches column */}
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {groupLeaves.map((leaf, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.55 + i * 0.1 + j * 0.05 }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-[0.7rem] font-mono"
                        style={{
                          background: leaf.isFavorable
                            ? 'rgba(76,232,124,0.15)'
                            : 'rgba(255,255,255,0.03)',
                          borderColor: leaf.isFavorable
                            ? 'rgba(76,232,124,0.50)'
                            : 'rgba(255,255,255,0.10)',
                          boxShadow: leaf.isFavorable ? '0 0 12px rgba(76,232,124,0.20)' : 'none',
                        }}
                      >
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{
                            background: leaf.first.color,
                            border: '1px solid rgba(0,0,0,0.3)',
                          }}
                        />
                        <span className="text-muted">+</span>
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{
                            background: leaf.second.color,
                            border: '1px solid rgba(0,0,0,0.3)',
                          }}
                        />
                        <span
                          className="ml-1 font-bold"
                          style={{ color: leaf.isFavorable ? '#4CE87C' : 'rgba(255,255,255,0.55)' }}
                        >
                          {leaf.probLabel}
                        </span>
                        {leaf.isFavorable ? (
                          <span className="ml-1 text-green-accent text-[0.6rem]">★</span>
                        ) : null}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex items-center gap-3 text-[0.66rem] text-muted">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-accent" />
              Favorable outcomes
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/30" />
              Other outcomes
            </span>
          </div>
        </div>

        {/* ── Conclusion ── */}
        <div className="px-5 py-5 bg-gradient-to-br from-green-accent/8 to-transparent">
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-lg bg-green-accent/15 border border-green-accent/40 flex items-center justify-center shrink-0"
            >
              <Target size={16} className="text-green-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[0.65rem] font-bold uppercase tracking-widest text-green-accent mb-1.5">
                Sum of favorable outcomes
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-mono font-bold text-green-accent">{favorableLabel}</span>{' '}
                = sum of the highlighted branches ={' '}
                <span className="font-mono font-bold text-green-accent">
                  {favorableSum.toFixed(4)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
