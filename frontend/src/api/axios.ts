import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Define types for User
export interface User {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export interface UserCreateData {
  name: string;
  email: string;
}

export interface UserUpdateData {
  name?: string;
  email?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
  message?: string;
}

// Get API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request interceptor
 * Add authentication token or other headers before request is sent
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor
 * Handle errors globally
 */
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data);
      
      // Handle specific status codes
      if (error.response.status === 401) {
        // Unauthorized - redirect to login
        // window.location.href = '/login';
      } else if (error.response.status === 404) {
        console.error('Resource not found');
      } else if (error.response.status >= 500) {
        console.error('Server error');
      }
    } else if (error.request) {
      // Request made but no response received
      console.error('Network error - no response received');
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

/**
 * User API methods
 */
export const userAPI = {
  // Get all users
  getAll: (): Promise<AxiosResponse<ApiResponse<User[]>>> => 
    axiosInstance.get('/users'),
  
  // Get user by ID
  getById: (id: number | string): Promise<AxiosResponse<ApiResponse<User>>> => 
    axiosInstance.get(`/users/${id}`),
  
  // Create new user
  create: (userData: UserCreateData): Promise<AxiosResponse<ApiResponse<User>>> => 
    axiosInstance.post('/users', userData),
  
  // Update user
  update: (id: number | string, userData: UserUpdateData): Promise<AxiosResponse<ApiResponse<User>>> => 
    axiosInstance.put(`/users/${id}`, userData),
  
  // Delete user
  delete: (id: number | string): Promise<AxiosResponse<ApiResponse<{ id: string | number }>>> => 
    axiosInstance.delete(`/users/${id}`),
};

export default axiosInstance;
