import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const CONTENT = {
  eyebrow: 'Ready to Transform Your Business?',
  heading: 'Unlock Intelligent Solutions. Accelerate Your Future.',
  subtext: 'Join forward-thinking organizations leveraging our all-in-one AI platform to simplify work, automate processes, and accelerate digital transformation.',
  cta: { label: 'Book Demo', href: '#contact' },
  secondary: { label: 'Explore Platform', href: '#features' },
  badge: 'Trusted by innovative teams worldwide',
}

export default function CTA() {
  return (
    <section className="py-section-lg relative overflow-hidden bg-brand-950">
      {/* Background depth layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-500/15 blur-[180px] animate-pulse-glow" />
        {/* Secondary glow orb */}
        <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-400/8 blur-[120px]" />
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn delay={0}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            {CONTENT.badge}
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <p className="text-sm font-medium tracking-widest uppercase text-brand-400 mb-4">
            {CONTENT.eyebrow}
          </p>
        </AnimateIn>

        <AnimateIn delay={200}>
          <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-content-primary mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-violet-400 to-brand-400 bg-[length:200%_auto] animate-shimmer">
              {CONTENT.heading.split('.').slice(0, 1).join('.')}
            </span>
            <span className="block text-content-primary mt-2">
              {CONTENT.heading.split('.').slice(1).join('.').trim()}
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={300}>
          <p className="text-lg md:text-xl text-content-secondary/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {CONTENT.subtext}
          </p>
        </AnimateIn>

        <AnimateIn delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA with glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-card scale-110 opacity-60" />
              <a
                href={CONTENT.cta.href}
                className="relative z-10 px-10 py-4 font-body font-semibold text-content-inverse bg-brand-500 rounded-card hover:bg-brand-700 transition-all duration-300 ease-expo-out active:scale-[0.97] shadow-glow hover:shadow-glow-sm"
              >
                {CONTENT.cta.label}
              </a>
            </div>
            <a
              href={CONTENT.secondary.href}
              className="group relative px-10 py-4 font-body font-medium border border-surface-border text-content-primary rounded-card hover:border-brand-500/50 hover:bg-surface-raised transition-all duration-300 ease-expo-out flex items-center gap-2"
            >
              <span>{CONTENT.secondary.label}</span>
              <svg
                className="w-4 h-4 text-content-muted group-hover:text-brand-400 group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </AnimateIn>

        {/* Feature highlights */}
        <AnimateIn delay={500}>
          <div className="mt-16 pt-12 border-t border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: '🚀', label: 'Rapid Deployment', desc: 'Go live in days, not months' },
                { icon: '🔒', label: 'Enterprise Security', desc: 'Bank-grade data protection' },
                { icon: '⚡', label: 'Seamless Integration', desc: 'Connect your existing tools' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center">
                  <span className="text-2xl mb-3">{item.icon}</span>
                  <h3 className="font-heading font-semibold text-content-primary text-sm mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-content-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Gradient line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    </section>
  )
}