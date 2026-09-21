import React from 'react';
import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Gallery | SW16 Moves',
  description: 'See our professional removals team in action. Quality equipment and careful handling.',
};

// Placeholder component if not in components/
const ImageGallery = () => {
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    category: i % 3 === 0 ? 'Van & Equipment' : i % 3 === 1 ? 'Moves in Progress' : 'Happy Customers',
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img) => (
        <div key={img.id} className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-gray-200 animate-pulse" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-white font-semibold">{img.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work in Action</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Take a look at how we protect and transport your belongings.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <ImageGallery />
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
