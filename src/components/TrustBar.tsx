import { Shield, Star, CreditCard, Wrench, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function TrustBar() {
  const items = [
    { icon: Shield, text: "Fully Insured" },
    { icon: Star, text: "5★ Service" },
    { icon: CreditCard, text: "Card Payments" },
    { icon: Wrench, text: "Pro Equipment" },
    { icon: MapPin, text: "Nationwide" },
  ];

  return (
    <div className="w-full bg-gray-50 py-4 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-row overflow-x-auto gap-6 md:justify-between items-center no-scrollbar">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2 whitespace-nowrap min-w-max text-gray-600">
                <Icon className="w-5 h-5 text-[#1B8751]" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrustBar;
