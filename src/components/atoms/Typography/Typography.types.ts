export type Theme = 'dark' | 'light';
export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline';

export interface ITypographyProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  darkmode?: boolean;
  variant: Variant;
  centered?: boolean;
  color?: string;
  isbold?: boolean;
}
