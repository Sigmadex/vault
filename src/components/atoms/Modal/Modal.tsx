import { FC } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../Icon/Icon';
import { IconSizes } from '../Icon/Icon.types';
import { CloseIconProps, IModalProps } from './Modal.types';
import './Modal.css';

export const ModalCloseIcon: FC<CloseIconProps> = ({
  onClick,
  iconButtonProps,
  ...otherProps
}) => (
  <div {...otherProps}>
    <button onClick={onClick} className="absolute top-2 right-2">
      <Icon
        icon="CloseFilled"
        size={IconSizes.MD}
        color="black"
        {...iconButtonProps}
      />
    </button>
  </div>
);

export const Modal: FC<IModalProps> = ({
  open,
  children,
  onClose,
  hasCloseIcon = false,
}) => (
  <>
    {open && (
      <div className="flex justify-center items-center fixed inset-0 z-[1000] animate-modal">
        <button
          className="block fixed z-[1] w-full h-full bg-black opacity-30"
          type="button"
          aria-label="close"
          aria-labelledby={'Close Modal'}
          onClick={() => onClose()}
        />
        <div className="bg-white py-8 px-12 rounded-[10px] shadow-modal z-[2] relative">
          {hasCloseIcon && <ModalCloseIcon onClick={() => onClose()} />}
          {children}
        </div>
      </div>
    )}
  </>
);

const ModalPortal: FC<IModalProps> = ({
  open,
  children,
  onClose,
  ...otherProps
}) => {
  const targetModalContainer = document.body;
  return targetModalContainer ? (
    ReactDOM.createPortal(
      <Modal open={open} onClose={onClose} {...otherProps}>
        {children}
      </Modal>,
      targetModalContainer,
    )
  ) : (
    <></>
  );
};

export default ModalPortal;
