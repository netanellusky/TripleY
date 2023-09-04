// middlewares/errorHandler.js

import logger from '../logger/index.js';

const errorHandler = (err, req, res, next) => {
  // Log the error in your console or logging system
  logger.error('Error:', { message: err.message, stack: err.stack });

  // Customize error status code if needed
  const statusCode = err.statusCode || 500;

  // Customize error message
  const message = err.customMessage || err.message || 'Internal Server Error';

  // Add more fields to error response if needed
  const data = err.data || {};

  // Respond
  res.status(statusCode).json({
    status: 'error',
    message,
    ...data,
  });
};

export default errorHandler;
