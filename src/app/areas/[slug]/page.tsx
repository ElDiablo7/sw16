import React from 'react';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { notFound } from 'next/navigation';

const areasData: Record<string, { name: string, description: string }> = {
  'streatham': { name: 'Streatham', description: 'Expert local removals in Streatham SW16. Fully insured, professional equipment, competitive prices.' },
  'mitcham': { name: 'Mitcham', description: 'Professional removals serving Mitcham CR4. House moves, single items, and long distance.' },
  'brixton': { name: 'Brixton', description: 'Reliable moving services in Brixton SW2. Your trusted local removals company.' },
  'tooting': { name: 'Tooting', description: 'Top-rated removals in Tooting SW17. Careful, efficient, and affordable.' },
  'croydon': { name: 'Croydon', description: 'Trusted removals throughout Croydon. Serving all CR postcodes.' },
  'norbury': { name: 'Norbury', description: 'Local moving experts in Norbury SW16. Just around the corner from our base.' },
  'balham': { name: 'Balham', description: 'Professional house removals in Balham SW12. Fast, friendly service.' },
  'clapham': { name: 'Clapham', description: 'Careful and efficient movers in Clapham. SW4 and surrounding areas.' },
  'dulwich': { name: 'Dulwich', description: 'Specialist removals for Dulwich properties. Handling period homes with care.' },
  'crystal-palace': { name: 'Crystal Palace', description: 'Reliable movers covering Crystal Palace SE19 and SE20.' },
  'thornton-heath': { name: 'Thornton Heath', description: 'Affordable moving services in Thornton Heath CR7.' },
  'wimbledon': { name: 'Wimbledon', description: 'Premium removals in Wimbledon SW19. Professional service guaranteed.' }
};

export function generateStaticParams() {
  return Object.keys(areasData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = areasData[slug];
  
  if (!area) {
    return { title: 'Area Not Found' };
  }

  return {
    title: `Removals in ${area.name} | SW16 Moves`,
    description: area.description,
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areasData[slug];

  if (!area) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Removals in {area.name}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            {area.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-6">Your Local {area.name} Movers</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Looking for reliable removals in {area.name}? SW16 Moves provides professional, fully insured moving services for homes and businesses. As local experts, we know the roads, parking restrictions, and property types in {area.name}, ensuring a smooth and stress-free move.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use professional removals blankets, padded wraps, mattress and sofa protection, export wrap and securing equipment to make sure all your belongings arrive safely. Fully insured with card and phone payments available.
              </p>
              
              <h3 className="text-2xl font-bold text-navy-800 mb-4 mt-8">Our Services in {area.name}</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-brand-500 mr-3" /> House & Flat Removals
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-brand-500 mr-3" /> Single Item Collections
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-brand-500 mr-3" /> Furniture Transport
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-brand-500 mr-3" /> Long Distance & Nationwide Moves
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-brand-500 mr-3" /> Furniture Dismantling & Reassembly
                </li>
              </ul>

              <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                <h4 className="font-semibold text-navy-800 mb-2">Why Choose SW16 Moves?</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Fully insured for your peace of mind</li>
                  <li>✓ Professional protection equipment</li>
                  <li>✓ Competitive, transparent pricing</li>
                  <li>✓ Card and phone payments accepted</li>
                  <li>✓ Friendly, reliable team</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-navy-800 mb-6 text-center">Get a Free Quote</h3>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
