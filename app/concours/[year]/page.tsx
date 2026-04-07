import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CategoryCard from '@/components/ui/CategoryCard'
import YearNavLinks from '@/components/ui/YearNavLinks'
import { YEARS, CATEGORIES, getYearMeta } from '@/lib/data'
import { Calendar, BookOpen } from 'lucide-react'

interface Props {
  params: Promise<{ year: string }>
}

export async function generateStaticParams() {
  return YEARS.map((y) => ({ year: String(y) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year } = await params
  return {
    title: `${year} Concours Médecine | Prof. Yasmine – UM6SS`,
    description: `Access the ${year} UM6SS medical entrance exam resources: official paper, expert tips, revision series and course recap — curated by Prof. Yasmine.`,
  }
}

export default async function YearPage({ params }: Props) {
  const { year: yearStr } = await params
  const year = parseInt(yearStr)

  if (!YEARS.includes(year)) notFound()

  const meta = getYearMeta(year)

  // Neighbour years for navigation
  const idx = YEARS.indexOf(year)
  const prev = YEARS[idx + 1]
  const next = YEARS[idx - 1]

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="grid-bg"
        style={{
          padding: '4rem 0',
          borderBottom: '1px solid rgba(201,168,76,0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Big year watermark */}
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          right: '5%',
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(6rem, 16vw, 12rem)',
          fontWeight: 900,
          color: 'rgba(201,168,76,0.04)',
          pointerEvents: 'none',
          lineHeight: 1,
          userSelect: 'none',
        }}>{year}</div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          {/* Breadcrumb */}
          <nav className="breadcrumb" style={{ marginBottom: '2rem' }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/concours">Exam Library</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: '#C9A84C' }}>{year}</span>
          </nav>

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              {meta.badge && (
                <span className={`badge badge-${meta.badge}`} style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                  {meta.badge === 'new' ? '✦ New' : '★ Popular'}
                </span>
              )}
              <h1 style={{ color: '#F5F0E8', marginBottom: '0.75rem' }}>
                Concours <span className="gradient-gold">{year}</span>
              </h1>
              <p style={{ color: '#8B8FA8', fontSize: '0.95rem', maxWidth: '520px', lineHeight: 1.7 }}>
                Complete resource pack for the {year} UM6SS medical entrance exam.
                Choose a category below to start your preparation.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8B8FA8', fontSize: '0.8rem' }}>
                  <Calendar size={14} style={{ color: '#C9A84C' }} />
                  Academic Year {year}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8B8FA8', fontSize: '0.8rem' }}>
                  <BookOpen size={14} style={{ color: '#C9A84C' }} />
                  {meta.totalDocs} documents
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  padding: '3px 10px',
                  borderRadius: '6px',
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
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}>
                  {meta.difficulty} Level
                </div>
              </div>
            </div>

            {/* Year nav */}
            <YearNavLinks prev={prev} next={next} />
          </div>
        </div>
      </div>

      {/* 4 Category Cards */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        <h2 style={{ color: '#F5F0E8', marginBottom: '0.75rem', fontSize: '1.3rem' }}>
          Select a Resource Category
        </h2>
        <p style={{ color: '#8B8FA8', fontSize: '0.875rem', marginBottom: '2.5rem' }}>
          4 comprehensive resource types available for the {year} concours
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} year={year} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
