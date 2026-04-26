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
  Legend,
  Label,
} from 'recharts'
import { motion } from 'framer-motion'
import { Activity, Sparkles, TrendingDown, TrendingUp } from 'lucide-react'
import InlineMath from '../InlineMath'

// f(x) = e^x + x·(ln x - e - 1),  x > 0,   f(0) = 1 (continuity)
const E = Math.E

function f(x: number): number {
  if (x <= 0) return 1 // f(0) = 1
  return Math.exp(x) + x * (Math.log(x) - E - 1)
}

function fPrime(x: number): number {
  if (x <= 0) return -Infinity
  return Math.exp(x) + Math.log(x) - E
}

function fDouble(x: number): number {
  if (x <= 0) return +Infinity
  return Math.exp(x) + 1 / x
}

// Custom tooltip card
function ChartTooltip({
  active,
  payload,
  label,
  showPrime,
  showDouble,
}: {
  active?: boolean
  payload?: { name: string; value: number; color: string }[]
  label?: number
  showPrime: boolean
  showDouble: boolean
}) {
  if (!active || !payload || payload.length === 0 || label == null) return null
  const x = Number(label)
  const row = (name: string, val: number, color: string) => (
    <div key={name} className="flex items-center gap-2 text-xs">
      <span className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
      <span className="text-muted w-8">{name}</span>
      <span className="font-mono text-foreground">{val.toFixed(3)}</span>
    </div>
  )
  return (
    <div className="rounded-lg border border-white/10 bg-[#0d0c0a]/95 backdrop-blur px-3 py-2 shadow-xl">
      <div className="text-[0.7rem] text-gold font-bold tracking-widest uppercase mb-1.5">
        x = {x.toFixed(3)}
      </div>
      <div className="flex flex-col gap-1">
        {row('f(x)', f(x), '#C9A84C')}
        {showPrime ? row("f'(x)", fPrime(x), '#4CADE8') : null}
        {showDouble ? row('f″(x)', fDouble(x), '#9066EE') : null}
      </div>
    </div>
  )
}

export default function FunctionPlot2024Ex7({
  title = 'Graph of f(x) = eˣ + x(ln x − e − 1)',
  description,
}: {
  title?: string
  description?: string
}) {
  const [xMax, setXMax] = useState<number>(2.5)
  const [showPrime, setShowPrime] = useState<boolean>(false)
  const [showDouble, setShowDouble] = useState<boolean>(false)
  const [showMinLine, setShowMinLine] = useState<boolean>(true)

  const data = useMemo(() => {
    const points: { x: number; f: number; fp: number | null; fpp: number | null }[] = []
    const N = 300
    for (let i = 0; i <= N; i++) {
      const x = (i / N) * xMax
      const y = f(Math.max(x, 1e-6)) // keep ln defined
      const yp = x <= 0 ? null : fPrime(x)
      const ypp = x <= 0 ? null : fDouble(x)
      // Clamp extreme vertical spikes for readability
      const clampedP = yp == null ? null : Math.max(-6, Math.min(8, yp))
      const clampedPP = ypp == null ? null : Math.max(-2, Math.min(12, ypp))
      points.push({ x, f: y, fp: clampedP, fpp: clampedPP })
    }
    return points
  }, [xMax])

  const yMin = -2
  const yMax = useMemo(() => {
    const vals = data.map((d) => d.f).filter((v) => Number.isFinite(v))
    return Math.max(3, Math.ceil(Math.max(...vals) + 0.5))
  }, [data])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl border border-blue-accent/20 overflow-hidden"
    >
      {/* ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'linear-gradient(135deg, rgba(76,173,232,0.08), transparent 40%, rgba(201,168,76,0.06) 80%)',
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
                {description ?? 'Interactive plot — hover to read values, toggle derivatives, zoom the window.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/25">
            <Sparkles size={11} className="text-blue-accent" />
            <span className="text-[0.68rem] text-blue-accent font-bold tracking-wider uppercase">
              Question 10
            </span>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center flex-wrap gap-3 px-5 py-3 bg-white/[0.02] border-b border-white/[0.04]">
          <ToggleButton
            label="f′(x)"
            active={showPrime}
            color="#4CADE8"
            onClick={() => setShowPrime((v) => !v)}
          />
          <ToggleButton
            label="f″(x)"
            active={showDouble}
            color="#9066EE"
            onClick={() => setShowDouble((v) => !v)}
          />
          <ToggleButton
            label="y = −1 (min)"
            active={showMinLine}
            color="#4CE87C"
            onClick={() => setShowMinLine((v) => !v)}
          />

          <div className="flex items-center gap-2 ml-auto">
            <label className="text-[0.7rem] text-muted uppercase tracking-wider">Zoom x:</label>
            <input
              type="range"
              min={1.2}
              max={4}
              step={0.1}
              value={xMax}
              onChange={(e) => setXMax(Number(e.target.value))}
              className="w-28 md:w-36 accent-gold cursor-pointer"
              aria-label="x range"
            />
            <span className="text-xs text-gold font-mono w-10 text-right">
              {xMax.toFixed(1)}
            </span>
          </div>
        </div>

        {/* ── Chart ── */}
        <div className="px-2 md:px-4 py-4" style={{ height: 380 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 18, bottom: 28, left: 8 }}>
              <defs>
                <linearGradient id="grad-f" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#E5C76B" />
                  <stop offset="100%" stopColor="#C9A84C" />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

              <XAxis
                type="number"
                dataKey="x"
                domain={[0, xMax]}
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                tickFormatter={(v) => Number(v).toFixed(1)}
              >
                <Label value="x" offset={-10} position="insideBottom" fill="#C9A84C" />
              </XAxis>
              <YAxis
                domain={[yMin, yMax]}
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
              >
                <Label value="y" offset={10} position="insideTopLeft" fill="#C9A84C" />
              </YAxis>

              <Tooltip
                content={(props) => (
                  <ChartTooltip
                    active={props.active}
                    payload={props.payload as unknown as { name: string; value: number; color: string }[] | undefined}
                    label={props.label as number | undefined}
                    showPrime={showPrime}
                    showDouble={showDouble}
                  />
                )}
                cursor={{ stroke: '#C9A84C', strokeWidth: 1, strokeDasharray: '2 2' }}
              />

              <ReferenceLine y={0} stroke="rgba(255,255,255,0.2)" />

              {showMinLine ? (
                <ReferenceLine
                  y={-1}
                  stroke="#4CE87C"
                  strokeDasharray="4 4"
                  strokeOpacity={0.7}
                  label={{
                    value: 'y = −1  (global min)',
                    position: 'insideBottomRight',
                    fill: '#4CE87C',
                    fontSize: 11,
                  }}
                />
              ) : null}

              <ReferenceLine
                x={1}
                stroke="rgba(201,168,76,0.35)"
                strokeDasharray="2 4"
                label={{ value: 'x = 1', position: 'top', fill: '#C9A84C', fontSize: 10 }}
              />

              <Line
                type="monotone"
                dataKey="f"
                name="f(x)"
                stroke="url(#grad-f)"
                strokeWidth={2.5}
                dot={false}
                isAnimationActive={true}
                animationDuration={900}
              />

              {showPrime ? (
                <Line
                  type="monotone"
                  dataKey="fp"
                  name="f′(x)"
                  stroke="#4CADE8"
                  strokeWidth={1.8}
                  strokeDasharray="6 3"
                  dot={false}
                  isAnimationActive={true}
                />
              ) : null}

              {showDouble ? (
                <Line
                  type="monotone"
                  dataKey="fpp"
                  name="f″(x)"
                  stroke="#9066EE"
                  strokeWidth={1.6}
                  strokeDasharray="2 4"
                  dot={false}
                  isAnimationActive={true}
                />
              ) : null}

              {/* Key points */}
              <ReferenceDot
                x={0}
                y={1}
                r={5}
                fill="#C9A84C"
                stroke="#fff"
                strokeWidth={1.5}
                ifOverflow="visible"
                label={{ value: '(0, 1)', position: 'top', fill: '#E5C76B', fontSize: 11 }}
              />
              <ReferenceDot
                x={1}
                y={-1}
                r={6}
                fill="#4CE87C"
                stroke="#fff"
                strokeWidth={1.5}
                ifOverflow="visible"
                label={{ value: '(1, −1) min', position: 'bottom', fill: '#4CE87C', fontSize: 11 }}
              />

              <Legend wrapperStyle={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ── Takeaways ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-5 py-5 border-t border-white/[0.04] bg-white/[0.015]">
          <Takeaway
            icon={<TrendingDown size={14} />}
            color="#4CE87C"
            title="Global minimum"
            body="The function $f$ is strictly convex on $]0,+\\infty[$ and reaches its global minimum at $x = 1$, with $f(1) = -1$."
          />
          <Takeaway
            icon={<Sparkles size={14} />}
            color="#4CADE8"
            title="No inflection point"
            body="Since $f''(x) = e^{x} + \\dfrac{1}{x} > 0$ for every $x > 0$, the second derivative never changes sign, so the curve $(C_f)$ has no inflection point."
          />
          <Takeaway
            icon={<TrendingUp size={14} />}
            color="#C9A84C"
            title="Range of f"
            body="By continuity of $f$ and the Intermediate Value Theorem, $f\\big([0,+\\infty[\\big) = [-1,+\\infty[$."
          />
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
        style={{
          textWrap: 'pretty',
          wordSpacing: '0.01em',
          hyphens: 'auto',
        }}
      >
        <span className="takeaway-math">
          <InlineMath text={body} />
        </span>
      </p>
    </div>
  )
}
