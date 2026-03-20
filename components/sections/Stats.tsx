'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const stats = [
  { value: 10000, suffix: '+', label: 'AI Models Deployed' },
  { value: 5000, suffix: '+', label: 'Workflows Automated' },
  { value: 99, suffix: '.9%', label: 'Platform Uptime' },
  { value: 2, suffix: 'M+', label: 'Hours Saved' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative py-section bg-surface overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
           }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn delay={0}>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-500 text-sm font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              Platform Performance
            </span>
            <h2 className="font-heading font-black text-display-lg text-content-primary">
              Trusted by Industry Leaders
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100} direction="up">
              <div className="relative group">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/5 rounded-card-lg blur-xl transition-all duration-500" />
                
                {/* Card */}
                <div className="relative p-6 rounded-card-lg border border-surface-border bg-surface-raised overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
                  
                  <div className="font-heading font-black text-[clamp(2rem,4vw,3rem)] leading-none bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-400 mb-3">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium text-content-secondary">{stat.label}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      </div>
    </section>
  )
}