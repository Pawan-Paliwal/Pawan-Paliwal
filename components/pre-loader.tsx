'use client';

import { useState } from 'react';
import MainLogoSvg from './pre-loader-svg';
import { motion, AnimatePresence } from 'framer-motion';


const overlayVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.1
        }
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}
export default function PreLoader() {
	const [isLoading, setIsLoading] = useState(true);

    function hidePreloader() {
        setIsLoading(false);
    }

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
                    variants={overlayVariants}
					key='loading-screen'
                    animate="show"
					exit="hidden"
					className='fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-white'>
					<div className='w-52'>
						<MainLogoSvg hidePreloader={hidePreloader} />
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
