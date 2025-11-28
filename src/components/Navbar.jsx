import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('nav.technology'), href: '#technology' },
        { name: t('nav.products'), href: '#products' },
        { name: t('nav.applications'), href: '#applications' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-airwatt-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3 group">
                    <img src={logo} alt="AirWatt Logo" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
                    <span className="text-2xl font-display font-bold text-white tracking-wide">AirWatt</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-airwatt-cyan transition-colors uppercase tracking-wider">
                            {link.name}
                        </a>
                    ))}

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-airwatt-cyan transition-colors"
                    >
                        <Globe size={18} />
                        <span>{i18n.language === 'en' ? 'AR' : 'EN'}</span>
                    </button>

                    <a href="#contact" className="px-6 py-2 bg-airwatt-blue hover:bg-airwatt-cyan text-white text-sm font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,123,255,0.5)] hover:shadow-[0_0_25px_rgba(0,242,255,0.6)]">
                        {t('nav.partner')}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-white hover:text-airwatt-cyan transition-colors"
                    >
                        <span className="font-bold">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
                    </button>
                    <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-airwatt-navy border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-300 hover:text-airwatt-cyan"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
