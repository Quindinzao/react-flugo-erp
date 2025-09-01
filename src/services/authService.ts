/* eslint-disable @typescript-eslint/no-explicit-any */
// External Libraries
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

// Services
import { auth } from "./firebase";

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error: any) {
    console.error("Erro no login:", error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error("Erro ao sair:", error.message);
    throw error;
  }
};
