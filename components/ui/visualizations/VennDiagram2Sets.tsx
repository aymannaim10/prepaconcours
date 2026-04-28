'use client'

import { motion } from 'framer-motion'
import { Sigma, Sparkles, Target } from 'lucide-react'
import InlineMath from '../InlineMath'

// ─────────────────────────────────────────────────────────────
// Two-set Venn diagram for inclusion-exclusion problems.
// Shows P(A only), P(A ∩ B), P(B only), and the outside complement.
// ─────────────────────────────────────────────────────────────

const W = 640
const H = 380

export default function VennDiagram2Sets({
  pA,
  pB,
  pAandB,
  labelA = 'A',
  labelB = 'B',
  title,
  description,
}: {
  pA: number
  pB: number
  pAandB: number
  labelA?: string
  labelB?: string
  title?: string
  description?: string
}) {
  const pAonly = pA - pAandB
  const pBonly = pB - pAandB
  const pAorB = pA + pB - pAandB
  const pOutside = Math.max(0, 1 - pAorB)

  const fmt = (v: number) => v.toFixed(2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl border overflow-hidden"
      style={{ borderColor: 'rgba(76,232,124,0.25)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'linear-gradient(135deg, rgba(76,232,124,0.10), transparent 45%, rgba(76,173,232,0.08) 85%)',
        }}
      />

      <div className="relative bg-gradient-to-br from-[#0c0a08] via-[#0f0d09] to-[#0a0807]">
        {/* ── Header ── */}
        <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-9 h-9 rounded-lg border flex items-center justify-center shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(76,232,124,0.25), rgba(76,232,124,0.05))',
                borderColor: 'rgba(76,232,124,0.30)',
              }}
            >
              <Sigma size={16} style={{ color: '#4CE87C' }} />
            </div>
            <div className="min-w-0">
              <h4 className="text-foreground font-display font-bold text-sm leading-tight truncate">
                {title ?? `Venn diagram — events ${labelA} and ${labelB}`}
              </h4>
              <p className="text-[0.7rem] text-muted leading-relaxed">
                {description ?? `Inclusion-exclusion: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).`}
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
            style={{ background: 'rgba(76,232,124,0.10)', borderColor: 'rgba(76,232,124,0.25)' }}
          >
            <Sparkles size={11} style={{ color: '#4CE87C' }} />
            <span className="text-[0.68rem] font-bold tracking-wider uppercase" style={{ color: '#4CE87C' }}>
              Probability
            </span>
          </div>
        </div>

        {/* ── Diagram ── */}
        <div className="px-2 md:px-4 py-4">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto select-none" role="img" aria-label="Venn diagram">
            <defs>
              <radialGradient id="venn-A-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4CADE8" stopOpacity="0.45" />
                <stop offset="80%" stopColor="#4CADE8" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#4CADE8" stopOpacity="0.05" />
              </radialGradient>
              <radialGradient id="venn-B-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.45" />
                <stop offset="80%" stopColor="#C9A84C" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.05" />
              </radialGradient>
            </defs>

            {/* Universe rectangle */}
            <rect
              x={20}
              y={20}
              width={W - 40}
              height={H - 40}
              rx={12}
              fill="rgba(255,255,255,0.02)"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth={1.2}
              strokeDasharray="6 4"
            />
            <text x={W - 32} y={42} textAnchor="end" fill="rgba(255,255,255,0.55)" fontSize="11" fontStyle="italic">
              Ω (universe)
            </text>

            {/* Outside-region probability */}
            <text x={42} y={H - 32} fill="rgba(255,255,255,0.45)" fontSize="11">
              P(complement) = {fmt(pOutside)}
            </text>

            {/* Circle A — left */}
            <motion.circle
              cx={W / 2 - 70}
              cy={H / 2}
              r={120}
              fill="url(#venn-A-grad)"
              stroke="#4CADE8"
              strokeWidth={2}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ filter: 'drop-shadow(0 0 12px rgba(76,173,232,0.30))' }}
            />
            {/* Circle B — right */}
            <motion.circle
              cx={W / 2 + 70}
              cy={H / 2}
              r={120}
              fill="url(#venn-B-grad)"
              stroke="#C9A84C"
              strokeWidth={2}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.30))' }}
            />

            {/* Region labels */}
            {/* A only */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <text x={W / 2 - 130} y={H / 2 - 8} textAnchor="middle" fill="#6AC9E8" fontSize="13" fontWeight="bold">
                {labelA} only
              </text>
              <text x={W / 2 - 130} y={H / 2 + 14} textAnchor="middle" fill="#fff" fontSize="15" fontFamily="monospace" fontWeight="bold">
                {fmt(pAonly)}
              </text>
            </motion.g>
            {/* Intersection */}
            <motion.g
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, type: 'spring', stiffness: 180 }}
            >
              <text x={W / 2} y={H / 2 - 8} textAnchor="middle" fill="#4CE87C" fontSize="13" fontWeight="bold">
                {labelA} ∩ {labelB}
              </text>
              <text x={W / 2} y={H / 2 + 14} textAnchor="middle" fill="#4CE87C" fontSize="17" fontFamily="monospace" fontWeight="bold">
                {fmt(pAandB)}
              </text>
            </motion.g>
            {/* B only */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <text x={W / 2 + 130} y={H / 2 - 8} textAnchor="middle" fill="#E5C76B" fontSize="13" fontWeight="bold">
                {labelB} only
              </text>
              <text x={W / 2 + 130} y={H / 2 + 14} textAnchor="middle" fill="#fff" fontSize="15" fontFamily="monospace" fontWeight="bold">
                {fmt(pBonly)}
              </text>
            </motion.g>

            {/* Big circle labels at top */}
            <text x={W / 2 - 140} y={H / 2 - 130} textAnchor="middle" fill="#4CADE8" fontSize="22" fontWeight="bold" fontFamily="serif">
              {labelA}
            </text>
            <text x={W / 2 + 140} y={H / 2 - 130} textAnchor="middle" fill="#C9A84C" fontSize="22" fontWeight="bold" fontFamily="serif">
              {labelB}
            </text>
          </svg>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-5 py-4 border-t border-white/[0.04]">
          <StatCard label={`P(${labelA})`} value={fmt(pA)} color="#4CADE8" />
          <StatCard label={`P(${labelB})`} value={fmt(pB)} color="#C9A84C" />
          <StatCard label={`P(${labelA} ∩ ${labelB})`} value={fmt(pAandB)} color="#4CE87C" highlight />
          <StatCard label={`P(${labelA} ∪ ${labelB})`} value={fmt(pAorB)} color="#9066EE" />
        </div>

        {/* ── Takeaway ── */}
        <div className="px-5 pb-5 pt-1 border-t border-white/[0.04] bg-white/[0.015]">
          <Takeaway
            icon={<Target size={14} />}
            color="#4CE87C"
            title="Inclusion-exclusion"
            body={`$P(${labelA} \\cup ${labelB}) = P(${labelA}) + P(${labelB}) - P(${labelA} \\cap ${labelB})$. Solving for the intersection: $P(${labelA} \\cap ${labelB}) = ${fmt(pA)} + ${fmt(pB)} - ${fmt(pAorB)} = ${fmt(pAandB)}$.`}
          />
        </div>
      </div>
    </motion.div>
  )
}

function StatCard({ label, value, color, highlight = false }: { label: string; value: string; color: string; highlight?: boolean }) {
  return (
    <div
      className="relative rounded-xl p-3 border overflow-hidden"
      style={{
        background: highlight
          ? `linear-gradient(160deg, ${color}25, ${color}10 80%)`
          : `linear-gradient(160deg, ${color}10, ${color}03 80%)`,
        borderColor: `${color}${highlight ? '55' : '33'}`,
        boxShadow: highlight ? `0 0 16px ${color}25` : 'none',
      }}
    >
      <div
        className="text-[0.62rem] font-extrabold tracking-[0.14em] uppercase mb-1"
        style={{ color }}
      >
        {label}
      </div>
      <div className="font-mono text-base font-bold text-foreground">{value}</div>
    </div>
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
      className="relative rounded-xl p-4 border overflow-hidden mt-3"
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
