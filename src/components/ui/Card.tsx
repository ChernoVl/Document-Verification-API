import React, { ReactNode } from 'react';

type CardProps = {
	children: ReactNode;
	className?: string;
};

export function Card({ children, className }: CardProps) {
	return (
		<div className={`border rounded-lg shadow-sm bg-white p-4 ${className}`}>
			{children}
		</div>
	);
}

export function CardHeader({ children }: { children: ReactNode }) {
	return <div className="mb-4">{children}</div>;
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
	return <h3 className={`text-lg font-bold ${className}`}>{children}</h3>;
}

export function CardContent({ children }: { children: ReactNode }) {
	return <div className="text-gray-700">{children}</div>;
}
