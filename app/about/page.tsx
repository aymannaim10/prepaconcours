import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, Award, Users, MapPin, Mail, ArrowRight } from 'lucide-react'
import SectionBadge from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'About Prof. Yasmine | UM6SS Medical Concours Platform',
  description: 'Learn about Professor Yasmine, mathematics professor at UM6SS and creator of Morocco\'s leading English-track medical entrance exam preparation platform.',
}

const timeline = [
  { year: '2012', title: 'Joined UM6SS', desc: 'Appointed as Mathematics Professor at Université Mohammed VI des Sciences de la Santé, Casablanca.' },
  { year: '2015', title: 'Launched First Prep Program', desc: 'Created her first structured concours preparation series, helping 40 students succeed in their first year.' },
  { year: '2018', title: '100 Students Milestone', desc: 'Surpassed 100 admitted students with a remarkable 95% first-attempt success rate.' },
  { year: '2020', title: 'Digital Platform Launch', desc: 'Moved resources online, creating a centralized hub for all exam years and categories.' },
  { year: '2023', title: '400+ Admitted Students', desc: 'Platform scaled to serve over 400 admitted students, now covering all years from 2014 to present.' },
  { year: '2025', title: 'Full English Track Coverage', desc: 'Launched comprehensive English-track curriculum, fully aligned with UM6SS option anglaise format.' },
]

const expertise = [
  { label: 'Mathematical Analysis', pct: 98 },
  { label: 'Linear Algebra', pct: 95 },
  { label: 'Probability & Statistics', pct: 97 },
  { label: 'Exam Strategy & Pedagogy', pct: 100 },
]

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="grid-bg py-20 border-b border-gold/8 relative overflow-hidden">
        <div className="container-main relative">
          <nav className="breadcrumb mb-8">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="text-gold">About</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="mb-4">
                <SectionBadge>UM6SS · English Track</SectionBadge>
              </div>
              <h1 className="text-foreground mb-4">
                Professor <span className="gradient-gold">Yasmine</span>
              </h1>
              <p className="text-muted text-base leading-relaxed mb-6">
                A distinguished mathematics professor at the Université Mohammed VI des Sciences de la Santé
                (UM6SS) in Casablanca, Morocco. With over a decade of experience guiding students through
                the rigorous medical entrance concours, Prof. Yasmine has established herself as the
                foremost authority on UM6SS exam preparation.
              </p>
              <p className="text-muted text-base leading-relaxed mb-8">
                Her platform is the only resource specifically tailored to the English-track concours
                structure at UM6SS, combining official exam archives with expert pedagogical insights
                developed over 13 years of dedicated teaching.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/concours" className="btn-gold">
                  Explore Platform <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Profile Card */}
            <div className="glass-card-gold p-10 relative overflow-hidden">
              {/* Avatar */}
              <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border-2 border-gold/40 flex items-center justify-center font-display text-[2rem] font-bold text-gold mb-5">
                Y
              </div>

              <h3 className="text-foreground mb-1">Prof. Yasmine</h3>
              <p className="text-gold text-[0.85rem] mb-6 font-semibold">Mathematics · UM6SS</p>

              <div className="flex flex-col gap-3 mb-7">
                {[
                  { icon: <GraduationCap size={15} />, text: 'PhD in Applied Mathematics' },
                  { icon: <Award size={15} />, text: '13 years at UM6SS' },
                  { icon: <Users size={15} />, text: '500+ students admitted' },
                  { icon: <MapPin size={15} />, text: 'Casablanca, Morocco' },
                  { icon: <Mail size={15} />, text: 'yasmine@um6ss.ma' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-muted text-[0.85rem]">
                    <span className="text-gold">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Expertise Bars */}
              <div className="h-px bg-gold/15 mb-6" />
              {expertise.map((item, i) => (
                <div key={i} className="mb-3.5">
                  <div className="flex justify-between mb-1">
                    <span className="text-[0.75rem] text-foreground">{item.label}</span>
                    <span className="text-[0.7rem] text-gold font-bold">{item.pct}%</span>
                  </div>
                  <div className="h-1 rounded-sm bg-white/6">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-gold-light rounded-sm"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-[900px] mx-auto px-8 py-20 pb-24">
        <div className="text-center mb-14">
          <h2 className="text-foreground mb-3">
            An Academic <span className="gradient-gold">Journey</span>
          </h2>
          <p className="text-muted text-[0.95rem]">13 years building the definitive UM6SS preparation resource</p>
        </div>

        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

          {timeline.map((item, i) => (
            <div key={i} className="relative pl-8 pb-10">
              {/* Dot */}
              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_12px_rgba(201,168,76,0.5)]" />
              <div className="text-[0.78rem] text-gold font-bold tracking-[0.06em] mb-1.5">
                {item.year}
              </div>
              <h3 className="text-foreground text-[1.05rem] mb-1.5">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
