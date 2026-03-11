'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { label: 'SERVICE', href: '#services' },
  { label: 'COMPANY', href: '#company' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [onLight, setOnLight] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const lightSections = document.querySelectorAll("[data-theme='light']")
      const navY = 60
      let isLight = false
      lightSections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top < navY && rect.bottom > navY) {
          isLight = true
        }
      })
      setOnLight(isLight)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textColor = onLight ? 'text-[#0a0a0a]' : 'text-white'
  const navLinkClasses = onLight
    ? 'text-neutral-600 hover:text-[#0a0a0a]'
    : 'text-neutral-300 hover:text-white'
  const bgScrolled = onLight
    ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200'
    : 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-800'
  const bgTop = onLight
    ? 'bg-white/60 backdrop-blur-md'
    : 'bg-[#0a0a0a]/60 backdrop-blur-md'
  const mobilePanelBg = onLight ? 'bg-white' : 'bg-[#0a0a0a]'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? bgScrolled : bgTop
      }`}
    >
      <nav
        className="flex items-center justify-between px-4 py-3 md:px-10 lg:px-10"
        aria-label="Global"
      >
        <a href="#hero" className="inline-flex items-center">
          <img
            src="/main_logo.png"
            alt="FIXAD"
            className="h-9 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`${navLinkClasses} text-base tracking-wide transition-colors duration-300 font-medium`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors duration-300 ${textColor}`}
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className={`md:hidden ${mobilePanelBg}`}>
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`${textColor} text-xl tracking-wide font-medium`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
