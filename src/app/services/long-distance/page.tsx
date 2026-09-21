import React from 'react';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import { CheckCircle2, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Long Distance & Nationwide Removals | SW16 Moves',
  description: 'Moving out of London? We provide long distance and nationwide removal services across the UK.',
};

const included = [
  'Dedicated vehicle solely for your belongings',
  'Careful route planning',
  'Overnight storage options if required',
  'Regular updates during transit',
  'Fully insured nationwide transit',
  'Loading in London, unloading anywhere in the UK'
];

const faqs = [
  { q: 'Do you cover all of the UK?', a: 'Yes, we can move you anywhere in mainland UK from our base in London.' },
  { q: 'Will my items share a van with someone else?', a: 'No, we provide a dedicated service so only your belongings will be in the vehicle.' },
  { q: 'Can you hold my items overnight?', a: 'Yes, if your new property is not ready or it is a long drive, we can securely hold items overnight in the van.' },
  { q: 'How is the price calculated for long distance?', a: 'Price is based on the volume of items, the distance travelled, and the number of staff required.' }
];

export default function LongDistancePage() {
  return (
    <main className="min-h-screen pb-16">
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Long Distance Moves</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Dedicated nationwide removals. From London to anywhere in the UK.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-navy-800 mb-6">What's Included</h2>
            <ul className="space-y-4 mb-12">
              {included.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="text-brand-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-navy-800 mb-6">Nationwide Coverage</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-12">
              <div className="flex items-start mb-4">
                <MapPin className="text-brand-500 mr-3 shrink-0" size={24} />
                <p className="text-gray-700">Whether you're moving to Manchester, Birmingham, Scotland, or Wales, our long-haul experience ensures your items arrive safely and on time. We manage the logistics so you can focus on your new home.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-navy-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-lg text-navy-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-navy-800 mb-6 text-center">Get a Long Distance Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
