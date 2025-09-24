import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="animate-fadeInUp text-center">
                    <h2 className="text-4xl font-bold text-indigo-600 mb-4">Get In Touch</h2>
                    <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto">
                        Have a question or want to work together? I'd love to hear from you.
                    </p>
                </div>
                <div 
                  className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-xl shadow-indigo-100 animate-fadeInUp"
                  style={{ animationDelay: '0.2s' }}
                >
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-3 bg-slate-100 border-2 border-transparent rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-indigo-500 outline-none transition" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-3 bg-slate-100 border-2 border-transparent rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-indigo-500 outline-none transition" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Message</label>
                            <textarea id="message" rows={5} className="w-full px-4 py-3 bg-slate-100 border-2 border-transparent rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-indigo-500 outline-none transition" placeholder="Your Message"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-indigo-200/80 hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;