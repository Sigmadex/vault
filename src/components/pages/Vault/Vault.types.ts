import { ITableProps } from './../../atoms/Table/Table.types';
import { IFooterProps } from '../../atoms/Footer/Footer.types';
import { INavbarProps } from '../../atoms/Navbar/Navbar.types';

export interface VaultCardType {
  icon: string;
  timerIcon?: string;
  body1: string;
  body2: string;
  change?: string;
}

export interface IVaultProps {
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  buttonText: string;
  title: string;
  caption: string;
  icon: string;
  icon1: string;
  icon_warning: string;
  tableProps: ITableProps;
  cards: VaultCardType[];
  warning: string;
}
