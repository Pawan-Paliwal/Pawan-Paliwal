'use client';
import { cn } from '@/lib/utils';
import Reveal from '@/components/reveal';

type SectionHeadingProps = {
	className?: string;
	text: string;
};

export default function SectionHeading({
	className,
	text,
}: SectionHeadingProps) {
	return (
		<div className={cn('mb-14 flex justify-end font-main sm:mb-14', className)}>
			<h1 className='flex items-center text-6xl text-secondary-700'>
				<span className='mr-2 self-end text-primary-500'>.</span>
				{text}
				<span className='text-5xl'>;</span>
			</h1>
		</div>
	);
}
