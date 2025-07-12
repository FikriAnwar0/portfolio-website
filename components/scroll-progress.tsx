"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight

      if (scrollHeight) {
        setScrollProgress(Math.min((currentProgress / scrollHeight) * 100, 100))
      }
    }

    updateScrollProgress()
    window.addEventListener("scroll", updateScrollProgress, { passive: true })
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/30 dark:bg-gray-800/30 z-50">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 transition-all duration-300 ease-out shadow-lg shadow-purple-500/50"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
