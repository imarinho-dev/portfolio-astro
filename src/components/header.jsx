import { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "./button";

const Header = () => {
	const [toggleButton, setToggleButton] = useState(true);

	const toggleButtonHandler = () => setToggleButton(!toggleButton);

	return (
		<header className="w-screen h-screen bg-gray-900">
			<div className="container mx-auto h-full bg-white">
				<nav className="flex flex-wrap justify-between	 items-center container mx-auto max-h-fit bg-white px-4 py-1 drop-shadow-sm">
					<div className="w-1/2 md:w-1/3">
						<a
							className="uppercase tracking-wider font-bold text-gray-900"
							href="#"
						>
							Iran Marinho
						</a>
					</div>

					<div
						className=" w-1/2 md:w-1/3 flex justify-end items-center "
						onClick={toggleButtonHandler}
					>
						<Icon
							className="cursor-pointer md:hidden"
							width={32}
							height={32}
							icon="material-symbols:menu-rounded"
						/>
					</div>
					<div className="w-[95%] md:w-1/3">
						<ul
							className={`${
								toggleButton && "hidden"
							} md:flex flex-col md:flex-row md:space-x-6 transition duration-200 items-start  md:justify-end md:items-center text-center space-y-4 md:space-y-0 text-gray-500 last:last-of-type:mb-4 md:last:last-of-type:mb-0 first:first-of-type:mt-4 md:first:first-of-type:mt-0`}
						>
							<li className="nav-link">
								<a className="" href="#">
									About
								</a>
							</li>
							<li className="nav-link">
								<a href="#">Projects</a>
							</li>
							<li className="nav-link">
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
				</nav>
				<div className="flex justify-center items-center h-full">
					<div className="max-w-xl -translate-y-2/3 border-l-8 pl-4 border-gray-900">
						<h1 className="flex flex-col  uppercase font-bold text-gray-900">
							<span className="text-[28px]">Hi, I'm</span>
							<span className="text-[48px]">Iran Marinho</span>
						</h1>
						<p className="capitalize mb-4 text-gray-500 tracking-[2px] text-xl">
							Front-end developer & Freelancer
						</p>
						<div>
							<Button title="Get in touch" href="#" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
