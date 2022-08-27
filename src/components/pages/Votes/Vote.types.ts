import { ITableProps } from '../../atoms/Table/Table.types';
import { IFooterProps } from '../../atoms/Footer/Footer.types';
import { INavbarProps } from '../../atoms/Navbar/Navbar.types';

export interface VoteCardType {
  icon?: string;
  timerIcon?: string;
  body1: string;
  body2: string;
  change?: string;
}
export interface PortalCardType {
  icon?: string;
  body1: string;
  body2: string;
}
export interface IVoteProps {
  navbarProps: INavbarProps;
  footerProps: IFooterProps;
  buttonText: string;
  title: string;
  caption: string;
  icon: string;
  icon1: string;
  icon_warning: string;
  tableProps: ITableProps;
  cards: VoteCardType[];
  portalCards: PortalCardType[];
  isConnect: boolean;
  warning: string;
}
