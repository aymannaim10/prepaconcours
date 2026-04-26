'use client'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CornerDownRight,
  GitBranch,
  Minus as MinusIcon,
  MoveDown,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import MathRenderer from './MathRenderer'

// ─────────────────────────────────────────────────────────────
// Visual decision tree for "branches infinies" (asymptotic behavior)
// Polished flowchart inspired by the classical Moroccan math course.
// ─────────────────────────────────────────────────────────────

const COLORS = {
  gold: '#C9A84C',
  goldLight: '#E5C76B',
  ok: '#4CE87C',
  warn: '#F5A623',
  info: '#4CADE8',
  violet: '#9066EE',
}

// ── Tiny building blocks ─────────────────────────────────────

function VerticalLine({ height = 28 }: { height?: number }) {
  return (
    <div className="relative mx-auto" style={{ height, width: 2 }}>
      <div className="absolute inset-0 bg-gradient-to-b from-gold/60 via-gold/30 to-gold/10 rounded-full" />
      <div className="absolute -left-px top-0 w-1 h-1 rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,76,0.9)]" />
    </div>
  )
}

function DownArrow() {
  return (
    <div className="flex flex-col items-center">
      <VerticalLine />
      <MoveDown size={14} className="text-gold -mt-2 drop-shadow-[0_0_6px_rgba(201,168,76,0.7)]" />
    </div>
  )
}

function DecisionChip({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="relative inline-flex"
    >
      <span className="absolute inset-0 rounded-full bg-gold/30 blur-xl" />
      <span className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold/40 bg-gradient-to-br from-gold/25 via-gold/15 to-transparent text-gold font-display text-[0.75rem] font-bold tracking-[0.18em] uppercase shadow-[0_0_24px_rgba(201,168,76,0.22),inset_0_1px_0_rgba(255,255,255,0.06)]">
        <Sparkles size={12} className="opacity-80" />
        {children}
        <Sparkles size={12} className="opacity-80" />
      </span>
    </motion.div>
  )
}

/** Test node: pure KaTeX formula (these are short, safe on one line) */
function TestNode({ latex, delay = 0 }: { latex: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className="group relative"
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-gold/25 via-transparent to-gold/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
      <div className="relative rounded-xl px-4 py-3 border border-white/10 bg-gradient-to-br from-surface/80 to-surface/50 backdrop-blur-sm text-foreground shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex items-start gap-2">
          <GitBranch size={12} className="text-gold/70 mt-[6px] shrink-0" />
          <div className="flex-1 min-w-0 overflow-x-auto">
            <MathRenderer latex={latex} block />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Conclusion: plain-HTML sentence (wraps naturally) + inline math chunks
 * rendered as small isolated KaTeX spans. The `parts` array mixes strings
 * (wrapping text) and `{ math: '...' }` pieces (non-breaking KaTeX).
 */
type Part = string | { math: string }

function ConclusionSentence({ parts }: { parts: Part[] }) {
  return (
    <p className="text-[0.84rem] leading-relaxed text-foreground break-words">
      {parts.map((p, i) =>
        typeof p === 'string' ? (
          <span key={i}>{p}</span>
        ) : (
          <span key={i} className="inline-block align-middle mx-[1px]">
            <MathRenderer latex={p.math} />
          </span>
        )
      )}
    </p>
  )
}

function Conclusion({
  parts,
  tone = 'ok',
  icon,
  label,
  delay = 0,
}: {
  parts: Part[]
  tone?: 'ok' | 'warn' | 'info' | 'violet'
  icon?: React.ReactNode
  label: string
  delay?: number
}) {
  const color =
    tone === 'warn' ? COLORS.warn :
    tone === 'info' ? COLORS.info :
    tone === 'violet' ? COLORS.violet :
    COLORS.ok

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative group"
    >
      <div
        className="absolute -inset-[2px] rounded-xl opacity-50 group-hover:opacity-80 blur-md transition-opacity duration-300"
        style={{ background: `radial-gradient(ellipse at center, ${color}40, transparent 70%)` }}
      />
      <div
        className="relative rounded-xl p-[1px] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color}60, ${color}10 50%, ${color}40)`,
        }}
      >
        <div
          className="rounded-[11px] px-4 py-3 backdrop-blur-sm"
          style={{
            background: `linear-gradient(180deg, ${color}18, ${color}06)`,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
              style={{ background: `${color}25`, color }}
            >
              {icon ?? <Target size={11} />}
            </div>
            <span
              className="text-[0.65rem] font-extrabold tracking-[0.14em] uppercase leading-tight"
              style={{ color }}
            >
              {label}
            </span>
          </div>
          <ConclusionSentence parts={parts} />
        </div>
      </div>
    </motion.div>
  )
}

function BranchLabel({ children, side = 'left' }: { children: string; side?: 'left' | 'center' | 'right' }) {
  return (
    <div
      className={`flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-gold-light/80 ${
        side === 'center' ? 'justify-center' : side === 'right' ? 'justify-end' : 'justify-start'
      }`}
    >
      <CornerDownRight size={11} className="text-gold/60 shrink-0" />
      <span className="break-words">{children}</span>
    </div>
  )
}

function Branch({
  children,
  accent = COLORS.gold,
  delay = 0,
}: {
  children: React.ReactNode
  accent?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className="flex flex-col items-stretch gap-3 relative min-w-0"
    >
      <div
        className="hidden md:block absolute -left-3 top-0 bottom-0 w-px opacity-30"
        style={{ background: `linear-gradient(180deg, transparent, ${accent}, transparent)` }}
      />
      {children}
    </motion.div>
  )
}

// ── Main component ──────────────────────────────────────────

export default function AsymptoticTree() {
  return (
    <div className="relative rounded-3xl border border-gold/20 p-[1px] overflow-hidden">
      <div
        className="absolute inset-0 rounded-3xl opacity-60 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(201,168,76,0.15), transparent 40%, rgba(76,173,232,0.08) 70%, rgba(201,168,76,0.2))',
        }}
      />

      <div className="relative rounded-[23px] bg-gradient-to-br from-[#0c0a08] via-[#0f0d09] to-[#0a0807] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-blue-accent/10 blur-3xl pointer-events-none" />

        <div className="relative p-6 md:p-10 space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                <TrendingUp size={18} className="text-gold" />
              </div>
              <div>
                <h4 className="text-foreground font-display font-bold text-base leading-tight">
                  Branches Infinies
                </h4>
                <p className="text-[0.72rem] text-muted tracking-wide">
                  Decision flowchart — asymptote vs parabolic branch
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/25">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[0.7rem] text-gold font-bold tracking-wider uppercase">
                Exercise 7
              </span>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {/* ─── ROOT ─── */}
          <div className="flex flex-col items-center">
            <DecisionChip>If …</DecisionChip>
            <div className="mt-2">
              <DownArrow />
            </div>
          </div>

          {/* LEVEL 1 */}
          <div className="relative">
            <div className="hidden md:block absolute top-0 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0" />
            <div className="hidden md:flex absolute top-0 left-[16.66%] right-[16.66%] justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-1.5 h-1.5 -mt-[3px] rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
              {/* Horizontal asymptote */}
              <Branch accent={COLORS.ok} delay={0.05}>
                <BranchLabel>Case 1 — finite limit</BranchLabel>
                <TestNode latex={`\\lim_{x\\to\\pm\\infty} f(x) = b`} delay={0.1} />
                <DownArrow />
                <Conclusion
                  tone="ok"
                  label="Horizontal asymptote"
                  icon={<MinusIcon size={12} />}
                  parts={[
                    'The curve ',
                    { math: '(C)' },
                    ' admits a horizontal asymptote with equation ',
                    { math: 'y = b' },
                    '.',
                  ]}
                  delay={0.18}
                />
              </Branch>

              {/* Infinite limit at ±∞ */}
              <Branch accent={COLORS.gold} delay={0.1}>
                <BranchLabel side="center">Case 2 — infinite limit</BranchLabel>
                <TestNode latex={`\\lim_{x\\to\\pm\\infty} f(x) = \\pm\\infty`} delay={0.15} />
                <DownArrow />
                <TestNode
                  latex={`\\lim_{x\\to\\pm\\infty} \\dfrac{f(x)}{x}`}
                  delay={0.22}
                />
              </Branch>

              {/* Vertical asymptote */}
              <Branch accent={COLORS.violet} delay={0.15}>
                <BranchLabel side="right">Case 3 — blow-up at a</BranchLabel>
                <TestNode latex={`\\lim_{x\\to a} f(x) = \\pm\\infty`} delay={0.2} />
                <DownArrow />
                <Conclusion
                  tone="violet"
                  label="Vertical asymptote"
                  icon={<ArrowRight size={12} className="rotate-[-90deg]" />}
                  parts={[
                    'The curve ',
                    { math: '(C)' },
                    ' admits a vertical asymptote with equation ',
                    { math: 'x = a' },
                    '.',
                  ]}
                  delay={0.28}
                />
              </Branch>
            </div>
          </div>

          {/* Divider — LEVEL 2 */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <DecisionChip delay={0.25}>If …</DecisionChip>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-0 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0" />
            <div className="hidden md:flex absolute top-0 left-[16.66%] right-[16.66%] justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-1.5 h-1.5 -mt-[3px] rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
              {/* PB Oy */}
              <Branch accent={COLORS.info} delay={0.3}>
                <BranchLabel>Slope → ±∞</BranchLabel>
                <TestNode latex={`\\lim_{x\\to\\pm\\infty} \\dfrac{f(x)}{x} = \\pm\\infty`} delay={0.35} />
                <DownArrow />
                <Conclusion
                  tone="info"
                  label="Parabolic branch · Oy"
                  icon={<TrendingUp size={12} />}
                  parts={[
                    'The curve ',
                    { math: '(C)' },
                    ' has a parabolic branch in the direction of the ',
                    { math: 'y' },
                    '-axis ',
                    { math: '(Oy)' },
                    '.',
                  ]}
                  delay={0.42}
                />
              </Branch>

              {/* a ≠ 0 */}
              <Branch accent={COLORS.gold} delay={0.35}>
                <BranchLabel side="center">Slope → a ≠ 0</BranchLabel>
                <TestNode latex={`\\lim_{x\\to\\pm\\infty} \\dfrac{f(x)}{x} = a \\neq 0`} delay={0.4} />
                <DownArrow />
                <TestNode
                  latex={`\\lim_{x\\to\\pm\\infty} \\big(f(x) - ax\\big)`}
                  delay={0.48}
                />
              </Branch>

              {/* PB Ox */}
              <Branch accent={COLORS.info} delay={0.4}>
                <BranchLabel side="right">Slope → 0</BranchLabel>
                <TestNode latex={`\\lim_{x\\to\\pm\\infty} \\dfrac{f(x)}{x} = 0`} delay={0.45} />
                <DownArrow />
                <Conclusion
                  tone="info"
                  label="Parabolic branch · Ox"
                  icon={<TrendingUp size={12} className="rotate-90" />}
                  parts={[
                    'The curve ',
                    { math: '(C)' },
                    ' has a parabolic branch in the direction of the ',
                    { math: 'x' },
                    '-axis ',
                    { math: '(Ox)' },
                    '.',
                  ]}
                  delay={0.52}
                />
              </Branch>
            </div>
          </div>

          {/* Divider — LEVEL 3 */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <DecisionChip delay={0.55}>If …</DecisionChip>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-0 left-[25%] right-[25%] h-px bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0" />
            <div className="hidden md:flex absolute top-0 left-[25%] right-[25%] justify-between">
              {[0, 1].map((i) => (
                <div key={i} className="w-1.5 h-1.5 -mt-[3px] rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
              {/* PB along y = ax */}
              <Branch accent={COLORS.warn} delay={0.6}>
                <BranchLabel>Offset → ±∞</BranchLabel>
                <TestNode latex={`\\lim_{x\\to\\pm\\infty} \\big(f(x) - ax\\big) = \\pm\\infty`} delay={0.65} />
                <DownArrow />
                <Conclusion
                  tone="warn"
                  label="Parabolic branch · direction y = ax"
                  icon={<TrendingUp size={12} />}
                  parts={[
                    'The curve ',
                    { math: '(C)' },
                    ' has a parabolic branch in the direction of the line ',
                    { math: 'y = ax' },
                    '.',
                  ]}
                  delay={0.72}
                />
              </Branch>

              {/* Oblique asymptote */}
              <Branch accent={COLORS.ok} delay={0.65}>
                <BranchLabel side="right">Offset → b (finite)</BranchLabel>
                <TestNode latex={`\\lim_{x\\to\\pm\\infty} \\big(f(x) - ax\\big) = b`} delay={0.7} />
                <DownArrow />
                <Conclusion
                  tone="ok"
                  label="Oblique asymptote"
                  icon={<ArrowRight size={12} className="-rotate-45" />}
                  parts={[
                    'The curve ',
                    { math: '(C)' },
                    ' admits an oblique asymptote with equation ',
                    { math: 'y = ax + b' },
                    ' at ',
                    { math: '\\pm\\infty' },
                    '.',
                  ]}
                  delay={0.78}
                />
              </Branch>
            </div>
          </div>

          {/* PROPERTIES */}
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-accent/40" />
              <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold tracking-[0.18em] uppercase text-blue-accent">
                <Sparkles size={11} /> Equivalent Characterizations
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-accent/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Criterion 1 */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.85 }}
                className="relative rounded-xl p-[1px] overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.info}55, ${COLORS.info}10 60%, ${COLORS.info}40)`,
                }}
              >
                <div
                  className="rounded-[11px] px-4 py-4 backdrop-blur-sm"
                  style={{ background: `linear-gradient(180deg, ${COLORS.info}15, ${COLORS.info}05)` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: `${COLORS.info}25`, color: COLORS.info }}
                    >
                      <span className="text-[0.62rem] font-black">1</span>
                    </div>
                    <span
                      className="text-[0.65rem] font-extrabold tracking-[0.14em] uppercase"
                      style={{ color: COLORS.info }}
                    >
                      Criterion 1
                    </span>
                  </div>
                  <div className="overflow-x-auto mb-2">
                    <MathRenderer
                      latex={`\\lim_{x\\to\\pm\\infty} \\big[f(x) - (ax+b)\\big] = 0`}
                      block
                    />
                  </div>
                  <p className="text-[0.82rem] leading-relaxed text-foreground break-words">
                    <span className="text-blue-accent">⟹</span>{' '}
                    <span className="inline-block align-middle"><MathRenderer latex={`y = ax + b`} /></span>{' '}
                    is an oblique asymptote to{' '}
                    <span className="inline-block align-middle"><MathRenderer latex={`(C)`} /></span>{' '}
                    at{' '}
                    <span className="inline-block align-middle"><MathRenderer latex={`\\pm\\infty`} /></span>
                    .
                  </p>
                </div>
              </motion.div>

              {/* Criterion 2 */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="relative rounded-xl p-[1px] overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.info}55, ${COLORS.info}10 60%, ${COLORS.info}40)`,
                }}
              >
                <div
                  className="rounded-[11px] px-4 py-4 backdrop-blur-sm"
                  style={{ background: `linear-gradient(180deg, ${COLORS.info}15, ${COLORS.info}05)` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: `${COLORS.info}25`, color: COLORS.info }}
                    >
                      <span className="text-[0.62rem] font-black">2</span>
                    </div>
                    <span
                      className="text-[0.65rem] font-extrabold tracking-[0.14em] uppercase"
                      style={{ color: COLORS.info }}
                    >
                      Criterion 2
                    </span>
                  </div>
                  <div className="overflow-x-auto mb-2">
                    <MathRenderer
                      latex={`f(x) = ax + b + h(x), \\quad \\lim_{x\\to\\pm\\infty} h(x) = 0`}
                      block
                    />
                  </div>
                  <p className="text-[0.82rem] leading-relaxed text-foreground break-words">
                    <span className="text-blue-accent">⟹</span>{' '}
                    <span className="inline-block align-middle"><MathRenderer latex={`y = ax + b`} /></span>{' '}
                    is an oblique asymptote to{' '}
                    <span className="inline-block align-middle"><MathRenderer latex={`(C)`} /></span>
                    .
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-white/[0.05]">
            {[
              { c: COLORS.ok, label: 'Asymptote' },
              { c: COLORS.info, label: 'Parabolic branch (axis)' },
              { c: COLORS.warn, label: 'Parabolic branch (line)' },
              { c: COLORS.violet, label: 'Vertical' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-[0.7rem] text-muted">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: item.c, boxShadow: `0 0 8px ${item.c}80` }}
                />
                <span className="break-words">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
