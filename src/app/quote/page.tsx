import React from 'react';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import { ShieldCheck, Star, ThumbsUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Get a Free Quote | SW16 Moves',
  description: 'Get a free, no-obligation quote for your removals in London.',
};

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Fill in the details below and we&apos;ll get back to you with a competitive price for your move.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-12">
            <QuoteForm />
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-4 text-brand-500">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-semibold text-navy-800 mb-2">Fully Insured</h3>
              <p className="text-gray-600 text-sm">Comprehensive cover for your peace of mind</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-4 text-brand-500">
                <Star size={32} />
              </div>
              <h3 className="font-semibold text-navy-800 mb-2">5-Star Rated</h3>
              <p className="text-gray-600 text-sm">Trusted by hundreds of happy customers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-4 text-brand-500">
                <ThumbsUp size={32} />
              </div>
              <h3 className="font-semibold text-navy-800 mb-2">Professional Team</h3>
              <p className="text-gray-600 text-sm">Experienced, friendly and reliable staff</p>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Or call us directly</h2>
            <p className="text-gray-600 mb-6">Need an urgent quote? Speak to our friendly team now.</p>
            <a 
              href="tel:07466228506" 
              className={cn(
                "inline-flex items-center justify-center px-8 py-4 text-lg font-semibold",
                "bg-navy-800 text-white rounded-lg hover:bg-navy-700 transition-colors"
              )}
            >
              07466 228 506
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
