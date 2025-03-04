import { Header } from "../components/header";
import { linksData } from "../utils";
import { LinkList } from "../components/LinkList";

export const Home = () => {
	return (
		<main>
			<Header />
			<section className="container-main">
				<LinkList data={linksData} />
			</section>
		</main>
	);
};
