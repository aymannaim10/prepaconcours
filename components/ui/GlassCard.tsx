import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  gold?: boolean
}

export default function GlassCard({ children, className = '', gold = false }: GlassCardProps) {
  return (
    <div className={`${gold ? 'glass-card-gold' : 'glass-card'} p-7 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300 ${className}`}>
      {children}
    </div>
  )
}
