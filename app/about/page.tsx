import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, Award, BookOpen, Users, MapPin, Mail, ArrowRight } from 'lucide-react'

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
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Hero */}
      <div className="grid-bg" style={{ padding: '5rem 0', borderBottom: '1px solid rgba(201,168,76,0.08)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          <nav className="breadcrumb" style={{ marginBottom: '2rem' }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: '#C9A84C' }}>About</span>
          </nav>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            {/* Text */}
            <div>
              <div style={{
                display: 'inline-flex',
                padding: '4px 14px',
                borderRadius: '20px',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.25)',
                color: '#C9A84C',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: '1rem',
              }}>UM6SS · English Track</div>
              <h1 style={{ color: '#F5F0E8', marginBottom: '1rem' }}>
                Professor <span className="gradient-gold">Yasmine</span>
              </h1>
              <p style={{ color: '#8B8FA8', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                A distinguished mathematics professor at the Université Mohammed VI des Sciences de la Santé
                (UM6SS) in Casablanca, Morocco. With over a decade of experience guiding students through
                the rigorous medical entrance concours, Prof. Yasmine has established herself as the
                foremost authority on UM6SS exam preparation.
              </p>
              <p style={{ color: '#8B8FA8', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Her platform is the only resource specifically tailored to the English-track concours
                structure at UM6SS, combining official exam archives with expert pedagogical insights
                developed over 13 years of dedicated teaching.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/concours" className="btn-gold">
                  Explore Platform <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Profile Card */}
            <div className="glass-card-gold" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '200px', height: '200px',
                background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Avatar */}
              <div style={{
                width: '90px', height: '90px', borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.1))',
                border: '2px solid rgba(201,168,76,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-playfair)', fontSize: '2rem', fontWeight: 700,
                color: '#C9A84C', marginBottom: '1.25rem',
              }}>Y</div>

              <h3 style={{ color: '#F5F0E8', marginBottom: '0.25rem' }}>Prof. Yasmine</h3>
              <p style={{ color: '#C9A84C', fontSize: '0.85rem', marginBottom: '1.5rem', fontWeight: 600 }}>
                Mathematics · UM6SS
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {[
                  { icon: <GraduationCap size={15} />, text: 'PhD in Applied Mathematics' },
                  { icon: <Award size={15} />, text: '13 years at UM6SS' },
                  { icon: <Users size={15} />, text: '500+ students admitted' },
                  { icon: <MapPin size={15} />, text: 'Casablanca, Morocco' },
                  { icon: <Mail size={15} />, text: 'yasmine@um6ss.ma' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8B8FA8', fontSize: '0.85rem' }}>
                    <span style={{ color: '#C9A84C' }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Expertise Bars */}
              <div style={{ height: '1px', background: 'rgba(201,168,76,0.15)', marginBottom: '1.5rem' }} />
              {expertise.map((item, i) => (
                <div key={i} style={{ marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#F5F0E8' }}>{item.label}</span>
                    <span style={{ fontSize: '0.7rem', color: '#C9A84C', fontWeight: 700 }}>{item.pct}%</span>
                  </div>
                  <div style={{ height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)' }}>
                    <div style={{ width: `${item.pct}%`, height: '100%', background: 'linear-gradient(90deg, #C9A84C, #E8C96A)', borderRadius: '2px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 2rem 6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ color: '#F5F0E8', marginBottom: '0.75rem' }}>
            An Academic <span className="gradient-gold">Journey</span>
          </h2>
          <p style={{ color: '#8B8FA8', fontSize: '0.95rem' }}>13 years building the definitive UM6SS preparation resource</p>
        </div>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '0', top: '8px', bottom: '8px',
            width: '1px',
            background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.4) 10%, rgba(201,168,76,0.4) 90%, transparent)',
          }} />

          {timeline.map((item, i) => (
            <div key={i} style={{ position: 'relative', paddingLeft: '2rem', paddingBottom: '2.5rem' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '-5px', top: '4px',
                width: '10px', height: '10px', borderRadius: '50%',
                background: '#C9A84C',
                boxShadow: '0 0 12px rgba(201,168,76,0.5)',
              }} />
              <div style={{ fontSize: '0.78rem', color: '#C9A84C', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                {item.year}
              </div>
              <h3 style={{ color: '#F5F0E8', fontSize: '1.05rem', marginBottom: '0.4rem' }}>{item.title}</h3>
              <p style={{ color: '#8B8FA8', fontSize: '0.875rem', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
