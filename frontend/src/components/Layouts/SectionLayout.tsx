import { Link, Outlet, useParams } from "react-router";
import { sectionData } from "../../utils";

export const SectionLayout = () => {
	const { id } = useParams();
	const section = id ? sectionData.find((s) => s.id === id) : null;
	return (
		<>
			<section className="mb-10 ml-5 flex gap-5 w-full md:w-2/3 justify-center md:justify-start items-center">
				<Link
					to="/"
					className="text-3xl md:text-4xl text-primary font-titles hover:text-secondary transition-all duration-300 ease-in"
				>
					<i className="fa-solid fa-house mr-2 align"></i>
					Inicio
				</Link>
				<div className="bg-primary w-1 h-10 rounded-full"></div>
				{section && (
					<div className="flex gap-5 items-center">
						<img
							src={section.iconUrl}
							alt={section.title}
							className="w-10 h-10 md:w-12 md:h-12"
						/>
						<span className="text-2xl md:text-3xl text-secondary font-titles">
							{section.title}
						</span>
					</div>
				)}
			</section>
			<Outlet />
		</>
	);
};
