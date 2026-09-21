import Link from 'next/link';
import { Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h2 className="text-9xl font-black text-brand-100 mb-4">404</h2>
        <h3 className="text-3xl font-bold text-navy-800 mb-4">Page Not Found</h3>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link 
          href="/"
          className={cn(
            "inline-flex items-center px-6 py-3 bg-brand-500 text-white rounded-lg font-semibold",
            "hover:bg-brand-600 transition-colors"
          )}
        >
          <Home className="mr-2" size={20} />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
