'use client';

import { Icons } from '@/lib/icons';
import { useScroll, useAnimationControls, motion } from 'framer-motion';
import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';

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

export default function ScrollToTopButton() {
	const { scrollYProgress } = useScroll();
	const controls = useAnimationControls();

	function scrollToTop() {
		animateScroll.scrollToTop({
			duration: 800,
			smooth: 'easeOutQuint',
		});
	}

	useEffect(() => {
		return scrollYProgress.on('change', (latestValue) => {
			if (latestValue > 0.15) {
				controls.start('show');
			} else {
				controls.start('hide');
			}
		});
	}, []);

	return (
		<motion.button
			className='group fixed bottom-8 right-8 rounded-full bg-secondary-500 p-3 text-secondary-50 shadow transition-shadow hover:shadow-lg'
			variants={ScrollToTopContainerVariants}
			initial='hide'
			animate={controls}
			onClick={scrollToTop}>
			{
				<Icons.chevsUp className='h-8 w-8 transition-transform duration-300 group-hover:-translate-y-[5px]' />
			}
		</motion.button>
	);
}
