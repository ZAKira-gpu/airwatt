import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, ShoppingCart } from 'lucide-react';
import microRectennaImg from '../assets/micro-rectenna.jpg';
import powerBankImg from '../assets/power Bank auto-rechargeable.jpg';
import industrialRectennaImg from '../assets/industrial rectenna.jpg';
import pcbFlexibleImg from '../assets/pcb flexible.jpg';
import pcbNormaleImg from '../assets/pcb normale.jpg';
import impresion3dImg from '../assets/impresion 3d.jpg';

const Product = () => {
    const { t } = useTranslation();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        quantity: 1
    });

    const products = [
        {
            id: 'iot',
            name: t('products.iot.name'),
            type: t('products.iot.type'),
            specs: ["< 10mW Output", "2.4GHz / 5GHz", "20mm x 20mm"],
            use: t('products.iot.use'),
            image: microRectennaImg
        },
        {
            id: 'pro',
            name: t('products.pro.name'),
            type: t('products.pro.type'),
            specs: ["100mW - 1W Output", "915MHz / 2.4GHz", "Beam-steering capable"],
            use: t('products.pro.use'),
            image: powerBankImg
        },
        {
            id: 'ind',
            name: t('products.ind.name'),
            type: t('products.ind.type'),
            specs: ["1W+ Output", "5.8GHz", "Ruggedized IP67"],
            use: t('products.ind.use'),
            image: industrialRectennaImg
        },
        {
            id: 'pcb_flexible',
            name: t('products.pcb_flexible.name'),
            type: t('products.pcb_flexible.type'),
            specs: ["Flexible substrate", "Bendable design", "Lightweight"],
            use: t('products.pcb_flexible.use'),
            image: pcbFlexibleImg
        },
        {
            id: 'pcb_normale',
            name: t('products.pcb_normale.name'),
            type: t('products.pcb_normale.type'),
            specs: ["Standard FR4", "Cost-effective", "Easy integration"],
            use: t('products.pcb_normale.use'),
            image: pcbNormaleImg
        },
        {
            id: 'impision_3d',
            name: t('products.impision_3d.name'),
            type: t('products.impision_3d.type'),
            specs: ["3D printed", "Custom geometries", "Rapid iteration"],
            use: t('products.impision_3d.use'),
            image: impresion3dImg
        }
    ];

    const handleShopClick = (product) => {
        setSelectedProduct(product);
        setFormData({ name: '', phone: '', address: '', quantity: 1 });
    };

    const handleClose = () => {
        setSelectedProduct(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order submitted:', {
            product: selectedProduct,
            ...formData
        });
        alert(`Order placed for ${selectedProduct.name}!\nQuantity: ${formData.quantity}\nWe will contact you soon.`);
        handleClose();
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="products" className="py-24 bg-airwatt-navy">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-display font-bold mb-4">{t('products.title')}</h2>
                        <p className="text-gray-400">{t('products.subtitle')}</p>
                    </div>
                    <button className="hidden md:block text-airwatt-cyan hover:text-white transition-colors font-medium">
                        {t('products.datasheet')}
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-airwatt-dark border border-white/10 rounded-xl p-8 hover:shadow-[0_0_30px_rgba(0,123,255,0.15)] transition-all duration-300"
                        >
                            <div className="h-40 bg-gradient-to-b from-white/5 to-transparent rounded-lg mb-6 overflow-hidden border border-white/5">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                            <p className="text-airwatt-cyan text-sm font-medium mb-6">{product.type}</p>

                            <ul className="space-y-3 mb-8">
                                {product.specs.map((spec, i) => (
                                    <li key={i} className="flex items-center text-gray-400 text-sm">
                                        <div className="w-1.5 h-1.5 bg-airwatt-blue rounded-full mr-3 rtl:ml-3 rtl:mr-0" />
                                        {spec}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-white/10 mb-6">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t('products.best_for')}</p>
                                <p className="text-sm text-white">{product.use}</p>
                            </div>

                            <button
                                onClick={() => handleShopClick(product)}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-airwatt-blue hover:bg-airwatt-cyan text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(0,123,255,0.3)] hover:shadow-[0_0_25px_rgba(0,242,255,0.5)]"
                            >
                                <ShoppingCart size={18} />
                                {t('products.shop_now')}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="text-airwatt-cyan hover:text-white transition-colors font-medium">
                        {t('products.datasheet')}
                    </button>
                </div>
            </div>

            {/* Order Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-airwatt-dark border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                                        {t('products.order_title')}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{t('products.order_subtitle')}</p>
                                    <p className="text-airwatt-cyan text-sm mt-2 font-medium">{selectedProduct.name}</p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        {t('products.form.name')}
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-airwatt-blue transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        {t('products.form.phone')}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-airwatt-blue transition-colors"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        {t('products.form.address')}
                                    </label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                        rows="3"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-airwatt-blue transition-colors"
                                        placeholder="123 Main St, City, Country"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        {t('products.form.quantity')}
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleInputChange}
                                        min="1"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-airwatt-blue transition-colors"
                                    />
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg transition-all duration-300 border border-white/10"
                                    >
                                        {t('products.form.cancel')}
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-6 py-3 bg-airwatt-blue hover:bg-airwatt-cyan text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]"
                                    >
                                        {t('products.form.submit')}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Product;
