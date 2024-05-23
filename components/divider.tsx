import { cn } from "@/lib/utils";

type DividerProps = {
    className?: string;
}

export default function Divider({ className }: DividerProps) {
	return (
		<div className={cn('mx-auto h-[0.8px] w-full max-w-lg rounded-full bg-secondary-80', className)}></div>
	);
}
