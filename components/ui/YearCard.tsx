import Link from 'next/link'
import { BookOpen, Folder } from 'lucide-react'
import { getYearMeta, CATEGORIES } from '@/lib/data'

interface YearCardProps {
  year: number
}

export default function YearCard({ year }: YearCardProps) {
  const meta = getYearMeta(year)

  return (
    <Link href={`/concours/${year}`} className="no-underline block rounded-2xl group focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none">
      <div className="relative p-7 rounded-2xl bg-surface/80 border border-white/[0.06] cursor-pointer overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-gold/20 group-hover:shadow-[0_8px_40px_rgba(201,168,76,0.08)]">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-xl bg-gold-dim border border-gold/20 flex items-center justify-center text-gold transition-transform duration-300 group-hover:scale-105">
            <Folder size={20} />
          </div>

          {meta.badge && (
            <span className={`badge badge-${meta.badge}`}>
              {meta.badge === 'new' ? '✦ New' : meta.badge === 'popular' ? '★ Popular' : 'Classic'}
            </span>
          )}
        </div>

        {/* Year */}
        <div className="font-display text-[2rem] font-bold text-foreground mb-1 leading-none">
          {year}
        </div>

        <div className="text-xs text-muted mb-5 tracking-wide">
          Concours Médecine · UM6SS
        </div>

        {/* Category Pills */}
        <div className="flex gap-1.5 flex-wrap mb-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="w-2 h-2 rounded-full opacity-70"
              style={{ background: cat.color }}
              title={cat.label}
            />
          ))}
          <span className="text-[0.68rem] text-muted ml-1">4 categories</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <BookOpen size={13} />
            {meta.totalDocs} documents
          </div>
          <div
            className={`text-[0.68rem] px-2 py-0.5 rounded font-semibold tracking-wide capitalize ${
              meta.difficulty === 'expert'
                ? 'bg-gold-dim text-gold'
                : meta.difficulty === 'advanced'
                ? 'bg-blue-accent/10 text-blue-accent'
                : 'bg-green-accent/10 text-green-accent'
            }`}
          >
            {meta.difficulty}
          </div>
        </div>
      </div>
    </Link>
  )
}
