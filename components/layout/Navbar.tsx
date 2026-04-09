'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
        scrolled
          ? 'bg-background/92 backdrop-blur-xl border-b border-gold/15'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="no-underline flex items-center gap-3">
            <div className="w-[42px] h-[42px] rounded-[10px] bg-gradient-to-br from-gold to-[#A8872A] flex items-center justify-center text-base font-extrabold text-background font-display shadow-[0_4px_20px_rgba(201,168,76,0.3)] shrink-0">
              YM
            </div>
            <div>
              <div className="font-display text-[1.05rem] font-bold text-foreground leading-tight">
                Prof. Yasmine
              </div>
              <div className="text-[0.65rem] text-gold tracking-widest uppercase leading-tight">
                UM6SS · Medical Prep
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-muted text-sm font-medium rounded-md hover:text-foreground hover:bg-gold/8 transition-colors tracking-[0.02em] no-underline focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/concours" className="btn-gold btn-sm ml-4">
              Start Prep
            </Link>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex md:hidden bg-transparent border border-gold/30 rounded-lg p-2 cursor-pointer text-gold"
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
            className="bg-background/98 backdrop-blur-xl border-t border-gold/10 p-6 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 text-foreground no-underline text-base font-medium rounded-lg border-b border-white/5 block focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/concours" onClick={() => setOpen(false)} className="btn-gold mt-2 text-center">
              Start Preparation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
