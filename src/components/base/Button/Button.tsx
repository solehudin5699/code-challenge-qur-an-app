import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, className = '', children, ...rest }) => {
  return (
    <button
      className={clsx('bg-primary-200 hover:bg-primary-100 text-white font-bold py-2 px-4 rounded', className)}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => {},
};

export default Button;
