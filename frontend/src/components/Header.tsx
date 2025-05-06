import "../header.css";
import { HeaderTopLink } from "./Header/HeaderTopLink";

export const Header = () => {
	return (
		<header className="header shadow-md w-full bg-white">
			<div className="w-full bg-secondary py-0.5 flex items-center justify-start">
				<div className="flex items-center gap-5 mx-auto md:ml-7 p-2 text-white">
					<HeaderTopLink href="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
							className="align-middle inline mr-2.5"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5" />
							<path d="M17 8.5v-3.5a2 2 0 1 1 2 2h-2" />
							<path d="M19 3h-11a3 3 0 0 0 -3 3v11" />
							<path d="M9 7h4" />
							<path d="M9 11h4" />
							<path d="M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3z" />
						</svg>
						Consulte su trámite
					</HeaderTopLink>
					<div className="h-10 w-0.5 bg-white rounded-full"></div>
					<HeaderTopLink href="">
						<i className="fa-duotone fa-solid fa-laptop mr-2.5 align-middle"></i>
						Mesa de partes Virtual
					</HeaderTopLink>
				</div>
			</div>
			<nav className="py-5">
				<div className="nav-content flex items-center justify-around">
					<a
						className="flex items-center gap-4"
						href="#"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/logo.jpeg"
							alt="Logo Municipal"
							className="nav-logo w-12 h-16 object-contain" //tamaño del logo
						/>
						<h3 className="font-titles flex flex-col">
							<span className="font-medium text-primary">
								Municipalidad
							</span>
							<span className="font-extrabold text-secondary">
								José
							</span>
							<span className="font-extrabold text-secondary">
								Leonardo
							</span>
							<span className="font-extrabold text-secondary">
								Ortiz
							</span>
						</h3>
					</a>
					<a href="" className="flex items-center gap-4">
						<i className="fa-duotone fa-solid fa-laptop text-primary text-5xl"></i>
                        <h3 className="font-titles flex flex-col">
							<span className="font-extrabold text-secondary">
								José Leonardo
							</span>
							<span className="font-extrabold text-secondary">
								Ortiz
							</span>
							<span className="font-medium text-primary">
								En Línea
							</span>
						</h3>
					</a>
                    <div className="bg-primary rounded-md py-4 px-4 flex items-center gap-4">
                        <a href="" className="text-white font-bold text-2xl">
                            <i className="fa-solid fa-shield mr-2"></i>
                            gob.pe
                        </a>
                        <div className="w-1 h-10 rounded-full bg-white"></div>
                        <a href="" className="flex items-center gap-2 text-white font-bold text-2xl">
                            <h3 className="flex flex-col">
                                Portal de
                                <span>Transparencia</span>
                            </h3>
                            <i className="fa-solid fa-magnifying-glass ml-2"></i>
                        </a>
                    </div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
