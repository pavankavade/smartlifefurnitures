import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <i className="fa-solid fa-couch text-amber-800 text-2xl"></i>
                            <span className="font-bold text-2xl tracking-tight">Smartlife<span className="text-amber-800">Furnitures</span></span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Transforming houses into homes with modern, functional, and stylish furniture solutions.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-amber-800 transition"><i className="fa-brands fa-facebook-f text-xl"></i></a>
                            <a href="#" className="text-gray-400 hover:text-amber-800 transition"><i className="fa-brands fa-instagram text-xl"></i></a>
                            <a href="#" className="text-gray-400 hover:text-amber-800 transition"><i className="fa-brands fa-twitter text-xl"></i></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Shop</h3>
                        <ul className="space-y-4">
                            <li><Link href="/products" className="text-gray-400 hover:text-amber-800 transition">Kitchen Trolleys</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-800 transition">Storage Units</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-800 transition">Tables & Chairs</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-800 transition">New Arrivals</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-amber-800 transition">About Us</a></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-amber-800 transition">Contact</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-800 transition">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-800 transition">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-location-dot mt-1 text-amber-800"></i>
                                <span>123 Furniture Street, Design District, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-phone text-amber-800"></i>
                                <span>+1 (234) 567-8900</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-envelope text-amber-800"></i>
                                <span>hello@smartlifefurnitures.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2026 Smartlife Furnitures. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
