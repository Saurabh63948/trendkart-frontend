import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for authentication
const AuthContext = createContext();

// Create a custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to provide the context to the entire app
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // On component mount, check if user is logged in by checking token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    // If token exists, user is logged in, otherwise logged out
    setIsLoggedIn(!!token); 
  }, []); // Empty dependency array means this runs once when the component mounts

  const login = (token) => {
    localStorage.setItem('token', token); // Store token in localStorage
    setIsLoggedIn(true); // Update state to logged in
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setIsLoggedIn(false); // Update state to logged out
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
