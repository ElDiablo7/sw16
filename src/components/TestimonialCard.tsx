import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export function TestimonialCard({ name, location, rating, text, date }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full relative">
      <Quote className="w-10 h-10 text-[#D4AF37]/10 absolute top-6 right-6" />
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={cn("w-5 h-5", i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200")} 
          />
        ))}
      </div>
      <blockquote className="text-gray-700 italic flex-grow mb-6 text-lg">
        "{text}"
      </blockquote>
      <div className="flex flex-col mt-auto">
        <span className="font-semibold text-[#1a1a1a]">{name}</span>
        <div className="flex items-center justify-between mt-1 text-sm text-gray-500">
          <span>{location}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
