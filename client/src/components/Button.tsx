import { FC } from 'react';

type ButtonType = 'submit' | 'button';

type ButtonProps = {
  children: string;
  type?: ButtonType;
};

const Button: FC<ButtonProps> = ({ children, type = 'submit' }) => (
  <button
    className="rounded-full p-2.5 text-sm font-medium bg-primary-600 text-white"
    type={type}
  >
    {children}
  </button>
);

export default Button;
