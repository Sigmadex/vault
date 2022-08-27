import { ReactElement } from 'react';
import { IconSizes, IconSvgProps } from '../Icon.types';

const Icon = ({
  color = 'black',
  size = IconSizes.SM,
}: IconSvgProps): ReactElement => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={color} />
  </svg>
);

export default Icon;
