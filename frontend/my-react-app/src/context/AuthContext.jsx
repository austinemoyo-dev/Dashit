import { createContext, useState } from 'react';
import { authAPI } from '../api/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initialize state directly from localStorage (no effect needed)
  const [user, setUser] = useState(() => {
    const token = authAPI.getToken();
    return token ? { token } : null;
  });
  
  const [loading, setLoading] = useState(false);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    authAPI.logout();
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;