import Link from 'next/link'
import { ArrowRight, ClipboardList, Lightbulb, Library, BookText } from 'lucide-react'
import { Category } from '@/lib/data'

interface CategoryCardProps {
  category: Category
  year: number
}

const iconMap: Record<string, React.ReactNode> = {
  'course-recap': <BookText size={24} />,
  'tips-tricks': <Lightbulb size={24} />,
  'revision-series': <Library size={24} />,
  'real-exam': <ClipboardList size={24} />,
}

export default function CategoryCard({ category, year }: CategoryCardProps) {
  return (
    <Link
      href={`/concours/${year}/${category.id}`}
      className="no-underline block group focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none rounded-2xl"
    >
      <div
        className="relative p-7 pb-6 rounded-2xl bg-surface/90 border border-white/[0.06] cursor-pointer overflow-hidden flex flex-col transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_8px_40px_var(--_glow)]"
        style={{
          '--_glow': `${category.color}18`,
          '--_color': category.color,
        } as React.CSSProperties}
      >
        {/* Top-right corner accent */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.12]"
          style={{ background: `radial-gradient(circle, ${category.color} 0%, transparent 70%)` }}
        />

        {/* Hover border glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
          style={{ boxShadow: `inset 0 0 0 1px ${category.color}30` }}
        />

        {/* Step badge + number */}
        {category.step && (
          <div className="flex items-center gap-2.5 mb-5">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[0.6rem] font-black"
              style={{ background: `${category.color}20`, color: category.color, border: `1px solid ${category.color}35` }}
            >
              {category.step}
            </div>
            <span
              className="text-[0.6rem] font-bold tracking-[0.14em] uppercase"
              style={{ color: category.color }}
            >
              {category.stepLabel?.replace(/Step \d — /, '')}
            </span>
          </div>
        )}

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${category.color}18, ${category.color}08)`,
            border: `1px solid ${category.color}25`,
            color: category.color,
          }}
        >
          {iconMap[category.id]}
        </div>

        {/* Title */}
        <h3 className="text-foreground mb-2 text-base font-display font-bold leading-snug">
          {category.label}
        </h3>

        {/* Description */}
        <p className="text-muted text-[0.8rem] leading-relaxed flex-1 mb-5">
          {category.description}
        </p>

        {/* CTA */}
        <div
          className="flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-wide transition-all duration-200 group-hover:gap-2.5"
          style={{ color: category.color }}
        >
          {category.cta || 'Access Resources'}
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  )
}
