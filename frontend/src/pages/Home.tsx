import { sectionData } from "../utils";
import { SectionCard } from "../components/Cards/SectionCard";
import { Section } from "../types";
const sections: Section[] = sectionData;

export const Home = () => {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 p-4 w-full group">
			{sections.map((section) => (
				<SectionCard
					key={section.id}
					id={section.id}
					title={section.title}
					desc={section.desc}
					iconUrl={section.iconUrl}
					href={section.href}
				/>
			))}
		</div>
	);
};
