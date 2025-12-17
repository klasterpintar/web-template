import { Knex } from 'knex';

/**
 * Seed users table with sample data
 */
export const seed = async (knex: Knex): Promise<void> => {
  // Clear existing entries
  await knex('users').del();
  
  // Insert sample users
  await knex('users').insert([
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
};
