import React from 'react';

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	size?: 'sm' | 'md' | 'lg'; // Define sizes
	variant?: 'primary' | 'secondary' | 'outline'; // Optionally handle different button variants
};

export const Button: React.FC<ButtonProps> = ({
												  children,
												  onClick,
												  className = '',
												  size = 'md', // Default to 'md'
												  variant = 'primary', // Default to 'primary'
											  }) => {
	// Size classes
	const sizeClasses = {
		sm: 'px-2 py-1 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg',
	};

	// Variant classes
	const variantClasses = {
		primary: 'bg-gray-500 text-white hover:bg-gray-600',
		secondary: 'bg-blue-500 text-white hover:bg-blue-600',
		outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
	};

	return (
		<button
			className={`rounded ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
