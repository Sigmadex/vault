import TypoGraphy from '../Typography/Typography';
import './Footer.css';

import { IFooterProps } from './Footer.types';

const Footer = (footerProps: IFooterProps) => {
  const { copyRightText, rightIcon, rightText, ...props } = footerProps;

  return (
    <footer
      {...props}
      className="bg-transparent w-full p-6 z-10 flex justify-center items-center"
    >
      <div className="w-full max-w-7xl flex justify-between items-center">
        <TypoGraphy variant="body2">{copyRightText}</TypoGraphy>
        <div className="flex items-center">
          <TypoGraphy variant="body2">{rightText}</TypoGraphy>
          <img
            srcSet={rightIcon ? rightIcon : '/footer-icon.png 2x'}
            alt={rightText}
            width={20}
            className="ml-5"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
