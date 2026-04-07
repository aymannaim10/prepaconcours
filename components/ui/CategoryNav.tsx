'use client'
import Link from 'next/link'
import { Category } from '@/lib/data'

interface Props {
  categories: Category[]
  year: number
  currentCategoryId: string
}

export default function CategoryNav({ categories, year, currentCategoryId }: Props) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {categories.filter(c => c.id !== currentCategoryId).map((cat) => (
        <Link
          key={cat.id}
          href={`/concours/${year}/${cat.id}`}
          style={{
            padding: '0.4rem 0.9rem',
            borderRadius: '6px',
            border: '1px solid rgba(255,255,255,0.06)',
            color: '#8B8FA8',
            textDecoration: 'none',
            fontSize: '0.75rem',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${cat.color}50`
            e.currentTarget.style.color = cat.color
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
            e.currentTarget.style.color = '#8B8FA8'
          }}
        >
          {cat.icon} {cat.label}
        </Link>
      ))}
    </div>
  )
}
