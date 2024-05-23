"use client"

import { cn } from '@/lib/utils';
import { Element } from 'react-scroll';

type SectionProps = {
	id: string;
	className?: string;
	children: React.ReactNode;
};

export default function Section({ id, className, children }: SectionProps) {
	return (
			<section id={id} className={cn('container py-16 font-inter lg:mt-28 lg:px-28 md-sm:px-14 sm:px-10 tiny:px-4', className)}>
				{children}
			</section>
	);
}
