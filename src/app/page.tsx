import { GithubIcon } from "@/components/github-icon";
import { LinkedinIcon } from "@/components/linkedin-icon";
import { MenuLink } from "@/components/menu-link";
import Image from "next/image";

const menuLinks = [
	{
		label: "About",
		href: "/about",
		external: false,
	},
	{
		label: "Programming stack",
		href: "/stack",
		external: false,
	},
	{
		label: "Open curriculum",
		href: "https://pub-a0db1886ae0b47b3bc7685b1bd565fb7.r2.dev/Curriculum%20-%20Igo%20Brasil%20Monteiro.pdf",
		external: true,
	},
	{
		label: "Get in touch",
		href: "/contact",
		external: false,
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
					<span className="block">Hi 🖖, I'm Igo.</span>
					<span className="block">I'm a Full Stack Developer</span>
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
						<MenuLink
							key={menuLink.href}
							href={menuLink.href}
							openInNewWindow={menuLink.external}
						>
							&gt; {menuLink.label}
						</MenuLink>
					))}
				</div>
			</div>
		</div>
	);
}
