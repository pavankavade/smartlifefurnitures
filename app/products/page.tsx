import Link from "next/link";
import Image from "next/image";

export default function Collections() {
    return (
        <main className="bg-[#FDFBF7]">
            {/* Page Header */}
            <div className="bg-[#2d2a29] text-white pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-white/80 text-xs tracking-[0.2em] mb-6 uppercase">
                        Portfolio
                    </span>
                    <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] font-medium mb-6">Our Collections</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Explore our portfolio of custom-designed kitchen trolleys, elegant railings, and bespoke furniture pieces handcrafted for our clients.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Filters (Simplified) */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <button className="px-6 py-2 rounded-full bg-amber-900 text-white text-sm tracking-wide font-medium">All Projects</button>
                    <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-amber-900 hover:text-amber-900 transition text-sm tracking-wide bg-white">Kitchen Trolleys</button>
                    <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-amber-900 hover:text-amber-900 transition text-sm tracking-wide bg-white">Railings</button>
                    <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-amber-900 hover:text-amber-900 transition text-sm tracking-wide bg-white">Storage Units</button>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Project 1 */}
                    <div className="group cursor-pointer">
                        <div className="relative h-[450px] overflow-hidden rounded-xl bg-gray-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Modern Granite Kitchen Island"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <Link href="/contact" className="block w-full bg-white text-gray-900 text-center py-3 rounded-lg font-medium tracking-wide uppercase text-xs hover:bg-amber-900 hover:text-white transition-colors">
                                    Inquire About This Design
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="text-amber-900 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Kitchen</span>
                            <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-2 group-hover:text-amber-900 transition-colors">
                                The Granite Island
                            </h3>
                            <p className="text-gray-500 text-sm font-light">Custom trolley with solid granite top</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group cursor-pointer">
                        <div className="relative h-[450px] overflow-hidden rounded-xl bg-gray-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1596206030588-e215f76f7d98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Industrial Steel Cart"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <Link href="/contact" className="block w-full bg-white text-gray-900 text-center py-3 rounded-lg font-medium tracking-wide uppercase text-xs hover:bg-amber-900 hover:text-white transition-colors">
                                    Inquire About This Design
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="text-amber-900 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Commercial</span>
                            <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-2 group-hover:text-amber-900 transition-colors">
                                Heavy Duty Utility Cart
                            </h3>
                            <p className="text-gray-500 text-sm font-light">Stainless steel fabrication for durability</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="group cursor-pointer">
                        <div className="relative h-[450px] overflow-hidden rounded-xl bg-gray-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Modern Balcony Railing"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <Link href="/contact" className="block w-full bg-white text-gray-900 text-center py-3 rounded-lg font-medium tracking-wide uppercase text-xs hover:bg-amber-900 hover:text-white transition-colors">
                                    Inquire About This Design
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="text-amber-900 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Railing</span>
                            <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-2 group-hover:text-amber-900 transition-colors">
                                Modern Balcony Railing
                            </h3>
                            <p className="text-gray-500 text-sm font-light">Toughened glass with stainless steel 304 fittings</p>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="group cursor-pointer">
                        <div className="relative h-[450px] overflow-hidden rounded-xl bg-gray-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1556912173-3db996e7c3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Custom Kitchen Storage"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <Link href="/contact" className="block w-full bg-white text-gray-900 text-center py-3 rounded-lg font-medium tracking-wide uppercase text-xs hover:bg-amber-900 hover:text-white transition-colors">
                                    Inquire About This Design
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="text-amber-900 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Storage</span>
                            <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-2 group-hover:text-amber-900 transition-colors">
                                Modular Kitchen Storage
                            </h3>
                            <p className="text-gray-500 text-sm font-light">Stainless steel baskets for customized utility</p>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div className="group cursor-pointer">
                        <div className="relative h-[450px] overflow-hidden rounded-xl bg-gray-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Living Room Unit"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <Link href="/contact" className="block w-full bg-white text-gray-900 text-center py-3 rounded-lg font-medium tracking-wide uppercase text-xs hover:bg-amber-900 hover:text-white transition-colors">
                                    Inquire About This Design
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="text-amber-900 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Living</span>
                            <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-2 group-hover:text-amber-900 transition-colors">
                                Floating Wall Unit
                            </h3>
                            <p className="text-gray-500 text-sm font-light">Space-saving design for modern halls</p>
                        </div>
                    </div>

                    {/* Project 6 */}
                    <div className="group cursor-pointer">
                        <div className="relative h-[450px] overflow-hidden rounded-xl bg-gray-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1549488352-843258fb361d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Bar Cart"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <Link href="/contact" className="block w-full bg-white text-gray-900 text-center py-3 rounded-lg font-medium tracking-wide uppercase text-xs hover:bg-amber-900 hover:text-white transition-colors">
                                    Inquire About This Design
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="text-amber-900 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Entertainment</span>
                            <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-2 group-hover:text-amber-900 transition-colors">
                                Vintage Bar Cart
                            </h3>
                            <p className="text-gray-500 text-sm font-light">Classic styling with modern utility</p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-[family-name:var(--font-playfair)] text-gray-900 mb-6">Don't see what you're looking for?</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        This is just a glimpse of our capabilities. We specialize in custom solutions tailored to your unique requirements.
                    </p>
                    <Link href="/contact" className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-medium tracking-widest text-sm hover:bg-amber-900 transition-all duration-300 uppercase shadow-lg">
                        Discuss Your Project
                    </Link>
                </div>
            </div>
        </main>
    );
}
