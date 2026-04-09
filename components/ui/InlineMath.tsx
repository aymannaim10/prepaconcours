'use client'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface Props {
  text: string
  className?: string
}

/**
 * Renders text that may contain inline math delimited by $...$
 * Plain text segments are rendered as-is; math segments are rendered via KaTeX.
 */
export default function InlineMath({ text, className }: Props) {
  const parts = text.split(/(\$[^$]+\$)/g)

  return (
    <span className={`leading-relaxed ${className || ''}`}>
      {parts.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          const latex = part.slice(1, -1)
          try {
            const html = katex.renderToString(latex, {
              throwOnError: false,
              displayMode: false,
              output: 'html',
              trust: true,
              strict: false,
            })
            return <span key={i} style={{ verticalAlign: 'baseline' }} dangerouslySetInnerHTML={{ __html: html }} />
          } catch {
            return <span key={i}>{latex}</span>
          }
        }
        return <span key={i}>{part}</span>
      })}
    </span>
  )
}
