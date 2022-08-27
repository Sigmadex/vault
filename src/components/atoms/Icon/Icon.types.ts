export type Icon =
  | 'ArrowBackFilled'
  | 'CloseFilled'
  | 'ArrowForwardFilled'
  | 'ExpandMoreFilled'
  | 'ExpandLessFilled'
  | 'ChevronLeftFilled'
  | 'ArrowDownwardFilled'
  | 'ArrowDropDownFilled'
  | 'ChevronRightFilled'
  | 'MoreHorizFilled'
  | 'MenuFilled'
  | 'ArrowUpwardFilled'
  | 'CheckFilled'
  | 'MoreHorizFilled'
  | 'MoreVertFilled'
  | 'PersonFilled'
  | 'PersonAddFilled'
  | 'NotificationsFilled'
  | 'PeopleFilled'
  | 'CheckBoxOutlineBlankOutlined'
  | 'MoreVertOutlined'
  | 'StarOutlineFilled'
  | 'IndeterminateCheckBoxFilled'
  | 'QueryBuilderFilled'
  | 'AddFilled'
  | 'RemoveRedEyeFilled'
  | 'ChevronRightOutlined'
  | 'ArrowDropDownOutlined'
  | 'CachedFilled'
  | 'ChevronLeftOutlined'
  | 'StarHalfFilled'
  | 'FavoriteFilled'
  | 'CheckCircleFilled'
  | 'CheckCircleOutlined'
  | 'DateRangeFilled'
  | 'InfoOutlined'
  | 'LogoutFilled'
  | 'CancelFilled'
  | 'RadioButtonUncheckedFilled'
  | 'CheckBoxFilled'
  | 'StarFilled'
  | 'ReceiptFilled'
  | 'SearchFilled'
  | 'SettingsFilled'
  | 'SpaceDashboardOutlined'
  | 'SpaceDashboardFilled'
  | 'RadioButtonCheckedFilled'
  | 'StarBorderFilled'
  | 'EditFilled'
  | 'PhotoFilled'
  | 'PhotoOutlined'
  | 'ShoppingCartFilled'
  | 'AccountCircleFilled'
  | 'ErrorFilled'
  | 'WarningAmberOutlined'
  | 'ErrorOutline'
  | 'WarningFilled'
  | 'FolderFilled'
  | 'CloudFilled'
  | 'FormatAlignLeftFilled'
  | 'LocationOnFilled'
  | 'ContentCutFilled'
  | 'ContentPasteOutlined'
  | 'ContentCopyFilled'
  | 'MailFilled';

export enum IconSizes {
  XXS = '12',
  XS = '14',
  SM = '16',
  MD = '18',
  LG = '20',
  XL = '22',
  '2XL' = '24',
  '4XL' = '28',
  '8xl' = '32',
  'MAX' = '64',
}

export interface IconSvgProps {
  color: string;
  size?: IconSizes;
}

export interface IconProps extends IconSvgProps {
  icon?: Icon;
  size?: IconSizes;
}
