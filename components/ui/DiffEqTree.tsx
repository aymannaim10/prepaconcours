'use client'
import { motion } from 'framer-motion'
import {
  CornerDownRight,
  GitBranch,
  Equal,
  MoveDown,
  Sparkles,
  Target,
  Sigma,
} from 'lucide-react'
import MathRenderer from './MathRenderer'

// ─────────────────────────────────────────────────────────────
// Visual decision tree for 2nd order linear homogeneous ODEs
// y'' + ay' + by = 0 — discriminant-based 3-case classifier
// Modelled on AsymptoticTree to keep visual language consistent.
// ─────────────────────────────────────────────────────────────

const COLORS = {
  gold: '#C9A84C',
  goldLight: '#E5C76B',
  ok: '#4CE87C',
  warn: '#F5A623',
  info: '#4CADE8',
  violet: '#9066EE',
}

// ── Building blocks ─────────────────────────────────────────

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

/** Cloud-styled node — used for the equation, the characteristic eq, and the discriminant. */
function CloudNode({
  latex,
  label,
  delay = 0,
  tone = 'gold',
}: {
  latex: string
  label?: string
  delay?: number
  tone?: 'gold' | 'info' | 'violet'
}) {
  const color =
    tone === 'info' ? COLORS.info : tone === 'violet' ? COLORS.violet : COLORS.gold
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className="relative inline-block"
    >
      {/* glow */}
      <div
        className="absolute -inset-3 rounded-[40%] blur-2xl opacity-40 pointer-events-none"
        style={{ background: color }}
      />
      {/* cloud body */}
      <div
        className="relative px-7 py-5 rounded-[36%] border-2 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        style={{
          background: `radial-gradient(ellipse at 30% 30%, ${color}25, ${color}08 60%, transparent 100%)`,
          borderColor: `${color}55`,
          borderStyle: 'solid',
        }}
      >
        <MathRenderer latex={latex} block />
      </div>
      {label ? (
        <span
          className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[0.7rem] font-bold tracking-wider uppercase"
          style={{ color }}
        >
          ({label})
        </span>
      ) : null}
    </motion.div>
  )
}

/** Boxed node for the input equation at the top */
function BoxedEquation({ latex, delay = 0 }: { latex: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative inline-block"
    >
      <div className="absolute -inset-2 rounded-2xl blur-xl opacity-50" style={{ background: COLORS.gold }} />
      <div
        className="relative px-8 py-4 rounded-2xl border-2 border-gold/60 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent shadow-[0_0_30px_rgba(201,168,76,0.18)]"
      >
        <MathRenderer latex={latex} block />
      </div>
    </motion.div>
  )
}

function DecisionChip({ label, color, delay = 0 }: { label: string; color: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="relative inline-flex"
    >
      <span className="absolute inset-0 rounded-full blur-xl opacity-40" style={{ background: color }} />
      <span
        className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full border font-display text-[0.75rem] font-bold tracking-[0.18em] uppercase"
        style={{
          color,
          background: `linear-gradient(135deg, ${color}25, ${color}10)`,
          borderColor: `${color}55`,
          boxShadow: `0 0 20px ${color}25, inset 0 1px 0 rgba(255,255,255,0.06)`,
        }}
      >
        <Sparkles size={11} className="opacity-80" />
        {label}
      </span>
    </motion.div>
  )
}

function CaseRow({
  delta,
  rootsLatex,
  rootsTitle,
  solutionLatex,
  color,
  delay = 0,
}: {
  delta: string
  rootsLatex: string
  rootsTitle: string
  solutionLatex: string
  color: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay }}
      className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-4 md:gap-6 items-center"
    >
      {/* Δ chip */}
      <div className="flex md:justify-start">
        <DecisionChip label={delta} color={color} delay={delay} />
      </div>

      {/* Roots panel */}
      <div className="relative">
        <div
          className="absolute -inset-px rounded-xl opacity-50 blur-md"
          style={{ background: `radial-gradient(ellipse at center, ${color}30, transparent 70%)` }}
        />
        <div
          className="relative rounded-xl p-[1px]"
          style={{ background: `linear-gradient(135deg, ${color}55, ${color}10 50%, ${color}40)` }}
        >
          <div
            className="rounded-[11px] px-4 py-3 backdrop-blur-sm"
            style={{ background: `linear-gradient(180deg, ${color}15, ${color}05)` }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <GitBranch size={11} style={{ color }} />
              <span
                className="text-[0.62rem] font-extrabold tracking-[0.14em] uppercase"
                style={{ color }}
              >
                {rootsTitle}
              </span>
            </div>
            <div className="overflow-x-auto">
              <MathRenderer latex={rootsLatex} block />
            </div>
          </div>
        </div>
      </div>

      {/* Solution panel */}
      <div className="relative">
        <div
          className="absolute -inset-px rounded-xl opacity-50 blur-md"
          style={{ background: `radial-gradient(ellipse at center, ${color}30, transparent 70%)` }}
        />
        <div
          className="relative rounded-xl p-[1px]"
          style={{ background: `linear-gradient(135deg, ${color}55, ${color}10 50%, ${color}40)` }}
        >
          <div
            className="rounded-[11px] px-4 py-3 backdrop-blur-sm"
            style={{ background: `linear-gradient(180deg, ${color}15, ${color}05)` }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Target size={11} style={{ color }} />
              <span
                className="text-[0.62rem] font-extrabold tracking-[0.14em] uppercase"
                style={{ color }}
              >
                General solution
              </span>
            </div>
            <div className="overflow-x-auto">
              <MathRenderer latex={solutionLatex} block />
            </div>
            <p className="mt-2 text-[0.7rem] text-muted leading-relaxed">
              <span className="font-semibold text-foreground">A</span> and <span className="font-semibold text-foreground">B</span> are arbitrary real constants.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Main component ──────────────────────────────────────────

export default function DiffEqTree() {
  return (
    <div className="relative rounded-3xl border border-gold/20 p-[1px] overflow-hidden">
      <div
        className="absolute inset-0 rounded-3xl opacity-60 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(201,168,76,0.15), transparent 40%, rgba(144,102,238,0.10) 70%, rgba(201,168,76,0.20))',
        }}
      />

      <div className="relative rounded-[23px] bg-gradient-to-br from-[#0c0a08] via-[#0f0d09] to-[#0a0807] overflow-hidden">
        {/* grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* ambient glows */}
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-purple-accent/10 blur-3xl pointer-events-none" style={{ background: '#9066EE15' }} />

        <div className="relative p-6 md:p-10 space-y-7">
          {/* ── Header ── */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-accent/30 to-purple-accent/10 border flex items-center justify-center shrink-0" style={{ borderColor: `${COLORS.violet}55`, background: `linear-gradient(135deg, ${COLORS.violet}30, ${COLORS.violet}10)` }}>
                <Sigma size={18} style={{ color: COLORS.violet }} />
              </div>
              <div>
                <h4 className="text-foreground font-display font-bold text-base leading-tight">
                  Linear ODE — 2nd order
                </h4>
                <p className="text-[0.72rem] text-muted tracking-wide">
                  Discriminant-based decision tree for $y'' + ay' + by = 0$
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
              style={{ background: `${COLORS.violet}10`, borderColor: `${COLORS.violet}40` }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: COLORS.violet }} />
              <span className="text-[0.7rem] font-bold tracking-wider uppercase" style={{ color: COLORS.violet }}>
                3 cases
              </span>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {/* ── ROOT EQUATION ── */}
          <div className="flex flex-col items-center">
            <BoxedEquation latex={`y'' + a\\,y' + b\\,y = 0`} delay={0} />
            <DownArrow />
            <CloudNode
              latex={`r^{2} + a\\,r + b = 0`}
              label="Équation caractéristique"
              delay={0.15}
            />
            <DownArrow />
            <CloudNode latex={`\\Delta = a^{2} - 4b`} delay={0.3} tone="info" />
          </div>

          {/* Branch indicator */}
          <div className="flex flex-col items-center pt-2">
            <div className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-muted flex items-center gap-2">
              <CornerDownRight size={11} className="text-gold/60" />
              Sign of <Equal size={11} className="opacity-60" /> Δ determines the case
            </div>
          </div>

          {/* ── 3 CASE ROWS ── */}
          <div className="space-y-5 pt-2">
            {/* Δ = 0 */}
            <CaseRow
              delta="Δ = 0"
              rootsTitle="One double real root"
              rootsLatex={`r = \\dfrac{-a}{2}`}
              solutionLatex={`y(x) = (A\\,x + B)\\,e^{r x}`}
              color={COLORS.ok}
              delay={0.45}
            />

            {/* Δ > 0 */}
            <CaseRow
              delta="Δ > 0"
              rootsTitle="Two distinct real roots"
              rootsLatex={`r_{1} = \\dfrac{-a - \\sqrt{\\Delta}}{2} \\;,\\; r_{2} = \\dfrac{-a + \\sqrt{\\Delta}}{2}`}
              solutionLatex={`y(x) = A\\,e^{r_{1}\\,x} + B\\,e^{r_{2}\\,x}`}
              color={COLORS.gold}
              delay={0.6}
            />

            {/* Δ < 0 */}
            <CaseRow
              delta="Δ < 0"
              rootsTitle="Two complex conjugate roots α ± iβ"
              rootsLatex={`\\alpha = \\dfrac{-a}{2} \\;,\\; \\beta = \\dfrac{\\sqrt{-\\Delta}}{2}`}
              solutionLatex={`y(x) = e^{\\alpha\\,x}\\bigl(A\\,\\cos(\\beta x) + B\\,\\sin(\\beta x)\\bigr)`}
              color={COLORS.violet}
              delay={0.75}
            />
          </div>

          {/* Footer note */}
          <div
            className="mt-4 rounded-xl border px-5 py-3 text-[0.78rem] leading-relaxed text-text-secondary"
            style={{
              background: 'linear-gradient(180deg, rgba(76,173,232,0.08), rgba(76,173,232,0.02))',
              borderColor: `${COLORS.info}33`,
            }}
          >
            <span className="font-bold tracking-wide text-foreground">Initial conditions:</span>{' '}
            Given <span className="font-mono">y(x₀)</span> and <span className="font-mono">y′(x₀)</span>, solve the linear system on{' '}
            <span className="font-mono">A, B</span> to pin down a unique solution from the two-parameter family.
          </div>
        </div>
      </div>
    </div>
  )
}
