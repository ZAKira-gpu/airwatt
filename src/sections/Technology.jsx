import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Technology = () => {
    const { t } = useTranslation();

    const cards = [
        {
            title: t('technology.cards.conversion.title'),
            subtitle: t('technology.cards.conversion.subtitle'),
            description: t('technology.cards.conversion.description'),
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: t('technology.cards.beamforming.title'),
            subtitle: t('technology.cards.beamforming.subtitle'),
            description: t('technology.cards.beamforming.description'),
            color: "from-purple-500 to-blue-500"
        },
        {
            title: t('technology.cards.transfer.title'),
            subtitle: t('technology.cards.transfer.subtitle'),
            description: t('technology.cards.transfer.description'),
            color: "from-cyan-400 to-emerald-400"
        }
    ];

    return (
        <section id="technology" className="py-24 bg-airwatt-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold mb-4">{t('technology.title')}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t('technology.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-airwatt-navy rounded-2xl p-8 overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                                <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                                    {card.subtitle}
                                </h4>
                                <p className="text-gray-400 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technology;
