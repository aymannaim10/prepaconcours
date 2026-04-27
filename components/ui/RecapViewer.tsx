'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, BookOpen, Lightbulb, Ruler } from 'lucide-react'
import MathRenderer from './MathRenderer'
import InlineMath from './InlineMath'
import AsymptoticTree from './AsymptoticTree'
import DiffEqTree from './DiffEqTree'
import type { RecapTopic } from '@/lib/content-2024'

// ── Formula Row ──────────────────────────────────────────────
function FormulaRow({ f, color, index }: { f: { label: string; latex: string; description?: string }; color: string; index: number }) {
  return (
    <div
      className="group rounded-xl px-4 py-3.5 border border-white/[0.04] bg-surface/45 hover:border-[var(--accent-color)] transition-colors duration-200"
      style={{ '--accent-color': `${color}35` } as React.CSSProperties}
    >
      <div className="flex items-center gap-4">
        {/* Number pill */}
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0"
          style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
        >
          {index + 1}
        </div>

        {/* Label */}
        <span className="text-xs font-semibold shrink-0 min-w-[100px]" style={{ color }}>
          {f.label}
        </span>

        {/* Formula */}
        <div className="flex-1 overflow-auto">
          <MathRenderer latex={f.latex} />
        </div>
      </div>

      {/* Description */}
      {f.description && (
        <p className="text-xs text-text-dim mt-2 ml-11 leading-relaxed">
          <InlineMath text={f.description} />
        </p>
      )}
    </div>
  )
}

// ── Theorem Card ─────────────────────────────────────────────
function TheoremCard({ th, index }: { th: { name: string; statement: string; keyIdea: string }; index: number }) {
  return (
    <div className="rounded-xl overflow-hidden border border-blue-accent/15">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 py-3 bg-blue-accent/6 border-b border-blue-accent/10">
        <BookOpen size={14} className="text-blue-accent shrink-0" />
        <span className="text-blue-accent font-bold text-sm">{th.name}</span>
      </div>

      {/* Body */}
      <div className="px-5 py-4 bg-surface/30 space-y-3">
        <div className="overflow-auto">
          <MathRenderer latex={th.statement} block className="text-text-secondary" />
        </div>

        <div className="flex items-start gap-2 pt-2 border-t border-white/[0.04]">
          <Lightbulb size={13} className="text-gold-light shrink-0 mt-0.5" />
          <p className="text-xs text-muted leading-relaxed italic">
            {th.keyIdea}
          </p>
        </div>
      </div>
    </div>
  )
}

// ── Main RecapViewer ─────────────────────────────────────────
export default function RecapViewer({ topics }: { topics: RecapTopic[] }) {
  const [activeTab, setActiveTab] = useState(0)
  const topic = topics[activeTab]

  return (
    <div>
      {/* ── Topic Tabs ── */}
      <div className="flex gap-1 mb-8 p-1 rounded-2xl bg-surface/50 border border-white/[0.04] overflow-auto" role="tablist">
        {topics.map((t, i) => {
          const active = i === activeTab
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(i)}
              role="tab"
              aria-selected={i === activeTab}
              className="flex-1 relative px-4 py-2.5 rounded-xl cursor-pointer text-sm font-body whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none"
              style={{
                background: active ? `${t.color}15` : 'transparent',
                border: active ? `1px solid ${t.color}30` : '1px solid transparent',
                color: active ? t.color : 'var(--color-muted)',
                fontWeight: active ? 700 : 500,
              }}
            >
              {t.title}
            </button>
          )
        })}
      </div>

      {/* ── Content ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={topic.id}
          role="tabpanel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="space-y-10"
        >
          {/* ── Introduction ── */}
          <div
            className="rounded-2xl p-6 border"
            style={{
              background: `${topic.color}06`,
              borderColor: `${topic.color}18`,
            }}
          >
            <h2 className="text-foreground text-xl font-bold mb-3">{topic.title}</h2>
            <p className="text-muted text-sm leading-relaxed">
              {topic.summary}
            </p>
          </div>

          {/* ── Optional diagram (e.g. asymptotic decision tree) ── */}
          {topic.diagram === 'asymptotic-tree' && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Ruler size={15} style={{ color: topic.color }} />
                <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: topic.color }}>
                  Decision Tree
                </h3>
              </div>
              <AsymptoticTree />
            </section>
          )}
          {topic.diagram === 'diff-eq-tree' && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Ruler size={15} style={{ color: topic.color }} />
                <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: topic.color }}>
                  Decision Tree
                </h3>
              </div>
              <DiffEqTree />
            </section>
          )}

          {/* ── Essential Formulas ── */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Ruler size={15} style={{ color: topic.color }} />
              <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: topic.color }}>
                Essential Formulas
              </h3>
              <span className="text-xs text-muted ml-1">({topic.formulas.length})</span>
            </div>
            <div className="flex flex-col gap-2">
              {topic.formulas.map((f, i) => (
                <FormulaRow key={i} f={f} color={topic.color} index={i} />
              ))}
            </div>
          </section>

          {/* ── Key Theorems ── */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={15} className="text-blue-accent" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-blue-accent">
                Key Theorems
              </h3>
              <span className="text-xs text-muted ml-1">({topic.theorems.length})</span>
            </div>
            <div className="flex flex-col gap-3">
              {topic.theorems.map((th, i) => (
                <TheoremCard key={i} th={th} index={i} />
              ))}
            </div>
          </section>

          {/* ── Common Pitfalls ── */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={15} className="text-danger" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-danger">
                Common Pitfalls
              </h3>
              <span className="text-xs text-muted ml-1">({topic.pitfalls.length})</span>
            </div>
            <div className="flex flex-col gap-2">
              {topic.pitfalls.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl px-4 py-3 bg-danger/4 border border-danger/12"
                >
                  <AlertTriangle size={14} className="text-danger shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm leading-relaxed">
                    <InlineMath text={p} />
                  </span>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
