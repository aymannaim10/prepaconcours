import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { STATS } from '@/lib/data'
import SectionBadge from './SectionBadge'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 grid-bg">
      <div className="max-w-[900px] mx-auto px-8 text-center relative z-[1]">
        {/* Badge */}
        <div className="mb-8 animate-fade-up">
          <SectionBadge icon={<Sparkles size={14} />}>
            UM6SS · English Track · Morocco
          </SectionBadge>
        </div>

        {/* Headline */}
        <h1 className="mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="block text-foreground">Master the</span>
          <span className="block gradient-gold">Medical Concours</span>
          <span className="block text-foreground">with Prof. Yasmine</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-muted text-[clamp(1rem,2vw,1.2rem)] leading-relaxed max-w-[620px] mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Comprehensive preparation platform featuring concise course recaps, curated revision series,
          expert tips & tricks, and 12 years of official exam papers (2014–2025) — all designed to help you
          succeed at first attempt.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Link href="/concours" className="btn-gold btn-lg">
            Explore Exams
            <ArrowRight size={18} />
          </Link>
          <Link href="/about" className="btn-outline btn-lg">
            Meet Prof. Yasmine
          </Link>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 p-6 px-8 bg-surface/60 border border-gold/15 rounded-2xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`text-center py-2 px-4 ${i < STATS.length - 1 ? 'sm:border-r sm:border-gold/10' : ''} ${i < 2 ? 'border-b sm:border-b-0 border-gold/10' : ''}`}
            >
              <div className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-gold leading-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-foreground mt-1">{stat.label}</div>
              <div className="text-[0.7rem] text-muted mt-0.5">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
