import type { CardProps } from '../../interfaces/interfaces';

export default function Card({ title, description }: CardProps) {
	return (
		<div className="bg-white flex flex-col border p-4 border-gray-400 rounded-xl shadow-lg">
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="text-gray-500">{description}</p>
		</div>
	);
}
