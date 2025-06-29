import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load page components
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light to-primary">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-neutral-600 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App; 