import { Link } from "react-router";

export const ServiceCard = ({ title, iconUrl, href } : Omit<Section, 'desc' | 'id'>) => {
    return (
        <Link to={href} className="group-hover:opacity-60 hover:opacity-100 py-8 gap-8 px-5 flex flex-col items-center border-2 border-primary transition-all duration-300 ease-in-out rounded-lg shadow-md hover:shadow-lg hover:scale-110">  
            <div className="size-40 rounded-full border border-tertiary flex justify-center items-center bg-white transition-all duration-300 ease-in-out group-hover:shadow-lg mb-2">
                <img src={iconUrl} alt={title} className="max-w-[70%] max-h-[70%] object-contain" />
            </div>
            <h3 className="mt-2 text-center text-secondary font-titles text-lg font-semibold w-full break-words leading-tight">
                {title}
            </h3>
        </Link>
    )
}