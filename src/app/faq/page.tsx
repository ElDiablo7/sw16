import React from 'react';
import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'FAQ | SW16 Moves',
  description: 'Frequently asked questions about our removal services in London.',
};

// FAQAccordion placeholder implementation since we might not have it
const FAQAccordion = ({ faqs }: { faqs: { q: string, a: string }[] }) => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details key={index} className="group bg-white rounded-xl shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-navy-800 text-lg">
            {faq.q}
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          <div className="px-6 pb-6 text-gray-600">
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  );
};

const faqs = [
  { q: 'How much does a removal cost?', a: 'Costs vary depending on the size of the move, distance, and number of staff required. Contact us for a free, no-obligation quote tailored to your specific needs.' },
  { q: 'How far in advance should I book?', a: 'We recommend booking 2-4 weeks in advance, especially for end-of-month moves or weekends. However, we do our best to accommodate last-minute requests.' },
  { q: 'Do you dismantle furniture?', a: 'Yes, we can dismantle and reassemble standard furniture like beds and wardrobes. Please let us know in advance so we can allocate enough time.' },
  { q: 'Are my belongings insured?', a: 'Absolutely. We carry comprehensive Goods in Transit and Public Liability insurance for your peace of mind.' },
  { q: 'What areas do you cover?', a: 'We are based in Streatham (SW16) and cover all of London and surrounding areas. We also offer nationwide long-distance moves.' },
  { q: 'Do you provide packing materials?', a: 'We can provide boxes, tape, and bubble wrap for an additional fee. Just ask when requesting your quote.' },
  { q: 'How long does a typical move take?', a: 'A 1-2 bedroom flat usually takes 3-4 hours, while a 3-4 bedroom house can take a full day. Access, stairs, and volume all affect the timing.' },
  { q: 'Can you move single items?', a: 'Yes, we offer a dedicated single item collection service, perfect for eBay, Marketplace, or store pickups.' },
  { q: 'Do you offer storage?', a: 'While we don\'t have our own storage facilities, we can recommend trusted local storage partners and transport your items there.' },
  { q: 'What payment methods do you accept?', a: 'We accept bank transfers, credit/debit cards, and cash. Payment is typically due upon completion of the move.' },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Find answers to common questions about moving with SW16 Moves.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
