import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Mail, ArrowRight, Heart, Sparkles, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | Novo Enviro',
  description:
    'Our passion for environment and sustainability runs deep. Explore careers in institutional climate finance and environmental asset development at Novo Enviro.',
  openGraph: {
    title: 'Careers | Novo Enviro',
    description:
      'Our passion for environment and sustainability runs deep. Join our mission in Sofia and Istanbul.',
  },
};

export default function CareersPage() {
  return (
    <div id="careers-page" className="w-full">
      {/* Hero Section */}
      <section className="bg-white pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#dee4e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#74a4ac]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#666666] font-sans-technical">
              C A R E E R S &nbsp; &amp; &nbsp; T A L E N T
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif-editorial text-[#212121] tracking-tight leading-[1.15]">
                Our passion for <br />
                <span className="italic font-medium">environment and sustainability</span> <br />
                runs deep<span className="text-[#74a4ac]">._</span>
              </h1>

              <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed max-w-2xl font-sans-technical">
                On the road to net zero vision, we are looking forward to work together with
                talented individuals who have immense love for nature.
              </p>

              {/* Status Callout Card */}
              <div className="p-6 bg-[#f7f9fa] border border-[#dee4e5] rounded-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#666666] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#74a4ac]" />
                  <span>Current Vacancy Status</span>
                </div>
                <p className="text-sm sm:text-base text-[#212121] font-medium leading-relaxed">
                  Unfortunately, at this time, we don&apos;t have any open job vacancies.
                </p>
                <p className="text-xs text-[#666666] font-light">
                  We are continuously expanding our network of independent carbon auditors,
                  VVB specialists, and plastic recycling consultants across Bulgaria, Türkiye, and
                  wider EMEA regions.
                </p>
              </div>

              {/* Spontaneous Application */}
              <div className="pt-2">
                <a
                  href="mailto:info@novoenviro.com?subject=Spontaneous%20Application%20-%20Novo%20Enviro"
                  id="careers-spontaneous-email-btn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#212121] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#74a4ac] transition-colors rounded-xs shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send General Application</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-80 sm:h-96 w-full rounded-xs overflow-hidden border border-[#dee4e5] shadow-xs">
                <Image
                  src="/images/careers_hero.jpg"
                  alt="Novo Enviro Environmental Careers"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xs border border-[#dee4e5] text-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#74a4ac] font-medium font-sans-technical uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Sofia Hub &bull; Istanbul Hub</span>
                  </div>
                  <p className="text-[#666666]">
                    Dedicated to climate integrity, carbon finance rigor, and genuine environmental stewardship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Discipline Values */}
      <section className="py-20 sm:py-24 bg-[#f7f9fa] border-b border-[#dee4e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
              O U R &nbsp; D I S C I P L I N E
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#212121]">
              Who We Collaborate With
            </h2>
            <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed">
              When projects scale, we engage leading specialists who share our unyielding
              standard for additionality and permanence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-[#dee4e5] rounded-xs space-y-3">
              <span className="text-xs font-mono text-[#74a4ac] uppercase tracking-wider font-semibold">
                Domain 01
              </span>
              <h3 className="text-lg font-serif-editorial text-[#212121]">
                Carbon Project Developers
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                Specialists in baseline calculations, MRV systems, forestry, renewable energy, and
                accredited standard methodologies (Verra, Gold Standard, PPRS).
              </p>
            </div>

            <div className="bg-white p-8 border border-[#dee4e5] rounded-xs space-y-3">
              <span className="text-xs font-mono text-[#74a4ac] uppercase tracking-wider font-semibold">
                Domain 02
              </span>
              <h3 className="text-lg font-serif-editorial text-[#212121]">
                Waste &amp; Recycling Engineers
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                Professionals with field expertise in polymer sorting, mechanical recycling, mass
                balance validation, and EPR compliance frameworks.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#dee4e5] rounded-xs space-y-3">
              <span className="text-xs font-mono text-[#74a4ac] uppercase tracking-wider font-semibold">
                Domain 03
              </span>
              <h3 className="text-lg font-serif-editorial text-[#212121]">
                Climate Finance Analysts
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                Experienced practitioners in environmental asset valuation, carbon trading
                mechanisms, off-take agreement structuring, and Article 6 alignment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
