import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-airwatt-navy py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-8">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="AirWatt Logo" className="h-8 w-auto" />
                            <span className="text-xl font-display font-bold text-white">AirWatt</span>
                        </div>

                        <div className="flex gap-8 text-sm text-gray-400">
                            <a href="#" className="hover:text-airwatt-cyan transition-colors">{t('footer.privacy')}</a>
                            <a href="#" className="hover:text-airwatt-cyan transition-colors">{t('footer.terms')}</a>
                            <a href="#" className="hover:text-airwatt-cyan transition-colors">{t('footer.contact')}</a>
                        </div>

                        <div className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} AirWatt. {t('footer.rights')}
                        </div>
                    </div>

                    {/* Bottom Section - Contact Info */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-6 border-t border-white/10">
                        <a
                            href="tel:+213655182727"
                            className="flex items-center gap-2 text-gray-300 hover:text-airwatt-cyan transition-colors group"
                        >
                            <Phone size={18} className="group-hover:scale-110 transition-transform" />
                            <span className="font-medium">+213 655 182 727</span>
                        </a>

                        <div className="hidden md:block w-px h-6 bg-white/10"></div>

                        <a
                            href="https://www.instagram.com/airwatt_rectenna?igsh=bjQwbmJyZjc2cTJt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-airwatt-cyan transition-colors group"
                        >
                            <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                            <span className="font-medium">@airwatt_rectenna</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
