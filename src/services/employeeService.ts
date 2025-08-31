// External Libraries
import { collection, addDoc, getDocs } from "firebase/firestore";

// Services
import { db } from "./firebase";

// Interfaces
import type { EmployeeProps } from "../interfaces/EmployeeProps";

export const saveEmployee = async (data: EmployeeProps) => {
  try {
    const docRef = await addDoc(collection(db, "employees"), data);
    console.log("Employee saved with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding employee: ", e);
  }
};

export const getEmployees = async (): Promise<EmployeeProps[]> => {
  const querySnapshot = await getDocs(collection(db, "employees"));
  const employees: EmployeeProps[] = [];

  querySnapshot.forEach((doc) => {
    employees.push({
      id: doc.id,
      ...doc.data(),
    } as EmployeeProps);
  });

  return employees;
};