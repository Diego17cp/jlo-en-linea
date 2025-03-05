import "../header.css";

export const Header = () => {
	return (
		<header className="header shadow-md w-full bg-white py-4 pl-4">
            <nav className="nav-container">
                <div className="nav-content flex items-center gap-4">
                    <a className="logo-section flex items-center gap-4" href="https://www.munijlo.gob.pe/web/" target="_blank" rel="noreferrer">
                        <img 
                            src="/logo.jpeg" 
                            alt="Logo Municipal" 
                            className="nav-logo w-12 h-16 object-contain" //tamaño del logo
                        />
                        <h3 className="font-(family-name:--titles) text-(--secondary-color) font-medium flex flex-col text-lg">
                            <span>Municipalidad Distrital de</span>
                            <span>José Leonardo Ortiz</span>
                        </h3>
                    </a>
                </div>
            </nav>
        </header>
	);
};

export default Header;