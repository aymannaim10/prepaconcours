'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate send
    setTimeout(() => setStatus('sent'), 600)
  }

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: '10px',
    background: 'rgba(13,18,32,0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#F5F0E8',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s',
  } as React.CSSProperties

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="grid-bg" style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          <nav className="breadcrumb" style={{ marginBottom: '2rem' }}>
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: '#C9A84C' }}>Contact</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Left Info */}
            <div>
              <div style={{
                display: 'inline-flex', padding: '4px 14px', borderRadius: '20px',
                background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)',
                color: '#C9A84C', fontSize: '0.75rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', fontWeight: 700, marginBottom: '1rem',
              }}>Get in Touch</div>
              <h1 style={{ color: '#F5F0E8', marginBottom: '1rem' }}>
                Contact <span className="gradient-gold">Prof. Yasmine</span>
              </h1>
              <p style={{ color: '#8B8FA8', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Have questions about the platform, resources, or your preparation strategy?
                Prof. Yasmine is happy to help guide you on your journey to medical school.
              </p>

              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'yasmine@um6ss.ma' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'UM6SS, Casablanca, Morocco' },
                { icon: <Phone size={18} />, label: 'Inquiries', value: 'Via email preferred' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#C9A84C', flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ color: '#8B8FA8', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ color: '#F5F0E8', fontSize: '0.9rem', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card-gold"
              style={{ padding: '2.5rem' }}
            >
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle size={48} color="#4CE87C" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ color: '#F5F0E8', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: '#8B8FA8', fontSize: '0.9rem' }}>
                    Prof. Yasmine will get back to you soon. In the meantime, start exploring the exam library.
                  </p>
                  <Link href="/concours" className="btn-gold" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                    Explore Exams
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <h3 style={{ color: '#F5F0E8', marginBottom: '0.5rem' }}>Send a Message</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ color: '#8B8FA8', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>Full Name</label>
                      <input
                        required
                        style={inputStyle}
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                      />
                    </div>
                    <div>
                      <label style={{ color: '#8B8FA8', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>Email</label>
                      <input
                        type="email"
                        required
                        style={inputStyle}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ color: '#8B8FA8', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>Subject</label>
                    <input
                      required
                      style={inputStyle}
                      placeholder="How can Prof. Yasmine help?"
                      value={form.subject}
                      onChange={(e) => setForm(f => ({ ...f, subject: e.target.value }))}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                  <div>
                    <label style={{ color: '#8B8FA8', fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      placeholder="Tell us about your preparation goals, questions about specific exam years, or any other inquiry..."
                      value={form.message}
                      onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                  <button type="submit" className="btn-gold" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
