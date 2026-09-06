import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Wind,
  Zap,
  Sprout,
  Trees,
  Trash2,
  Flame,
  ArrowRightLeft,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carbon Credits | Novo Enviro',
  description:
    'High-integrity carbon reduction and carbon removal projects certified under Verra, Gold Standard, and PPRS. Six pillars of non-negotiable carbon credit quality.',
  openGraph: {
    title: 'Carbon Credits | High-Integrity Projects | Novo Enviro',
    description:
      'High-integrity carbon reduction and removal projects certified under internationally recognized standards.',
  },
};

const PROJECT_TYPES = [
  {
    name: 'Renewable Energy',
    desc: 'Solar, wind, hydro, and geothermal deployments displacing fossil fuel grid baselines.',
    icon: Zap,
  },
  {
    name: 'Energy Efficiency',
    desc: 'Industrial thermal recovery, advanced building management, and process optimization.',
    icon: Wind,
  },
  {
    name: 'Agriculture',
    desc: 'Regenerative farming, precision fertilizer management, and soil carbon sequestration.',
    icon: Sprout,
  },
  {
    name: 'Forestry',
    desc: 'Afforestation, reforestation, and improved forest management with strict buffer pools.',
    icon: Trees,
  },
  {
    name: 'Waste Management & Handling',
    desc: 'Composting, organic waste diversion, and municipal solid waste methane abatement.',
    icon: Trash2,
  },
  {
    name: 'Methane Capture',
    desc: 'Landfill gas collection and agricultural bio-digester methane destruction.',
    icon: Flame,
  },
  {
    name: 'Fuel Switch',
    desc: 'Transitioning energy-intensive industrial heating from heavy fuels to clean alternatives.',
    icon: ArrowRightLeft,
  },
];

const SIX_PILLARS = [
  {
    num: '01',
    title: 'Verifiability',
    desc: 'A thorough audit trail documenting how the project delivered on its objectives and was verifiably feasible.',
  },
  {
    num: '02',
    title: 'Realness',
    desc: 'Emission reductions are measurable, independently quantifiable, and supported by verifiable monitoring data.',
  },
  {
    num: '03',
    title: 'Permanence',
    desc: 'Over time, the project achieves the promised carbon reductions in a sustained manner.',
  },
  {
    num: '04',
    title: 'Additionality',
    desc: 'The project activity would not have occurred under a business-as-usual scenario without the financial incentive created by carbon credit revenues.',
  },
  {
    num: '05',
    title: 'No Leakage',
    desc: "The project's emissions reduction does not cause additional emissions to be produced elsewhere.",
  },
  {
    num: '06',
    title: 'No Double Counting',
    desc: 'One tonne of CO₂ reduced or removed generates one credit, claimed by one beneficial owner.',
  },
];

export default function CarbonCreditsPage() {
  return (
    <div id="carbon-credits-page" className="w-full">
      {/* Hero Header */}
      <section className="bg-white pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#dee4e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#74a4ac]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#666666] font-sans-technical">
              P R O J E C T &nbsp; D E V E L O P M E N T
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif-editorial text-[#212121] tracking-tight leading-[1.15]">
                High-Integrity <br />
                <span className="italic font-medium">Carbon Credits</span>
                <span className="text-[#74a4ac]">._</span>
              </h1>

              <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed max-w-2xl font-sans-technical">
                There is no denying the importance of verified carbon credits in the fight
                against global warming.{' '}
                <strong className="text-[#212121] font-semibold">Novo Enviro</strong> develops{' '}
                <span className="text-[#212121] font-medium">
                  carbon reduction and removal projects
                </span>{' '}
                certified under internationally recognized standards. Every credit we bring to
                market satisfies quality criteria and is independently verified. We don&apos;t
                compromise on the fundamentals.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  id="carbon-hero-start-project-btn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#212121] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#74a4ac] transition-colors rounded-xs shadow-xs"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative h-64 sm:h-80 w-full rounded-xs overflow-hidden border border-[#dee4e5] shadow-xs">
                <Image
                  src="/images/carbon_banner.jpg"
                  alt="High integrity verified carbon projects"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 border border-[#dee4e5] rounded-xs text-[11px] text-[#212121]">
                  <span className="font-semibold block text-[#74a4ac] uppercase tracking-wider">
                    Registry Assurance
                  </span>
                  Verra (VCS) &bull; Gold Standard &bull; PPRS Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Carbon Credits Section */}
      <section
        id="what-are-carbon-credits"
        className="py-20 sm:py-28 bg-[#f7f9fa] border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
              W H A T &nbsp; A R E &nbsp; C A R B O N &nbsp; C R E D I T S
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#212121] tracking-tight">
              The instrument. The mechanism. The value.
            </h2>
          </div>

          {/* Definition Quote Box */}
          <div className="border-l-4 border-[#74a4ac] bg-white p-8 sm:p-10 rounded-r-xs border-y border-r border-[#dee4e5] mb-12 shadow-xs">
            <blockquote className="text-lg sm:text-xl font-serif-editorial text-[#212121] leading-relaxed italic">
              &ldquo;One carbon credit represents the verified reduction or removal of one metric
              tonne of CO₂ equivalent — independently confirmed by an accredited third party.&rdquo;
            </blockquote>
          </div>

          {/* Explanation Triad */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 border border-[#dee4e5] rounded-xs space-y-3">
              <span className="text-xs font-mono text-[#74a4ac] uppercase tracking-wider block font-semibold">
                Core Mechanism
              </span>
              <p className="text-sm text-[#666666] font-light leading-relaxed">
                Carbon credits enable corporations to address unavoidable emissions by funding
                projects that generate an equivalent volume of verified greenhouse gas reductions. A
                credit is issued only after an independent Validation and Verification Body (VVB)
                confirms the reduction has occurred in line with the relevant standard&apos;s
                methodology.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-[#dee4e5] rounded-xs space-y-3">
              <span className="text-xs font-mono text-[#74a4ac] uppercase tracking-wider block font-semibold">
                Traceability &amp; Registries
              </span>
              <p className="text-sm text-[#666666] font-light leading-relaxed">
                Novo Enviro develops{' '}
                <strong className="text-[#212121] font-semibold">
                  Verified Emission Reductions (VERs)
                </strong>{' '}
                — produced by projects fully compliant with internationally recognised verification
                standards. VERs are registered on public registries, ensuring full traceability and
                preventing double counting.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-[#dee4e5] rounded-xs space-y-3">
              <span className="text-xs font-mono text-[#74a4ac] uppercase tracking-wider block font-semibold">
                Net-Zero Value
              </span>
              <p className="text-sm text-[#666666] font-light leading-relaxed">
                For institutional buyers, high-quality carbon credits are critical instruments for
                net-zero strategy. They provide funding for accelerating carbon reductions and
                removals that would not have occurred otherwise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Portfolio & Types Section */}
      <section
        id="project-portfolio"
        className="py-20 sm:py-28 bg-white border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
              P R O J E C T &nbsp; P O R T F O L I O
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#212121] tracking-tight">
              Carbon reduction &amp; removal project types.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed">
              There are several types of projects that generate carbon offset credits. Some type of
              carbon offset projects are; renewable energy, energy efficiency, agriculture,
              forestry, waste management and handling, methane capture and fuel switch.
            </p>
            <p className="text-xs sm:text-sm text-[#212121] font-medium pt-2 border-l-2 border-[#74a4ac] pl-4">
              These projects must adhere to international criteria that have been independently
              verified and have a measurable positive impact on society, the environment, and the
              economy—all of which support sustainable development.
            </p>
          </div>

          {/* Grid of 7 Project Types */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROJECT_TYPES.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.name}
                  id={`project-type-card-${idx}`}
                  className="p-6 border border-[#dee4e5] bg-[#f7f9fa] rounded-xs hover:border-[#74a4ac] transition-all group space-y-3"
                >
                  <div className="w-10 h-10 rounded-xs bg-white border border-[#dee4e5] flex items-center justify-center text-[#74a4ac] group-hover:bg-[#74a4ac] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold font-serif-editorial text-[#212121]">
                    {type.name}
                  </h3>
                  <p className="text-xs text-[#666666] font-light leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Six Pillars of Quality Section */}
      <section
        id="carbon-credit-quality"
        className="py-20 sm:py-28 bg-[#f7f9fa] border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
              C A R B O N &nbsp; C R E D I T &nbsp; Q U A L I T Y
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial text-[#212121] tracking-tight">
              Six Pillars. Zero Compromise.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed">
              Every carbon project we develop is built on six non-negotiable quality criteria.
              <br />
              <span className="text-[#212121] font-medium italic">
                This is the architecture of every project we build.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SIX_PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                id={`pillar-card-${pillar.num}`}
                className="bg-white border border-[#dee4e5] p-8 rounded-xs shadow-xs space-y-4 hover:border-[#74a4ac] transition-all"
              >
                <div className="flex items-center justify-between border-b border-[#dee4e5] pb-3">
                  <span className="text-2xl font-light font-mono text-[#74a4ac]">
                    {pillar.num}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#74a4ac]/60" />
                </div>
                <h3 className="text-xl font-serif-editorial text-[#212121]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#666666] font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Develop CTA */}
      <section className="py-20 bg-[#212121] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#74a4ac] font-sans-technical font-medium">
            Origination &amp; Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial text-white">
            Ready to develop a <br />
            <span className="italic font-medium text-[#74a4ac]">carbon project?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#dee4e5]/80 font-light max-w-xl mx-auto">
            Contact Novo Enviro to initiate standard selection, baseline modeling, and accredited
            VVB audit roadmaps.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              id="carbon-cta-contact-btn"
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
