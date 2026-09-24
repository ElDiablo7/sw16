"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Shield, 
  Wrench, 
  PoundSterling, 
  CreditCard, 
  Map, 
  Heart,
  Truck,
  Package,
  MapPin,
  Armchair,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import TestimonialCard from "@/components/TestimonialCard";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const areas = [
  "Streatham", "Mitcham", "Brixton", "Tooting", 
  "Croydon", "Norbury", "Balham", "Clapham", 
  "Dulwich", "Crystal Palace", "Thornton Heath", "Wimbledon"
];

const reasons = [
  { icon: Shield, title: "Fully Insured", description: "Comprehensive coverage for your peace of mind." },
  { icon: Wrench, title: "Professional Equipment", description: "Top-grade tools and materials used." },
  { icon: PoundSterling, title: "Competitive Prices", description: "Affordable rates with no hidden fees." },
  { icon: CreditCard, title: "Card Payments Accepted", description: "Secure and easy payment options." },
  { icon: Map, title: "Nationwide Coverage", description: "We move you anywhere in the UK." },
  { icon: Heart, title: "Friendly & Reliable", description: "A local team you can trust." }
];

const protectionItems = [
  { name: "Professional Removals Blankets", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { name: "Padded Wraps", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { name: "Mattress Protection", image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { name: "Sofa Protection", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { name: "Export Wrap", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { name: "Securing Straps", image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" }
];

const testimonials = [
  { name: "Sarah M.", text: "Absolutely fantastic service. The team was punctual, polite, and handled everything with care.", rating: 5, date: "October 2023" },
  { name: "James D.", text: "Moved my 3-bed house without a single scratch. Highly recommend SW16 Moves!", rating: 5, date: "September 2023" },
  { name: "Emily R.", text: "Great communication and very competitive pricing. Made moving day a breeze.", rating: 5, date: "August 2023" }
];

export default function HomeContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section 
        className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-white"
        style={{ 
          backgroundImage: "url('/images/van-banner.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        {/* Dark gradient overlay to ensure text readability while keeping image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/70 to-navy-900/30 z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-brand-500 shadow-2xl">
                  <Image 
                    src="/images/hero-logo.jpg" 
                    alt="SW16 Moves Hero Logo" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              >
                London's Most Trusted Local Removals
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-200 mb-8 font-medium drop-shadow-md"
              >
                House moves, single items, nationwide coverage — fully insured & professional service at competitive prices.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="/quote" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/30"
                >
                  Get Free Quote
                </Link>
                <a 
                  href="tel:+447466228506" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 07466 228 506
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl relative z-10 text-navy-900 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Quick Estimate</h3>
                  <div className="bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-sm font-medium">Fast & Free</div>
                </div>
                <div className="space-y-4">
                  <div className="h-12 bg-gray-100 rounded-lg w-full flex items-center px-4 text-gray-400">Moving From (Postcode)</div>
                  <div className="h-12 bg-gray-100 rounded-lg w-full flex items-center px-4 text-gray-400">Moving To (Postcode)</div>
                  <div className="h-12 bg-gray-100 rounded-lg w-full flex items-center px-4 text-gray-400">Property Size</div>
                  <button className="w-full bg-navy-900 text-white py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors">
                    Check Availability
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-brand-500" /> Fully Insured</span>
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-brand-500" /> 5-Star Rated</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TrustBar */}
      <TrustBar />

      {/* 3. Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Professional removals tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              href="/services/house-removals"
              icon={Truck}
              title="House & Flat Removals"
              description="Complete house and flat moving service handled with utmost care."
            />
            <ServiceCard 
              href="/services/single-item"
              icon={Package}
              title="Single Item Collections"
              description="Need just one item moved? We offer fast and affordable transport."
            />
            <ServiceCard 
              href="/services/long-distance"
              icon={MapPin}
              title="Long Distance Moves"
              description="Nationwide coverage to get you anywhere in the UK safely."
            />
            <ServiceCard 
              href="/services/furniture-transport"
              icon={Armchair}
              title="Furniture Transport"
              description="Safe furniture dismantling, packing, and reassembly."
            />
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Three simple steps to a stress-free move</p>
          </div>
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-100 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-brand-50 border-4 border-white shadow-lg flex items-center justify-center text-3xl font-bold text-brand-600 mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Get Your Quote</h3>
                <p className="text-gray-600">Tell us where you're moving from and to. We'll give you a competitive price within hours.</p>
              </motion.div>
              
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-brand-50 border-4 border-white shadow-lg flex items-center justify-center text-3xl font-bold text-brand-600 mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">We Plan Your Move</h3>
                <p className="text-gray-600">Our team confirms the details, timing, and any special requirements for your move.</p>
              </motion.div>
              
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-brand-50 border-4 border-white shadow-lg flex items-center justify-center text-3xl font-bold text-brand-600 mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Relax, We Move You</h3>
                <p className="text-gray-600">Sit back while our professional team handles everything with care and precision.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">The SW16 Moves difference</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Protection Equipment Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Your Belongings, Fully Protected</h2>
            <p className="text-lg text-gray-600">We use professional-grade equipment for every move</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {protectionItems.map((item, index) => (
              <motion.div 
                key={index}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 overflow-hidden relative">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <h4 className="font-semibold text-navy-900 text-center">{item.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <CTABanner />

      {/* 8. Testimonials preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-600">Don't just take our word for it.</p>
            </div>
            <Link href="/reviews" className="text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-1 group">
              Read all reviews <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <TestimonialCard 
                key={i}
                name={test.name}
                location="London"
                text={test.text}
                rating={test.rating}
                date={test.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Areas preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Areas We Cover</h2>
          <p className="text-lg text-gray-600 mb-12">Based in Streatham, SW16 — serving all of London and beyond</p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {areas.map((area) => (
              <Link 
                key={area}
                href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-navy-700 hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-colors font-medium"
              >
                {area}
              </Link>
            ))}
          </div>
          
          <Link href="/areas" className="inline-flex items-center justify-center px-8 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-900 hover:text-white transition-colors">
            View All Areas
          </Link>
        </div>
      </section>

      {/* 10. Final CTA section */}
      <section 
        className="py-24 text-white text-center relative"
        style={{ 
          backgroundImage: "url('/images/van-side.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-navy-900/60 z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Ready to Move?</h2>
            <p className="text-xl text-gray-100 mb-10 drop-shadow-lg font-medium">Get your free quote in 60 seconds</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/quote" 
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/30 text-lg"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:+447466228506" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
