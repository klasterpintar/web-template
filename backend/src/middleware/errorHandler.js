/**
 * Global error handling middleware
 * Catches and formats errors before sending response to client
 */
const errorHandler = (err, req, res, next) => {
  // Log error for debugging
  console.error('Error:', err);

  // Default error status and message
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let details = null;

  // Handle specific database errors
  if (err.code === 'ER_DUP_ENTRY') {
    statusCode = 409;
    message = 'Duplicate entry. This record already exists.';
    details = 'A record with this information already exists in the database.';
  } else if (err.code === 'ER_NO_REFERENCED_ROW_2' || err.code === 'ER_ROW_IS_REFERENCED_2') {
    statusCode = 409;
    message = 'Foreign key constraint violation.';
    details = 'This operation violates a foreign key constraint.';
  } else if (err.code === 'ER_BAD_FIELD_ERROR') {
    statusCode = 400;
    message = 'Invalid field in query.';
    details = err.sqlMessage;
  } else if (err.code && err.code.startsWith('ER_')) {
    // Other MySQL errors
    statusCode = 400;
    message = 'Database operation failed.';
    details = err.sqlMessage;
  }

  // Handle validation errors
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation Error';
    details = err.details || err.message;
  }

  // Handle not found errors
  if (err.name === 'NotFoundError') {
    statusCode = 404;
    message = 'Resource not found';
  }

  // Prepare error response
  const errorResponse = {
    success: false,
    error: {
      message,
      statusCode,
    },
  };

  // Add details if available
  if (details) {
    errorResponse.error.details = details;
  }

  // Include stack trace in development mode
  if (process.env.NODE_ENV === 'development') {
    errorResponse.error.stack = err.stack;
  }

  // Send error response
  res.status(statusCode).json(errorResponse);
};

export default errorHandler;
