import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface MenuLinkProps extends LinkProps {
	children: ReactNode;
	openInNewWindow?: boolean;
	selected?: boolean;
	className?: string;
}

export function MenuLink({
	children,
	openInNewWindow,
	className,
	selected,
	...props
}: MenuLinkProps) {
	return (
		<Link
			{...props}
			target={openInNewWindow ? "_blank" : "_self"}
			data-selected={selected}
			className={cn("data-[selected]:text-green hover:text-green", className)}
		>
			{children}
		</Link>
	);
}
