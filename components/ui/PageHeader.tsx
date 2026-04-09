import type { ReactNode } from 'react'
import SectionBadge from './SectionBadge'

interface PageHeaderProps {
  badge: string
  badgeIcon?: ReactNode
  title: ReactNode
  subtitle?: string
  center?: boolean
}

export default function PageHeader({ badge, badgeIcon, title, subtitle, center = true }: PageHeaderProps) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <div className="mb-4">
        <SectionBadge icon={badgeIcon}>{badge}</SectionBadge>
      </div>
      <h2 className="text-foreground mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-muted text-base leading-relaxed ${center ? 'max-w-[520px] mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
