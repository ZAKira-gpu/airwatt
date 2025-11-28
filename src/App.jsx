import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Technology from './sections/Technology';
import Product from './sections/Product';
import Applications from './sections/Applications';
import Contact from './sections/Contact';

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <div className={`bg-airwatt-dark min-h-screen text-white selection:bg-airwatt-cyan selection:text-airwatt-navy ${i18n.language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Technology />
                <Product />
                <Applications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
