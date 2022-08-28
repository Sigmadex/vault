import { IconProps } from '../Icon/Icon.types';

export interface CloseIconProps {
  onClick: () => void;
  iconButtonProps?: Partial<IconProps>;
}

export interface IModalProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  hasCloseIcon?: boolean;
}
