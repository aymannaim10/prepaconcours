'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Folder } from 'lucide-react'
import { getYearMeta, CATEGORIES, YEARS } from '@/lib/data'

interface YearCardProps {
  year: number
  index: number
}

export default function YearCard({ year, index }: YearCardProps) {
  const meta = getYearMeta(year)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link href={`/concours/${year}`} style={{ textDecoration: 'none', display: 'block' }}>
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            position: 'relative',
            padding: '1.75rem',
            borderRadius: '16px',
            background: 'rgba(13,18,32,0.8)',
            border: '1px solid rgba(255,255,255,0.06)',
            cursor: 'pointer',
            overflow: 'hidden',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLDivElement
            el.style.borderColor = 'rgba(201,168,76,0.35)'
            el.style.boxShadow = '0 12px 40px rgba(201,168,76,0.12)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLDivElement
            el.style.borderColor = 'rgba(255,255,255,0.06)'
            el.style.boxShadow = 'none'
          }}
        >
          {/* Background year text */}
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            right: '-4px',
            fontFamily: 'var(--font-playfair)',
            fontSize: '5rem',
            fontWeight: 900,
            color: 'rgba(201,168,76,0.04)',
            pointerEvents: 'none',
            lineHeight: 1,
            userSelect: 'none',
          }}>{year}</div>

          {/* Ambient top glow */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
          }} />

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#C9A84C',
            }}>
              <Folder size={20} />
            </div>

            {meta.badge && (
              <span className={`badge badge-${meta.badge}`}>
                {meta.badge === 'new' ? '✦ New' : meta.badge === 'popular' ? '★ Popular' : 'Classic'}
              </span>
            )}
          </div>

          {/* Year */}
          <div style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#F5F0E8',
            marginBottom: '0.25rem',
            lineHeight: 1,
          }}>{year}</div>

          <div style={{ fontSize: '0.8rem', color: '#8B8FA8', marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
            Concours Médecine · UM6SS
          </div>

          {/* Category Pills */}
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: cat.color,
                  opacity: 0.7,
                }}
                title={cat.label}
              />
            ))}
            <span style={{ fontSize: '0.7rem', color: '#8B8FA8', marginLeft: '4px' }}>4 categories</span>
          </div>

          {/* Footer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#8B8FA8' }}>
              <BookOpen size={13} />
              {meta.totalDocs} documents
            </div>
            <div style={{
              fontSize: '0.7rem',
              padding: '3px 8px',
              borderRadius: '4px',
              background: meta.difficulty === 'expert'
                ? 'rgba(201,168,76,0.1)'
                : meta.difficulty === 'advanced'
                ? 'rgba(76,173,232,0.1)'
                : 'rgba(76,232,124,0.1)',
              color: meta.difficulty === 'expert'
                ? '#C9A84C'
                : meta.difficulty === 'advanced'
                ? '#4CADE8'
                : '#4CE87C',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'capitalize',
            }}>
              {meta.difficulty}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
