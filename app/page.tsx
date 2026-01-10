import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative pt-20 h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Modern Kitchen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Elevate Your <span className="text-amber-400">Kitchen Experience</span>
          </h1>
          <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto mb-10 font-light">
            Discover our premium range of kitchen trolleys and modern furniture designed for style and functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="px-8 py-4 bg-amber-800 text-white text-lg font-bold rounded-full hover:bg-amber-900 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Explore Collection
            </Link>
            <a href="#features" className="px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-full hover:bg-gray-100 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-amber-800 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Designed for Modern Living
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We combine craftsmanship with contemporary design to bring you furniture that stands out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Materials</h3>
              <p className="text-gray-600 leading-relaxed">
                Sourced from the finest woods and metals to ensure durability and a premium feel.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ergonomic Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Functionality meets aesthetics. our products are designed to fit perfectly in your home.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your furniture delivered to your doorstep quickly and safely with our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Hook */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Best Sellers</h2>
              <p className="mt-2 text-gray-600">Our most popular kitchen trolleys this month.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center text-amber-800 font-semibold hover:text-amber-900 transition gap-2 group">
              View all products <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kitchen Trolley" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 right-4 bg-amber-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Best Seller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Classic Wood Trolley</h3>
                <p className="text-gray-500 text-sm mb-4">3-Tier storage with lockable wheels</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-800">$129.99</span>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-amber-800 hover:text-white transition">
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596206030588-e215f76f7d98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Steel Kitchen Cart" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Sale
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industrial Steel Cart</h3>
                <p className="text-gray-500 text-sm mb-4">Heavy duty with butch block top</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg text-gray-400 line-through mr-2">$149.99</span>
                    <span className="text-2xl font-bold text-amber-800">$199.99</span>
                  </div>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-amber-800 hover:text-white transition">
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Compact Trolley" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compact Organizer</h3>
                <p className="text-gray-500 text-sm mb-4">Perfect for small apartments</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-800">$89.99</span>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-amber-800 hover:text-white transition">
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-amber-800 hover:bg-amber-900 transition shadow-lg">
              View all products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
