import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "igo.dev",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="text-sm">
			<body className={inter.className}>
				<main className="flex min-h-screen flex-col items-center justify-center gap-10">
					<div className="bg-black border-2 border-purple rounded-xl w-[966px] h-[560px]">
						{children}
					</div>
					<span className="select-none">Made with 🍙</span>
				</main>
			</body>
		</html>
	);
}
