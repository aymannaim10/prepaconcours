'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Compass, Sparkles, Target, Circle as CircleIcon } from 'lucide-react'
import InlineMath from '../InlineMath'

// ─────────────────────────────────────────────────────────────
// Generic circle locus visualization for |z - (cx + i·cy)| = R.
// Auto-fits the viewport around the circle.
// ─────────────────────────────────────────────────────────────

const W = 640
const H = 440
const PAD = 36

export default function CircleLocusPlot({
  cx,
  cy,
  R,
  title,
  description,
}: {
  cx: number
  cy: number
  R: number
  title?: string
  description?: string
}) {
  // Compute viewport that comfortably contains the circle
  const margin = Math.max(R * 0.6, 1.5)
  const xMin = Math.floor(cx - R - margin)
  const xMax = Math.ceil(cx + R + margin)
  const yMin = Math.floor(cy - R - margin)
  const yMax = Math.ceil(cy + R + margin)

  // Helpers for coordinate conversion
  const toPxX = (x: number) =>
    PAD + ((x - xMin) / (xMax - xMin)) * (W - 2 * PAD)
  const toPxY = (y: number) =>
    PAD + ((yMax - y) / (yMax - yMin)) * (H - 2 * PAD)
  const fromPxX = (px: number) =>
    xMin + ((px - PAD) / (W - 2 * PAD)) * (xMax - xMin)
  const fromPxY = (py: number) =>
    yMax - ((py - PAD) / (H - 2 * PAD)) * (yMax - yMin)

  const [showCircle, setShowCircle] = useState(true)
  const [showRadius, setShowRadius] = useState(true)
  const [showGrid, setShowGrid] = useState(true)
  const [hover, setHover] = useState<{ x: number; y: number } | null>(null)

  const hoverInfo = useMemo(() => {
    if (!hover) return null
    const dx = hover.x - cx
    const dy = hover.y - cy
    const distance = Math.sqrt(dx * dx + dy * dy)
    return { distance, on: Math.abs(distance - R) < 0.05 * R }
  }, [hover, cx, cy, R])

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = ((e.clientX - rect.left) / rect.width) * W
    const py = ((e.clientY - rect.top) / rect.height) * H
    if (px < PAD - 6 || px > W - PAD + 6 || py < PAD - 6 || py > H - PAD + 6) {
      setHover(null)
      return
    }
    setHover({ x: fromPxX(px), y: fromPxY(py) })
  }

  // Format the center as a complex number string
  const centerLabel = (() => {
    const re = cx === 0 ? '' : `${cx}`
    const im =
      cy === 0
        ? ''
        : cy === 1
        ? cx === 0 ? 'i' : '+i'
        : cy === -1
        ? cx === 0 ? '-i' : '-i'
        : cy > 0
        ? `${cx === 0 ? '' : '+'}${cy}i`
        : `${cy}i`
    if (cx === 0 && cy === 0) return '0'
    return `${re}${im}`
  })()

  // Grid lines (integer values)
  const gridX: number[] = []
  for (let i = Math.ceil(xMin); i <= Math.floor(xMax); i++) gridX.push(i)
  const gridY: number[] = []
  for (let i = Math.ceil(yMin); i <= Math.floor(yMax); i++) gridY.push(i)

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
            'linear-gradient(135deg, rgba(76,173,232,0.10), transparent 45%, rgba(201,168,76,0.06) 85%)',
        }}
      />

      <div className="relative bg-gradient-to-br from-[#0c0a08] via-[#0f0d09] to-[#0a0807]">
        {/* ── Header ── */}
        <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-accent/25 to-blue-accent/5 border border-blue-accent/30 flex items-center justify-center shrink-0">
              <CircleIcon size={16} className="text-blue-accent" />
            </div>
            <div className="min-w-0">
              <h4 className="text-foreground font-display font-bold text-sm leading-tight truncate">
                {title ?? `Circle locus |z − (${centerLabel})| = ${R}`}
              </h4>
              <p className="text-[0.7rem] text-muted leading-relaxed">
                {description ?? `Center Ω(${centerLabel}), radius ${R}. Hover to test any point.`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/25">
            <Sparkles size={11} className="text-blue-accent" />
            <span className="text-[0.68rem] text-blue-accent font-bold tracking-wider uppercase">
              Locus
            </span>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center flex-wrap gap-3 px-5 py-3 bg-white/[0.02] border-b border-white/[0.04]">
          <ToggleButton
            label="Circle"
            active={showCircle}
            color="#4CADE8"
            onClick={() => setShowCircle((v) => !v)}
          />
          <ToggleButton
            label="Radius"
            active={showRadius}
            color="#C9A84C"
            onClick={() => setShowRadius((v) => !v)}
          />
          <ToggleButton
            label="Grid"
            active={showGrid}
            color="#9066EE"
            onClick={() => setShowGrid((v) => !v)}
          />

          <div className="ml-auto text-[0.7rem] text-muted">
            <span className="text-blue-accent font-bold mr-1">Equation:</span>
            <InlineMath text={`$|z - (${centerLabel})| = ${R}$`} />
          </div>
        </div>

        {/* ── Chart ── */}
        <div className="px-2 md:px-4 py-4">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-auto cursor-crosshair select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHover(null)}
            role="img"
            aria-label="Circle locus graph"
          >
            <defs>
              <linearGradient id="circle-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6AC9E8" />
                <stop offset="100%" stopColor="#2D8FBE" />
              </linearGradient>
              <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Grid */}
            {showGrid &&
              gridX.map((gx) => (
                <line
                  key={`gx-${gx}`}
                  x1={toPxX(gx)}
                  y1={PAD}
                  x2={toPxX(gx)}
                  y2={H - PAD}
                  stroke="rgba(255,255,255,0.05)"
                  strokeDasharray="2 4"
                />
              ))}
            {showGrid &&
              gridY.map((gy) => (
                <line
                  key={`gy-${gy}`}
                  x1={PAD}
                  y1={toPxY(gy)}
                  x2={W - PAD}
                  y2={toPxY(gy)}
                  stroke="rgba(255,255,255,0.05)"
                  strokeDasharray="2 4"
                />
              ))}

            {/* Axes */}
            <line
              x1={PAD}
              y1={toPxY(0)}
              x2={W - PAD}
              y2={toPxY(0)}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth={1.2}
            />
            <line
              x1={toPxX(0)}
              y1={PAD}
              x2={toPxX(0)}
              y2={H - PAD}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth={1.2}
            />

            {/* Axis ticks and labels */}
            {gridX
              .filter((g) => g !== 0 && g >= xMin + 1 && g <= xMax - 1)
              .map((gx) => (
                <g key={`tx-${gx}`}>
                  <line
                    x1={toPxX(gx)}
                    y1={toPxY(0) - 4}
                    x2={toPxX(gx)}
                    y2={toPxY(0) + 4}
                    stroke="rgba(255,255,255,0.45)"
                  />
                  <text
                    x={toPxX(gx)}
                    y={toPxY(0) + 16}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.55)"
                    fontSize="10"
                  >
                    {gx}
                  </text>
                </g>
              ))}
            {gridY
              .filter((g) => g !== 0 && g >= yMin + 1 && g <= yMax - 1)
              .map((gy) => (
                <g key={`ty-${gy}`}>
                  <line
                    x1={toPxX(0) - 4}
                    y1={toPxY(gy)}
                    x2={toPxX(0) + 4}
                    y2={toPxY(gy)}
                    stroke="rgba(255,255,255,0.45)"
                  />
                  <text
                    x={toPxX(0) - 8}
                    y={toPxY(gy) + 3}
                    textAnchor="end"
                    fill="rgba(255,255,255,0.55)"
                    fontSize="10"
                  >
                    {gy}
                  </text>
                </g>
              ))}

            {/* Axis labels */}
            <text x={W - PAD + 4} y={toPxY(0) + 4} fill="#C9A84C" fontSize="12" fontWeight="bold">
              x
            </text>
            <text
              x={toPxX(0) - 4}
              y={PAD - 8}
              fill="#C9A84C"
              fontSize="12"
              fontWeight="bold"
              textAnchor="end"
            >
              y
            </text>

            {/* Circle */}
            {showCircle && (
              <motion.circle
                cx={toPxX(cx)}
                cy={toPxY(cy)}
                r={Math.abs(toPxX(cx + R) - toPxX(cx))}
                fill="none"
                stroke="url(#circle-grad)"
                strokeWidth={3}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.0, ease: 'easeOut' }}
                style={{ filter: 'drop-shadow(0 0 6px rgba(76,173,232,0.55))' }}
              />
            )}

            {/* Radius arrow */}
            {showCircle && showRadius && (
              <>
                <motion.line
                  x1={toPxX(cx)}
                  y1={toPxY(cy)}
                  x2={toPxX(cx + R)}
                  y2={toPxY(cy)}
                  stroke="#E5C76B"
                  strokeWidth={2}
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                <motion.text
                  x={(toPxX(cx) + toPxX(cx + R)) / 2}
                  y={toPxY(cy) - 8}
                  textAnchor="middle"
                  fill="#E5C76B"
                  fontSize="13"
                  fontWeight="bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  style={{ filter: 'drop-shadow(0 0 4px rgba(201,168,76,0.7))' }}
                >
                  R = {R}
                </motion.text>
              </>
            )}

            {/* Center Ω */}
            <motion.circle
              cx={toPxX(cx)}
              cy={toPxY(cy)}
              r={14}
              fill="url(#center-glow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            <motion.circle
              cx={toPxX(cx)}
              cy={toPxY(cy)}
              r={4.5}
              fill="#fff"
              stroke="#4CADE8"
              strokeWidth={1.6}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 180 }}
            />
            <text
              x={toPxX(cx) + 10}
              y={toPxY(cy) - 8}
              fill="#ffffff"
              fontSize="12"
              fontWeight="bold"
              opacity={0.9}
            >
              Ω({centerLabel})
            </text>

            {/* Hover marker */}
            {hover && hoverInfo && (
              <>
                <circle
                  cx={toPxX(hover.x)}
                  cy={toPxY(hover.y)}
                  r={6}
                  fill={hoverInfo.on ? '#4CE87C' : '#9066EE'}
                  fillOpacity={0.2}
                  stroke={hoverInfo.on ? '#4CE87C' : '#9066EE'}
                  strokeWidth={1.4}
                />
                <circle
                  cx={toPxX(hover.x)}
                  cy={toPxY(hover.y)}
                  r={2}
                  fill={hoverInfo.on ? '#4CE87C' : '#9066EE'}
                />
              </>
            )}
          </svg>

          {/* Hover readout */}
          <div className="px-4 pt-2 pb-1 min-h-[2.2rem] flex items-center gap-4 text-[0.72rem]">
            {hover && hoverInfo ? (
              <>
                <span className="text-muted">
                  <span className="text-blue-accent font-bold mr-1">M =</span>
                  <span className="font-mono text-foreground">
                    ({hover.x.toFixed(2)}, {hover.y.toFixed(2)})
                  </span>
                </span>
                <span className="text-muted">
                  <span className="text-blue-accent font-bold mr-1">|MΩ| =</span>
                  <span className="font-mono text-foreground">{hoverInfo.distance.toFixed(2)}</span>
                </span>
                <span
                  className="ml-auto px-2 py-0.5 rounded-full border font-bold tracking-wider text-[0.66rem] uppercase"
                  style={{
                    background: hoverInfo.on ? '#4CE87C22' : '#9066EE22',
                    borderColor: hoverInfo.on ? '#4CE87C55' : '#9066EE55',
                    color: hoverInfo.on ? '#4CE87C' : '#9066EE',
                  }}
                >
                  {hoverInfo.on ? 'on the circle' : 'off the circle'}
                </span>
              </>
            ) : (
              <span className="text-muted italic">
                Move the cursor to test any point against the circle equation.
              </span>
            )}
          </div>
        </div>

        {/* ── Takeaways ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-5 py-5 border-t border-white/[0.04] bg-white/[0.015]">
          <Takeaway
            icon={<Target size={14} />}
            color="#4CADE8"
            title="Reading the equation"
            body={`The form $|z - z_0| = R$ describes a circle of center $\\Omega(z_0)$ and radius $R$. Always rewrite the equation to expose this canonical form.`}
          />
          <Takeaway
            icon={<Compass size={14} />}
            color="#C9A84C"
            title="In this case"
            body={`Center $\\Omega(${centerLabel})$ and radius $R = ${R}$. Every point $M$ on the circle satisfies $|M\\Omega| = ${R}$.`}
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
        style={{ textWrap: 'pretty', wordSpacing: '0.01em', hyphens: 'auto' }}
      >
        <InlineMath text={body} />
      </p>
    </div>
  )
}
