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
    <path
      d="M11 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H11V21ZM13 21H19C20.1 21 21 20.1 21 19V12H13V21ZM21 10V5C21 3.9 20.1 3 19 3H13V10H21Z"
      fill={color}
    />
  </svg>
);

export default Icon;
