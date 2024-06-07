import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    history.push("/home");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    history.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogout, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
