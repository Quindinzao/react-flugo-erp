// External Libraries
import { collection, addDoc, getDocs, FirestoreError } from "firebase/firestore";

// Services
import { db } from "./firebase";

// Interfaces
import type { EmployeeProps } from "../interfaces/EmployeeProps";

export const saveEmployee = async (data: EmployeeProps) => {
  try {
    await addDoc(collection(db, "employees"), data);
  } catch (error) {
    const e = error as FirestoreError;

    switch (e.code) {
      case "permission-denied":
        throw new Error("🚫 Você não tem permissão para salvar funcionários.");
      case "unauthenticated":
        throw new Error("🔒 Usuário não autenticado. Faça login para continuar.");
      case "unavailable":
        throw new Error("🌐 Serviço indisponível. Verifique sua conexão com a internet.");
      case "already-exists":
        throw new Error("⚠️ Documento já existe. Verifique os dados antes de salvar.");
      default:
        throw new Error("❌ Erro inesperado ao adicionar funcionário:" + e.message);
    }
  }
};

export const getEmployees = async (): Promise<EmployeeProps[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "employees"));
    const employees: EmployeeProps[] = [];

    querySnapshot.forEach((doc) => {
      employees.push({
        id: doc.id,
        ...doc.data(),
      } as EmployeeProps);
    });

    return employees;
  } catch (error) {
    const e = error as FirestoreError;

    switch (e.code) {
      case "permission-denied":
        throw new Error("🚫 Você não tem permissão para ler os funcionários.");
      case "unauthenticated":
        throw new Error("🔒 Usuário não autenticado. Faça login para acessar os dados.");
      case "unavailable":
        throw new Error("🌐 Serviço indisponível. Tente novamente mais tarde.");
      default:
        throw new Error("❌ Erro inesperado ao buscar funcionários:" + e.message);
    }
  }
};
