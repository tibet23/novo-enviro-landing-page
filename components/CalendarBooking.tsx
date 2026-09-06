'use client';

import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Globe,
  CheckCircle2,
  Download,
  Building,
  User,
  Mail,
  FileText,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface MeetingType {
  id: string;
  title: string;
  duration: string;
  description: string;
}

const MEETING_TYPES: MeetingType[] = [
  {
    id: 'institutional-briefing',
    title: 'Institutional Climate Finance Briefing',
    duration: '30 mins',
    description:
      'High-level introductory dialogue on net-zero portfolio strategy, carbon offsets, and regulatory positioning.',
  },
  {
    id: 'carbon-project',
    title: 'Carbon Project Origination & Scoping',
    duration: '45 mins',
    description:
      'Additionality pre-screening, standard selection (Verra, Gold Standard, PPRS), and baseline feasibility analysis.',
  },
  {
    id: 'plastic-credit',
    title: 'Plastic Credit Consultancy & Certification',
    duration: '45 mins',
    description:
      'Advisory for recycling operations, feedstock analysis, chain-of-custody protocols, and credit issuance roadmap.',
  },
];

const TIMEZONES = [
  { label: 'Sofia / EET (UTC+3)', value: 'Europe/Sofia' },
  { label: 'Istanbul / TRT (UTC+3)', value: 'Europe/Istanbul' },
  { label: 'London / GMT (UTC+1)', value: 'Europe/London' },
  { label: 'Brussels / CET (UTC+2)', value: 'Europe/Brussels' },
  { label: 'New York / EST (UTC-4)', value: 'America/New_York' },
];

const TIME_SLOTS = [
  '09:30 AM',
  '11:00 AM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM',
  '06:00 PM',
];

export default function CalendarBooking() {
  const [selectedType, setSelectedType] = useState<string>(MEETING_TYPES[0].id);
  const [selectedTimezone, setSelectedTimezone] = useState<string>('Europe/Sofia');
  const [currentMonthDate, setCurrentMonthDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [notes, setNotes] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  // Generate calendar days for current month view
  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth();
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentMonthDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonthDate(new Date(year, month + 1, 1));
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleDaySelect = (day: number) => {
    const chosen = new Date(year, month, day);
    // Don't allow past days
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosen < today) return;
    // Don't allow weekends
    if (chosen.getDay() === 0 || chosen.getDay() === 6) return;

    setSelectedDate(chosen);
    if (!selectedTime) {
      setSelectedTime(TIME_SLOTS[0]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name || !email || !organization) {
      return;
    }
    const randomRef = 'NE-' + Math.floor(100000 + Math.random() * 900000);
    setBookingReference(randomRef);
    setBookingConfirmed(true);
  };

  // Helper to download an .ics file for customer's Outlook / Google / Apple Calendar
  const downloadIcs = () => {
    if (!selectedDate || !selectedTime) return;
    const meeting = MEETING_TYPES.find((m) => m.id === selectedType);
    const title = meeting ? meeting.title : 'Novo Enviro Consultation';

    const formattedDateStr = selectedDate.toISOString().replace(/-|:|\.\d+/g, '').substring(0, 8);
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Novo Enviro//Institutional Meeting Scheduler//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:REQUEST',
      'BEGIN:VEVENT',
      `UID:${bookingReference || 'novo-enviro-consult'}@novoenviro.com`,
      `SUMMARY:${title} - Novo Enviro`,
      `DESCRIPTION:${meeting?.description}\\n\\nAttendee: ${name} (${organization})\\nLocation: Video Conference (Google Meet / Teams)\\nEmail: info@novoenviro.com`,
      `ORGANIZER;CN=Novo Enviro Consultation:mailto:info@novoenviro.com`,
      `ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=${name}:mailto:${email}`,
      `DTSTART:${formattedDateStr}T100000Z`,
      `DTEND:${formattedDateStr}T104500Z`,
      'STATUS:CONFIRMED',
      'LOCATION:Video Conference',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Novo_Enviro_${bookingReference}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetBooking = () => {
    setBookingConfirmed(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setName('');
    setEmail('');
    setOrganization('');
    setNotes('');
  };

  const selectedMeeting = MEETING_TYPES.find((m) => m.id === selectedType);

  return (
    <div
      id="bespoke-appointment-scheduler"
      className="bg-white border border-[#dee4e5] rounded-xs shadow-xs overflow-hidden"
    >
      {/* Header bar */}
      <div className="bg-[#212121] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#dee4e5]/20">
        <div>
          <div className="flex items-center gap-2 text-[#74a4ac] text-xs font-semibold tracking-widest uppercase mb-1 font-sans-technical">
            <CalendarIcon className="w-4 h-4" />
            <span>Consultation Schedule</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif-editorial text-white">
            Schedule a Direct Consultation
          </h3>
          <p className="text-xs sm:text-sm text-[#dee4e5]/80 mt-1">
            Connect directly with our climate finance specialists in Sofia and Istanbul.
          </p>
        </div>

        {/* Timezone Selector */}
        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xs border border-white/15">
          <Globe className="w-4 h-4 text-[#74a4ac] shrink-0" />
          <label htmlFor="timezone-select" className="sr-only">
            Select Timezone
          </label>
          <select
            id="timezone-select"
            value={selectedTimezone}
            onChange={(e) => setSelectedTimezone(e.target.value)}
            className="bg-transparent text-xs text-white focus:outline-none cursor-pointer"
          >
            {TIMEZONES.map((tz) => (
              <option key={tz.value} value={tz.value} className="text-[#212121]">
                {tz.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {bookingConfirmed ? (
        /* Confirmation State */
        <div
          id="booking-confirmation-view"
          className="p-8 sm:p-12 max-w-2xl mx-auto text-center space-y-6 animate-fadeIn"
        >
          <div className="w-16 h-16 bg-[#74a4ac]/10 text-[#74a4ac] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#74a4ac] font-semibold">
              Confirmed Consultation
            </span>
            <h4 className="text-2xl font-serif-editorial text-[#212121]">
              Consultation Successfully Scheduled
            </h4>
            <p className="text-sm text-[#666666]">
              A calendar invitation and conference link have been queued for{' '}
              <strong className="text-[#212121]">{email}</strong>.
            </p>
          </div>

          <div className="bg-[#f7f9fa] border border-[#dee4e5] p-6 text-left rounded-xs space-y-3 text-sm">
            <div className="flex justify-between border-b border-[#dee4e5] pb-2">
              <span className="text-[#666666]">Reference ID</span>
              <span className="font-mono font-medium text-[#212121]">{bookingReference}</span>
            </div>
            <div className="flex justify-between border-b border-[#dee4e5] pb-2">
              <span className="text-[#666666]">Consultation Type</span>
              <span className="font-medium text-[#212121]">{selectedMeeting?.title}</span>
            </div>
            <div className="flex justify-between border-b border-[#dee4e5] pb-2">
              <span className="text-[#666666]">Date &amp; Time</span>
              <span className="font-medium text-[#212121]">
                {selectedDate?.toLocaleDateString('en-GB', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}{' '}
                at {selectedTime}
              </span>
            </div>
            <div className="flex justify-between border-b border-[#dee4e5] pb-2">
              <span className="text-[#666666]">Organization</span>
              <span className="font-medium text-[#212121]">{organization}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#666666]">Host</span>
              <span className="font-medium text-[#212121]">
                Novo Enviro Partner (Sofia / Istanbul Hub)
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              id="download-ics-invite-button"
              onClick={downloadIcs}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#74a4ac] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#608b92] transition-colors rounded-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Calendar Invite (.ICS)</span>
            </button>
            <button
              type="button"
              id="reschedule-another-slot-button"
              onClick={resetBooking}
              className="w-full sm:w-auto px-6 py-3 border border-[#dee4e5] text-xs font-semibold uppercase tracking-wider text-[#212121] hover:bg-[#f7f9fa] transition-colors rounded-xs"
            >
              Book Another Meeting
            </button>
          </div>
        </div>
      ) : (
        /* Multi-step Interactive Calendar Grid */
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Consultation Type selection */}
          <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-[#dee4e5] lg:pr-6 pb-6 lg:pb-0">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#666666] block font-sans-technical">
              1. Select Consultation Focus
            </span>
            <div className="space-y-3">
              {MEETING_TYPES.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    type="button"
                    key={type.id}
                    id={`meeting-type-btn-${type.id}`}
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full text-left p-4 rounded-xs border transition-all ${
                      isSelected
                        ? 'border-[#74a4ac] bg-[#74a4ac]/5 shadow-xs'
                        : 'border-[#dee4e5] hover:border-[#74a4ac]/50 hover:bg-[#f7f9fa]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-sm font-medium ${
                          isSelected ? 'text-[#212121] font-semibold' : 'text-[#212121]'
                        }`}
                      >
                        {type.title}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-xs bg-[#dee4e5]/50 text-[#666666] whitespace-nowrap">
                        {type.duration}
                      </span>
                    </div>
                    <p className="text-xs text-[#666666] mt-2 leading-relaxed">
                      {type.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 mt-4 border-t border-[#dee4e5] text-xs text-[#666666] space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#74a4ac]" />
                <span>Response confirmed within 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#74a4ac]" />
                <span>Confidential, non-binding assessment</span>
              </div>
            </div>
          </div>

          {/* Column 2: Date and Time selection */}
          <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-[#dee4e5] lg:pr-6 pb-6 lg:pb-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#666666] font-sans-technical">
                2. Choose Date &amp; Slot
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={prevMonth}
                  className="p-1 hover:bg-[#f7f9fa] rounded-xs text-[#212121] transition-colors"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-medium text-[#212121] px-1">
                  {monthNames[month]} {year}
                </span>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="p-1 hover:bg-[#f7f9fa] rounded-xs text-[#212121] transition-colors"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Month Day Matrix */}
            <div className="border border-[#dee4e5] p-3 rounded-xs bg-[#f7f9fa]/50">
              <div className="grid grid-cols-7 text-center text-[11px] font-medium text-[#666666] mb-2 pb-1 border-b border-[#dee4e5]">
                <span>Su</span>
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
              </div>

              <div className="grid grid-cols-7 gap-1 text-xs text-center">
                {Array.from({ length: firstDayIndex }).map((_, i) => (
                  <div key={`empty-${i}`} className="p-1.5 opacity-0" />
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dateObj = new Date(year, month, day);
                  const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const isPast = dateObj < today;
                  const isDisabled = isWeekend || isPast;

                  const isSelected =
                    selectedDate &&
                    selectedDate.getFullYear() === year &&
                    selectedDate.getMonth() === month &&
                    selectedDate.getDate() === day;

                  return (
                    <button
                      type="button"
                      key={day}
                      disabled={isDisabled}
                      onClick={() => handleDaySelect(day)}
                      id={`calendar-day-${year}-${month + 1}-${day}`}
                      className={`p-2 rounded-xs font-sans-technical text-xs transition-colors ${
                        isSelected
                          ? 'bg-[#74a4ac] text-white font-bold'
                          : isDisabled
                          ? 'text-[#dee4e5] cursor-not-allowed'
                          : 'hover:bg-[#dee4e5] text-[#212121]'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-medium text-[#666666] uppercase tracking-wider block">
                Available Slots ({selectedTimezone.split('/')[1]})
              </span>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      type="button"
                      key={slot}
                      id={`time-slot-btn-${slot.replace(/\s+|:/g, '-').toLowerCase()}`}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-1 text-center text-xs font-mono rounded-xs border transition-colors ${
                        isSelected
                          ? 'bg-[#212121] text-white border-[#212121]'
                          : 'border-[#dee4e5] hover:border-[#74a4ac] text-[#212121] bg-white'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 3: Attendee Details & Confirmation Form */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#666666] block font-sans-technical">
              3. Institutional Details
            </span>

            <form onSubmit={handleBookingSubmit} className="space-y-3.5">
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-xs uppercase tracking-wider text-[#666666] mb-1"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#666666] absolute left-3 top-3" />
                  <input
                    type="text"
                    id="booking-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Elena Petrova"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#dee4e5] rounded-xs focus:border-[#74a4ac] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-email"
                  className="block text-xs uppercase tracking-wider text-[#666666] mb-1"
                >
                  Corporate Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#666666] absolute left-3 top-3" />
                  <input
                    type="email"
                    id="booking-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@organization.com"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#dee4e5] rounded-xs focus:border-[#74a4ac] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-org"
                  className="block text-xs uppercase tracking-wider text-[#666666] mb-1"
                >
                  Organization / Entity *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-[#666666] absolute left-3 top-3" />
                  <input
                    type="text"
                    id="booking-org"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Company or Fund Name"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#dee4e5] rounded-xs focus:border-[#74a4ac] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-xs uppercase tracking-wider text-[#666666] mb-1"
                >
                  Project Summary or Agenda
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-[#666666] absolute left-3 top-3" />
                  <textarea
                    id="booking-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Details about carbon project or recycling operation..."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#dee4e5] rounded-xs focus:border-[#74a4ac] focus:outline-none resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="confirm-booking-submit-button"
                  disabled={!selectedDate || !selectedTime}
                  className={`w-full py-3 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors ${
                    selectedDate && selectedTime
                      ? 'bg-[#212121] text-white hover:bg-[#74a4ac] cursor-pointer'
                      : 'bg-[#dee4e5] text-[#666666] cursor-not-allowed'
                  }`}
                >
                  {selectedDate && selectedTime
                    ? `Confirm Consultation (${selectedDate.getDate()} ${
                        monthNames[selectedDate.getMonth()].slice(0, 3)
                      } at ${selectedTime})`
                    : 'Select Date & Time to Proceed'}
                </button>
              </div>

              <p className="text-[11px] text-[#666666] text-center">
                Strict confidentiality guaranteed under institutional NDAs.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
