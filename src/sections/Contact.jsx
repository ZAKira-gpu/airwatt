import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-24 bg-airwatt-navy">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-airwatt-dark border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('contact.title')}</h2>
                        <p className="text-gray-400">
                            {t('contact.subtitle')}
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.form.name')}</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-airwatt-blue transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.form.email')}</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-airwatt-blue transition-colors" placeholder="john@company.com" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.form.company')}</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-airwatt-blue transition-colors" placeholder="Company Inc." />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.form.message')}</label>
                            <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-airwatt-blue transition-colors" placeholder="..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-airwatt-blue hover:bg-airwatt-cyan text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]">
                            {t('contact.form.submit')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
