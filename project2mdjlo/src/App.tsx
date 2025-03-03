import { Header } from "./components/header";
import { linksData } from "./utils";
import { LinkList } from "./components/LinkList";
import "./App.css";
function App() {
	return (
		<main>
			<Header />
			<section className="container-main">
				<LinkList data={linksData} />
			</section>
		</main>
	);
}

export default App;
