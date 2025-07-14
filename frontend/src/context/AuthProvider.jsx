import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const initialUser =
    Cookies.get("jwt") || localStorage.getItem("users");
    
  const [authUser, setAuthUser] = useState(
    initialUser ? JSON.parse(initialUser) : undefined
  );
    
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);