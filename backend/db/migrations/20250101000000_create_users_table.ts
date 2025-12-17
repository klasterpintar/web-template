import { Knex } from 'knex';

/**
 * Create users table migration
 */
export const up = async (knex: Knex): Promise<void> => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.string('email', 255).notNullable().unique();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    
    // Add index on email for faster lookups
    table.index('email');
  });
};

/**
 * Drop users table migration
 */
export const down = async (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists('users');
};
