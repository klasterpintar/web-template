import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Get port from environment or use default
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Middleware Setup
 */

// CORS configuration - allow requests from frontend
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request logging middleware (development only)
if (NODE_ENV === 'development') {
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

/**
 * Health check endpoint
 * Used to verify the server is running
 */
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
    environment: NODE_ENV,
  });
});

/**
 * Mount API routes
 */
app.use('/api', routes);

/**
 * 404 handler - catch all undefined routes
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  const error: any = new Error('Route not found');
  error.statusCode = 404;
  next(error);
});

/**
 * Global error handler
 * Must be the last middleware
 */
app.use(errorHandler);

/**
 * Start server
 */
app.listen(PORT, () => {
  console.log(`
========================================
  Server running in ${NODE_ENV} mode   
  Port: ${PORT}                         
  URL: http://localhost:${PORT}        
========================================
  `);
});

export default app;
