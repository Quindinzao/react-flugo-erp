/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DropBoxProps {
  name: string;
  control: any;
  required?: string;
  error?: boolean;
  id: string;
  labelId: string;
  label: string;
  items: string[];
}