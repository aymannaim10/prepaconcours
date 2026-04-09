import Link from 'next/link'

interface Props {
  prev?: number
  next?: number
}

export default function YearNavLinks({ prev, next }: Props) {
  const linkClass = 'py-2.5 px-5 rounded-lg bg-surface/60 border border-white/6 text-muted no-underline text-sm transition-all duration-200 flex items-center gap-1.5 hover:border-gold/30 hover:text-foreground focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none'

  return (
    <div className="flex gap-3 items-center">
      {prev && (
        <Link href={`/concours/${prev}`} className={linkClass}>
          ← {prev}
        </Link>
      )}
      {next && (
        <Link href={`/concours/${next}`} className={linkClass}>
          {next} →
        </Link>
      )}
    </div>
  )
}
