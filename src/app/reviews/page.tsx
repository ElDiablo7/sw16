import React from 'react';
import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Reviews | SW16 Moves',
  description: 'Read what our customers have to say about our professional removal services in London.',
};

// TestimonialCard placeholder implementation since we don't have the file
const TestimonialCard = ({ name, location, text, date }: { name: string, location: string, text: string, date: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
    </div>
    <p className="text-gray-700 italic mb-6 flex-grow">"{text}"</p>
    <div className="mt-auto">
      <p className="font-semibold text-navy-800">{name}</p>
      <p className="text-sm text-gray-500">{location} • {date}</p>
    </div>
  </div>
);

const reviews = [
  { name: 'Sarah Jenkins', location: 'Moved from Streatham to Balham', text: 'Absolutely fantastic service. The team were punctual, polite, and handled everything with care. Made a stressful day so much easier!', date: 'Oct 2023' },
  { name: 'David T.', location: 'Moved within Croydon', text: 'Highly recommend SW16 Moves. Very competitive price and the guys worked non-stop. They even dismantled and rebuilt our tricky IKEA wardrobe perfectly.', date: 'Sep 2023' },
  { name: 'Emma Wilson', location: 'London to Manchester', text: 'Used them for a long distance move. Great communication from start to finish. Everything arrived exactly as it left.', date: 'Aug 2023' },
  { name: 'James & Chloe', location: 'Moved to Tooting', text: 'The team was incredibly careful with our fragile items. They wrapped the sofas and mattresses which was a great touch. Very professional.', date: 'Jul 2023' },
  { name: 'Michael R.', location: 'Single Item Collection', text: 'Needed a heavy oak dining table picked up from eBay. They sorted it out same-day and carried it right into my dining room. Top lads.', date: 'Jun 2023' },
  { name: 'Anita Patel', location: 'Moved from Crystal Palace', text: 'From getting the quote to the final box being unloaded, the service was flawless. Very honest and transparent pricing.', date: 'May 2023' }
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Don't just take our word for it. Read reviews from our recent moves.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <div className="text-5xl font-bold text-navy-800 mb-2">4.9/5</div>
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <p className="text-gray-600">Based on 150+ verified reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, i) => (
              <TestimonialCard key={i} {...review} />
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Have you used our services recently?</p>
            <a href="#leave-review" className="text-brand-600 font-semibold hover:text-brand-700 underline">Leave us a review on Google</a>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
