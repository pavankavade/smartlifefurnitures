import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FDFBF7]">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
            alt="Luxury Custom Kitchen"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-sm tracking-[0.2em] mb-6 backdrop-blur-md font-light uppercase">
            Est. 2026
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-[family-name:var(--font-playfair)] text-white font-medium tracking-tight mb-8 leading-tight drop-shadow-lg">
            Smart Life <br />
            <span className="italic">Furnitures</span>
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed text-balance">
            Expert craftsmanship for your home. We specialize in custom on-site fabrication of high-end Kitchen Trolleys and Modern Railings.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group relative px-10 py-4 overflow-hidden rounded-full bg-white text-gray-900 shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 font-medium tracking-widest text-sm uppercase">
                Get a Free Consultation
              </span>
            </Link>
            <a
              href="#features"
              className="group relative px-10 py-4 overflow-hidden rounded-full border border-white text-white transition-all hover:bg-white/10 hover:border-white/50"
            >
              <span className="relative z-10 font-medium tracking-widest text-sm uppercase">
                Our Services
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <i className="fa-solid fa-arrow-down font-light text-xl"></i>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="relative py-32 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#D7CCC8]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#EFEBE9]/50 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm text-amber-900 font-bold tracking-[0.2em] uppercase mb-4">
              Our Expertise
            </h2>
            <p className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-gray-900">
              Tailored to Your Space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="glass-panel p-10 rounded-3xl text-center hover:bg-white/80 transition-all duration-500 group border border-stone-100">
              <div className="w-20 h-20 bg-[#5D4037] text-[#FDFBF7] rounded-full flex items-center justify-center mx-auto mb-8 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                <i className="fa-solid fa-cart-flatbed-suitcase"></i>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-4">
                Custom Kitchen Trolleys
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Designed to maximize your kitchen's utility and style. Built on-site to fit your exact dimensions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel p-10 rounded-3xl text-center hover:bg-white/80 transition-all duration-500 group border border-stone-100">
              <div className="w-20 h-20 bg-[#5D4037] text-[#FDFBF7] rounded-full flex items-center justify-center mx-auto mb-8 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                <i className="fa-solid fa-stairs"></i>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-4">
                Modern Railings
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Stainless steel, glass, and wood railings that add a touch of modern elegance and safety to your home.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-10 rounded-3xl text-center hover:bg-white/80 transition-all duration-500 group border border-stone-100">
              <div className="w-20 h-20 bg-[#5D4037] text-[#FDFBF7] rounded-full flex items-center justify-center mx-auto mb-8 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-4">
                On-Site Fabrication
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                We work at your location to ensure perfect installation and immediate adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section (Formerly Best Sellers) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
            <div>
              <span className="text-amber-900 font-medium tracking-widest text-sm uppercase block mb-3">
                Our Work
              </span>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-gray-900">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden md:flex items-center text-gray-900 font-medium hover:text-amber-900 transition gap-3 group tracking-wide uppercase text-sm"
            >
              View Full Portfolio{" "}
              <i className="fa-solid fa-arrow-right-long transform group-hover:translate-x-2 transition"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-[400px] overflow-hidden rounded-xl bg-gray-100 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Custom Kitchen Trolley Project"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 uppercase tracking-widest">
                    Kitchen
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-2">
                  The Granite Island
                </h3>
                <p className="text-gray-500 text-sm mb-3 font-light tracking-wide">
                  Custom-built trolley with granite top and oak finish.
                </p>
                <Link href="/contact" className="text-amber-900 hover:text-amber-700 font-medium text-sm uppercase tracking-wider border-b border-amber-900 pb-1">
                  Inquire About Similar
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-[400px] overflow-hidden rounded-xl bg-gray-100 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Glass Railing Project"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#BF360C] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                    Railing
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-2">
                  Modern Staircase Railing
                </h3>
                <p className="text-gray-500 text-sm mb-3 font-light tracking-wide">
                  Frameless glass installation with stainless steel fittings.
                </p>
                <Link href="/contact" className="text-amber-900 hover:text-amber-700 font-medium text-sm uppercase tracking-wider border-b border-amber-900 pb-1">
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-[400px] overflow-hidden rounded-xl bg-gray-100 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1588854337222-688db60d2b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Industrial Storage Solution"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 uppercase tracking-widest">
                    Storage
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-gray-900 mb-2">
                  Utility Cart
                </h3>
                <p className="text-gray-500 text-sm mb-3 font-light tracking-wide">
                  Heavy-duty steel cart designed for a commercial kitchen.
                </p>
                <Link href="/contact" className="text-amber-900 hover:text-amber-700 font-medium text-sm uppercase tracking-wider border-b border-amber-900 pb-1">
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-900 text-sm tracking-widest font-medium rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition uppercase"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
