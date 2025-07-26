import type { InputProps } from "../../interfaces/interfaces";

export default function Input({
	label,
	error,
	className = '',
	inputClassName = '',
	type = 'text', // Soporte por defecto para type="text"
	...props
}: InputProps) {
	return (
		<div className={`flex flex-col gap-1 ${className}`}>
			{label && <label className="text-sm font-medium text-gray-700">{label}</label>}
			<input
				type={type}
				className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition text-sm ${error ? 'border-red-500' : 'border-gray-300'} ${inputClassName}`}
				{...props}
			/>
			{error && <span className="text-xs text-red-500 mt-1">{error}</span>}
		</div>
	);
}
