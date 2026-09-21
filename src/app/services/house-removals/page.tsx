import React from 'react';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import { CheckCircle2, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'House & Flat Removals London | SW16 Moves',
  description: 'Professional house and flat removals in London. Fully insured, reliable service with packing and furniture protection included.',
};

const included = [
  'Loading and unloading by experienced professionals',
  'Careful handling of delicate furniture and appliances',
  'Use of removal blankets and straps',
  'Basic furniture dismantling and reassembly',
  'Fully insured transit',
  'Positioning of furniture in your new home'
];

const faqs = [
  { q: 'Do you provide packing materials?', a: 'We can provide packing boxes and materials upon request for an additional fee.' },
  { q: 'How long does a house move take?', a: 'A typical 1-2 bedroom flat takes 3-4 hours, while a 3-4 bedroom house can take 6-8 hours depending on access and distance.' },
  { q: 'Are my belongings insured?', a: 'Yes, we have comprehensive Goods in Transit and Public Liability insurance.' },
  { q: 'Do I need to empty chest of drawers?', a: 'Light items like clothing can remain, but heavy items or breakables must be removed and packed separately.' }
];

export default function HouseRemovalsPage() {
  return (
    <main className="min-h-screen pb-16">
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">House & Flat Removals</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Stress-free moving for homes of all sizes across London and beyond.
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

            <h2 className="text-3xl font-bold text-navy-800 mb-6">Protection Equipment</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-12">
              <div className="flex items-start mb-4">
                <Shield className="text-brand-500 mr-3 shrink-0" size={24} />
                <p className="text-gray-700">We use professional-grade equipment to ensure your items arrive safely, including removal blankets, padded wraps, mattress protection, sofa covers, export wrapping, and securing straps.</p>
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
              <h3 className="text-2xl font-bold text-navy-800 mb-6 text-center">Get a Quote for Your Move</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
