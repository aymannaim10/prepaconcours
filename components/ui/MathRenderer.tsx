'use client'
import { useEffect, useRef } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface Props {
  latex: string
  block?: boolean
  className?: string
  style?: React.CSSProperties
}

/**
 * MathRenderer – renders LaTeX math using KaTeX.
 * Named MathRenderer (not Math) to avoid collision with global Math object.
 */
export default function MathRenderer({ latex, block = false, className, style }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    try {
      katex.render(latex, el as HTMLElement, {
        throwOnError: false,
        displayMode: block,
        output: 'html',
        trust: true,
        strict: false,
      })
    } catch {
      if (el) el.textContent = latex
    }
  }, [latex, block])

  if (block) {
    return <div ref={ref as React.RefObject<HTMLDivElement>} className={className} style={style} />
  }
  return <span ref={ref as React.RefObject<HTMLSpanElement>} className={className} style={style} />
}
