// src/components/layout/Navbar.tsx
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            FUTBLHER
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/matches" className="px-3 py-2 rounded-md hover:bg-purple-600">
                Matches
              </Link>
              <Link href="/teams" className="px-3 py-2 rounded-md hover:bg-purple-600">
                Teams
              </Link>
              <Link href="/news" className="px-3 py-2 rounded-md hover:bg-purple-600">
                News
              </Link>
              <Link href="/table" className="px-3 py-2 rounded-md hover:bg-purple-600">
                Table
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/profile" className="px-3 py-2 rounded-md hover:bg-purple-600">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}