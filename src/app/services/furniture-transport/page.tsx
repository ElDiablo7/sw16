import React from 'react';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import { CheckCircle2, PenTool } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Furniture Transport & Assembly | SW16 Moves',
  description: 'Specialist furniture transport, dismantling and reassembly service in London.',
};

const included = [
  'Careful dismantling of beds, wardrobes, and large tables',
  'Export wrapping for delicate finishes',
  'Professional reassembly at destination',
  'Safe transport using padded blankets and straps',
  'Sofa and mattress covers included',
  'Fully insured service'
];

const faqs = [
  { q: 'Do you dismantle IKEA furniture?', a: 'Yes, we are highly experienced in dismantling and reassembling flat-pack furniture like IKEA Pax wardrobes.' },
  { q: 'Is there an extra charge for dismantling?', a: 'Basic dismantling (e.g. taking legs off a table) is often included, but complex items like large wardrobes may incur a small additional fee for time.' },
  { q: 'What happens if parts are lost?', a: 'We carefully bag and tape all screws and fittings to the main piece of furniture to ensure nothing is lost during transit.' },
  { q: 'Can you move upright pianos?', a: 'Please contact us directly to discuss piano moves, as this depends on access and the type of piano.' }
];

export default function FurnitureTransportPage() {
  return (
    <main className="min-h-screen pb-16">
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Furniture Transport</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Specialised transport, dismantling, and reassembly for your large and delicate items.
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

            <h2 className="text-3xl font-bold text-navy-800 mb-6">Dismantling & Reassembly</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-12">
              <div className="flex items-start mb-4">
                <PenTool className="text-brand-500 mr-3 shrink-0" size={24} />
                <p className="text-gray-700">Don't struggle with allen keys. Our team carries professional tools to carefully dismantle oversized furniture, transport it safely, and expertly reassemble it in your new room of choice.</p>
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
              <h3 className="text-2xl font-bold text-navy-800 mb-6 text-center">Get a Transport Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
