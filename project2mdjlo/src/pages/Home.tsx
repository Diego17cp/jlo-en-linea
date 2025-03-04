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
	const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

	return (
		<div className="link-list">
			{sections.map((section) => (
				<Link
					to={`/seccion/${section.id}`}
					key={section.id}
					className="link-item"
				>
					<div className={`link ${getRandomColor()}`}>
						<i className={section.icon}></i>
					</div>
					<div className="link-content">
						<h3>{section.title}</h3>
						<p>{section.desc}</p>
					</div>
				</Link>
			))}
		</div>
	);
};
