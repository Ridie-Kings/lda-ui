import type { IconProps } from "../../interfaces/interfaces";
import { cn } from "../../utils/cn";

const sizes = {
	sm: 'w-4 h-4',
	md: 'w-5 h-5',
	lg: 'w-6 h-6',
	xl: 'w-8 h-8',
};

export function Icon({ size = 'md', color = 'currentColor', className = '' }: IconProps) {
	return (
		<svg
			className={cn(sizes[size], className)}
			fill="none"
			stroke={color}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 6v6m0 0v6m0-6h6m-6 0H6"
			/>
		</svg>
	);
}
