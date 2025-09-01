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
    switch (error.code) {
      case "auth/invalid-email":
        throw new Error("O e-mail fornecido é inválido.");
      case "auth/user-disabled":
        throw new Error("Esta conta foi desativada.");
      case "auth/user-not-found":
        throw new Error("Nenhum usuário encontrado com este e-mail.");
      case "auth/wrong-password":
        throw new Error("Senha incorreta.");
      default:
        throw new Error(`Erro no login: ${error.message}`);
    }
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error("Erro ao sair:", error.message);
    throw new Error("Não foi possível sair. Tente novamente.");
  }
};