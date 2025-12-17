import knex from 'knex';
import knexConfig from '../../knexfile.js';

// Get the environment
const environment = process.env.NODE_ENV || 'development';

// Initialize Knex with the appropriate configuration
const db = knex(knexConfig[environment]);

/**
 * Test database connection
 */
const testConnection = async () => {
  try {
    await db.raw('SELECT 1');
    console.log(`✓ Database connected successfully (${environment})`);
  } catch (error) {
    console.error('✗ Database connection failed:', error.message);
    process.exit(1);
  }
};

// Test connection on initialization
testConnection();

export default db;
