import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <main className="bg-[#FDFBF7]">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 bg-[#2d2a29] text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2d2a29] to-transparent z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80"
                        alt="Workshop background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-white/80 text-xs tracking-[0.2em] mb-6 uppercase">
                            Our Expertise
                        </span>
                        <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] font-medium mb-8 leading-tight">
                            Custom Solutions, <br />
                            <span className="italic text-amber-500">Built On-Site</span>
                        </h1>
                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
                            We don't just sell furniture; we create it specifically for your space.
                            From precise measurements to final installation, our team handles everything at your location.
                        </p>
                        <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-medium tracking-widest text-sm hover:bg-amber-500 hover:text-white transition-all duration-300 uppercase shadow-lg hover:shadow-xl">
                            Request a Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Service: Kitchen Trolleys */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute -left-10 -top-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Custom Kitchen Trolley"
                                className="w-full h-auto transform hover:scale-105 transition duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-gray-100">
                            <p className="font-[family-name:var(--font-playfair)] text-xl text-gray-900 mb-2">"The Granite Island"</p>
                            <p className="text-sm text-gray-500">Popular customization for Indian kitchens.</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-sm text-amber-900 font-bold tracking-[0.2em] uppercase mb-4">Kitchen Solutions</h2>
                        <h3 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-gray-900 mb-6">Custom Kitchen Trolleys</h3>
                        <p className="text-gray-600 leading-relaxed mb-8 font-light text-lg">
                            Maximize your kitchen's potential with trolley systems designed for your specific needs. We fabricate these on-site to ensure they fit perfectly into your existing layout.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-900 flex-shrink-0">
                                    <i className="fa-solid fa-layer-group"></i>
                                </div>
                                <div>
                                    <h4 className="font-[family-name:var(--font-playfair)] text-xl text-gray-900 mb-1">Premium Materials</h4>
                                    <p className="text-sm text-gray-500">Choose from Granite tops, Solid Wood (Teak/Sal), or Marine-grade Plywood with laminate finishes.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-900 flex-shrink-0">
                                    <i className="fa-solid fa-ruler-combined"></i>
                                </div>
                                <div>
                                    <h4 className="font-[family-name:var(--font-playfair)] text-xl text-gray-900 mb-1">Custom Dimensions</h4>
                                    <p className="text-sm text-gray-500">Built to any height, width, or depth to fit tight corners or specific appliance gaps.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service: Railings */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm text-amber-900 font-bold tracking-[0.2em] uppercase mb-4">Architectural Elements</h2>
                            <h3 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-gray-900 mb-6">Modern Railings</h3>
                            <p className="text-gray-600 leading-relaxed mb-8 font-light text-lg">
                                Safety doesn't have to compromise style. Our railing systems are fabricated and installed with precision, offering durable security with an elegant finish.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <i className="fa-solid fa-check text-amber-700"></i>
                                    <span><strong>Glass Railings:</strong> Toughened glass floating on stainless steel mounts.</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <i className="fa-solid fa-check text-amber-700"></i>
                                    <span><strong>Stainless Steel:</strong> High-grade (304/316) steel for rust-free longevity.</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <i className="fa-solid fa-check text-amber-700"></i>
                                    <span><strong>Wooden Handrails:</strong> Organic warmth combined with modern frames.</span>
                                </li>
                            </ul>

                            <Link href="/contact" className="text-amber-900 hover:text-amber-700 font-medium text-sm uppercase tracking-wider border-b border-amber-900 pb-1">
                                View Railing Gallery
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-60"></div>
                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Glass Railing"
                                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Steel Railing"
                                    className="rounded-xl shadow-lg w-full h-64 object-cover mt-12"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 bg-[#2d2a29] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-white/60 text-xs tracking-[0.2em] mb-6 uppercase">
                        How We Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] mb-16">The Fabrication Process</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="group">
                            <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-amber-600 group-hover:border-amber-600 transition duration-300">
                                <span className="font-[family-name:var(--font-playfair)]">1</span>
                            </div>
                            <h3 className="text-xl font-medium mb-3">Consultation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">We visit your site to understand your requirements and take initial measurements.</p>
                        </div>
                        <div className="group">
                            <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-amber-600 group-hover:border-amber-600 transition duration-300">
                                <span className="font-[family-name:var(--font-playfair)]">2</span>
                            </div>
                            <h3 className="text-xl font-medium mb-3">Design & Quote</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">We propose designs tailored to your space and provide a transparent cost estimate.</p>
                        </div>
                        <div className="group">
                            <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-amber-600 group-hover:border-amber-600 transition duration-300">
                                <span className="font-[family-name:var(--font-playfair)]">3</span>
                            </div>
                            <h3 className="text-xl font-medium mb-3">On-Site Work</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Our skilled craftsmen begin fabrication directly at your location for a perfect fit.</p>
                        </div>
                        <div className="group">
                            <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-amber-600 group-hover:border-amber-600 transition duration-300">
                                <span className="font-[family-name:var(--font-playfair)]">4</span>
                            </div>
                            <h3 className="text-xl font-medium mb-3">Completion</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Final polishing, quality checks, and handover of your new custom furniture.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-amber-900 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-8">Ready to transform your space?</h2>
                    <p className="text-amber-100 text-lg mb-10 font-light">Contact us today to schedule your free site visit.</p>
                    <Link href="/contact" className="inline-block bg-white text-gray-900 px-12 py-5 rounded-full font-bold tracking-widest text-sm hover:bg-[#2d2a29] hover:text-white transition-all duration-300 uppercase shadow-2xl">
                        Get in Touch
                    </Link>
                </div>
            </section>

        </main>
    );
}
