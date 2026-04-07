'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Amine Benali',
    year: 'Admitted 2024',
    avatar: 'AB',
    color: '#C9A84C',
    rating: 5,
    text: 'Prof. Yasmine\'s platform was a game-changer. The structured approach with real exams and focused revision series helped me identify my weak areas and fix them systematically. I passed on my first attempt!',
  },
  {
    name: 'Nora El Fassi',
    year: 'Admitted 2023',
    avatar: 'NF',
    color: '#4CADE8',
    rating: 5,
    text: 'The Tips & Tricks section alone saved me 20+ minutes per exam. Prof. Yasmine knows exactly what UM6SS examiners look for. The course recaps are incredibly concise and exam-focused.',
  },
  {
    name: 'Youssef Alami',
    year: 'Admitted 2024',
    avatar: 'YA',
    color: '#7C4CE8',
    rating: 5,
    text: 'Having 12 years of exams in one place is invaluable. I could trace how the exam evolved and practice all the recurring topics. The English track format was perfectly aligned with UM6SS requirements.',
  },
  {
    name: 'Salma Tahiri',
    year: 'Admitted 2025',
    avatar: 'ST',
    color: '#4CE87C',
    rating: 5,
    text: 'What sets this platform apart is the depth — not just past papers but actual explanations, mnemonics, and techniques. Prof. Yasmine\'s expertise shines through every single document.',
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
    text: 'As an English track student, finding quality resources in the right format was a challenge. Prof. Yasmine\'s platform solved this completely. Every resource is perfectly adapted to our curriculum.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-pad" style={{ background: 'rgba(13,18,32,0.4)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
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
          }}>Student Success Stories</div>
          <h2 style={{ color: '#F5F0E8', marginBottom: '1rem' }}>
            Voices of <span className="gradient-gold">Admitted Students</span>
          </h2>
          <p style={{ color: '#8B8FA8', maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Over 500 students have transformed their preparation with Prof. Yasmine's platform.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              className="glass-card"
              style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}
            >
              {/* Quote icon */}
              <Quote size={32} style={{ color: `${t.color}20`, position: 'absolute', top: '1.25rem', right: '1.25rem' }} />

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#C9A84C" color="#C9A84C" />
                ))}
              </div>

              <p style={{ color: '#C8C4BE', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `${t.color}20`,
                  border: `1px solid ${t.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: t.color,
                  flexShrink: 0,
                }}>{t.avatar}</div>
                <div>
                  <div style={{ color: '#F5F0E8', fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: t.color, fontSize: '0.75rem', fontWeight: 600 }}>{t.year}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: '4rem',
            padding: '3rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ color: '#F5F0E8', marginBottom: '0.75rem', fontSize: '1.5rem' }}>
            Ready to Join the <span className="gradient-gold">Success Stories?</span>
          </h3>
          <p style={{ color: '#8B8FA8', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Start your preparation today with 12 years of curated resources.
          </p>
          <a href="/concours" className="btn-gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Begin Your Journey →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
