'use client'

import { useMemo } from 'react'
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
  Label,
} from 'recharts'
import { motion } from 'framer-motion'
import { BarChart3, Sparkles, Target, CheckCircle2 } from 'lucide-react'
import InlineMath from '../InlineMath'

// ─────────────────────────────────────────────────────────────
// Generic binomial PMF visualization for X ~ B(n, p).
// Highlights P(X=k) bar in green; others in muted gold.
// ─────────────────────────────────────────────────────────────

function binomialCoefficient(n: number, k: number): number {
  if (k < 0 || k > n) return 0
  let result = 1
  for (let i = 0; i < k; i++) result = (result * (n - i)) / (i + 1)
  return result
}

function pmf(n: number, p: number, k: number): number {
  return binomialCoefficient(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k)
}

export default function BinomialPmfChart({
  n,
  p,
  k,
  title,
  description,
}: {
  n: number
  p: number
  k: number
  title?: string
  description?: string
}) {
  const data = useMemo(() => {
    return Array.from({ length: n + 1 }, (_, i) => ({
      k: i,
      P: pmf(n, p, i),
      isAsked: i === k,
    }))
  }, [n, p, k])

  const askedP = pmf(n, p, k)
  const expected = n * p
  const variance = n * p * (1 - p)
  const sigma = Math.sqrt(variance)

  // Format p as a clean fraction or decimal
  const pFormatted = (() => {
    if (Math.abs(p - 0.5) < 1e-9) return '\\tfrac{1}{2}'
    if (Math.abs(p - 1 / 3) < 1e-9) return '\\tfrac{1}{3}'
    if (Math.abs(p - 2 / 3) < 1e-9) return '\\tfrac{2}{3}'
    if (Math.abs(p - 1 / 6) < 1e-9) return '\\tfrac{1}{6}'
    if (Math.abs(p - 5 / 6) < 1e-9) return '\\tfrac{5}{6}'
    if (Math.abs(p - 1 / 4) < 1e-9) return '\\tfrac{1}{4}'
    if (Math.abs(p - 3 / 4) < 1e-9) return '\\tfrac{3}{4}'
    return p.toFixed(3)
  })()

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl border border-purple-accent/20 overflow-hidden"
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
                borderColor: 'rgba(144,102,238,0.3)',
              }}
            >
              <BarChart3 size={16} style={{ color: '#9066EE' }} />
            </div>
            <div className="min-w-0">
              <h4 className="text-foreground font-display font-bold text-sm leading-tight truncate">
                {title ?? `Binomial distribution X ~ B(${n}, ${pFormatted.replace(/\\\\tfrac/g, '').replace(/\{|\}/g, '')})`}
              </h4>
              <p className="text-[0.7rem] text-muted leading-relaxed">
                {description ?? `The probability of exactly ${k} successes is highlighted in green.`}
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
            style={{ background: 'rgba(144,102,238,0.10)', borderColor: 'rgba(144,102,238,0.25)' }}
          >
            <Sparkles size={11} style={{ color: '#9066EE' }} />
            <span className="text-[0.68rem] font-bold tracking-wider uppercase" style={{ color: '#9066EE' }}>
              n = {n}
            </span>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="flex items-center flex-wrap gap-4 px-5 py-3 bg-white/[0.02] border-b border-white/[0.04] text-[0.72rem]">
          <span className="text-muted">
            <span className="font-bold mr-1" style={{ color: '#9066EE' }}>p =</span>
            <span className="text-foreground">
              <InlineMath text={`$${pFormatted}$`} />
            </span>
          </span>
          <span className="text-muted">
            <span className="font-bold mr-1" style={{ color: '#9066EE' }}>E[X] =</span>
            <span className="font-mono text-foreground">{expected.toFixed(3)}</span>
          </span>
          <span className="text-muted">
            <span className="font-bold mr-1" style={{ color: '#9066EE' }}>σ =</span>
            <span className="font-mono text-foreground">{sigma.toFixed(3)}</span>
          </span>
          <div className="ml-auto flex items-center gap-2 px-3 py-1 rounded-full border bg-green-accent/10 border-green-accent/35 text-green-accent">
            <CheckCircle2 size={11} />
            <span className="font-bold text-[0.7rem] tracking-wide">
              P(X = {k}) = {askedP.toFixed(4)}
            </span>
          </div>
        </div>

        {/* ── Chart ── */}
        <div className="px-2 md:px-4 py-4" style={{ height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 20, bottom: 32, left: 12 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" vertical={false} />

              <XAxis
                dataKey="k"
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
              >
                <Label value="k (number of successes)" offset={-12} position="insideBottom" fill="#9066EE" fontSize={11} />
              </XAxis>
              <YAxis
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                tickFormatter={(v) => Number(v).toFixed(2)}
              >
                <Label value="P(X = k)" angle={-90} offset={-2} position="insideLeft" fill="#9066EE" fontSize={11} />
              </YAxis>

              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload || payload.length === 0) return null
                  const row = payload[0].payload as { k: number; P: number; isAsked: boolean }
                  return (
                    <div className="rounded-lg border border-white/10 bg-[#0d0c0a]/95 backdrop-blur px-3 py-2 shadow-xl">
                      <div className="text-[0.7rem] font-bold tracking-widest uppercase mb-1" style={{ color: row.isAsked ? '#4CE87C' : '#9066EE' }}>
                        k = {row.k}
                      </div>
                      <div className="text-xs">
                        <span className="text-muted mr-1">P(X = {row.k}) =</span>
                        <span className="font-mono text-foreground">{row.P.toFixed(4)}</span>
                      </div>
                      {row.isAsked ? (
                        <div className="mt-1 text-[0.66rem] text-green-accent font-bold">★ Asked value</div>
                      ) : null}
                    </div>
                  )
                }}
                cursor={{ fill: 'rgba(255,255,255,0.04)' }}
              />

              <Bar dataKey="P" radius={[6, 6, 0, 0]} isAnimationActive animationDuration={900}>
                {data.map((d, idx) => (
                  <Cell
                    key={`cell-${idx}`}
                    fill={d.isAsked ? '#4CE87C' : '#9066EE'}
                    fillOpacity={d.isAsked ? 0.85 : 0.45}
                    stroke={d.isAsked ? '#4CE87C' : 'transparent'}
                    strokeWidth={d.isAsked ? 1.5 : 0}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ── Takeaways ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-5 py-5 border-t border-white/[0.04] bg-white/[0.015]">
          <Takeaway
            icon={<Target size={14} />}
            color="#9066EE"
            title="Formula"
            body={`$P(X = k) = \\binom{n}{k}\\,p^{k}\\,(1-p)^{n-k}$ with $n = ${n}$, $p = ${pFormatted}$, $k = ${k}$.`}
          />
          <Takeaway
            icon={<CheckCircle2 size={14} />}
            color="#4CE87C"
            title="Result"
            body={`The asked probability is $\\binom{${n}}{${k}}\\,${pFormatted}^{${k}}\\,(1-${pFormatted})^{${n - k}} = ${askedP.toFixed(4)}$.`}
          />
        </div>
      </div>
    </motion.div>
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
      className="relative rounded-xl p-4 border overflow-hidden"
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
