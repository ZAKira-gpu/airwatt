import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Applications = () => {
    const { t } = useTranslation();
    const apps = t('applications.list', { returnObjects: true });

    return (
        <section id="applications" className="py-24 bg-airwatt-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-airwatt-blue/50 to-transparent" />

            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-display font-bold mb-16">{t('applications.title')}</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {apps.map((app, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-airwatt-blue/10 hover:border-airwatt-blue/30 transition-all cursor-default"
                        >
                            <span className="text-gray-300 font-medium">{app}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Applications;
