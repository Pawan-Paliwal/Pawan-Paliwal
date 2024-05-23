import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type SkillCardProps = {
	className?: string;
	imageSrc: string;
	heading: string;
	desc: string;
	animateUpBy: number;
};

export default function SkillCard({
	className,
	imageSrc,
	heading,
	desc,
	animateUpBy,
}: SkillCardProps) {
	return (
		<motion.div
			initial={{ y: 0 }}
			animate={{ y: animateUpBy }}
			transition={{
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			}}
			className={cn(
				'flex flex-col items-center rounded-lg border border-b-2 border-b-primary-500 bg-white  px-12 py-16 shadow-sm',
				className,
			)}>
			<div className='mb-4 flex-1'>
				<Image
					src={imageSrc}
					alt='design'
					width={100}
					height={100}
					className=''
				/>
			</div>
			<h2 className='mb-8 font-main text-4xl text-secondary-700  lg:text-3xl'>
				{heading}
			</h2>
			<p className='text-center text-secondary-500'>{desc}</p>
		</motion.div>
	);
}
