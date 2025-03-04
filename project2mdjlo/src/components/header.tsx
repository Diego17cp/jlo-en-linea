import "../header.css";

export const Header = () => {
	return (
		<header className="header">
            <nav className="nav-container">
                <div className="nav-content">
                    <a className="logo-section" href="https://www.munijlo.gob.pe/web/" target="_blank" rel="noreferrer">
                        <img 
                            src="/logo.jpeg" 
                            alt="Logo Municipal" 
                            className="nav-logo"
                        />
                        <h3 className="nav-title">
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
