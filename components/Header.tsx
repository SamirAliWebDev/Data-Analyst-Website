import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-50/80 backdrop-blur-lg z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-indigo-600 tracking-tighter">
          DA.
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveLink(item.name)}
              className={`relative text-slate-600 hover:text-indigo-600 transition-colors duration-300 font-medium
                ${activeLink === item.name ? 'text-indigo-600' : ''}`}
            >
              {item.name}
              {activeLink === item.name && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-teal-400 rounded-full"></span>
              )}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:block bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
            Contact Me
        </a>
        <button className="md:hidden text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;