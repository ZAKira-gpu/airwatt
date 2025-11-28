import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wifi, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Zap className="w-8 h-8 text-airwatt-cyan" />,
            title: t('about.features.efficiency.title'),
            description: t('about.features.efficiency.description')
        },
        {
            icon: <Wifi className="w-8 h-8 text-airwatt-blue" />,
            title: t('about.features.beamforming.title'),
            description: t('about.features.beamforming.description')
        },
        {
            icon: <Globe className="w-8 h-8 text-purple-400" />,
            title: t('about.features.scalability.title'),
            description: t('about.features.scalability.description')
        }
    ];

    return (
        <section id="about" className="py-24 bg-airwatt-navy relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-display font-bold mb-6"
                        >
                            {t('about.title_1')} <br />
                            <span className="text-gradient">{t('about.title_2')}</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-lg leading-relaxed mb-8"
                        >
                            <p className="mb-4">{t('about.description_1')}</p>
                            <p>{t('about.description_2')}</p>
                        </motion.div>
                    </div>

                    <div className="md:w-1/2 grid gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-airwatt-cyan/50 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
