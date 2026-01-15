"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 opacity-60">
                    {/* Using a high-quality placeholder if local image fails, otherwise this should be the generated image */}
                    <img
                        src="/about_hero_bg.png"
                        alt="Luxury Modern Kitchen"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/1920x1080/1a1a1a/FFF?text=Modern+Kitchen+Interior";
                        }}
                    />
                    <div className="absolute inset-0 bg-black/50"></div> {/* Dark Overlay for Text Visibility */}
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-wider drop-shadow-xl border-l-8 border-brand-green pl-6 text-left">
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mr-auto leading-relaxed drop-shadow-md font-light text-left pl-6">
                        Crafting elegance and functionality for your dream home.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-brand-brown mb-8 uppercase tracking-wide inline-block border-b-2 border-brand-green pb-2">Who We Are</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                            Welcome to <span className="font-bold text-brand-green">Smart Kitchen & Furnitures</span>. We are a premier provider of modular kitchen solutions and bespoke furniture designs. With a passion for innovation and quality, we transform ordinary spaces into extraordinary living experiences.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our journey began with a simple idea: to make luxury accessible and functional. Today, we stand proud as a trusted name in the industry, known for our uncompromising commitment to excellence and customer satisfaction.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Mission */}
                        <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-brand-green hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-20 h-20 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-200 transition-colors duration-300">
                                <i className="fa-solid fa-bullseye text-4xl text-brand-green group-hover:text-black transition-colors duration-300"></i>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To deliver innovative, durable, and aesthetically pleasing interior solutions that enhance the quality of life for our customers. We strive to set new benchmarks in design and craftsmanship.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-brand-brown hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-20 h-20 bg-brand-brown/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-200 transition-colors duration-300">
                                <i className="fa-solid fa-eye text-4xl text-brand-brown group-hover:text-black transition-colors duration-300"></i>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To be the leading choice for modern home interiors, recognized for our ethical practices, customer-centric approach, and ability to turn visions into reality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 lg:py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-brand-nav-modern mb-20 uppercase tracking-wide">Why Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="text-center group p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-24 h-24 mx-auto bg-gray-100 text-brand-nav-modern rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300 mb-8 border border-gray-200">
                                <i className="fa-solid fa-gem text-4xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3">Premium Quality</h3>
                            <p className="text-slate-800 px-4 font-medium">
                                We use only the finest materials to ensure longevity and timeless beauty in every piece we create.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="text-center group p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-24 h-24 mx-auto bg-gray-100 text-brand-nav-modern rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300 mb-8 border border-gray-200">
                                <i className="fa-solid fa-compass-drafting text-4xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3">Custom Design</h3>
                            <p className="text-slate-800 px-4 font-medium">
                                Tailored solutions that fit your space and style perfectly. Your imagination is our blueprint.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="text-center group p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-24 h-24 mx-auto bg-gray-100 text-brand-nav-modern rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300 mb-8 border border-gray-200">
                                <i className="fa-solid fa-headset text-4xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3">Expert Support</h3>
                            <p className="text-slate-800 px-4 font-medium">
                                From consultation to installation, our dedicated team is with you every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-green/10 pattern-dots"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        Contact us today for a free consultation and let's bring your dream kitchen to life.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-green text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                        <span>Get in Touch</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>
        </main>
    );
}
