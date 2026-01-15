"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full relative z-50 bg-white shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-between items-center gap-4">

                    {/* Left: Logo & Mobile Toggle Container */}
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu Button - shows on small screens */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-600 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition"
                                aria-label="Toggle menu"
                            >
                                <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                            </button>
                        </div>

                        {/* Logo Section */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center gap-4 group">
                                <div className="relative h-16 lg:h-20 w-auto group-hover:opacity-90 transition-opacity">
                                    <img
                                        src="/smart_kitchen_logo.png"
                                        alt="Smart Kitchen & Furnitures Logo"
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Center: Navigation Links (Desktop) */}
                    <nav className="hidden lg:flex items-center justify-center gap-8">
                        <Link href="/" className="text-gray-700 hover:text-brand-brown font-bold text-sm uppercase tracking-widest hover:border-b-2 hover:border-brand-brown transition-all duration-300 py-1">Home</Link>
                        <Link href="/about" className="text-gray-700 hover:text-brand-brown font-bold text-sm uppercase tracking-widest hover:border-b-2 hover:border-brand-brown transition-all duration-300 py-1">About Us</Link>
                        <Link href="/services" className="text-gray-700 hover:text-brand-brown font-bold text-sm uppercase tracking-widest hover:border-b-2 hover:border-brand-brown transition-all duration-300 py-1">Services</Link>
                        <Link href="/contact" className="text-gray-700 hover:text-brand-brown font-bold text-sm uppercase tracking-widest hover:border-b-2 hover:border-brand-brown transition-all duration-300 py-1">Contact Us</Link>
                    </nav>

                    {/* Right: Contact Section (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Phone */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="bg-brand-brown/10 w-10 h-10 flex items-center justify-center text-brand-brown rounded-full shadow-sm group-hover:bg-brand-brown group-hover:text-white transition-all duration-300">
                                <i className="fa-solid fa-phone-volume text-sm"></i>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Call Us</span>
                                <a href="tel:9999999999" className="text-sm font-bold text-gray-900 group-hover:text-brand-brown transition-colors">
                                    9999999999
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="bg-brand-brown/10 w-10 h-10 flex items-center justify-center text-brand-brown rounded-full shadow-sm group-hover:bg-brand-brown group-hover:text-white transition-all duration-300">
                                <i className="fa-solid fa-envelope-open-text text-sm"></i>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">E-Mail Us</span>
                                <a href="mailto:info@smartkitchenandfurnitures.in" className="text-sm font-bold text-gray-900 group-hover:text-brand-brown transition-colors">
                                    info@smartkitchenandfurnitures.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100 absolute w-full z-40 shadow-xl`}>
                <div className="flex flex-col py-2">
                    <Link href="/" className="text-gray-700 hover:text-brand-brown hover:bg-gray-50 px-6 py-4 border-b border-gray-100 transition-colors font-bold uppercase tracking-wider">Home</Link>
                    <Link href="/about" className="text-gray-700 hover:text-brand-brown hover:bg-gray-50 px-6 py-4 border-b border-gray-100 transition-colors font-bold uppercase tracking-wider">About Us</Link>
                    <Link href="/services" className="text-gray-700 hover:text-brand-brown hover:bg-gray-50 px-6 py-4 border-b border-gray-100 transition-colors font-bold uppercase tracking-wider">Services</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-brand-brown hover:bg-gray-50 px-6 py-4 border-b border-gray-100 transition-colors font-bold uppercase tracking-wider">Contact Us</Link>

                    {/* Mobile Contact Info */}
                    <div className="p-4 flex flex-col gap-4 bg-gray-50">
                        <div className="flex items-center gap-3">
                            <div className="bg-brand-brown/10 w-8 h-8 flex items-center justify-center text-brand-brown rounded-full">
                                <i className="fa-solid fa-phone-volume text-sm"></i>
                            </div>
                            <a href="tel:9999999999" className="text-sm font-bold text-gray-900">9999999999</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-brand-brown/10 w-8 h-8 flex items-center justify-center text-brand-brown rounded-full">
                                <i className="fa-solid fa-envelope-open-text text-sm"></i>
                            </div>
                            <a href="mailto:info@smartkitchenandfurnitures.in" className="text-sm font-bold text-gray-900 break-all">info@smartkitchenandfurnitures.in</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
