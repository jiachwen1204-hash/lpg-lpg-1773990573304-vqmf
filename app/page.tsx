```tsx
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Platform — All-in-One Solutions for Business | Zentrix AI",
  description: "Transform your business with Zentrix AI 2's all-in-one AI platform. Automate workflows, generate content, and analyze data in one seamless ecosystem.",
  openGraph: {
    title: "AI Platform — Simplify Work, Accelerate Your Future | Zentri",
    description: "Unlock intelligent AI solutions designed to streamline operations and boost productivity. Experience the future of business automation with Zentrix AI 2.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Platform — Simplify Work, Accelerate Your Future | Zentri",
    description: "Unlock intelligent AI solutions designed to streamline operations and boost productivity. Experience the future of business automation with Zentrix AI 2.",
  },
}

export default function Home() {
  return (
    <main className="bg-[var(--brand-900)] min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
```