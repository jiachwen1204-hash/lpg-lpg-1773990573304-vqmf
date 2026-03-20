import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge:    'AI-Powered Platform',
  headline: 'Unlock Intelligent Solutions.',
  highlight: 'Accelerate Your Future',
  subline:  'Zentrix AI 2 is an all-in-one AI technology platform that integrates content generation, data analysis, workflow automation, customer engagement, and decision support into a single seamless ecosystem — helping businesses reduce costs, improve productivity, and unlock new growth.',
  cta:      { label: 'Book Demo', href: '#contact' },
  secondary:{ label: 'Explore Platform',  href: '#features'   },
  stats: [
    { value: '10M+',  label: 'AI Operations Processed' },
    { value: '500+', label: 'Enterprise Clients'    },
    { value: '99.9%',  label: 'Uptime Reliability'},
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0f13] pt-nav"
    >
      {/* Background depth layers */}
      <div className="absolute inset-0">
        {/* Primary mesh gradient orb */}
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] rounded-full bg-brand-500/20 blur-[180px] animate-float pointer-events-none" />
        {/* Secondary orb */}
        <div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] rounded-full bg-brand-700/15 blur-[150px] animate-float [animation-delay:3s] pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }} />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-surface-border bg-brand-500/10 text-sm text-brand-400 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            {/* Headline with gradient highlight */}
            <AnimateIn delay={80}>
              <h1 className="font-heading font-black text-content-primary mb-6 leading-[0.92] tracking-[-0.04em]"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                {CONTENT.headline}{' '}
                <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700 bg-clip-text text-transparent">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            {/* Subline */}
            <AnimateIn delay={160}>
              <p className="text-lg md:text-xl text-content-secondary/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/40 blur-xl rounded-card scale-110" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative z-10 px-8 py-4 font-body font-semibold bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 hover:shadow-glow transition-all ease-expo-out active:scale-[0.97] inline-block"
                  >
                    {CONTENT.cta.label}
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="px-8 py-4 font-body font-medium border border-surface-border text-content-primary rounded-card hover:border-brand-500 hover:text-brand-500 hover:bg-brand-500/5 transition-all ease-expo-out inline-block"
                >
                  {CONTENT.secondary.label} →
                </a>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 border-t border-surface-border">
                {CONTENT.stats.map(stat => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="font-heading font-black text-4xl text-brand-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-content-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Floating AI Dashboard Mockup */}
          <AnimateIn delay={200} direction="left" className="hidden lg:block relative">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 shadow-card-lg overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
                
                <div className="flex items-center justify-between mb-6">
                  <span className="label-sm text-content-muted">AI Platform Overview</span>
                  <span className="text-xs text-brand-400 bg-brand-500/10 px-2 py-1 rounded-full">Powered by Zentrix</span>
                </div>
                
                {/* Fake AI metrics chart */}
                <div className="flex items-end gap-1 h-28 mb-6">
                  {[30,50,35,70,45,85,60,95,75,88,92,100].map((h, i) => (
                    <div key={i}
                      className="flex-1 rounded-sm transition-all duration-500"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, #0EA5E9, #0369A1)`,
                        opacity: i === 11 ? 1 : 0.3 + (i / 11) * 0.5,
                      }} />
                  ))}
                </div>
                
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Automation', value: '94%', trend: '+12%', color: 'text-brand-400' },
                    { label: 'Efficiency', value: '3.2x', trend: '↑', color: 'text-emerald-400' },
                    { label: 'Cost Saved', value: '$2.4M', trend: 'Q4', color: 'text-amber-400' },
                  ].map(m => (
                    <div key={m.label} className="rounded-xl bg-white/[0.04] p-3 border border-white/5">
                      <div className="label-sm text-content-muted mb-1">{m.label}</div>
                      <div className="font-heading font-bold text-content-primary text-lg">{m.value}</div>
                      <div className={`text-xs mt-0.5 ${m.color}`}>{m.trend}</div>
                    </div>
                  ))}
                </div>

                {/* AI Feature pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Content Gen', 'Data Analysis', 'Workflows'].map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-pill bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating AI badge */}
              <div className="absolute -top-4 -right-4 card-glass p-3 flex items-center gap-2 animate-float">
                <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <span className="text-brand-400 text-sm">⚡</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-content-primary">AI Active</div>
                  <div className="text-xs text-content-muted">Processing...</div>
                </div>
              </div>

              {/* Floating efficiency badge */}
              <div className="absolute -bottom-4 -left-4 card-glass p-3 flex items-center gap-2 animate-float [animation-delay:1.5s]">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 text-sm">↑</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-content-primary">+127%</div>
                  <div className="text-xs text-content-muted">Productivity</div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0f0f13] to-transparent pointer-events-none" />
    </section>
  )
}