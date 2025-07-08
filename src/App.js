import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useRouteError } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load page components
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const TestError = React.lazy(() => import("./pages/TestError"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light to-primary">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-neutral-600 font-medium">Loading...</p>
    </div>
  </div>
);

// Error boundary component
const ErrorBoundary = () => {
  const error = useRouteError();
  return <ErrorPage />;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
              <Route path="/about" element={<About />} errorElement={<ErrorBoundary />} />
              <Route path="/services" element={<Services />} errorElement={<ErrorBoundary />} />
              <Route path="/contact" element={<Contact />} errorElement={<ErrorBoundary />} />
              <Route path="/home" element={<Home />} errorElement={<ErrorBoundary />} />
              <Route path="/test-error" element={<TestError />} errorElement={<ErrorBoundary />} />
              <Route path="*" element={<Navigate to="/" replace />} errorElement={<ErrorBoundary />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App; 