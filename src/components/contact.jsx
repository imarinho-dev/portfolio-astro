const Contact = () => {
	return (
		<section className="w-screen bg-gray-900">
			<div className="container mx-auto px-4 lg:px-8 xl:px-16 2xl:px-24 pt-8 md:pt-16 bg-gray-50">
				<h2 className="">Contact</h2>

				<form action="#" method="post" className="form">
					<div className="contact lg:order-1">
						<label htmlFor="">Name</label>
						<input type="text" placeholder=" " />
					</div>
					<div className="contact lg:order-3">
						<label htmlFor="">Email</label>
						<input type="email" placeholder=" " />
					</div>
					<div className="contact lg:order-2 lg:row-span-2 lg:h-full">
						<label htmlFor="">Message</label>
						<textarea rows="5" />
					</div>
					<div className="contact lg:order-4">
						<button
							className="btn shadow-btn-anime hover:shadow-btn-anime-hover row-span-full "
							type="submit"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
