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
import { Activity, Sparkles, Target, TrendingDown, TrendingUp } from 'lucide-react'
import InlineMath from '../InlineMath'

// ─────────────────────────────────────────────────────────────
// Cubic roots visualization for 2019 Q15: x^3 - 3x - 1 = 0
// Shows the curve crossing y=0 at three distinct real roots.
// ─────────────────────────────────────────────────────────────

function f(x: number) {
  return x * x * x - 3 * x - 1
}
function fPrime(x: number) {
  return 3 * x * x - 3
}

// Numerical approximations of the three roots of x^3 - 3x - 1 = 0
// (Cardano gives 2cos(θ/3) shifts; we just compute via Newton)
function approxRoots(): number[] {
  const seeds = [-2, -0.5, 1.9]
  return seeds.map((s) => {
    let x = s
    for (let i = 0; i < 20; i++) {
      const fp = fPrime(x)
      if (Math.abs(fp) < 1e-9) break
      x = x - f(x) / fp
    }
    return x
  })
}

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: { value: number }[]
  label?: number
}) {
  if (!active || !payload || payload.length === 0 || label == null) return null
  const x = Number(label)
  return (
    <div className="rounded-lg border border-white/10 bg-[#0d0c0a]/95 backdrop-blur px-3 py-2 shadow-xl">
      <div className="text-[0.7rem] text-gold font-bold tracking-widest uppercase mb-1.5">
        x = {x.toFixed(3)}
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: '#C9A84C', boxShadow: '0 0 6px #C9A84C' }}
        />
        <span className="text-muted w-12">f(x)</span>
        <span className="font-mono text-foreground">{f(x).toFixed(3)}</span>
      </div>
    </div>
  )
}

export default function CubicRootsPlot({
  title = 'Cubic f(x) = x³ − 3x − 1 — three real roots',
  description,
}: {
  title?: string
  description?: string
}) {
  const [showLocalExtrema, setShowLocalExtrema] = useState(true)
  const [showRoots, setShowRoots] = useState(true)

  const roots = useMemo(() => approxRoots(), [])
  const data = useMemo(() => {
    const points: { x: number; y: number }[] = []
    const N = 240
    const xMin = -2.5
    const xMax = 2.5
    for (let i = 0; i <= N; i++) {
      const x = xMin + (i / N) * (xMax - xMin)
      points.push({ x, y: f(x) })
    }
    return points
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl border border-gold/20 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'linear-gradient(135deg, rgba(201,168,76,0.10), transparent 45%, rgba(76,232,124,0.06) 85%)',
        }}
      />

      <div className="relative bg-gradient-to-br from-[#0c0a08] via-[#0f0d09] to-[#0a0807]">
        {/* ── Header ── */}
        <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/30 flex items-center justify-center shrink-0">
              <Activity size={16} className="text-gold" />
            </div>
            <div className="min-w-0">
              <h4 className="text-foreground font-display font-bold text-sm leading-tight truncate">
                {title}
              </h4>
              <p className="text-[0.7rem] text-muted leading-relaxed">
                {description ?? 'The curve crosses y = 0 at three distinct points → 3 real solutions.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/25">
            <Sparkles size={11} className="text-gold" />
            <span className="text-[0.68rem] text-gold font-bold tracking-wider uppercase">
              2019 Q15
            </span>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center flex-wrap gap-3 px-5 py-3 bg-white/[0.02] border-b border-white/[0.04]">
          <ToggleButton
            label="Roots (zeros)"
            active={showRoots}
            color="#4CE87C"
            onClick={() => setShowRoots((v) => !v)}
          />
          <ToggleButton
            label="Local extrema"
            active={showLocalExtrema}
            color="#9066EE"
            onClick={() => setShowLocalExtrema((v) => !v)}
          />

          <div className="ml-auto text-[0.7rem] text-muted">
            <span className="text-gold font-bold mr-1">Reasoning:</span>
            <InlineMath text={`$f(-1) = 1 > 0,\\; f(1) = -3 < 0$ — sign change ⟹ 3 real roots`} />
          </div>
        </div>

        {/* ── Chart ── */}
        <div className="px-2 md:px-4 py-4" style={{ height: 380 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 18, bottom: 28, left: 8 }}>
              <defs>
                <linearGradient id="grad-cubic" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#E5C76B" />
                  <stop offset="100%" stopColor="#C9A84C" />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

              <XAxis
                type="number"
                dataKey="x"
                domain={[-2.5, 2.5]}
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                tickFormatter={(v) => Number(v).toFixed(1)}
              >
                <Label value="x" offset={-10} position="insideBottom" fill="#C9A84C" />
              </XAxis>
              <YAxis
                domain={[-5, 5]}
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
              >
                <Label value="y" offset={10} position="insideTopLeft" fill="#C9A84C" />
              </YAxis>

              <Tooltip
                content={(props) => (
                  <ChartTooltip
                    active={props.active}
                    payload={props.payload as unknown as { value: number }[] | undefined}
                    label={props.label as number | undefined}
                  />
                )}
                cursor={{ stroke: '#C9A84C', strokeWidth: 1, strokeDasharray: '2 2' }}
              />

              {/* y = 0 reference */}
              <ReferenceLine y={0} stroke="rgba(76,232,124,0.5)" strokeDasharray="4 4">
                <Label value="y = 0" position="insideTopRight" fill="#4CE87C" fontSize={11} />
              </ReferenceLine>

              {/* Local extrema dashed verticals */}
              {showLocalExtrema && (
                <>
                  <ReferenceLine
                    x={-1}
                    stroke="rgba(144,102,238,0.35)"
                    strokeDasharray="2 4"
                    label={{ value: 'x = −1 (max)', position: 'top', fill: '#9066EE', fontSize: 10 }}
                  />
                  <ReferenceLine
                    x={1}
                    stroke="rgba(144,102,238,0.35)"
                    strokeDasharray="2 4"
                    label={{ value: 'x = 1 (min)', position: 'top', fill: '#9066EE', fontSize: 10 }}
                  />
                </>
              )}

              {/* The cubic curve */}
              <Line
                type="monotone"
                dataKey="y"
                name="f(x)"
                stroke="url(#grad-cubic)"
                strokeWidth={2.5}
                dot={false}
                isAnimationActive={true}
                animationDuration={900}
              />

              {/* Local extrema dots */}
              {showLocalExtrema && (
                <>
                  <ReferenceDot
                    x={-1}
                    y={f(-1)}
                    r={5}
                    fill="#9066EE"
                    stroke="#fff"
                    strokeWidth={1.5}
                    ifOverflow="visible"
                    label={{ value: `(−1, ${f(-1).toFixed(0)})`, position: 'top', fill: '#9066EE', fontSize: 11 }}
                  />
                  <ReferenceDot
                    x={1}
                    y={f(1)}
                    r={5}
                    fill="#9066EE"
                    stroke="#fff"
                    strokeWidth={1.5}
                    ifOverflow="visible"
                    label={{ value: `(1, ${f(1).toFixed(0)})`, position: 'bottom', fill: '#9066EE', fontSize: 11 }}
                  />
                </>
              )}

              {/* Roots */}
              {showRoots &&
                roots.map((r, i) => (
                  <ReferenceDot
                    key={`root-${i}`}
                    x={r}
                    y={0}
                    r={6}
                    fill="#4CE87C"
                    stroke="#fff"
                    strokeWidth={1.6}
                    ifOverflow="visible"
                    label={{
                      value: `α${i + 1} ≈ ${r.toFixed(2)}`,
                      position: i === 1 ? 'top' : 'bottom',
                      fill: '#4CE87C',
                      fontSize: 11,
                    }}
                  />
                ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ── Takeaways ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-5 py-5 border-t border-white/[0.04] bg-white/[0.015]">
          <Takeaway
            icon={<TrendingUp size={14} />}
            color="#9066EE"
            title="Local maximum"
            body={`At $x = -1$ the curve reaches a local max with $f(-1) = 1 > 0$.`}
          />
          <Takeaway
            icon={<TrendingDown size={14} />}
            color="#9066EE"
            title="Local minimum"
            body={`At $x = 1$ the curve reaches a local min with $f(1) = -3 < 0$.`}
          />
          <Takeaway
            icon={<Target size={14} />}
            color="#4CE87C"
            title="Three real roots"
            body={`Since $f(-1) > 0$ and $f(1) < 0$, by the IVT the cubic crosses $y = 0$ once in each of the three intervals — three distinct real solutions.`}
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
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: active ? color : 'rgba(255,255,255,0.25)' }}
      />
      {label}
    </button>
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
