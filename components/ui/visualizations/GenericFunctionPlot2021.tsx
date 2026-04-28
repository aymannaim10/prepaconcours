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
import { Activity, Sparkles, Target } from 'lucide-react'
import InlineMath from '../InlineMath'

// ─────────────────────────────────────────────────────────────
// Generic function plotter for 2021 exam questions.
// Supports 4 hand-tuned presets, each with annotations.
// ─────────────────────────────────────────────────────────────

type Preset = 'cubic-log-2021-q11' | 'xlnx-2021-q13' | 'minimum-2021-q20' | 'tangent-log-2021-q12'

interface PresetConfig {
  f: (x: number) => number
  xMin: number
  xMax: number
  yMin: number
  yMax: number
  zeroLine?: boolean
  refLines?: { y?: number; x?: number; label: string; color: string }[]
  keyPoints?: { x: number; y: number; label: string; color: string }[]
  takeaways: { color: string; title: string; body: string }[]
  defaultTitle: string
  badge: string
}

const PRESETS: Record<Preset, PresetConfig> = {
  'cubic-log-2021-q11': {
    f: (x) => Math.pow(x, 3) + Math.log(x),
    xMin: 0.05,
    xMax: 1.5,
    yMin: -3.5,
    yMax: 3,
    zeroLine: true,
    refLines: [
      { y: 0, label: 'g(α) = 0', color: '#4CE87C' },
    ],
    keyPoints: [
      { x: 1 / Math.E, y: Math.pow(1 / Math.E, 3) + Math.log(1 / Math.E), label: '(1/e, < 0)', color: '#9066EE' },
      { x: 1, y: 1, label: '(1, 1) > 0', color: '#9066EE' },
    ],
    takeaways: [
      { color: '#9066EE', title: 'g is strictly increasing', body: `$g\\\'(x) = 3x^{2} + 1/x > 0$ on $]0,+\\infty[$ — so $g$ is strictly increasing.` },
      { color: '#4CE87C', title: 'Sign change → unique root', body: `$g(1/e) = 1/e^{3} - 1 < 0$ and $g(1) = 1 > 0$ — by IVT, there is a UNIQUE root in $]1/e, 1[ \\subset \\,]0, 1[$.` },
      { color: '#C9A84C', title: 'Conclusion', body: `Therefore $0 < \\alpha < 1$ — answer C.` },
    ],
    defaultTitle: 'g(x) = x³ + ln(x) — sign change in ]0, 1[',
    badge: 'Q11 · IVT',
  },
  'xlnx-2021-q13': {
    f: (x) => x * Math.log(x),
    xMin: 0.001,
    xMax: 1.05,
    yMin: -0.45,
    yMax: 0.05,
    refLines: [
      { y: 0, label: 'y = 0', color: '#4CADE8' },
      { y: -1 / Math.E, label: 'y = −1/e (min)', color: '#E84C4C' },
    ],
    keyPoints: [
      { x: 1 / Math.E, y: -1 / Math.E, label: '(1/e, −1/e)', color: '#E84C4C' },
      { x: 1, y: 0, label: '(1, 0)', color: '#4CE87C' },
    ],
    takeaways: [
      { color: '#9066EE', title: 'Critical point', body: `$f\\\'(x) = \\ln(x) + 1 = 0 \\iff x = 1/e$. Sign change ⟹ minimum at $x = 1/e$.` },
      { color: '#E84C4C', title: 'Minimum value', body: `$f(1/e) = (1/e) \\cdot \\ln(1/e) = -1/e$.` },
      { color: '#4CE87C', title: 'Image', body: `$f(]0, 1]) = [-1/e, 0]$ — the curve attains both bounds: min at $x = 1/e$ and $f(1) = 0$.` },
    ],
    defaultTitle: 'f(x) = x·ln(x) on ]0, 1] — image is [−1/e, 0]',
    badge: 'Q13',
  },
  'minimum-2021-q20': {
    f: (x) => 1 - x * Math.exp(-x),
    xMin: -1,
    xMax: 5,
    yMin: 0.5,
    yMax: 2.2,
    refLines: [
      { y: 1 - 1 / Math.E, label: 'min = 1 − 1/e', color: '#4CE87C' },
      { y: 1, label: 'asymptote y = 1', color: '#9066EE' },
    ],
    keyPoints: [
      { x: 1, y: 1 - 1 / Math.E, label: '(1, 1 − 1/e) min', color: '#4CE87C' },
      { x: 0, y: 1, label: '(0, 1)', color: '#C9A84C' },
    ],
    takeaways: [
      { color: '#9066EE', title: 'Critical point', body: `$f\\\'(x) = (x-1)\\,e^{-x}$ vanishes at $x = 1$ and changes sign (−→+) ⟹ minimum at $x=1$.` },
      { color: '#4CE87C', title: 'Minimum value', body: `$f(1) = 1 - 1 \\cdot e^{-1} = 1 - e^{-1}$ — answer E.` },
      { color: '#C9A84C', title: 'Behavior at infinity', body: `$\\lim_{x\\to+\\infty} f(x) = 1$ (since $x e^{-x} \\to 0$). Horizontal asymptote $y = 1$.` },
    ],
    defaultTitle: 'f(x) = 1 − x·e⁻ˣ — global minimum at x = 1',
    badge: 'Q20',
  },
  'tangent-log-2021-q12': {
    f: (x) => Math.log(x * x + x + 4),
    xMin: -3,
    xMax: 3,
    yMin: 0.5,
    yMax: 3.5,
    refLines: [],
    keyPoints: [
      { x: 0, y: 2 * Math.log(2), label: 'P(0, 2 ln 2)', color: '#4CE87C' },
    ],
    takeaways: [
      { color: '#9066EE', title: 'Verify the point', body: `$f(0) = \\ln(4) = 2\\ln 2$ ✓ — $P$ is on the curve.` },
      { color: '#4CADE8', title: 'Slope at P', body: `$f\\\'(x) = (2x+1)/(x^{2}+x+4)$. At $x=0$: $f\\\'(0) = 1/4$.` },
      { color: '#C9A84C', title: 'Tangent equation', body: `$y = f\\\'(0)\\,x + f(0) = \\dfrac{1}{4}x + 2\\ln 2$ — answer C.` },
    ],
    defaultTitle: 'f(x) = ln(x² + x + 4) — tangent at P(0, 2 ln 2)',
    badge: 'Q12',
  },
}

export default function GenericFunctionPlot2021({
  preset,
  title,
  description,
}: {
  preset: Preset
  title?: string
  description?: string
}) {
  const config = PRESETS[preset]
  const [showKeyPoints, setShowKeyPoints] = useState(true)
  const [showRefLines, setShowRefLines] = useState(true)
  const [showTangent, setShowTangent] = useState(preset === 'tangent-log-2021-q12')

  const data = useMemo(() => {
    const points: { x: number; y: number; tangent?: number }[] = []
    const N = 240
    for (let i = 0; i <= N; i++) {
      const x = config.xMin + (i / N) * (config.xMax - config.xMin)
      const y = config.f(x)
      const point: { x: number; y: number; tangent?: number } = { x, y: Number.isFinite(y) ? y : NaN }
      if (preset === 'tangent-log-2021-q12') {
        // Tangent at P(0, 2 ln 2): y = x/4 + 2 ln 2
        point.tangent = x / 4 + 2 * Math.log(2)
      }
      points.push(point)
    }
    return points
  }, [config, preset])

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
                {title ?? config.defaultTitle}
              </h4>
              <p className="text-[0.7rem] text-muted leading-relaxed">
                {description ?? 'Hover the curve to read values; toggle the visual aids below.'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/25">
            <Sparkles size={11} className="text-blue-accent" />
            <span className="text-[0.68rem] text-blue-accent font-bold tracking-wider uppercase">
              {config.badge}
            </span>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center flex-wrap gap-3 px-5 py-3 bg-white/[0.02] border-b border-white/[0.04]">
          <ToggleButton
            label="Key points"
            active={showKeyPoints}
            color="#4CE87C"
            onClick={() => setShowKeyPoints((v) => !v)}
          />
          {config.refLines && config.refLines.length > 0 && (
            <ToggleButton
              label="Reference lines"
              active={showRefLines}
              color="#E84C4C"
              onClick={() => setShowRefLines((v) => !v)}
            />
          )}
          {preset === 'tangent-log-2021-q12' && (
            <ToggleButton
              label="Tangent line"
              active={showTangent}
              color="#9066EE"
              onClick={() => setShowTangent((v) => !v)}
            />
          )}
        </div>

        {/* ── Chart ── */}
        <div className="px-2 md:px-4 py-4" style={{ height: 380 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 18, bottom: 28, left: 8 }}>
              <defs>
                <linearGradient id="curve-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6AC9E8" />
                  <stop offset="100%" stopColor="#2D8FBE" />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
              <XAxis
                type="number"
                dataKey="x"
                domain={[config.xMin, config.xMax]}
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                tickFormatter={(v) => Number(v).toFixed(1)}
              >
                <Label value="x" offset={-10} position="insideBottom" fill="#C9A84C" />
              </XAxis>
              <YAxis
                domain={[config.yMin, config.yMax]}
                stroke="rgba(255,255,255,0.35)"
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                tickFormatter={(v) => Number(v).toFixed(2)}
              >
                <Label value="y" offset={10} position="insideTopLeft" fill="#C9A84C" />
              </YAxis>

              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload || payload.length === 0) return null
                  const x = Number(label)
                  const y = config.f(x)
                  return (
                    <div className="rounded-lg border border-white/10 bg-[#0d0c0a]/95 backdrop-blur px-3 py-2 shadow-xl">
                      <div className="text-[0.7rem] text-blue-accent font-bold tracking-widest uppercase mb-1">
                        x = {x.toFixed(3)}
                      </div>
                      <div className="text-xs">
                        <span className="text-muted mr-1">f(x) =</span>
                        <span className="font-mono text-foreground">{y.toFixed(4)}</span>
                      </div>
                    </div>
                  )
                }}
                cursor={{ stroke: '#C9A84C', strokeWidth: 1, strokeDasharray: '2 2' }}
              />

              {config.zeroLine ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.20)" /> : null}

              {showRefLines && config.refLines?.map((line, i) => (
                <ReferenceLine
                  key={i}
                  y={line.y}
                  x={line.x}
                  stroke={line.color}
                  strokeDasharray="5 4"
                  strokeOpacity={0.7}
                  label={{
                    value: line.label,
                    position: 'insideTopRight',
                    fill: line.color,
                    fontSize: 10,
                  }}
                />
              ))}

              <Line
                type="monotone"
                dataKey="y"
                name="f(x)"
                stroke="url(#curve-grad)"
                strokeWidth={2.6}
                dot={false}
                isAnimationActive
                animationDuration={900}
              />

              {showTangent && preset === 'tangent-log-2021-q12' ? (
                <Line
                  type="linear"
                  dataKey="tangent"
                  name="Tangent"
                  stroke="#9066EE"
                  strokeWidth={2}
                  strokeDasharray="6 4"
                  dot={false}
                  isAnimationActive
                />
              ) : null}

              {showKeyPoints && config.keyPoints?.map((pt, i) => (
                <ReferenceDot
                  key={i}
                  x={pt.x}
                  y={pt.y}
                  r={6}
                  fill={pt.color}
                  stroke="#fff"
                  strokeWidth={1.5}
                  ifOverflow="visible"
                  label={{ value: pt.label, position: 'top', fill: pt.color, fontSize: 11 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ── Takeaways ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 px-5 py-5 border-t border-white/[0.04] bg-white/[0.015]"
        >
          {config.takeaways.map((t, i) => (
            <Takeaway key={i} title={t.title} body={t.body} color={t.color} icon={<Target size={14} />} />
          ))}
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
