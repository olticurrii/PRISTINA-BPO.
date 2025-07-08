import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { 
  throwNotFoundError, 
  throwServerError, 
  throwForbiddenError, 
  throwUnauthorizedError, 
  throwGeneralError 
} from "../utils/errorUtils";

export default function TestError() {
  const [errorType, setErrorType] = useState("");
  const { language } = useLanguage();
  const t = translations[language];

  const throwError = (type) => {
    switch (type) {
      case "404":
        throwNotFoundError("This page was not found");
      case "500":
        throwServerError("Something went wrong on our server");
      case "403":
        throwForbiddenError("You don't have permission to access this");
      case "401":
        throwUnauthorizedError("Please log in to continue");
      case "general":
        throwGeneralError("This is a test general error");
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-primary flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Test Error Page</h1>
        <p className="text-gray-600 mb-8">
          Click a button below to test different error scenarios:
        </p>
        
        <div className="space-y-4">
          <button
            onClick={() => throwError("404")}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Test 404 Error
          </button>
          
          <button
            onClick={() => throwError("500")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Test 500 Error
          </button>
          
          <button
            onClick={() => throwError("403")}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Test 403 Error
          </button>
          
          <button
            onClick={() => throwError("401")}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Test 401 Error
          </button>
          
          <button
            onClick={() => throwError("general")}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Test General Error
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            This page is for testing purposes only. In a real application, errors would be thrown automatically when something goes wrong.
          </p>
        </div>
      </div>
    </div>
  );
} 