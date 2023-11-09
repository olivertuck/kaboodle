import { ChangeEventHandler, FC } from 'react';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: Option[];
};

const Select: FC<SelectProps> = ({ name, value, onChange, options }) => (
  <select
    className="bg-gray-100 text-sm rounded-full p-2.5"
    name={name}
    value={value}
    onChange={onChange}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
