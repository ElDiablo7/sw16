import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col">
        <div className="w-12 h-12 bg-[#1B8751]/10 rounded-full flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 text-[#1B8751]" />
        </div>
        <h3 className="text-xl font-semibold text-[#243b53] mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <div className="flex items-center text-[#1B8751] font-medium group-hover:gap-2 transition-all duration-300 gap-1">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;
