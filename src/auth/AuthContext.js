import React, { createContext, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      //setCurrentUser({ email: 'example@example.com' });
    } else {
      //history.push('/login');
    }
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setCurrentUser(null);
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ currentUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};