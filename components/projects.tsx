'use client';
import Panaroma from '@/ui/panaroma';
import Section from '@/ui/section';
import SectionHeading from '@/ui/section-heading';
import Image from 'next/image';
import Button from './button';
import Reveal from './reveal';

export default function Projects() {
	return (
		<Section id='projects'>
			<div className='relative'>
				<Reveal direction='left'>
					<SectionHeading className='justify-start' text='projects' />
				</Reveal>
				<Image
					src='/images/direction.svg'
					alt='direction'
					width={150}
					height={150}
					className='absolute left-[280px] top-[22px] -scale-x-100'
				/>
			</div>

			<div className='grid gap-y-10'>
				<div className='grid grid-cols-2 items-center pt-20 lg:grid-cols-1'>
					<div>
						<Panaroma text='latest work' />
						<Reveal direction='down'>
							<h2 className='font-main text-5xl text-secondary-700'>
								Cosmetologist Portfolio
							</h2>
						</Reveal>
						<div className='mt-4 flex flex-wrap gap-x-3 gap-y-3 font-inter'>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Gatsby
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								TailwindCSS
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Framer Motion
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Contentful CMS
							</span>
						</div>
						<div className='mt-5 text-[16px] text-secondary-500'>
							<p>
								Efficiently fetched and rendered images using the headless
								Contentful CMS, implemented lazy loading for large images to
								optimize performance. 
							</p>
							<p className='mt-2'>
								I&apos;m probably not the typical designer positioned behind an
								Illustrator artboard adjusting pixels, but I design. Immersed in
								stylesheets.
							</p>
						</div>

						<div className='mt-6 flex space-x-6'>
							<Button>Watch live</Button>
							<Button variant='secondary'>Get to code</Button>
						</div>
					</div>

					<div className='flex  justify-end lg:mt-16 lg:justify-center'>
						<div className='relative'>
							<Image
								src='/images/client-portfolio.png'
								alt='client-portfolio'
								width={350}
								height={350}
								quality={100}
								className='-translate-x-[30px] -translate-y-[25px] transition-transform duration-300 hover:-translate-x-[35px]  hover:-translate-y-[30px]'
							/>
							<Image
								src='/images/frame-dotted.png'
								alt='frame-dotted'
								width={150}
								height={150}
								className='absolute bottom-0 right-0'
							/>
						</div>
					</div>
				</div>

				{/* Second project */}
				<div className='grid grid-cols-2 items-center pt-20 lg:grid-cols-1'>
					<div className='order-1 lg:order-none'>
						<Panaroma text='latest work' />
						<Reveal direction='down'>
							<h2 className='font-main text-5xl text-secondary-700'>
								Cosmetologist Portfolio
							</h2>
						</Reveal>
						<div className='mt-3 flex gap-x-3'>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Gatsby
							</span>
						</div>
						<div className='mt-4 text-[16px] text-secondary-500'>
							<p>
								Efficiently fetched and rendered images using the headless
								Contentful CMS, implemented lazy loading for large images to
								optimize performance. 
							</p>
							<p className='mt-2'>
								I&aspo;m probably not the typical designer positioned behind an
								Illustrator artboard adjusting pixels, but I design. Immersed in
								stylesheets.
							</p>
						</div>

						<div className='mt-6 flex space-x-6'>
							<Button>Watch live</Button>
							<Button variant='secondary'>Get to code</Button>
						</div>
					</div>

					<div className='flex pl-[25px] lg:mt-16 lg:justify-center'>
						<div className='relative'>
							<Image
								src='/images/blog.png'
								alt='client-portfolio'
								width={350}
								height={350}
								quality={100}
								className='translate-x-[30px] -translate-y-[25px] transition-transform duration-300 hover:translate-x-[35px]  hover:-translate-y-[30px]'
							/>
							<Image
								src='/images/frame-dotted.png'
								alt='frame-dotted'
								width={150}
								height={150}
								className='absolute -bottom-0 left-0 -scale-x-100'
							/>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
