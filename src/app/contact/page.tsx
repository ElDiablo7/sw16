import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | SW16 Moves',
  description: 'Get in touch with SW16 Moves for your removal needs in London. Open Mon-Sun 7am-9pm.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-16">
      <section className="bg-navy-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            We're here to help with all your moving needs. Get in touch today.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Send us a message</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="text-brand-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy-800">Address</h3>
                  <p className="text-gray-600">12 Lyndhurst Avenue<br />London<br />SW16 4UF</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-brand-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy-800">Phone</h3>
                  <p className="text-gray-600"><a href="tel:07466228506" className="hover:text-brand-600 transition-colors">07466 228 506</a></p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-brand-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy-800">Email</h3>
                  <p className="text-gray-600"><a href="mailto:info@sw16moves.co.uk" className="hover:text-brand-600 transition-colors">info@sw16moves.co.uk</a></p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-brand-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy-800">Operating Hours</h3>
                  <p className="text-gray-600">Mon-Sun: 7am - 9pm</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center border border-gray-300">
              <span className="text-gray-500 font-medium">Google Maps Embed Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
