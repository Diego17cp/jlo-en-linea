import { Link, useParams } from "react-router";
import { ConsultasLayout } from "../layouts/ConsultasLayout";
import { useEffect, useState } from "react";
import axios from "axios";

// TYPES
export interface Awards {
    mercado:          string;
    sector:           string;
    numero:           string;
    fecha_emision:    string;
    fecha_caducidad:  string;
    fecha_renovacion: string;
    fecha_reversion:  string;
    seccion:          string;
    puesto:           string;
    anios:            string;
    estado:           string;
    motivo_reversion: string;
}
export interface Conductor {
    numero:           string;
    tipodoc:          string;
    giro_negocio:     string;
    razon_social:     string;
    nombre_comercial: string;
    representante:    string;
}
export interface Data {
    awards: Awards;
    conductor: Conductor;
}

export const GMunicipal = () => {
    const BASE_URL = import.meta.env.VITE_CONSULTAS_GMUNICIPAL_API_URL;
    const { id } = useParams<{ id: string }>();
    const [consultData, setConsultData] = useState<Data | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchGMunicipalData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await axios.get(`${BASE_URL}/${id}`)
                if (response.data.success) {
                    const data = response.data.data as Data;
                    setConsultData(data);
                } else {
                    setConsultData(null);
                    setError("No se encontró información para el ID proporcionado");
                }
            } catch (error) {
                setError("Error al realizar la consulta");
                console.error("Error fetching data: ", error)
            } finally {
                setIsLoading(false);
            }
        }
        if (id) fetchGMunicipalData()
    }, [BASE_URL, id])
    
    if (isLoading) {
        return (
            <ConsultasLayout>
                <div className="flex flex-col items-center justify-center min-h-[60vh] w-full p-6">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                    <p className="mt-4 text-gray-600">
                        Cargando información...
                    </p>
                </div>
            </ConsultasLayout>
        );
    }
    
    if (error || !consultData) {
        return (
            <ConsultasLayout>
                <div className="flex flex-col items-center justify-center min-h-[60vh] w-full p-4 sm:p-6">
                    <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg max-w-3xl w-full">
                        <div className="flex items-center">
                            <i className="fas fa-exclamation-triangle text-red-500 text-3xl mr-3"></i>
                            <h2 className="text-xl font-semibold text-red-800">
                                Error en la consulta
                            </h2>
                        </div>
                        <p className="mt-3 text-gray-700">
                            {error ||
                                "No se encontró información para el ID proporcionado"}
                        </p>
                        <p className="mt-2 text-gray-700">
                            ID consultado: {id}
                        </p>
                        <Link
                            className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 w-full sm:w-auto"
                            to={"/"}
                        >
                            Volver atrás
                        </Link>
                    </div>
                </div>
            </ConsultasLayout>
        );
    }
    
    const { awards, conductor } = consultData;
    
    return (
        <ConsultasLayout>
            <div className="flex flex-col items-center w-full bg-gray-50 p-3 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 text-center">
                    Consulta de Adjudicación Municipal
                </h1>

                <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-primary text-white p-4 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold">
                                Adjudicación N° {awards.numero}
                            </h2>
                            <p>Puesto N° {awards.puesto} - {awards.seccion}</p>
                        </div>
                        <div className="flex items-center">
                            <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                    awards.estado === "VIGENTE"
                                        ? "bg-green-100 text-green-800"
                                        : awards.estado === "REVERTIDO"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-yellow-100 text-yellow-800"
                                }`}
                            >
                                <i
                                    className={`fas mr-1 ${
                                        awards.estado === "VIGENTE"
                                            ? "fa-check-circle text-green-500"
                                            : awards.estado === "REVERTIDO"
                                            ? "fa-times-circle text-red-500"
                                            : "fa-clock text-yellow-500"
                                    }`}
                                ></i>
                                {awards.estado}
                            </span>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="mb-6 pb-6 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">
                                <i className="fas fa-user mr-2 text-primary"></i>
                                Información del adjudicatario
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Representante
                                    </p>
                                    <p className="font-medium">
                                        {conductor.representante}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        {conductor.tipodoc}
                                    </p>
                                    <p className="font-medium">
                                        {conductor.numero}
                                    </p>
                                </div>
                                {conductor.razon_social && (
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Razón Social
                                        </p>
                                        <p className="font-medium">
                                            {conductor.razon_social}
                                        </p>
                                    </div>
                                )}
                                {conductor.nombre_comercial && (
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Nombre Comercial
                                        </p>
                                        <p className="font-medium">
                                            {conductor.nombre_comercial}
                                        </p>
                                    </div>
                                )}
                                {conductor.giro_negocio && (
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Giro de Negocio
                                        </p>
                                        <p className="font-medium">
                                            {conductor.giro_negocio}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mb-6 pb-6 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">
                                <i className="fas fa-store mr-2 text-primary"></i>
                                Información del puesto
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <p className="text-sm text-gray-500">
                                        Mercado
                                    </p>
                                    <p className="font-medium">
                                        {awards.mercado}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Sector
                                    </p>
                                    <p className="font-medium">
                                        {awards.sector}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Sección
                                    </p>
                                    <p className="font-medium">
                                        {awards.seccion}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        N° de Puesto
                                    </p>
                                    <p className="font-medium">
                                        {awards.puesto}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Periodo de adjudicación
                                    </p>
                                    <p className="font-medium">
                                        {awards.anios} año{awards.anios !== "1" ? "s" : ""}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 pb-6 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">
                                <i className="fas fa-calendar-alt mr-2 text-primary"></i>
                                Fechas importantes
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Fecha de emisión
                                    </p>
                                    <p className="font-medium">
                                        {awards.fecha_emision}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Fecha de caducidad
                                    </p>
                                    <p className="font-medium">
                                        {awards.fecha_caducidad}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Fecha de renovación
                                    </p>
                                    <p className="font-medium">
                                        {awards.fecha_renovacion}
                                    </p>
                                </div>
                                {awards.estado === "REVERTIDO" && (
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Fecha de reversión
                                        </p>
                                        <p className="font-medium text-red-600">
                                            {awards.fecha_reversion}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        {(awards.estado === "REVERTIDO" && awards.motivo_reversion) && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                                    <i className="fas fa-info-circle mr-2 text-primary"></i>
                                    Información adicional
                                </h3>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <div className="flex items-start">
                                        <i className="fas fa-exclamation-triangle text-red-500 mt-1 mr-3"></i>
                                        <div>
                                            <h4 className="font-medium text-red-800 mb-1">
                                                Adjudicación revertida
                                            </h4>
                                            <p className="text-sm text-gray-700">
                                                <span className="font-medium">Motivo:</span> {awards.motivo_reversion}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="bg-gray-50 px-6 py-4 text-right">
                        <Link
                            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 flex items-center justify-center inline-flex ml-auto"
                            to={"/"}
                        >
                            <i className="fas fa-arrow-left mr-2"></i>
                            Volver atrás
                        </Link>
                    </div>
                </div>
            </div>
        </ConsultasLayout>
    )
}