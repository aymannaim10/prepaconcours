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
    description: `Access the ${year} UM6SS medical entrance exam resources: course recap, revision series, tips & tricks and official exam paper — curated by Prof. Yasmine.`,
  }
}

export default async function YearPage({ params }: Props) {
  const { year: yearStr } = await params
  const year = parseInt(yearStr)

  if (!YEARS.includes(year)) notFound()

  const meta = getYearMeta(year)
  const idx = YEARS.indexOf(year)
  const prev = YEARS[idx + 1]
  const next = YEARS[idx - 1]

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="grid-bg py-16 border-b border-gold/8 relative overflow-hidden">
        <div className="container-main relative">
          <nav className="breadcrumb mb-8">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/concours">Exam Library</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="text-gold">{year}</span>
          </nav>

          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              {meta.badge && (
                <span className={`badge badge-${meta.badge} mb-4 inline-flex`}>
                  {meta.badge === 'new' ? '✦ New' : '★ Popular'}
                </span>
              )}
              <h1 className="text-foreground mb-3">
                Concours <span className="gradient-gold">{year}</span>
              </h1>
              <p className="text-muted text-sm max-w-[520px] leading-relaxed">
                Complete resource pack for the {year} UM6SS medical entrance exam.
                Choose a category below to start your preparation.
              </p>
              <div className="flex gap-6 mt-5 flex-wrap">
                <div className="flex items-center gap-1.5 text-muted text-xs">
                  <Calendar size={14} className="text-gold" />
                  Academic Year {year}
                </div>
                <div className="flex items-center gap-1.5 text-muted text-xs">
                  <BookOpen size={14} className="text-gold" />
                  {meta.totalDocs} documents
                </div>
                <div className={`text-[0.75rem] px-2.5 py-0.5 rounded-md font-bold capitalize ${
                  meta.difficulty === 'expert'
                    ? 'bg-gold-dim text-gold'
                    : meta.difficulty === 'advanced'
                    ? 'bg-blue-accent/10 text-blue-accent'
                    : 'bg-green-accent/10 text-green-accent'
                }`}>
                  {meta.difficulty} Level
                </div>
              </div>
            </div>

            <YearNavLinks prev={prev} next={next} />
          </div>
        </div>
      </div>

      {/* 4 Category Cards */}
      <div className="container-main py-16 pb-24">
        <h2 className="text-foreground mb-3 text-xl">Your Preparation Path</h2>
        <p className="text-muted text-sm mb-10 max-w-[560px] leading-relaxed">
          Follow the 4 steps in order for the best preparation. Each step builds on the previous one — from theory to exam day.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} year={year} />
          ))}
        </div>
      </div>
    </div>
  )
}
