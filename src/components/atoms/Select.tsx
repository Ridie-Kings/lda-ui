import type { SelectProps } from "../../interfaces/interfaces";
import { cn } from "../../utils/cn";

export function Select({ value, onChange, options, className }: SelectProps) {
	return (
		<select
			value={value}
			onChange={onChange}
			className={cn("w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-black", className)}
		>
			{options.map((opt) => (
				<option key={opt.value} value={opt.value}>
					{opt.label}
				</option>
			))}
		</select>
	);
}
