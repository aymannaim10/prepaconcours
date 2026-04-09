import type { Metadata } from 'next'
import Link from 'next/link'
import YearCard from '@/components/ui/YearCard'
import { YEARS } from '@/lib/data'
import SectionBadge from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'Exam Library 2014–2025 | Prof. Yasmine – UM6SS',
  description: 'Browse 12 years of medical entrance exam resources. Access course recaps, revision series, tips & tricks and official papers from 2014 to 2025.',
}

export default function ConcoursPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="grid-bg py-20 pb-16 border-b border-gold/8 relative overflow-hidden">
        <div className="container-main relative">
          <nav className="breadcrumb mb-8">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="text-gold">Exam Library</span>
          </nav>

          <div className="mb-4">
            <SectionBadge>2014 — 2025</SectionBadge>
          </div>

          <h1 className="text-foreground mb-4 max-w-[600px]">
            Medical Concours <span className="gradient-gold">Exam Library</span>
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-[560px] mb-4">
            Select a year to access the course recap, revision series, tips & tricks, and official exam paper — all tailored to the UM6SS English track format.
          </p>
          <div className="flex gap-6 flex-wrap">
            {[
              { dot: '#4CE87C', label: 'Course Recap' },
              { dot: '#9066EE', label: 'Revision Series' },
              { dot: '#4CADE8', label: 'Tips & Tricks' },
              { dot: '#C9A84C', label: 'Official Exam' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 text-xs text-muted">
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: item.dot }} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Year Grid */}
      <div className="container-main py-16 pb-24">
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-muted text-sm">
            Showing <span className="text-foreground font-semibold">12 years</span> of exam resources
          </p>
          <div className="flex gap-2">
            <span className="badge badge-new">✦ New</span>
            <span className="badge badge-popular">★ Popular</span>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5">
          {YEARS.map((year, i) => (
            <YearCard key={year} year={year} />
          ))}
        </div>
      </div>
    </div>
  )
}
