import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Thank You | SW16 Moves',
  description: 'Thank you for your enquiry.',
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="text-brand-500 w-12 h-12" />
          </div>
          
          <h1 className="text-4xl font-bold text-navy-800 mb-4">Thank You!</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            We've received your enquiry and will be in touch within 2 hours. Our team is reviewing your details to provide you with the most accurate information.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-xl w-full mb-8 border border-gray-100">
            <h3 className="font-semibold text-navy-800 mb-2">Need an urgent response?</h3>
            <p className="text-gray-600 mb-4">Call us directly on our priority line:</p>
            <a 
              href="tel:07466228506" 
              className="inline-flex items-center text-xl font-bold text-brand-600 hover:text-brand-700 transition-colors"
            >
              07466 228 506
            </a>
          </div>
          
          <Link 
            href="/"
            className={cn(
              "px-8 py-3 bg-navy-800 text-white rounded-lg font-semibold",
              "hover:bg-navy-700 transition-colors"
            )}
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
