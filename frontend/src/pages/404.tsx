import { Link } from "react-router";

export const NotFound = () => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <div className="flex-1 flex flex-col items-center justify-center w-full bg-gray-50 p-4 sm:p-6">
                <div className="bg-gray-50 rounded-lg p-6 sm:p-8 max-w-2xl w-full text-center">
                    {/* Icono y número 404 */}
                    <div className="mb-6">
                        <i className="fas fa-exclamation-triangle text-primary text-6xl sm:text-8xl mb-4"></i>
                        <h1 className="text-6xl sm:text-8xl font-bold text-gray-800 mb-2">404</h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                    
                    {/* Mensaje principal */}
                    <div className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                            Página no encontrada
                        </h2>
                        <p className="text-gray-600 text-lg mb-2">
                            Lo sentimos, la página que buscas no existe o ha sido movida.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Es posible que el enlace esté roto o que hayas escrito incorrectamente la URL.
                        </p>
                    </div>
                    
                    {/* Opciones de navegación */}
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/"
                                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors duration-300 ease-in-out cursor-pointer font-medium flex items-center justify-center"
                            >
                                <i className="fas fa-home mr-2"></i>
                                Ir al inicio
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300 ease-in-out cursor-pointer font-medium flex items-center justify-center"
                            >
                                <i className="fas fa-arrow-left mr-2"></i>
                                Volver atrás
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}