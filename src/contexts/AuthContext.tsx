/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
// External Libraries
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { type User, onAuthStateChanged } from "firebase/auth";

// Services
import { auth } from "../services/firebase";
import { login as signIn, logout as signOut } from "../services/authService";

// Interfaces
import type { AuthContextProps } from "../interfaces/AuthContextProps";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    });
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signIn(email, password);
      setUser(userCredential.user);
    } catch (error: any) {
      console.error("Erro ao fazer login:", error.message);
      alert("Falha ao fazer login: " + error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error: any) {
      console.error("Erro ao fazer logout:", error.message);
      alert("Falha ao sair: " + error.message);
      throw error;
    }
  };
  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
