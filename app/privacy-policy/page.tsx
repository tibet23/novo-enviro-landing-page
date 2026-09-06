import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  Server,
  EyeOff,
  Database,
  Lock,
  FileText,
  Mail,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Novo Enviro',
  description:
    'Our strict zero-analytics and local server privacy policy. No metrics whatsoever are gathered by any analytics software. All institutional data is kept strictly on local servers.',
  openGraph: {
    title: 'Privacy Policy | Novo Enviro',
    description:
      'Zero analytics software, zero third-party telemetry, and strict local server data storage.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div id="privacy-policy-page" className="w-full">
      {/* Header Section */}
      <section className="bg-white pt-12 sm:pt-20 pb-12 sm:pb-16 border-b border-[#dee4e5]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#666666] hover:text-[#212121] transition-colors font-sans-technical"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#74a4ac]" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#74a4ac]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#666666] font-sans-technical">
              L E G A L &nbsp; &amp; &nbsp; C O M P L I A N C E
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial text-[#212121] tracking-tight leading-tight">
            Privacy Policy &bull; <br />
            <span className="italic font-medium">Zero Analytics &amp; Local Storage</span>
            <span className="text-[#74a4ac]">._</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#666666] border-t border-[#dee4e5] pt-4">
            <span>Effective Date: September 2026</span>
            <span>&bull;</span>
            <span>Data Controller: Novo Enviro Ltd.</span>
            <span>&bull;</span>
            <span className="text-[#74a4ac] font-semibold">Jurisdiction: Sofia (EU) &bull; Istanbul</span>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16 sm:py-20 bg-[#f7f9fa] border-b border-[#dee4e5]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
          {/* Executive Highlight Banner */}
          <div
            id="privacy-executive-callout"
            className="p-6 sm:p-8 bg-white border-l-4 border-[#74a4ac] border-y border-r border-[#dee4e5] rounded-r-xs shadow-xs space-y-4"
          >
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#212121] font-sans-technical">
              <ShieldCheck className="w-5 h-5 text-[#74a4ac]" />
              <span>Core Privacy Commitments</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#212121]">
                  <EyeOff className="w-4 h-4 text-[#74a4ac]" />
                  <span>Absolute Zero Analytics</span>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                  <strong>No metrics whatsoever are gathered by any analytics software.</strong> We
                  do not use Google Analytics, tracking pixels, session replays, fingerprinting, or
                  behavioral telemetry. Your browsing remains strictly anonymous.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#212121]">
                  <Server className="w-4 h-4 text-[#74a4ac]" />
                  <span>Strict Local Server Storage</span>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                  <strong>
                    All user and project inquiry data is kept exclusively on secure local servers.
                  </strong>{' '}
                  Data is never routed, sold, or shared with external cloud data brokers, ad networks,
                  or third-party processors.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Introduction */}
          <article className="bg-white p-8 border border-[#dee4e5] rounded-xs space-y-4 shadow-xs">
            <h2 className="text-2xl font-serif-editorial text-[#212121]">
              1. Institutional Overview &amp; Data Philosophy
            </h2>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              Novo Enviro (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Company&rdquo;) is an
              institutional climate finance consultancy operating offices in Sofia, Bulgaria and
              Istanbul, Türkiye. We adhere to the highest standards of integrity, both in the
              environmental assets we develop and in the protection of confidential corporate and
              individual communications.
            </p>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              Unlike typical modern web platforms that track and monetize visitor behavior, Novo
              Enviro treats privacy as an architectural pillar. This Privacy Policy details the strict
              measures under which our digital services operate, adhering to Regulation (EU)
              2016/679 (General Data Protection Regulation / GDPR) and applicable Turkish Personal Data
              Protection Law No. 6698 (KVKK).
            </p>
          </article>

          {/* Section 2: Zero Analytics Software & Zero Telemetry */}
          <article className="bg-white p-8 border border-[#dee4e5] rounded-xs space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#74a4ac]/10 flex items-center justify-center text-[#74a4ac]">
                <EyeOff className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-serif-editorial text-[#212121]">
                2. Zero Analytics Software &amp; Zero Metrics Gathering
              </h2>
            </div>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              We make the following unequivocal commitment:
            </p>
            <ul className="space-y-3 text-sm text-[#666666] font-light">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#74a4ac] shrink-0 mt-1" />
                <span>
                  <strong>No Analytics Software:</strong> No analytics software of any kind (such as
                  Google Analytics, Adobe Analytics, Plausible, Mixpanel, Hotjar, or similar tools) is
                  embedded, executed, or permitted on this website.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#74a4ac] shrink-0 mt-1" />
                <span>
                  <strong>No Behavioral Telemetry:</strong> We do not track page dwell times, mouse
                  movements, scroll depths, device fingerprints, or referral journeys.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#74a4ac] shrink-0 mt-1" />
                <span>
                  <strong>No Commercial Advertising Pixels:</strong> We do not host Meta Pixel,
                  LinkedIn Insight Tags, X/Twitter conversion trackers, or any retargeting scripts.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#74a4ac] shrink-0 mt-1" />
                <span>
                  <strong>No IP Anonymization Compromises:</strong> Because we do not log, parse, or
                  aggregate traffic metrics, your network address is never matched to an analytics
                  profile.
                </span>
              </li>
            </ul>
          </article>

          {/* Section 3: Local Server Infrastructure */}
          <article className="bg-white p-8 border border-[#dee4e5] rounded-xs space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#74a4ac]/10 flex items-center justify-center text-[#74a4ac]">
                <Server className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-serif-editorial text-[#212121]">
                3. Exclusive Local Server Data Storage
              </h2>
            </div>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              All data submitted to Novo Enviro — including written inquiries, consultation requests,
              feedstock data, and project design documentation — is subject to strict infrastructural
              confinement:
            </p>
            <div className="p-4 bg-[#f7f9fa] border border-[#dee4e5] rounded-xs space-y-2 text-xs sm:text-sm text-[#212121]">
              <div className="font-semibold uppercase tracking-wider font-sans-technical text-[#74a4ac]">
                Local Server Storage Mandate
              </div>
              <p className="text-[#666666] font-light leading-relaxed">
                All inquiries, client correspondences, and scheduling records are retained only on
                secure local servers under our direct administrative control within the European
                Union / local domestic infrastructure. We do not transmit or store client communications
                on external multi-tenant public analytics data lakes.
              </p>
            </div>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              Access to these local servers is strictly segmented and protected by multi-factor
              authentication, encryption at rest (AES-256), and restricted solely to designated Novo
              Enviro project managers and carbon finance advisory leads.
            </p>
          </article>

          {/* Section 4: What Information We Process & Why */}
          <article className="bg-white p-8 border border-[#dee4e5] rounded-xs space-y-4 shadow-xs">
            <h2 className="text-2xl font-serif-editorial text-[#212121]">
              4. Voluntary Information Processed
            </h2>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              We process personal data only when voluntarily transmitted by you through:
            </p>
            <ul className="space-y-2 text-sm text-[#666666] font-light list-disc pl-5">
              <li>
                <strong className="text-[#212121]">Consultation Appointment Booking:</strong> Name,
                work email address, organization name, chosen discussion topic, and preferred meeting
                timezone.
              </li>
              <li>
                <strong className="text-[#212121]">Written Inquiries &amp; PDD Submissions:</strong>{' '}
                Project location, crediting focus (carbon reduction/removal or plastic credits),
                project design documentation, and contact details provided in our messaging form or
                sent to <span className="font-mono text-[#212121]">info@novoenviro.com</span>.
              </li>
            </ul>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              <strong>Legal Basis:</strong> Processing is conducted under Article 6(1)(b) of the GDPR
              (steps prior to entering into a contract) and Article 6(1)(f) (legitimate interest in
              answering commercial business inquiries).
            </p>
          </article>

          {/* Section 5: Cookies and Client-Side Storage */}
          <article className="bg-white p-8 border border-[#dee4e5] rounded-xs space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#74a4ac]/10 flex items-center justify-center text-[#74a4ac]">
                <Database className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-serif-editorial text-[#212121]">
                5. Cookies &amp; Local Storage
              </h2>
            </div>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              Our website uses strictly necessary client-side storage only:
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#f7f9fa] border border-[#dee4e5] rounded-xs">
                <span className="font-mono font-semibold text-[#212121] block">
                  novo_cookie_consent
                </span>
                <span className="text-[#666666] font-light">
                  A local browser storage key saving your preference to suppress the cookie banner once
                  acknowledged. It contains no personally identifiable data.
                </span>
              </div>
            </div>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              You can clear your local browser storage at any time via your browser settings or adjust
              your preferences using the &ldquo;Cookie Preferences&rdquo; control in the website
              footer.
            </p>
          </article>

          {/* Section 6: Data Subject Rights */}
          <article className="bg-white p-8 border border-[#dee4e5] rounded-xs space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#74a4ac]/10 flex items-center justify-center text-[#74a4ac]">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-serif-editorial text-[#212121]">
                6. Your Rights Under GDPR &amp; KVKK
              </h2>
            </div>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              Under applicable data protection laws, you retain the following unconditional rights
              regarding any correspondence stored on our local servers:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 border border-[#dee4e5] rounded-xs bg-[#f7f9fa]">
                <strong className="text-[#212121] block mb-1">Right of Access</strong>
                Request confirmation and a copy of any personal data stored on our local systems.
              </div>
              <div className="p-4 border border-[#dee4e5] rounded-xs bg-[#f7f9fa]">
                <strong className="text-[#212121] block mb-1">Right to Erasure (&ldquo;To Be Forgotten&rdquo;)</strong>
                Request the permanent deletion of your project correspondence from our local servers.
              </div>
              <div className="p-4 border border-[#dee4e5] rounded-xs bg-[#f7f9fa]">
                <strong className="text-[#212121] block mb-1">Right to Rectification</strong>
                Correct any inaccurate or outdated organization or contact details.
              </div>
              <div className="p-4 border border-[#dee4e5] rounded-xs bg-[#f7f9fa]">
                <strong className="text-[#212121] block mb-1">Right to Restrict Processing</strong>
                Limit our use of your documentation during ongoing feasibility disputes.
              </div>
            </div>
          </article>

          {/* Section 7: Inquiries & Contact */}
          <article className="bg-white p-8 border border-[#dee4e5] rounded-xs space-y-4 shadow-xs">
            <h2 className="text-2xl font-serif-editorial text-[#212121]">
              7. Contacting the Data Controller
            </h2>
            <p className="text-sm text-[#666666] leading-relaxed font-light">
              For any questions regarding this Privacy Policy, our zero-analytics architecture, or to
              exercise your data rights, please contact our compliance desk directly:
            </p>
            <div className="p-6 bg-[#f7f9fa] border border-[#dee4e5] rounded-xs space-y-2 text-sm">
              <div className="font-semibold text-[#212121]">Novo Enviro Compliance &amp; Legal Desk</div>
              <div className="flex items-center gap-2 text-[#74a4ac]">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@novoenviro.com"
                  className="font-mono text-[#212121] hover:text-[#74a4ac] underline"
                >
                  info@novoenviro.com
                </a>
              </div>
              <p className="text-xs text-[#666666] pt-1">
                Regional Hubs: Sofia, Bulgaria &bull; Istanbul, Türkiye
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
