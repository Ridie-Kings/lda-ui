import type { ButtonProps } from "../../interfaces/interfaces";
import { cn } from "../../utils/cn";

const variants = {
	primary: 'bg-light-primary-high text-light-content-inverse hover:bg-red-700 focus:ring-red-500',
	secondary: 'bg-black text-light-content-inverse hover:bg-gray-300 focus:ring-gray-400',
	tertiary:
		'bg-light-background-base border text-light-content-high hover:bg-gray-300 focus:ring-gray-500',
	ghost: 'bg-light-background-base text-light-content-high hover:bg-red-300 focus:ring-red-500',
};

const sizes = {
	sm: 'px-3 py-1.5 text-sm rounded-md',
	md: 'px-4 py-2 text-sm rounded-full',
	lg: 'px-6 py-3 text-base rounded-full',
};

export function Button({
	text,
	variant = 'primary',
	size = 'md',
	disabled = false,
	type = 'button',
	className = '',
	onClick,
	icon,
}: ButtonProps) {
	const base =
		'font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer flex items-center justify-center gap-2';
	
	return (
		<button
			className={cn(base, variants[variant], sizes[size], className)}
			disabled={disabled}
			type={type}
			onClick={onClick}
		>
			{icon && <span>{icon}</span>}
			{text}
		</button>
	);
}
