"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  message: z.string().min(10, 'Message is required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (result.success) {
        router.push('/thank-you');
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input 
          {...register('name')} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500" 
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          {...register('email')} 
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500" 
          placeholder="Your email"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input 
          {...register('phone')} 
          type="tel"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500" 
          placeholder="Your phone number"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea 
          {...register('message')} 
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500" 
          placeholder="How can we help?"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={cn(
          "w-full py-3 px-4 bg-brand-500 text-white font-semibold rounded-md hover:bg-brand-600 transition-colors",
          isSubmitting && "opacity-70 cursor-not-allowed"
        )}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
