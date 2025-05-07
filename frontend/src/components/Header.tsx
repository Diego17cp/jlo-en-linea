import { HeaderTopLink } from "./Header/HeaderTopLink";
import mpv from "../assets/header/mpv.png";
import tri from "../assets/header/tramit-icon.png";
import logo from "../assets/header/modern-logo.png";
import jloinline from "../assets/header/jloinline.png";
import gobLogo from "../assets/header/gob-logo.png";
import transparencia from "../assets/header/transparencia-logo.png";

export const Header = () => {
	return (
		<header className="header shadow-md w-full bg-white">
			<div className="w-full bg-secondary py-0.5 flex items-center justify-start">
				<div className="flex items-center gap-5 mx-auto md:ml-30 p-2 text-white">
					<HeaderTopLink href="">
						<img
							src={tri}
							alt=""
							className="mr-2.5 h-7 align-middle"
						/>
						Consulte su trámite
					</HeaderTopLink>
					<div className="h-10 w-0.5 bg-white rounded-full"></div>
					<HeaderTopLink href="">
						<img src={mpv} alt="" className="mr-2.5 h-5" />
						Mesa de partes Virtual
					</HeaderTopLink>
				</div>
			</div>
			<nav className="py-5">
				<div className="nav-content flex flex-col md:flex-row items-center justify-around flex-wrap">
					<div className="flex items-center w-full md:w-1/2 justify-around md:ustify-between">
						<a
							className="flex items-center gap-4"
							href="#"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={logo}
								alt="Logo Municipal"
								className="h-14 md:h-20 object-contain" //tamaño del logo
							/>
						</a>
						<a href="#" className="flex items-center gap-4">
							<img
								src={jloinline}
								alt="Logo de JLO en línea"
								className="h-14 md:h-20"
							/>
						</a>
					</div>
					<div className="bg-primary rounded-md py-3 mt-8 md:mt-0 md:py-6 px-4 flex items-center gap-4">
						<a href="" className="text-white font-bold text-2xl">
							<img
								src={gobLogo}
								className="h-10"
								alt="Logo del gobierno del Perú"
							/>
						</a>
						<div className="w-1 h-10 rounded-full bg-white"></div>
						<a
							href=""
							className="flex items-center gap-2 text-white font-bold text-2xl"
						>
							<img
								src={transparencia}
								alt="Logo de transparencia"
								className="h-12"
							/>
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
