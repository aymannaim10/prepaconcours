'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Target, Layers3 } from 'lucide-react'
import InlineMath from '../InlineMath'

// ─────────────────────────────────────────────────────────────
// BinomialArrangements: visual layout of all C(n,k) arrangements
// for "exactly k successes in n trials". Each row is one arrangement
// shown as n cells (success/failure icons highlighted).
// ─────────────────────────────────────────────────────────────

function binomialCoefficient(n: number, k: number): number {
  if (k < 0 || k > n) return 0
  let result = 1
  for (let i = 0; i < k; i++) result = (result * (n - i)) / (i + 1)
  return result
}

// Generate all C(n,k) subsets of [0..n-1] as sorted index arrays
function generateArrangements(n: number, k: number): number[][] {
  const result: number[][] = []
  const recurse = (start: number, picked: number[]) => {
    if (picked.length === k) {
      result.push([...picked])
      return
    }
    for (let i = start; i < n; i++) {
      picked.push(i)
      recurse(i + 1, picked)
      picked.pop()
    }
  }
  recurse(0, [])
  return result
}

export default function BinomialArrangements({
  n,
  p,
  k,
  successLabel,
  failureLabel,
  successIcon = '✓',
  failureIcon = '✗',
  title,
  description,
}: {
  n: number
  p: number
  k: number
  successLabel: string
  failureLabel: string
  successIcon?: string
  failureIcon?: string
  title?: string
  description?: string
}) {
  const arrangements = useMemo(() => generateArrangements(n, k), [n, k])
  const numArrangements = binomialCoefficient(n, k)
  const singleProb = Math.pow(p, k) * Math.pow(1 - p, n - k)
  const totalProb = numArrangements * singleProb

  // Format p as fraction
  const pFormatted = (() => {
    if (Math.abs(p - 0.5) < 1e-9) return '\\tfrac{1}{2}'
    if (Math.abs(p - 1 / 3) < 1e-9) return '\\tfrac{1}{3}'
    if (Math.abs(p - 2 / 3) < 1e-9) return '\\tfrac{2}{3}'
    if (Math.abs(p - 1 / 6) < 1e-9) return '\\tfrac{1}{6}'
    if (Math.abs(p - 5 / 6) < 1e-9) return '\\tfrac{5}{6}'
    return p.toFixed(3)
  })()
  const qFormatted = (() => {
    const q = 1 - p
    if (Math.abs(q - 0.5) < 1e-9) return '\\tfrac{1}{2}'
    if (Math.abs(q - 1 / 3) < 1e-9) return '\\tfrac{1}{3}'
    if (Math.abs(q - 2 / 3) < 1e-9) return '\\tfrac{2}{3}'
    if (Math.abs(q - 1 / 6) < 1e-9) return '\\tfrac{1}{6}'
    if (Math.abs(q - 5 / 6) < 1e-9) return '\\tfrac{5}{6}'
    return q.toFixed(3)
  })()

  // Cap visible arrangements (e.g., at 10 for very large C(n,k))
  const MAX_VISIBLE = 12
  const visibleArrangements = arrangements.slice(0, MAX_VISIBLE)
  const hiddenCount = arrangements.length - visibleArrangements.length

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl border overflow-hidden"
      style={{ borderColor: 'rgba(144,102,238,0.25)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'linear-gradient(135deg, rgba(144,102,238,0.10), transparent 45%, rgba(76,232,124,0.06) 85%)',
        }}
      />

      <div className="relative bg-gradient-to-br from-[#0c0a08] via-[#0f0d09] to-[#0a0807]">
        {/* ── Header ── */}
        <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-9 h-9 rounded-lg border flex items-center justify-center shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(144,102,238,0.25), rgba(144,102,238,0.05))',
                borderColor: 'rgba(144,102,238,0.30)',
              }}
            >
              <Layers3 size={16} style={{ color: '#9066EE' }} />
            </div>
            <div className="min-w-0">
              <h4 className="text-foreground font-display font-bold text-sm leading-tight truncate">
                {title ?? `Binomial: exactly ${k} ${successLabel.toLowerCase()} in ${n} trials`}
              </h4>
              <p className="text-[0.7rem] text-muted leading-relaxed">
                {description ??
                  `${arrangements.length} possible arrangements, each with the same probability.`}
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
            style={{ background: 'rgba(144,102,238,0.10)', borderColor: 'rgba(144,102,238,0.25)' }}
          >
            <Sparkles size={11} style={{ color: '#9066EE' }} />
            <span className="text-[0.68rem] font-bold tracking-wider uppercase" style={{ color: '#9066EE' }}>
              C({n},{k}) = {numArrangements}
            </span>
          </div>
        </div>

        {/* ── Trial labels ── */}
        <div className="px-5 py-3 bg-white/[0.02] border-b border-white/[0.04] flex items-center gap-4 flex-wrap text-[0.72rem]">
          <span className="inline-flex items-center gap-2">
            <span
              className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
              style={{ background: '#4CE87C30', border: '1.5px solid #4CE87C', color: '#4CE87C' }}
            >
              {successIcon}
            </span>
            <span className="font-bold text-green-accent">{successLabel}</span>
            <span className="text-muted ml-1">
              p =&nbsp;<InlineMath text={`$${pFormatted}$`} />
            </span>
          </span>
          <span className="inline-flex items-center gap-2 ml-2">
            <span
              className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.20)', color: 'rgba(255,255,255,0.55)' }}
            >
              {failureIcon}
            </span>
            <span className="font-bold text-muted">{failureLabel}</span>
            <span className="text-muted ml-1">
              q =&nbsp;<InlineMath text={`$${qFormatted}$`} />
            </span>
          </span>
        </div>

        {/* ── Arrangements grid ── */}
        <div className="px-5 py-5 border-b border-white/[0.04]">
          <div className="text-[0.65rem] font-bold uppercase tracking-widest text-muted mb-3">
            All {numArrangements} arrangements with exactly {k} {successLabel.toLowerCase()}
            {hiddenCount > 0 ? ` (showing first ${MAX_VISIBLE})` : ''}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {visibleArrangements.map((arr, i) => {
              const successSet = new Set(arr)
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-surface/40"
                  style={{ borderColor: 'rgba(144,102,238,0.20)' }}
                >
                  <span className="text-[0.62rem] text-muted font-mono w-5 shrink-0">
                    #{i + 1}
                  </span>
                  <div className="flex gap-1 flex-1 justify-center">
                    {Array.from({ length: n }, (_, j) => {
                      const isSuccess = successSet.has(j)
                      return (
                        <span
                          key={j}
                          className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
                          style={{
                            background: isSuccess ? '#4CE87C30' : 'rgba(255,255,255,0.04)',
                            border: isSuccess
                              ? '1.5px solid #4CE87C'
                              : '1.5px solid rgba(255,255,255,0.10)',
                            color: isSuccess ? '#4CE87C' : 'rgba(255,255,255,0.40)',
                            boxShadow: isSuccess ? '0 0 6px rgba(76,232,124,0.30)' : 'none',
                          }}
                        >
                          {isSuccess ? successIcon : failureIcon}
                        </span>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
            {hiddenCount > 0 ? (
              <div className="col-span-full text-center text-[0.7rem] text-muted italic py-1">
                + {hiddenCount} more arrangements (same probability)
              </div>
            ) : null}
          </div>
        </div>

        {/* ── Calculation breakdown ── */}
        <div className="px-5 py-5 bg-gradient-to-br from-purple-accent/8 via-transparent to-green-accent/8">
          <div className="text-[0.65rem] font-bold uppercase tracking-widest text-purple-accent mb-3" style={{ color: '#9066EE' }}>
            Probability calculation
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <CalcCard
              label="Number of arrangements"
              value={`C(${n}, ${k}) = ${numArrangements}`}
              math={`$\\binom{${n}}{${k}} = ${numArrangements}$`}
              color="#9066EE"
            />
            <CalcCard
              label="Probability per arrangement"
              value={`${pFormatted.replace(/\\\\?tfrac/g, '').replace(/[\{\}]/g, '')}^${k} × ${qFormatted.replace(/\\\\?tfrac/g, '').replace(/[\{\}]/g, '')}^${n - k}`}
              math={`$${pFormatted}^{${k}}\\,${qFormatted}^{${n - k}} = ${singleProb.toFixed(5)}$`}
              color="#4CADE8"
            />
            <CalcCard
              label="Total probability"
              value={`${totalProb.toFixed(4)}`}
              math={`$P(X = ${k}) = ${numArrangements} \\cdot ${singleProb.toFixed(5)} = ${totalProb.toFixed(4)}$`}
              color="#4CE87C"
              highlight
            />
          </div>

          <div className="mt-4 px-4 py-3 rounded-lg border bg-surface/40 border-white/[0.06]">
            <p className="text-[0.78rem] leading-relaxed text-text-secondary">
              <span className="font-bold text-foreground">Why C({n},{k})?</span>{' '}
              Among the {n} trials, we choose which {k} of them are {successLabel.toLowerCase()}.
              That's exactly the binomial coefficient. Each arrangement has the same probability{' '}
              <span className="font-mono">
                <InlineMath text={`$${pFormatted}^{${k}}\\,${qFormatted}^{${n - k}}$`} />
              </span>{' '}
              by independence, so the total is{' '}
              <span className="font-mono font-bold text-green-accent">
                <InlineMath text={`$\\binom{${n}}{${k}}\\,${pFormatted}^{${k}}\\,${qFormatted}^{${n - k}}$`} />
              </span>.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CalcCard({
  label,
  value,
  math,
  color,
  highlight = false,
}: {
  label: string
  value: string
  math: string
  color: string
  highlight?: boolean
}) {
  return (
    <div
      className="relative rounded-xl p-3 border overflow-hidden"
      style={{
        background: highlight
          ? `linear-gradient(160deg, ${color}25, ${color}08)`
          : `linear-gradient(160deg, ${color}12, ${color}03)`,
        borderColor: `${color}${highlight ? '55' : '30'}`,
        boxShadow: highlight ? `0 0 20px ${color}25` : 'none',
      }}
    >
      <div
        className="text-[0.62rem] font-extrabold tracking-[0.14em] uppercase mb-1.5"
        style={{ color }}
      >
        {label}
      </div>
      <div className="font-mono text-sm font-bold text-foreground mb-1">{value}</div>
      <div className="text-[0.7rem] text-muted">
        <InlineMath text={math} />
      </div>
    </div>
  )
}
