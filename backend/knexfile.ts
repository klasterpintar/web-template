import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Knex } from 'knex';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface KnexConfig {
  [key: string]: Knex.Config;
}

/**
 * Knex configuration for different environments
 */
const config: KnexConfig = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'web_template_db',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: join(__dirname, 'db', 'migrations'),
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: join(__dirname, 'db', 'seeds'),
    },
  },

  staging: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: join(__dirname, 'db', 'migrations'),
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: join(__dirname, 'db', 'seeds'),
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    pool: {
      min: 2,
      max: 20,
    },
    migrations: {
      directory: join(__dirname, 'db', 'migrations'),
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: join(__dirname, 'db', 'seeds'),
    },
  },
};

export default config;
