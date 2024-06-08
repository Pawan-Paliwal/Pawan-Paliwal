'use client';

import { cn } from '@/lib/utils';

type SectionProps = {
	id: string;
	className?: string;
	children: React.ReactNode;
};

export default function Section({ id, className, children }: SectionProps) {
	return (
		<section
			id={id}
			className={cn(
				'container my-20 font-inter lg:px-28 md-sm:px-14 sm:px-10 tiny:px-4',
				className,
			)}>
			{children}
		</section>
	);
}
