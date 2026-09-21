"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, PhoneCall, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const callbackSchema = z.object({
  name: z.string().min(2, "Name required"),
  phone: z.string().min(10, "Valid phone required").max(15),
});

type CallbackData = z.infer<typeof callbackSchema>;

export function CallbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<CallbackData>({
    resolver: zodResolver(callbackSchema),
  });

  const onSubmit = async (data: CallbackData) => {
    setIsSubmitting(true);
    try {
      // await fetch('/api/callback', { method: 'POST', body: JSON.stringify(data) });
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#fff9d1] p-6 rounded-2xl border border-green-100 flex flex-col items-center justify-center text-center h-full min-h-[250px]">
        <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mb-3" />
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Request Received!</h3>
        <p className="text-green-800">We'll call you back shortly.</p>
      </div>
    );
  }

  const inputClass = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none transition-all";

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
          <PhoneCall className="w-5 h-5 text-[#D4AF37]" />
        </div>
        <h3 className="text-xl font-semibold text-[#1a1a1a]">Request a Callback</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input 
            type="text" 
            {...register("name")} 
            placeholder="Your Name" 
            className={inputClass} 
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        
        <div>
          <input 
            type="tel" 
            {...register("phone")} 
            placeholder="Phone Number" 
            className={inputClass} 
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg font-semibold text-white bg-[#1a1a1a] hover:bg-[#0a0a0a] transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {isSubmitting ? "Sending..." : "Request Callback"}
        </button>
      </form>
    </div>
  );
}

export default CallbackForm;
