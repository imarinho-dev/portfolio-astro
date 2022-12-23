import Button from "./button";

const ProjectCard = () => {
	return (
		<div className="w-full mx-auto bg-gray-100 drop-shadow-sm hover:drop-shadow-md transition duration-200 ease-in border border-gray-200 group">
			<div className="flex flex-col">
				<div className="bg-gray-900 px-8 py-4 w-full h-96 2xl:h-80 flex flex-col justify-end">
					<h3 className="bg-white/70 w-full mx-auto text-center py-4 opacity-0 group-hover:opacity-100">
						Project Name
					</h3>
				</div>
				<div className="bg-white w-full flex flex-col p-4 h-fit justify-between">
					<p className="leading-normal tracking-wider text-xl text-gray-700 ">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
						voluptates animi ex qui, enim ea accusamus quidem quas nemo eum,
						libero nihil, harum alias. Consequatur!
					</p>
					<div className="py-8">Stack</div>
					<div className="flex justify-between">
						<Button title="Preview" href="#" />
						<Button title="Source" href="#" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
