'use client'
import Link from 'next/link'

interface Props {
  prev?: number
  next?: number
}

export default function YearNavLinks({ prev, next }: Props) {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      {prev && (
        <Link
          href={`/concours/${prev}`}
          className="year-nav-link"
        >
          ← {prev}
        </Link>
      )}
      {next && (
        <Link
          href={`/concours/${next}`}
          className="year-nav-link"
        >
          {next} →
        </Link>
      )}
      <style>{`
        .year-nav-link {
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          background: rgba(13,18,32,0.6);
          border: 1px solid rgba(255,255,255,0.06);
          color: #8B8FA8;
          text-decoration: none;
          font-size: 0.85rem;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .year-nav-link:hover {
          border-color: rgba(201,168,76,0.3);
          color: #F5F0E8;
        }
      `}</style>
    </div>
  )
}
