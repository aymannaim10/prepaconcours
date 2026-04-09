'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Lightbulb, Sparkles, Target, HelpCircle, ListOrdered, Orbit, Sigma, TrendingUp, ArrowUpRight } from 'lucide-react'
import MathRenderer from './MathRenderer'
import InlineMath from './InlineMath'
import type { Tip } from '@/lib/content-2024'

// ── Formula Row inside a Tip ────────────────────────────────
function TipFormulaRow({ f, color, index }: { f: { label: string; latex: string; description: string }; color: string; index: number }) {
  return (
    <div className="rounded-xl px-4 py-3.5 border border-white/[0.04] bg-surface/50">
      <div className="flex items-center gap-3">
        <div
          className="w-6 h-6 rounded-md flex items-center justify-center text-[0.65rem] font-extrabold shrink-0"
          style={{ background: `${color}12`, color, border: `1px solid ${color}20` }}
        >
          {index + 1}
        </div>
        <span className="text-xs font-semibold shrink-0 min-w-[80px]" style={{ color }}>
          {f.label}
        </span>
        <div className="flex-1 overflow-auto">
          <MathRenderer latex={f.latex} />
        </div>
      </div>
      {f.description && (
        <p className="text-xs text-muted mt-2 ml-9 leading-relaxed">
          <InlineMath text={f.description} />
        </p>
      )}
    </div>
  )
}

// ── Tip Card ────────────────────────────────────────────────
function TipCard({ tip, index }: { tip: Tip; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${open ? tip.color + '30' : 'rgba(255,255,255,0.05)'}` }}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left cursor-pointer flex items-center gap-4 px-5 py-4 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:outline-none rounded-2xl"
        style={{
          background: open ? `${tip.color}08` : 'rgba(13,18,32,0.6)',
        }}
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${tip.color}12`, border: `1px solid ${tip.color}25`, color: tip.color }}
        >
          {tipIconMap[tip.topic] || <Sparkles size={22} />}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[0.65rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded"
              style={{ background: `${tip.color}12`, color: tip.color }}
            >
              {tip.topic}
            </span>
          </div>
          <div className="text-foreground font-bold text-sm mb-1">
            {tip.title}
          </div>
          <div className="text-muted text-xs leading-relaxed">
            <InlineMath text={tip.summary} />
          </div>
        </div>

        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} className="text-muted shrink-0" />
        </motion.div>
      </button>

      {/* Expandable content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div
              className="px-5 pb-5 space-y-5 bg-surface/35"
            >
              {/* ── Why this matters ── */}
              <div className="flex items-start gap-2.5 rounded-xl px-4 py-3.5 bg-gold-dim/40 border border-gold/15">
                <HelpCircle size={15} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase text-gold block mb-1">
                    Why this matters
                  </span>
                  <p className="text-xs text-muted leading-relaxed">
                    <InlineMath text={tip.why} />
                  </p>
                </div>
              </div>

              {/* ── Key Formulas ── */}
              <section>
                <div className="flex items-center gap-1.5 mb-3">
                  <Sparkles size={13} style={{ color: tip.color }} />
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: tip.color }}
                  >
                    Key Formulas
                  </span>
                  <span className="text-[0.65rem] text-muted ml-1">({tip.formulas.length})</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {tip.formulas.map((f, i) => (
                    <TipFormulaRow key={i} f={f} color={tip.color} index={i} />
                  ))}
                </div>
              </section>

              {/* ── Worked Example ── */}
              <section
                className="rounded-xl overflow-hidden"
                style={{ border: `1px solid ${tip.color}20` }}
              >
                <div
                  className="flex items-center gap-2 px-4 py-2.5"
                  style={{ background: `${tip.color}08`, borderBottom: `1px solid ${tip.color}15` }}
                >
                  <Target size={13} style={{ color: tip.color }} />
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: tip.color }}
                  >
                    Worked Example
                  </span>
                </div>
                <div className="px-4 py-4 bg-surface/30 space-y-3">
                  {/* Question */}
                  <div>
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-muted mb-1.5 block">
                      Question
                    </span>
                    <div className="overflow-auto">
                      <MathRenderer latex={tip.example.question} block />
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="pt-2 border-t border-white/[0.04]">
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-muted mb-1.5 block">
                      Solution
                    </span>
                    <div
                      className="pl-4 overflow-auto"
                      style={{ borderLeft: `3px solid ${tip.color}40` }}
                    >
                      <MathRenderer latex={tip.example.solution} block className="text-text-secondary" />
                    </div>
                  </div>

                  {/* Step-by-step explanation */}
                  <div className="pt-3 border-t border-white/[0.04]">
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-muted mb-1.5 block">
                      Step-by-step explanation
                    </span>
                    <p className="text-xs text-muted leading-relaxed">
                      <InlineMath text={tip.example.explanation} />
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Pro Tip ── */}
              <div className="flex items-start gap-2.5 rounded-xl px-4 py-3.5 bg-green-accent/5 border border-green-accent/18">
                <Lightbulb size={15} className="text-green-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase text-green-accent block mb-1">
                    Pro Tip
                  </span>
                  <p className="text-xs text-green-accent/90 leading-relaxed">
                    <InlineMath text={tip.proTip} />
                  </p>
                </div>
              </div>

              {/* ── See in Action (cross-references) ── */}
              {tip.examRefs && tip.examRefs.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase text-muted">
                    Apply this:
                  </span>
                  {tip.examRefs.map((ref, i) => (
                    <Link
                      key={i}
                      href={`/concours/2024/${ref.section}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[0.65rem] font-semibold no-underline transition-colors hover:opacity-80"
                      style={{
                        background: ref.section === 'real-exam' ? 'rgba(201,168,76,0.1)' : 'rgba(124,76,232,0.1)',
                        border: `1px solid ${ref.section === 'real-exam' ? 'rgba(201,168,76,0.25)' : 'rgba(124,76,232,0.25)'}`,
                        color: ref.section === 'real-exam' ? 'var(--color-gold)' : 'var(--color-purple-accent)',
                      }}
                    >
                      {ref.label}
                      <ArrowUpRight size={11} />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Topic icon mapping ─────────────────────────────────────
const tipIconMap: Record<string, React.ReactNode> = {
  'Sequences': <ListOrdered size={22} />,
  'Complex Numbers': <Orbit size={22} />,
  'Integrals': <Sigma size={22} />,
  'Function Analysis': <TrendingUp size={22} />,
}

const topicFilterIcons: Record<string, React.ReactNode> = {
  'Sequences': <ListOrdered size={14} />,
  'Complex Numbers': <Orbit size={14} />,
  'Integrals': <Sigma size={14} />,
  'Function Analysis': <TrendingUp size={14} />,
}

// ── Main TipsViewer ─────────────────────────────────────────
export default function TipsViewer({ tips }: { tips: Tip[] }) {
  const topics = [...new Set(tips.map(t => t.topic))]
  const [activeTopic, setActiveTopic] = useState<string | null>(null)
  const filtered = activeTopic ? tips.filter(t => t.topic === activeTopic) : tips
  const topicColors: Record<string, string> = {}
  tips.forEach(t => { topicColors[t.topic] = t.color })

  return (
    <div>
      {/* ── Intro Card ── */}
      <div className="rounded-2xl p-6 mb-8 bg-gold-dim/40 border border-gold/15">
        <div className="flex items-center gap-3 mb-3">
          <Lightbulb size={28} className="text-gold" />
          <h2 className="text-foreground text-xl font-bold">Tips & Tricks</h2>
        </div>
        <p className="text-muted text-sm leading-relaxed max-w-[680px]">
          Strategic shortcuts and exam techniques curated by Prof. Yasmine. Each tip targets a specific concours question type with detailed explanations — understand the &quot;why&quot; behind every formula, study the worked example step by step, then apply it on exam day.
        </p>
      </div>

      {/* ── Topic Filter ── */}
      <div className="flex gap-2 mb-6 flex-wrap" role="radiogroup" aria-label="Filter by topic">
        <button
          onClick={() => setActiveTopic(null)}
          role="radio"
          aria-checked={!activeTopic}
          className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:outline-none"
          style={{
            background: !activeTopic ? 'rgba(201,168,76,0.12)' : 'rgba(13,18,32,0.5)',
            border: `1px solid ${!activeTopic ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.05)'}`,
            color: !activeTopic ? 'var(--color-gold)' : 'var(--color-muted)',
          }}
        >
          All tips ({tips.length})
        </button>
        {topics.map(topic => {
          const active = activeTopic === topic
          const color = topicColors[topic]
          return (
            <button
              key={topic}
              onClick={() => setActiveTopic(active ? null : topic)}
              role="radio"
              aria-checked={active}
              className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:outline-none"
              style={{
                background: active ? `${color}12` : 'rgba(13,18,32,0.5)',
                border: `1px solid ${active ? color + '35' : 'rgba(255,255,255,0.05)'}`,
                color: active ? color : 'var(--color-muted)',
              }}
            >
              {topicFilterIcons[topic]}
              {topic}
            </button>
          )
        })}
      </div>

      {/* ── Results count ── */}
      <p className="text-muted text-xs mb-4">
        Showing <span className="text-foreground font-semibold">{filtered.length}</span> tip{filtered.length !== 1 ? 's' : ''}
        {activeTopic && <> in <span style={{ color: topicColors[activeTopic] }}>{activeTopic}</span></>}
      </p>

      {/* ── Cards ── */}
      <div className="flex flex-col gap-3">
        {filtered.map((tip, i) => (
          <TipCard key={tip.id} tip={tip} index={i} />
        ))}
      </div>
    </div>
  )
}
