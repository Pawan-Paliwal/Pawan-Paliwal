'use client';
import Image from "next/image";




export default function Logo() {
	return (
		<Image src='/images/logo.png' alt='main-logo' width={170} height={44} />
	);
}
// <Image src='/images/logo.svg' alt='main-logo' width={170} height={44} />
