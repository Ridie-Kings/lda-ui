import type { TextareaProps } from "../../interfaces/interfaces";
import { cn } from "../../utils/cn";

export function TextArea({
	value,
	onChange,
	placeholder,
	label,
	disabled = false,
	className,
}: TextareaProps) {
	return (
		<div className={cn("w-full", className)}>
			{label && <label className="mb-1 block text-sm font-medium">{label}</label>}
			<textarea
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				disabled={disabled}
				className={cn("w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-black placeholder-gray-400 disabled:bg-gray-100 disabled:text-gray-400")}
				rows={4}
			/>
		</div>
	);
}
