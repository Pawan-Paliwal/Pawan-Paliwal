'use client';

import ReactLenis from 'lenis/react';
import { ReactNode, useContext, useEffect, useRef } from 'react';
import { PreloaderContext, PreloaderContextProps } from '@/context/preloader';

type SmoothScrollTypes = {
	children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollTypes) {
	const lenisRef = useRef(null);
	const { showMenu } = useContext(PreloaderContext) as PreloaderContextProps;

	useEffect(() => {
		if (lenisRef.current) {
            const lenis = lenisRef?.current as any;
            if (showMenu) {
                lenis.stop();
            } else {
                lenis.start();
            }
		}
	}, [showMenu]);

	return (
		<ReactLenis
			ref={lenisRef}
			root
			options={{
				lerp: 0.19,
			}}>
			{children}
		</ReactLenis>
	);
}
