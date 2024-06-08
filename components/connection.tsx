'use client';

import Image from 'next/image';
import Button from './button';
import Reveal from './reveal';
import { toast } from 'sonner';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { emailAddress } from '@/constants';

export default function Connection() {
	return (
		<div id='contact' className='relative w-full pt-52 sm:pt-20'>
			<img
				src='/images/dexterity-wave.svg'
				className='absolute left-0 top-0 w-full sm:hidden'
			/>
			<div className='flex justify-center'>
				<div className='relative'>
					<h1 className="font-main text-7xl leading-[90px] text-secondary-700 text-center lg:text-[65px] lg:leading-tight sm:text-5xl sm:leading-[1.2]">
						<Reveal direction='down'>
							<span className='block'>
								Thanks for stopping by!
							</span>
						</Reveal>
						<Reveal direction='down'>
							<span className='block'>
								Stay connected
							</span>
						</Reveal>
					</h1>

					<Image
						src='/images/smiley.svg'
						alt='thankyou'
						width={50}
						height={50}
						className='absolute right-0 -top-[15%] animate-float'
					/>

					<Reveal direction='down' className='mt-8 text-center'>
						<CopyToClipboard
							text={emailAddress}
							onCopy={() => toast('Email copied')}>
							<Button>Get in Touch</Button>
						</CopyToClipboard>
					</Reveal>
				</div>
			</div>
		</div>
	);
}
