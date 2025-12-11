
import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { ContentData, Language } from '../types';

interface HeaderProps {
  content: ContentData['nav'];
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ content, language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: content.home, href: "#home" },
    { label: content.services, href: "#services" },
    { label: content.process, href: "#process" },
    { label: content.about, href: "#about" },
    { label: content.contact, href: "#contact" },
  ];

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 text-2xl font-bold text-slate-900 group"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-6 transition-transform">
             <Globe className="w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold">{content.logoTitle}</span>
            <span className="text-xs text-blue-600 tracking-widest font-bold">{content.logoSubtitle}</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-1 text-xs font-bold bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors tracking-wide"
          >
            <span className={language === 'zh' ? 'text-slate-900' : 'text-slate-400'}>CN</span>
            <span className="text-slate-300">/</span>
            <span className={language === 'en' ? 'text-slate-900' : 'text-slate-400'}>EN</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-slate-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-6 flex flex-col gap-4 animate-fade-in">
           {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-slate-800 border-b border-slate-50 pb-2"
            >
              {link.label}
            </a>
          ))}
           <button
            onClick={() => {
              setLanguage(language === 'en' ? 'zh' : 'en');
              setMobileMenuOpen(false);
            }}
            className="text-left font-medium text-blue-600 pt-2"
          >
            Switch Language ({language === 'en' ? '中文' : 'English'})
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
