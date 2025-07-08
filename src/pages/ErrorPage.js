import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export default function ErrorPage() {
  const error = useRouteError();
  const { language } = useLanguage();
  const t = translations[language];

  // Determine error type and get appropriate message
  const getErrorInfo = () => {
    if (error?.status === 404) {
      return {
        code: "404",
        title: t.errorPage.notFound.title,
        message: t.errorPage.notFound.message,
        description: t.errorPage.notFound.description
      };
    } else if (error?.status === 500) {
      return {
        code: "500",
        title: t.errorPage.serverError.title,
        message: t.errorPage.serverError.message,
        description: t.errorPage.serverError.description
      };
    } else if (error?.status === 403) {
      return {
        code: "403",
        title: t.errorPage.forbidden.title,
        message: t.errorPage.forbidden.message,
        description: t.errorPage.forbidden.description
      };
    } else if (error?.status === 401) {
      return {
        code: "401",
        title: t.errorPage.unauthorized.title,
        message: t.errorPage.unauthorized.message,
        description: t.errorPage.unauthorized.description
      };
    } else {
      return {
        code: error?.status || "?",
        title: t.errorPage.general.title,
        message: t.errorPage.general.message,
        description: t.errorPage.general.description
      };
    }
  };

  const errorInfo = getErrorInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-secondary flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {/* Error Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-4">
          <h1 className="text-6xl font-bold text-gray-800 mb-2">{errorInfo.code}</h1>
        </div>

        {/* Error Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{errorInfo.title}</h2>

        {/* Error Message */}
        <p className="text-gray-600 mb-6">{errorInfo.message}</p>

        {/* Error Description */}
        <p className="text-sm text-gray-500 mb-8">{errorInfo.description}</p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t.errorPage.goHome}
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            {t.errorPage.goBack}
          </button>
        </div>

        {/* Contact Support */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">{t.errorPage.needHelp}</p>
          <Link
            to="/contact"
            className="text-primary hover:text-primary-dark font-medium transition-colors duration-300"
          >
            {t.errorPage.contactSupport}
          </Link>
        </div>

        {/* Debug Info (only in development) */}
        {process.env.NODE_ENV === 'development' && error && (
          <details className="mt-6 text-left">
            <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
              {t.errorPage.debugInfo}
            </summary>
            <pre className="mt-2 text-xs text-gray-600 bg-gray-100 p-3 rounded overflow-auto">
              {JSON.stringify(error, null, 2)}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
} 