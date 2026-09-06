'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    serviceInterest: 'carbon-credits',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean client-side submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div
        id="contact-form-success-state"
        className="p-8 bg-[#f7f9fa] border border-[#dee4e5] rounded-xs text-center space-y-4 animate-fadeIn"
      >
        <div className="w-12 h-12 bg-[#74a4ac]/10 text-[#74a4ac] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-serif-editorial text-[#212121]">
          Message Successfully Transmitted
        </h4>
        <p className="text-sm text-[#666666] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out, <strong className="text-[#212121]">{formData.name}</strong>.
          Our climate finance advisory team in Sofia and Istanbul will review your inquiry
          and respond within 48 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              organization: '',
              serviceInterest: 'carbon-credits',
              message: '',
            });
          }}
          className="text-xs font-semibold uppercase tracking-wider text-[#74a4ac] hover:underline pt-2"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      id="institutional-inquiry-form"
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 sm:p-8 border border-[#dee4e5] rounded-xs shadow-xs"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs uppercase tracking-wider text-[#666666] mb-1 font-sans-technical"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="contact-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="First and Last Name"
            className="w-full px-3 py-2 text-sm border border-[#dee4e5] rounded-xs focus:border-[#74a4ac] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs uppercase tracking-wider text-[#666666] mb-1 font-sans-technical"
          >
            Corporate Email *
          </label>
          <input
            type="email"
            id="contact-email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="corporate.email@organization.com"
            className="w-full px-3 py-2 text-sm border border-[#dee4e5] rounded-xs focus:border-[#74a4ac] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-org"
            className="block text-xs uppercase tracking-wider text-[#666666] mb-1 font-sans-technical"
          >
            Company / Organization *
          </label>
          <input
            type="text"
            id="contact-org"
            required
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="Enterprise, Municipality or Project Entity"
            className="w-full px-3 py-2 text-sm border border-[#dee4e5] rounded-xs focus:border-[#74a4ac] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-service"
            className="block text-xs uppercase tracking-wider text-[#666666] mb-1 font-sans-technical"
          >
            Primary Inquiry Focus
          </label>
          <select
            id="contact-service"
            value={formData.serviceInterest}
            onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-[#dee4e5] rounded-xs focus:border-[#74a4ac] focus:outline-none bg-white"
          >
            <option value="carbon-credits">Carbon Project Development (VERs)</option>
            <option value="plastic-credits">Plastic Credit Consultancy (100M kg Target)</option>
            <option value="standards-vvb">Standards &amp; VVB Audit Advisory</option>
            <option value="institutional-partnership">Institutional Partnerships</option>
            <option value="general-inquiry">General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs uppercase tracking-wider text-[#666666] mb-1 font-sans-technical"
        >
          Message / Project Context *
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your project scope, location, expected crediting timeline or specific advisory needs..."
          className="w-full px-3 py-2 text-sm border border-[#dee4e5] rounded-xs focus:border-[#74a4ac] focus:outline-none resize-y"
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <p className="text-xs text-[#666666]">
          Direct routing to <span className="font-mono text-[#212121]">info@novoenviro.com</span>
        </p>
        <button
          type="submit"
          id="contact-form-submit-button"
          disabled={loading}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#212121] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#74a4ac] transition-colors rounded-xs shadow-xs"
        >
          <span>{loading ? 'Sending...' : 'Send Inquiry'}</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
}
