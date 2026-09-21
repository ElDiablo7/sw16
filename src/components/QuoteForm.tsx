"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { StepIndicator } from "./StepIndicator";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  moveType: z.string().min(1, "Please select a move type"),
  fromPostcode: z.string().min(2, "Postcode is required").max(10),
  toPostcode: z.string().min(2, "Postcode is required").max(10),
  propertySize: z.string().min(1, "Please select property size"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  flexibility: z.string().min(1, "Please select flexibility"),
  additionalInfo: z.string().optional(),
  floorFrom: z.string().min(1, "Please select floor access from"),
  floorTo: z.string().min(1, "Please select floor access to"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required").max(15),
  email: z.string().email("Valid email required"),
  referralSource: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const inputClass = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none transition-all";
const labelClass = "block text-sm font-medium text-gray-700 mb-2";
const errorClass = "text-red-500 text-xs mt-1";

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  const { register, handleSubmit, formState: { errors }, trigger } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    mode: "onChange",
    defaultValues: {
      moveType: "",
      propertySize: "",
      flexibility: "",
      floorFrom: "",
      floorTo: "",
      referralSource: ""
    }
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];
    if (step === 1) fieldsToValidate = ["moveType", "fromPostcode", "toPostcode", "propertySize"];
    if (step === 2) fieldsToValidate = ["preferredDate", "flexibility", "floorFrom", "floorTo"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setRefNumber(`SW16-${Math.floor(Math.random() * 10000)}`);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-[#fff9d1] rounded-2xl p-8 md:p-12 text-center border border-green-100 shadow-sm"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
        </div>
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Quote Requested Successfully!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for choosing SW16 Moves. We'll be in touch shortly with your personalized quote.
        </p>
        <div className="bg-white p-4 rounded-lg inline-block border border-gray-200">
          <span className="text-sm text-gray-500 uppercase tracking-wide">Your Reference Number</span>
          <p className="text-2xl font-bold text-[#D4AF37] mt-1">{refNumber}</p>
        </div>
      </motion.div>
    );
  }

  // Handle client-side date hydration
  const today = typeof window !== 'undefined' ? new Date().toISOString().split("T")[0] : "";

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      <StepIndicator currentStep={step} totalSteps={3} labels={["Move Details", "When & What", "Your Details"]} />
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Move Type</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["House/Flat Removal", "Single Item", "Long Distance", "Furniture Only"].map((type) => (
                      <label key={type} className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 has-[:checked]:border-[#D4AF37] has-[:checked]:bg-[#fff9d1] transition-colors">
                        <input type="radio" value={type} {...register("moveType")} className="w-4 h-4 text-[#D4AF37] focus:ring-[#D4AF37]" />
                        <span className="ml-3 font-medium text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                  {errors.moveType && <p className={errorClass}>{errors.moveType.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>From Postcode</label>
                    <input type="text" {...register("fromPostcode")} className={inputClass} placeholder="e.g. SW16 4UF" />
                    {errors.fromPostcode && <p className={errorClass}>{errors.fromPostcode.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>To Postcode</label>
                    <input type="text" {...register("toPostcode")} className={inputClass} placeholder="e.g. CR4 2BB" />
                    {errors.toPostcode && <p className={errorClass}>{errors.toPostcode.message}</p>}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Property Size</label>
                  <select {...register("propertySize")} className={inputClass}>
                    <option value="">Select size...</option>
                    <option value="Studio">Studio</option>
                    <option value="1 Bed">1 Bed</option>
                    <option value="2 Bed">2 Bed</option>
                    <option value="3 Bed">3 Bed</option>
                    <option value="4+ Bed">4+ Bed</option>
                    <option value="N/A - Single Item">N/A - Single Item</option>
                  </select>
                  {errors.propertySize && <p className={errorClass}>{errors.propertySize.message}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Preferred Date</label>
                  <input type="date" min={today} {...register("preferredDate")} className={inputClass} />
                  {errors.preferredDate && <p className={errorClass}>{errors.preferredDate.message}</p>}
                </div>

                <div>
                  <label className={labelClass}>Flexibility</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Exact date", "±1 day", "±1 week", "Flexible"].map((opt) => (
                      <label key={opt} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 has-[:checked]:border-[#D4AF37] has-[:checked]:bg-[#fff9d1]">
                        <input type="radio" value={opt} {...register("flexibility")} className="w-4 h-4 text-[#D4AF37] focus:ring-[#D4AF37]" />
                        <span className="ml-2 text-sm font-medium text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                  {errors.flexibility && <p className={errorClass}>{errors.flexibility.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Floor Access (From)</label>
                    <select {...register("floorFrom")} className={inputClass}>
                      <option value="">Select...</option>
                      <option value="Ground">Ground</option>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd+">3rd+</option>
                      <option value="Lift available">Lift available</option>
                    </select>
                    {errors.floorFrom && <p className={errorClass}>{errors.floorFrom.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Floor Access (To)</label>
                    <select {...register("floorTo")} className={inputClass}>
                      <option value="">Select...</option>
                      <option value="Ground">Ground</option>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd+">3rd+</option>
                      <option value="Lift available">Lift available</option>
                    </select>
                    {errors.floorTo && <p className={errorClass}>{errors.floorTo.message}</p>}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Additional Info (Optional)</label>
                  <textarea {...register("additionalInfo")} rows={3} className={inputClass} placeholder="Any specific requirements or items?" />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text" {...register("name")} className={inputClass} placeholder="John Doe" />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>
                
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" {...register("phone")} className={inputClass} placeholder="07123 456 789" />
                  {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                </div>

                <div>
                  <label className={labelClass}>Email Address</label>
                  <input type="email" {...register("email")} className={inputClass} placeholder="john@example.com" />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div>
                  <label className={labelClass}>How did you hear about us? (Optional)</label>
                  <select {...register("referralSource")} className={inputClass}>
                    <option value="">Select...</option>
                    <option value="Google">Google</option>
                    <option value="Nextdoor">Nextdoor</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Friend/Family">Friend/Family</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between pt-6 border-t border-gray-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 rounded-full font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Back
            </button>
          ) : <div />}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-8 py-3 rounded-full font-semibold text-white bg-[#D4AF37] hover:bg-[#b28e21] transition-colors"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 rounded-full font-semibold text-white bg-[#D4AF37] hover:bg-[#b28e21] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
              {isSubmitting ? "Submitting..." : "Get Free Quote"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default QuoteForm;
