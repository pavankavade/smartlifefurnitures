import Link from "next/link";

export default function Products() {
    return (
        <main>
            {/* Page Header */}
            <div className="bg-gray-900 text-white pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Collection</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Explore our wide range of premium kitchen trolleys, cabinets, and modern home furniture.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="font-bold text-lg mb-4 text-gray-900">Categories</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="flex items-center justify-between text-amber-800 font-medium group">
                                        <span>Kitchen Trolleys</span>
                                        <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs group-hover:bg-amber-800 group-hover:text-white transition">12</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-amber-800 transition group">
                                        <span>Storage Units</span>
                                        <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs group-hover:bg-amber-800 group-hover:text-white transition">8</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-amber-800 transition group">
                                        <span>Tables</span>
                                        <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs group-hover:bg-amber-800 group-hover:text-white transition">5</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-amber-800 transition group">
                                        <span>Accessories</span>
                                        <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs group-hover:bg-amber-800 group-hover:text-white transition">15</span>
                                    </a>
                                </li>
                            </ul>

                            <hr className="my-6 border-gray-100" />

                            <h3 className="font-bold text-lg mb-4 text-gray-900">Price Range</h3>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="form-checkbox text-amber-800 rounded border-gray-300 focus:ring-amber-800" />
                                    <span className="text-gray-600 text-sm">Under $50</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="form-checkbox text-amber-800 rounded border-gray-300 focus:ring-amber-800" defaultChecked />
                                    <span className="text-gray-600 text-sm">$50 - $100</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="form-checkbox text-amber-800 rounded border-gray-300 focus:ring-amber-800" defaultChecked />
                                    <span className="text-gray-600 text-sm">$100 - $200</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="form-checkbox text-amber-800 rounded border-gray-300 focus:ring-amber-800" />
                                    <span className="text-gray-600 text-sm">$200+</span>
                                </label>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-sm text-gray-500">Showing <span className="font-bold text-gray-900">12</span> results</p>
                            <select className="border-gray-300 rounded-md text-sm focus:ring-amber-800 focus:border-amber-800 p-2 border bg-white">
                                <option>Sort by: Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Product 1 */}
                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-100">
                                <div className="relative h-60 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kitchen Trolley" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                                    <div className="absolute top-3 right-3">
                                        <button className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 flex items-center justify-center transition backdrop-blur-sm">
                                            <i className="fa-regular fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-amber-800 cursor-pointer">Classic Wood Trolley</h3>
                                    <div className="flex text-yellow-400 text-xs mb-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                        <span className="text-gray-400 ml-1">(45)</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-xl font-bold text-amber-800">$129.99</span>
                                        <button className="bg-gray-100 hover:bg-amber-800 text-gray-700 hover:text-white px-3 py-1.5 rounded-lg text-sm transition flex items-center gap-2">
                                            <i className="fa-solid fa-cart-shopping"></i> Add
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-100">
                                <div className="relative h-60 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1596206030588-e215f76f7d98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Steel Cart" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">SALE</div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-amber-800 cursor-pointer">Industrial Steel Cart</h3>
                                    <div className="flex text-yellow-400 text-xs mb-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <span className="text-gray-400 ml-1">(28)</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-sm text-gray-400 line-through mr-1">$149.99</span>
                                            <span className="text-xl font-bold text-amber-800">$119.99</span>
                                        </div>
                                        <button className="bg-gray-100 hover:bg-amber-800 text-gray-700 hover:text-white px-3 py-1.5 rounded-lg text-sm transition flex items-center gap-2">
                                            <i className="fa-solid fa-cart-shopping"></i> Add
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-100">
                                <div className="relative h-60 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Compact Organizer" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-amber-800 cursor-pointer">Compact Organizer</h3>
                                    <div className="flex text-yellow-400 text-xs mb-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <span className="text-gray-400 ml-1">(82)</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-xl font-bold text-amber-800">$89.99</span>
                                        <button className="bg-gray-100 hover:bg-amber-800 text-gray-700 hover:text-white px-3 py-1.5 rounded-lg text-sm transition flex items-center gap-2">
                                            <i className="fa-solid fa-cart-shopping"></i> Add
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product 4 */}
                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-100">
                                <div className="relative h-60 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Living Room Table" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-amber-800 cursor-pointer">Nordic Side Table</h3>
                                    <div className="flex text-yellow-400 text-xs mb-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <span className="text-gray-400 ml-1">(12)</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-xl font-bold text-amber-800">$49.99</span>
                                        <button className="bg-gray-100 hover:bg-amber-800 text-gray-700 hover:text-white px-3 py-1.5 rounded-lg text-sm transition flex items-center gap-2">
                                            <i className="fa-solid fa-cart-shopping"></i> Add
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product 5 */}
                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-100">
                                <div className="relative h-60 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1549488352-843258fb361d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Bar Cart" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-amber-800 cursor-pointer">Vintage Bar Cart</h3>
                                    <div className="flex text-yellow-400 text-xs mb-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <span className="text-gray-400 ml-1">(56)</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-xl font-bold text-amber-800">$199.99</span>
                                        <button className="bg-gray-100 hover:bg-amber-800 text-gray-700 hover:text-white px-3 py-1.5 rounded-lg text-sm transition flex items-center gap-2">
                                            <i className="fa-solid fa-cart-shopping"></i> Add
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product 6 */}
                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-100">
                                <div className="relative h-60 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Shelving Unit" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                                    <div className="absolute top-0 right-0 bg-amber-800 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">NEW</div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-amber-800 cursor-pointer">Modular Shelving</h3>
                                    <div className="flex text-yellow-400 text-xs mb-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <span className="text-gray-400 ml-1">(5)</span>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-xl font-bold text-amber-800">$159.99</span>
                                        <button className="bg-gray-100 hover:bg-amber-800 text-gray-700 hover:text-white px-3 py-1.5 rounded-lg text-sm transition flex items-center gap-2">
                                            <i className="fa-solid fa-cart-shopping"></i> Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center">
                            <nav className="flex items-center space-x-2">
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-amber-800 hover:text-amber-800 transition">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </a>
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-800 text-white font-bold">1</a>
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-amber-800 hover:text-amber-800 transition">2</a>
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-amber-800 hover:text-amber-800 transition">3</a>
                                <span className="text-gray-400">...</span>
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-amber-800 hover:text-amber-800 transition">8</a>
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-amber-800 hover:text-amber-800 transition">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </a>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
