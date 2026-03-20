'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Platform',   href: '#platform'   },
  { label: 'Solutions',  href: '#solutions'  },
  { label: 'Contact',     href: '#contact'     },
]

const BRAND_NAME = 'Zentrix AI'
const CTA = { label: 'Book Demo', href: '#contact' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0f0f13]/95 backdrop-blur-md border-b border-[#2a2a3a] shadow-[0_4px_24px_rgba(14,165,233,0.08)]'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-nav">
        <Link
          href="/"
          className="font-heading font-bold text-xl text-[#f1f1f5] hover:text-brand-500 transition-colors relative group"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#818cf8]">
            {BRAND_NAME}
          </span>
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-brand-500 to-brand-400 group-hover:w-full transition-all duration-300" />
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-[#8b8ba7] hover:text-[#f1f1f5] rounded-card hover:bg-[#17171f] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={CTA.href}
            className="group relative px-5 py-2.5 text-sm font-medium bg-brand-500 text-[#0f0f13] rounded-card overflow-hidden transition-all duration-300 hover:bg-brand-400"
          >
            <span className="relative z-10">{CTA.label}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-brand-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
          </a>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-card text-[#8b8ba7] hover:text-[#f1f1f5] hover:bg-[#17171f] transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#0f0f13] border-b border-[#2a2a3a]">
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-[#8b8ba7] hover:text-[#f1f1f5] rounded-card hover:bg-[#17171f] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={CTA.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-sm font-medium text-center bg-brand-500 text-[#0f0f13] rounded-card hover:bg-brand-400 transition-colors"
              >
                {CTA.label}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}