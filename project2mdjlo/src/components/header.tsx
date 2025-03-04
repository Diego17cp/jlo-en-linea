// import "../header.css";

export const Header = () => {
	return (
		<header className="w-full bg-white shadow-md py-4">
            <nav className="mx-auto px-4 md:px-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <img 
                            src="/logo.jpeg" 
                            alt="Logo Municipal" 
                            className="w-12 h-16 md:w-15 md:h-18 object-contain"
                        />
                        <h3 className="flex flex-col m-0 text-secondary font-titles font-medium text-lg md:text-base">
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
