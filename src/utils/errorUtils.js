// Error utility functions for throwing different types of errors

/**
 * Throw a 404 Not Found error
 * @param {string} message - Custom error message
 */
export const throwNotFoundError = (message = "Resource not found") => {
  throw new Response(message, { status: 404 });
};

/**
 * Throw a 500 Internal Server Error
 * @param {string} message - Custom error message
 */
export const throwServerError = (message = "Internal server error") => {
  throw new Response(message, { status: 500 });
};

/**
 * Throw a 403 Forbidden error
 * @param {string} message - Custom error message
 */
export const throwForbiddenError = (message = "Access forbidden") => {
  throw new Response(message, { status: 403 });
};

/**
 * Throw a 401 Unauthorized error
 * @param {string} message - Custom error message
 */
export const throwUnauthorizedError = (message = "Unauthorized access") => {
  throw new Response(message, { status: 401 });
};

/**
 * Throw a 400 Bad Request error
 * @param {string} message - Custom error message
 */
export const throwBadRequestError = (message = "Bad request") => {
  throw new Response(message, { status: 400 });
};

/**
 * Throw a general error
 * @param {string} message - Custom error message
 */
export const throwGeneralError = (message = "An unexpected error occurred") => {
  throw new Error(message);
};

/**
 * Handle API errors and throw appropriate error responses
 * @param {Response} response - Fetch response object
 * @param {string} defaultMessage - Default error message
 */
export const handleApiError = (response, defaultMessage = "API request failed") => {
  if (!response.ok) {
    const status = response.status;
    const message = response.statusText || defaultMessage;
    
    switch (status) {
      case 400:
        throwBadRequestError(message);
        break;
      case 401:
        throwUnauthorizedError(message);
        break;
      case 403:
        throwForbiddenError(message);
        break;
      case 404:
        throwNotFoundError(message);
        break;
      case 500:
        throwServerError(message);
        break;
      default:
        throw new Response(message, { status });
    }
  }
  return response;
};

/**
 * Async wrapper for error handling
 * @param {Function} asyncFunction - Async function to wrap
 * @param {string} errorMessage - Custom error message
 */
export const withErrorHandling = async (asyncFunction, errorMessage = "Operation failed") => {
  try {
    return await asyncFunction();
  } catch (error) {
    if (error instanceof Response) {
      throw error; // Re-throw Response errors as they are already formatted
    }
    throwGeneralError(errorMessage);
  }
}; 