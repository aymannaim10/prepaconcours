'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Lightbulb, Sparkles } from 'lucide-react'
import MathRenderer from './MathRenderer'
import type { Tip } from '@/lib/content-2024'

function TipCard({ tip, index }: { tip: Tip; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      {/* Header - always visible */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', cursor: 'pointer',
          padding: '1.25rem 1.5rem',
          borderRadius: open ? '14px 14px 0 0' : '14px',
          background: 'rgba(13,18,32,0.6)',
          border: `1px solid ${open ? tip.color + '40' : 'rgba(255,255,255,0.06)'}`,
          borderBottom: open ? 'none' : undefined,
          transition: 'all 0.3s',
          display: 'flex', alignItems: 'center', gap: '1rem',
          fontFamily: 'var(--font-body)',
        }}
      >
        {/* Icon */}
        <div style={{
          width: '48px', height: '48px', borderRadius: '12px',
          background: `${tip.color}15`,
          border: `1px solid ${tip.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem', flexShrink: 0,
        }}>{tip.icon}</div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px', flexWrap: 'wrap' }}>
            <span style={{
              padding: '2px 8px', borderRadius: '4px',
              background: `${tip.color}15`, color: tip.color,
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>{tip.topic}</span>
          </div>
          <div style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '1rem', marginBottom: '3px' }}>
            {tip.title}
          </div>
          <div style={{ color: '#8B8FA8', fontSize: '0.8rem', lineHeight: 1.5 }}>
            {tip.summary}
          </div>
        </div>

        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} color="#8B8FA8" />
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
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '1.5rem',
              background: 'rgba(13,18,32,0.4)',
              border: `1px solid ${tip.color}40`,
              borderTop: 'none',
              borderRadius: '0 0 14px 14px',
            }}>
              {/* Formulas */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  color: tip.color, fontSize: '0.72rem', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem',
                }}>
                  <Sparkles size={13} /> Formules clés
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {tip.formulas.map((f, i) => (
                    <div key={i} style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                    }}>
                      <span style={{
                        color: '#8B8FA8', fontSize: '0.72rem', fontWeight: 600,
                        minWidth: '90px', flexShrink: 0,
                      }}>{f.label}</span>
                      <div style={{ flex: 1, overflow: 'auto' }}>
                        <MathRenderer latex={f.latex} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Worked example */}
              <div style={{
                padding: '1rem 1.25rem', borderRadius: '10px',
                background: `${tip.color}08`,
                border: `1px solid ${tip.color}20`,
                marginBottom: '1rem',
              }}>
                <div style={{
                  fontSize: '0.72rem', fontWeight: 700, color: tip.color,
                  letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem',
                }}>💡 Exemple résolu</div>
                <div style={{ marginBottom: '0.6rem' }}>
                  <MathRenderer latex={tip.example.question} block />
                </div>
                <div style={{
                  borderLeft: `3px solid ${tip.color}50`, paddingLeft: '1rem',
                  marginTop: '0.75rem',
                }}>
                  <MathRenderer latex={tip.example.solution} block style={{ color: '#C8C4BE', fontSize: '0.9rem' }} />
                </div>
              </div>

              {/* Pro Tip */}
              <div style={{
                padding: '0.75rem 1rem', borderRadius: '8px',
                background: 'rgba(76,232,124,0.06)',
                border: '1px solid rgba(76,232,124,0.2)',
                display: 'flex', alignItems: 'flex-start', gap: '8px',
              }}>
                <Lightbulb size={16} color="#4CE87C" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#4CE87C', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  <strong>Pro Tip :</strong> {tip.proTip}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function TipsViewer({ tips }: { tips: Tip[] }) {
  const topics = [...new Set(tips.map(t => t.topic))]
  const [activeTopic, setActiveTopic] = useState<string | null>(null)
  const filtered = activeTopic ? tips.filter(t => t.topic === activeTopic) : tips
  const topicColors: Record<string, string> = {}
  tips.forEach(t => { topicColors[t.topic] = t.color })

  return (
    <div>
      {/* Topic filter */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setActiveTopic(null)}
          style={{
            padding: '0.45rem 1rem', borderRadius: '20px',
            background: !activeTopic ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${!activeTopic ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.06)'}`,
            color: !activeTopic ? '#C9A84C' : '#8B8FA8',
            fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer',
            fontFamily: 'var(--font-body)', transition: 'all 0.2s',
          }}
        >Tous ({tips.length})</button>
        {topics.map(topic => (
          <button
            key={topic}
            onClick={() => setActiveTopic(activeTopic === topic ? null : topic)}
            style={{
              padding: '0.45rem 1rem', borderRadius: '20px',
              background: activeTopic === topic ? `${topicColors[topic]}15` : 'rgba(255,255,255,0.04)',
              border: `1px solid ${activeTopic === topic ? topicColors[topic] + '40' : 'rgba(255,255,255,0.06)'}`,
              color: activeTopic === topic ? topicColors[topic] : '#8B8FA8',
              fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer',
              fontFamily: 'var(--font-body)', transition: 'all 0.2s',
            }}
          >{topic}</button>
        ))}
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {filtered.map((tip, i) => <TipCard key={tip.id} tip={tip} index={i} />)}
      </div>
    </div>
  )
}
