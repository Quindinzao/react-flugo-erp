// External Libraries
import { collection, addDoc, getDocs, FirestoreError } from "firebase/firestore";

// Services
import { db } from "./firebase";

// Interfaces
import type { EmployeeProps } from "../interfaces/EmployeeProps";

export const saveEmployee = async (data: EmployeeProps) => {
  try {
    await addDoc(collection(db, "employees"), data);
    alert("Funcionário salvo com sucesso!");
  } catch (error) {
    const e = error as FirestoreError;

    switch (e.code) {
      case "permission-denied":
        alert("🚫 Você não tem permissão para salvar funcionários.");
        break;
      case "unauthenticated":
        alert("🔒 Usuário não autenticado. Faça login para continuar.");
        break;
      case "unavailable":
        alert("🌐 Serviço indisponível. Verifique sua conexão com a internet.");
        break;
      case "already-exists":
        alert("⚠️ Documento já existe. Verifique os dados antes de salvar.");
        break;
      default:
        alert("❌ Erro inesperado ao adicionar funcionário:" + e.message);
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
        alert("🚫 Você não tem permissão para ler os funcionários.");
        break;
      case "unauthenticated":
        alert("🔒 Usuário não autenticado. Faça login para acessar os dados.");
        break;
      case "unavailable":
        alert("🌐 Serviço indisponível. Tente novamente mais tarde.");
        break;
      default:
        alert("❌ Erro inesperado ao buscar funcionários:" + e.message);
    }

    return [];
  }
};
