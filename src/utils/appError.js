// Error handling midddleware
class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
  
      this.statusCode = statusCode;
      // The error status is "failed" if its user's fault. Else it's "Error"
      this.status = `${this.statusCode}`.startsWith("4") ? "Failed!" : "Error!";
      this.message = message;
      this.isOperational = true;
      // Also capture error stack
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = AppError;
  