'use client'

import { motion } from 'framer-motion'
import { Layers, Sparkles, Target, Equal } from 'lucide-react'
import InlineMath from '../InlineMath'

// ─────────────────────────────────────────────────────────────
// Generic probability decomposition: P(event) = Σ contributions.
// Renders a stacked horizontal bar with each contribution colored,
// plus a per-item table with explanation.
// ─────────────────────────────────────────────────────────────

const DEFAULT_COLORS = ['#4CADE8', '#C9A84C', '#9066EE', '#4CE87C', '#E89A4C', '#E84C4C']

export default function ProbabilityBreakdown({
  total,
  items,
  title,
  description,
}: {
  total: { label: string; value: string }
  items: { label: string; value: number; color?: string; explanation?: string }[]
  title?: string
  description?: string
}) {
  const sum = items.reduce((acc, it) => acc + it.value, 0)
  const itemsWithColor = items.map((it, i) => ({
    ...it,
    color: it.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl border overflow-hidden"
      style={{ borderColor: 'rgba(76,173,232,0.25)' }}
    >
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
            <div
              className="w-9 h-9 rounded-lg border flex items-center justify-center shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(76,173,232,0.25), rgba(76,173,232,0.05))',
                borderColor: 'rgba(76,173,232,0.30)',
              }}
            >
              <Layers size={16} className="text-blue-accent" />
            </div>
            <div className="min-w-0">
              <h4 className="text-foreground font-display font-bold text-sm leading-tight truncate">
                {title ?? 'Probability decomposition'}
              </h4>
              <p className="text-[0.7rem] text-muted leading-relaxed">
                {description ?? `${total.label} = ${total.value}, broken down by mutually exclusive events.`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-accent/10 border border-blue-accent/25">
            <Sparkles size={11} className="text-blue-accent" />
            <span className="text-[0.68rem] text-blue-accent font-bold tracking-wider uppercase">
              Σ events
            </span>
          </div>
        </div>

        {/* ── Total formula ── */}
        <div className="px-5 py-4 bg-white/[0.02] border-b border-white/[0.04] flex items-center gap-3 flex-wrap">
          <div
            className="px-3 py-1.5 rounded-lg border font-mono text-[0.85rem] font-bold"
            style={{
              background: 'rgba(76,173,232,0.10)',
              borderColor: 'rgba(76,173,232,0.30)',
              color: '#6AC9E8',
            }}
          >
            {total.label} = {total.value}
          </div>
          <Equal size={14} className="text-muted" />
          <div className="flex items-center gap-2 flex-wrap">
            {itemsWithColor.map((it, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[0.78rem] font-mono font-bold border"
                style={{
                  background: `${it.color}15`,
                  borderColor: `${it.color}40`,
                  color: it.color,
                }}
              >
                {it.label}
                {i < itemsWithColor.length - 1 ? '' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* ── Stacked bar ── */}
        <div className="px-5 py-5">
          <div className="text-[0.65rem] font-bold uppercase tracking-widest text-muted mb-2.5">
            Visual breakdown
          </div>
          <div className="relative h-12 rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.03]">
            {(() => {
              let cumLeft = 0
              return itemsWithColor.map((it, i) => {
                const widthPct = sum > 0 ? (it.value / Math.max(sum, 1)) * 100 : 0
                const left = cumLeft
                cumLeft += widthPct
                return (
                  <motion.div
                    key={i}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: `${widthPct}%`, opacity: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                    className="absolute top-0 bottom-0 flex items-center justify-center text-xs font-bold text-foreground"
                    style={{
                      left: `${left}%`,
                      background: `linear-gradient(180deg, ${it.color}88, ${it.color}55)`,
                      borderRight:
                        i < itemsWithColor.length - 1
                          ? '1px solid rgba(0,0,0,0.30)'
                          : 'none',
                      boxShadow: `inset 0 1px 0 ${it.color}aa`,
                    }}
                  >
                    {widthPct > 8 ? (
                      <span className="text-[0.72rem] font-mono" style={{ color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}>
                        {it.value.toFixed(2)}
                      </span>
                    ) : null}
                  </motion.div>
                )
              })
            })()}
          </div>
        </div>

        {/* ── Per-item table ── */}
        <div className="px-5 pb-5">
          <div className="text-[0.65rem] font-bold uppercase tracking-widest text-muted mb-2">
            Contributions
          </div>
          <div className="space-y-2">
            {itemsWithColor.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="grid grid-cols-[auto_1fr_auto] gap-3 items-center px-3 py-2 rounded-lg border bg-surface/40"
                style={{ borderColor: `${it.color}25` }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: it.color, boxShadow: `0 0 8px ${it.color}` }}
                />
                <div className="min-w-0">
                  <div
                    className="text-[0.78rem] font-bold"
                    style={{ color: it.color }}
                  >
                    {it.label}
                  </div>
                  {it.explanation ? (
                    <div className="text-[0.7rem] text-muted leading-snug mt-0.5">
                      <InlineMath text={it.explanation} />
                    </div>
                  ) : null}
                </div>
                <div className="font-mono text-sm font-bold text-foreground">{it.value.toFixed(4)}</div>
              </motion.div>
            ))}

            {/* Total row */}
            <div
              className="grid grid-cols-[auto_1fr_auto] gap-3 items-center px-3 py-2.5 rounded-lg border border-gold/40 mt-3"
              style={{ background: 'rgba(201,168,76,0.10)' }}
            >
              <Target size={13} className="text-gold shrink-0" />
              <div className="text-[0.78rem] font-bold text-gold uppercase tracking-wide">
                {total.label}
              </div>
              <div className="font-mono text-sm font-bold text-gold">{total.value}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
