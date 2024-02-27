import { cn } from "@/utils/cn";
import { ComponentProps, forwardRef } from "react";

export interface InputProps extends ComponentProps<"input"> {
	label: string;
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ name, id, label, error, className, ...props }, ref) => {
		const inputId = id ?? name;
		return (
			<>
				<div className="flex gap-2">
					<label htmlFor={inputId} className="text-nowrap">
						{label}
					</label>
					<input
						{...props}
						id={inputId}
						ref={ref}
						type="text"
						autoComplete="off"
						className={cn(
							"appearance-none outline-none bg-black text-green",
							error && "!text-red-700",
							className,
						)}
					/>
				</div>
				{error && (
					<span className="text-xs text-red-700 select-none">{error}</span>
				)}
			</>
		);
	},
);
