import { cn } from '@/lib/utils';

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'ghost';
};

export default function Button({
	children,
	className,
	onClick,
	variant = 'primary',
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={cn(
				` h-[35px] rounded-full bg-primary-500 px-6 font-inter  text-[16px] text-white shadow-sm transition-all duration-300 hover:scale-[.99] hover:bg-primary-600 hover:text-white hover:shadow-lg active:scale-95`,
				{
					'bg-secondary-500 text-secondary-50 hover:bg-secondary-700 hover:text-white':
						variant === 'secondary',
					'bg-transparent text-secondary-700 shadow-none hover:bg-secondary-700/30 hover:text-secondary-700':
						variant === 'ghost',
				},
				className,
			)}>
			{children}
		</button>
	);
}
