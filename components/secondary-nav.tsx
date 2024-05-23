'use client';

import {
	useScroll,
	useAnimationControls,
	motion,
	AnimatePresence,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Logo from './logo';
import { SocialIcons } from './footer';
import { Link } from 'react-scroll';

const navLinks = [
	{
		name: 'about',
		href: 'about',
	},
	{
		name: 'dexterity',
		href: 'dexterity',
	},
	{
		name: 'projects',
		href: 'projects',
	},
	{
		name: 'contact',
		href: 'contact',
	},
];

const ScrollToTopContainerVariants = {
	hide: {
		scale: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
	show: {
		scale: 1,
		transition: {
			duration: 0.4,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

const linkVariants = {
	down: {
		opacity: 0,
		y: 50,
	},
	up: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.85, 0, 0.15, 1],
			staggerChildren: 0.1,
		},
	},
};
export default function SecondaryNav() {
	const { scrollYProgress } = useScroll();
	const [showMenu, setShowMenu] = useState(false);
	const controls = useAnimationControls();

	function handleClick() {
		setShowMenu((pre) => !pre);
	}

	useEffect(() => {
		return scrollYProgress.on('change', (latestValue) => {
			if (latestValue > 0.05) {
				controls.start('show');
			} else {
				if (!showMenu) {
					controls.start('hide');
					setShowMenu(false);
				}
			}
		});
	});

	return (
		<>
			<motion.button
				className={cn(
					'group fixed left-8 top-8 z-[60] flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-secondary-500 p-3 text-secondary-50 shadow transition-colors duration-300 hover:bg-primary-500 hover:shadow-sm',
					{
						'bg-primary-500': showMenu,
					},
				)}
				initial='hide'
				variants={ScrollToTopContainerVariants}
				animate={controls}
				onClick={handleClick}>
				<span
					className={cn(
						'block h-[1px] w-4 -translate-y-[3px] bg-white transition-all duration-300 group-hover:bg-secondary-50',
						{
							'translate-y-0 rotate-45 bg-secondary-50': showMenu,
						},
					)}></span>
				{/* <span className='my-[2px]' /> */}
				<span
					className={cn(
						'block h-[1px] w-4 translate-y-[3px] bg-white transition-all  duration-300 group-hover:bg-secondary-50',
						{
							'translate-y-0 -rotate-45 bg-secondary-50': showMenu,
						},
					)}></span>
			</motion.button>

			<AnimatePresence>
				{showMenu && (
					<motion.div
						key='backdrop'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.5,
							ease: [0.85, 0, 0.15, 1],
						}}
						onClick={handleClick}
						className='fixed left-0 top-0 z-40 h-screen w-screen bg-secondary-50/80'></motion.div>
				)}
				{showMenu && (
					<motion.div
						key='menu'
						initial={{ opacity: 0, x: '-100%' }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.5,
							ease: [0.85, 0, 0.15, 1],
						}}
						exit={{ opacity: 0, x: '-100%' }}
						className='fixed left-0 top-0 z-50 h-full -translate-x-full border-r-2 border-secondary-80 bg-white px-20 pb-0 pt-32'>
						<motion.ul
							variants={linkVariants}
							initial='down'
							animate='up'
							className='flex flex-col space-y-8'>
							{navLinks.map((link, idx) => {
								return (
									<motion.li
										variants={linkVariants}
										key={idx}
										className='cursor-pointer rounded-lg text-center font-main text-4xl text-secondary-800'>
										<Link
											className='relative before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-full before:translate-y-2 before:bg-secondary-500 before:opacity-0 before:transition-all before:duration-200 hover:before:translate-y-1 hover:before:opacity-100'
											onClick={handleClick}
											to={link.href}
											duration={800}
											smooth={true}>
											{link.name}
										</Link>
									</motion.li>
								);
							})}
						</motion.ul>
						<div className='absolute bottom-4'>
							<div className='mt-8 flex justify-center'>
								<SocialIcons />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
