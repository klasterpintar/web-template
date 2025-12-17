import express from 'express';
import exampleRoutes from './exampleRoutes.js';

const router = express.Router();

/**
 * Root API endpoint
 * Returns welcome message and API information
 */
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Web Template API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      health: '/health',
    },
  });
});

/**
 * Mount user routes
 */
router.use('/users', exampleRoutes);

export default router;
