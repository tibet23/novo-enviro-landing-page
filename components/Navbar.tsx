'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/carbon-credits', label: 'Carbon Credits' },
  { href: '/plastic-credits', label: 'Plastic Credits' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#dee4e5]/80 py-3.5'
          : 'bg-white border-b border-[#dee4e5]/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand identity - Main Logo */}
        <Link
          href="/"
          id="nav-brand-logo"
          className="group flex items-center focus-visible:outline-none"
          aria-label="Novo Enviro Home"
        >
          <Image
            src="/images/logo.png"
            alt="Novo Enviro Logo"
            width={180}
            height={51}
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          id="desktop-navigation"
          className="hidden md:flex items-center gap-8"
          aria-label="Primary Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/' || pathname === '/home'
                : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm tracking-wide transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#212121] font-semibold'
                    : 'text-[#666666] hover:text-[#212121]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#74a4ac]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Locale Hub */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-xs text-[#666666] border-r border-[#dee4e5] pr-5">
            <Globe className="w-3.5 h-3.5 text-[#74a4ac]" />
            <span>Sofia</span>
            <span className="text-[#dee4e5]">|</span>
            <span>Istanbul</span>
          </div>
          <Link
            href="/contact"
            id="nav-cta-contact-button"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider uppercase bg-[#212121] text-white hover:bg-[#74a4ac] transition-colors rounded-xs shadow-xs"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          id="mobile-menu-toggle-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#212121] hover:text-[#74a4ac] focus-visible:ring-2 focus-visible:ring-[#74a4ac] rounded-xs"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-white border-b border-[#dee4e5] px-6 py-6 shadow-lg animate-fadeIn"
        >
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/' || pathname === '/home'
                  : pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  id={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-base py-2 transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#212121] font-semibold border-l-2 border-[#74a4ac] pl-3'
                      : 'text-[#666666] hover:text-[#212121] pl-3'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#74a4ac]" />
                  )}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-[#dee4e5] flex flex-col gap-3">
              <div className="text-xs text-[#666666] flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#74a4ac]" />
                <span>Offices: Sofia, Bulgaria &bull; Istanbul, Türkiye</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                id="mobile-nav-cta-contact-button"
                className="w-full text-center py-2.5 text-xs font-medium tracking-wider uppercase bg-[#212121] text-white hover:bg-[#74a4ac] transition-colors rounded-xs shadow-xs"
              >
                Contact Novo Enviro
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
