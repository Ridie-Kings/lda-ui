import type { FileInputProps } from "../../interfaces/interfaces";

export default function FileInput({
	label,
	accept = '*',
	multiple = false,
	maxSize,
	className = '',
}: FileInputProps) {
	const inputClasses = `absolute inset-0 w-full h-full opacity-0 cursor-pointer ${className}`;
	return (
		<div>
			{label && (
				<label className="block text-sm font-medium text-light-content-high dark:text-dark-content-high mb-2">
					{label}
				</label>
			)}
			<div
				className={`border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-gray-400 transition-colors relative ${className}`}
			>
				<input type="file" accept={accept} multiple={multiple} className={inputClasses} />
				<div className="text-center space-y-4 pointer-events-none">
					{/* Upload Icon */}
					<span className="size-8 text-gray-500 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
						📤
					</span>
					<div className="space-y-2">
						<p className="text-base text-gray-700">
							Arrastra tu archivo de Excel aquí o{' '}
							<span className="font-medium text-gray-900">selecciona un archivo</span>
						</p>
						{maxSize && (
							<p className="text-sm text-gray-500">
								CSV, Excel - Máximo: {maxSize}MB, 100K filas
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
