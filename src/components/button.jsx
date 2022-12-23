const Button = ({ title, href }) => {
	return (
		<a
			className="btn shadow-btn-anime hover:shadow-btn-anime-hover"
			href={href}
		>
			{title}
		</a>
	);
};

export default Button;
