import type { SelectProps } from "../../interfaces/interfaces";
import { Info } from "lucide-react";
import { cn } from "../../utils/cn";

export function Select({
  value,
  onChange,
  options,
  className,
  label,
  helperText,
  error,
  readOnly = false,
  labelTooltip,
  labelPanelTooltip,
  inputClassName = "",
  ...props
}: SelectProps) {
  return (
	<div className={cn("flex flex-col gap-1", className)}>
	  {label && (
		<div className="flex items-center gap-1 mb-1">
		  <label className="text-sm font-medium text-gray-700">
			{label}
		  </label>
		  {labelTooltip && (
			<span className="ml-1 cursor-pointer" title={labelTooltip}>
			  <Info className="size-4 text-gray-700" />
			</span>
		  )}
		  {labelPanelTooltip && (
			<span className="ml-1 cursor-pointer" title={labelPanelTooltip}>
			  {/* TODO: integrar tu modal panel tooltip */}
			  <Info className="size-4 text-gray-700" />
			</span>
		  )}
		</div>
	  )}
	  <div className="relative">
		<select
		  value={value}
		  onChange={onChange}
		  className={cn(
			"w-full border px-4 pr-10 py-3 rounded-lg focus:outline-none transition appearance-none",
			error ? "border-red-500" : "border-gray-300",
			readOnly ? "bg-gray-100 cursor-not-allowed" : "",
			inputClassName
		  )}
		  disabled={readOnly}
		  {...props}
		>
		  {options.map((opt) => (
			<option key={opt.value} value={opt.value}>
			  {opt.label}
			</option>
		  ))}
		</select>
		<span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
		  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
			<path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		  </svg>
		</span>
	  </div>
	  {helperText && (
		<span className="text-xs text-gray-500 mt-1">{helperText}</span>
	  )}
	  {error && (
		<span className="text-xs text-red-500 mt-1">{error}</span>
	  )}
	</div>
  );
}
