import Link from "next/link";



export default function Footer() {
    return (
        <footer className="bg-[#2D1B18] text-white/80 pt-20 pb-10 border-t border-white/5 font-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <span className="font-serif text-2xl font-bold tracking-wide text-white group-hover:text-amber-500 transition">Smart Life <span className="text-amber-700">Furnitures</span></span>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400 mb-8">
                            Transforming spaces into sanctuaries with furniture that speaks the language of timeless elegance.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-800 hover:text-white transition-all duration-300">
                                <i className="fa-brands fa-facebook-f text-sm"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-800 hover:text-white transition-all duration-300">
                                <i className="fa-brands fa-instagram text-sm"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-800 hover:text-white transition-all duration-300">
                                <i className="fa-brands fa-pinterest-p text-sm"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-[family-name:var(--font-playfair)] text-lg mb-6 tracking-wide">Collections</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/products" className="hover:text-amber-500 transition-colors">Kitchen & Dining</Link></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Living Room</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Bedroom Sanctuary</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Home Office</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">New Arrivals</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-[family-name:var(--font-playfair)] text-lg mb-6 tracking-wide">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Sustainability</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Press</a></li>
                            <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-[family-name:var(--font-playfair)] text-lg mb-6 tracking-wide">Concierge</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-4">
                                <i className="fa-solid fa-location-dot mt-1 text-amber-700"></i>
                                <span>123 Design Avenue,<br />SoHo, New York 10012</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <i className="fa-solid fa-phone text-amber-700"></i>
                                <span>+1 (212) 555-0123</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <i className="fa-solid fa-envelope text-amber-700"></i>
                                <span>concierge@smartlife.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; 2026 Smart Life Furnitures. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
