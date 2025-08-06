import React from "react";
import { cn } from "../../utils/cn";

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
}

export function Slider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  className = '',
  inputClassName = '',
  ...props
}: SliderProps) {
  const percent = ((value - min) / (max - min)) * 100;
  const sliderBg = `linear-gradient(90deg, #cc3333 ${percent}%, #fde4e4 ${percent}%)`;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          style={{ background: sliderBg }}
          className={cn(
            "w-full h-2 rounded-lg appearance-none cursor-pointer transition [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:transition [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:hover:bg-red-600 [&::-webkit-slider-thumb]:active:bg-red-700 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-red-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow [&::-moz-range-thumb]:transition [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:hover:bg-red-600 [&::-moz-range-thumb]:active:bg-red-700 focus:outline-none",
            inputClassName
          )}
          {...props}
        />
        <span className="w-10 text-center text-base font-medium text-gray-700 select-none bg-white border border-gray-200 rounded px-2 py-1">
          {value}
        </span>
      </div>
    </div>
  );
}
