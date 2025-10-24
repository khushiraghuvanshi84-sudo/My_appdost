import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Services', 'Portfolio', 'Careers', 'Blog', 'Contact'];

  const handleNavClick = (item: string) => {
    if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              AppDost
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                onClick={(e) => {
                  if (item === 'Home') {
                    e.preventDefault();
                    handleNavClick(item);
                  }
                }}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="block py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors"
                onClick={(e) => {
                  if (item === 'Home') {
                    e.preventDefault();
                  }
                  handleNavClick(item);
                }}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;