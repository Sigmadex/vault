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
      d="M12 8.29501L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29501Z"
      fill={color}
    />
  </svg>
);

export default Icon;
