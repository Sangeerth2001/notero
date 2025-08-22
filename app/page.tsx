import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      {/* Main Content Card */}
      <div className="w-full max-w-lg bg-white border border-gray-200 shadow-lg rounded-lg">
        <div className="p-8 text-center">
          {/* Logo/Brand */}
          <h1 className="text-4xl font-bold mb-3 text-black tracking-tight">
            Notero
          </h1>
          
          {/* Tagline */}
          <p className="text-gray-600 text-base mb-8 leading-relaxed">
            Capture your thoughts with elegance and simplicity
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/auth/login">
              <button className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                Start Writing
              </button>
            </Link>
            <button className="px-6 py-3 bg-white text-black font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Clean. Simple. Effective.
        </p>
      </div>
    </div>
  );
}
