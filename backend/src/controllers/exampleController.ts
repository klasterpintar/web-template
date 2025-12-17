import { Request, Response, NextFunction } from 'express';
import db from '../config/database.js';

interface User {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

interface CustomError extends Error {
  statusCode?: number;
}

/**
 * Get all users from the database
 */
export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await db<User>('users').select('*').orderBy('created_at', 'desc');
    
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a single user by ID
 */
export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    
    const user = await db<User>('users').where({ id }).first();
    
    if (!user) {
      const error: CustomError = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }
    
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create a new user
 */
export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, email }: { name: string; email: string } = req.body;
    
    // Validation
    if (!name || !email) {
      const error: CustomError = new Error('Name and email are required');
      error.statusCode = 400;
      return next(error);
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const error: CustomError = new Error('Invalid email format');
      error.statusCode = 400;
      return next(error);
    }
    
    // Insert new user
    const [userId] = await db('users').insert({
      name,
      email,
      created_at: db.fn.now(),
      updated_at: db.fn.now(),
    });
    
    // Fetch the created user
    const newUser = await db<User>('users').where({ id: userId }).first();
    
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update an existing user
 */
export const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, email }: { name?: string; email?: string } = req.body;
    
    // Check if user exists
    const existingUser = await db<User>('users').where({ id }).first();
    
    if (!existingUser) {
      const error: CustomError = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }
    
    // Prepare update data
    const updateData: Partial<User> & { updated_at?: any } = { updated_at: db.fn.now() };
    
    if (name) updateData.name = name;
    if (email) {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        const error: CustomError = new Error('Invalid email format');
        error.statusCode = 400;
        return next(error);
      }
      updateData.email = email;
    }
    
    // Update user
    await db('users').where({ id }).update(updateData);
    
    // Fetch updated user
    const updatedUser = await db<User>('users').where({ id }).first();
    
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a user
 */
export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    
    // Check if user exists
    const user = await db<User>('users').where({ id }).first();
    
    if (!user) {
      const error: CustomError = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }
    
    // Delete user
    await db('users').where({ id }).del();
    
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: { id },
    });
  } catch (error) {
    next(error);
  }
};
