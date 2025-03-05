import { Constants } from '../utils/constant.utils.js';
import { AppError } from '../utils/errors/custom.errors.js';
import logger from '../utils/logger.utils.js';
import { handleError } from '../utils/responsehandler/index.utils.js';

const errorMapper = (err) => {
  if (err.name === 'ValidationError') {
    return new AppError(err.message, 400, 'VALIDATION_ERROR');
  }

  if (err.name === 'JsonWebTokenError') {
    return new AppError('Invalid token', 401, 'AUTHENTICATION_ERROR');
  }

  if (err.name === 'TokenExpiredError') {
    return new AppError('Token expired', 401, 'AUTHENTICATION_ERROR');
  }

  return err;
};

const errorHandler = async (err, req, res) => {
  // Map known errors to custom error types
  const mappedError = errorMapper(err);

  // Log error details
  const errorDetails = {
    message: mappedError.message,
    stack: mappedError.stack,
    path: req.path,
    method: req.method,
    timestamp: new Date().toISOString(),
    requestId: req.id // Assuming you're using express-request-id middleware
  };

  await logger.error('Error Details:', errorDetails);

  const isProduction = process.env.NODE_ENV === 'production';

  // Use toJSON() if available, otherwise create basic error response
  const errorResponse = mappedError.toJSON ? mappedError.toJSON() : {
    statusCode: mappedError.statusCode || Constants.HTTPINTERNALSERVERERROR,
    message: mappedError.message || 'Internal Server Error',
    errorCode: mappedError.errorCode
  };

  // Add non-production details
  if (!isProduction) {
    errorResponse.stack = mappedError.stack;
    errorResponse.details = errorDetails;
  }

  return handleError(res, errorResponse, errorResponse.statusCode);
};

export default errorHandler;