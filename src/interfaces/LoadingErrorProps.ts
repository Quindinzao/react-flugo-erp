import type { ReactNode } from "react";

export interface LoadingErrorProps {
  error: string | null;
  loading: boolean;
  children: ReactNode;
}