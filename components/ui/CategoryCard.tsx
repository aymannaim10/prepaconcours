'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Category } from '@/lib/data'

interface CategoryCardProps {
  category: Category
  year: number
  index: number
}

const iconMap: Record<string, string> = {
  'real-exam': '📋',
  'tips-tricks': '💡',
  'revision-series': '📚',
  'course-recap': '📖',
}

export default function CategoryCard({ category, year, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/concours/${year}/${category.id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          style={{
            position: 'relative',
            padding: '2.5rem 2rem',
            borderRadius: '20px',
            background: `rgba(13,18,32,0.85)`,
            border: `1px solid rgba(255,255,255,0.06)`,
            cursor: 'pointer',
            overflow: 'hidden',
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            transition: 'border-color 0.3s, box-shadow 0.3s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLDivElement
            el.style.borderColor = `${category.color}40`
            el.style.boxShadow = `0 20px 60px ${category.bgGlow}`
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLDivElement
            el.style.borderColor = 'rgba(255,255,255,0.06)'
            el.style.boxShadow = 'none'
          }}
        >
          {/* Ambient glow */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${category.bgGlow} 0%, transparent 70%)`,
            pointerEvents: 'none',
            transition: 'opacity 0.3s',
          }} />

          {/* Top accent line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${category.color}60, transparent)`,
          }} />

          {/* Icon */}
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '14px',
            background: `${category.bgGlow}`,
            border: `1px solid ${category.color}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.75rem',
            marginBottom: '1.5rem',
          }}>
            {iconMap[category.id]}
          </div>

          {/* Title */}
          <h3 style={{
            color: '#F5F0E8',
            marginBottom: '0.75rem',
            fontSize: '1.3rem',
            fontFamily: 'var(--font-playfair)',
            fontWeight: 700,
          }}>{category.label}</h3>

          {/* Description */}
          <p style={{
            color: '#8B8FA8',
            fontSize: '0.875rem',
            lineHeight: 1.6,
            flex: 1,
            marginBottom: '1.75rem',
          }}>{category.description}</p>

          {/* CTA */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: category.color,
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}>
            Access Resources
            <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
              <ArrowRight size={16} />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
