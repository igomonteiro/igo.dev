import { cn } from "@/utils/cn";
import { ComponentProps, forwardRef } from "react";

export interface TextAreaProps extends ComponentProps<"textarea"> {
	label: string;
	error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ name, id, label, error, className, ...props }, ref) => {
		const textAreaId = id ?? name;
		return (
			<>
				<div className="flex gap-2">
					<label htmlFor={textAreaId} className="text-nowrap">
						{label}
					</label>
					<textarea
						{...props}
						id={textAreaId}
						ref={ref}
						autoComplete="off"
						className={cn(
							"outline-none bg-black resize-none text-green",
							error && "!text-red-700",
							className,
						)}
						rows={10}
					/>
				</div>
				{error && (
					<span className="text-xs text-red-700 select-none">{error}</span>
				)}
			</>
		);
	},
);
