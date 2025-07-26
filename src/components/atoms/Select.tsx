import type { SelectProps } from "../../interfaces/interfaces";

export default function Select({ value, onChange, options }: SelectProps) {
	return (
		<select
			value={value}
			onChange={onChange}
			className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-black"
		>
			{options.map((opt) => (
				<option key={opt.value} value={opt.value}>
					{opt.label}
				</option>
			))}
		</select>
	);
}
