import Panaroma from '@/ui/panaroma';
import Section from '@/ui/section';

import SectionHeading from '@/ui/section-heading';
import SectionLink from './section-link';
import Reveal from './reveal';
import DaySpend from './day-spend';
import Button from './button';

export default function About() {
	return (
		<Section id='about' className='flex min-h-screen items-center mt-0 sm:pt-12'>
			<div>
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
								I like to get straight to the point—my expertise lies in React.js, Node.js, and JavaScript. I have a strong grasp of the fundamentals of web development, including HTML and CSS, which form the backbone of everything I build.
								My curiosity about how systems function under the hood led me to explore operating systems in depth, eventually sparking a deep interest in Linux.
							</p>
						</Reveal>
						<Reveal direction='down'>
							<p className='mt-2'>
								I’m not someone who’s satisfied working with a black box—I believe in understanding the &quot;why&quot; behind the &quot;what.&quot; That mindset drives me to continuously deepen my knowledge of the technologies I work with.
							</p>

						</Reveal>
						<Reveal direction='down'>
							<p className='mt-2'>
								And one last thing—yes, I use Vim. You should too. It’ll change the way you code.
							</p>
						</Reveal>
						<Button className='mt-8'>
							<a
								className='resume-button'
								href='/pawan-paliwal-resume.pdf'
								target='_blank'
								rel='noopener noreferrer'>
								Download résumé
							</a>
						</Button>
					</div>

					<div className='relative flex justify-end lg:mt-16 lg:justify-center'>
						<DaySpend className='w-[80%] lg:w-[70%] sm:w-full' />
					</div>
				</div>

				<div className='mt-6 lg:mt-28 '>
					<SectionLink href='dexterity'>
						Next up <span className='text-primary-500'>dexterity</span>
					</SectionLink>
				</div>
			</div>
		</Section>
	);
}
