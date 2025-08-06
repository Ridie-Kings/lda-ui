import type { InputProps } from "../../interfaces/interfaces";
import { cn } from "../../utils/cn";

export function Input({
	label,
	error,
	id,
	name,
	className = '',
	inputClassName = '',
	type = 'text',
	...props
}: InputProps) {
	return (
		<div className={cn("flex flex-col gap-1", className)}>
			{label && <label className="text-sm font-medium text-gray-700">{label}</label>}
			<input
				type={type}
				className={cn(
					"border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition text-sm",
					error ? 'border-red-500' : 'border-gray-300',
					inputClassName
				)}
				{...props}
			/>
			{error && <span className="text-xs text-red-500 mt-1">{error}</span>}
		</div>
	);
}
