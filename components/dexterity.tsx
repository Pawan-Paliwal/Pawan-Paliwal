'use client';
import { useRef, useState } from 'react';
import Section from '@/ui/section';
import SectionHeading from '@/ui/section-heading';
import Panaroma from '@/ui/panaroma';
import Image from 'next/image';
import SectionLink from './section-link';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Reveal from './reveal';
import Button from './button';
import SkillCard from './skill-card';
import useDeviceDetection from '@/hooks/useDeviceDetection';

const tabTitles = ['Languages', 'Web Technologies', 'Frameworks'];

export default function Dexterity() {
	const { isDesktopOrLaptop: isDesktop} = useDeviceDetection();

	const [currentTab, setCurrentTab] = useState(1);
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: '-200px', once: true });

	return (
		<>
			<Section id='dexterity'>
				<Reveal direction='right'>
					<SectionHeading text='dexterity' />
				</Reveal>
				<div className='grid grid-cols-2 gap-x-20 lg:grid-cols-1'>
					<div className='order-1 text-secondary-500 lg:order-none'>
						<Panaroma text='Development' />
						<Reveal direction='down'>
							<p>
							I craft visually striking and high-performing websites tailored for modern businesses. In today’s digital landscape, a website should not only captivate but also build trust and seamlessly support your operations. I make sure your online presence reflects that standard—elegant, reliable, and purpose-driven.
							</p>
						</Reveal>
						<Panaroma text='Design' className='mt-10' />
						<Reveal direction='down'>
							<p>
							I specialize in building responsive websites tailored to clients' unique needs. With a strong command of React.js and modern CSS frameworks like Tailwind CSS, I transform ideas into seamless, user-friendly web experiences.
							Every project I take on is crafted with performance, scalability, and clean code in mind.
							</p>
						</Reveal>
					</div>

					<div>
						<div className='text-sm'>
							<div className='flex justify-between space-x-8 overflow-hidden whitespace-nowrap px-4 pb-4 pt-2 lg:pt-12'>
								{tabTitles.map((title, idx) => {
									return (
										<TabTitle
											key={idx}
											onClick={setCurrentTab}
											activeTab={currentTab}
											title={title}
											tabIndex={idx + 1}
										/>
									);
								})}
							</div>
							<div className='relative mt-8'>
								<AnimatePresence mode='wait'>
									{currentTab === 1 && (
										<motion.div
											key='languages'
											initial={{ y: 10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											exit={{ y: -5, opacity: 0 }}
											transition={{
												duration: 0.5,
												ease: [0.22, 1, 0.36, 1],
											}}
											className='absolute flex w-full justify-center'>
											<Reveal direction='down'>
												<div className='grid grid-cols-3 gap-x-20 gap-y-8'>
													<Image
														src='/images/tech/languages/js.svg'
														alt='js'
														width={65}
														height={65}
														className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
													/>
													<Image
														src='/images/tech/languages/c.svg'
														alt='cpp'
														width={65}
														height={65}
														className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
													/>
													<Image
														src='/images/tech/languages/typescript.svg'
														alt='js'
														width={65}
														height={65}
														className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
													/>
													<Image
														src='/images/tech/languages/python.svg'
														alt='js'
														width={65}
														height={65}
														className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
													/>
													<Image
														src='/images/tech/languages/html5.svg'
														alt='js'
														width={65}
														height={65}
														className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
													/>
													<Image
														src='/images/tech/languages/css3.svg'
														alt='js'
														width={65}
														height={65}
														className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
													/>
												</div>
											</Reveal>
										</motion.div>
									)}
									{currentTab === 2 && (
										<motion.div
											key='devs'
											initial={{ y: 10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											exit={{ y: -5, opacity: 0 }}
											transition={{
												duration: 0.5,
												ease: [0.22, 1, 0.36, 1],
											}}
											className='absolute flex w-full justify-center'>
											<div className='grid grid-cols-3 gap-x-20 gap-y-8'>
												<Image
													src='/images/tech/web-dev/reactjs.svg'
													alt='js'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
												<Image
													src='/images/tech/web-dev/nextjs.svg'
													alt='cpp'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
												<Image
													src='/images/tech/web-dev/tailwindcss.svg'
													alt='js'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
												<Image
													src='/images/tech/languages/python.svg'
													alt='js'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
												<Image
													src='/images/tech/languages/html5.svg'
													alt='js'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
												<Image
													src='/images/tech/languages/css3.svg'
													alt='js'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
											</div>
										</motion.div>
									)}

									{currentTab === 3 && (
										<motion.div
											key='frameworks'
											initial={{ y: 10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											exit={{ y: -5, opacity: 0 }}
											transition={{
												duration: 0.5,
												ease: [0.22, 1, 0.36, 1],
											}}
											className='absolute flex w-full justify-center'>
											<div className='grid grid-cols-3 gap-x-20 gap-y-8'>
												<Image
													src='/images/tech/languages/js.svg'
													alt='js'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
												<Image
													src='/images/tech/languages/c.svg'
													alt='cpp'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
												<Image
													src='/images/tech/languages/typescript.svg'
													alt='js'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
												<Image
													src='/images/tech/languages/python.svg'
													alt='js'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
												<Image
													src='/images/tech/languages/html5.svg'
													alt='js'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
												<Image
													src='/images/tech/languages/css3.svg'
													alt='js'
													width={65}
													height={65}
													className='rounded-lg border-2 border-secondary-100 p-2 shadow-lg'
												/>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>
					</div>
				</div>
				<div className='container relative mt-60 lg:max-w-sm [@media(max-width:1363px)]:p-0'>
					<Image
						src='/images/gist-arrow.svg'
						alt='gist-direction'
						width={180}
						height={140}
						className='absolute -top-[200px] right-[150px] lg:-right-[200px] lg:top-0 sm:hidden tiny:hidden'
					/>
					<motion.div
						ref={ref}
						className='grid grid-cols-3 gap-x-20 font-inter lg:grid-cols-1 lg:gap-x-0 lg:gap-y-20 [@media(max-width:1363px)]:gap-x-4'>
						<SkillCard
							imageSrc='/images/design.svg'
							heading='Designing'
							desc='Creating user interfaces that are clean, purposeful, and a pleasure to navigate.'
							animateUpBy={isInView && isDesktop ? -30 : 0}
						/>
						<SkillCard
							imageSrc='/images/code.svg'
							heading='Development'
							desc='Building fast, responsive web apps with Next.js and Tailwind CSS.'
							animateUpBy={isInView && isDesktop ? -100 : 0}
						/>
						<SkillCard
							imageSrc='/images/landing-dev.svg'
							heading='Landing Page'
							desc='Creating landing pages that engage users and boost conversions.'
							animateUpBy={isInView && isDesktop ? -60 : 0}
						/>
					</motion.div>
				</div>
			</Section>
			<div className='text-center'>
				<SectionLink href='projects'>
					Next up <span className='text-primary-500'>projects</span>
				</SectionLink>
			</div>
			<img
				src='/images/dexterity-wave.svg'
				className='absolute -z-10 w-full -translate-y-80 lg:hidden'
			/>
		</>
	);
}

function TabTitle({
	title,
	tabIndex,
	onClick,
	activeTab,
}: {
	title: string;
	tabIndex: number;
	onClick: (tabIndex: number) => void;
	activeTab: number;
}) {
	const isActive = tabIndex === activeTab;
	return (
		<div onClick={() => onClick(tabIndex)}>
			<Button
				variant='ghost'
				className={cn({
					'bg-secondary-700/30': isActive,
				})}>
				{title}
			</Button>
		</div>
	);
}
