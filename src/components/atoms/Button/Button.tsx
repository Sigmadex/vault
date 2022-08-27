import './Button.css';

import { useEffect } from 'react';

import { IButtonProps, Theme } from './Button.types';

const IconRight = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
      fill="currentColor"
    />
  </svg>
);
const IconLeft = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
      fill="currentColor"
    />
  </svg>
);
const Button = (props: IButtonProps) => {
  const {
    variant = 'contained',
    color = 'primary',
    size = 'large',
    darkmode = false,
    iconLeft = false,
    iconRight = false,
    disabled = false,
    onClick,
    children,
  } = props;

  const theme: Theme = darkmode ? 'dark' : 'light';

  const baseStyles =
    'rounded-4xl transition-all duration-500 disabled:bg-black disabled:opacity-[0.12] disabled:text-[rgba(0, 0, 0, 0.26)] dark:disabled:bg-white dark:disabled:opacity-[0.12] dark:disabled:text-[rgba(255, 255, 255, 0.3)] relative disabled:cursor-not-allowed inline-flex items-center whitespace-nowrap';
  const padding = {
    large: 'py-2 px-5.5',
    medium: 'py-1.5 px-4',
    small: 'py-1 px-2.5',
  };

  const colors = {
    contained: {
      primary:
        'bg-light-primary-main dark:bg-dark-primary-main hover:bg-light-primary-dark dark:hover:bg-dark-primary-dark',
      secondary:
        'bg-light-secondary-main dark:bg-dark-secondary-main hover:bg-light-secondary-dark dark:hover:bg-dark-secondary-dark',
    },
    outlined: {
      primary:
        'border border-light-primary-main dark:border-light-primary-50p hover:bg-light-primary-8p',
      secondary:
        'border border-light-secondary-main dark:border-light-secondary-50p hover:bg-light-secondary-8p',
    },
    alternate: {
      primary:
        'border border-white dark:border-light-primary-50p hover:bg-light-primary-8p',
      secondary:
        'border border-light-secondary-main dark:border-light-secondary-50p hover:bg-light-secondary-8p',
    }
  };
  const fontColors = {
    contained: {
      primary: 'text-white dark:text-black',
      secondary: 'text-white dark:text-black',
    },
    outlined: {
      primary: 'text-light-primary-main dark:text-white',
      secondary: 'text-light-secondary-main',
    },
    alternate: {
      primary: 'text-white dark:text-white',
      secondary: 'text-white dark:text-white',
    },
  };
  const fontSizes = {
    small: 'text-small leading-small',
    medium: 'text-medium leading-medium',
    large: 'text-large leading-large',
  };
  const extraStyles = {
    contained: 'hover:shadow-button-light dark:hover:shadow-button-dark',
    outlined: '',
    alternate: '',
  };
  const classes = `${baseStyles} ${padding[size]} ${colors[variant][color]} ${fontColors[variant][color]} ${fontSizes[size]} ${extraStyles[variant]}`;

  useEffect(() => {
    const root = document.getElementById('root')!;
    const isDark = theme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event?.currentTarget) {
      const button = event.currentTarget as HTMLButtonElement;
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
      circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
      circle.classList.add('ripple');
      const ripple = button.getElementsByClassName('ripple')[0];

      if (ripple) {
        ripple.remove();
      }
      button.appendChild(circle);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(event);
    if (onClick) {
      onClick(event);
    }
  };

  const iconSize = size === 'small' ? 12 : size === 'medium' ? 14 : 16;

  return (
    <button
      onClick={(event) => handleClick(event)}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {iconLeft && (
        <span className="mr-3">
          <IconLeft size={iconSize} />
        </span>
      )}
      {children}
      {iconRight && (
        <span className="ml-3">
          <IconRight size={iconSize} />
        </span>
      )}
    </button>
  );
};

export default Button;
