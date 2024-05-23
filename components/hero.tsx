'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './button';
import { Icons } from '@/lib/icons';
import Spark from './spark-svg';
import { scroller } from 'react-scroll';

const heroElementVariants = {
	down: {
		y: 20,
		opacity: 0,
	},
	up: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			delayChildren: 3.3,
			staggerChildren: 0.1,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export default function Hero() {
	return (
		<div className='container flex min-h-screen items-center tiny:px-4 w-full'>
			<div className='grid w-full grid-cols-2 items-center lg:mt-28 lg:grid-cols-1 lg:px-28 md-sm:px-14 sm:px-10 tiny:px-0'>
				<motion.div initial='down' animate='up' variants={heroElementVariants}>
					<div className='relative font-main text-7xl text-secondary-700 lg:text-[65px] sm:text-5xl'>
						<div className='absolute -left-[60px] -top-[50px] w-24 sm:-left-[50px]'>
							<Spark />
						</div>
						<h1 className='leading-[1.2]'>
							<motion.span variants={heroElementVariants} className='block'>
								Hello,
							</motion.span>
							<motion.span variants={heroElementVariants} className='block'>
                                I&apos;m Tejas,
							</motion.span>
							<motion.span variants={heroElementVariants} className='block whitespace-nowrap tiny:whitespace-normal'>
								Web developer
							</motion.span>
						</h1>
					</div>

					<div className='lg:max-w-auto mt-4 max-w-[620px] font-inter text-[16px] text-secondary-500'>
						<motion.p variants={heroElementVariants}>
							Currently working with Next.js and learning backend development
							and databases. I can create any website to suit your personal
							taste. Please click below to learn more about me and check out my
							projects.
						</motion.p>
					</div>

					<motion.div variants={heroElementVariants}>
						<Button
							className='group mt-7 flex items-center'
							onClick={() =>
								scroller.scrollTo('about', {
									duration: 800,
									smooth: 'easeOutQuint',
								})
							}>
							Get to know me{' '}
							{
								<Icons.chevDown className='ml-[5px] w-5 translate-y-[1px] transition-transform duration-300 group-hover:translate-y-[2px]' />
							}
						</Button>
					</motion.div>
				</motion.div>

				{/* hero image */}
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{
						delay: 4,
					}}
					className='flex w-full justify-end lg:mt-16 lg:justify-center tiny:px-8'>
					<div className='relative'>
						<Image
							src='/images/hero-pattern-circle.svg'
							alt='hero-pattern'
							width={150}
							height={150}
							className='absolute -right-[17px] -top-[17px]'
							priority
						/>
						<Image
							src='/images/hero-pattern-circle.svg'
							alt='hero-pattern'
							width={150}
							height={150}
							className='absolute -bottom-[18px] left-[2px]'
						/>
						<div className='relative overflow-hidden rounded-lg border-2 border-primary-400'>
							<span className='absolute right-[20px] top-[30px] flex gap-x-1'>
								<span className='h-1 w-1 rounded-full bg-secondary-50'></span>
								<span className='h-1 w-1 rounded-full bg-secondary-50'></span>
								<span className='h-1 w-1 rounded-full bg-secondary-50'></span>
								<span className='h-1 w-1 rounded-full bg-secondary-50'></span>
								<span className='h-1 w-1 rounded-full bg-secondary-50'></span>
							</span>
							<Image
								src='/images/me-think.svg'
								alt='hero-pattern'
								width={50}
								height={53}
								className='absolute right-[50px] top-[40px]'
							/>
							<Image
								src='/images/me.png'
								alt='me'
								width={320}
								height={320}
								quality={100}
								className='block h-full'
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
