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
      d="M2.99875 17.2512V21.0013H6.74875L17.8088 9.94125L14.0588 6.19125L2.99875 17.2512ZM20.7087 7.04125C21.0987 6.65125 21.0987 6.02125 20.7087 5.63125L18.3688 3.29125C17.9788 2.90125 17.3487 2.90125 16.9587 3.29125L15.1288 5.12125L18.8787 8.87125L20.7087 7.04125Z"
      fill={color}
    />
  </svg>
);

export default Icon;
