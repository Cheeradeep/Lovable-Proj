
import React, { createContext, useContext } from "react";
import { useAuthOperations } from "./useAuthOperations";
import { useAuthSession } from "./useAuthSession";
import { AuthContextType } from "./types";

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const {
    user,
    setUser,
    isLoading,
    setIsLoading,
    signUp,
    signIn,
    signOut,
  } = useAuthOperations();

  // Set up auth session
  useAuthSession(setUser, setIsLoading);

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signUp,
        signIn,
        signOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
