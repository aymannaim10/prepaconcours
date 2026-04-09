'use client'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { CATEGORIES, getCategoryById } from '@/lib/data'
import { getExamData } from '@/lib/exam-data'
import { getTipsData, getRecapData } from '@/lib/content-2024'
import { getRevisionData } from '@/lib/revision-2024'
import ExamViewer from '@/components/ui/ExamViewer'
import TipsViewer from '@/components/ui/TipsViewer'
import RecapViewer from '@/components/ui/RecapViewer'

interface Props { year: number; categoryId: string }

/* ── Step navigation between categories ── */
function StepNavigation({ year, categoryId }: Props) {
  const catIdx = CATEGORIES.findIndex(c => c.id === categoryId)
  const prevCat = catIdx > 0 ? CATEGORIES[catIdx - 1] : null
  const nextCat = catIdx < CATEGORIES.length - 1 ? CATEGORIES[catIdx + 1] : null

  if (!prevCat && !nextCat) return null

  return (
    <div className="mt-10 flex items-center justify-between gap-4 py-5 px-6 rounded-xl bg-surface/60 border border-white/[0.06]">
      {prevCat ? (
        <Link
          href={`/concours/${year}/${prevCat.id}`}
          aria-label={`${prevCat.stepLabel} — ${prevCat.label}`}
          className="no-underline flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none rounded"
        >
          <ChevronRight size={14} className="rotate-180" />
          <div>
            <div className="text-[0.65rem] font-bold tracking-widest uppercase" style={{ color: prevCat.color }}>
              {prevCat.stepLabel}
            </div>
            <div className="font-semibold">{prevCat.label}</div>
          </div>
        </Link>
      ) : <div />}
      {nextCat ? (
        <Link
          href={`/concours/${year}/${nextCat.id}`}
          aria-label={`${nextCat.stepLabel} — ${nextCat.label}`}
          className="no-underline flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors text-right focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none rounded"
        >
          <div>
            <div className="text-[0.65rem] font-bold tracking-widest uppercase" style={{ color: nextCat.color }}>
              {nextCat.stepLabel}
            </div>
            <div className="font-semibold">{nextCat.label}</div>
          </div>
          <ChevronRight size={14} />
        </Link>
      ) : <div />}
    </div>
  )
}

/* ── Small badge for content stats ── */
function StatBadge({ children, color, bg, border }: { children: React.ReactNode; color: string; bg: string; border: string }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-xs font-bold"
      style={{ background: bg, border: `1px solid ${border}`, color }}
    >
      {children}
    </div>
  )
}

export default function CategoryPageClient({ year, categoryId }: Props) {
  const category = getCategoryById(categoryId)!
  const examData = getExamData(year, categoryId)
  const tipsData = categoryId === 'tips-tricks' ? getTipsData(year) : undefined
  const recapData = categoryId === 'course-recap' ? getRecapData(year) : undefined
  const revisionData = categoryId === 'revision-series' ? getRevisionData(year) : undefined

  const hasContent = examData || tipsData || recapData || revisionData

  return (
    <div className="pt-20 min-h-screen">
      {/* ── Header ── */}
      <div className="grid-bg relative overflow-hidden py-16 border-b border-white/5">
        <div className="relative max-w-[1200px] mx-auto px-8">
          {/* Breadcrumb */}
          <nav className="breadcrumb mb-8">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/concours">Exam Library</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href={`/concours/${year}`}>{year}</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: category.color }}>{category.label}</span>
          </nav>

          <div className="flex items-start gap-6 flex-wrap">
            {/* Icon */}
            <div
              className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-4xl shrink-0"
              style={{ background: category.bgGlow, border: `1px solid ${category.color}30` }}
            >
              {category.icon}
            </div>

            {/* Text */}
            <div>
              <div
                className="inline-flex px-3 py-0.5 rounded-full text-xs tracking-widest uppercase font-bold mb-3"
                style={{ background: category.bgGlow, border: `1px solid ${category.color}30`, color: category.color }}
              >
                {year} Concours
              </div>

              <h1 className="text-foreground mb-2 text-[clamp(1.6rem,4vw,2.5rem)] leading-snug">
                {category.label}
              </h1>

              <p className="text-muted text-sm leading-relaxed max-w-[520px]">
                {category.description}
              </p>

              {examData && (
                <StatBadge color="var(--color-green-accent)" bg="rgba(76,232,124,0.1)" border="rgba(76,232,124,0.25)">
                  ✦ Interactive Exam — {examData.questions.length} questions · {examData.duration} min
                </StatBadge>
              )}
              {revisionData && (
                <StatBadge color="var(--color-purple-accent)" bg="rgba(124,76,232,0.1)" border="rgba(124,76,232,0.25)">
                  ✦ {revisionData.questions.length} practice exercises · {revisionData.duration} min
                </StatBadge>
              )}
              {tipsData && (
                <StatBadge color="var(--color-gold)" bg="rgba(201,168,76,0.1)" border="rgba(201,168,76,0.25)">
                  ✦ {tipsData.length} strategic tips
                </StatBadge>
              )}
              {recapData && (
                <StatBadge color="var(--color-green-accent)" bg="rgba(76,232,124,0.1)" border="rgba(76,232,124,0.25)">
                  ✦ {recapData.length} chapters with formulas and theorems
                </StatBadge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-[1000px] mx-auto px-8 pt-16 pb-24">

        {/* REAL EXAM */}
        {examData && (
          <>
            <div className="flex items-center justify-between flex-wrap gap-4 px-6 py-5 rounded-xl mb-10 info-panel-gold">
              <div>
                <div className="text-foreground font-bold text-sm mb-1">{examData.title}</div>
                <div className="text-muted text-xs">{examData.date} · Mathematics Paper · Duration {examData.duration} min</div>
              </div>
            </div>
            <div className="px-5 py-4 rounded-lg mb-10 info-panel-blue text-muted text-sm leading-relaxed italic">
              {examData.instructions}
            </div>
            <ExamViewer exam={examData} />
          </>
        )}

        {/* REVISION SERIES */}
        {revisionData && (
          <>
            <div className="px-6 py-5 rounded-xl mb-10 info-panel-purple">
              <div className="text-foreground font-bold text-sm mb-1">{revisionData.title}</div>
              <div className="text-muted text-xs">{revisionData.instructions}</div>
            </div>
            <ExamViewer exam={revisionData} />
          </>
        )}

        {/* TIPS & TRICKS */}
        {tipsData && <TipsViewer tips={tipsData} />}

        {/* COURSE RECAP */}
        {recapData && <RecapViewer topics={recapData} />}

        {/* No content fallback */}
        {!hasContent ? (
          <div className="py-16 px-8 text-center rounded-2xl bg-surface/40 border border-white/[0.06]">
            <div className="text-5xl mb-4">{category.icon}</div>
            <h2 className="text-foreground mb-2">Content in preparation</h2>
            <p className="text-muted text-sm">
              The content for this section in {year} will be available soon.
            </p>
          </div>
        ) : null}

        {/* Step Navigation */}
        <StepNavigation year={year} categoryId={categoryId} />

        {/* Back links */}
        <div className="mt-6 flex items-center gap-4">
          <Link href={`/concours/${year}`} className="btn-outline text-sm focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none">
            ← Back to {year} Categories
          </Link>
          <Link href="/concours" className="text-muted no-underline text-sm flex items-center gap-1 hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none rounded">
            Browse All Years <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
