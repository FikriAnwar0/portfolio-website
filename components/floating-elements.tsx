"use client"

import { useTheme } from "next-themes"

export function FloatingElements() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating geometric shapes */}
      <div
        className={`absolute top-20 left-10 w-20 h-20 ${
          theme === "dark"
            ? "bg-gradient-to-br from-purple-400/10 to-blue-400/10"
            : "bg-gradient-to-br from-purple-400/20 to-blue-400/20"
        } rounded-full animate-bounce shadow-lg`}
        style={{ animationDelay: "0s", animationDuration: "4s" }}
      />
      <div
        className={`absolute top-40 right-20 w-16 h-16 ${
          theme === "dark"
            ? "bg-gradient-to-br from-pink-400/10 to-purple-400/10"
            : "bg-gradient-to-br from-pink-400/20 to-purple-400/20"
        } rounded-lg rotate-45 animate-pulse shadow-lg`}
        style={{ animationDelay: "1s" }}
      />
      <div
        className={`absolute bottom-40 left-20 w-12 h-12 ${
          theme === "dark"
            ? "bg-gradient-to-br from-blue-400/10 to-cyan-400/10"
            : "bg-gradient-to-br from-blue-400/20 to-cyan-400/20"
        } rounded-full animate-ping shadow-lg`}
        style={{ animationDelay: "2s" }}
      />
      <div
        className={`absolute bottom-20 right-40 w-24 h-24 ${
          theme === "dark"
            ? "bg-gradient-to-br from-green-400/10 to-blue-400/10"
            : "bg-gradient-to-br from-green-400/20 to-blue-400/20"
        } rounded-full animate-bounce shadow-lg`}
        style={{ animationDelay: "0.5s", animationDuration: "5s" }}
      />

      {/* Additional floating elements */}
      <div className="absolute top-60 right-10 animate-float">
        <div
          className={`w-8 h-8 ${
            theme === "dark"
              ? "bg-gradient-to-br from-yellow-400/20 to-orange-400/20"
              : "bg-gradient-to-br from-yellow-400/30 to-orange-400/30"
          } rounded-lg rotate-12 shadow-lg`}
        />
      </div>
      <div className="absolute bottom-60 left-40 animate-float-delayed">
        <div
          className={`w-6 h-6 ${
            theme === "dark"
              ? "bg-gradient-to-br from-red-400/20 to-pink-400/20"
              : "bg-gradient-to-br from-red-400/30 to-pink-400/30"
          } rounded-full shadow-lg`}
        />
      </div>
    </div>
  )
}
