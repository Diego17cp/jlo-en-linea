import { Link } from "react-router";
import { colors, sectionData } from "../utils";

interface Section {
	id: string;
	title: string;
	desc: string;
	icon: string;
}

const sections: Section[] = sectionData;

export const Home = () => {
	const getRandomColor = () =>
		colors[Math.floor(Math.random() * colors.length)];

	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 p-4 w-full">
			{sections.map((section) => (
				<div
					className="bg-transparent p-4 flex justify-between items-center flex-col link-item"
					key={section.id}
				>
					<Link
						to={`/seccion/${section.id}`}
						className={`link ${getRandomColor()}`}
						title={section.title}
					>
						<i className={section.icon}></i>
					</Link>
					<div className="link-content">
						<h3>{section.title}</h3>
						<p>{section.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
};
