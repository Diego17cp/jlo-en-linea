import { useParams } from "react-router";
import { useLocation } from "react-router";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { Footer } from "./Footer";

export interface Licencia {
	tipo_licencia: string;
	numero_licencia: string;
	fecha_licencia: string;
	fecha_resolucion: string;
	dni: string;
	representante: string;
	numero_resolucion: string;
	numero_expediente: string;
	area: string;
	ciiu_actividad: string;
	direccion: string;
	numero_local: null | string;
	urbanizacion: null | string;
	estado: string;
	estado_entrega: string;
	fecha_entrega: null | string;
	observacion: null | string;
	fecha_anulado: null | string;
	motivo_anulado: null | string;
}

export interface PersonaLicencia {
	numero: string;
	tipodoc: string;
	giro_negocio: string;
	razon_social: string;
	nombre_comercial: string;
	representante: string;
}
export interface LicenciasData {
	licencia: Licencia;
	persona: PersonaLicencia;
}
export interface TransitoData {
	persona: PersonaTransito;
	vehiculo: Vehiculo;
	soat: Soat;
	tarjeta_operatividad: TarjetaOperatividad;
	carnet_seguridad_vial: [];
	certicat: Certicat;
}

export interface Certicat {
	numero_certicat: string;
	fecha_expiracion: string;
	estado: string;
}

export interface PersonaTransito {
	numero: string;
	direccion: string;
	telefono: string;
	celular: string;
	email: string;
	tipodoc: string;
	nombres: string;
	apellidos: string;
}

export interface Soat {
	numero_soat: string;
	fecha_expiracion: string;
	estado: string;
}

export interface TarjetaOperatividad {
	numero_tarjeta: string;
	fecha_expiracion: string;
	estado: string;
}

export interface Vehiculo {
	fecha_registro: string;
	partida_registral: string;
	descripcion: string;
	modelo: string;
	anio_fabricacion: string;
	placa: string;
	serie_chasis: string;
	marca: string;
	color: string;
	ruc: string;
	tipo_empresa: string;
	asociacion: string;
	partida_asociacion: string;
	motor: string;
}

export const ConsultasLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex flex-col min-h-screen w-full">
			<Header />
			<main className="flex-1 w-full">{children}</main>
			<Footer />
		</div>
	);
};

export const Consultas = () => {
	const baseUrl = import.meta.env.VITE_CONSULTAS_API_URL;
	const { id } = useParams<{ id: string }>();
	const location = useLocation();
	const initialType = location.pathname.includes("transito")
		? "transito"
		: "licencias";
	const [consultType, setConsultType] = useState<"licencias" | "transito">(
		initialType
	);
	const [consultData, setConsultData] = useState<
		LicenciasData | TransitoData | null
	>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const isTransito = location.pathname.includes("transito");
		setConsultType(isTransito ? "transito" : "licencias");
	}, [location.pathname]);

	// ESTE FETCH DEBE ESTAR BAJO REVISION POR EL TIPO DE RESPONSE DEL BACK xd
	useEffect(() => {
		const fetchConsultData = async () => {
			setIsLoading(true);
			setError(null);

			const endpoint = `${baseUrl}/${consultType}/consulta/${id}`;
			try {
				const response = await axios.get(endpoint, {
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (response.data.success) {
					if (consultType === "transito") {
						if (
							response.data.data?.success &&
							response.data.data?.data
						) {
							setConsultData(response.data.data.data);
							console.log(
								"Datos de consulta (tránsito):",
								response.data.data.data
							);
						} else {
							setConsultData(null);
							setError(
								"No se encontró información para el ID proporcionado"
							);
						}
					} else {
						if (
							response.data.data?.success &&
							response.data.data?.licencia &&
							response.data.data?.persona
						) {
							setConsultData({
								licencia: response.data.data.licencia,
								persona: response.data.data.persona,
							});
							console.log(
								"Datos de consulta (licencias):",
								response.data.data
							);
						} else {
							setConsultData(null);
							setError(
								"No se encontró información completa para el ID proporcionado"
							);
						}
					}
				} else {
					setConsultData(null);
					setError(
						response.data.message ||
							"No se encontró información para el ID proporcionado"
					);
				}
			} catch (error) {
				setError(
					"Error al consultar la información. Por favor, intente más tarde."
				);
				console.error("Error fetching data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		if (id) {
			fetchConsultData();
		}
	}, [baseUrl, consultType, id]);

	if (isLoading) {
		return (
			<ConsultasLayout>
				\{" "}
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
						<button
							className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 w-full sm:w-auto"
							onClick={() => window.history.back()}
						>
							Volver atrás
						</button>
					</div>
				</div>
			</ConsultasLayout>
		);
	}
	if (consultType === "transito") {
		const { persona, vehiculo, soat, tarjeta_operatividad, certicat } =
			consultData as TransitoData;

		return (
			<ConsultasLayout>
				<div className="flex flex-col items-center w-full bg-gray-50 p-3 sm:p-6">
					<h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 text-center">
						Consulta de Tránsito
					</h1>

					<div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
						{/* Encabezado */}
						<div className="bg-primary text-white p-4 flex justify-between items-center">
							<div>
								<h2 className="text-xl font-semibold">
									Vehículo: {vehiculo.marca} {vehiculo.modelo}
								</h2>
								<p>Placa: {vehiculo.placa}</p>
							</div>
							<div className="flex items-center">
								<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
									<i className="fas fa-car mr-1 text-green-500"></i>
									{vehiculo.descripcion}
								</span>
							</div>
						</div>

						{/* Cuerpo */}
						<div className="p-6">
							{/* Información de la persona */}
							<div className="mb-6 pb-6 border-b border-gray-200">
								<h3 className="text-lg font-semibold text-gray-700 mb-3">
									<i className="fas fa-user mr-2 text-primary"></i>
									Información del propietario
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<p className="text-sm text-gray-500">
											Nombres y Apellidos
										</p>
										<p className="font-medium">
											{persona.nombres}{" "}
											{persona.apellidos}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											{persona.tipodoc}
										</p>
										<p className="font-medium">
											{persona.numero}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Dirección
										</p>
										<p className="font-medium">
											{persona.direccion || "-"}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Contacto
										</p>
										<p className="font-medium">
											{persona.celular ||
												persona.telefono ||
												"-"}
											{persona.email && (
												<span className="block text-sm">
													{persona.email}
												</span>
											)}
										</p>
									</div>
								</div>
							</div>

							{/* Detalles del vehículo */}
							<div className="mb-6 pb-6 border-b border-gray-200">
								<h3 className="text-lg font-semibold text-gray-700 mb-3">
									<i className="fas fa-car mr-2 text-primary"></i>
									Detalles del vehículo
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div>
										<p className="text-sm text-gray-500">
											Marca
										</p>
										<p className="font-medium">
											{vehiculo.marca}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Modelo
										</p>
										<p className="font-medium">
											{vehiculo.modelo}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Año
										</p>
										<p className="font-medium">
											{vehiculo.anio_fabricacion}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Color
										</p>
										<p className="font-medium">
											{vehiculo.color}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											N° Motor
										</p>
										<p className="font-medium">
											{vehiculo.motor}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											N° Chasis
										</p>
										<p className="font-medium">
											{vehiculo.serie_chasis}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Partida Registral
										</p>
										<p className="font-medium">
											{vehiculo.partida_registral}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Fecha de Registro
										</p>
										<p className="font-medium">
											{vehiculo.fecha_registro}
										</p>
									</div>
								</div>
							</div>

							{/* Información de asociación */}
							{vehiculo.asociacion && (
								<div className="mb-6 pb-6 border-b border-gray-200">
									<h3 className="text-lg font-semibold text-gray-700 mb-3">
										<i className="fas fa-building mr-2 text-primary"></i>
										Asociación
									</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<p className="text-sm text-gray-500">
												Nombre
											</p>
											<p className="font-medium">
												{vehiculo.asociacion}
											</p>
										</div>
										<div>
											<p className="text-sm text-gray-500">
												RUC
											</p>
											<p className="font-medium">
												{vehiculo.ruc || "-"}
											</p>
										</div>
										{vehiculo.partida_asociacion && (
											<div>
												<p className="text-sm text-gray-500">
													Partida
												</p>
												<p className="font-medium">
													{
														vehiculo.partida_asociacion
													}
												</p>
											</div>
										)}
									</div>
								</div>
							)}

							{/* Documentos */}
							<div>
								<h3 className="text-lg font-semibold text-gray-700 mb-3">
									<i className="fas fa-file-alt mr-2 text-primary"></i>
									Documentos
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{/* SOAT */}
									<div className="border rounded-lg p-4">
										<div className="flex items-center justify-between mb-2">
											<h4 className="font-medium">
												SOAT
											</h4>
											<span
												className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
													soat.estado === "Vigente"
														? "bg-green-100 text-green-800"
														: "bg-red-100 text-red-800"
												}`}
											>
												<i
													className={`fas fa-circle mr-1 ${
														soat.estado ===
														"Vigente"
															? "text-green-500"
															: "text-red-500"
													}`}
												></i>
												{soat.estado}
											</span>
										</div>
										<p className="text-sm text-gray-500">
											Número
										</p>
										<p className="font-medium">
											{soat.numero_soat}
										</p>
										<p className="text-sm text-gray-500 mt-2">
											Fecha de expiración
										</p>
										<p className="font-medium">
											{soat.fecha_expiracion}
										</p>
									</div>

									{/* Tarjeta de operatividad */}
									<div className="border rounded-lg p-4">
										<div className="flex items-center justify-between mb-2">
											<h4 className="font-medium">
												Tarjeta de Operatividad
											</h4>
											<span
												className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
													tarjeta_operatividad.estado ===
													"Vigente"
														? "bg-green-100 text-green-800"
														: "bg-red-100 text-red-800"
												}`}
											>
												<i
													className={`fas fa-circle mr-1 ${
														tarjeta_operatividad.estado ===
														"Vigente"
															? "text-green-500"
															: "text-red-500"
													}`}
												></i>
												{tarjeta_operatividad.estado}
											</span>
										</div>
										<p className="text-sm text-gray-500">
											Número
										</p>
										<p className="font-medium">
											{
												tarjeta_operatividad.numero_tarjeta
											}
										</p>
										<p className="text-sm text-gray-500 mt-2">
											Fecha de expiración
										</p>
										<p className="font-medium">
											{
												tarjeta_operatividad.fecha_expiracion
											}
										</p>
									</div>

									{/* CERTICAT */}
									<div className="border rounded-lg p-4">
										<div className="flex items-center justify-between mb-2">
											<h4 className="font-medium">
												CERTICAT
											</h4>
											<span
												className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
													certicat.estado ===
													"Vigente"
														? "bg-green-100 text-green-800"
														: "bg-red-100 text-red-800"
												}`}
											>
												<i
													className={`fas fa-circle mr-1 ${
														certicat.estado ===
														"Vigente"
															? "text-green-500"
															: "text-red-500"
													}`}
												></i>
												{certicat.estado}
											</span>
										</div>
										<p className="text-sm text-gray-500">
											Número
										</p>
										<p className="font-medium">
											{certicat.numero_certicat}
										</p>
										<p className="text-sm text-gray-500 mt-2">
											Fecha de expiración
										</p>
										<p className="font-medium">
											{certicat.fecha_expiracion}
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-gray-50 px-6 py-4 text-right">
							<button
								className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 flex items-center justify-center inline-flex ml-auto"
								onClick={() => window.history.back()}
							>
								<i className="fas fa-arrow-left mr-2"></i>
								Volver atrás
							</button>
						</div>
					</div>
				</div>
			</ConsultasLayout>
		);
	} else {
		const { licencia, persona } = consultData as LicenciasData;

		return (
			<ConsultasLayout>
				<div className="flex flex-col items-center w-full bg-gray-50 p-3 sm:p-6">
					<h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 text-center">
						Consulta de Licencia
					</h1>

					<div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
						{/* Encabezado */}
						<div className="bg-primary text-white p-4 flex justify-between items-center">
							<div>
								<h2 className="text-xl font-semibold">
									Licencia N° {licencia.numero_licencia}
								</h2>
								<p>Tipo: {licencia.tipo_licencia}</p>
							</div>
							<div className="flex items-center">
								<span
									className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
										licencia.estado === "VIGENTE"
											? "bg-green-100 text-green-800"
											: "bg-red-100 text-red-800"
									}`}
								>
									<i
										className={`fas fa-check-circle mr-1 ${
											licencia.estado === "VIGENTE"
												? "text-green-500"
												: "text-red-500"
										}`}
									></i>
									{licencia.estado}
								</span>
							</div>
						</div>

						{/* Cuerpo */}
						<div className="p-6">
							{/* Información de la persona/empresa */}
							<div className="mb-6 pb-6 border-b border-gray-200">
								<h3 className="text-lg font-semibold text-gray-700 mb-3">
									<i className="fas fa-user-tie mr-2 text-primary"></i>
									Información del titular
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<p className="text-sm text-gray-500">
											Razón social
										</p>
										<p className="font-medium">
											{persona.razon_social}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Nombre comercial
										</p>
										<p className="font-medium">
											{persona.nombre_comercial || "-"}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											{persona.tipodoc}
										</p>
										<p className="font-medium">
											{persona.numero}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Representante
										</p>
										<p className="font-medium">
											{persona.representante}
										</p>
									</div>
								</div>
							</div>

							{/* Detalles de la licencia */}
							<div className="mb-6 pb-6 border-b border-gray-200">
								<h3 className="text-lg font-semibold text-gray-700 mb-3">
									<i className="fas fa-file-certificate mr-2 text-primary"></i>
									Detalles de la licencia
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<p className="text-sm text-gray-500">
											Actividad / CIIU
										</p>
										<p className="font-medium">
											{licencia.ciiu_actividad}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Área
										</p>
										<p className="font-medium">
											{licencia.area} m²
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Dirección
										</p>
										<p className="font-medium">
											{licencia.direccion}
										</p>
										{(licencia.numero_local ||
											licencia.urbanizacion) && (
											<p className="text-sm text-gray-600">
												{licencia.numero_local &&
													`N° ${licencia.numero_local}`}
												{licencia.urbanizacion &&
													`, ${licencia.urbanizacion}`}
											</p>
										)}
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Estado de entrega
										</p>
										<p
											className={`font-medium flex items-center ${
												licencia.estado_entrega ===
												"PENDIENTE"
													? "text-orange-600"
													: "text-green-600"
											}`}
										>
											<i
												className={`fas ${
													licencia.estado_entrega ===
													"PENDIENTE"
														? "fa-clock mr-1"
														: "fa-check-circle mr-1"
												}`}
											></i>
											{licencia.estado_entrega}
										</p>
										{licencia.fecha_entrega && (
											<p className="text-sm text-gray-600">
												Fecha: {licencia.fecha_entrega}
											</p>
										)}
									</div>
								</div>
							</div>

							{/* Información administrativa */}
							<div>
								<h3 className="text-lg font-semibold text-gray-700 mb-3">
									<i className="fas fa-clipboard-list mr-2 text-primary"></i>
									Información administrativa
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<p className="text-sm text-gray-500">
											N° de resolución
										</p>
										<p className="font-medium">
											{licencia.numero_resolucion}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											N° de expediente
										</p>
										<p className="font-medium">
											{licencia.numero_expediente}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Fecha de licencia
										</p>
										<p className="font-medium">
											{licencia.fecha_licencia}
										</p>
									</div>
									<div>
										<p className="text-sm text-gray-500">
											Fecha de resolución
										</p>
										<p className="font-medium">
											{licencia.fecha_resolucion}
										</p>
									</div>
									{licencia.observacion && (
										<div className="col-span-2">
											<p className="text-sm text-gray-500">
												Observaciones
											</p>
											<p className="font-medium">
												{licencia.observacion}
											</p>
										</div>
									)}
								</div>
							</div>
						</div>

						{/* Footer */}
						<div className="bg-gray-50 px-6 py-4 text-right">
							<button
								className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 flex items-center justify-center"
								onClick={() => window.history.back()}
							>
								<i className="fas fa-arrow-left mr-2"></i>
								Volver atrás
							</button>
						</div>
					</div>
				</div>
			</ConsultasLayout>
		);
	}
};
