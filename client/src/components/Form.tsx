import { FC, FormEventHandler, ReactNode } from 'react';

type FormProps = {
  children: ReactNode;
  onSubmit: FormEventHandler;
};

const Form: FC<FormProps> = ({ children, onSubmit }) => (
  <form className="flex flex-col gap-4" onSubmit={onSubmit}>
    {children}
  </form>
);

export default Form;
