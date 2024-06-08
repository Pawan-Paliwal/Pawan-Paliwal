'use client';

import ReactLenis, { LenisContext } from 'lenis/react';
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
            if (showMenu) {
                lenisRef.current?.lenis?.stop();
            } else {
                lenisRef.current?.lenis?.start();
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
