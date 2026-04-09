import Link from 'next/link'
import { Star, Quote } from 'lucide-react'
import PageHeader from './PageHeader'

const testimonials = [
  {
    name: 'Amine Benali',
    year: 'Admitted 2024',
    avatar: 'AB',
    color: '#C9A84C',
    rating: 5,
    text: "Prof. Yasmine's platform was a game-changer. The structured approach with real exams and focused revision series helped me identify my weak areas and fix them systematically. I passed on my first attempt!",
  },
  {
    name: 'Nora El Fassi',
    year: 'Admitted 2023',
    avatar: 'NF',
    color: '#4CADE8',
    rating: 5,
    text: "The Tips & Tricks section alone saved me 20+ minutes per exam. Prof. Yasmine knows exactly what UM6SS examiners look for. The course recaps are incredibly concise and exam-focused.",
  },
  {
    name: 'Youssef Alami',
    year: 'Admitted 2024',
    avatar: 'YA',
    color: '#9066EE',
    rating: 5,
    text: 'Having 12 years of exams in one place is invaluable. I could trace how the exam evolved and practice all the recurring topics. The English track format was perfectly aligned with UM6SS requirements.',
  },
  {
    name: 'Salma Tahiri',
    year: 'Admitted 2025',
    avatar: 'ST',
    color: '#4CE87C',
    rating: 5,
    text: "What sets this platform apart is the depth — not just past papers but actual explanations, mnemonics, and techniques. Prof. Yasmine's expertise shines through every single document.",
  },
  {
    name: 'Hamid Chraibi',
    year: 'Admitted 2023',
    avatar: 'HC',
    color: '#E84C7C',
    rating: 5,
    text: 'I used this platform for 3 months before the concours. The revision series is incredibly well-structured — it goes from basic to advanced in a way that makes even complex topics feel manageable.',
  },
  {
    name: 'Zineb Benchekroun',
    year: 'Admitted 2025',
    avatar: 'ZB',
    color: '#E8A84C',
    rating: 5,
    text: "As an English track student, finding quality resources in the right format was a challenge. Prof. Yasmine's platform solved this completely. Every resource is perfectly adapted to our curriculum.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-surface/40 overflow-hidden">
      <div className="container-main">
        <PageHeader
          badge="Student Success Stories"
          title={<>Voices of <span className="gradient-gold">Admitted Students</span></>}
          subtitle="Over 500 students have transformed their preparation with Prof. Yasmine's platform."
        />

        {/* Mobile: horizontal scroll snap. Desktop: grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 -mx-8 px-8 pb-4 md:grid md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:overflow-visible md:mx-0 md:px-0 md:pb-0">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card p-7 relative overflow-hidden snap-center min-w-[85vw] md:min-w-0 shrink-0 md:shrink hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Quote icon */}
              <Quote size={32} className="absolute top-5 right-5" style={{ color: `${t.color}20` }} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#C9A84C" color="#C9A84C" />
                ))}
              </div>

              <p className="text-text-secondary text-[0.8rem] leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    background: `${t.color}20`,
                    border: `1px solid ${t.color}40`,
                    color: t.color,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-foreground font-semibold text-sm">{t.name}</div>
                  <div className="text-[0.75rem] font-semibold" style={{ color: t.color }}>{t.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-12 rounded-2xl bg-gradient-to-br from-gold/12 to-gold/4 border border-gold/20 text-center">
          <h3 className="text-foreground mb-3 text-2xl">
            Ready to Join the <span className="gradient-gold">Success Stories?</span>
          </h3>
          <p className="text-muted mb-8 text-sm">
            Start your preparation today with 12 years of curated resources.
          </p>
          <Link href="/concours" className="btn-gold btn-lg">
            Begin Your Journey →
          </Link>
        </div>
      </div>
    </section>
  )
}
