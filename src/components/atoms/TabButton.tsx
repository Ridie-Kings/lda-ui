import type { TabButtonProps } from '../../interfaces/interfaces';

export default function TabButton({
	active = false,
	children,
	className = '',
	...props
}: TabButtonProps) {
	const base =
		'px-4 py-2 rounded-t font-medium focus:outline-none transition-colors duration-150';
	const activeClasses = active
		? 'bg-red-100 text-red-700 border-b-2 border-red-500'
		: 'bg-gray-100 text-gray-600 border-b-2 border-transparent hover:bg-red-50 hover:text-red-700';
	return (
		<button className={`${base} ${activeClasses} ${className}`} {...props}>
			{children}
		</button>
	);
}
