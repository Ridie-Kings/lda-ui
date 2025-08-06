import type { InfoCardProps } from '../../interfaces/interfaces';
import { cn } from '../../utils/cn';

export function InfoCard({ title, description, className }: InfoCardProps) {
	return (
		<div className={cn("bg-white flex flex-col border p-4 border-gray-400 rounded-xl shadow-lg", className)}>
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="text-gray-500">{description}</p>
		</div>
	);
}
