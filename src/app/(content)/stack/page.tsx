export default function About() {
	return (
		<>
			<span className="text-green mb-6 block">Programming stack</span>

			<div className="flex flex-col gap-4">
				<span className="text-purple block">Favorite &#9829;</span>
				<div className="flex flex-col">
					<span className="text-white/50 mb-2">Frontend</span>
					<p className="ml-4">React | Vue | Svelte</p>
				</div>

				<div className="flex flex-col">
					<span className="text-white/50 mb-2">Backend</span>
					<p className="ml-4">Nest | Express | FastAPI</p>
				</div>
				<hr className="border-white/25" />

				<span className="text-purple block">Learning</span>
				<p>Go</p>

				<hr className="border-white/25" />

				<span className="text-purple block">Improving</span>
				<p>Software architecture, design patterns, microservices</p>

				<hr className="border-white/25" />

				<p className="text-white/50 text-sm">
					This website was made with Next.js, tailwind, radix icons and aura
					theme (by{" "}
					<a
						href="https://github.com/daltonmenezes"
						target="_blank"
						rel="noreferrer"
						className="text-purple"
					>
						@daltonmenezes
					</a>
					)
				</p>
			</div>
		</>
	);
}
