import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="container mx-auto px-6 py-8 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="hover:text-teal-400 transition-colors duration-300 text-lg">LinkedIn</a>
                    <a href="#" className="hover:text-teal-400 transition-colors duration-300 text-lg">GitHub</a>
                    <a href="#" className="hover:text-teal-400 transition-colors duration-300 text-lg">Twitter</a>
                </div>
                 <p>&copy; {new Date().getFullYear()} Data Analyst Portfolio. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;