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

export default function Math({ latex, block = false, className, style }: Props) {
  const ref = useRef<HTMLSpanElement | HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    try {
      katex.render(latex, ref.current, {
        throwOnError: false,
        displayMode: block,
        output: 'html',
        trust: true,
      })
    } catch (e) {
      if (ref.current) ref.current.textContent = latex
    }
  }, [latex, block])

  if (block) {
    return <div ref={ref as React.RefObject<HTMLDivElement>} className={className} style={style} />
  }
  return <span ref={ref as React.RefObject<HTMLSpanElement>} className={className} style={style} />
}
