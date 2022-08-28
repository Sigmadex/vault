export type Variant = 'contained' | 'outlined' | 'alternate';
export type Size = 'small' | 'medium' | 'large';
export type Theme = 'dark' | 'light';
export type Color = 'primary' | 'secondary';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size?: Size;
  color?: Color;
  darkmode?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
}
