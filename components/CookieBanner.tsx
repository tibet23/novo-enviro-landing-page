'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X, Check, SlidersHorizontal } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [functionalCookies, setFunctionalCookies] = useState(true);

  useEffect(() => {
    // Check consent after mount inside timer to prevent cascading synchronous renders
    const timer = setTimeout(() => {
      try {
        const consent = localStorage.getItem('novo_cookie_consent');
        if (!consent) {
          setVisible(true);
        }
      } catch {
        // Fallback for sandboxed storage
      }
    }, 600);

    const handleOpenBanner = () => {
      setVisible(true);
      setShowDetails(true);
    };

    window.addEventListener('open-cookie-preferences', handleOpenBanner);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-cookie-preferences', handleOpenBanner);
    };
  }, []);

  const saveConsent = (type: 'essential-only' | 'accepted-all' | 'customized') => {
    const consentData = {
      type,
      timestamp: new Date().toISOString(),
      essential: true,
      analytics: false, // Strictly zero analytics software
      preferences: type === 'essential-only' ? false : functionalCookies,
    };

    try {
      localStorage.setItem('novo_cookie_consent', JSON.stringify(consentData));
    } catch {
      // Storage access error handling
    }
    setVisible(false);
    setShowDetails(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <aside
      id="cookie-preference-banner"
      role="region"
      aria-label="Cookie and Privacy Preferences"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-[#dee4e5] shadow-2xl transition-all duration-300 animate-fadeIn print:hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Main Copy */}
          <div className="space-y-2 max-w-4xl">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-xs bg-[#74a4ac]/10 text-[#74a4ac]">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#212121] font-sans-technical">
                Privacy &amp; Cookie Notice &bull; Zero Analytics Policy
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-light">
              We respect your institutional privacy.{' '}
              <strong className="text-[#212121] font-medium">
                No metrics or visitor data whatsoever are gathered by any analytics software
              </strong>{' '}
              on this site. We deploy zero third-party tracking pixels or telemetry engines. Any
              information submitted is{' '}
              <strong className="text-[#212121] font-medium">
                strictly stored on secure local servers
              </strong>
              . Learn more in our{' '}
              <Link
                href="/privacy-policy"
                className="text-[#74a4ac] font-medium underline underline-offset-2 hover:text-[#212121] transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              id="cookie-btn-details"
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#666666] hover:text-[#212121] border border-[#dee4e5] hover:border-[#74a4ac] rounded-xs transition-colors bg-white"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#74a4ac]" />
              <span>{showDetails ? 'Hide Options' : 'Preferences'}</span>
            </button>

            <button
              type="button"
              id="cookie-btn-essential"
              onClick={() => saveConsent('essential-only')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#212121] hover:bg-[#f7f9fa] border border-[#dee4e5] rounded-xs transition-colors bg-white"
            >
              <span>Essential Only</span>
            </button>

            <button
              type="button"
              id="cookie-btn-accept"
              onClick={() => saveConsent('accepted-all')}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#212121] hover:bg-[#74a4ac] rounded-xs transition-colors shadow-xs"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Acknowledge &amp; Close</span>
            </button>

            <button
              type="button"
              onClick={() => saveConsent('essential-only')}
              aria-label="Close cookie banner"
              className="p-1.5 text-[#666666] hover:text-[#212121] rounded-xs transition-colors ml-auto sm:ml-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Expandable Preferences Drawer */}
        {showDetails && (
          <div
            id="cookie-preferences-drawer"
            className="mt-6 pt-6 border-t border-[#dee4e5] grid grid-cols-1 md:grid-cols-3 gap-4 text-xs animate-fadeIn"
          >
            {/* Category 1: Essential */}
            <div className="p-4 bg-[#f7f9fa] border border-[#dee4e5] rounded-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#212121] uppercase tracking-wider font-sans-technical">
                  Strictly Necessary
                </span>
                <span className="px-2 py-0.5 text-[10px] uppercase font-mono font-bold bg-[#74a4ac]/10 text-[#74a4ac] rounded-xs">
                  Always Active
                </span>
              </div>
              <p className="text-[#666666] font-light leading-relaxed">
                Required for core security, session state, and preserving your privacy choices. No
                personal profiling data is recorded.
              </p>
            </div>

            {/* Category 2: Analytics & Metrics (Explicitly ZERO) */}
            <div className="p-4 bg-white border border-[#dee4e5] rounded-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#212121] uppercase tracking-wider font-sans-technical">
                  Analytics &amp; Tracking
                </span>
                <span className="px-2 py-0.5 text-[10px] uppercase font-mono font-bold bg-gray-100 text-[#666666] rounded-xs">
                  Disabled &bull; None
                </span>
              </div>
              <p className="text-[#666666] font-light leading-relaxed">
                Zero analytics software is deployed on our systems. No metrics, cookies, IP tracking,
                or third-party measurement libraries exist.
              </p>
            </div>

            {/* Category 3: Local Storage / Preferences */}
            <div className="p-4 bg-[#f7f9fa] border border-[#dee4e5] rounded-xs space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="toggle-functional-storage"
                  className="font-semibold text-[#212121] uppercase tracking-wider font-sans-technical cursor-pointer"
                >
                  Local Storage Preferences
                </label>
                <input
                  type="checkbox"
                  id="toggle-functional-storage"
                  checked={functionalCookies}
                  onChange={(e) => setFunctionalCookies(e.target.checked)}
                  className="w-4 h-4 accent-[#74a4ac] cursor-pointer"
                />
              </div>
              <p className="text-[#666666] font-light leading-relaxed">
                Preserves consultation booking timezone preferences and form drafts within your
                local browser session only.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => saveConsent('customized')}
                  className="text-[11px] font-semibold text-[#74a4ac] hover:underline uppercase tracking-wider"
                >
                  Save Custom Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
