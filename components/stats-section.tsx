"use client"

import { useState, useEffect, useRef } from "react"

interface Stat {
  value: number
  label: string
  icon: string
}

const stats: Stat[] = [
  {
    value: 10,
    label: "Years of Experience",
    icon: "⏱️",
  },
  {
    value: 50,
    label: "Products",
    icon: "💊",
  },
  {
    value: 100,
    label: "Satisfied Clients",
    icon: "👥",
  },
  {
    value: 1,
    label: "State-of-the-Art Manufacturing Unit",
    icon: "🏭",
  },
]

function CountUpNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for professional feel
      const easeOutQuad = 1 - Math.pow(1 - progress, 2)
      setCount(Math.floor(target * easeOutQuad))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return <div ref={ref}>{count}+</div>
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Our Growth in Numbers</h2>
          <p className="text-lg md:text-xl text-blue-100 text-pretty max-w-3xl mx-auto">
            Delivering quality pharmaceuticals with proven expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>

              <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-3">
                <CountUpNumber target={stat.value} />
              </div>

              <p className="text-lg text-slate-700 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
