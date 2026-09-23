import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS_NAME, PHONE_NUMBER, PHONE_HREF, EMAIL, ADDRESS } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-[#1a1a1a] text-gray-300 py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative w-40 h-16 group perspective-1000">
              <Image 
                src="/images/sw16-logo.jpg" 
                alt="SW16 Moves Logo" 
                fill 
                className="object-contain drop-shadow-[0_4px_6px_rgba(212,175,55,0.3)] transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 rounded-full"
              />
            </Link>
            <p className="text-gray-400 max-w-sm mt-4 leading-relaxed">
              London's trusted local removals company providing professional, fully insured moving services for homes and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Get a Quote', 'Gallery', 'Reviews', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#D4AF37] transition-colors">
                    {item === 'Home' ? 'Home' : item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'House Removals', href: '/services/house-removals' },
                { name: 'Single Item', href: '/services/single-item' },
                { name: 'Long Distance', href: '/services/long-distance' },
                { name: 'Furniture Transport', href: '/services/furniture-transport' }
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-[#D4AF37] transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
