import Image from 'next/image';
import Logo from './logo';
import Divider from './divider';

export default function Footer() {
	return (
		<footer className='container pt-16 md:px-4 sm:px-2'>
			<div className='flex items-center justify-between sm:flex-col'>
				<div className='sm:mb-8'>
					<Image src='/images/logo.svg' alt='logo' width={176} height={45} />
				</div>
				<SocialIcons />
			</div>
			<div className='py-10'>
				<Divider />
			</div>
			<p className='pb-8 text-center font-inter text-sm text-secondary-400'>
				© Copyright – Tejas Sharma
			</p>
		</footer>
	);
}

export function SocialIcons() {
	return (
		<div className='flex space-x-4'>
			<Image src='/images/insta.svg' alt='insta' width={20} height={20} />
			<Image src='/images/twitter.svg' alt='Twitter' width={20} height={20} />
			<Image src='/images/whatsapp.svg' alt='WhatsApp' width={20} height={20} />
			<a href='https://github.com/tejassharma-ts' target='_blank'>
				<Image src='/images/github.svg' alt='GitHub' width={20} height={20} />
			</a>
		</div>
	);
}
