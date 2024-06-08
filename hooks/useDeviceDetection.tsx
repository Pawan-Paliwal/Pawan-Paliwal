import { useMediaQuery } from 'react-responsive';

export default function useDeviceDetection() {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1224px)',
	});

	const isLaptop = useMediaQuery({
		query: '(max-width: 1023px)',
	});
	const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

	return { isDesktopOrLaptop, isMobile , isLaptop };
}
