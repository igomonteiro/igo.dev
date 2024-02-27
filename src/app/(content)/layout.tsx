import { ArrowLeftIcon } from "@/components/arrow-left-icon";
import Link from "next/link";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="lg:mx-[164px]">
			<Link href="/" className="flex items-center gap-2 my-[64px]">
				<ArrowLeftIcon />
				<span className="text-purple">Go back</span>
			</Link>
			{children}
		</div>
	);
}
