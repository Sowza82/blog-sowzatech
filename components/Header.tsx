'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Posts', href: '/posts' },
    { label: 'Sobre', href: '/about' },
  ]

  return (
    <header className="bg-purple-900 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide no-underline"
        >
          <span className="text-white">Sowza</span>
          <span className="text-pink-400">Tech</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className={`!text-white font-semibold text-lg no-underline transition-colors duration-300
                  ${
                    pathname === link.href ? '!text-pink-300' : ''
                  } group-hover:!text-pink-300`}
              >
                {link.label}
              </Link>
              {/* underline desktop */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-pink-400 transition-all duration-300
                  ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              />
            </div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          aria-label="Menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-purple-900 shadow-md overflow-hidden transition-max-h duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center py-4 gap-4">
          {navLinks.map(link => (
            <div
              key={link.href}
              className="group relative inline-block text-center"
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`!text-white font-semibold text-lg no-underline transition-colors duration-300
                  ${
                    pathname === link.href ? '!text-pink-300' : ''
                  } group-hover:!text-pink-300`}
              >
                {link.label}
              </Link>
              {/* underline mobile igual desktop */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-pink-400 transition-all duration-300
                  ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
