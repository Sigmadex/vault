import { useEffect } from 'react';
import './Typography.css';

import { ITypographyProps, Theme } from './Typography.types';

const TypoGraphy = (props: ITypographyProps) => {
  const { variant, children, darkmode, centered, color, isbold } = props;

  const theme: Theme = darkmode ? 'dark' : 'light';

  useEffect(() => {
    const root = document.getElementById('root')!;
    const isDark = theme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  const baseStyles = `text-light-primary-main dark:text-white overflow-hidden text-ellipsis whitespace-nowrap ${
    centered ? 'text-center' : ''
  }`;

  let VariantComponent = (props: ITypographyProps) => (
    <h1
      {...props}
      className={`text-8xl leading-[112px] tracking-[-1.5px] font-bold ${baseStyles}`}
    >
      {children}
    </h1>
  );

  if (variant === 'h2') {
    VariantComponent = (props) => (
      <h2
        {...props}
        className={`text-6xl leading-[72px] tracking-[-0.5px] font-bold ${baseStyles}`}
      >
        {children}
      </h2>
    );
  } else if (variant === 'h3') {
    VariantComponent = (props) => (
      <h3
        {...props}
        className={`text-5xl leading-[56px] font-bold ${baseStyles}`}
      >
        {children}
      </h3>
    );
  } else if (variant === 'h4') {
    VariantComponent = (props) => (
      <h4
        {...props}
        className={`text-[34px] leading-[42px] font-bold tracking-[0.25px] ${baseStyles}`}
      >
        {children}
      </h4>
    );
  } else if (variant === 'h5') {
    VariantComponent = (props) => (
      <h5
        {...props}
        className={`text-2xl leading-[32px] font-bold ${baseStyles}`}
      >
        {children}
      </h5>
    );
  } else if (variant === 'h6') {
    VariantComponent = (props) => (
      <h6
        {...props}
        className={`text-xl leading-[32px] font-bold tracking-[0.15px] ${baseStyles}`}
      >
        {children}
      </h6>
    );
  } else if (variant === 'body1') {
    VariantComponent = (props) => (
      <h6 {...props} className={`text-base tracking-[0.15px] ${baseStyles}`}>
        {children}
      </h6>
    );
  } else if (variant === 'body2') {
    VariantComponent = (props) => (
      <h6 {...props} className={`text-sm tracking-[0.17px] ${baseStyles}`}>
        {children}
      </h6>
    );
  } else if (variant === 'subtitle1') {
    VariantComponent = (props) => (
      <h6
        {...props}
        className={`text-base leading-7 tracking-[0.15px] ${baseStyles}`}
      >
        {children}
      </h6>
    );
  } else if (variant === 'subtitle2') {
    VariantComponent = (props) => (
      <h6
        {...props}
        className={`text-sm font-medium leading-[22px] tracking-[0.1px] ${baseStyles}`}
      >
        {children}
      </h6>
    );
  } else if (variant === 'caption') {
    VariantComponent = (props) => (
      <h6
        {...props}
        className={`text-xs leading-5 tracking-[0.4px] ${baseStyles}`}
      >
        {children}
      </h6>
    );
  } else if (variant === 'overline') {
    VariantComponent = (props) => (
      <h6
        {...props}
        className={`text-xs leading-8 tracking-[1px] uppercase ${baseStyles}`}
      >
        {children}
      </h6>
    );
  }
  return (
    <VariantComponent
      style={{ color: color || '', fontWeight: isbold ? 700 : '' }}
      {...props}
    />
  );
};

export default TypoGraphy;
