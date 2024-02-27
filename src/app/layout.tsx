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
		<html lang="en">
			<body className={inter.className}>
				<main className="flex min-h-screen flex-col items-center justify-center gap-10 p-2">
					<div className="bg-black border-2 border-purple rounded-xl lg:w-[966px] min-h-[560px] p-8 md:pb-8">
						{children}
					</div>
					<span className="select-none">Made with 🍙</span>
				</main>
			</body>
		</html>
	);
}
