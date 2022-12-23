import { Icon } from "@iconify/react";

const About = () => {
	return (
		<section className="w-screen bg-gray-900">
			<div className="container mx-auto px-4 lg:px-8 xl:px-16 2xl:px-24 pt-8 md:pt-16 bg-gray-50">
				<h2 className="">About me</h2>
				<div className="grid  grid-cols-1 lg:grid-cols-2 mx-auto gap-y-4 pb-32">
					<div className="lg:max-w-xl w-full h-72 md:h-96  bg-white border-l-8 border-gray-900 mb-4 md:mb-8 col-span-1"></div>
					<div className="">
						<p className="leading-normal tracking-wider text-xl text-gray-700 mb-8">
							Hello I'm Iran. A freelancer Front End Developer based in Brazil.
							I specialized in creating interactive experiences and functional
							interfaces using React, Tailwindcss and Astro.
						</p>
						<div className="grid grid-cols-3 gap-x-4">
							{/* Skills */}
							<div>
								<h3>Skills</h3>
								<ul className="leading-normal tracking-wider text-lg text-gray-700">
									<li>React</li>
									<li>Vue</li>
									<li>Javascript</li>
									<li>Tailwind CSS</li>
								</ul>
							</div>
							{/* Tools */}
							<div>
								<h3>Tools</h3>
								<ul className="leading-normal tracking-wider text-lg text-gray-700">
									<li>VS Code</li>
									<li>Github</li>
									<li>Vite</li>
									<li>Astro</li>
								</ul>
							</div>
							{/* Hobbies */}
							<div>
								<h3>Hobbies</h3>
								<ul className="leading-normal tracking-wider text-lg text-gray-700">
									<li>Play games</li>
									<li>Listen to music</li>
									<li>Watch movies</li>
									<li>Go hiking</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
