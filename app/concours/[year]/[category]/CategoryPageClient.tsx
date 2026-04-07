'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { CATEGORIES, getCategoryById } from '@/lib/data'
import { getExamData } from '@/lib/exam-data'
import { getTipsData, getRecapData } from '@/lib/content-2024'
import { getRevisionData } from '@/lib/revision-2024'
import ExamViewer from '@/components/ui/ExamViewer'
import TipsViewer from '@/components/ui/TipsViewer'
import RecapViewer from '@/components/ui/RecapViewer'

interface Props { year: number; categoryId: string }

export default function CategoryPageClient({ year, categoryId }: Props) {
  const category = getCategoryById(categoryId)!
  const examData = getExamData(year, categoryId)
  const tipsData = categoryId === 'tips-tricks' ? getTipsData(year) : undefined
  const recapData = categoryId === 'course-recap' ? getRecapData(year) : undefined
  const revisionData = categoryId === 'revision-series' ? getRevisionData(year) : undefined

  const hasContent = examData || tipsData || recapData || revisionData

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="grid-bg"
        style={{
          padding: '4rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at 60% 50%, ${category.bgGlow} 0%, transparent 65%)`,
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          <nav className="breadcrumb" style={{ marginBottom: '2rem' }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/concours">Exam Library</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href={`/concours/${year}`}>{year}</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: category.color }}>{category.label}</span>
          </nav>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                width: '72px', height: '72px', borderRadius: '18px',
                background: category.bgGlow,
                border: `1px solid ${category.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.25rem', flexShrink: 0,
              }}
            >{category.icon}</motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div style={{
                display: 'inline-flex', padding: '3px 12px', borderRadius: '20px',
                background: category.bgGlow, border: `1px solid ${category.color}30`,
                color: category.color, fontSize: '0.72rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                fontWeight: 700, marginBottom: '0.75rem',
              }}>{year} Concours</div>
              <h1 style={{ color: '#F5F0E8', marginBottom: '0.6rem', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}>
                {category.label}
              </h1>
              <p style={{ color: '#8B8FA8', fontSize: '0.95rem', lineHeight: 1.65, maxWidth: '520px' }}>
                {category.description}
              </p>
              {examData && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  marginTop: '0.75rem', padding: '4px 12px', borderRadius: '20px',
                  background: 'rgba(76,232,124,0.1)', border: '1px solid rgba(76,232,124,0.25)',
                  color: '#4CE87C', fontSize: '0.75rem', fontWeight: 700,
                }}>✦ Interactive Exam — {examData.questions.length} questions · {examData.duration} min</div>
              )}
              {revisionData && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  marginTop: '0.75rem', padding: '4px 12px', borderRadius: '20px',
                  background: 'rgba(124,76,232,0.1)', border: '1px solid rgba(124,76,232,0.25)',
                  color: '#7C4CE8', fontSize: '0.75rem', fontWeight: 700,
                }}>✦ {revisionData.questions.length} practice exercises · {revisionData.duration} min</div>
              )}
              {tipsData && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  marginTop: '0.75rem', padding: '4px 12px', borderRadius: '20px',
                  background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)',
                  color: '#C9A84C', fontSize: '0.75rem', fontWeight: 700,
                }}>✦ {tipsData.length} strategic tips</div>
              )}
              {recapData && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  marginTop: '0.75rem', padding: '4px 12px', borderRadius: '20px',
                  background: 'rgba(76,232,124,0.1)', border: '1px solid rgba(76,232,124,0.25)',
                  color: '#4CE87C', fontSize: '0.75rem', fontWeight: 700,
                }}>✦ {recapData.length} chapters with formulas and theorems</div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>

        {/* REAL EXAM */}
        {examData && (
          <>
            <div style={{
              padding: '1.25rem 1.5rem', borderRadius: '12px',
              background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)',
              marginBottom: '2.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '1rem',
            }}>
              <div>
                <div style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>{examData.title}</div>
                <div style={{ color: '#8B8FA8', fontSize: '0.8rem' }}>{examData.date} · Mathematics Paper · Duration {examData.duration} min</div>
              </div>
            </div>
            <div style={{
              padding: '1rem 1.25rem', borderRadius: '10px',
              background: 'rgba(76,173,232,0.06)', border: '1px solid rgba(76,173,232,0.15)',
              marginBottom: '2.5rem', color: '#8B8FA8', fontSize: '0.85rem', lineHeight: 1.65, fontStyle: 'italic',
            }}>{examData.instructions}</div>
            <ExamViewer exam={examData} />
          </>
        )}

        {/* REVISION SERIES */}
        {revisionData && (
          <>
            <div style={{
              padding: '1.25rem 1.5rem', borderRadius: '12px',
              background: 'rgba(124,76,232,0.06)', border: '1px solid rgba(124,76,232,0.15)',
              marginBottom: '2.5rem',
            }}>
              <div style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>{revisionData.title}</div>
              <div style={{ color: '#8B8FA8', fontSize: '0.8rem' }}>{revisionData.instructions}</div>
            </div>
            <ExamViewer exam={revisionData} />
          </>
        )}

        {/* TIPS & TRICKS */}
        {tipsData && <TipsViewer tips={tipsData} />}

        {/* COURSE RECAP */}
        {recapData && <RecapViewer topics={recapData} />}

        {/* No content fallback */}
        {!hasContent && (
          <div style={{
            padding: '4rem 2rem', textAlign: 'center',
            borderRadius: '16px', background: 'rgba(13,18,32,0.4)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{category.icon}</div>
            <h2 style={{ color: '#F5F0E8', marginBottom: '0.5rem' }}>Content in preparation</h2>
            <p style={{ color: '#8B8FA8', fontSize: '0.9rem' }}>
              The content for this section in {year} will be available soon.
            </p>
          </div>
        )}

        <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href={`/concours/${year}`} className="btn-outline" style={{ fontSize: '0.875rem' }}>
            ← Back to {year} Categories
          </Link>
          <Link href="/concours" style={{
            color: '#8B8FA8', textDecoration: 'none', fontSize: '0.875rem',
            display: 'flex', alignItems: 'center', gap: '4px',
          }}>Browse All Years <ChevronRight size={14} /></Link>
        </div>
      </div>
    </div>
  )
}
