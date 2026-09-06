import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, ShieldCheck, Award, TrendingUp, Layers } from 'lucide-react';

export default function HomePage() {
  return (
    <div id="home-page" className="w-full">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative bg-white pt-12 sm:pt-20 pb-16 sm:pb-28 border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#74a4ac]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#666666] font-sans-technical">
              Where Capital Meets Climate Integrity
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Asymmetric Hero Typography */}
            <div className="lg:col-span-7 space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif-editorial text-[#212121] tracking-tight leading-[1.15]">
                Where Capital Meets <br />
                <span className="italic font-medium text-[#212121]">Climate Integrity</span>
                <span className="text-[#74a4ac]">._</span>
              </h1>

              <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed max-w-2xl font-sans-technical">
                <strong className="font-semibold text-[#212121]">Novo Enviro</strong> offers
                project development services for{' '}
                <span className="text-[#212121] font-medium">
                  high-integrity carbon reduction &amp; carbon removal projects
                </span>{' '}
                — validated under most trusted international standards — and provides expert
                consultancy for plastic recycling companies &amp; plastic collection initiatives
                generating{' '}
                <span className="text-[#212121] font-medium">
                  internationally certified plastic credits
                </span>
                .
              </p>

              {/* Quote from Our Team */}
              <div className="border-l-2 border-[#74a4ac] pl-6 py-2 my-6 bg-[#f7f9fa] rounded-r-xs">
                <blockquote className="text-base sm:text-lg italic font-serif-editorial text-[#212121]">
                  &ldquo;Action on climate change is essential to achieve net-zero.&rdquo;
                </blockquote>
                <cite className="block text-xs uppercase tracking-widest text-[#666666] font-sans-technical mt-2 not-italic">
                  — Our Team
                </cite>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/carbon-credits"
                  id="hero-btn-carbon-credits"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#212121] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#74a4ac] transition-colors rounded-xs shadow-xs"
                >
                  <span>Carbon Credits</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/plastic-credits"
                  id="hero-btn-plastic-credits"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#dee4e5] text-[#212121] text-xs font-semibold uppercase tracking-wider hover:border-[#74a4ac] hover:bg-[#f7f9fa] transition-colors rounded-xs"
                >
                  <span>Plastic Credits</span>
                  <ArrowRight className="w-4 h-4 text-[#74a4ac]" />
                </Link>
                <Link
                  href="/contact"
                  id="hero-btn-get-in-touch"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#74a4ac]/10 text-[#212121] text-xs font-semibold uppercase tracking-wider hover:bg-[#74a4ac] hover:text-white transition-colors rounded-xs border border-[#74a4ac]/30"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Institutional Metrics & Visual Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-[#dee4e5] bg-[#f7f9fa] p-8 rounded-xs shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-[#dee4e5] pb-4">
                  <span className="text-xs uppercase tracking-widest text-[#666666] font-sans-technical font-medium">
                    Institutional Record
                  </span>
                  <span className="text-xs font-mono text-[#74a4ac] font-semibold">
                    EST. 2019
                  </span>
                </div>

                <div className="space-y-6 divide-y divide-[#dee4e5]">
                  <div className="pt-2">
                    <div className="text-4xl sm:text-5xl font-light font-sans-technical text-[#212121] tracking-tight">
                      3M<span className="text-[#74a4ac] font-medium">+</span>
                    </div>
                    <div className="text-xs uppercase tracking-widest text-[#666666] mt-1 font-sans-technical font-medium">
                      Credits Traded &amp; Contracted
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="text-4xl sm:text-5xl font-light font-sans-technical text-[#212121] tracking-tight">
                      7<span className="text-[#74a4ac] font-medium">+ yrs</span>
                    </div>
                    <div className="text-xs uppercase tracking-widest text-[#666666] mt-1 font-sans-technical font-medium">
                      Carbon Markets Experience
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="text-4xl sm:text-5xl font-light font-sans-technical text-[#212121] tracking-tight">
                      5<span className="text-[#74a4ac] font-medium">+</span>
                    </div>
                    <div className="text-xs uppercase tracking-widest text-[#666666] mt-1 font-sans-technical font-medium">
                      Projects Validated
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#dee4e5]">
                  <span className="text-[11px] uppercase tracking-widest text-[#666666] block mb-2 font-medium">
                    Validated Standards
                  </span>
                  <div className="py-2.5 px-4 bg-white border border-[#dee4e5] rounded-xs text-xs font-mono font-semibold tracking-wider text-[#212121] text-center">
                    VERRA &bull; GOLD STANDARD &bull; PPRS
                  </div>
                </div>
              </div>

              {/* Visual Anchor */}
              <div className="relative h-48 sm:h-56 rounded-xs overflow-hidden border border-[#dee4e5]">
                <Image
                  src="/images/carbon_photo.jpg"
                  alt="Novo Enviro Climate Finance Projects"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs text-white/90 font-light flex items-center justify-between">
                  <span>Sofia &bull; Istanbul</span>
                  <span className="font-mono text-[#dee4e5]">Regional Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions-section"
        className="py-20 sm:py-28 bg-[#f7f9fa] border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Eyebrow & Title */}
          <div className="max-w-2xl space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
              O U R &nbsp; C L I M A T E &nbsp; S O L U T I O N S
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#212121] tracking-tight">
              Two Pathways to Real Impact.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] font-light">
              Rigorous, independently verified environmental assets tailored for
              institutional decarbonization and EPR compliance.
            </p>
          </div>

          {/* Considered Asymmetrical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pathway 1: Carbon Project Development */}
            <article
              id="solution-card-carbon"
              className="bg-white border border-[#dee4e5] p-8 sm:p-10 rounded-xs shadow-xs flex flex-col justify-between hover:border-[#74a4ac] transition-all group"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xs bg-[#74a4ac]/10 flex items-center justify-center text-[#74a4ac]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#74a4ac] uppercase tracking-wider block mb-1">
                    Pathway 01
                  </span>
                  <h3 className="text-2xl font-serif-editorial text-[#212121]">
                    Carbon Project Development
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed">
                  Developing impactful carbon reduction and removal projects that
                  generate high-quality credits to help organizations realize their
                  net-zero commitments. You get credits you can actually stand behind.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#dee4e5]">
                <Link
                  href="/carbon-credits"
                  id="link-explore-carbon-credits"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#212121] group-hover:text-[#74a4ac] transition-colors"
                >
                  <span>Explore Carbon Credits</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#74a4ac]" />
                </Link>
              </div>
            </article>

            {/* Pathway 2: Plastic Credit Consultancy */}
            <article
              id="solution-card-plastic"
              className="bg-white border border-[#dee4e5] p-8 sm:p-10 rounded-xs shadow-xs flex flex-col justify-between hover:border-[#74a4ac] transition-all group"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xs bg-[#74a4ac]/10 flex items-center justify-center text-[#74a4ac]">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#74a4ac] uppercase tracking-wider block mb-1">
                    Pathway 02
                  </span>
                  <h3 className="text-2xl font-serif-editorial text-[#212121]">
                    Plastic Credit Consultancy
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed">
                  Turn plastic waste into positive change. We advise plastic recycling
                  operations on earning internationally certified plastic credits. Develop
                  high-impact plastic credit projects with us for a sustainable future.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#dee4e5]">
                <Link
                  href="/plastic-credits"
                  id="link-explore-plastic-credits"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#212121] group-hover:text-[#74a4ac] transition-colors"
                >
                  <span>Explore Plastic Credits</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#74a4ac]" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Why Novo Enviro Section */}
      <section
        id="why-novo-enviro-section"
        className="py-20 sm:py-28 bg-white border-b border-[#dee4e5]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Eyebrow & Headline */}
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#74a4ac] font-sans-technical">
              W H Y &nbsp; N O V O &nbsp; E N V I R O
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial text-[#212121] tracking-tight leading-tight">
              Expertise You Can <br />
              <span className="italic font-medium">Verify. Trust. Rely On.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#666666] font-light leading-relaxed">
              We operate at the frontier of climate finance - developing projects and provide
              consultancy services that generate{' '}
              <strong className="font-semibold text-[#212121]">
                verifiable, certified environmental assets.
              </strong>
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pillar 1: Expertise */}
            <div
              id="pillar-expertise"
              className="p-8 border border-[#dee4e5] rounded-xs bg-[#f7f9fa] space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xs bg-[#212121] text-white flex items-center justify-center text-xs font-mono font-bold">
                  01
                </span>
                <h3 className="text-xl font-serif-editorial text-[#212121]">Expertise</h3>
              </div>
              <p className="text-sm text-[#666666] font-light leading-relaxed">
                We bring a wealth of experience to the table. Our team is comprised of
                passionate professionals with a deep understanding of carbon project
                development, plastic waste management, and the responsible trade of
                environmental assets. A thorough understanding of what buyers, regulators,
                and standard bodies require.
              </p>
              <p className="text-xs font-medium text-[#212121] pt-2 border-t border-[#dee4e5]">
                Seven years of carbon market experience. Over three million credits traded
                and contracted. More than five projects validated under the world&apos;s
                leading standard bodies.
              </p>
            </div>

            {/* Pillar 2: Integrity */}
            <div
              id="pillar-integrity"
              className="p-8 border border-[#dee4e5] rounded-xs bg-[#f7f9fa] space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xs bg-[#212121] text-white flex items-center justify-center text-xs font-mono font-bold">
                  02
                </span>
                <h3 className="text-xl font-serif-editorial text-[#212121]">Integrity</h3>
              </div>
              <p className="text-sm text-[#666666] font-light leading-relaxed">
                We believe in building trust through transparency and ethical practices. Every
                project we undertake adheres to the highest standards, ensuring measurable
                environmental benefits.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#74a4ac] font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero tolerance for non-additional or unmonitored credits</span>
              </div>
            </div>

            {/* Pillar 3: Flexibility */}
            <div
              id="pillar-flexibility"
              className="p-8 border border-[#dee4e5] rounded-xs bg-[#f7f9fa] space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xs bg-[#212121] text-white flex items-center justify-center text-xs font-mono font-bold">
                  03
                </span>
                <h3 className="text-xl font-serif-editorial text-[#212121]">Flexibility</h3>
              </div>
              <p className="text-sm text-[#666666] font-light leading-relaxed">
                We recognize that there&apos;s no one-size-fits-all solution to sustainability
                issues. We approach each project with a creative mindset, tailoring our
                strategies to meet your specific needs and goals.
              </p>
            </div>

            {/* Pillar 4: Innovation */}
            <div
              id="pillar-innovation"
              className="p-8 border border-[#dee4e5] rounded-xs bg-[#f7f9fa] space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xs bg-[#212121] text-white flex items-center justify-center text-xs font-mono font-bold">
                  04
                </span>
                <h3 className="text-xl font-serif-editorial text-[#212121]">Innovation</h3>
              </div>
              <p className="text-sm text-[#666666] font-light leading-relaxed">
                Our commitment to innovation ensures that the solutions we offer are not only
                effective today, but also adaptable to meet the evolving challenges of
                tomorrow.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#74a4ac] font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>Navigating Article 6, CBAM &amp; emerging EPR mandates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional CTA Strip */}
      <section
        id="cta-section"
        className="py-16 sm:py-24 bg-[#212121] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#74a4ac] font-sans-technical font-medium">
              Partnership &amp; Project Origination
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-white">
              Let&apos;s work together..
            </h2>
            <p className="text-sm text-[#dee4e5]/80 font-light max-w-xl">
              Initiate a dialogue with our project teams in Sofia and Istanbul for carbon
              development or plastic credit certification.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/contact"
              id="home-cta-contact-button"
              className="px-8 py-4 bg-[#74a4ac] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#608b92] transition-colors rounded-xs shadow-xs"
            >
              Contact Novo Enviro
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
