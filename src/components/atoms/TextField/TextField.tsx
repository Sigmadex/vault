import { useEffect, useState } from 'react';
import './TextField.css';

import { IInputProps, Theme } from './TextField.types';

const TextField = (inputProps: IInputProps) => {
  const {
    darkmode = false,
    hasError = false,
    placeholder,
    helperText,
    type = 'text',
    leftIcon = false,
    rightIcon = false,
    variant = 'standard',
    ...props
  } = inputProps;
  const theme: Theme = darkmode ? 'dark' : 'light';
  const [inputType, setInputType] = useState(type);

  const toggleInputType = () => {
    if (type !== 'password') return null;
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  useEffect(() => {
    const root = document.getElementById('root')!;
    const isDark = theme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  const baseStyles =
    'transition-all duration-500 text-light-primary-main border-light-other-input hover:border-black focus:border-black pb-1.5 text-base leading-6 font-normal outline-none w-full disabled:opacity-25 dark:border-dark-other-standard-input-line dark:text-dark-primary-main';

  const standardVariant = 'border-b-2 bg-transparent';

  const iconColor = darkmode
    ? 'rgba(255, 255, 255, 0.56)'
    : 'rgba(64, 76, 85, 0.54)';

  const outlinedVariant = 'border-2 p-3 pb-3 rounded-lg dark:bg-transparent';

  const filledVariant =
    'p-3 pb-3 rounded-lg bg-light-other-filled-input dark:bg-dark-other-filled-input !border-b-2 rounded-bl-none rounded-br-none';

  const withLeftIcon = variant === 'standard' ? 'pl-7' : 'pl-10';

  const withRightIcon = 'pr-7';

  let VariantComponent = (props: IInputProps) => (
    <div className="relative w-64">
      {leftIcon && (
        <span
          className={`absolute ${
            variant === 'standard' ? 'left-0' : 'left-3 top-3'
          }`}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.94L7.392 11.66L7.2 11.868L4.368 14.764V13.036L10.32 6.94H12ZM5.008 6.94V17.5H3.728V6.94H5.008ZM7.52 10.844L12.048 17.5H10.512L6.464 11.564L7.52 10.844ZM20.874 8.028L21.162 9.164C21.1513 9.164 21.1353 9.164 21.114 9.164C21.0927 9.164 21.0713 9.164 21.05 9.164C20.5273 9.164 20.122 9.27067 19.834 9.484C19.5567 9.68667 19.418 10.0173 19.418 10.476L18.634 10.076C18.634 9.66 18.73 9.29733 18.922 8.988C19.114 8.67867 19.3753 8.444 19.706 8.284C20.0367 8.11333 20.3993 8.028 20.794 8.028C20.8047 8.028 20.8153 8.028 20.826 8.028C20.8473 8.028 20.8633 8.028 20.874 8.028ZM18.442 16.476C19.1993 16.476 19.7913 16.652 20.218 17.004C20.6447 17.3453 20.858 17.804 20.858 18.38C20.858 18.9027 20.682 19.356 20.33 19.74C19.9887 20.124 19.5247 20.4173 18.938 20.62C18.362 20.8333 17.7113 20.94 16.986 20.94C15.7273 20.94 14.7833 20.7267 14.154 20.3C13.5353 19.8733 13.226 19.3613 13.226 18.764C13.226 18.3373 13.3647 17.9533 13.642 17.612C13.93 17.2813 14.41 17.0947 15.082 17.052L14.97 17.292C14.6073 17.196 14.298 17.036 14.042 16.812C13.7967 16.5773 13.674 16.2413 13.674 15.804C13.674 15.3667 13.834 14.9933 14.154 14.684C14.4847 14.364 14.97 14.1667 15.61 14.092L16.458 14.524H16.298C15.7753 14.5773 15.402 14.7107 15.178 14.924C14.9647 15.1267 14.858 15.3507 14.858 15.596C14.858 15.8947 14.9647 16.1187 15.178 16.268C15.402 16.4067 15.7113 16.476 16.106 16.476H18.442ZM16.97 19.868C17.5887 19.868 18.0953 19.804 18.49 19.676C18.8953 19.548 19.194 19.3827 19.386 19.18C19.578 18.9773 19.674 18.7587 19.674 18.524C19.674 18.236 19.5567 18.0067 19.322 17.836C19.098 17.6653 18.6873 17.58 18.09 17.58H15.626C15.2847 17.58 14.9967 17.6653 14.762 17.836C14.5273 18.0173 14.41 18.2627 14.41 18.572C14.41 18.9667 14.634 19.2813 15.082 19.516C15.5407 19.7507 16.17 19.868 16.97 19.868ZM16.858 9.34C17.498 9.34 18.0633 9.45733 18.554 9.692C19.0553 9.916 19.4447 10.2307 19.722 10.636C19.9993 11.0413 20.138 11.5107 20.138 12.044C20.138 12.5667 19.9993 13.036 19.722 13.452C19.4447 13.8573 19.0553 14.1773 18.554 14.412C18.0633 14.636 17.498 14.748 16.858 14.748C15.802 14.748 14.9913 14.4973 14.426 13.996C13.8607 13.484 13.578 12.8333 13.578 12.044C13.578 11.5107 13.7167 11.0413 13.994 10.636C14.282 10.2307 14.6713 9.916 15.162 9.692C15.6527 9.45733 16.218 9.34 16.858 9.34ZM16.858 10.38C16.3033 10.38 15.8393 10.5347 15.466 10.844C15.0927 11.1427 14.906 11.5427 14.906 12.044C14.906 12.5347 15.0927 12.9347 15.466 13.244C15.8393 13.5533 16.3033 13.708 16.858 13.708C17.4127 13.708 17.8767 13.5533 18.25 13.244C18.6233 12.9347 18.81 12.5347 18.81 12.044C18.81 11.5427 18.6233 11.1427 18.25 10.844C17.8767 10.5347 17.4127 10.38 16.858 10.38Z"
              fill={iconColor}
            />
          </svg>
        </span>
      )}
      {(rightIcon || type === 'password') && (
        <button
          onClick={toggleInputType}
          className={`absolute ${
            variant === 'standard' ? 'right-0' : 'right-3 top-3'
          }`}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5ZM12 17.5C9.24 17.5 7 15.26 7 12.5C7 9.74 9.24 7.5 12 7.5C14.76 7.5 17 9.74 17 12.5C17 15.26 14.76 17.5 12 17.5ZM12 9.5C10.34 9.5 9 10.84 9 12.5C9 14.16 10.34 15.5 12 15.5C13.66 15.5 15 14.16 15 12.5C15 10.84 13.66 9.5 12 9.5Z"
              fill={iconColor}
            />
          </svg>
        </button>
      )}

      <input
        {...props}
        type={inputType}
        data-error={
          hasError ? (variant === 'standard' ? 'true' : 'full') : null
        }
        placeholder=" "
        className={`${baseStyles} ${leftIcon ? withLeftIcon : ''} ${
          rightIcon || type === 'password' ? withRightIcon : ''
        } ${
          variant === 'standard'
            ? standardVariant
            : variant === 'filled'
            ? filledVariant
            : outlinedVariant
        }`}
      />
      {variant === 'standard' && (
        <span
          data-visible={leftIcon}
          className="floating-label text-light-text-secondary dark:text-dark-text-secondary absolute left-0 pointer-events-none"
        >
          {placeholder}
        </span>
      )}
      {(variant === 'outlined' || variant === 'filled') && (
        <span
          data-visible={leftIcon}
          className="floating-label-2 text-light-text-secondary dark:text-dark-text-secondary absolute left-3 top-[14px] pointer-events-none"
        >
          {placeholder}
        </span>
      )}
      {!!helperText?.length && (
        <p
          className={`text-light-text-secondary dark:text-dark-text-secondary text-xs leading-5 mt-[3px] whitespace-nowrap text-ellipsis overflow-hidden ${
            variant === 'outlined' ? 'ml-3' : ''
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );

  return <VariantComponent {...props} variant={variant} />;
};

export default TextField;
