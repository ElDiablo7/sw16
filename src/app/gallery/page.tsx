import React from 'react';
import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Gallery | SW16 Moves',
  description: 'See our professional removals team in action. Quality equipment and careful handling.',
};

import Image from "next/image";

// Real gallery images
const ImageGallery = () => {
  const images = [
    { id: 1, src: "/images/van-loaded.jpg", category: "Van & Equipment" },
    { id: 2, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", category: "Equipment" },
    { id: 3, src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80", category: "Moves in Progress" },
    { id: 4, src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80", category: "Moves in Progress" },
    { id: 5, src: "/images/van-side.jpg", category: "Van & Equipment" },
    { id: 6, src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80", category: "Moves in Progress" },
    { id: 7, src: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80", category: "Moves in Progress" },
    { id: 8, src: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=800&q=80", category: "Equipment" },
    { id: 9, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", category: "Happy Customers" },
    { id: 10, src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80", category: "Moves in Progress" },
    { id: 11, src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80", category: "Moves in Progress" },
    { id: 12, src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80", category: "Happy Customers" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img) => (
        <div key={img.id} className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden group cursor-pointer">
          <Image 
            src={img.src}
            alt={img.category}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-white font-semibold drop-shadow-md">{img.category}</span>
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
