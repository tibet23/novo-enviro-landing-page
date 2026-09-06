import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Mail, MapPin, Clock, ArrowUpRight, Linkedin } from 'lucide-react';
import CalendarBooking from '@/components/CalendarBooking';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Book a Consultation | Novo Enviro',
  description:
    'Start a conversation with Novo Enviro. Schedule an institutional climate finance consultation or reach our regional offices in Sofia, Bulgaria and Istanbul, Türkiye.',
  openGraph: {
    title: 'Contact & Consultation | Novo Enviro',
    description:
      'Whether developing a carbon project or seeking certified plastic credits, connect with our teams in Sofia and Istanbul.',
  },
};

export default function ContactPage() {
  return (
    <div id="contact-page" className="w-full">
      {/* Hero Header */}
      <section className="bg-white pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#dee4e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#74a4ac]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#666666] font-sans-technical">
              G E T &nbsp; I N &nbsp; T O U C H
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif-editorial text-[#212121] tracking-tight leading-[1.15]">
                Let`s start a <br />
                <span className="italic font-medium">conversation</span>
                <span className="text-[#74a4ac]">._</span>
              </h1>

              <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed max-w-2xl font-sans-technical">
                Whether you&apos;re developing a carbon project or seeking certified plastic credits,{' '}
                <strong className="text-[#212121] font-semibold">Novo Enviro</strong> brings the
                expertise, integrity, and innovation to make real climate action happen.{' '}
                <span className="text-[#212121] font-medium">
                  Our team responds within 48 hours.
                </span>
              </p>

              {/* Direct Office & Email Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 border border-[#dee4e5] bg-[#f7f9fa] rounded-xs space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#74a4ac] font-semibold block">
                    E M A I L
                  </span>
                  <a
                    href="mailto:info@novoenviro.com"
                    id="contact-page-email-link"
                    className="text-base sm:text-lg font-medium text-[#212121] hover:text-[#74a4ac] transition-colors underline underline-offset-4 block"
                  >
                    info@novoenviro.com
                  </a>
                  <p className="text-xs text-[#666666] font-light">
                    Direct institutional inquiries and project documentation
                  </p>
                </div>

                <div className="p-6 border border-[#dee4e5] bg-[#f7f9fa] rounded-xs space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#74a4ac] font-semibold block">
                    O F F I C E S
                  </span>
                  <div className="text-base font-medium text-[#212121] space-y-0.5">
                    <div>Sofia, Bulgaria</div>
                    <div>Istanbul, Türkiye</div>
                  </div>
                  <p className="text-xs text-[#666666] font-light">
                    Central/Eastern Europe &amp; Mediterranean Hubs
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/company/novoenviro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#666666] hover:text-[#212121] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#74a4ac]" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-80 w-full rounded-xs overflow-hidden border border-[#dee4e5] shadow-xs">
                <Image
                  src="/images/contact_hero.jpg"
                  alt="Novo Enviro Offices and Meetings"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <span className="font-semibold text-[#74a4ac] block uppercase tracking-wider">
                    Institutional Consultation
                  </span>
                  Schedule an online briefing or project scoping call directly below.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Meeting Section (Bespoke Calendar replacing Google Calendar) */}
      <section
        id="book-a-meeting"
        className="py-16 sm:py-24 bg-[#f7f9fa] border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
              B O O K &nbsp; A &nbsp; M E E T I N G
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#212121] tracking-tight">
              Select an appointment with our partners.
            </h2>
            <p className="text-sm text-[#666666] font-light">
              Choose your consultation focus, select your preferred timezone, and confirm your slot.
              Our Sofia and Istanbul desks will connect with you via video conference.
            </p>
          </div>

          {/* Bespoke interactive calendar component */}
          <CalendarBooking />
        </div>
      </section>

      {/* Alternative Written Inquiry Form */}
      <section
        id="direct-inquiry"
        className="py-16 sm:py-24 bg-white border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
                W R I T T E N &nbsp; I N Q U I R Y
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-editorial text-[#212121]">
                Prefer to send project documentation first?
              </h2>
              <p className="text-sm text-[#666666] font-light leading-relaxed">
                If you have existing project design documents (PDD), feedstock reports, or specific
                regulatory questions, submit a direct inquiry. Our technical leads will review your
                materials prior to scheduling an initial briefing.
              </p>

              <div className="pt-4 space-y-3 text-xs text-[#666666]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#74a4ac]" />
                  <span>Average institutional response time: 24 to 48 hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#74a4ac]" />
                  <span>Regional office coverage: Sofia (EET) &bull; Istanbul (TRT)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
