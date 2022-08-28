import { FC } from 'react';
import { IModalProps } from './Dropdown.types';
import './Dropdown.css';

export const Dropdown: FC<IModalProps> = ({ open, children, onClose }) => (
  <>
    {open && (
      <div className="flex justify-center items-center absolute top-14 left-0 z-[1000] animate-modal">
        <div className="bg-white p-5 min-w-[300px] rounded-[20px] shadow-dropdown z-20 relative">
          {children}
        </div>
        <button
          className="block fixed z-[1] w-screen h-screen bg-black opacity-0"
          type="button"
          aria-label="close"
          aria-labelledby={'Close Modal'}
          onClick={onClose}
        />
      </div>
    )}
  </>
);

const ModalPortal: FC<IModalProps> = ({
  open,
  children,
  onClose,
  ...otherProps
}) => (
  <Dropdown open={open} onClose={onClose} {...otherProps}>
    {children}
  </Dropdown>
);

export default ModalPortal;
