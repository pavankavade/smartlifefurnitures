"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 glass-panel border-b border-white/20" id="navbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-amber-800 transition">
                                <i className="fa-solid fa-couch text-lg"></i>
                            </div>
                            <span className="font-serif text-2xl font-bold tracking-wide text-gray-900">Smart Life <span className="text-amber-900">Furnitures</span></span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        <Link href="/" className="text-gray-600 hover:text-amber-900 font-medium transition text-sm tracking-widest uppercase">Home</Link>
                        <Link href="/services" className="text-gray-600 hover:text-amber-900 font-medium transition text-sm tracking-widest uppercase">Services</Link>
                        <Link href="/contact" className="text-gray-600 hover:text-amber-900 font-medium transition text-sm tracking-widest uppercase">Contact</Link>
                        <Link href="/contact" className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-amber-900 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 text-sm font-semibold tracking-wide">
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 hover:text-amber-900 focus:outline-none p-2 transition"
                        >
                            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full`} id="mobile-menu">
                <div className="px-6 py-6 space-y-4 shadow-lg">
                    <Link href="/" className="block text-lg font-medium text-gray-900 hover:text-amber-900">Home</Link>
                    <Link href="/services" className="block text-lg font-medium text-gray-600 hover:text-amber-900">Services</Link>
                    <Link href="/contact" className="block text-lg font-medium text-gray-600 hover:text-amber-900">Contact</Link>
                    <div className="pt-4">
                        <Link href="/contact" className="block w-full text-center bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-amber-900 transition shadow-lg">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
