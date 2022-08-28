import { FC, ReactElement } from 'react';
import { IconProps, Icon as IconType, IconSvgProps } from './Icon.types';
import * as Icons from './icon-svgs';

const iconVariants: {
  [k in IconType]: FC<IconSvgProps> | ((p: IconSvgProps) => ReactElement);
} = Icons;

const Icon = ({
  icon = 'ArrowBackFilled',
  ...rest
}: IconProps): ReactElement => {
  const IconSvg = iconVariants[icon || 'CancelFilled'];
  return <IconSvg {...rest} />;
};

export default Icon;
