'use client';

import Reveal from '@/components/reveal';
import { cn } from '@/lib/utils';

type PanaromaProps = {
	className?: string;
	text: string;
};

export default function Panaroma({ className, text }: PanaromaProps) {
	return (
		<Reveal direction='down'>
			<h3
				className={cn(
					'mb-4 font-main text-lg uppercase tracking-[5px] text-secondary-500',
					className,
				)}>
				{text}
			</h3>
		</Reveal>
	);
}
