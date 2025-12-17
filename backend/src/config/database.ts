import knex, { Knex } from 'knex';
import knexConfig from '../../knexfile.js';

// Get the environment
const environment = (process.env.NODE_ENV || 'development') as keyof typeof knexConfig;

// Initialize Knex with the appropriate configuration
const db: Knex = knex(knexConfig[environment]);

/**
 * Test database connection
 */
const testConnection = async (): Promise<void> => {
  try {
    await db.raw('SELECT 1');
    console.log(`✓ Database connected successfully (${environment})`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('✗ Database connection failed:', errorMessage);
    process.exit(1);
  }
};

// Test connection on initialization
testConnection();

export default db;
