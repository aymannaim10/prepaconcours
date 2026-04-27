'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronRight, Lock, Sparkles } from 'lucide-react'
import { CATEGORIES, getCategoryById } from '@/lib/data'
import { getExamData } from '@/lib/exam-data'
import { getTipsData, getRecapData } from '@/lib/content-2024'
import { getRevisionData } from '@/lib/revision-2024'
import ExamViewer from '@/components/ui/ExamViewer'
import TipsViewer from '@/components/ui/TipsViewer'
import RecapViewer from '@/components/ui/RecapViewer'

// Years whose recap / tips / revision content is restricted to local development
const LOCAL_ONLY_CONTENT_YEARS = new Set([2023])
const LOCAL_ONLY_CATEGORIES = new Set(['course-recap', 'tips-tricks', 'revision-series'])

function useIsLocalDev(): boolean {
  const [isLocal, setIsLocal] = useState(false)
  useEffect(() => {
    const h = window.location.hostname
    setIsLocal(
      h === 'localhost' ||
      h === '127.0.0.1' ||
      h === '::1' ||
      h.startsWith('192.168.') ||
      h.startsWith('10.') ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(h)
    )
  }, [])
  return isLocal
}

function LockedContentPlaceholder({ year, categoryLabel }: { year: number; categoryLabel: string }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-gold/25 relative"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            'linear-gradient(135deg, rgba(201,168,76,0.10), transparent 45%, rgba(229,199,107,0.06) 90%)',
        }}
      />
      <div className="relative bg-gradient-to-br from-[#0d0b08] via-[#100e0a] to-[#0a0807] px-7 py-10">
        <div className="flex items-start gap-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border"
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.22), rgba(201,168,76,0.04))',
              borderColor: 'rgba(201,168,76,0.45)',
              boxShadow: '0 0 22px rgba(201,168,76,0.18)',
            }}
          >
            <Lock size={22} className="text-gold" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={12} className="text-gold" />
              <span className="text-[0.66rem] font-extrabold tracking-[0.18em] uppercase text-gold">
                Premium · {year}
              </span>
            </div>
            <h2 className="text-foreground font-display font-bold text-xl leading-tight mb-2">
              {categoryLabel} for {year} is reserved for premium access
            </h2>
            <p className="text-[0.92rem] leading-relaxed text-text-secondary mb-5 max-w-[640px]">
              The full {categoryLabel.toLowerCase()} content for the {year} concours — including detailed formulas,
              theorems, pitfalls, strategic shortcuts, and exam-style practice — is reserved for premium subscribers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide bg-gold/15 border border-gold/40 text-gold hover:bg-gold/22 transition-colors no-underline"
            >
              <Lock size={14} />
              Unlock the full {year} content
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

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
  const isLocalDev = useIsLocalDev()
  const examData = getExamData(year, categoryId)
  const tipsData = categoryId === 'tips-tricks' ? getTipsData(year) : undefined
  const recapData = categoryId === 'course-recap' ? getRecapData(year) : undefined
  const revisionData = categoryId === 'revision-series' ? getRevisionData(year) : undefined

  // On the deployed site, hide tips / recap / revision for years marked LOCAL_ONLY
  const contentRestricted =
    !isLocalDev &&
    LOCAL_ONLY_CONTENT_YEARS.has(year) &&
    LOCAL_ONLY_CATEGORIES.has(categoryId)

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

        {/* LOCKED CONTENT PLACEHOLDER (deployed site only, for restricted years) */}
        {contentRestricted ? (
          <LockedContentPlaceholder year={year} categoryLabel={category.label} />
        ) : (
          <>
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
          </>
        )}

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
