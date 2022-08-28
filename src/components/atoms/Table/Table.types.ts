import { IButtonProps } from '../Button/Button.types';

export type tableKeys = string;

export type RowType = {
  [K in tableKeys]: string;
};
export interface HeaderType {
  key: tableKeys;
  display: string;
}
export interface IHeaderProps {
  key: tableKeys;
  display: string;
}

export interface SelectedRowProps {
  firstTitle: string;
  secondTitle: string;
  buttons: IButtonProps[];
  caption: string;
}

export interface ITableProps {
  header: IHeaderProps[];
  rows: RowType[];
  selected: SelectedRowProps;
}
