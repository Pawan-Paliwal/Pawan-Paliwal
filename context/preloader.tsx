'use client';
import { createContext, useState } from 'react';

export type PreloaderContextProps = {
	isLoaded: boolean;
	loadingDone: () => void;
	navAnimComplete: () => void;
	navAnimDone: boolean;
	toggleMenu: () => void;
	showMenu: boolean;
	setMenuVisibility: (status: boolean) => void;
};
export const PreloaderContext = createContext<PreloaderContextProps | null>(
	null,
);

type PreloadedProps = {
	children: JSX.Element;
};
export default function Preloader({ children }: PreloadedProps) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [navAnimDone, setNavAnimDone] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	function loadingDone() {
		setIsLoaded(true);
	}

	function setMenuVisibility(status: boolean) {
		setShowMenu(status);
	}

	function toggleMenu() {
		setShowMenu((pre) => !pre);
	}

	function navAnimComplete() {
		setNavAnimDone(true);
	}

	return (
		<PreloaderContext.Provider
			value={{
				isLoaded,
				loadingDone,
				navAnimComplete,
				navAnimDone,
				toggleMenu,
				showMenu,
				setMenuVisibility,
			}}>
			{children}
		</PreloaderContext.Provider>
	);
}
