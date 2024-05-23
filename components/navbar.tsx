'use client';

import Button from './button';
import Logo from './logo';
import { Link } from 'react-scroll';
import { toast } from 'sonner';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { emailAddress } from '@/constants';
import { motion } from 'framer-motion';

const navbarBarLinks = [
	{
		name: 'About',
		href: 'about',
	},
	{
		name: 'Dexterity',
		href: 'dexterity',
	},
	{
		name: 'Projects',
		href: 'projects',
	},
	{
		name: 'Socials',
		href: 'contact',
	},
];

const navLinkContainerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 2.6, 
			staggerChildren: 0.1,
		},
	},
};

const navLinksVariants = {
    hidden: {opacity: 0, y: -10},
    visible: {
        opacity: 1,
        y: 0.3,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}


export default function Navbar() {
	return (
		<div className='absolute w-full'>
			<nav className='container mt-4 flex items-center justify-between font-inter text-[16px] sm:p-4'>
				{/* links */}
				<div className='hidden w-1/3 lg:block'>
					<span>Menu</span>
				</div>
				<motion.ul
					variants={navLinkContainerVariants}
					initial='hidden'
					animate='visible'
					className='flex w-1/3 gap-x-8 lg:hidden sm:w-1/2'>
					{navbarBarLinks.map((link, idx) => {
						return (
							<motion.li
                                variants={navLinksVariants}
								key={idx}
								className='relative cursor-pointer rounded-lg text-secondary-700 before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-full before:translate-y-2 before:bg-secondary-700 before:opacity-0 before:transition-all before:duration-200 hover:before:translate-y-1 hover:before:opacity-100'>
								<Link to={link.href} smooth={true} duration={800}>
									{link.name}
								</Link>
							</motion.li>
						);
					})}
				</motion.ul>

				{/* logo */}
				<div className='flex w-1/3 justify-center sm:hidden'>
					<div className='w-44'>
						<Logo />
					</div>
				</div>

				{/* contact button */}
				<motion.div
                    initial={{ opacity: 0, y: -10}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{
                        delay: 3 
                    }}
					className='w-1/3 text-right sm:w-1/2'>
					<CopyToClipboard
						text={emailAddress}
						onCopy={() => toast('Email copied')}>
						<Button variant='secondary'>Get in touch</Button>
					</CopyToClipboard>
				</motion.div>
			</nav>
		</div>
	);
}
