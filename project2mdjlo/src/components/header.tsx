import "../header.css";

export const Header = () => {
	return (
		<header className="header">
            <nav className="nav-container">
                <div className="nav-content">
                    <div className="logo-section">
                        <img 
                            src="/logo.jpeg" 
                            alt="Logo Municipal" 
                            className="nav-logo"
                        />
                        <h3 className="nav-title">
                            <span>Municipalidad Distrital de</span>
                            <span>José Leonardo Ortiz</span>
                        </h3>
                    </div>
                </div>
            </nav>
        </header>
	);
};

export default Header;
