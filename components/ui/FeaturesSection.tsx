'use client'
import { motion } from 'framer-motion'
import { ClipboardList, Lightbulb, BookOpenCheck, BookMarked, Target, TrendingUp, Users, Award } from 'lucide-react'

const features = [
  {
    icon: <ClipboardList size={24} />,
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.1)',
    title: 'Official Exam Papers',
    desc: 'Every real UM6SS concours from 2014 to 2025 with official marking schemes and model answers.',
  },
  {
    icon: <Lightbulb size={24} />,
    color: '#4CADE8',
    bg: 'rgba(76,173,232,0.1)',
    title: 'Strategic Tips & Tricks',
    desc: 'Prof. Yasmine\'s proven mnemonics and score-maximizing strategies tailored to UM6SS style.',
  },
  {
    icon: <BookOpenCheck size={24} />,
    color: '#7C4CE8',
    bg: 'rgba(124,76,232,0.1)',
    title: 'Curated Revision Series',
    desc: 'Topic-specific practice sets and exercises ordered by difficulty for deep exam mastery.',
  },
  {
    icon: <BookMarked size={24} />,
    color: '#4CE87C',
    bg: 'rgba(76,232,124,0.1)',
    title: 'Concise Course Recaps',
    desc: 'Crystal-clear summaries of all mathematical concepts required to master the concours.',
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
  { icon: <Award size={20} />, text: '10+ years teaching mathematics at UM6SS' },
  { icon: <Users size={20} />, text: '500+ students guided to successful admission' },
  { icon: <TrendingUp size={20} />, text: '98% first-attempt success rate' },
  { icon: <Target size={20} />, text: 'Expert in the UM6SS exam format and expectations' },
]

export default function FeaturesSection() {
  return (
    <>
      {/* Features Grid */}
      <section className="section-pad" style={{ background: 'rgba(13,18,32,0.5)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
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
            }}>Platform Features</div>
            <h2 style={{ color: '#F5F0E8', marginBottom: '1rem' }}>
              Everything You Need to <span className="gradient-gold">Succeed</span>
            </h2>
            <p style={{ color: '#8B8FA8', maxWidth: '520px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              A complete ecosystem built around the real UM6SS concours structure, with expert-curated resources for every stage of preparation.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card"
                style={{ padding: '1.75rem', transition: 'box-shadow 0.3s' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px ${f.bg}`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: f.bg,
                  border: `1px solid ${f.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: f.color,
                  marginBottom: '1.25rem',
                }}>{f.icon}</div>
                <h3 style={{ color: '#F5F0E8', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{f.title}</h3>
                <p style={{ color: '#8B8FA8', fontSize: '0.875rem', lineHeight: 1.65 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Prof Yasmine */}
      <section className="section-pad grid-bg">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
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
                marginBottom: '1.25rem',
              }}>Why Choose Prof. Yasmine</div>
              <h2 style={{ color: '#F5F0E8', marginBottom: '1.25rem' }}>
                Guided by an Expert Who <span className="gradient-gold">Knows the System</span>
              </h2>
              <p style={{ color: '#8B8FA8', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
                Professor Yasmine has spent over a decade at UM6SS, decoding the exact patterns
                and expectations of the medical entrance concours. Her platform isn't generic —
                every resource is specifically calibrated to the UM6SS English track format.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {whyYasmine.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(201,168,76,0.1)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#C9A84C',
                      flexShrink: 0,
                    }}>{item.icon}</div>
                    <span style={{ color: '#F5F0E8', fontSize: '0.9rem' }}>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="glass-card-gold" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '3.5rem', fontWeight: 700, color: '#C9A84C', marginBottom: '0.5rem' }}>
                  12
                </div>
                <div style={{ color: '#F5F0E8', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Years of Official Exams</div>
                <div style={{ color: '#8B8FA8', fontSize: '0.875rem', marginBottom: '2rem' }}>2014 → 2025 fully covered</div>

                <div style={{ height: '1px', background: 'rgba(201,168,76,0.15)', marginBottom: '2rem' }} />

                {[
                  { label: 'Real Exam Papers', pct: 100, color: '#C9A84C' },
                  { label: 'Tips & Tricks', pct: 85, color: '#4CADE8' },
                  { label: 'Revision Series', pct: 92, color: '#7C4CE8' },
                  { label: 'Course Recaps', pct: 78, color: '#4CE87C' },
                ].map((bar, i) => (
                  <div key={i} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.8rem', color: '#F5F0E8' }}>{bar.label}</span>
                      <span style={{ fontSize: '0.75rem', color: bar.color, fontWeight: 700 }}>{bar.pct}%</span>
                    </div>
                    <div style={{ height: '5px', borderRadius: '3px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15 + 0.3, ease: 'easeOut' }}
                        style={{ height: '100%', borderRadius: '3px', background: bar.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
