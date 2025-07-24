"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [historyDropdown, setHistoryDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="shadow-md sticky top-0 z-50 backdrop-blur-sm">
      <div className="px-[10vw]">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="typographica text-xl font-bold text-green-600 dark:text-green-500">
            HoMe
          </Link>

          {/* Desktop Menu */}
          <div className="minigap hidden md:flex space-x-6 items-center">
            <Link href="/surgeoninfo" className="text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Directory</Link>
            <Link href="/timelines" className="text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Timelines</Link>
            <Link href="/days" className="text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Medical Days</Link>
            <Link href="/did-you-know" className="text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Did You Know?</Link>
            <Link href="/infographics" className="text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Infographics</Link>

            {/* History Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setHistoryDropdown(true)}
              onMouseLeave={() => setHistoryDropdown(false)}
            >
              <button className="minigap inline-flex items-center text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">
                History <ChevronDown size={16} className="ml-1" />
              </button>
              {historyDropdown && (
                <div className="minigap absolute w-40 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded shadow-lg">
                  <Link href="/history" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition-colors font-medium">All Sections</Link>
                  <div className="border-t border-neutral-200 dark:border-neutral-800"></div>
                  <Link href="/history/preclinical" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition-colors">Pre-Clinical</Link>
                  <Link href="/history/paraclinical" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition-colors">Para-Clinical</Link>
                  <Link href="/history/clinical" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition-colors">Clinical</Link>
                </div>
              )}
            </div>

            {user ? (
              <div
                className="relative group"
                onMouseEnter={() => setUserDropdown(true)}
                onMouseLeave={() => setUserDropdown(false)}
              >
                <button className="minigap inline-flex items-center text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">
                  <User size={16} className="mr-1" />
                  {user.name} <ChevronDown size={16} className="ml-1" />
                </button>
                {userDropdown && (
                  <div className="minigap absolute right-0 w-48 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded shadow-lg">
                    <div className="px-4 py-2 border-b border-neutral-200 dark:border-neutral-800">
                      <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{user.name}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">{user.email}</div>
                    </div>
                    <Link href="/profile" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition-colors">Profile</Link>
                    <Link href="/create-blog" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition-colors">Create Blog</Link>
                    {user.role === 'ADMIN' && (
                      <Link href="/admin" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900 transition-colors text-blue-600 dark:text-blue-400">Admin Dashboard</Link>
                    )}
                    <button 
                      onClick={logout}
                      className="w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900 text-red-600 dark:text-red-400 transition-colors flex items-center"
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="minigap ml-4 px-3 py-1 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded transition-colors">Login</Link>
                <Link href="/signup" className="minigap px-3 py-1 border border-green-600 dark:border-green-700 text-green-600 dark:text-green-500 hover:bg-green-600 hover:text-white dark:hover:bg-green-700 rounded transition-colors">Sign Up</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="minigap md:hidden bg-white dark:bg-neutral-900 shadow-md border-t border-neutral-200 dark:border-neutral-800">
          <Link href="/directory" className="block px-4 py-2 text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Directory</Link>
          <Link href="/timelines" className="block px-4 py-2 text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Timelines</Link>
          <Link href="/days" className="block px-4 py-2 text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Medical Days</Link>
          <Link href="/did-you-know" className="block px-4 py-2 text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Did You Know?</Link>
          <Link href="/infographics" className="block px-4 py-2 text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Infographics</Link>
          <div className="px-4 py-2">
            <div className="minigap font-semibold text-neutral-800 dark:text-neutral-100">History</div>
            <Link href="/history" className="block pl-4 py-1 hover:text-green-600 dark:hover:text-green-500 transition-colors font-medium">All Sections</Link>
            <Link href="/history/preclinical" className="block pl-4 py-1 hover:text-green-600 dark:hover:text-green-500 transition-colors">Pre-Clinical</Link>
            <Link href="/history/paraclinical" className="block pl-4 py-1 hover:text-green-600 dark:hover:text-green-500 transition-colors">Para-Clinical</Link>
            <Link href="/history/clinical" className="block pl-4 py-1 hover:text-green-600 dark:hover:text-green-500 transition-colors">Clinical</Link>
          </div>
          {user ? (
            <>
              <div className="px-4 py-2 border-b border-neutral-200 dark:border-neutral-800">
                <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{user.name}</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{user.email}</div>
              </div>
              <Link href="/profile" className="block px-4 py-2 text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Profile</Link>
              <Link href="/create-blog" className="block px-4 py-2 text-neutral-800 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-500 transition-colors">Create Blog</Link>
              {user.role === 'ADMIN' && (
                <Link href="/admin" className="block px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">Admin Dashboard</Link>
              )}
              <button 
                onClick={logout}
                className="w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:underline flex items-center"
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block px-4 py-2 text-green-600 dark:text-green-500 font-semibold hover:underline">Login</Link>
              <Link href="/signup" className="block px-4 py-2 text-green-600 dark:text-green-500 font-semibold hover:underline">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}