import Link from 'next/link';
import Button from '@/components/button';

export default function Page() {
	return (
		<div className='flex h-screen items-center justify-center font-main'>
			<div className='flex flex-col items-center space-y-3'>
				<h1 className='text-8xl font-black'>404</h1>
				<p className='text-2xl font-normal'>The world's small, ain't it?</p>
				<Button>
					<Link href='/'>Back to home</Link>
				</Button>
			</div>
		</div>
	);
}
