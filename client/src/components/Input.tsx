import { ChangeEventHandler, FC } from 'react';

type InputType = 'text' | 'number';

type InputProps = {
  name: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number;
  type?: InputType;
};

const Input: FC<InputProps> = ({
  name,
  placeholder,
  onChange,
  value,
  type,
}) => (
  <input
    className="bg-gray-100 text-sm rounded-full p-2.5"
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    type={type}
  />
);

export default Input;
