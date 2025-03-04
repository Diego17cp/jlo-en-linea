import { Header } from "../components/Header";
import { sectionData } from "../utils";
import { SectionList } from "../components/SectionList";

export const Home = () => {
	return (
		<main>
			<Header />
			<section className="container-main">
				<SectionList data={sectionData} />
			</section>
		</main>
	);
};
