'use client'
import Link from 'next/link'
import { GraduationCap, MapPin, Mail, Phone, ExternalLink } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'Exam Library', href: '/concours' },
    { label: '2025 Exams', href: '/concours/2025' },
    { label: '2024 Exams', href: '/concours/2024' },
    { label: '2023 Exams', href: '/concours/2023' },
  ],
  Resources: [
    { label: 'Real Exams', href: '/concours' },
    { label: 'Tips & Tricks', href: '/concours' },
    { label: 'Revision Series', href: '/concours' },
    { label: 'Course Recap', href: '/concours' },
  ],
  About: [
    { label: 'Prof. Yasmine', href: '/about' },
    { label: 'UM6SS', href: 'https://um6ss.ma', },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(201,168,76,0.12)',
      background: 'linear-gradient(180deg, var(--color-background) 0%, #050810 100%)',
      padding: '4rem 0 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #C9A84C, #A8872A)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-playfair)',
                fontWeight: 800,
                fontSize: '1rem',
                color: '#070B14',
              }}>YM</div>
              <div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, color: '#F5F0E8', fontSize: '1rem' }}>
                  Prof. Yasmine
                </div>
                <div style={{ fontSize: '0.65rem', color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Medical Prep · UM6SS
                </div>
              </div>
            </div>
            <p style={{ color: '#8B8FA8', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Premium medical entrance examination preparation platform at the Université Mohammed VI des Sciences de la Santé, Morocco.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { icon: <MapPin size={14} />, text: 'Mohammed VI University, Casablanca, Morocco' },
                { icon: <Mail size={14} />, text: 'yasmine@um6ss.ma' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#8B8FA8', fontSize: '0.8rem' }}>
                  <span style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}>{section}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: '#8B8FA8',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#F5F0E8' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#8B8FA8' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: '#8B8FA8' }}>
            © {new Date().getFullYear()} Professor Yasmine – UM6SS Medical Concours Platform. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#4A4E62' }}>
            English Track · Université Mohammed VI des Sciences de la Santé
          </p>
        </div>
      </div>
    </footer>
  )
}
