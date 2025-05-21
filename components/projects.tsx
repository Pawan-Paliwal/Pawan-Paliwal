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
					className='absolute left-[280px] top-[22px] -scale-x-100 tiny:hidden'
				/>
			</div>

			<div className='grid gap-y-10'>
				<div className='grid grid-cols-2 items-center lg:grid-cols-1'>
					<div>
						<Panaroma text='latest work' />
						<Reveal direction='down'>
							<h2 className='font-main text-5xl text-secondary-700'>
								Smart Exchange
							</h2>
						</Reveal>
						<div className='mt-4 flex flex-wrap gap-x-3 gap-y-3 font-inter'>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Next.js
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								TailwindCSS
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Web APis
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Firebase
							</span>
						</div>
						<div className='mt-5 text-[16px] text-secondary-500'>
							<p>
								Smart Exchange is a revolutionary trading platform designed to simplify and accelerate your journey in the financial world. Whether you're a beginner or an experienced trader, Smart Exchange empowers you to build a powerful and visually stunning financial portfolio—quickly and effortlessly.
							</p>
							<p className='mt-2'>
								With real-time insights, intuitive tools, and a user-friendly interface, managing your investments has never been easier. Best of all, you can get started today—absolutely free. Join a community of smart investors and take control of your financial future with Smart Exchange.
							</p>
						</div>

						<div className='mt-6 flex space-x-6'>
							<Button>
								<a href='https://www.smart-exchange.in/' target='_blank'>
									Watch live
								</a>
							</Button>
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
								className=''
							/>
							<Image
								src='/images/frame-dotted.png'
								alt='frame-dotted'
								width={150}
								height={150}
								className='absolute bottom-0 right-0 translate-x-[30px] translate-y-[25px] transition-transform duration-300 sm:hidden'
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
								RingMusic
							</h2>
						</Reveal>
						<div className='mt-4 flex flex-wrap gap-x-3 gap-y-3 font-inter'>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								NextJs
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								PHP Apis
							</span>

							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								TailwindCss
							</span>

							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Contentful CMS
							</span>
						</div>
						<div className='mt-4 text-[16px] text-secondary-500'>
							<p>
								We are a next-generation music streaming platform that offers a seamless, personalized listening experience. Whether you're vibing to the latest hits, diving into indie gems, or creating playlists for every mood — RingMusic is your ultimate music companion.
							</p>
							<p className='mt-2'>
								Whether you're a casual listener or a hardcore music enthusiast, RingMusic is designed to make every listening moment special.
							</p>
						</div>

						<div className='mt-6 flex space-x-6'>
							<Button>
								<a
									href='https://ringmusic.in/'
									target='_blank'>
									Watch live
								</a>
							</Button>
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
								className=''
							/>
							<Image
								src='/images/frame-dotted.png'
								alt='frame-dotted'
								width={150}
								height={150}
								className='absolute -bottom-0 left-0 -scale-x-100 translate-y-[25px] -translate-x-[30px] transition-transform duration-300 sm:hidden'
							/>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-2 items-center pt-20 lg:grid-cols-1'>
					<div>
						<Panaroma text='latest work' />
						<Reveal direction='down'>
							<h2 className='font-main text-5xl text-secondary-700'>
								Assignment Help
							</h2>
						</Reveal>
						<div className='mt-4 flex flex-wrap gap-x-3 gap-y-3 font-inter'>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								NextJs
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								TailwindCSS
							</span>
							<span className='inline-block rounded-[5px] bg-secondary-400 px-5 py-1 text-sm font-bold text-secondary-50'>
								Shadcn
							</span>
						</div>
						<div className='mt-5 text-[16px] text-secondary-500'>
							<p>
							The project is built using Next.js, a powerful React framework that facilitates the development of fast, scalable, and SEO-friendly multi-page applications. Leveraging Next.js's built-in file-based routing system, this project features clearly structured and intuitive navigation, allowing users to move seamlessly between various sections of the website.
							</p>
						</div>

						<div className='mt-6 flex space-x-6'>
							<Button>
								<a
									href='https://assignment-help-web.vercel.app'
									target='_blank'>
									Watch live
								</a>
							</Button>
						</div>
					</div>

					<div className='flex  justify-end lg:mt-16 lg:justify-center'>
						<div className='relative'>
							<Image
								src='/images/assignment-help.png'
								alt='client-portfolio'
								width={350}
								height={350}
								quality={100}
								className=''
							/>
							<Image
								src='/images/frame-dotted.png'
								alt='frame-dotted'
								width={150}
								height={150}
								className='absolute bottom-0 right-0 translate-x-[30px] translate-y-[25px] transition-transform duration-300 sm:hidden'
							/>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
