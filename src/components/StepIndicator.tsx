import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export function StepIndicator({ currentStep, totalSteps, labels }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      <div className="relative flex justify-between">
        {/* Connecting lines */}
        <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-200 -z-10">
          <div 
            className="h-full bg-[#D4AF37] transition-all duration-500 ease-in-out" 
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>

        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={index} className="flex flex-col items-center relative z-10 w-24">
              <div 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                  isCompleted ? "bg-[#D4AF37] text-white" : 
                  isCurrent ? "bg-white border-2 border-[#D4AF37] text-[#D4AF37] shadow-[0_0_0_4px_rgba(27,135,81,0.1)]" : 
                  "bg-gray-100 text-gray-400 border-2 border-transparent"
                )}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : <span className="font-semibold">{stepNumber}</span>}
              </div>
              <span 
                className={cn(
                  "mt-3 text-xs md:text-sm font-medium text-center",
                  isCurrent ? "text-[#D4AF37]" : isCompleted ? "text-gray-800" : "text-gray-400"
                )}
              >
                {labels[index] || `Step ${stepNumber}`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StepIndicator;
