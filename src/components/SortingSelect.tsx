import React from "react";
import { SelectOptionsType } from "../utils/types";

export const SortingSelect = ({
  options,
  defaultValue,
  onChange,
  isDisabled = false,
}: {
  options: SelectOptionsType[];
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
}) => {
  return (
    <div className="relative inline-block w-48 cursor-pointer">
      <select
        disabled={isDisabled}
        onChange={onChange}
        defaultValue={defaultValue}
        className="focus:shadow-outline block h-8 w-full appearance-none rounded-lg border border-system-purple20 bg-system-purple10 px-4 py-1 pr-8 leading-tight text-gray-300 shadow focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          className="h-4 w-4 fill-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};
