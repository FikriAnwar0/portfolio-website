"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function EnhancedFloatingElements() {
  const { theme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Mouse follower */}
      <div
        className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30 transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Enhanced floating shapes */}
      <div
        className={`absolute top-20 left-10 w-20 h-20 ${
          theme === "dark"
            ? "bg-gradient-to-br from-purple-400/10 to-blue-400/10"
            : "bg-gradient-to-br from-purple-400/20 to-blue-400/20"
        } rounded-full animate-bounce shadow-2xl shadow-purple-500/20`}
        style={{
          animationDelay: "0s",
          animationDuration: "4s",
          filter: "blur(0.5px)",
        }}
      />

      <div
        className={`absolute top-40 right-20 w-16 h-16 ${
          theme === "dark"
            ? "bg-gradient-to-br from-pink-400/10 to-purple-400/10"
            : "bg-gradient-to-br from-pink-400/20 to-purple-400/20"
        } rounded-lg rotate-45 animate-pulse shadow-2xl shadow-pink-500/20`}
        style={{ animationDelay: "1s" }}
      />

      <div
        className={`absolute bottom-40 left-20 w-12 h-12 ${
          theme === "dark"
            ? "bg-gradient-to-br from-blue-400/10 to-cyan-400/10"
            : "bg-gradient-to-br from-blue-400/20 to-cyan-400/20"
        } rounded-full animate-ping shadow-2xl shadow-blue-500/20`}
        style={{ animationDelay: "2s" }}
      />

      <div
        className={`absolute bottom-20 right-40 w-24 h-24 ${
          theme === "dark"
            ? "bg-gradient-to-br from-green-400/10 to-blue-400/10"
            : "bg-gradient-to-br from-green-400/20 to-blue-400/20"
        } rounded-full animate-bounce shadow-2xl shadow-green-500/20`}
        style={{
          animationDelay: "0.5s",
          animationDuration: "5s",
        }}
      />

      {/* New enhanced elements */}
      <div className="absolute top-60 right-10 animate-float">
        <div
          className={`w-8 h-8 ${
            theme === "dark"
              ? "bg-gradient-to-br from-yellow-400/20 to-orange-400/20"
              : "bg-gradient-to-br from-yellow-400/30 to-orange-400/30"
          } rounded-lg rotate-12 shadow-2xl shadow-yellow-500/20`}
        />
      </div>

      <div className="absolute bottom-60 left-40 animate-float-delayed">
        <div
          className={`w-6 h-6 ${
            theme === "dark"
              ? "bg-gradient-to-br from-red-400/20 to-pink-400/20"
              : "bg-gradient-to-br from-red-400/30 to-pink-400/30"
          } rounded-full shadow-2xl shadow-red-500/20`}
        />
      </div>

      {/* Sparkle effects */}
      <div className="absolute top-1/4 left-1/4 animate-ping">
        <div className="w-1 h-1 bg-purple-400 rounded-full" />
      </div>
      <div className="absolute top-3/4 right-1/4 animate-ping" style={{ animationDelay: "1s" }}>
        <div className="w-1 h-1 bg-blue-400 rounded-full" />
      </div>
      <div className="absolute top-1/2 left-3/4 animate-ping" style={{ animationDelay: "2s" }}>
        <div className="w-1 h-1 bg-indigo-400 rounded-full" />
      </div>
    </div>
  )
}
