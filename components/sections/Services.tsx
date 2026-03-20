import AnimateIn from '@/components/ui/AnimateIn'
import { Sparkles, BarChart3, Cpu, MessageSquare, Brain, Layers } from 'lucide-react'

interface ServiceItem {
  icon: React.ElementType
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    icon: Sparkles,
    title: 'AI Content Generation',
    description: 'Create compelling, personalized content at scale. Our machine learning models understand context, tone, and audience to produce human-quality text that drives engagement.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis & Insights',
    description: 'Transform raw data into actionable intelligence. Advanced analytics surface patterns and trends that inform strategic decisions, helping you stay ahead of the competition.',
  },
  {
    icon: Cpu,
    title: 'Workflow Automation',
    description: 'Eliminate manual bottlenecks with intelligent automation. From data entry to complex multi-step processes, our AI handles repetitive tasks so your team focuses on high-value work.',
  },
  {
    icon: MessageSquare,
    title: 'Customer Engagement',
    description: 'Deliver personalized experiences at every touchpoint. AI-powered chatbots and engagement tools understand customer intent and respond with relevant, timely assistance.',
  },
  {
    icon: Brain,
    title: 'Decision Support',
    description: 'Make confident choices with AI-assisted analysis. Our decision support systems evaluate scenarios, model outcomes, and provide recommendations backed by comprehensive data.',
  },
  {
    icon: Layers,
    title: 'Scalable Integration',
    description: 'Connect all your tools and data sources seamlessly. Our platform integrates with existing infrastructure, ensuring smooth data flow and unified operations across your organization.',
  },
]

const HEADING = 'Intelligent Solutions for Modern Businesses'
const SUBTEXT = 'Our integrated AI platform combines powerful capabilities into a single ecosystem — designed to simplify work, automate processes, and accelerate your digital transformation.'

export default function Services() {
  return (
    <section id="services" className="relative py-section overflow-hidden">
      <div className="absolute inset-0 bg-surface-raised" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-500/8 blur-[180px] pointer-events-none" />
      
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-brand-500 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Platform Capabilities
          </span>
          <h2 className="font-heading font-black text-display-lg text-content-primary mb-4">
            {HEADING}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-content-secondary leading-relaxed">
            {SUBTEXT}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 80} direction="up">
              <div className="group relative h-full p-8 rounded-card-lg border border-white/5 bg-white/[0.03] hover:border-brand-500/40 transition-all duration-500 ease-expo-out overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-500 rounded-card-lg" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300 ease-expo-out">
                    <svc.icon className="w-7 h-7 text-brand-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-content-primary mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-content-secondary leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}