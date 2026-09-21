import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Areas We Cover | SW16 Moves',
  description: 'Based in Streatham, we provide professional removal services across London and nationwide.',
};

const areas = [
  'streatham', 'mitcham', 'brixton', 'tooting', 'croydon', 'norbury',
  'balham', 'clapham', 'dulwich', 'crystal-palace', 'thornton-heath', 'wimbledon'
];

function formatAreaName(slug: string) {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default function AreasPage() {
  return (
    <main className="min-h-screen pb-16">
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Areas We Cover</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Based in Streatham, serving all of London and nationwide.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {areas.map((area) => {
            const name = formatAreaName(area);
            return (
              <Link 
                key={area} 
                href={`/areas/${area}`}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-500 mb-4 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <h2 className="font-bold text-navy-800 mb-2">{name}</h2>
                <p className="text-sm text-gray-600 mb-4">Removals in {name}</p>
                <div className="text-brand-600 text-sm font-semibold flex items-center mt-auto">
                  View Area <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="bg-gray-100 rounded-2xl p-8 text-center border border-gray-200">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Don't see your area?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            While we frequently serve South London, we operate across the entire Greater London area and provide long-distance removals nationwide.
          </p>
          <Link href="/contact" className="inline-block bg-brand-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-brand-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
