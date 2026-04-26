'use client'
import { motion } from 'framer-motion'
import { ClipboardList, Lightbulb, BookOpenCheck, BookMarked, Target, TrendingUp, Users } from 'lucide-react'
import PageHeader from './PageHeader'
import SectionBadge from './SectionBadge'

const features = [
  {
    icon: <BookMarked size={24} />,
    color: '#4CE87C',
    bg: 'rgba(76,232,124,0.1)',
    title: 'Concise Course Recaps',
    desc: 'Crystal-clear summaries of all mathematical concepts required to master the concours.',
  },
  {
    icon: <BookOpenCheck size={24} />,
    color: '#9066EE',
    bg: 'rgba(124,76,232,0.1)',
    title: 'Curated Revision Series',
    desc: 'Topic-specific practice sets and exercises ordered by difficulty for deep exam mastery.',
  },
  {
    icon: <Lightbulb size={24} />,
    color: '#4CADE8',
    bg: 'rgba(76,173,232,0.1)',
    title: 'Strategic Tips & Tricks',
    desc: "Prof. Yasmine's proven mnemonics and score-maximizing strategies tailored to UM6SS style.",
  },
  {
    icon: <ClipboardList size={24} />,
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.1)',
    title: 'Official Exam Papers',
    desc: 'Every real UM6SS concours from 2014 to 2025 with official marking schemes and model answers.',
  },
  {
    icon: <Target size={24} />,
    color: '#E84C7C',
    bg: 'rgba(232,76,124,0.1)',
    title: '12 Years Coverage',
    desc: 'Comprehensive archive from 2014 through 2025 ensuring no pattern goes unnoticed.',
  },
  {
    icon: <TrendingUp size={24} />,
    color: '#E8A84C',
    bg: 'rgba(232,168,76,0.1)',
    title: 'Structured Progression',
    desc: 'Difficulty-ranked content for a methodical journey from fundamentals to expert-level mastery.',
  },
]

const whyYasmine = [
  { icon: <Users size={20} />, text: '500+ students guided to successful admission' },
  { icon: <TrendingUp size={20} />, text: '98% first-attempt success rate' },
  { icon: <Target size={20} />, text: 'Expert in math & info' },
]

export default function FeaturesSection() {
  return (
    <>
      {/* Features Grid */}
      <section className="section-pad bg-surface/50">
        <div className="container-main">
          <PageHeader
            badge="Platform Features"
            title={<>Everything You Need to <span className="gradient-gold">Succeed</span></>}
            subtitle="A complete ecosystem built around the real UM6SS concours structure, with expert-curated resources for every stage of preparation."
          />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: f.bg, border: `1px solid ${f.color}30`, color: f.color }}
                >
                  {f.icon}
                </div>
                <h3 className="text-foreground mb-2 text-lg">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Prof Yasmine */}
      <section className="section-pad grid-bg">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-5">
                <SectionBadge>Why Choose Prof. Yasmine</SectionBadge>
              </div>
              <h2 className="text-foreground mb-5">
                Guided by an Expert Who <span className="gradient-gold">Knows the System</span>
              </h2>
              <p className="text-muted leading-relaxed mb-8 text-sm">
                Professor Yasmine has spent over a decade at UM6SS, decoding the exact patterns
                and expectations of the medical entrance concours. Her platform isn&apos;t generic —
                every resource is specifically calibrated to the UM6SS English track format.
              </p>
              <div className="flex flex-col gap-3.5">
                {whyYasmine.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold-dim border border-gold/20 flex items-center justify-center text-gold shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-foreground text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Panel */}
            <div>
              <div className="glass-card-gold p-10 relative overflow-hidden">
                <div className="font-display text-[3.5rem] font-bold text-gold mb-2">12</div>
                <div className="text-foreground text-base font-semibold mb-2">Years of Official Exams</div>
                <div className="text-muted text-sm mb-8">2014 → 2025 fully covered</div>

                <div className="h-px bg-gold/15 mb-8" />

                {[
                  { label: 'Course Recaps', pct: 78, color: '#4CE87C' },
                  { label: 'Revision Series', pct: 92, color: '#9066EE' },
                  { label: 'Tips & Tricks', pct: 85, color: '#4CADE8' },
                  { label: 'Real Exam Papers', pct: 100, color: '#C9A84C' },
                ].map((bar, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs text-foreground">{bar.label}</span>
                      <span className="text-[0.75rem] font-bold" style={{ color: bar.color }}>{bar.pct}%</span>
                    </div>
                    <div className="h-[5px] rounded-sm bg-white/6 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                        className="h-full rounded-sm"
                        style={{ background: bar.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
