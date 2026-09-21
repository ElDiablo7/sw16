import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, Truck, Package, MapPin } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Our Services | SW16 Moves',
  description: 'Professional removals services in London, including house moves, single item collection, and long distance transport.',
};

const services = [
  {
    title: 'House & Flat Removals',
    description: 'Comprehensive moving services for homes of all sizes. From packing to secure transport and unloading, we handle everything with care.',
    icon: Home,
    href: '/services/house-removals',
    features: ['Full house moves', 'Flat & apartment specialists', 'Packing services available', 'Furniture dismantling']
  },
  {
    title: 'Single Item Collections',
    description: 'Quick and reliable transport for individual items. Perfect for eBay purchases, marketplace finds, or moving a single piece of furniture.',
    icon: Package,
    href: '/services/single-item',
    features: ['eBay & marketplace collections', 'Store pickups', 'Same day service (subject to availability)', 'Safe handling']
  },
  {
    title: 'Long Distance Moves',
    description: 'Moving out of London? We offer nationwide coverage with dedicated vehicles to ensure your belongings arrive safely at your new home.',
    icon: MapPin,
    href: '/services/long-distance',
    features: ['Nationwide coverage', 'Dedicated vehicle', 'Route planning', 'Overnight options']
  },
  {
    title: 'Furniture Transport',
    description: 'Specialised transport for large, bulky, or delicate furniture. We use professional equipment to protect your valuable items in transit.',
    icon: Truck,
    href: '/services/furniture-transport',
    features: ['Sofa & mattress protection', 'Export wrapping', 'Securing straps', 'Professional blankets']
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Professional, reliable, and affordable removal services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={service.href} 
                  href={service.href}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="w-16 h-16 bg-brand-50 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-800 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-brand-600 font-semibold mt-auto group-hover:text-brand-500 transition-colors">
                    Learn more <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
