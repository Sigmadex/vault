export type Theme = 'dark' | 'light';
export type Variant = 'standard' | 'filled' | 'outlined';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  darkmode?: boolean;
  variant: Variant;
  hasError?: boolean;
  helperText?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
}
