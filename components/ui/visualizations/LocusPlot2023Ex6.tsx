'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Compass, Sparkles, Target, Triangle } from 'lucide-react'
import InlineMath from '../InlineMath'

// ── Geometry helpers ─────────────────────────────────────────
// Logical coordinate range
const X_MIN = -4
const X_MAX = 4
const Y_MIN = -3
const Y_MAX = 3

// SVG viewport
const W = 640
const H = 440
const PAD = 36

function toPxX(x: number): number {
  return PAD + ((x - X_MIN) / (X_MAX - X_MIN)) * (W - 2 * PAD)
}
function toPxY(y: number): number {
  // SVG y goes down, so flip
  return PAD + ((Y_MAX - y) / (Y_MAX - Y_MIN)) * (H - 2 * PAD)
}

function fromPxX(px: number): number {
  return X_MIN + ((px - PAD) / (W - 2 * PAD)) * (X_MAX - X_MIN)
}
function fromPxY(py: number): number {
  return Y_MAX - ((py - PAD) / (H - 2 * PAD)) * (Y_MAX - Y_MIN)
}

export default function LocusPlot2023Ex6({
  title = 'Locus of M : z² − 2i is purely imaginary',
  description,
}: {
  title?: string
  description?: string
}) {
  const [showDiag1, setShowDiag1] = useState<boolean>(true)
  const [showDiag2, setShowDiag2] = useState<boolean>(true)
  const [showGrid, setShowGrid] = useState<boolean>(true)
  const [hover, setHover] = useState<{ x: number; y: number } | null>(null)

  // Test of points against the locus (x² − y² = 0)
  const hoverInfo = useMemo(() => {
    if (!hover) return null
    const val = hover.x * hover.x - hover.y * hover.y
    return { val, on: Math.abs(val) < 0.05 }
  }, [hover])

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

  // Grid lines
  const gridX: number[] = []
  for (let i = Math.ceil(X_MIN); i <= Math.floor(X_MAX); i++) gridX.push(i)
  const gridY: number[] = []
  for (let i = Math.ceil(Y_MIN); i <= Math.floor(Y_MAX); i++) gridY.push(i)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl border border-gold/20 overflow-hidden"
    >
      {/* ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'linear-gradient(135deg, rgba(201,168,76,0.08), transparent 45%, rgba(76,232,192,0.06) 85%)',
        }}
      />

      <div className="relative bg-gradient-to-br from-[#0c0a08] via-[#0f0d09] to-[#0a0807]">
        {/* ── Header ── */}
        <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/30 flex items-center justify-center shrink-0">
              <Compass size={16} className="text-gold" />
            </div>
            <div className="min-w-0">
              <h4 className="text-foreground font-display font-bold text-sm leading-tight truncate">
                {title}
              </h4>
              <p className="text-[0.7rem] text-muted leading-relaxed">
                {description ?? 'Interactive locus — hover to test any point against x² − y² = 0.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/25">
            <Sparkles size={11} className="text-gold" />
            <span className="text-[0.68rem] text-gold font-bold tracking-wider uppercase">
              Exercise 3 · Q6
            </span>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center flex-wrap gap-3 px-5 py-3 bg-white/[0.02] border-b border-white/[0.04]">
          <ToggleButton
            label="y = x"
            active={showDiag1}
            color="#C9A84C"
            onClick={() => setShowDiag1((v) => !v)}
          />
          <ToggleButton
            label="y = −x"
            active={showDiag2}
            color="#4CE8C0"
            onClick={() => setShowDiag2((v) => !v)}
          />
          <ToggleButton
            label="Grid"
            active={showGrid}
            color="#9066EE"
            onClick={() => setShowGrid((v) => !v)}
          />

          <div className="ml-auto text-[0.7rem] text-muted">
            <span className="text-gold font-bold mr-1">Rule:</span>
            <InlineMath text={`$z' \\in i\\mathbb{R} \\iff x^2 - y^2 = 0$`} />
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
            aria-label="Locus graph"
          >
            <defs>
              <linearGradient id="diag1-grad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#E5C76B" />
                <stop offset="100%" stopColor="#C9A84C" />
              </linearGradient>
              <linearGradient id="diag2-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4CE8C0" />
                <stop offset="100%" stopColor="#2DB89A" />
              </linearGradient>
              <radialGradient id="origin-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
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
              .filter((g) => g !== 0)
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
              .filter((g) => g !== 0)
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
            <text x={toPxX(0) - 4} y={PAD - 8} fill="#C9A84C" fontSize="12" fontWeight="bold" textAnchor="end">
              y
            </text>

            {/* Line 1: y = x */}
            {showDiag1 && (
              <>
                <motion.line
                  x1={toPxX(X_MIN)}
                  y1={toPxY(X_MIN)}
                  x2={toPxX(X_MAX)}
                  y2={toPxY(X_MAX)}
                  stroke="url(#diag1-grad)"
                  strokeWidth={3}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  style={{ filter: 'drop-shadow(0 0 6px rgba(201,168,76,0.55))' }}
                />
                <text
                  x={toPxX(2.6)}
                  y={toPxY(2.6) - 10}
                  fill="#E5C76B"
                  fontSize="13"
                  fontWeight="bold"
                  style={{ filter: 'drop-shadow(0 0 4px rgba(201,168,76,0.7))' }}
                >
                  y = x
                </text>
              </>
            )}

            {/* Line 2: y = -x */}
            {showDiag2 && (
              <>
                <motion.line
                  x1={toPxX(X_MIN)}
                  y1={toPxY(-X_MIN)}
                  x2={toPxX(X_MAX)}
                  y2={toPxY(-X_MAX)}
                  stroke="url(#diag2-grad)"
                  strokeWidth={3}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
                  style={{ filter: 'drop-shadow(0 0 6px rgba(76,232,192,0.5))' }}
                />
                <text
                  x={toPxX(2.6)}
                  y={toPxY(-2.6) - 10}
                  fill="#4CE8C0"
                  fontSize="13"
                  fontWeight="bold"
                  style={{ filter: 'drop-shadow(0 0 4px rgba(76,232,192,0.7))' }}
                >
                  y = −x
                </text>
              </>
            )}

            {/* Right-angle marker at origin (10x10 square formed by bisectors of the diagonals) */}
            {showDiag1 && showDiag2 && (
              <motion.g
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <polyline
                  points={`
                    ${toPxX(0.4)},${toPxY(0.4)}
                    ${toPxX(0.565)},${toPxY(0)}
                    ${toPxX(0.4)},${toPxY(-0.4)}
                  `}
                  fill="none"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth={1.3}
                />
              </motion.g>
            )}

            {/* Origin highlight */}
            <motion.circle
              cx={toPxX(0)}
              cy={toPxY(0)}
              r={14}
              fill="url(#origin-glow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            />
            <motion.circle
              cx={toPxX(0)}
              cy={toPxY(0)}
              r={4.5}
              fill="#fff"
              stroke="#C9A84C"
              strokeWidth={1.5}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: 'spring', stiffness: 180 }}
            />
            <text
              x={toPxX(0) + 10}
              y={toPxY(0) - 10}
              fill="#ffffff"
              fontSize="11"
              fontWeight="bold"
              opacity={0.85}
            >
              O (0, 0)
            </text>

            {/* Hover marker */}
            {hover && hoverInfo && (
              <>
                <circle
                  cx={toPxX(hover.x)}
                  cy={toPxY(hover.y)}
                  r={6}
                  fill={hoverInfo.on ? '#4CE87C' : '#4CADE8'}
                  fillOpacity={0.2}
                  stroke={hoverInfo.on ? '#4CE87C' : '#4CADE8'}
                  strokeWidth={1.4}
                />
                <circle
                  cx={toPxX(hover.x)}
                  cy={toPxY(hover.y)}
                  r={2}
                  fill={hoverInfo.on ? '#4CE87C' : '#4CADE8'}
                />
              </>
            )}
          </svg>

          {/* Hover readout */}
          <div className="px-4 pt-2 pb-1 min-h-[2.2rem] flex items-center gap-4 text-[0.72rem]">
            {hover && hoverInfo ? (
              <>
                <span className="text-muted">
                  <span className="text-gold font-bold mr-1">M =</span>
                  <span className="font-mono text-foreground">
                    ({hover.x.toFixed(2)}, {hover.y.toFixed(2)})
                  </span>
                </span>
                <span className="text-muted">
                  <span className="text-gold font-bold mr-1">x² − y² =</span>
                  <span className="font-mono text-foreground">{hoverInfo.val.toFixed(2)}</span>
                </span>
                <span
                  className="ml-auto px-2 py-0.5 rounded-full border font-bold tracking-wider text-[0.66rem] uppercase"
                  style={{
                    background: hoverInfo.on ? '#4CE87C22' : '#4CADE822',
                    borderColor: hoverInfo.on ? '#4CE87C55' : '#4CADE855',
                    color: hoverInfo.on ? '#4CE87C' : '#4CADE8',
                  }}
                >
                  {hoverInfo.on ? 'on the locus' : 'off the locus'}
                </span>
              </>
            ) : (
              <span className="text-muted italic">
                Move the cursor over the graph to test a point against the locus equation.
              </span>
            )}
          </div>
        </div>

        {/* ── Takeaways ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-5 py-5 border-t border-white/[0.04] bg-white/[0.015]">
          <Takeaway
            icon={<Target size={14} />}
            color="#C9A84C"
            title="Algebraic condition"
            body="$z' = (x^2 - y^2) + i(2xy - 2)$. For $z' \\in i\\mathbb{R}$ we need $\\operatorname{Re}(z') = 0$, i.e. $x^2 - y^2 = 0$."
          />
          <Takeaway
            icon={<Triangle size={14} />}
            color="#4CE8C0"
            title="Factoring"
            body="$x^2 - y^2 = (x-y)(x+y) = 0$, so $y = x$ OR $y = -x$ — two straight lines through the origin."
          />
          <Takeaway
            icon={<Compass size={14} />}
            color="#9066EE"
            title="Perpendicularity"
            body="Slopes $+1$ and $-1$ satisfy $1 \\times (-1) = -1$, so the two lines are perpendicular. Answer: B."
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
        <span className="takeaway-math">
          <InlineMath text={body} />
        </span>
      </p>
    </div>
  )
}
