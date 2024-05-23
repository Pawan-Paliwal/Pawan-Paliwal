'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

type RevealProps = {
    className?: string;
	children: JSX.Element;
	direction: 'left' | 'down' | "right";
};
export default function Reveal({ className, children, direction = 'left' }: RevealProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: '', once: true});
	let sideInFrom;
	switch (direction) {
		case 'left':
			sideInFrom = 'translateX(-50px)';
			break;
		case 'right':
			sideInFrom = 'translateX(50px)';
			break;
        case "down":
			sideInFrom = 'translateY(50px)';
			break;
	}

	return (
		<div
            className={className}
			ref={ref}
			style={{
				transform: isInView ? 'none' : `${sideInFrom}`,
				opacity: isInView ? 1 : 0,
				transition: 'all .5s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
			}}>
			{children}
		</div>
	);
}
