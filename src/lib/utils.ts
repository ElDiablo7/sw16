import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { 
  return twMerge(clsx(inputs)); 
}

export const PHONE_NUMBER = "07466 228 506";
export const PHONE_HREF = "tel:+447466228506";
export const WHATSAPP_HREF = "https://wa.me/447466228506?text=Hi%20SW16%20Moves%2C%20I%27d%20like%20a%20quote%20please";
export const EMAIL = "info@sw16moves.co.uk";
export const ADDRESS = "12 Lyndhurst Avenue, London, SW16 4UF";
export const BUSINESS_NAME = "SW16 Moves";
