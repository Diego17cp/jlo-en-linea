import { Header } from "../components/header";
import { sectionsData } from "../utils";
import { SectionList } from "../components/SectionList";

export const Home = () => {
	return (
		<main>
			<Header />
			<section className="container-main">
				<SectionList data={sectionsData} />
			</section>
		</main>
	);
};
