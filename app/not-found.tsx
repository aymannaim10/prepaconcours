import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 text-center grid-bg">
      <div>
        <div className="font-display text-[clamp(5rem,15vw,10rem)] font-black text-gold/15 leading-none mb-4 select-none">
          404
        </div>
        <h1 className="text-foreground text-[1.8rem] mb-3">Page Not Found</h1>
        <p className="text-muted text-base mb-8 max-w-[400px] mx-auto">
          This page doesn&apos;t exist. Perhaps you were looking for a specific exam year or category?
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
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
