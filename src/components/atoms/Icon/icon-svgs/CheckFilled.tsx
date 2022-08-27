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
      d="M8.79499 15.875L4.62499 11.705L3.20499 13.115L8.79499 18.705L20.795 6.705L19.385 5.295L8.79499 15.875Z"
      fill={color}
    />
  </svg>
);

export default Icon;
