import React from 'react';
import Link from 'next/link';

const SideNav: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white">
      {/* Application Title */}
      <div className="p-4 text-center text-2xl font-bold border-b border-gray-700">
        OpinionApp
      </div>
      {/* Navigation Links */}
      <nav className="mt-4">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link href="/dashboard/home">
              Home
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link href="/dashboard/collect">
              Collect Opinions
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link href="/dashboard/analysis">
              Analysis
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link href="/dashboard/settings">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
