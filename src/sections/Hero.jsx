import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-airwatt-blue/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-airwatt-cyan/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                        {t('hero.headline_1')} <br />
                        <span className="text-gradient">{t('hero.headline_2')}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        {t('hero.subheadline')}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a href="#technology" className="px-8 py-4 bg-airwatt-blue hover:bg-airwatt-cyan text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,123,255,0.4)] hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] hover:-translate-y-1">
                            {t('hero.cta_tech')}
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold rounded-full transition-all duration-300 backdrop-blur-sm">
                            {t('hero.cta_partner')}
                        </a>
                    </div>
                </motion.div>

                {/* Animated RF Wave Graphic */}
                <motion.div
                    className="mt-20 relative h-64 w-full max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {/* Abstract Beamforming Visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute border border-airwatt-cyan/30 rounded-full"
                                style={{
                                    width: `${(i + 1) * 20}%`,
                                    height: `${(i + 1) * 40}px`,
                                }}
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                        <div className="w-4 h-4 bg-airwatt-cyan rounded-full shadow-[0_0_20px_#00f2ff] animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
