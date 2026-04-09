import type { ReactNode } from 'react'

interface SectionBadgeProps {
  children: ReactNode
  icon?: ReactNode
}

export default function SectionBadge({ children, icon }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-dim border border-gold/25 text-gold text-xs font-bold tracking-widest uppercase">
      {icon}
      {children}
    </div>
  )
}
