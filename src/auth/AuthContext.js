import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (email) => {
    setIsAuthenticated(true);
    setCurrentUser({ email });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null); // Wylogowujemy użytkownika, ustawiając currentUser na null
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
