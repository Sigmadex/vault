import { ReactNode } from 'react';

export type Variant = 'wide' | 'medium' | 'small';

export interface ILayoutProps {
  variant: Variant;
  children: ReactNode;
  noPadding?: boolean;
}
