import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setForm({ name: "", email: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  }

  return (
    <div className="contact-bg" ref={contactRef}>
      <div className={`contact-section transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Get in Touch</h3>
              <p className="text-neutral-600 leading-relaxed mb-8">
                We're here to help you find the perfect outsourcing solution for your business. 
                Reach out to us and let's start a conversation about your needs.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent to-accent-dark rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Location</h4>
                  <p className="text-neutral-600">Pristina, Kosovo</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent to-accent-dark rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Email</h4>
                  <p className="text-neutral-600">info@pristinabpo.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent to-accent-dark rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Phone</h4>
                  <p className="text-neutral-600">+383 38 XXX XXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="text-2xl font-bold text-neutral-800 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.placeholder.name}
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="contact-form input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.placeholder.email}
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="contact-form input"
                />
              </div>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                className="contact-form input"
              />
              <textarea
                name="message"
                placeholder={t.contact.placeholder.message}
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="contact-form textarea"
              />
              <button type="submit" className="contact-btn w-full">
                {submitted ? 'Message Sent!' : t.contact.send}
              </button>
            </form>
            
            {submitted && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Thank you for reaching out! We'll get back to you soon.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 