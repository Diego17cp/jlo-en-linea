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
		<div className="link-list">
			{sections.map((section) => (
				<div className="link-item" key={section.id}>
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
