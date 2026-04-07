'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import MathRenderer from './MathRenderer'
import type { RecapTopic } from '@/lib/content-2024'

function FormulaCard({ f, color, i }: { f: { label: string; latex: string }; color: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}
      style={{
        padding: '0.85rem 1.1rem',
        borderRadius: '10px',
        background: 'rgba(13,18,32,0.5)',
        border: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = `${color}35`)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)')}
    >
      <span style={{
        color: color, fontSize: '0.7rem', fontWeight: 700,
        minWidth: '100px', flexShrink: 0, letterSpacing: '0.02em',
      }}>{f.label}</span>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <MathRenderer latex={f.latex} />
      </div>
    </motion.div>
  )
}

export default function RecapViewer({ topics }: { topics: RecapTopic[] }) {
  const [activeTab, setActiveTab] = useState(0)
  const topic = topics[activeTab]

  return (
    <div>
      {/* Tabs */}
      <div style={{
        display: 'flex', gap: '4px', marginBottom: '2rem',
        background: 'rgba(13,18,32,0.5)',
        borderRadius: '12px', padding: '4px',
        border: '1px solid rgba(255,255,255,0.05)',
        overflow: 'auto',
      }}>
        {topics.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(i)}
            style={{
              flex: 1, padding: '0.7rem 1rem',
              borderRadius: '8px', cursor: 'pointer',
              background: i === activeTab ? `${t.color}18` : 'transparent',
              border: i === activeTab ? `1px solid ${t.color}35` : '1px solid transparent',
              color: i === activeTab ? t.color : '#8B8FA8',
              fontSize: '0.82rem', fontWeight: i === activeTab ? 700 : 500,
              fontFamily: 'var(--font-body)', transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            {t.icon} {t.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div key={topic.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        {/* Formulas Grid */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            color: topic.color, fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem',
          }}>📐 Essential formulas</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {topic.formulas.map((f, i) => (
              <FormulaCard key={i} f={f} color={topic.color} i={i} />
            ))}
          </div>
        </div>

        {/* Theorems */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            color: '#4CADE8', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem',
          }}>📖 Key theorems</div>
          {topic.theorems.map((th, i) => (
            <div key={i} style={{
              padding: '1rem 1.25rem', borderRadius: '10px',
              background: 'rgba(76,173,232,0.05)',
              border: '1px solid rgba(76,173,232,0.15)',
              marginBottom: '0.6rem',
            }}>
              <div style={{
                color: '#4CADE8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem',
              }}>{th.name}</div>
              <MathRenderer latex={th.statement} style={{ color: '#C8C4BE', fontSize: '0.9rem' }} />
            </div>
          ))}
        </div>

        {/* Pitfalls */}
        <div>
          <div style={{
            color: '#E84C4C', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}><AlertTriangle size={13} /> Common Pitfalls</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {topic.pitfalls.map((p, i) => (
              <div key={i} style={{
                padding: '0.75rem 1rem', borderRadius: '8px',
                background: 'rgba(232,76,76,0.05)',
                border: '1px solid rgba(232,76,76,0.15)',
                color: '#C8C4BE', fontSize: '0.82rem', lineHeight: 1.6,
                display: 'flex', alignItems: 'flex-start', gap: '8px',
              }}>
                <span style={{ color: '#E84C4C', fontWeight: 700, flexShrink: 0 }}>⚠</span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
