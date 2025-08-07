import React from "react";
import { cn } from "../../utils/cn";

export interface SwitchProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
}

export function Switch({
  checked,
  onChange,
  label,
  className = "",
  inputClassName = "",
  disabled = false,
}: SwitchProps) {
  return (
    <label className={cn("flex items-center gap-2 cursor-pointer select-none", className, disabled && "opacity-50 cursor-not-allowed")}> 
      <span className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={cn("sr-only", inputClassName)}
        />
        <span
          className={cn(
            "block w-10 h-6 rounded-full transition bg-gray-300",
            checked ? "bg-red-500" : "bg-gray-300"
          )}
        ></span>
        <span
          className={cn(
            "absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transition-transform",
            checked ? "translate-x-4" : "translate-x-0"
          )}
        ></span>
      </span>
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
    </label>
  );
}
