import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import TypoGraphy from '../Typography/Typography';
import './Navbar.css';

import { INavbarProps } from './Navbar.types';

const Navbar = (navbarProps: INavbarProps) => {
  const {
    variant = 'connect',
    logo = '',
    connectedText,
    buttonText,
    rightIcon = '',
    shadowed = true,
    ...props
  } = navbarProps;

  const [hasShadow, setHasShadow] = useState(false);

  const trackScrollPosition = () => {
    const y = window.scrollY;
    setHasShadow(!!y);
  };
  useEffect(() => {
    trackScrollPosition();
    window.addEventListener('scroll', trackScrollPosition);

    return () => {
      window.removeEventListener('scroll', trackScrollPosition);
    };
  }, []);
  const shadow = hasShadow || shadowed ? 'shadow-nav' : '';
  return (
    <nav
      {...props}
      className={`bg-transparent w-full px-6 h-24 z-50 flex justify-center sticky top-0 transition-all duration-500 items-center `}
    >
      <div className="w-full max-w-7xl flex justify-between items-center">
        <div className="flex items-center flex-1">
          <a href="/">
            <img srcSet={logo ? logo : '/Logo-1.png 2x'} alt="Logo" width={20} />
          </a>
        </div>
        <div className="flex items-center">
          <img
            srcSet={rightIcon ? rightIcon : '/navbar-right-icon.png'}
            alt={connectedText}
            width={27}
            className="mr-5"
          />
          {variant !== 'connected' ? (
            <Button
              variant={variant === 'wrong_network' ? 'contained' : 'alternate'}
              size="large"
            >
              {buttonText}
            </Button>
          ) : (
            <TypoGraphy variant="subtitle1" color='#fff'>{connectedText}</TypoGraphy>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
