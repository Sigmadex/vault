import { Story, Meta } from '@storybook/react/types-6-0';
import { IconProps, IconSizes } from './Icon.types';
import Icon from './Icon';

export default {
  title: 'Core/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => {
  return <Icon {...args} />;
};

const props = {
  color: 'rgba(64, 76, 85, 0.54)',
  size: IconSizes['2XL'],
};

export const ArrowBackFilled = Template.bind({});
ArrowBackFilled.args = {
  icon: 'ArrowBackFilled',
  ...props,
};

export const ArrowForwardFilled = Template.bind({});
ArrowForwardFilled.args = {
  icon: 'ArrowForwardFilled',
  ...props,
};

export const CloseFilled = Template.bind({});
CloseFilled.args = {
  icon: 'CloseFilled',
  ...props,
};

export const ExpandMoreFilled = Template.bind({});
ExpandMoreFilled.args = {
  icon: 'ExpandMoreFilled',
  ...props,
};

export const ExpandLessFilled = Template.bind({});
ExpandLessFilled.args = {
  icon: 'ExpandLessFilled',
  ...props,
};

export const ChevronLeftFilled = Template.bind({});
ChevronLeftFilled.args = {
  icon: 'ChevronLeftFilled',
  ...props,
};

export const ArrowDownwardFilled = Template.bind({});
ArrowDownwardFilled.args = {
  icon: 'ArrowDownwardFilled',
  ...props,
};

export const ArrowDropDownFilled = Template.bind({});
ArrowDropDownFilled.args = {
  icon: 'ArrowDropDownFilled',
  ...props,
};

export const ChevronRightFilled = Template.bind({});
ChevronRightFilled.args = {
  icon: 'ChevronRightFilled',
  ...props,
};

export const MoreHorizFilled = Template.bind({});
MoreHorizFilled.args = {
  icon: 'MoreHorizFilled',
  ...props,
};

export const MenuFilled = Template.bind({});
MenuFilled.args = {
  icon: 'MenuFilled',
  ...props,
};

export const ArrowUpwardFilled = Template.bind({});
ArrowUpwardFilled.args = {
  icon: 'ArrowUpwardFilled',
  ...props,
};

export const CheckFilled = Template.bind({});
CheckFilled.args = {
  icon: 'CheckFilled',
  ...props,
};

export const MoreVertFilled = Template.bind({});
MoreVertFilled.args = {
  icon: 'MoreVertFilled',
  ...props,
};

export const PersonFilled = Template.bind({});
PersonFilled.args = {
  icon: 'PersonFilled',
  ...props,
};

export const PersonAddFilled = Template.bind({});
PersonAddFilled.args = {
  icon: 'PersonAddFilled',
  ...props,
};

export const NotificationsFilled = Template.bind({});
NotificationsFilled.args = {
  icon: 'NotificationsFilled',
  ...props,
};

export const PeopleFilled = Template.bind({});
PeopleFilled.args = {
  icon: 'PeopleFilled',
  ...props,
};

export const CheckBoxOutlineBlankOutlined = Template.bind({});
CheckBoxOutlineBlankOutlined.args = {
  icon: 'CheckBoxOutlineBlankOutlined',
  ...props,
};

export const MoreVertOutlined = Template.bind({});
MoreVertOutlined.args = {
  icon: 'MoreVertOutlined',
  ...props,
};

export const StarOutlineFilled = Template.bind({});
StarOutlineFilled.args = {
  icon: 'StarOutlineFilled',
  ...props,
};

export const IndeterminateCheckBoxFilled = Template.bind({});
IndeterminateCheckBoxFilled.args = {
  icon: 'IndeterminateCheckBoxFilled',
  ...props,
};

export const QueryBuilderFilled = Template.bind({});
QueryBuilderFilled.args = {
  icon: 'QueryBuilderFilled',
  ...props,
};

export const AddFilled = Template.bind({});
AddFilled.args = {
  icon: 'AddFilled',
  ...props,
};

export const RemoveRedEyeFilled = Template.bind({});
RemoveRedEyeFilled.args = {
  icon: 'RemoveRedEyeFilled',
  ...props,
};

export const ChevronRightOutlined = Template.bind({});
ChevronRightOutlined.args = {
  icon: 'ChevronRightOutlined',
  ...props,
};

export const ArrowDropDownOutlined = Template.bind({});
ArrowDropDownOutlined.args = {
  icon: 'ArrowDropDownOutlined',
  ...props,
};

export const CachedFilled = Template.bind({});
CachedFilled.args = {
  icon: 'CachedFilled',
  ...props,
};

export const ChevronLeftOutlined = Template.bind({});
ChevronLeftOutlined.args = {
  icon: 'ChevronLeftOutlined',
  ...props,
};

export const StarHalfFilled = Template.bind({});
StarHalfFilled.args = {
  icon: 'StarHalfFilled',
  ...props,
};

export const FavoriteFilled = Template.bind({});
FavoriteFilled.args = {
  icon: 'FavoriteFilled',
  ...props,
};

export const CheckCircleFilled = Template.bind({});
CheckCircleFilled.args = {
  icon: 'CheckCircleFilled',
  ...props,
};

export const CheckCircleOutlined = Template.bind({});
CheckCircleOutlined.args = {
  icon: 'CheckCircleOutlined',
  ...props,
};

export const DateRangeFilled = Template.bind({});
DateRangeFilled.args = {
  icon: 'DateRangeFilled',
  ...props,
};

export const InfoOutlined = Template.bind({});
InfoOutlined.args = {
  icon: 'InfoOutlined',
  ...props,
};

export const LogoutFilled = Template.bind({});
LogoutFilled.args = {
  icon: 'LogoutFilled',
  ...props,
};

export const CancelFilled = Template.bind({});
CancelFilled.args = {
  icon: 'CancelFilled',
  ...props,
};

export const RadioButtonUncheckedFilled = Template.bind({});
RadioButtonUncheckedFilled.args = {
  icon: 'RadioButtonUncheckedFilled',
  ...props,
};

export const CheckBoxFilled = Template.bind({});
CheckBoxFilled.args = {
  icon: 'CheckBoxFilled',
  ...props,
};

export const StarFilled = Template.bind({});
StarFilled.args = {
  icon: 'StarFilled',
  ...props,
};

export const ReceiptFilled = Template.bind({});
ReceiptFilled.args = {
  icon: 'ReceiptFilled',
  ...props,
};

export const SearchFilled = Template.bind({});
SearchFilled.args = {
  icon: 'SearchFilled',
  ...props,
};

export const SettingsFilled = Template.bind({});
SettingsFilled.args = {
  icon: 'SettingsFilled',
  ...props,
};

export const SpaceDashboardOutlined = Template.bind({});
SpaceDashboardOutlined.args = {
  icon: 'SpaceDashboardOutlined',
  ...props,
};

export const SpaceDashboardFilled = Template.bind({});
SpaceDashboardFilled.args = {
  icon: 'SpaceDashboardFilled',
  ...props,
};

export const RadioButtonCheckedFilled = Template.bind({});
RadioButtonCheckedFilled.args = {
  icon: 'RadioButtonCheckedFilled',
  ...props,
};

export const StarBorderFilled = Template.bind({});
StarBorderFilled.args = {
  icon: 'StarBorderFilled',
  ...props,
};

export const EditFilled = Template.bind({});
EditFilled.args = {
  icon: 'EditFilled',
  ...props,
};

export const PhotoFilled = Template.bind({});
PhotoFilled.args = {
  icon: 'PhotoFilled',
  ...props,
};

export const PhotoOutlined = Template.bind({});
PhotoOutlined.args = {
  icon: 'PhotoOutlined',
  ...props,
};

export const ShoppingCartFilled = Template.bind({});
ShoppingCartFilled.args = {
  icon: 'ShoppingCartFilled',
  ...props,
};

export const AccountCircleFilled = Template.bind({});
AccountCircleFilled.args = {
  icon: 'AccountCircleFilled',
  ...props,
};

export const ErrorFilled = Template.bind({});
ErrorFilled.args = {
  icon: 'ErrorFilled',
  ...props,
};

export const WarningAmberOutlined = Template.bind({});
WarningAmberOutlined.args = {
  icon: 'WarningAmberOutlined',
  ...props,
};

export const ErrorOutline = Template.bind({});
ErrorOutline.args = {
  icon: 'ErrorOutline',
  ...props,
};

export const WarningFilled = Template.bind({});
WarningFilled.args = {
  icon: 'WarningFilled',
  ...props,
};

export const FolderFilled = Template.bind({});
FolderFilled.args = {
  icon: 'FolderFilled',
  ...props,
};

export const CloudFilled = Template.bind({});
CloudFilled.args = {
  icon: 'CloudFilled',
  ...props,
};

export const FormatAlignLeftFilled = Template.bind({});
FormatAlignLeftFilled.args = {
  icon: 'FormatAlignLeftFilled',
  ...props,
};

export const LocationOnFilled = Template.bind({});
LocationOnFilled.args = {
  icon: 'LocationOnFilled',
  ...props,
};

export const ContentCutFilled = Template.bind({});
ContentCutFilled.args = {
  icon: 'ContentCutFilled',
  ...props,
};

export const ContentPasteOutlined = Template.bind({});
ContentPasteOutlined.args = {
  icon: 'ContentPasteOutlined',
  ...props,
};

export const ContentCopyFilled = Template.bind({});
ContentCopyFilled.args = {
  icon: 'ContentCopyFilled',
  ...props,
};

export const MailFilled = Template.bind({});
MailFilled.args = {
  icon: 'MailFilled',
  ...props,
};
