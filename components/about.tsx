import Panaroma from '@/ui/panaroma';
import Section from '@/ui/section';

import SectionHeading from '@/ui/section-heading';
import SectionLink from './section-link';
import Reveal from './reveal';
import DaySpend from './day-spend';
import Button from './button';

export default function About() {
	return (
		<Section id='about'>
			{/* section heading */}
			<Reveal direction='left'>
				<SectionHeading className='justify-start' text='about' />
			</Reveal>

			{/* section main content */}
			<div className='grid grid-cols-2 items-center gap-x-20  lg:grid-cols-1'>
				<div className='text-[16px] text-secondary-500'>
					<Panaroma text='myself' />
					<Reveal direction='down'>
						<p>
							Getting straight to the point, my skills include ReactJs, NodeJs,
							C++, C, and Javascript. I have a solid understanding of the core
							of the world of web development, which includes HTML, CSS, and
							Javascript.
						</p>
					</Reveal>
                    <Reveal direction="down">
						<p className="mt-2">
							I have spent a good amount of time learning how operating systems
							work, which sparked an interest in learning Linux.
						</p>
                    </Reveal>
					<Reveal direction='down'>
						<p className='mt-2'>
							I don&apos;t like to work with a black box, which has led me to
							learn the ins and outs of the web technologies mentioned above,
							and I plan to continue doing so. And the most important thing: I
							USE VIM; trust me, you should too.
						</p>
					</Reveal>
					<Button className='mt-8'>Download résumé</Button>
				</div>

				<div className='relative flex justify-end lg:mt-16 lg:justify-center'>
					<DaySpend className='w-[80%] lg:w-[70%] sm:w-full' />
				</div>
			</div>

			<div className='mt-6 lg:mt-28'>
				<SectionLink href='dexterity'>
					Next up <span className='text-primary-500'>dexterity</span>
				</SectionLink>
			</div>
		</Section>
	);
}
