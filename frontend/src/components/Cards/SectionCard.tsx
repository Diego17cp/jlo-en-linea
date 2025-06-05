import { Link } from "react-router";

export const SectionCard = ({ id: name, title, desc, iconUrl, href } : Section) => {
	return (
		<Link
			to={`${href}/${name}`}
			className="border-2 group-hover:opacity-50 hover:opacity-100 border-primary rounded-md p-4 flex items-center bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out"
		>
			<div className="w-1/3 h-full flex items-center justify-center">
				<img src={iconUrl} alt={`${title} Icon`} className="w-full h-full" />
			</div>
			<div className="p-2 flex items-center flex-col justify-center gap-4 w-2/3 h-full">
				<h3 className="text-xl md:text-3xl font-semibold font-titles text-primary">
					{title}
				</h3>
				<p className="text-base md:text-lg">{desc}</p>
			</div>
		</Link>
	);
};
