// useIsDesktop.js
import { useState, useEffect } from 'react';

const isBrowser = typeof window !== undefined;

const useIsDesktop = (breakpoint = 1023) => {
	const [isDesktop, setIsDesktop] = useState(isBrowser || window.innerWidth >= breakpoint);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= breakpoint);
		};

		window.addEventListener('resize', handleResize);

		// Cleanup listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [breakpoint]);

	return isDesktop;
};

export default useIsDesktop;
