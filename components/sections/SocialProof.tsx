import AnimateIn from '@/components/ui/AnimateIn'

const stats = [
  { value: '500+', label: 'Enterprise Clients' },
  { value: '2.5M', label: 'Tasks Automated' },
  { value: '99.9%', label: 'Platform Uptime' },
  { value: '150+', label: 'Countries Served' },
]

const clients = [
  'TechFlow Systems',
  'DataCore Labs',
  'Nexus Automation',
  'Quantum Solutions',
  'CloudMatrix Inc',
  'InnovateAI',
]

const testimonials = [
  {
    quote: "Zentrix AI transformed our workflow automation. We reduced operational costs by 47% while doubling our team's output. The decision support features alone have given us a competitive edge.",
    author: 'Marcus Chen',
    role: 'CTO, TechFlow Systems',
    avatar: 'MC',
  },
  {
    quote: "The integration capabilities are unmatched. Within weeks, we had Zentrix connecting our data analysis, customer engagement, and content generation into one seamless ecosystem.",
    author: 'Sarah Williams',
    role: 'VP of Operations, DataCore Labs',
    avatar: 'SW',
  },
  {
    quote: "Advanced AI made accessible. Our small team now operates at enterprise scale. The scalability and security gave us confidence to migrate all our processes.",
    author: 'James Rodriguez',
    role: 'Founder, Nexus Automation',
    avatar: 'JR',
  },
  {
    quote: "From workflow automation to customer engagement, Zentrix handles it all. We've unlocked growth opportunities we didn't know existed.",
    author: 'Emily Park',
    role: 'Director of Digital, CloudMatrix Inc',
    avatar: 'EP',
  },
]

export default function SocialProof() {
  return (
    <section className="py-section bg-[#0f0f13] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/[0.06] blur-[180px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
           }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80}>
              <div className="text-center p-6 rounded-card-lg border border-white/[0.06] bg-white/[0.02] hover:border-brand-500/30 hover:bg-white/[0.04] transition-all duration-300">
                <div className="font-heading font-black text-[clamp(2rem,4vw,3rem)] text-brand-500 leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-content-muted">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Trust badge */}
        <AnimateIn direction="up" className="text-center mb-12">
          <p className="text-sm text-content-muted uppercase tracking-widest mb-6">
            Trusted by forward-thinking teams worldwide
          </p>
        </AnimateIn>

        {/* Client logos marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0f0f13] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0f0f13] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-8 animate-marquee w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-6 py-3 rounded-card border border-white/[0.08] bg-white/[0.03] text-content-secondary font-medium text-sm hover:border-brand-500/30 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.author} delay={i * 100}>
              <div className="group relative h-full p-8 rounded-card-lg border border-white/[0.06] bg-white/[0.02] hover:border-brand-500/40 hover:bg-white/[0.04] transition-all duration-300">
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent transition-all duration-500" />
                
                {/* Quote icon */}
                <div className="text-brand-500/20 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-content-primary leading-relaxed mb-6 text-lg font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-content-inverse font-heading font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-content-primary">{t.author}</div>
                    <div className="text-sm text-content-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}