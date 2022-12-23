import ProjectCard from "./project-card";

const ProjectContainer = () => {
	return (
		<div className="w-screen bg-gray-900">
			<div className="container mx-auto px-4 lg:px-8 xl:px-16 2xl:px-24 pt-8 md:pt-16 bg-white">
				<h2 className="">My Projects</h2>
				{/* Container */}
				<div className="grid  grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mx-auto gap-y-16 lg:gap-x-4 xl:gap-x-16 2xl:gap-x-4 pb-32">
					{/* Card 1 */}
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</div>
	);
};

export default ProjectContainer;
