import type { Metadata } from 'next'
import Link from 'next/link'
import YearCard from '@/components/ui/YearCard'
import { YEARS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Exam Library 2014–2025 | Prof. Yasmine – UM6SS',
  description: 'Browse 12 years of medical entrance exam resources. Access official papers, tips, revision series and course recaps from 2014 to 2025.',
}

export default function ConcoursPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Hero */}
      <div
        className="grid-bg"
        style={{
          padding: '5rem 0 4rem',
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
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          {/* Breadcrumb */}
          <nav className="breadcrumb" style={{ marginBottom: '2rem' }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: '#C9A84C' }}>Exam Library</span>
          </nav>

          <div style={{
            display: 'inline-flex',
            padding: '4px 14px',
            borderRadius: '20px',
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.25)',
            color: '#C9A84C',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: '1rem',
          }}>2014 — 2025</div>

          <h1 style={{ color: '#F5F0E8', marginBottom: '1rem', maxWidth: '600px' }}>
            Medical Concours <span className="gradient-gold">Exam Library</span>
          </h1>
          <p style={{ color: '#8B8FA8', fontSize: '1rem', lineHeight: 1.7, maxWidth: '560px', marginBottom: '1rem' }}>
            Select a year to access the official exam paper, tips & tricks, revision series, and course recap — all tailored to the UM6SS English track format.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { dot: '#C9A84C', label: 'Official Exam' },
              { dot: '#4CADE8', label: 'Tips & Tricks' },
              { dot: '#7C4CE8', label: 'Revision Series' },
              { dot: '#4CE87C', label: 'Course Recap' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#8B8FA8' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.dot, display: 'inline-block' }} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Year Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#8B8FA8', fontSize: '0.875rem' }}>
            Showing <span style={{ color: '#F5F0E8', fontWeight: 600 }}>12 years</span> of exam resources
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span className="badge badge-new">✦ New</span>
            <span className="badge badge-popular">★ Popular</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: '1.25rem',
        }}>
          {YEARS.map((year, i) => (
            <YearCard key={year} year={year} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
