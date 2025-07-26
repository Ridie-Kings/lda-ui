export interface ButtonProps {
	text: string;
	variant?: 'primary' | 'secondary' | 'tertiary';
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	onClick?: () => void;
	icon?: React.ReactNode;
}

export interface BadgeProps {
	text: string | number;
	variant?: keyof typeof variants;
	size?: 'sm' | 'md';
	className?: string;
	children?: React.ReactNode;
}

const variants = {
	success: 'bg-green-100 text-green-800',
	warning: 'bg-yellow-100 text-yellow-800',
	error: 'bg-red-100 text-red-800',
	info: 'bg-blue-100 text-blue-800',
	neutral: 'bg-gray-100 text-gray-800',
};

export interface CardProps {
	title: string;
	description: string;
}

export interface FileInputProps {
	label?: string;
	accept?: string;
	multiple?: boolean;
	maxSize?: number;
	className?: string;
}

export interface IconProps {
	name?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	color?: string;
	className?: string;
}

export interface InputProps {
	label?: string;
	error?: string;
	className?: string;
	inputClassName?: string;
	type?: string; // Soporte para type="text" y otros
}

export interface SelectProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	options: { label: string; value: string }[];
};

export interface TabButtonProps {
	active?: boolean;
	children: React.ReactNode;
	className?: string;
}

export type TextareaProps = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
	label?: string;
	disabled?: boolean;
};