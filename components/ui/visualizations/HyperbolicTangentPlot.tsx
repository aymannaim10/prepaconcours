'use client'

import { useMemo, useState } from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  Label,
} from 'recharts'
import { motion } from 'framer-motion'
import { Activity, Sparkles, ArrowDownToLine, ArrowUpToLine, Ban } from 'lucide-react'
import InlineMath from '../InlineMath'

// ─────────────────────────────────────────────────────────────
// Plot of h(x) = (e^x - 1) / (e^x + 1) on a wide x range,
// emphasizing the horizontal asymptotes y = ±1 and the fact
// that they are NEVER attained — hence the OPEN interval.
// (Tailored to 2022 Q10.)
// ─────────────────────────────────────────────────────────────

function h(x: number): number {
  if (x > 700) return 1 // avoid Infinity issues
  if (x < -700) return -1
  const e = Math.exp(x)
  return (e - 1) / (e + 1)
}

export default function HyperbolicTangentPlot({
  title = 'h(x) = (eˣ − 1) / (eˣ + 1) — bounded between −1 and 1',
  description,
}: {
  title?: string
  description?: string
}) {
  const [xMax, setXMax] = useState<number>(6)
  const [showAsymptotes, setShowAsymptotes] = useState<boolean>(true)
  const [showSampleValues, setShowSampleValues] = useState<boolean>(true)

  const data = useMemo(() => {
    const points: { x: number; y: number }[] = []
    const N = 300
    for (let i = 0; i <= N; i++) {
      const x = -xMax + (i / N) * (2 * xMax)
      points.push({ x, y: h(x) })
    }
    return points
  }, [xMax])

  // Sample values to illustrate the approach to ±1
  const samples = useMemo(
    () => [
      { x: -5, label: 'x = −5' },
      { x: -3, label: 'x = −3' },
      { x: 0, label: 'x = 0' },
      { x: 3, label: 'x = 3' },
      { x: 5, label: 'x = 5' },
    ],
    [],
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl border border-blue-accent/20 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'linear-gradient(135deg, rgba(76,173,232,0.10), transparent 45%, rgba(232,76,76,0.06) 85%)',
        }}
      />

      <div className="relative bg-gradient-to-br from-[#0c0a08] via-[#0f0d09] to-[#0a0807]">
        {/* ── Header ── */}
        <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-accent/25 to-blue-accent/5 border border-blue-accent/30 flex items-center justify-center shrink-0">
              <Activity size={16} className="text-blue-accent" />
            </div>
            <div className="min-w-0">
              <h4 className="text-foreground font-display font-bold text-sm leading-tight truncate">
                {title}
              </h4>
              <p className="text-[0.7rem] text-muted leading-relaxed">
                {description ??
                  'The curve approaches y = ±1 but NEVER touches them — the bounds are open.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/25">
            <Sparkles size={11} className="text-blue-accent" />
            <span className="text-[0.68rem] text-blue-accent font-bold tracking-wider uppercase">
              2022 · Q10
            </span>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center flex-wrap gap-3 px-5 py-3 bg-white/[0.02] border-b border-white/[0.04]">
          <ToggleButton
            label="Asymptotes y = ±1"
            active={showAsymptotes}
            color="#E84C4C"
            onClick={() => setShowAsymptotes((v) => !v)}
          />
          <ToggleButton
            label="Sample values"
            active={showSampleValues}
            color="#9066EE"
            onClick={() => setShowSampleValues((v) => !v)}
          />

          <div className="flex items-center gap-2 ml-auto">
            <label className="text-[0.7rem] text-muted uppercase tracking-wider">Zoom x:</label>
            <input
              type="range"
              min={3}
              max={10}
              step={0.5}
              value={xMax}
              onChange={(e) => setXMax(Number(e.target.value))}
              className="w-28 md:w-36 accent-gold cursor-pointer"
              aria-label="x range"
            />
            <span className="text-xs text-gold font-mono w-10 text-right">±{xMax.toFixed(1)}</span>
          </div>
        </div>

        {/* ── Chart ── */}
        <div className="px-2 md:px-4 py-4" style={{ height: 380 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 18, bottom: 28, left: 8 }}>
              <defs>
                <linearGradient id="grad-h" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6AC9E8" />
                  <stop offset="100%" stopColor="#2D8FBE" />
                </linearGradient>
                {/* hatched / forbidden zone gradient */}
                <pattern
                  id="forbidden-zone"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(232,76,76,0.30)" strokeWidth="2" />
                </pattern>
              </defs>

              <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

              <XAxis
                type="number"
                dataKey="x"
                domain={[-xMax, xMax]}
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                tickFormatter={(v) => Number(v).toFixed(0)}
              >
                <Label value="x" offset={-10} position="insideBottom" fill="#C9A84C" />
              </XAxis>
              <YAxis
                domain={[-1.6, 1.6]}
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                tickFormatter={(v) => Number(v).toFixed(1)}
              >
                <Label value="y" offset={10} position="insideTopLeft" fill="#C9A84C" />
              </YAxis>

              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload || payload.length === 0) return null
                  const x = Number(label)
                  return (
                    <div className="rounded-lg border border-white/10 bg-[#0d0c0a]/95 backdrop-blur px-3 py-2 shadow-xl">
                      <div className="text-[0.7rem] text-blue-accent font-bold tracking-widest uppercase mb-1">
                        x = {x.toFixed(2)}
                      </div>
                      <div className="text-xs">
                        <span className="text-muted mr-1">h(x) =</span>
                        <span className="font-mono text-foreground">{h(x).toFixed(5)}</span>
                      </div>
                      <div className="text-[0.62rem] text-muted mt-1">
                        Distance to 1: {(1 - h(x)).toFixed(5)}
                      </div>
                    </div>
                  )
                }}
                cursor={{ stroke: '#C9A84C', strokeWidth: 1, strokeDasharray: '2 2' }}
              />

              <ReferenceLine y={0} stroke="rgba(255,255,255,0.20)" />

              {/* Forbidden zones — y > 1 and y < -1 */}
              {showAsymptotes ? (
                <>
                  <ReferenceLine
                    y={1}
                    stroke="#E84C4C"
                    strokeDasharray="5 4"
                    strokeWidth={1.8}
                    strokeOpacity={0.85}
                    label={{
                      value: 'y = 1  (NEVER reached)',
                      position: 'insideTopRight',
                      fill: '#FF8888',
                      fontSize: 11,
                      fontWeight: 'bold',
                    }}
                  />
                  <ReferenceLine
                    y={-1}
                    stroke="#E84C4C"
                    strokeDasharray="5 4"
                    strokeWidth={1.8}
                    strokeOpacity={0.85}
                    label={{
                      value: 'y = −1  (NEVER reached)',
                      position: 'insideBottomRight',
                      fill: '#FF8888',
                      fontSize: 11,
                      fontWeight: 'bold',
                    }}
                  />
                </>
              ) : null}

              <Line
                type="monotone"
                dataKey="y"
                name="h(x)"
                stroke="url(#grad-h)"
                strokeWidth={2.6}
                dot={false}
                isAnimationActive
                animationDuration={900}
              />

              {/* Origin */}
              <ReferenceDot
                x={0}
                y={0}
                r={5}
                fill="#C9A84C"
                stroke="#fff"
                strokeWidth={1.5}
                ifOverflow="visible"
                label={{ value: '(0, 0)', position: 'top', fill: '#E5C76B', fontSize: 11 }}
              />

              {/* Sample values illustrating the approach to ±1 */}
              {showSampleValues
                ? samples
                    .filter((s) => Math.abs(s.x) <= xMax)
                    .map((s, i) => (
                      <ReferenceDot
                        key={i}
                        x={s.x}
                        y={h(s.x)}
                        r={4}
                        fill="#9066EE"
                        stroke="#fff"
                        strokeWidth={1.2}
                        ifOverflow="visible"
                      />
                    ))
                : null}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ── Why open interval explanation ── */}
        <div className="px-5 py-5 border-t border-white/[0.04] space-y-4">
          <div className="flex items-center gap-2">
            <Ban size={16} className="text-danger" style={{ color: '#E84C4C' }} />
            <h5 className="text-[0.78rem] font-bold uppercase tracking-widest text-foreground">
              Why isn't the interval [−1 ; 1] (closed)?
            </h5>
          </div>

          <div className="rounded-xl border bg-surface/40 p-4" style={{ borderColor: 'rgba(232,76,76,0.30)' }}>
            <p className="text-[0.85rem] leading-relaxed text-text-secondary">
              <InlineMath
                text={`The values $y = -1$ and $y = +1$ are LIMITS of $h(x)$ as $x \\to \\pm\\infty$, but no real number $x$ actually produces them. Solving $h(x) = 1$ would require $e^{x} - 1 = e^{x} + 1$, i.e. $-1 = +1$ — impossible. Same for $h(x) = -1$, which would force $2e^{x} = 0$, also impossible since $e^{x}$ is always strictly positive.`}
              />
            </p>
          </div>

          {/* Sample values table — showing how close we get without reaching */}
          {showSampleValues ? (
            <div>
              <div className="text-[0.65rem] font-bold uppercase tracking-widest text-muted mb-2">
                Numerical evidence: h(x) gets arbitrarily close to ±1 but never reaches them
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {samples.map((s, i) => {
                  const v = h(s.x)
                  const dist = Math.min(Math.abs(1 - v), Math.abs(-1 - v))
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="rounded-lg border bg-white/[0.03] px-3 py-2"
                      style={{ borderColor: 'rgba(144,102,238,0.30)' }}
                    >
                      <div className="text-[0.68rem] font-bold" style={{ color: '#9066EE' }}>
                        {s.label}
                      </div>
                      <div className="font-mono text-[0.78rem] text-foreground mt-0.5">
                        h = {v.toFixed(4)}
                      </div>
                      <div className="text-[0.6rem] text-muted mt-0.5">
                        gap = {dist.toExponential(1)}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ) : null}

          {/* Conclusion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Conclusion
              icon={<ArrowDownToLine size={14} />}
              color="#E84C4C"
              title="Lower bound −1 — open"
              body={`As $x \\to -\\infty$, $h(x) \\to -1$ but $-1 \\notin h(\\mathbb{R})$. So $-1$ is excluded: the interval STARTS with $\\,]-1$, not $[-1$.`}
            />
            <Conclusion
              icon={<ArrowUpToLine size={14} />}
              color="#E84C4C"
              title="Upper bound +1 — open"
              body={`As $x \\to +\\infty$, $h(x) \\to 1$ but $1 \\notin h(\\mathbb{R})$. So $1$ is excluded: the interval ENDS with $1[$, not $1]$.`}
            />
          </div>

          <div className="rounded-xl border-2 px-4 py-3" style={{ borderColor: 'rgba(76,232,124,0.50)', background: 'rgba(76,232,124,0.08)' }}>
            <div className="text-[0.65rem] font-bold uppercase tracking-widest text-green-accent mb-1">
              Conclusion
            </div>
            <p className="text-[0.85rem] leading-relaxed text-foreground">
              Since neither bound is attained, the image is the <span className="font-bold text-green-accent">OPEN</span> interval{' '}
              <span className="font-mono font-bold text-green-accent">]−1 ; 1[</span>. Therefore $h^{-1}$ is defined on{' '}
              <span className="font-mono font-bold text-green-accent">]−1 ; 1[</span> — answer B.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── helpers ─────────────────────────────────────────────────

function ToggleButton({
  label,
  active,
  color,
  onClick,
}: {
  label: string
  active: boolean
  color: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border"
      style={{
        background: active ? `${color}22` : 'transparent',
        borderColor: active ? `${color}55` : 'rgba(255,255,255,0.1)',
        color: active ? color : 'rgba(255,255,255,0.55)',
        boxShadow: active ? `0 0 14px ${color}33` : 'none',
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: active ? color : 'rgba(255,255,255,0.25)' }}
      />
      {label}
    </button>
  )
}

function Conclusion({
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
