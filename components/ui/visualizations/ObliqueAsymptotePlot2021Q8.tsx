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
  Legend,
} from 'recharts'
import { motion } from 'framer-motion'
import { Activity, Sparkles, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react'
import InlineMath from '../InlineMath'

// ─────────────────────────────────────────────────────────────
// Plot for 2021 Q8: f(x) = 2x + 1 - x^4/(x^4+1)
// Shows the curve + the CORRECT asymptote y = 2x (green)
// AND the TRAP candidate y = 2x + 1 (red, wrong).
// Highlights the gaps f - 2x → 0 and f - (2x+1) → -1.
// ─────────────────────────────────────────────────────────────

function f(x: number): number {
  const x4 = Math.pow(x, 4)
  return 2 * x + 1 - x4 / (x4 + 1)
}

export default function ObliqueAsymptotePlot2021Q8({
  title = 'f(x) = 2x + 1 − x⁴/(x⁴+1) — the trap of "obvious" asymptote',
  description,
}: {
  title?: string
  description?: string
}) {
  const [xMax, setXMax] = useState<number>(5)
  const [showCorrect, setShowCorrect] = useState(true)
  const [showTrap, setShowTrap] = useState(true)
  const [showGap, setShowGap] = useState(true)

  const data = useMemo(() => {
    const points: { x: number; y: number; correct: number; trap: number; gapCorrect: number; gapTrap: number }[] = []
    const N = 240
    const xMin = -1
    for (let i = 0; i <= N; i++) {
      const x = xMin + (i / N) * (xMax - xMin)
      const fx = f(x)
      points.push({
        x,
        y: fx,
        correct: 2 * x,
        trap: 2 * x + 1,
        gapCorrect: fx - 2 * x,
        gapTrap: fx - (2 * x + 1),
      })
    }
    return points
  }, [xMax])

  // Sample numerical evidence at growing x values
  const samples = useMemo(
    () => [
      { x: 1 },
      { x: 3 },
      { x: 10 },
      { x: 50 },
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
            'linear-gradient(135deg, rgba(232,76,76,0.10), transparent 45%, rgba(76,232,124,0.06) 85%)',
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
                {description ?? 'Compare two candidate asymptotes: only one survives the test.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/25">
            <Sparkles size={11} className="text-blue-accent" />
            <span className="text-[0.68rem] text-blue-accent font-bold tracking-wider uppercase">
              2021 · Q8
            </span>
          </div>
        </div>

        {/* ── Trap warning ── */}
        <div
          className="px-5 py-3 border-b border-white/[0.04] flex items-start gap-3"
          style={{ background: 'rgba(232,76,76,0.06)' }}
        >
          <AlertTriangle size={16} className="text-danger mt-0.5 shrink-0" />
          <p className="text-[0.78rem] leading-relaxed text-text-secondary">
            <span className="font-bold text-danger">TRAP:</span> Reading $f(x) = 2x + 1 - \tfrac{`{x^{4}}`}{`{x^{4}+1}`}$ many students
            think the asymptote is $y = 2x + 1$ (the "$2x + 1$" looks like the linear part). But the rational fraction
            tends to $1$, NOT $0$ — so it cancels the $+1$. The true asymptote is $y = 2x$.
          </p>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center flex-wrap gap-3 px-5 py-3 bg-white/[0.02] border-b border-white/[0.04]">
          <ToggleButton label="Correct y = 2x" active={showCorrect} color="#4CE87C" onClick={() => setShowCorrect((v) => !v)} />
          <ToggleButton label="Trap y = 2x + 1" active={showTrap} color="#E84C4C" onClick={() => setShowTrap((v) => !v)} />
          <ToggleButton label="Gap to curve" active={showGap} color="#9066EE" onClick={() => setShowGap((v) => !v)} />

          <div className="flex items-center gap-2 ml-auto">
            <label className="text-[0.7rem] text-muted uppercase tracking-wider">Zoom x:</label>
            <input
              type="range"
              min={3}
              max={12}
              step={0.5}
              value={xMax}
              onChange={(e) => setXMax(Number(e.target.value))}
              className="w-28 md:w-36 accent-gold cursor-pointer"
              aria-label="x range"
            />
            <span className="text-xs text-gold font-mono w-10 text-right">{xMax.toFixed(1)}</span>
          </div>
        </div>

        {/* ── Chart ── */}
        <div className="px-2 md:px-4 py-4" style={{ height: 380 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 18, bottom: 28, left: 8 }}>
              <defs>
                <linearGradient id="grad-f-q8" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6AC9E8" />
                  <stop offset="100%" stopColor="#2D8FBE" />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
              <XAxis
                type="number"
                dataKey="x"
                domain={[-1, xMax]}
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                tickFormatter={(v) => Number(v).toFixed(0)}
              >
                <Label value="x" offset={-10} position="insideBottom" fill="#C9A84C" />
              </XAxis>
              <YAxis
                domain={[-2, 2 * xMax + 2]}
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
              >
                <Label value="y" offset={10} position="insideTopLeft" fill="#C9A84C" />
              </YAxis>

              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload || payload.length === 0) return null
                  const x = Number(label)
                  const fx = f(x)
                  return (
                    <div className="rounded-lg border border-white/10 bg-[#0d0c0a]/95 backdrop-blur px-3 py-2 shadow-xl">
                      <div className="text-[0.7rem] text-blue-accent font-bold tracking-widest uppercase mb-1">
                        x = {x.toFixed(2)}
                      </div>
                      <div className="text-xs space-y-0.5">
                        <div>
                          <span className="text-muted mr-1">f(x) =</span>
                          <span className="font-mono text-foreground">{fx.toFixed(4)}</span>
                        </div>
                        <div>
                          <span className="text-green-accent mr-1">f(x) − 2x =</span>
                          <span className="font-mono text-green-accent">{(fx - 2 * x).toFixed(4)}</span>
                        </div>
                        <div>
                          <span className="text-danger mr-1">f(x) − (2x+1) =</span>
                          <span className="font-mono text-danger">{(fx - (2 * x + 1)).toFixed(4)}</span>
                        </div>
                      </div>
                    </div>
                  )
                }}
                cursor={{ stroke: '#C9A84C', strokeWidth: 1, strokeDasharray: '2 2' }}
              />

              {/* The function curve */}
              <Line
                type="monotone"
                dataKey="y"
                name="f(x)"
                stroke="url(#grad-f-q8)"
                strokeWidth={2.6}
                dot={false}
                isAnimationActive
                animationDuration={900}
              />

              {/* CORRECT asymptote y = 2x */}
              {showCorrect ? (
                <Line
                  type="linear"
                  dataKey="correct"
                  name="y = 2x  ✓"
                  stroke="#4CE87C"
                  strokeWidth={2}
                  strokeDasharray="6 4"
                  dot={false}
                  isAnimationActive
                />
              ) : null}

              {/* TRAP asymptote y = 2x + 1 */}
              {showTrap ? (
                <Line
                  type="linear"
                  dataKey="trap"
                  name="y = 2x + 1  ✗ (trap)"
                  stroke="#E84C4C"
                  strokeWidth={2}
                  strokeDasharray="2 4"
                  dot={false}
                  isAnimationActive
                />
              ) : null}

              <Legend wrapperStyle={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ── Gap analysis chart ── */}
        {showGap ? (
          <div className="px-2 md:px-4 pb-4 border-t border-white/[0.04]">
            <div className="text-[0.65rem] font-bold uppercase tracking-widest text-purple-accent px-3 py-3" style={{ color: '#9066EE' }}>
              Vertical gap between curve and each candidate
            </div>
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 18, bottom: 20, left: 8 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                  <XAxis
                    type="number"
                    dataKey="x"
                    domain={[-1, xMax]}
                    stroke="rgba(255,255,255,0.35)"
                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }}
                    tickFormatter={(v) => Number(v).toFixed(0)}
                  />
                  <YAxis
                    domain={[-1.5, 1.5]}
                    stroke="rgba(255,255,255,0.35)"
                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }}
                  />
                  <Tooltip
                    contentStyle={{ background: '#0d0c0a', border: '1px solid rgba(255,255,255,0.10)', fontSize: 11 }}
                    labelStyle={{ color: '#C9A84C' }}
                  />
                  <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" />
                  <ReferenceLine y={-1} stroke="rgba(232,76,76,0.50)" strokeDasharray="3 3">
                    <Label value="−1 (trap converges here)" position="insideBottomLeft" fill="#E84C4C" fontSize={10} />
                  </ReferenceLine>
                  <Line
                    type="monotone"
                    dataKey="gapCorrect"
                    name="f(x) − 2x  → 0  ✓"
                    stroke="#4CE87C"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="gapTrap"
                    name="f(x) − (2x+1)  → −1  ✗"
                    stroke="#E84C4C"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    dot={false}
                  />
                  <Legend wrapperStyle={{ fontSize: 10, color: 'rgba(255,255,255,0.7)' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : null}

        {/* ── Numerical evidence ── */}
        <div className="px-5 py-5 border-t border-white/[0.04]">
          <div className="text-[0.65rem] font-bold uppercase tracking-widest text-muted mb-3">
            Numerical evidence — both gaps as x grows
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.78rem]">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left font-mono text-muted py-2 pr-4">x</th>
                  <th className="text-left font-mono text-muted py-2 pr-4">f(x)</th>
                  <th className="text-left font-mono py-2 pr-4" style={{ color: '#4CE87C' }}>
                    f(x) − 2x  →  0
                  </th>
                  <th className="text-left font-mono py-2" style={{ color: '#E84C4C' }}>
                    f(x) − (2x+1)  →  −1
                  </th>
                </tr>
              </thead>
              <tbody>
                {samples.map((s, i) => {
                  const fx = f(s.x)
                  return (
                    <tr key={i} className="border-b border-white/[0.04]">
                      <td className="font-mono text-foreground py-2 pr-4">{s.x}</td>
                      <td className="font-mono text-foreground py-2 pr-4">{fx.toFixed(5)}</td>
                      <td className="font-mono text-green-accent py-2 pr-4">{(fx - 2 * s.x).toFixed(5)}</td>
                      <td className="font-mono text-danger py-2">{(fx - (2 * s.x + 1)).toFixed(5)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="text-[0.72rem] text-muted mt-2 italic">
            The green column shrinks toward 0 (correct asymptote), the red column converges to −1 (constant gap → NOT an asymptote).
          </p>
        </div>

        {/* ── Conclusions ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-5 py-5 border-t border-white/[0.04] bg-white/[0.015]">
          <Conclusion
            icon={<XCircle size={14} />}
            color="#E84C4C"
            title="Why y = 2x + 1 fails"
            body={`$f(x) - (2x+1) = -\\dfrac{x^{4}}{x^{4}+1} \\to -1 \\neq 0$. The vertical gap to $y = 2x+1$ stabilizes at $-1$, so the line is parallel-but-not-asymptotic.`}
          />
          <Conclusion
            icon={<CheckCircle2 size={14} />}
            color="#4CE87C"
            title="Why y = 2x is correct"
            body={`$f(x) - 2x = 1 - \\dfrac{x^{4}}{x^{4}+1} = \\dfrac{1}{x^{4}+1} \\to 0$. The gap shrinks to zero ⟹ true oblique asymptote $y = 2x$.`}
          />
        </div>
      </div>
    </motion.div>
  )
}

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
      <span className="w-2 h-2 rounded-full" style={{ background: active ? color : 'rgba(255,255,255,0.25)' }} />
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
        <span className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: `${color}22`, color }}>
          {icon}
        </span>
        <span className="text-[0.68rem] font-extrabold tracking-[0.14em] uppercase leading-tight" style={{ color }}>
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
