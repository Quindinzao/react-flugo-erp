import type { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormProps {
  title: string;
  buttonTitle: string;
  defaultValue: any;
  onSubmit?: (data?: any) => void;
  children: ReactNode;
}