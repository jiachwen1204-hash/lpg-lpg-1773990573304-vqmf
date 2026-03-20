```jsx
import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, Brain, Zap, Shield, TrendingUp, Users } from 'lucide-react'

interface ValueItem {
  icon: string
  title: string
  desc: string
}

interface StatItem {
  value: string
  label: string
  icon: React.ReactNode
}

const CONTENT = {
  badge: 'About Zentrix AI 2',
  heading: 'Unlock Intelligent Solutions.',
  headingAccent: 'Accelerate Your Future.',
  intro: 'We are an all-in-one AI technology company that builds intelligent tools designed to simplify work, automate processes, and accelerate digital transformation.',
  description: 'Our platform integrates multiple AI capabilities — including content generation, data analysis, workflow automation, customer engagement, and decision support — into a single seamless ecosystem.',
  body: 'By combining powerful machine learning models with user-friendly software, we help businesses reduce operational costs, improve productivity, and unlock new growth opportunities. Our solutions are designed for scalability, security, and real-world usability, making advanced AI accessible to organizations of all sizes.',
  values: [
    { icon: '🤖', title: 'Intelligent Automation', desc: 'Leveraging machine learning to streamline complex workflows and eliminate repetitive tasks.' },
    { icon: '🔗', title: 'Seamless Integration', desc: 'Connecting multiple AI capabilities into one unified ecosystem for maximum efficiency.' },
    { icon: '📊', title: 'Data-Driven Insights', desc: 'Transforming raw data into actionable intelligence that drives strategic decisions.' },
    { icon: '🛡️', title: 'Enterprise Security', desc: 'Built with scalability, security, and compliance at the core of every solution.' },
  ] satisfies ValueItem[],
  stats: [
    { value: '5+', label: 'AI Capabilities', icon: <Brain className="w-5 h-5" /> },
    { value: '24/7', label: 'Automation', icon: <Zap className="w-5 h-5" /> },
    { value: '100%', label: 'Cloud-Native', icon: <TrendingUp className="w-5 h-5" /> },
    { value: 'All Sizes', label: 'Scalability', icon: <Users className="w-5 h-5" /> },
  ] satisfies StatItem[],
  cta: { label: 'Book Demo', href: '#contact' },
}

export default function About() {
  return (
    <section id="about" className="relative py-section bg-surface overflow-hidden">
      {/* Background glow orbs for SaaS/Tech intensity */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[400px] h-[400px] rounded-full bg-brand-400/8 blur-[140px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{
             backgroundImage: 'radial-gradient(circle, var(--content-primary) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
           }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <AnimateIn delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-brand-500/10 text-brand-500 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              {CONTENT.badge}
            </span>
          </AnimateIn>
          
          <AnimateIn delay={100} direction="up">
            <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-content-primary mb-4">
              {CONTENT.heading}
            </h2>
          </AnimateIn>
          
          <AnimateIn delay={200} direction="up">
            <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-400 mb-6">
              {CONTENT.headingAccent}
            </h2>
          </AnimateIn>

          <AnimateIn delay={300} direction="up">
            <p className="font-body text-xl text-content-secondary font-light leading-relaxed max-w-3xl mx-auto">
              {CONTENT.intro}
            </p>
          </AnimateIn>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {CONTENT.stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80}>
              <div className="relative p-6 rounded-card-lg border border-surface-border bg-surface-raised hover:border-brand-500/30 hover:bg-surface-overlay transition-all duration-300 group">
                {/* Top accent line */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500">
                    {stat.icon}
                  </div>
                </div>
                <div className="font-heading font-black text-display-md text-content-primary">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-content-muted mt-1">
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left: Visual element */}
          <AnimateIn direction="left">
            <div className="relative">
              {/* Main card */}
              <div className="relative rounded-card-lg border border-surface-border bg-surface-raised overflow-hidden">
                {/* Ambient glow on card */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent" />
                
                {/* Abstract AI visual representation */}
                <div className="relative aspect-square p-8">
                  {/* Central icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-brand-500/10 flex items-center justify-center animate-pulse-glow">
                      <div className="w-24 h-24 rounded-full bg-brand-500/20 flex items-center justify-center">
                        <Brain className="w-12 h-12 text-brand-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 rounded-card bg-surface-overlay border border-surface-border flex items-center justify-center animate-float">
                    <Zap className="w-6 h-6 text-brand-500" />
                  </div>
                  <div className="absolute top-8 right-8 w-16 h-16 rounded-card bg-surface-overlay border border-surface-border flex items-center justify-center animate-float [animation-delay:1s]">
                    <TrendingUp className="w-6 h-6 text-brand-400" />
                  </div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 rounded-card bg-surface-overlay border border-surface-border flex items-center justify-center animate-float [animation-delay:2s]">
                    <Shield className="w-6 h-6 text-brand-700" />
                  </div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 rounded-card bg-surface-overlay border border-surface-border flex items-center justify-center animate-float [animation-delay:0.5s]">
                    <Users className="w-6 h-6 text-brand-500" />
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-card bg-surface border border-surface-border shadow-card-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <div className="font-heading font-bold text-sm text-content-primary">AI-Powered</div>
                    <div className="font-body text-xs text-content-muted">Enterprise Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right: Content */}
          <div className="space-y-6">
            <AnimateIn delay={100} direction="right">
              <p className="font-body text-lg text-content-secondary leading-relaxed">
                {CONTENT.description}
              </p>
            </AnimateIn>
            
            <AnimateIn delay={200} direction="right">
              <p className="font-body text-lg text-content-secondary leading-relaxed">
                {CONTENT.body}
              </p>
            </AnimateIn>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {CONTENT.values.map((value, i) => (
                <AnimateIn key={value.title} delay={300 + i * 80}>
                  <div className="relative p-5 rounded-card border border-surface-border bg-surface-raised hover:border-brand-500/30 hover:bg-surface-overlay transition-all duration-300 group">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.02] rounded-card transition-colors duration-300" />
                    
                    <div className="relative">
                      <span className="text-2xl mb-3 block">{value.icon}</span>
                      <h3 className="font-heading font-bold text-base text-content-primary mb-1">
                        {value.title}
                      </h3>
                      <p className="font-body text-sm text-content-muted leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <AnimateIn delay={0}>
          <div className="relative rounded-card-lg border border-surface-border bg-surface-raised overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />
            
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="font-heading font-black text-display-lg text-content-primary mb-2">
                  Ready to Transform?
                </h3>
                <p className="font-body text-content-secondary max-w-lg">
                  See how Zentrix AI 2 can streamline your operations and accelerate your digital transformation journey.
                </p>
              </div>
              
              <div className="relative shrink-0">
                {/* Button glow */}
                <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-pill scale-125" />
                <a
                  href={CONTENT.cta.href}
                  className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-content-inverse rounded-pill hover:bg-brand-700 transition-all duration-300 shadow-glow hover:shadow-glow-sm"
                >
                  {CONTENT.cta.label}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
```