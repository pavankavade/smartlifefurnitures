"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 transition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
                <div className="flex items-center">
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <i className="fa-solid fa-couch text-amber-800 text-2xl"></i>
                        <span className="font-bold text-2xl tracking-tight text-gray-900">Smartlife<span className="text-amber-800">Furnitures</span></span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-amber-800 font-semibold hover:text-amber-900 transition text-lg">Home</Link>
                    <Link href="/products" className="text-gray-600 hover:text-amber-800 transition font-medium">Products</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-amber-800 transition font-medium">Contact</Link>
                    <Link href="/products" className="bg-amber-800 text-white px-5 py-2 rounded-full hover:bg-amber-900 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Shop Now</Link>
                </div>
                <div className="flex items-center md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-amber-800 focus:outline-none"
                    >
                        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>
            </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t`} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
                <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-amber-800 bg-amber-50">Home</Link>
                <Link href="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-amber-800 hover:bg-gray-50">Products</Link>
                <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-amber-800 hover:bg-gray-50">Contact</Link>
            </div>
        </div>
    </nav>
  );
}
