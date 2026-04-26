'use client'

import { useEffect, useState, type ReactNode } from 'react'

/**
 * Renders children only when the page is served from a local development host
 * (localhost, 127.0.0.1, ::1, or RFC1918 private ranges). Returns nothing on the
 * deployed site. Used to hide year tiles for years that don't have published
 * exam content while keeping them accessible locally.
 */
export default function LocalOnly({ children }: { children: ReactNode }) {
  const [isLocal, setIsLocal] = useState(false)
  useEffect(() => {
    const h = window.location.hostname
    setIsLocal(
      h === 'localhost' ||
      h === '127.0.0.1' ||
      h === '::1' ||
      h.startsWith('192.168.') ||
      h.startsWith('10.') ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(h)
    )
  }, [])
  if (!isLocal) return null
  return <>{children}</>
}
