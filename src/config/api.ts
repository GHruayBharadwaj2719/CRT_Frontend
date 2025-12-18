// Backend API Configuration
// TODO: Replace with your actual backend port
export const API_BASE_URL = 'http://localhost:2719'; 
export const API_ENDPOINTS = {
  // Authentication endpoints
  SIGN_UP: `${API_BASE_URL}/auth/signup`,
  SIGN_IN: `${API_BASE_URL}/auth/signin`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  // PROGRESS endpoints
  SAVE_PROGRESS: (email: string) => `${API_BASE_URL}/progress/${email}`,
  GET_PROGRESS: (email: string) => `${API_BASE_URL}/progress/${email}`,
  // User endpoints
  GET_USER: `${API_BASE_URL}/user/profile`,
  UPDATE_USER: `${API_BASE_URL}/user/profile`,
  LESSONS_BY_CATEGORY: (category: string) =>
    `${API_BASE_URL}/api/lessons/${category}`,
};
