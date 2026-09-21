"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE_HREF } from "@/lib/utils";

export default function MobileFloatingCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 pb-safe">
      <div className="flex items-stretch p-3 gap-3 h-[72px]">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 bg-[#243b53] hover:bg-[#243b53]/90 text-white rounded-lg font-bold transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <Link
          href="/quote"
          className="flex-1 flex items-center justify-center bg-[#1B8751] hover:bg-[#1B8751]/90 text-white rounded-lg font-bold transition-colors"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
