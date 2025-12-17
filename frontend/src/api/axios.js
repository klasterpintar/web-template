import axios from 'axios';

// Get API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const axiosInstance = axios.create({
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
  (config) => {
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
  getAll: () => axiosInstance.get('/users'),
  
  // Get user by ID
  getById: (id) => axiosInstance.get(`/users/${id}`),
  
  // Create new user
  create: (userData) => axiosInstance.post('/users', userData),
  
  // Update user
  update: (id, userData) => axiosInstance.put(`/users/${id}`, userData),
  
  // Delete user
  delete: (id) => axiosInstance.delete(`/users/${id}`),
};

export default axiosInstance;
