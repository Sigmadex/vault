export type Theme = 'dark' | 'light';
export type Variant = 'connect' | 'connected' | 'wrong_network';

export interface NavLink {
  name: string;
  link: string;
}

export interface INavbarProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  variant: Variant;
  logo?: string;
  connectedText?: string;
  buttonText?: string;
  rightIcon?: string;
  shadowed?: boolean;
}
