import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingWidget from './components/BookingWidget';
import { LanguageProvider } from './components/LanguageContext';

// Pages
import Home from './pages/Home';
import Details from './pages/Details';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans">
          <Navbar />
          <main className="flex-grow pt-16 md:pt-20">
            <AnimatedRoutes />
          </main>
          <Footer />
          <BookingWidget />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;