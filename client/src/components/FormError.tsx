import { FC } from 'react';

type FormErrorProps = {
  children: string;
};

const FormError: FC<FormErrorProps> = ({ children }) => (
  <p className="text-red-600">{children}</p>
);

export default FormError;
