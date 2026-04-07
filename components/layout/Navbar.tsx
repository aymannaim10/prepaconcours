'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/concours', label: 'Exam Library' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(7, 11, 20, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(201,168,76,0.15)'
          : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #C9A84C, #A8872A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              fontWeight: 800,
              color: '#070B14',
              fontFamily: 'var(--font-playfair)',
              boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
              flexShrink: 0,
            }}>YM</div>
            <div>
              <div style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#F5F0E8',
                lineHeight: 1.1,
              }}>Prof. Yasmine</div>
              <div style={{
                fontSize: '0.65rem',
                color: '#C9A84C',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                lineHeight: 1.2,
              }}>UM6SS · Medical Prep</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '0.5rem 1rem',
                  color: '#8B8FA8',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F5F0E8'
                  e.currentTarget.style.background = 'rgba(201,168,76,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8B8FA8'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/concours" className="btn-gold" style={{ marginLeft: '1rem', padding: '0.55rem 1.2rem', fontSize: '0.8rem' }}>
              Start Prep
            </Link>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              color: '#C9A84C',
            }}
            className="mobile-burger"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'rgba(7,11,20,0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(201,168,76,0.1)',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: '0.75rem 1rem',
                  color: '#F5F0E8',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderRadius: '8px',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  display: 'block',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/concours" onClick={() => setOpen(false)} className="btn-gold" style={{ marginTop: '0.5rem', textAlign: 'center' }}>
              Start Preparation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
