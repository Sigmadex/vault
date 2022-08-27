import { ILayoutProps } from './Layout.types';

const Layout = ({ variant, children, noPadding = false }: ILayoutProps) => {
  return (
    <div
      style={{ padding: noPadding ? 0 : '' }}
      className="w-full px-4 flex justify-center items-center"
    >
      {variant === 'wide' ? (
        <div className="w-full max-w-5xl">{children}</div>
      ) : variant === 'medium' ? (
        <div className="w-full max-w-lg">{children}</div>
      ) : (
        <div className="w-full max-w-xs">{children}</div>
      )}
    </div>
  );
};

export default Layout;
