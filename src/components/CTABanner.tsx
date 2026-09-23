import Link from "next/link";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTABanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div 
          className="relative rounded-3xl p-8 md:p-16 text-center text-white shadow-xl overflow-hidden"
          style={{ 
            backgroundImage: "url('/images/van-loaded.jpg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-navy-900/80 z-0"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Move?</h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Get your free, no-obligation quote in under 60 seconds
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/quote"
                className="w-full sm:w-auto px-8 py-4 bg-brand-500 text-white rounded-full font-semibold hover:bg-brand-600 transition-colors shadow-lg text-center"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:07466228506"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call 07466 228 506
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
