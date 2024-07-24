import { ChangeEvent } from "react";

type SelectPropParams = {
  value: string | number;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; name: string }[];
  label: string;
  isDisabled: boolean;
};

const Select = ({
  value,
  onChange,
  options,
  label,
  isDisabled,
}: SelectPropParams) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label className="ml-1 text-xs text-gray-300">{label}</label>
      <select
        className="min-w-[200px] cursor-pointer bg-gray-700 p-2 transition-all ease-in hover:bg-gray-800 active:border-0 active:ring-0 sm:min-w-full"
        id={label}
        disabled={isDisabled}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
