import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  isAuthenticated: false,
  login: null,
  logOut: null,
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const localData = localStorage.getItem("isAuthenticated");
  const initialAuth = localData ? JSON.parse(localData) : false;
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuth || false);
  const login = () => {
    //will handle fetch api to verify user, in this case assuming data has been verified
    setIsAuthenticated(true); 
    navigate("/");
  };
  const logOut = () => {
    setIsAuthenticated(false);
    navigate("/authenticate");
  };
  const value = {
    isAuthenticated,
    login,
    logOut,
  };
  // @ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
