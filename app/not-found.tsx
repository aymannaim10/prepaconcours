import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
    }} className="grid-bg">
      <div>
        <div style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(5rem, 15vw, 10rem)',
          fontWeight: 900,
          color: 'rgba(201,168,76,0.15)',
          lineHeight: 1,
          marginBottom: '1rem',
          userSelect: 'none',
        }}>404</div>
        <h1 style={{ color: '#F5F0E8', fontSize: '1.8rem', marginBottom: '0.75rem' }}>
          Page Not Found
        </h1>
        <p style={{ color: '#8B8FA8', fontSize: '1rem', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
          This page doesn't exist. Perhaps you were looking for a specific exam year or category?
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-gold">
            <Home size={16} /> Go Home
          </Link>
          <Link href="/concours" className="btn-outline">
            <ArrowLeft size={16} /> Exam Library
          </Link>
        </div>
      </div>
    </div>
  )
}
