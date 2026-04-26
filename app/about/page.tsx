import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, Award, Users, MapPin, Mail, ArrowRight } from 'lucide-react'
import SectionBadge from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'About Prof. Yasmine | UM6SS Medical Concours Platform',
  description: 'Learn about Professor Yasmine, PhD in Mathematics and Computer Science, and creator of the leading preparation platform covering the medical entrance exams of every Moroccan faculty — UM6SS, FMPC, FMPR, FMPM and more.',
}

const timeline = [
  { year: '2012', title: 'PhD Completed', desc: 'Awarded a PhD in Mathematics and Computer Science, with research at the intersection of applied analysis and algorithms.' },
  { year: '2013', title: 'Started Teaching', desc: 'Began her teaching career as an independent educator, focusing on ambitious students preparing for competitive scientific and medical entrance exams.' },
  { year: '2015', title: 'First Concours Prep Program', desc: 'Created her first structured preparation series covering the medical concours of the leading Moroccan faculties, helping 40 students succeed on their first attempt.' },
  { year: '2018', title: '100 Students Milestone', desc: 'Surpassed 100 admitted students across UM6SS, FMPC, FMPR and FMPM with a remarkable 95% first-attempt success rate.' },
  { year: '2020', title: 'Digital Platform Launch', desc: 'Moved resources online, creating a centralized hub covering every medical faculty concours, all exam years, and all preparation categories.' },
  { year: '2023', title: '400+ Admitted Students', desc: 'Platform scaled to serve over 400 admitted students across every Moroccan medical faculty.' },
  { year: '2025', title: 'Full English Track Coverage', desc: 'Added a comprehensive English-track curriculum, aligned with the option anglaise format used by UM6SS and other institutions.' },
]

const expertise = [
  { label: 'Mathematical Analysis', pct: 98 },
  { label: 'Algorithms & Computer Science', pct: 96 },
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
                <SectionBadge>All Moroccan Medical Concours · Prep</SectionBadge>
              </div>
              <h1 className="text-foreground mb-4">
                Professor <span className="gradient-gold">Yasmine</span>
              </h1>
              <p className="text-muted text-base leading-relaxed mb-6">
                An independent educator holding a PhD in Mathematics and Computer Science.
                With over a decade of experience coaching students through the medical
                entrance concours of every Moroccan institution — UM6SS, FMPC, FMPR,
                FMPM, UIASS, UM6P and beyond — Prof. Yasmine has become a reference for
                anyone preparing these highly competitive exams.
              </p>
              <p className="text-muted text-base leading-relaxed mb-8">
                Her platform brings together official exam archives from all major medical
                faculties with the pedagogical insights she has refined over 13 years of
                dedicated one-on-one and group teaching, in both French and English tracks.
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
              <p className="text-gold text-[0.85rem] mb-6 font-semibold">Mathematics &amp; Computer Science</p>

              <div className="flex flex-col gap-3 mb-7">
                {[
                  { icon: <GraduationCap size={15} />, text: 'PhD in Mathematics & Computer Science' },
                  { icon: <Award size={15} />, text: '13 years of teaching experience' },
                  { icon: <Users size={15} />, text: '500+ students admitted' },
                  { icon: <MapPin size={15} />, text: 'Casablanca, Morocco' },
                  { icon: <Mail size={15} />, text: 'prof.univ.yasmine@gmail.com' },
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
          <p className="text-muted text-[0.95rem]">13 years building the definitive preparation resource for every Moroccan medical concours</p>
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
