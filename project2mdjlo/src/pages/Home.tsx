import { Header } from "../components/header";
import { sectionData } from "../utils";
import { SectionList } from "../components/SectionList";
import { useEffect, useState } from "react";

const navigate = (href) => {
    window.history.pushState({}, "", href);
    const navEvt = new Event('pushstate');
    window.dispatchEvent(navEvt);
}


export const Home = () => {
    const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('pushstate', onLocationChange);
        return () => {
            window.removeEventListener('pushstate', onLocationChange);
        }
    } , [])

	return (
		<main>
			<Header />
			<section className="container-main">
				<SectionList data={sectionData} />
			</section>
		</main>
	);
};
