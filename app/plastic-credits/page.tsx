import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Search,
  ClipboardCheck,
  BarChart3,
  CheckCircle2,
  Recycle,
  Layers,
  ShieldAlert,
  FileCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plastic Credits | From Waste to Worth | Novo Enviro',
  description:
    'End-to-end plastic credit project development and consultancy for recyclers and aggregators. Collective mission: 100,000,000 kilograms of certified plastic credits.',
  openGraph: {
    title: 'Plastic Credits | Novo Enviro',
    description:
      'We help plastic recycling companies and aggregators generate certified plastic credits through internationally recognized standards.',
  },
};

const CONSULTANCY_STEPS = [
  {
    icon: Search,
    title: 'Feasibility & Scoping',
    desc: 'Additionality assessment, feedstock analysis, standard selection, and baseline quantification. We determine whether your operation qualifies before any commitment is made.',
  },
  {
    icon: ClipboardCheck,
    title: 'Certification Support',
    desc: 'Project Design Document development, chain-of-custody design, safeguard protocols, and third-party VVB validation against the applicable standard.',
  },
  {
    icon: BarChart3,
    title: 'Monitoring & Reporting',
    desc: 'Ongoing collection and recording of plastic tonnage data against the approved monitoring plan across each crediting period.',
  },
  {
    icon: CheckCircle2,
    title: 'Verification & Market Access',
    desc: 'Independent VVB audit confirms the monitoring report. Credits are issued to the project registry. Connection to institutional buyers seeking certified plastic credits.',
  },
];

const FOUR_CRITERIA = [
  {
    num: '01',
    title: 'Sound Environmental Process',
    desc: 'Plastic must be collected and processed through genuinely sound environmental practices. Displacement of harm to another location is not accepted. We assess the full downstream processing chain to confirm the plastic is being recovered in a manner that meets applicable environmental regulations.',
  },
  {
    num: '02',
    title: 'Additionality and Ownership',
    desc: 'Collection activity is additional — it would not have occurred without the credit incentive. Ownership is clearly defined and non-duplicative: only one party may hold and claim the credit for each kilogram of plastic recovered. No shared claims, no contested attribution.',
  },
  {
    num: '03',
    title: 'Safeguard Systems',
    desc: 'Robust social and environmental safeguards are in place. Workers are protected. Community wellbeing is not compromised by project activity. Safeguard protocols are developed at project design stage and monitored at each verification cycle.',
  },
  {
    num: '04',
    title: 'Traceability and Transparency',
    desc: 'Every kilogram of plastic is traceable from collection to certified credit. Full chain-of-custody transparency is required throughout. Nothing is obscured, estimated without basis, or asserted without documentation.',
  },
];

export default function PlasticCreditsPage() {
  return (
    <div id="plastic-credits-page" className="w-full">
      {/* Hero Header */}
      <section className="bg-white pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#dee4e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#74a4ac]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#666666] font-sans-technical">
              C E R T I F I E D &nbsp; P L A S T I C &nbsp; C R E D I T S
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif-editorial text-[#212121] tracking-tight leading-[1.15]">
                From Waste <br />
                <span className="italic font-medium">to Worth</span>
                <span className="text-[#74a4ac]">._</span>
              </h1>

              <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed max-w-2xl font-sans-technical">
                <strong className="text-[#212121] font-semibold">Novo Enviro</strong> is a{' '}
                <span className="text-[#212121] font-medium">
                  plastic credit project developer and consultancy
                </span>
                . We help plastic recycling companies and plastic waste aggregators generate
                certified plastic credits through internationally recognised independent standard
                organisations. From additionality assessment to credit issuance — end to end.
              </p>

              <div className="border-l-2 border-[#74a4ac] pl-6 py-2 my-4 bg-[#f7f9fa] rounded-r-xs">
                <blockquote className="text-base sm:text-lg italic font-serif-editorial text-[#212121]">
                  &ldquo;Turn your recycling operation into plastic credits&rdquo;
                </blockquote>
                <p className="text-xs text-[#666666] mt-1 font-sans-technical">
                  Our mission: helping the industry collectively generate{' '}
                  <strong className="text-[#212121] font-medium">100,000,000 kilograms</strong> of
                  verified plastic credits.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  id="plastic-hero-develop-project-btn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#212121] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#74a4ac] transition-colors rounded-xs shadow-xs"
                >
                  <span>Develop a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              {/* Target Banner Box */}
              <div className="border border-[#dee4e5] bg-[#f7f9fa] p-8 sm:p-10 rounded-xs shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-[#dee4e5] pb-4">
                  <span className="text-xs uppercase tracking-widest text-[#74a4ac] font-sans-technical font-semibold">
                    Initial Target
                  </span>
                  <span className="text-xs font-mono text-[#666666]">REGIONAL MANDATE</span>
                </div>

                <div className="space-y-1">
                  <div className="text-5xl sm:text-6xl font-light font-sans-technical text-[#212121] tracking-tight">
                    100M
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-[0.2em] font-sans-technical text-[#212121] font-semibold pt-1">
                    K I L O G R A M S
                  </div>
                  <div className="text-xs text-[#666666] uppercase tracking-wider font-light">
                    OF CERTIFIED PLASTIC CREDITS
                  </div>
                </div>

                <div className="pt-4 border-t border-[#dee4e5] text-xs text-[#666666] leading-relaxed">
                  Supporting collectors, material recovery facilities (MRFs), and mechanical recyclers
                  across Central/Eastern Europe and the Mediterranean.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Plastic Credits */}
      <section
        id="understanding-plastic-credits"
        className="py-20 sm:py-28 bg-[#f7f9fa] border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
              U N D E R S T A N D I N G &nbsp; P L A S T I C &nbsp; C R E D I T S
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#212121] tracking-tight">
              What is a plastic credit and how does it work?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white p-8 border border-[#dee4e5] rounded-xs space-y-4 shadow-xs">
                <h3 className="text-xl font-serif-editorial text-[#212121]">
                  The Certification Mechanism
                </h3>
                <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed">
                  A plastic credit is a{' '}
                  <strong className="text-[#212121] font-medium">
                    certified unit representing the collection and/or recycling of one metric tonne
                    of plastic waste
                  </strong>
                  . Credits are generated by verified plastic recovery projects and purchased by
                  corporations to offset plastic footprint or meet EPR compliance requirements.
                </p>
                <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed">
                  A credit is issued only after an independent third-party verification body
                  confirms that plastic has been collected and processed in line with the
                  certification standard&apos;s methodology. Credits are registered on public
                  registries, ensuring traceability and preventing double-counting.
                </p>
              </div>

              <div className="border-l-2 border-[#74a4ac] pl-6 py-2 bg-white rounded-r-xs border-y border-r border-[#dee4e5]">
                <p className="text-sm text-[#212121] font-medium">
                  Novo Enviro supports recycling operators through the entire process — from
                  project origination to buyer matching.
                </p>
              </div>
            </div>

            {/* Workflow Architecture Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#212121] text-white p-8 rounded-xs space-y-6 shadow-xs">
                <span className="text-xs uppercase tracking-widest text-[#74a4ac] font-mono font-semibold">
                  Chain of Custody
                </span>
                <div className="space-y-4 text-xs font-light text-[#dee4e5]">
                  <div className="flex items-start gap-3 border-b border-white/10 pb-3">
                    <span className="w-5 h-5 rounded-full bg-[#74a4ac] text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-white block text-sm font-sans-technical">
                        Verified Recovery &amp; Recycling
                      </strong>
                      Tonnage collected, sorted, and processed with documented batch traceability.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-b border-white/10 pb-3">
                    <span className="w-5 h-5 rounded-full bg-[#74a4ac] text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-white block text-sm font-sans-technical">
                        Public Registry Issuance
                      </strong>
                      Certified project generates the environmental asset, registered on a public
                      registry.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#74a4ac] text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-white block text-sm font-sans-technical">
                        Institutional Retirement
                      </strong>
                      Retired by corporate buyer against verified ESG disclosures and EPR targets.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Consultancy Process */}
      <section
        id="consultancy-process"
        className="py-20 sm:py-28 bg-white border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
              O U R &nbsp; C O N S U L T A N C Y
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#212121] tracking-tight">
              How Novo Enviro supports your project.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] font-light">
              From feedstock qualification to registry retirement, our engineering and policy teams
              guide recycling operations through each milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONSULTANCY_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  id={`consultancy-step-${idx}`}
                  className="p-8 border border-[#dee4e5] bg-[#f7f9fa] rounded-xs space-y-4 hover:border-[#74a4ac] transition-all"
                >
                  <div className="w-10 h-10 rounded-xs bg-white border border-[#dee4e5] flex items-center justify-center text-[#74a4ac]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif-editorial text-[#212121]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Four Quality Criteria */}
      <section
        id="plastic-credit-quality"
        className="py-20 sm:py-28 bg-[#f7f9fa] border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
              P L A S T I C &nbsp; C R E D I T &nbsp; Q U A L I T Y
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial text-[#212121] tracking-tight">
              Four criteria. No exceptions.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed">
              Every plastic credit project we certify must satisfy all four quality criteria. These
              are the standards that protect buyers, communities, and the long-term integrity of
              the plastic credit market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FOUR_CRITERIA.map((crit) => (
              <div
                key={crit.num}
                id={`criteria-card-${crit.num}`}
                className="bg-white border border-[#dee4e5] p-8 sm:p-10 rounded-xs shadow-xs space-y-4 hover:border-[#74a4ac] transition-all"
              >
                <div className="flex items-center justify-between border-b border-[#dee4e5] pb-3">
                  <span className="text-2xl font-light font-mono text-[#74a4ac]">
                    {crit.num}
                  </span>
                  <FileCheck className="w-5 h-5 text-[#74a4ac]/60" />
                </div>
                <h3 className="text-xl font-serif-editorial text-[#212121]">
                  {crit.title}
                </h3>
                <p className="text-sm text-[#666666] font-light leading-relaxed">
                  {crit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio Proof & In Development */}
      <section
        id="portfolio-proof"
        className="py-20 sm:py-28 bg-white border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
                P R O J E C T &nbsp; P O R T F O L I O
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#212121] tracking-tight">
                Proof, on the registry.
              </h2>
              <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed">
                Novo Enviro develops high quality certified plastic credit projects end to end — from
                additionality assessment to credit issuance. Every project we bring to registry is
                independently verified by a third-party body and recorded on a public registry,
                ensuring full traceability and preventing double-counting.
              </p>
              <p className="text-sm sm:text-base text-[#212121] font-medium border-l-2 border-[#74a4ac] pl-4">
                The portfolio below is where that process becomes proof: real projects, real
                credits, each one ready for retirement.
              </p>
            </div>

            <div className="bg-[#f7f9fa] border border-[#dee4e5] p-8 sm:p-10 rounded-xs space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
                I N &nbsp; D E V E L O P M E N T
              </span>
              <h3 className="text-2xl font-serif-editorial text-[#212121]">
                Toward 100 million kilograms.
              </h3>
              <p className="text-sm text-[#666666] font-light leading-relaxed">
                We&apos;re continuously originating new projects with plastic collection and
                recycling partners across the region to get there — and we&apos;re always looking
                for the next operation to certify.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <Recycle className="w-5 h-5 text-[#74a4ac]" />
                <span className="text-xs font-mono font-medium text-[#212121]">
                  Active Origination Pipeline: Sofia, Istanbul &amp; Regional Aggregators
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Earn Plastic Credits CTA */}
      <section className="py-20 bg-[#212121] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#74a4ac] font-sans-technical font-medium">
            Recyclers &amp; Waste Collectors
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial text-white">
            Ready to earn <br />
            <span className="italic font-medium text-[#74a4ac]">plastic credits?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#dee4e5]/80 font-light max-w-xl mx-auto">
            If you collect, sort or process post-consumer plastic, let&apos;s talk.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              id="plastic-cta-contact-btn"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#74a4ac] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#608b92] transition-colors rounded-xs shadow-xs"
            >
              <span>Contact Novo Enviro</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
