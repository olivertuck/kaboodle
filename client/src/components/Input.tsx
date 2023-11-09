import { ChangeEventHandler, FC } from 'react';

type InputProps = {
  name: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

const Input: FC<InputProps> = ({ name, placeholder, onChange, value }) => (
  <input
    className="bg-gray-100 text-sm rounded-full p-2.5"
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

export default Input;
