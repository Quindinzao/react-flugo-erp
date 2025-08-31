/* eslint-disable @typescript-eslint/no-explicit-any */
interface StepProps {
  title: string;
  content: React.ComponentType;
}

export interface StepFormProps {
  steps: StepProps[];
  onFinish?: (data: any) => void;
  defaultValue: any;
}

export interface StepIndicatorProps {
  steps: {
    stepNumber: number;
    label: string;
  }[];
  currentStep: number;
}

export interface StepItemProps {
  stepNumber: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

export interface StepAvatarProps {
  isDone: boolean;
}