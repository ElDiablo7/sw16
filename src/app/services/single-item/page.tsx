import React from 'react';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import { CheckCircle2, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Single Item Collections London | SW16 Moves',
  description: 'Fast, reliable single item collection and delivery service in London. Perfect for eBay, Facebook Marketplace, or store collections.',
};

const included = [
  'Same-day service often available',
  'Careful loading and securing of your item',
  'Door-to-door delivery',
  'Two-man team available for heavy items',
  'Fully insured transit',
  'Assistance placing the item in your home'
];

const faqs = [
  { q: 'Can you collect from a store or warehouse?', a: 'Yes, we frequently collect from IKEA, B&Q, and other retailers.' },
  { q: 'Do you offer a two-man service?', a: 'Yes, for heavy items like sofas or washing machines we can provide a two-man team.' },
  { q: 'Can I travel in the van?', a: 'We occasionally allow one passenger, but please confirm this with us at the time of booking.' },
  { q: 'How much notice do you need?', a: 'We can often accommodate same-day requests, but 24-48 hours notice is preferred.' }
];

export default function SingleItemPage() {
  return (
    <main className="min-h-screen pb-16">
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Single Item Collections</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Fast, reliable transport for single items, eBay purchases, and store collections.
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

            <h2 className="text-3xl font-bold text-navy-800 mb-6">Perfect For</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-12">
              <div className="flex items-start mb-4">
                <Package className="text-brand-500 mr-3 shrink-0" size={24} />
                <p className="text-gray-700">Our single item service is ideal for eBay or Gumtree purchases, Facebook Marketplace finds, white goods, large TVs, garden furniture, or simply moving a single piece of furniture to a friend's house.</p>
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
              <h3 className="text-2xl font-bold text-navy-800 mb-6 text-center">Get a Delivery Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
