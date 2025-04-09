'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function BodyClassHandler() {
  const pathname = usePathname()

  useEffect(() => {
    const isHomePage = pathname === '/' && !window.location.search
    document.body.className = isHomePage ? 'home-page' : 'other-page'
  }, [pathname])

  return null
}