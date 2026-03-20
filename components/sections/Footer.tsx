```tsx
import Link from 'next/link'
import { Mail, MapPin, Zap, ArrowRight } from 'lucide-react'

const BRAND = {
  name:    'Zentrix AI 2',
  tagline: 'Unlock Intelligent Solutions. Accelerate Your Future.',
  email:   'jiachwen99@gmail.com',
  description: 'We are an all-in-one AI technology company that builds intelligent tools designed to simplify work, automate processes, and accelerate digital transformation.',
}

const links = [
  { label: 'Product',  href: '#product'  },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

const solutions = [
  { label: 'Content Generation', href: '#content' },
  { label: 'Data Analysis',     href: '#data'     },
  { label: 'Workflow Automation', href: '#automation' },
  { label: 'Customer Engagement', href: '#engagement' },
]

const legal = [
  { label: 'Privacy Policy',    href: '/privacy' },
  { label: 'Terms of Service',   href: '/terms'   },
  { label: 'Cookie Policy',      href: '/cookies' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-surface-primary border-t border-white/10">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-content-inverse group-hover:text-brand-400 transition-colors">
                {BRAND.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-content-muted leading-relaxed max-w-xs">
              {BRAND.tagline}
            </p>
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-medium hover:bg-brand-500/20 hover:border-brand-500/50 transition-all"
            >
              Book Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 text-sm text-content-secondary hover:text-brand-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-content-muted">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{BRAND.description}</span>
              </div>
            </div>
          </div>

          {/* Solutions column */}
          <div>
            <h3 className="font-heading font-semibold text-content-inverse mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-content-muted hover:text-brand-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-heading font-semibold text-content-inverse mb-4">Navigation</h3>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-content-muted hover:text-brand-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="font-heading font-semibold text-content-inverse mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-content-muted hover:text-brand-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-sm text-content-muted">
            © {year} {BRAND.name}. All rights reserved.
          </div>
          <div className="text-sm text-content-muted">
            Built with intelligence. Designed for scale.
          </div>
        </div>
      </div>
    </footer>
  )
}
```