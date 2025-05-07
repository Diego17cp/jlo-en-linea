import { Outlet } from "react-router";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useLocation } from "react-router";
import { MainContainer } from "../MainContainer";
import header from "../../assets/header/header.png";

export const Layout = () => {
	const location = useLocation();
	const isHome = location.pathname === "/";
	return (
		<div className="flex flex-col min-h-screen w-full">
			<Header />
			<main className="flex-1 w-full">
				{isHome && (
					<picture>
						{/* <source media="(max-width: 768px)" srcSet="/header-mobile.png" /> */}
						<img
							src={header}
							alt="Header"
							className="w-full h-80 object-cover"
						/>
					</picture>
				)}
				<MainContainer>
					<Outlet />
				</MainContainer>
			</main>
			<Footer />
		</div>
	);
};
