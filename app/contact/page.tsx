export default function Contact() {
    return (
        <main>
            {/* Page Header */}
            <div className="bg-gray-900 text-white pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">We&#39;d love to hear from you. Our team is always here to chat.</p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                            <p className="text-gray-600 mb-8">
                                Fill up the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Phone</h3>
                                        <p className="text-gray-600">+91 (234) 567-8900</p>
                                        <p className="text-sm text-gray-400">Mon-Fri 9am-6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Email</h3>
                                        <p className="text-gray-600">hello@smartlifefurnitures.com</p>
                                        <p className="text-sm text-gray-400">Online support 24/7</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Office</h3>
                                        <p className="text-gray-600">123 Furniture Street</p>
                                        <p className="text-gray-600">Design District, NY 10001</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Placeholder */}
                        <div className="bg-gray-200 w-full h-64 rounded-2xl overflow-hidden shadow-inner relative">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.2598688457885!3d40.69714941916327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1689123456789!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form action="#" method="POST" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" id="first-name" name="first-name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition" placeholder="John" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" id="last-name" name="last-name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <select id="subject" name="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition bg-white">
                                    <option>General Inquiry</option>
                                    <option>Order Support</option>
                                    <option>Product Question</option>
                                    <option>Feedback</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <div className="pt-2">
                                <button type="submit" className="w-full bg-amber-800 text-white font-bold py-4 rounded-xl hover:bg-amber-900 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="bg-gray-50 py-16 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer international shipping?</h3>
                            <p className="text-gray-600">Currently, we only ship within the United States. We are working on expanding to international markets soon.</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">What is your return policy?</h3>
                            <p className="text-gray-600">We offer a 30-day return policy for all unused items in their original packaging. Please contact our support team to initiate a return.</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Do products come assembled?</h3>
                            <p className="text-gray-600">Most of our large furniture items require some assembly. All necessary tools and detailed instructions are included in the box.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
