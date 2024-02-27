import { GithubIcon } from "@/components/github-icon";
import { LinkedinIcon } from "@/components/linkedin-icon";
import { MenuLink } from "@/components/menu-link";
import Image from "next/image";

const menuLinks = [
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Programming stack",
		href: "/stack",
	},
	{
		label: "Open curriculum",
		href: "#",
	},
	{
		label: "Get in touch",
		href: "/contact",
	},
];

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="mt-16 flex flex-col justify-center items-center gap-2">
				<div className="size-16 rounded-full">
					<Image
						src="https://github.com/igomonteiro.png"
						alt="Avatar"
						width={64}
						height={64}
						quality={100}
						className="rounded-full"
					/>
				</div>
				<div className="text-center">
					<span className="block">Hello, I'm Igo.</span>
					<span className="block">Welcome to my website!</span>
				</div>
				<div className="flex gap-2">
					<a href="https://github.com/igomonteiro" className="hover:text-green">
						<GithubIcon />
					</a>

					<a
						href="https://linkedin.com/in/igomonteiro"
						className="hover:text-green"
					>
						<LinkedinIcon />
					</a>
				</div>
			</div>

			<div className="flex flex-col mt-12 gap-6">
				<span>Press enter or click to select an option</span>
				<div className="flex flex-col gap-3">
					{menuLinks.map((menuLink) => (
						<MenuLink key={menuLink.href} href={menuLink.href}>
							&gt; {menuLink.label}
						</MenuLink>
					))}
				</div>
			</div>
		</div>
	);
}
