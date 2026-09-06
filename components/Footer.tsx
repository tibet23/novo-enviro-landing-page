'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Linkedin, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleOpenCookiePreferences = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
    }
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#212121] text-white border-t border-[#dee4e5]/20 pt-16 pb-12 transition-colors print:bg-white print:text-black print:border-black"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="/"
              id="footer-brand-logo"
              className="inline-block focus-visible:outline-none"
              aria-label="Novo Enviro Home"
            >
              <Image
                src="/images/logo-white.png"
                alt="Novo Enviro Logo"
                width={190}
                height={54}
                className="h-9 sm:h-10 w-auto object-contain transition-opacity duration-200 hover:opacity-90"
              />
            </Link>

            <p className="text-[#dee4e5]/80 text-sm font-light leading-relaxed max-w-sm">
              We operate at the frontier of climate finance — developing projects
              and providing consultancy services that generate verifiable, certified
              environmental assets.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/company/novoenviro/"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-linkedin-link"
                className="inline-flex items-center gap-2 text-xs text-[#dee4e5] hover:text-[#74a4ac] transition-colors py-1 focus-visible:outline-none"
                aria-label="Follow Novo Enviro on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#74a4ac]" />
                <span className="underline underline-offset-4">LinkedIn Company Profile</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>

              <div className="flex items-center gap-2 text-[11px] text-[#dee4e5]/60 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#74a4ac]" />
                <span>Zero Analytics &bull; Local Server Storage Mandate</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-[#74a4ac] font-sans-technical">
              Navigation
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  id="footer-link-home"
                  className="text-[#dee4e5]/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/carbon-credits"
                  id="footer-link-carbon-credits"
                  className="text-[#dee4e5]/80 hover:text-white transition-colors"
                >
                  Carbon Credits
                </Link>
              </li>
              <li>
                <Link
                  href="/plastic-credits"
                  id="footer-link-plastic-credits"
                  className="text-[#dee4e5]/80 hover:text-white transition-colors"
                >
                  Plastic Credits
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  id="footer-link-careers"
                  className="text-[#dee4e5]/80 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  id="footer-link-contact"
                  className="text-[#dee4e5]/80 hover:text-white transition-colors"
                >
                  Contact &amp; Book Meeting
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  id="footer-link-privacy-policy"
                  className="text-[#74a4ac] hover:text-white transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-[#74a4ac] font-sans-technical">
              Institutional Contact
            </h2>

            <div className="space-y-3.5 text-sm text-[#dee4e5]/80">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#74a4ac] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#dee4e5]/50">
                    Direct Email
                  </span>
                  <a
                    href="mailto:info@novoenviro.com"
                    id="footer-email-link"
                    className="text-white hover:text-[#74a4ac] transition-colors underline underline-offset-4"
                  >
                    info@novoenviro.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <MapPin className="w-4 h-4 text-[#74a4ac] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#dee4e5]/50">
                    Regional Offices
                  </span>
                  <div className="mt-1 flex flex-col gap-1 text-xs">
                    <span className="font-medium text-white">Sofia, Bulgaria</span>
                    <span className="font-medium text-white">Istanbul, Türkiye</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#dee4e5]/60 font-light">
                Our team responds to all institutional enquiries within 48 hours.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#dee4e5]/60">
          <p id="footer-copyright-statement">
            &copy; 2026, Novo Enviro. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5">
            <span className="text-[#dee4e5]/40 hidden md:inline">
              Verified Under Verra &bull; Gold Standard &bull; PPRS
            </span>
            <Link
              href="/privacy-policy"
              id="footer-bottom-privacy-link"
              className="hover:text-white text-[#dee4e5]/80 transition-colors underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            <button
              type="button"
              id="footer-cookie-preferences-btn"
              onClick={handleOpenCookiePreferences}
              className="hover:text-white text-[#dee4e5]/80 transition-colors underline underline-offset-2 bg-transparent border-none p-0 cursor-pointer text-xs"
            >
              Cookie Preferences
            </button>
            <Link
              href="/contact"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
