import type { BadgeProps } from '../../interfaces/interfaces';
import { cn } from '../../utils/cn';

const variants = {
	success: 'bg-green-100 text-green-800',
	warning: 'bg-yellow-100 text-yellow-800',
	error: 'bg-red-100 text-red-800',
	info: 'bg-blue-100 text-blue-800',
	neutral: 'bg-gray-100 text-gray-800',
};

const sizes = {
	sm: 'px-2 py-1 text-xs',
	md: 'px-3 py-1 text-sm',
};

export function Badge({
	text,
	variant = 'neutral',
	size = 'md',
	className = '',
	children,
}: BadgeProps) {
	const base = 'inline-flex items-center font-medium rounded-full';
	
	return (
		<span className={cn(base, variants[variant], sizes[size], className)}>
			{text}
			{children}
		</span>
	);
}
