'use client';

import { useContext, useState } from 'react';
import MainLogoSvg from './pre-loader-svg';
import { motion, AnimatePresence } from 'framer-motion';
import { PreloaderContext, PreloaderContextProps } from '@/context/preloader';

const overlayVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.1,
		},
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};
export default function PreLoader() {
	const { isLoaded, loadingDone } = useContext(PreloaderContext) as PreloaderContextProps;

	function hidePreloader() {
		loadingDone();
		window.scrollTo(0, 0);
	}

	return (
		<AnimatePresence>
			{!isLoaded && (
				<motion.div
					variants={overlayVariants}
					key='loading-screen'
					animate='show'
					exit='hidden'
					className='fixed left-0 top-0 z-[500] flex h-screen w-screen items-center justify-center bg-white cursor-wait'>
					<div className='w-52'>
						<MainLogoSvg hidePreloader={hidePreloader} />
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
